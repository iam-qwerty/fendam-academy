import { PrismaService } from '../../prisma/prisma.service.js';
export declare class AdminService {
    private prisma;
    constructor(prisma: PrismaService);
    getUsers(page?: number, limit?: number, role?: string): Promise<{
        data: {
            id: string;
            name: string | null;
            studentProfile: {
                track: {
                    name: string;
                };
                kycStatus: string;
                enrollmentStatus: string;
            } | null;
            email: string;
            role: string;
            emailVerified: boolean;
            createdAt: Date;
        }[];
        total: number;
        page: number;
        totalPages: number;
    }>;
    updateKyc(kycId: string, status: string, reviewComment?: string): Promise<{
        id: string;
        studentId: string;
        status: string;
        createdAt: Date;
        idCardUrl: string;
        paymentProofUrl: string;
        reviewComment: string | null;
    }>;
    updateEnrollment(userId: string, enrollmentStatus: string): Promise<{
        id: string;
        trackId: string;
        userId: string;
        kycStatus: string;
        enrollmentStatus: string;
        progressPercent: number;
    }>;
    assignInstructor(instructorId: string, moduleId: string): Promise<{
        id: string;
        moduleId: string;
        instructorId: string;
        assignedAt: Date;
    }>;
    unassignInstructor(assignmentId: string): Promise<{
        id: string;
        moduleId: string;
        instructorId: string;
        assignedAt: Date;
    }>;
    getInstructorModules(page?: number, limit?: number): Promise<{
        data: {
            id: string;
            instructor: {
                id: string;
                name: string | null;
                email: string;
            } | {
                id: string;
            };
            module: {
                track: {
                    name: string;
                };
                title: string;
            };
            assignedAt: Date;
        }[];
        total: number;
        page: number;
        totalPages: number;
    }>;
    getKycQueue(page?: number, limit?: number, status?: string): Promise<{
        data: {
            student: {
                id: string;
                name: string | null;
                email: string;
            } | undefined;
            id: string;
            studentId: string;
            status: string;
            createdAt: Date;
            idCardUrl: string;
            paymentProofUrl: string;
            reviewComment: string | null;
        }[];
        total: number;
        page: number;
        totalPages: number;
    }>;
}
