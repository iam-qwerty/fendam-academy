import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
  UseGuards,
  Req,
} from '@nestjs/common';
import type { Request } from 'express';
import { InstructorsService } from './instructors.service.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { RolesGuard } from '../auth/roles.guard.js';
import { Roles } from '../auth/roles.decorator.js';
import {
  CreateAssignmentDto,
  GradeSubmissionDto,
} from './dto/instructor.dto.js';
import '../auth/auth.types.js';

@Controller('instructor')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('instructor')
export class InstructorsController {
  constructor(private instructorsService: InstructorsService) {}

  @Get('modules')
  getModules(@Req() req: Request) {
    return this.instructorsService.getAssignedModules(req.user!.sub);
  }

  @Get('modules/:id')
  getModuleDetail(@Param('id') id: string, @Req() req: Request) {
    return this.instructorsService.getModuleDetail(id, req.user!.sub);
  }

  @Get('assignments')
  getAssignments(@Req() req: Request, @Query('moduleId') moduleId?: string) {
    return this.instructorsService.getAssignments(req.user!.sub, moduleId);
  }

  @Post('assignments')
  createAssignment(@Body() dto: CreateAssignmentDto, @Req() req: Request) {
    return this.instructorsService.createAssignment(
      req.user!.sub,
      dto.moduleId,
      dto.title,
      dto.instructions,
      dto.dueDate,
      dto.maxScore,
    );
  }

  @Get('submissions')
  getSubmissions(
    @Req() req: Request,
    @Query('status') status?: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    return this.instructorsService.getSubmissions(
      req.user!.sub,
      status,
      page ? parseInt(page, 10) : 1,
      limit ? parseInt(limit, 10) : 20,
    );
  }

  @Patch('submissions/:id')
  gradeSubmission(
    @Param('id') id: string,
    @Body() dto: GradeSubmissionDto,
    @Req() req: Request,
  ) {
    return this.instructorsService.gradeSubmission(
      req.user!.sub,
      id,
      dto.score,
      dto.feedback,
      dto.status,
    );
  }
}
