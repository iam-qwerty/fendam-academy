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
import { Controller, Get, Post, Patch, Body, Param, Query, UseGuards, Req, } from '@nestjs/common';
import { InstructorsService } from './instructors.service.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { RolesGuard } from '../auth/roles.guard.js';
import { Roles } from '../auth/roles.decorator.js';
import { CreateAssignmentDto, GradeSubmissionDto, } from './dto/instructor.dto.js';
import '../auth/auth.types.js';
let InstructorsController = class InstructorsController {
    instructorsService;
    constructor(instructorsService) {
        this.instructorsService = instructorsService;
    }
    getModules(req) {
        return this.instructorsService.getAssignedModules(req.user.sub);
    }
    createAssignment(dto, req) {
        return this.instructorsService.createAssignment(req.user.sub, dto.moduleId, dto.title, dto.instructions, dto.dueDate, dto.maxScore);
    }
    getSubmissions(req, status, page, limit) {
        return this.instructorsService.getSubmissions(req.user.sub, status, page ? parseInt(page, 10) : 1, limit ? parseInt(limit, 10) : 20);
    }
    gradeSubmission(id, dto, req) {
        return this.instructorsService.gradeSubmission(req.user.sub, id, dto.score, dto.feedback, dto.status);
    }
};
__decorate([
    Get('modules'),
    __param(0, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InstructorsController.prototype, "getModules", null);
__decorate([
    Post('assignments'),
    __param(0, Body()),
    __param(1, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateAssignmentDto, Object]),
    __metadata("design:returntype", void 0)
], InstructorsController.prototype, "createAssignment", null);
__decorate([
    Get('submissions'),
    __param(0, Req()),
    __param(1, Query('status')),
    __param(2, Query('page')),
    __param(3, Query('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", void 0)
], InstructorsController.prototype, "getSubmissions", null);
__decorate([
    Patch('submissions/:id'),
    __param(0, Param('id')),
    __param(1, Body()),
    __param(2, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, GradeSubmissionDto, Object]),
    __metadata("design:returntype", void 0)
], InstructorsController.prototype, "gradeSubmission", null);
InstructorsController = __decorate([
    Controller('instructor'),
    UseGuards(JwtAuthGuard, RolesGuard),
    Roles('instructor'),
    __metadata("design:paramtypes", [InstructorsService])
], InstructorsController);
export { InstructorsController };
//# sourceMappingURL=instructors.controller.js.map