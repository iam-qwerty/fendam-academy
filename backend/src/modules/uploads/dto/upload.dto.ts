import { IsString, IsNotEmpty } from 'class-validator';

export class PresignedUrlDto {
  @IsString()
  @IsNotEmpty()
  filename!: string;

  @IsString()
  @IsNotEmpty()
  contentType!: string;
}
