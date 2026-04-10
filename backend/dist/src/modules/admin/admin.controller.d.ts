import { AdminService } from './admin.service.js';
import { UpdateKycDto, UpdateEnrollmentDto, AssignInstructorDto } from './dto/admin.dto.js';
export declare class AdminController {
    private adminService;
    constructor(adminService: AdminService);
    getUsers(page?: string, limit?: string, role?: string): Promise<{
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
    getKycQueue(page?: string, limit?: string, status?: string): Promise<{
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
    updateKyc(id: string, dto: UpdateKycDto): Promise<{
        id: string;
        createdAt: Date;
        studentId: string;
        status: string;
        idCardUrl: string;
        paymentProofUrl: string;
        reviewComment: string | null;
    }>;
    updateEnrollment(id: string, dto: UpdateEnrollmentDto): Promise<{
        id: string;
        userId: string;
        trackId: string;
        kycStatus: string;
        enrollmentStatus: string;
        progressPercent: number;
    }>;
    assignInstructor(dto: AssignInstructorDto): Promise<{
        id: string;
        instructorId: string;
        moduleId: string;
        assignedAt: Date;
    }>;
    unassignInstructor(id: string): Promise<{
        id: string;
        instructorId: string;
        moduleId: string;
        assignedAt: Date;
    }>;
    getInstructorModules(page?: string, limit?: string): Promise<{
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
}
