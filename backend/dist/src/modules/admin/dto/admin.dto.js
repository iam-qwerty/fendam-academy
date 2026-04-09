var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
export class UpdateKycDto {
    status;
    reviewComment;
}
__decorate([
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], UpdateKycDto.prototype, "status", void 0);
__decorate([
    IsString(),
    IsOptional(),
    __metadata("design:type", String)
], UpdateKycDto.prototype, "reviewComment", void 0);
export class UpdateEnrollmentDto {
    enrollmentStatus;
}
__decorate([
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], UpdateEnrollmentDto.prototype, "enrollmentStatus", void 0);
export class AssignInstructorDto {
    instructorId;
    moduleId;
}
__decorate([
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], AssignInstructorDto.prototype, "instructorId", void 0);
__decorate([
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], AssignInstructorDto.prototype, "moduleId", void 0);
//# sourceMappingURL=admin.dto.js.map