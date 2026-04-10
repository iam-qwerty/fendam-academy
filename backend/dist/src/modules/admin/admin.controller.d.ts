import { AdminService } from './admin.service.js';
import { UpdateKycDto, UpdateEnrollmentDto, AssignInstructorDto } from './dto/admin.dto.js';
export declare class AdminController {
    private adminService;
    constructor(adminService: AdminService);
    getUsers(page?: string, limit?: string, role?: string): Promise<{
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
    getKycQueue(page?: string, limit?: string, status?: string): Promise<{
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
    updateKyc(id: string, dto: UpdateKycDto): Promise<{
        id: string;
        studentId: string;
        status: string;
        createdAt: Date;
        idCardUrl: string;
        paymentProofUrl: string;
        reviewComment: string | null;
    }>;
    updateEnrollment(id: string, dto: UpdateEnrollmentDto): Promise<{
        id: string;
        trackId: string;
        userId: string;
        kycStatus: string;
        enrollmentStatus: string;
        progressPercent: number;
    }>;
    assignInstructor(dto: AssignInstructorDto): Promise<{
        id: string;
        moduleId: string;
        instructorId: string;
        assignedAt: Date;
    }>;
    unassignInstructor(id: string): Promise<{
        id: string;
        moduleId: string;
        instructorId: string;
        assignedAt: Date;
    }>;
    getInstructorModules(page?: string, limit?: string): Promise<{
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
}
