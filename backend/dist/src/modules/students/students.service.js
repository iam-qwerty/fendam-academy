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
let StudentsService = class StudentsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getDashboard(userId) {
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
        if (!profile)
            throw new NotFoundException('Student profile not found');
        const progressPercent = await this.getProgress(userId, profile.trackId);
        const completedLessonIds = (await this.prisma.lessonCompletion.findMany({
            where: { studentId: userId },
            select: { lessonId: true },
        })).map((c) => c.lessonId);
        let nextLesson = null;
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
            if (nextLesson)
                break;
        }
        const allAssignments = profile.track.modules.flatMap((m) => m.assignments);
        const submittedAssignmentIds = (await this.prisma.submission.findMany({
            where: { studentId: userId },
            select: { assignmentId: true },
        })).map((s) => s.assignmentId);
        const pendingAssignments = allAssignments.filter((a) => !submittedAssignmentIds.includes(a.id) && new Date(a.dueDate) > new Date());
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
    async getProgress(studentId, trackId) {
        const totalLessons = await this.prisma.lesson.count({
            where: { module: { trackId } },
        });
        if (totalLessons === 0)
            return 0;
        const completedLessons = await this.prisma.lessonCompletion.count({
            where: { studentId, lesson: { module: { trackId } } },
        });
        return Math.round((completedLessons / totalLessons) * 100);
    }
    async getModules(userId) {
        const profile = await this.prisma.studentProfile.findUnique({
            where: { userId },
        });
        if (!profile)
            throw new NotFoundException('Student profile not found');
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
    async getLesson(lessonId, userId) {
        const profile = await this.prisma.studentProfile.findUnique({
            where: { userId },
        });
        if (!profile)
            throw new NotFoundException('Student profile not found');
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
        if (!lesson)
            throw new NotFoundException('Lesson not found');
        return {
            id: lesson.id,
            title: lesson.title,
            vimeoId: lesson.vimeoId,
            resources: lesson.resources,
            moduleTitle: lesson.module.title,
            isCompleted: lesson.completions.length > 0,
        };
    }
    async completeLesson(lessonId, userId) {
        const profile = await this.prisma.studentProfile.findUnique({
            where: { userId },
        });
        if (!profile)
            throw new NotFoundException('Student profile not found');
        const lesson = await this.prisma.lesson.findFirst({
            where: { id: lessonId, module: { trackId: profile.trackId } },
        });
        if (!lesson)
            throw new NotFoundException('Lesson not found');
        return this.prisma.lessonCompletion.upsert({
            where: {
                lessonId_studentId: { lessonId, studentId: userId },
            },
            create: { lessonId, studentId: userId },
            update: {},
        });
    }
    async createSubmission(assignmentId, fileKey, userId) {
        if (!fileKey.startsWith('uploads/'))
            throw new BadRequestException('Invalid file reference');
        const profile = await this.prisma.studentProfile.findUnique({
            where: { userId },
        });
        if (!profile)
            throw new NotFoundException('Student profile not found');
        const assignment = await this.prisma.assignment.findFirst({
            where: { id: assignmentId, module: { trackId: profile.trackId } },
        });
        if (!assignment)
            throw new NotFoundException('Assignment not found');
        const fileUrl = `https://${process.env.R2_PUBLIC_DOMAIN}/${fileKey}`;
        return this.prisma.submission.create({
            data: {
                assignmentId,
                studentId: userId,
                fileUrl,
                status: 'submitted',
            },
        });
    }
    async submitKyc(idCardFileKey, paymentProofFileKey, userId) {
        if (!idCardFileKey.startsWith('uploads/') ||
            !paymentProofFileKey.startsWith('uploads/'))
            throw new BadRequestException('Invalid file reference');
        const idCardUrl = `https://${process.env.R2_PUBLIC_DOMAIN}/${idCardFileKey}`;
        const paymentProofUrl = `https://${process.env.R2_PUBLIC_DOMAIN}/${paymentProofFileKey}`;
        await this.prisma.studentProfile.update({
            where: { userId },
            data: { kycStatus: 'submitted' },
        });
        return this.prisma.kYCRecord.create({
            data: {
                studentId: userId,
                idCardUrl,
                paymentProofUrl,
                status: 'submitted',
            },
        });
    }
};
StudentsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], StudentsService);
export { StudentsService };
//# sourceMappingURL=students.service.js.map