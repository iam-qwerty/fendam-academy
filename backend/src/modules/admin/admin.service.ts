import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  /** Paginated user list */
  async getUsers(page = 1, limit = 20, role?: string) {
    const where: Record<string, unknown> = {};
    if (role) where.role = role;

    const [users, total] = await Promise.all([
      this.prisma.user.findMany({
        where,
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
          emailVerified: true,
          createdAt: true,
          studentProfile: {
            select: {
              enrollmentStatus: true,
              kycStatus: true,
              track: { select: { name: true } },
            },
          },
        },
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.user.count({ where }),
    ]);

    return {
      data: users,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    };
  }

  /** Approve or reject KYC */
  async updateKyc(
    kycId: string,
    status: string,
    reviewComment?: string,
  ) {
    const validStatuses = ['under_review', 'approved', 'rejected'];
    if (!validStatuses.includes(status))
      throw new BadRequestException(`Invalid status: ${status}`);

    const kyc = await this.prisma.kYCRecord.findUnique({
      where: { id: kycId },
    });
    if (!kyc) throw new NotFoundException('KYC record not found');

    const updated = await this.prisma.kYCRecord.update({
      where: { id: kycId },
      data: { status, reviewComment },
    });

    // If approved, update student profile
    if (status === 'approved') {
      await this.prisma.studentProfile.update({
        where: { userId: kyc.studentId },
        data: { kycStatus: 'approved', enrollmentStatus: 'approved' },
      });
    } else if (status === 'rejected') {
      await this.prisma.studentProfile.update({
        where: { userId: kyc.studentId },
        data: { kycStatus: 'rejected' },
      });
    }

    return updated;
  }

  /** Update enrollment status */
  async updateEnrollment(userId: string, enrollmentStatus: string) {
    const validStatuses = [
      'applied',
      'pending',
      'approved',
      'enrolled',
      'completed',
    ];
    if (!validStatuses.includes(enrollmentStatus))
      throw new BadRequestException(
        `Invalid enrollment status: ${enrollmentStatus}`,
      );

    const profile = await this.prisma.studentProfile.findUnique({
      where: { userId },
    });
    if (!profile)
      throw new NotFoundException('Student profile not found');

    return this.prisma.studentProfile.update({
      where: { userId },
      data: { enrollmentStatus },
    });
  }

  /** Assign instructor to module */
  async assignInstructor(instructorId: string, moduleId: string) {
    // Verify instructor exists and has instructor role
    const instructor = await this.prisma.user.findUnique({
      where: { id: instructorId },
    });
    if (!instructor || instructor.role !== 'instructor')
      throw new BadRequestException('User is not an instructor');

    // Verify module exists
    const mod = await this.prisma.module.findUnique({
      where: { id: moduleId },
    });
    if (!mod) throw new NotFoundException('Module not found');

    return this.prisma.instructorModule.create({
      data: { instructorId, moduleId },
    });
  }

  /** Unassign instructor from module */
  async unassignInstructor(assignmentId: string) {
    const assignment = await this.prisma.instructorModule.findUnique({
      where: { id: assignmentId },
    });
    if (!assignment)
      throw new NotFoundException('Assignment not found');

    return this.prisma.instructorModule.delete({
      where: { id: assignmentId },
    });
  }

  /** List all instructor→module assignments */
  async getInstructorModules(page = 1, limit = 20) {
    const [assignments, total] = await Promise.all([
      this.prisma.instructorModule.findMany({
        include: {
          module: {
            select: {
              title: true,
              track: { select: { name: true } },
            },
          },
        },
        orderBy: { assignedAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.instructorModule.count(),
    ]);

    // Fetch instructor names separately (User doesn't have direct relation to InstructorModule)
    const instructorIds = [
      ...new Set(assignments.map((a) => a.instructorId)),
    ];
    const instructors = await this.prisma.user.findMany({
      where: { id: { in: instructorIds } },
      select: { id: true, name: true, email: true },
    });
    const instructorMap = new Map(instructors.map((i) => [i.id, i]));

    return {
      data: assignments.map((a) => ({
        id: a.id,
        instructor: instructorMap.get(a.instructorId) || {
          id: a.instructorId,
        },
        module: a.module,
        assignedAt: a.assignedAt,
      })),
      total,
      page,
      totalPages: Math.ceil(total / limit),
    };
  }

  /** Get KYC queue */
  async getKycQueue(page = 1, limit = 20, status?: string) {
    const where: Record<string, unknown> = {};
    if (status) where.status = status;

    const [records, total] = await Promise.all([
      this.prisma.kYCRecord.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.kYCRecord.count({ where }),
    ]);

    // Fetch student info
    const studentIds = [...new Set(records.map((r) => r.studentId))];
    const students = await this.prisma.user.findMany({
      where: { id: { in: studentIds } },
      select: { id: true, name: true, email: true },
    });
    const studentMap = new Map(students.map((s) => [s.id, s]));

    return {
      data: records.map((r) => ({
        ...r,
        student: studentMap.get(r.studentId),
      })),
      total,
      page,
      totalPages: Math.ceil(total / limit),
    };
  }
}
