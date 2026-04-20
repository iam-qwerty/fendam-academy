import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { UploadsService } from '../uploads/uploads.service.js';

@Injectable()
export class StudentsService {
  constructor(
    private prisma: PrismaService,
    private uploadsService: UploadsService,
  ) {}

  async getDashboard(userId: string) {
    const profile = await this.prisma.studentProfile.findUnique({
      where: { userId },
      include: {
        track: {
          include: {
            modules: {
              orderBy: { orderIndex: 'asc' },
              include: {
                lessons: { orderBy: { orderIndex: 'asc' } },
                assignments: true,
              },
            },
          },
        },
      },
    });

    if (!profile) throw new NotFoundException('Student profile not found');

    // Calculate progress
    const progressPercent = await this.getProgress(userId, profile.trackId);

    // Find next lesson (first incomplete lesson in order)
    const completedLessonIds = (
      await this.prisma.lessonCompletion.findMany({
        where: { studentId: userId },
        select: { lessonId: true },
      })
    ).map((c) => c.lessonId);

    let nextLesson: { id: string; title: string; moduleTitle: string } | null =
      null;
    for (const mod of profile.track.modules) {
      for (const lesson of mod.lessons) {
        if (!completedLessonIds.includes(lesson.id)) {
          nextLesson = {
            id: lesson.id,
            title: lesson.title,
            moduleTitle: mod.title,
          };
          break;
        }
      }
      if (nextLesson) break;
    }

    // Pending assignments (no submission from this student, due date not passed)
    const allAssignments = profile.track.modules.flatMap((m) => m.assignments);
    const submittedAssignmentIds = (
      await this.prisma.submission.findMany({
        where: { studentId: userId },
        select: { assignmentId: true },
      })
    ).map((s) => s.assignmentId);

    const pendingAssignments = allAssignments.filter(
      (a) =>
        !submittedAssignmentIds.includes(a.id) &&
        new Date(a.dueDate) > new Date(),
    );

    return {
      track: { id: profile.track.id, name: profile.track.name },
      enrollmentStatus: profile.enrollmentStatus,
      kycStatus: profile.kycStatus,
      progressPercent,
      nextLesson,
      pendingAssignments: pendingAssignments.map((a) => ({
        id: a.id,
        title: a.title,
        dueDate: a.dueDate,
      })),
    };
  }

  async getProgress(studentId: string, trackId: string): Promise<number> {
    const totalLessons = await this.prisma.lesson.count({
      where: { module: { trackId } },
    });
    if (totalLessons === 0) return 0;

    const completedLessons = await this.prisma.lessonCompletion.count({
      where: { studentId, lesson: { module: { trackId } } },
    });

    return Math.round((completedLessons / totalLessons) * 100);
  }

  async getModules(userId: string) {
    const profile = await this.prisma.studentProfile.findUnique({
      where: { userId },
    });
    if (!profile) throw new NotFoundException('Student profile not found');

    return this.prisma.module.findMany({
      where: { trackId: profile.trackId },
      orderBy: { orderIndex: 'asc' },
      include: {
        lessons: {
          orderBy: { orderIndex: 'asc' },
          select: { id: true, title: true, orderIndex: true },
        },
        assignments: {
          select: { id: true, title: true, dueDate: true },
        },
      },
    });
  }

  async getLesson(lessonId: string, userId: string) {
    // IDOR prevention: lesson's module must belong to student's enrolled track
    const profile = await this.prisma.studentProfile.findUnique({
      where: { userId },
    });
    if (!profile) throw new NotFoundException('Student profile not found');

    const lesson = await this.prisma.lesson.findFirst({
      where: {
        id: lessonId,
        module: { trackId: profile.trackId },
      },
      include: {
        module: { select: { title: true } },
        completions: {
          where: { studentId: userId },
          select: { id: true },
        },
      },
    });

    if (!lesson) throw new NotFoundException('Lesson not found');

    return {
      id: lesson.id,
      title: lesson.title,
      vimeoId: lesson.vimeoId,
      resources: lesson.resources,
      moduleTitle: lesson.module.title,
      isCompleted: lesson.completions.length > 0,
    };
  }

  async completeLesson(lessonId: string, userId: string) {
    // Verify lesson belongs to student's track
    const profile = await this.prisma.studentProfile.findUnique({
      where: { userId },
    });
    if (!profile) throw new NotFoundException('Student profile not found');

    const lesson = await this.prisma.lesson.findFirst({
      where: { id: lessonId, module: { trackId: profile.trackId } },
    });
    if (!lesson) throw new NotFoundException('Lesson not found');

    // Upsert to avoid duplicate errors
    return this.prisma.lessonCompletion.upsert({
      where: {
        lessonId_studentId: { lessonId, studentId: userId },
      },
      create: { lessonId, studentId: userId },
      update: {},
    });
  }

  async createSubmission(
    assignmentId: string,
    fileKey: string,
    userId: string,
  ) {
    const normalizedFileKey = this.uploadsService.validateFileKey(fileKey);

    // IDOR: verify assignment belongs to student's track
    const profile = await this.prisma.studentProfile.findUnique({
      where: { userId },
    });
    if (!profile) throw new NotFoundException('Student profile not found');

    const assignment = await this.prisma.assignment.findFirst({
      where: { id: assignmentId, module: { trackId: profile.trackId } },
      select: { id: true, dueDate: true },
    });
    if (!assignment) throw new NotFoundException('Assignment not found');

    if (assignment.dueDate <= new Date()) {
      throw new BadRequestException('Assignment deadline has passed');
    }

    const existingSubmission = await this.prisma.submission.findUnique({
      where: {
        assignmentId_studentId: {
          assignmentId,
          studentId: userId,
        },
      },
      select: { id: true },
    });
    if (existingSubmission) {
      throw new ConflictException(
        'Assignment already submitted by this student',
      );
    }

    return this.prisma.submission.create({
      data: {
        assignmentId,
        studentId: userId,
        fileKey: normalizedFileKey,
        status: 'submitted',
      },
    });
  }

  async submitKyc(
    idCardFileKey: string,
    paymentProofFileKey: string,
    userId: string,
  ) {
    const normalizedIdCardFileKey =
      this.uploadsService.validateFileKey(idCardFileKey);
    const normalizedPaymentProofFileKey =
      this.uploadsService.validateFileKey(paymentProofFileKey);

    // Update student profile KYC status
    await this.prisma.studentProfile.update({
      where: { userId },
      data: { kycStatus: 'submitted' },
    });

    return this.prisma.kYCRecord.create({
      data: {
        studentId: userId,
        idCardFileKey: normalizedIdCardFileKey,
        paymentProofFileKey: normalizedPaymentProofFileKey,
        status: 'submitted',
      },
    });
  }
}
