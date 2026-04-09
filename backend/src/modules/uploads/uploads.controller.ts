import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { UploadsService } from './uploads.service.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { PresignedUrlDto } from './dto/upload.dto.js';

@Controller('uploads')
@UseGuards(JwtAuthGuard)
export class UploadsController {
  constructor(private uploadsService: UploadsService) {}

  @Post('presigned')
  getPresignedUrl(@Body() dto: PresignedUrlDto) {
    return this.uploadsService.generatePresignedUrl(
      dto.filename,
      dto.contentType,
    );
  }
}
