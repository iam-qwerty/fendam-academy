import { IsString, IsNotEmpty, IsInt, IsOptional, Min, Max } from 'class-validator';

export class CreateAssignmentDto {
  @IsString()
  @IsNotEmpty()
  moduleId!: string;

  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  instructions!: string;

  @IsString()
  @IsNotEmpty()
  dueDate!: string; // ISO date string

  @IsInt()
  @Min(1)
  maxScore!: number;
}

export class GradeSubmissionDto {
  @IsInt()
  @Min(0)
  score!: number;

  @IsString()
  @IsOptional()
  feedback?: string;

  @IsString()
  @IsNotEmpty()
  status!: string; // "graded" | "returned"
}
