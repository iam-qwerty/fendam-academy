import { IsString, IsNotEmpty } from 'class-validator';

export class SubmitKycDto {
  @IsString()
  @IsNotEmpty()
  idCardFileKey!: string;

  @IsString()
  @IsNotEmpty()
  paymentProofFileKey!: string;
}

export class CreateSubmissionDto {
  @IsString()
  @IsNotEmpty()
  assignmentId!: string;

  @IsString()
  @IsNotEmpty()
  fileKey!: string;
}
