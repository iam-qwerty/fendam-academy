import { PrismaService } from '../../prisma/prisma.service.js';
export declare class AdminService {
    private prisma;
    constructor(prisma: PrismaService);
    getUsers(page?: number, limit?: number, role?: string): Promise<{
        data: {
            id: string;
            email: string;
            name: string | null;
            role: string;
            emailVerified: boolean;
            createdAt: Date;
            studentProfile: {
                kycStatus: string;
                enrollmentStatus: string;
                track: {
                    name: string;
                };
            } | null;
        }[];
        total: number;
        page: number;
        totalPages: number;
    }>;
    updateKyc(kycId: string, status: string, reviewComment?: string): Promise<{
        id: string;
        createdAt: Date;
        studentId: string;
        status: string;
        idCardUrl: string;
        paymentProofUrl: string;
        reviewComment: string | null;
    }>;
    updateEnrollment(userId: string, enrollmentStatus: string): Promise<{
        id: string;
        userId: string;
        trackId: string;
        kycStatus: string;
        enrollmentStatus: string;
        progressPercent: number;
    }>;
    assignInstructor(instructorId: string, moduleId: string): Promise<{
        id: string;
        instructorId: string;
        moduleId: string;
        assignedAt: Date;
    }>;
    unassignInstructor(assignmentId: string): Promise<{
        id: string;
        instructorId: string;
        moduleId: string;
        assignedAt: Date;
    }>;
    getInstructorModules(page?: number, limit?: number): Promise<{
        data: {
            id: string;
            instructor: {
                id: string;
                email: string;
                name: string | null;
            } | {
                id: string;
            };
            module: {
                title: string;
                track: {
                    name: string;
                };
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
                email: string;
                name: string | null;
            } | undefined;
            id: string;
            createdAt: Date;
            studentId: string;
            status: string;
            idCardUrl: string;
            paymentProofUrl: string;
            reviewComment: string | null;
        }[];
        total: number;
        page: number;
        totalPages: number;
    }>;
}
