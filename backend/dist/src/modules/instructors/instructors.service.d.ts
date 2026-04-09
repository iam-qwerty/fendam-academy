import { PrismaService } from '../../prisma/prisma.service.js';
export declare class InstructorsService {
    private prisma;
    constructor(prisma: PrismaService);
    getAssignedModules(instructorId: string): Promise<{
        id: string;
        title: string;
        orderIndex: number;
        track: {
            id: string;
            name: string;
        };
        lessonCount: number;
        assignmentCount: number;
        assignedAt: Date;
    }[]>;
    createAssignment(instructorId: string, moduleId: string, title: string, instructions: string, dueDate: string, maxScore: number): Promise<{
        id: string;
        title: string;
        moduleId: string;
        instructions: string;
        dueDate: Date;
        maxScore: number;
    }>;
    getSubmissions(instructorId: string, status?: string, page?: number, limit?: number): Promise<{
        data: ({
            assignment: {
                title: string;
                moduleId: string;
                maxScore: number;
            };
        } & {
            id: string;
            studentId: string;
            assignmentId: string;
            fileUrl: string;
            score: number | null;
            feedback: string | null;
            status: string;
            createdAt: Date;
        })[];
        total: number;
        page: number;
        totalPages: number;
    }>;
    gradeSubmission(instructorId: string, submissionId: string, score: number, feedback: string | undefined, status: string): Promise<{
        id: string;
        studentId: string;
        assignmentId: string;
        fileUrl: string;
        score: number | null;
        feedback: string | null;
        status: string;
        createdAt: Date;
    }>;
}
