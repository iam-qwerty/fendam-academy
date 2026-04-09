import {
  Controller,
  Get,
  Patch,
  Post,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AdminService } from './admin.service.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { RolesGuard } from '../auth/roles.guard.js';
import { Roles } from '../auth/roles.decorator.js';
import {
  UpdateKycDto,
  UpdateEnrollmentDto,
  AssignInstructorDto,
} from './dto/admin.dto.js';

@Controller('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Get('users')
  getUsers(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('role') role?: string,
  ) {
    return this.adminService.getUsers(
      page ? parseInt(page, 10) : 1,
      limit ? parseInt(limit, 10) : 20,
      role,
    );
  }

  @Get('kyc')
  getKycQueue(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('status') status?: string,
  ) {
    return this.adminService.getKycQueue(
      page ? parseInt(page, 10) : 1,
      limit ? parseInt(limit, 10) : 20,
      status,
    );
  }

  @Patch('kyc/:id')
  updateKyc(@Param('id') id: string, @Body() dto: UpdateKycDto) {
    return this.adminService.updateKyc(id, dto.status, dto.reviewComment);
  }

  @Patch('enrollment/:id')
  updateEnrollment(
    @Param('id') id: string,
    @Body() dto: UpdateEnrollmentDto,
  ) {
    return this.adminService.updateEnrollment(id, dto.enrollmentStatus);
  }

  @Post('instructor-modules')
  assignInstructor(@Body() dto: AssignInstructorDto) {
    return this.adminService.assignInstructor(
      dto.instructorId,
      dto.moduleId,
    );
  }

  @Delete('instructor-modules/:id')
  unassignInstructor(@Param('id') id: string) {
    return this.adminService.unassignInstructor(id);
  }

  @Get('instructor-modules')
  getInstructorModules(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    return this.adminService.getInstructorModules(
      page ? parseInt(page, 10) : 1,
      limit ? parseInt(limit, 10) : 20,
    );
  }
}
