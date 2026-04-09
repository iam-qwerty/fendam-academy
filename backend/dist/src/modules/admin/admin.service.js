var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NotFoundException, BadRequestException, } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
let AdminService = class AdminService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getUsers(page = 1, limit = 20, role) {
        const where = {};
        if (role)
            where.role = role;
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
    async updateKyc(kycId, status, reviewComment) {
        const validStatuses = ['under_review', 'approved', 'rejected'];
        if (!validStatuses.includes(status))
            throw new BadRequestException(`Invalid status: ${status}`);
        const kyc = await this.prisma.kYCRecord.findUnique({
            where: { id: kycId },
        });
        if (!kyc)
            throw new NotFoundException('KYC record not found');
        const updated = await this.prisma.kYCRecord.update({
            where: { id: kycId },
            data: { status, reviewComment },
        });
        if (status === 'approved') {
            await this.prisma.studentProfile.update({
                where: { userId: kyc.studentId },
                data: { kycStatus: 'approved', enrollmentStatus: 'approved' },
            });
        }
        else if (status === 'rejected') {
            await this.prisma.studentProfile.update({
                where: { userId: kyc.studentId },
                data: { kycStatus: 'rejected' },
            });
        }
        return updated;
    }
    async updateEnrollment(userId, enrollmentStatus) {
        const validStatuses = [
            'applied',
            'pending',
            'approved',
            'enrolled',
            'completed',
        ];
        if (!validStatuses.includes(enrollmentStatus))
            throw new BadRequestException(`Invalid enrollment status: ${enrollmentStatus}`);
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
    async assignInstructor(instructorId, moduleId) {
        const instructor = await this.prisma.user.findUnique({
            where: { id: instructorId },
        });
        if (!instructor || instructor.role !== 'instructor')
            throw new BadRequestException('User is not an instructor');
        const mod = await this.prisma.module.findUnique({
            where: { id: moduleId },
        });
        if (!mod)
            throw new NotFoundException('Module not found');
        return this.prisma.instructorModule.create({
            data: { instructorId, moduleId },
        });
    }
    async unassignInstructor(assignmentId) {
        const assignment = await this.prisma.instructorModule.findUnique({
            where: { id: assignmentId },
        });
        if (!assignment)
            throw new NotFoundException('Assignment not found');
        return this.prisma.instructorModule.delete({
            where: { id: assignmentId },
        });
    }
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
    async getKycQueue(page = 1, limit = 20, status) {
        const where = {};
        if (status)
            where.status = status;
        const [records, total] = await Promise.all([
            this.prisma.kYCRecord.findMany({
                where,
                orderBy: { createdAt: 'desc' },
                skip: (page - 1) * limit,
                take: limit,
            }),
            this.prisma.kYCRecord.count({ where }),
        ]);
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
};
AdminService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], AdminService);
export { AdminService };
//# sourceMappingURL=admin.service.js.map