import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  UseGuards,
  Req,
} from '@nestjs/common';
import type { Request } from 'express';
import { StudentsService } from './students.service.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { RolesGuard } from '../auth/roles.guard.js';
import { EmailVerifiedGuard } from '../auth/verified.guard.js';
import { Roles } from '../auth/roles.decorator.js';
import { CreateSubmissionDto, SubmitKycDto } from './dto/student.dto.js';
import '../auth/auth.types.js'; // augment Express.Request

@Controller('student')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('student')
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  @Get('dashboard')
  getDashboard(@Req() req: Request) {
    return this.studentsService.getDashboard(req.user!.sub);
  }

  @Get('modules')
  getModules(@Req() req: Request) {
    return this.studentsService.getModules(req.user!.sub);
  }

  @Get('lessons/:id')
  @UseGuards(EmailVerifiedGuard)
  getLesson(@Param('id') id: string, @Req() req: Request) {
    return this.studentsService.getLesson(id, req.user!.sub);
  }

  @Post('lessons/:id/complete')
  @UseGuards(EmailVerifiedGuard)
  completeLesson(@Param('id') id: string, @Req() req: Request) {
    return this.studentsService.completeLesson(id, req.user!.sub);
  }

  @Post('submissions')
  @UseGuards(EmailVerifiedGuard)
  createSubmission(@Body() dto: CreateSubmissionDto, @Req() req: Request) {
    return this.studentsService.createSubmission(
      dto.assignmentId,
      dto.fileKey,
      req.user!.sub,
    );
  }

  @Post('kyc')
  submitKyc(@Body() dto: SubmitKycDto, @Req() req: Request) {
    return this.studentsService.submitKyc(
      dto.idCardFileKey,
      dto.paymentProofFileKey,
      req.user!.sub,
    );
  }
}
