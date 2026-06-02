import { Module } from '@nestjs/common';
import { InstructorsController } from './instructors.controller.js';
import { InstructorsService } from './instructors.service.js';
import { AuthModule } from '../auth/auth.module.js';
import { UploadsModule } from '../uploads/uploads.module.js';
import { AppCacheModule } from '../../common/cache/app-cache.module.js';

@Module({
  imports: [AuthModule, UploadsModule, AppCacheModule],
  controllers: [InstructorsController],
  providers: [InstructorsService],
})
export class InstructorsModule {}
