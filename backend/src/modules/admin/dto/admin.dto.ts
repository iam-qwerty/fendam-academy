import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateKycDto {
  @IsString()
  @IsNotEmpty()
  status!: string; // "under_review" | "approved" | "rejected"

  @IsString()
  @IsOptional()
  reviewComment?: string;
}

export class UpdateEnrollmentDto {
  @IsString()
  @IsNotEmpty()
  enrollmentStatus!: string; // "applied" | "pending" | "approved" | "enrolled" | "completed"
}

export class AssignInstructorDto {
  @IsString()
  @IsNotEmpty()
  instructorId!: string;

  @IsString()
  @IsNotEmpty()
  moduleId!: string;
}
