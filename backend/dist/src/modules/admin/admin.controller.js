var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Get, Patch, Post, Delete, Body, Param, Query, UseGuards, } from '@nestjs/common';
import { AdminService } from './admin.service.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { RolesGuard } from '../auth/roles.guard.js';
import { Roles } from '../auth/roles.decorator.js';
import { UpdateKycDto, UpdateEnrollmentDto, AssignInstructorDto, } from './dto/admin.dto.js';
let AdminController = class AdminController {
    adminService;
    constructor(adminService) {
        this.adminService = adminService;
    }
    getUsers(page, limit, role) {
        return this.adminService.getUsers(page ? parseInt(page, 10) : 1, limit ? parseInt(limit, 10) : 20, role);
    }
    getKycQueue(page, limit, status) {
        return this.adminService.getKycQueue(page ? parseInt(page, 10) : 1, limit ? parseInt(limit, 10) : 20, status);
    }
    updateKyc(id, dto) {
        return this.adminService.updateKyc(id, dto.status, dto.reviewComment);
    }
    updateEnrollment(id, dto) {
        return this.adminService.updateEnrollment(id, dto.enrollmentStatus);
    }
    assignInstructor(dto) {
        return this.adminService.assignInstructor(dto.instructorId, dto.moduleId);
    }
    unassignInstructor(id) {
        return this.adminService.unassignInstructor(id);
    }
    getInstructorModules(page, limit) {
        return this.adminService.getInstructorModules(page ? parseInt(page, 10) : 1, limit ? parseInt(limit, 10) : 20);
    }
};
__decorate([
    Get('users'),
    __param(0, Query('page')),
    __param(1, Query('limit')),
    __param(2, Query('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "getUsers", null);
__decorate([
    Get('kyc'),
    __param(0, Query('page')),
    __param(1, Query('limit')),
    __param(2, Query('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "getKycQueue", null);
__decorate([
    Patch('kyc/:id'),
    __param(0, Param('id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateKycDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "updateKyc", null);
__decorate([
    Patch('enrollment/:id'),
    __param(0, Param('id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateEnrollmentDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "updateEnrollment", null);
__decorate([
    Post('instructor-modules'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AssignInstructorDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "assignInstructor", null);
__decorate([
    Delete('instructor-modules/:id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "unassignInstructor", null);
__decorate([
    Get('instructor-modules'),
    __param(0, Query('page')),
    __param(1, Query('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "getInstructorModules", null);
AdminController = __decorate([
    Controller('admin'),
    UseGuards(JwtAuthGuard, RolesGuard),
    Roles('admin'),
    __metadata("design:paramtypes", [AdminService])
], AdminController);
export { AdminController };
//# sourceMappingURL=admin.controller.js.map