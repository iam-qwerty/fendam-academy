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
import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { UploadsService } from './uploads.service.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { PresignedUrlDto } from './dto/upload.dto.js';
let UploadsController = class UploadsController {
    uploadsService;
    constructor(uploadsService) {
        this.uploadsService = uploadsService;
    }
    getPresignedUrl(dto) {
        return this.uploadsService.generatePresignedUrl(dto.filename, dto.contentType);
    }
};
__decorate([
    Post('presigned'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PresignedUrlDto]),
    __metadata("design:returntype", void 0)
], UploadsController.prototype, "getPresignedUrl", null);
UploadsController = __decorate([
    Controller('uploads'),
    UseGuards(JwtAuthGuard),
    __metadata("design:paramtypes", [UploadsService])
], UploadsController);
export { UploadsController };
//# sourceMappingURL=uploads.controller.js.map