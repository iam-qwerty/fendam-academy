import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { UploadsService } from '../uploads/uploads.service.js';

@Injectable()
export class InstructorsService {
  constructor(
    private prisma: PrismaService,
    private uploadsService: UploadsService,
  ) {}

  /** Get modules assigned to this instructor via InstructorModule join */
  async getAssignedModules(instructorId: string) {
    const assignments = await this.prisma.instructorModule.findMany({
      where: { instructorId },
      include: {
        module: {
          include: {
            track: { select: { id: true, name: true } },
            lessons: { select: { id: true }, orderBy: { orderIndex: 'asc' } },
            assignments: { select: { id: true } },
          },
        },
      },
    });

    return assignments.map((a) => ({
      id: a.module.id,
      title: a.module.title,
      orderIndex: a.module.orderIndex,
      track: a.module.track,
      lessonCount: a.module.lessons.length,
      assignmentCount: a.module.assignments.length,
      assignedAt: a.assignedAt,
    }));
  }

  /** Create assignment — only for modules assigned to this instructor */
  async createAssignment(
    instructorId: string,
    moduleId: string,
    title: string,
    instructions: string,
    dueDate: string,
    maxScore: number,
  ) {
    const parsedDueDate = new Date(dueDate);
    if (Number.isNaN(parsedDueDate.getTime())) {
      throw new BadRequestException('Due date must be a valid ISO date string');
    }
    if (parsedDueDate <= new Date()) {
      throw new BadRequestException('Due date must be in the future');
    }

    // Verify instructor is assigned to this module
    const assigned = await this.prisma.instructorModule.findUnique({
      where: {
        instructorId_moduleId: { instructorId, moduleId },
      },
    });
    if (!assigned) throw new ForbiddenException('Not assigned to this module');

    return this.prisma.assignment.create({
      data: {
        moduleId,
        title,
        instructions,
        dueDate: parsedDueDate,
        maxScore,
      },
    });
  }

  /** Get submissions scoped to instructor's assigned modules */
  async getSubmissions(
    instructorId: string,
    status?: string,
    page = 1,
    limit = 20,
  ) {
    const validStatuses = ['submitted', 'graded', 'returned'];
    if (status && !validStatuses.includes(status)) {
      throw new BadRequestException('Invalid submission status filter');
    }

    // Get instructor's assigned module IDs
    const assignedModuleIds = (
      await this.prisma.instructorModule.findMany({
        where: { instructorId },
        select: { moduleId: true },
      })
    ).map((a) => a.moduleId);

    const where: Record<string, unknown> = {
      assignment: { moduleId: { in: assignedModuleIds } },
    };
    if (status) where.status = status;

    const [submissions, total] = await Promise.all([
      this.prisma.submission.findMany({
        where,
        include: {
          assignment: {
            select: { title: true, maxScore: true, moduleId: true },
          },
        },
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.submission.count({ where }),
    ]);

    const data = await Promise.all(
      submissions.map(async (submission) => ({
        id: submission.id,
        studentId: submission.studentId,
        score: submission.score,
        feedback: submission.feedback,
        status: submission.status,
        createdAt: submission.createdAt,
        assignment: submission.assignment,
        fileReadUrl: await this.uploadsService.getSignedReadUrl(
          this.uploadsService.getStoredFileKey(
            submission.fileKey,
            submission.fileUrl,
          ),
        ),
      })),
    );

    return {
      data,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    };
  }

  /** Grade a submission — only if it belongs to an assigned module */
  async gradeSubmission(
    instructorId: string,
    submissionId: string,
    score: number,
    feedback: string | undefined,
    status: string,
  ) {
    if (!['graded', 'returned'].includes(status)) {
      throw new BadRequestException('Invalid submission status');
    }

    const submission = await this.prisma.submission.findUnique({
      where: { id: submissionId },
      include: { assignment: { select: { moduleId: true, maxScore: true } } },
    });
    if (!submission) throw new NotFoundException('Submission not found');

    if (score > submission.assignment.maxScore) {
      throw new BadRequestException('Score exceeds assignment max score');
    }

    // IDOR: verify instructor is assigned to this module
    const assigned = await this.prisma.instructorModule.findUnique({
      where: {
        instructorId_moduleId: {
          instructorId,
          moduleId: submission.assignment.moduleId,
        },
      },
    });
    if (!assigned) throw new ForbiddenException('Not assigned to this module');

    return this.prisma.submission.update({
      where: { id: submissionId },
      data: { score, feedback, status },
    });
  }
}
