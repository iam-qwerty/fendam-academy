import type { Request } from 'express';
import { InstructorsService } from './instructors.service.js';
import { CreateAssignmentDto, GradeSubmissionDto } from './dto/instructor.dto.js';
import '../auth/auth.types.js';
export declare class InstructorsController {
    private instructorsService;
    constructor(instructorsService: InstructorsService);
    getModules(req: Request): Promise<{
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
    createAssignment(dto: CreateAssignmentDto, req: Request): Promise<{
        id: string;
        title: string;
        moduleId: string;
        instructions: string;
        dueDate: Date;
        maxScore: number;
    }>;
    getSubmissions(req: Request, status?: string, page?: string, limit?: string): Promise<{
        data: ({
            assignment: {
                title: string;
                moduleId: string;
                maxScore: number;
            };
        } & {
            id: string;
            createdAt: Date;
            studentId: string;
            assignmentId: string;
            fileUrl: string;
            score: number | null;
            feedback: string | null;
            status: string;
        })[];
        total: number;
        page: number;
        totalPages: number;
    }>;
    gradeSubmission(id: string, dto: GradeSubmissionDto, req: Request): Promise<{
        id: string;
        createdAt: Date;
        studentId: string;
        assignmentId: string;
        fileUrl: string;
        score: number | null;
        feedback: string | null;
        status: string;
    }>;
}
