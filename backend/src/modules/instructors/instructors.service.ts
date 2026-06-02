import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
  Inject,
} from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';
import { PrismaService } from '../../prisma/prisma.service.js';
import { UploadsService } from '../uploads/uploads.service.js';

@Injectable()
export class InstructorsService {
  constructor(
    private prisma: PrismaService,
    private uploadsService: UploadsService,
    @Inject(CACHE_MANAGER) private cache: Cache,
  ) {}

  /** Get modules assigned to this instructor via InstructorModule join */
  async getAssignedModules(instructorId: string) {
    const cacheKey = `instructor-modules:${instructorId}`;

    try {
      const cached = await this.cache.get(cacheKey);
      if (cached) return cached;
    } catch {
      // Cache failure — fall through to database
    }

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

    const result = assignments.map((a) => ({
      id: a.module.id,
      title: a.module.title,
      orderIndex: a.module.orderIndex,
      track: a.module.track,
      lessonCount: a.module.lessons.length,
      assignmentCount: a.module.assignments.length,
      assignedAt: a.assignedAt,
    }));

    try {
      await this.cache.set(cacheKey, result, 10 * 60 * 1000);
    } catch {
      // Cache failure — result is still returned
    }

    return result;
  }

  /** Get single module detail — verify instructor is assigned */
  async getModuleDetail(moduleId: string, instructorId: string) {
    const cacheKey = `module-detail:${moduleId}:${instructorId}`;

    try {
      const cached = await this.cache.get(cacheKey);
      if (cached) return cached;
    } catch {
      // Cache failure — fall through to database
    }

    const assignment = await this.prisma.instructorModule.findUnique({
      where: {
        instructorId_moduleId: { instructorId, moduleId },
      },
      include: {
        module: {
          include: {
            track: { select: { id: true, name: true } },
            _count: {
              select: { lessons: true, assignments: true },
            },
          },
        },
      },
    });

    if (!assignment)
      throw new ForbiddenException('Not assigned to this module');

    const result = {
      id: assignment.module.id,
      title: assignment.module.title,
      orderIndex: assignment.module.orderIndex,
      track: assignment.module.track,
      lessonCount: assignment.module._count.lessons,
      assignmentCount: assignment.module._count.assignments,
      assignedAt: assignment.assignedAt,
    };

    try {
      await this.cache.set(cacheKey, result, 10 * 60 * 1000);
    } catch {
      // Cache failure — result is still returned
    }

    return result;
  }

  /** Get assignments scoped to instructor's assigned modules */
  async getAssignments(instructorId: string, moduleId?: string) {
    const assignedModuleIds = (
      await this.prisma.instructorModule.findMany({
        where: { instructorId },
        select: { moduleId: true },
      })
    ).map((a) => a.moduleId);

    const where: Record<string, unknown> = {
      moduleId: moduleId ? moduleId : { in: assignedModuleIds },
    };

    // If a specific moduleId is requested, verify instructor is assigned to it
    if (moduleId && !assignedModuleIds.includes(moduleId)) {
      throw new ForbiddenException('Not assigned to this module');
    }

    const assignments = await this.prisma.assignment.findMany({
      where,
      orderBy: { dueDate: 'asc' },
    });

    return { data: assignments };
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

    // Batch-fetch student info to avoid N+1
    const studentIds = [...new Set(submissions.map((s) => s.studentId))];
    const students = await this.prisma.user.findMany({
      where: { id: { in: studentIds } },
      select: { id: true, name: true, email: true },
    });
    const studentMap = new Map(students.map((s) => [s.id, s]));

    const enriched = data.map((item) => ({
      ...item,
      student: studentMap.get(item.studentId) || null,
    }));

    return {
      data: enriched,
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
