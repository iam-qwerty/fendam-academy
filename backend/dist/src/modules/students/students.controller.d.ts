import type { Request } from 'express';
import { StudentsService } from './students.service.js';
import { CreateSubmissionDto, SubmitKycDto } from './dto/student.dto.js';
import '../auth/auth.types.js';
export declare class StudentsController {
    private studentsService;
    constructor(studentsService: StudentsService);
    getDashboard(req: Request): Promise<{
        track: {
            id: string;
            name: string;
        };
        enrollmentStatus: string;
        kycStatus: string;
        progressPercent: number;
        nextLesson: {
            id: string;
            title: string;
            moduleTitle: string;
        } | null;
        pendingAssignments: {
            id: string;
            title: string;
            dueDate: Date;
        }[];
    }>;
    getModules(req: Request): Promise<({
        assignments: {
            id: string;
            title: string;
            dueDate: Date;
        }[];
        lessons: {
            id: string;
            title: string;
            orderIndex: number;
        }[];
    } & {
        id: string;
        trackId: string;
        title: string;
        orderIndex: number;
    })[]>;
    getLesson(id: string, req: Request): Promise<{
        id: string;
        title: string;
        vimeoId: string;
        resources: import("@prisma/client/runtime/client").JsonValue;
        moduleTitle: string;
        isCompleted: boolean;
    }>;
    completeLesson(id: string, req: Request): Promise<{
        id: string;
        lessonId: string;
        studentId: string;
        completedAt: Date;
    }>;
    createSubmission(dto: CreateSubmissionDto, req: Request): Promise<{
        id: string;
        createdAt: Date;
        studentId: string;
        assignmentId: string;
        fileUrl: string;
        score: number | null;
        feedback: string | null;
        status: string;
    }>;
    submitKyc(dto: SubmitKycDto, req: Request): Promise<{
        id: string;
        createdAt: Date;
        studentId: string;
        status: string;
        idCardUrl: string;
        paymentProofUrl: string;
        reviewComment: string | null;
    }>;
}
