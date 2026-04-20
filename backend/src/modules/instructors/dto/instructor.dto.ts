import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsOptional,
  Min,
  IsDateString,
  IsIn,
} from 'class-validator';

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

  @IsDateString()
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
  @IsIn(['graded', 'returned'])
  status!: string; // "graded" | "returned"
}
