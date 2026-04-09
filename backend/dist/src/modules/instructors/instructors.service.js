var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NotFoundException, ForbiddenException, } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
let InstructorsService = class InstructorsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAssignedModules(instructorId) {
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
    async createAssignment(instructorId, moduleId, title, instructions, dueDate, maxScore) {
        const assigned = await this.prisma.instructorModule.findUnique({
            where: {
                instructorId_moduleId: { instructorId, moduleId },
            },
        });
        if (!assigned)
            throw new ForbiddenException('Not assigned to this module');
        return this.prisma.assignment.create({
            data: {
                moduleId,
                title,
                instructions,
                dueDate: new Date(dueDate),
                maxScore,
            },
        });
    }
    async getSubmissions(instructorId, status, page = 1, limit = 20) {
        const assignedModuleIds = (await this.prisma.instructorModule.findMany({
            where: { instructorId },
            select: { moduleId: true },
        })).map((a) => a.moduleId);
        const where = {
            assignment: { moduleId: { in: assignedModuleIds } },
        };
        if (status)
            where.status = status;
        const [submissions, total] = await Promise.all([
            this.prisma.submission.findMany({
                where,
                include: {
                    assignment: { select: { title: true, maxScore: true, moduleId: true } },
                },
                orderBy: { createdAt: 'desc' },
                skip: (page - 1) * limit,
                take: limit,
            }),
            this.prisma.submission.count({ where }),
        ]);
        return {
            data: submissions,
            total,
            page,
            totalPages: Math.ceil(total / limit),
        };
    }
    async gradeSubmission(instructorId, submissionId, score, feedback, status) {
        const submission = await this.prisma.submission.findUnique({
            where: { id: submissionId },
            include: { assignment: { select: { moduleId: true } } },
        });
        if (!submission)
            throw new NotFoundException('Submission not found');
        const assigned = await this.prisma.instructorModule.findUnique({
            where: {
                instructorId_moduleId: {
                    instructorId,
                    moduleId: submission.assignment.moduleId,
                },
            },
        });
        if (!assigned)
            throw new ForbiddenException('Not assigned to this module');
        return this.prisma.submission.update({
            where: { id: submissionId },
            data: { score, feedback, status },
        });
    }
};
InstructorsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], InstructorsService);
export { InstructorsService };
//# sourceMappingURL=instructors.service.js.map