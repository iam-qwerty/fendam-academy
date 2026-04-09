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
import { Controller, Get, Post, Param, Body, UseGuards, Req, } from '@nestjs/common';
import { StudentsService } from './students.service.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { RolesGuard } from '../auth/roles.guard.js';
import { EmailVerifiedGuard } from '../auth/verified.guard.js';
import { Roles } from '../auth/roles.decorator.js';
import { CreateSubmissionDto, SubmitKycDto } from './dto/student.dto.js';
import '../auth/auth.types.js';
let StudentsController = class StudentsController {
    studentsService;
    constructor(studentsService) {
        this.studentsService = studentsService;
    }
    getDashboard(req) {
        return this.studentsService.getDashboard(req.user.sub);
    }
    getModules(req) {
        return this.studentsService.getModules(req.user.sub);
    }
    getLesson(id, req) {
        return this.studentsService.getLesson(id, req.user.sub);
    }
    completeLesson(id, req) {
        return this.studentsService.completeLesson(id, req.user.sub);
    }
    createSubmission(dto, req) {
        return this.studentsService.createSubmission(dto.assignmentId, dto.fileKey, req.user.sub);
    }
    submitKyc(dto, req) {
        return this.studentsService.submitKyc(dto.idCardFileKey, dto.paymentProofFileKey, req.user.sub);
    }
};
__decorate([
    Get('dashboard'),
    __param(0, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StudentsController.prototype, "getDashboard", null);
__decorate([
    Get('modules'),
    __param(0, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StudentsController.prototype, "getModules", null);
__decorate([
    Get('lessons/:id'),
    UseGuards(EmailVerifiedGuard),
    __param(0, Param('id')),
    __param(1, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], StudentsController.prototype, "getLesson", null);
__decorate([
    Post('lessons/:id/complete'),
    UseGuards(EmailVerifiedGuard),
    __param(0, Param('id')),
    __param(1, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], StudentsController.prototype, "completeLesson", null);
__decorate([
    Post('submissions'),
    UseGuards(EmailVerifiedGuard),
    __param(0, Body()),
    __param(1, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateSubmissionDto, Object]),
    __metadata("design:returntype", void 0)
], StudentsController.prototype, "createSubmission", null);
__decorate([
    Post('kyc'),
    __param(0, Body()),
    __param(1, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SubmitKycDto, Object]),
    __metadata("design:returntype", void 0)
], StudentsController.prototype, "submitKyc", null);
StudentsController = __decorate([
    Controller('student'),
    UseGuards(JwtAuthGuard, RolesGuard),
    Roles('student'),
    __metadata("design:paramtypes", [StudentsService])
], StudentsController);
export { StudentsController };
//# sourceMappingURL=students.controller.js.map