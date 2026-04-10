import { PrismaService } from '../../prisma/prisma.service.js';
export declare class StudentsService {
    private prisma;
    constructor(prisma: PrismaService);
    getDashboard(userId: string): Promise<{
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
    getProgress(studentId: string, trackId: string): Promise<number>;
    getModules(userId: string): Promise<({
        assignments: {
            id: string;
            title: string;
            dueDate: Date;
        }[];
        lessons: {
            id: string;
            orderIndex: number;
            title: string;
        }[];
    } & {
        id: string;
        trackId: string;
        orderIndex: number;
        title: string;
    })[]>;
    getLesson(lessonId: string, userId: string): Promise<{
        id: string;
        title: string;
        vimeoId: string;
        resources: import("@prisma/client/runtime/client").JsonValue;
        moduleTitle: string;
        isCompleted: boolean;
    }>;
    completeLesson(lessonId: string, userId: string): Promise<{
        id: string;
        lessonId: string;
        studentId: string;
        completedAt: Date;
    }>;
    createSubmission(assignmentId: string, fileKey: string, userId: string): Promise<{
        id: string;
        studentId: string;
        assignmentId: string;
        fileUrl: string;
        score: number | null;
        feedback: string | null;
        status: string;
        createdAt: Date;
    }>;
    submitKyc(idCardFileKey: string, paymentProofFileKey: string, userId: string): Promise<{
        id: string;
        studentId: string;
        status: string;
        createdAt: Date;
        idCardUrl: string;
        paymentProofUrl: string;
        reviewComment: string | null;
    }>;
}
