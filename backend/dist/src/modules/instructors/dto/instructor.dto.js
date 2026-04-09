var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsString, IsNotEmpty, IsInt, IsOptional, Min } from 'class-validator';
export class CreateAssignmentDto {
    moduleId;
    title;
    instructions;
    dueDate;
    maxScore;
}
__decorate([
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], CreateAssignmentDto.prototype, "moduleId", void 0);
__decorate([
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], CreateAssignmentDto.prototype, "title", void 0);
__decorate([
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], CreateAssignmentDto.prototype, "instructions", void 0);
__decorate([
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], CreateAssignmentDto.prototype, "dueDate", void 0);
__decorate([
    IsInt(),
    Min(1),
    __metadata("design:type", Number)
], CreateAssignmentDto.prototype, "maxScore", void 0);
export class GradeSubmissionDto {
    score;
    feedback;
    status;
}
__decorate([
    IsInt(),
    Min(0),
    __metadata("design:type", Number)
], GradeSubmissionDto.prototype, "score", void 0);
__decorate([
    IsString(),
    IsOptional(),
    __metadata("design:type", String)
], GradeSubmissionDto.prototype, "feedback", void 0);
__decorate([
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], GradeSubmissionDto.prototype, "status", void 0);
//# sourceMappingURL=instructor.dto.js.map