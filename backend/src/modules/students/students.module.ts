import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller.js';
import { StudentsService } from './students.service.js';
import { AuthModule } from '../auth/auth.module.js';
import { UploadsModule } from '../uploads/uploads.module.js';
import { AppCacheModule } from '../../common/cache/app-cache.module.js';

@Module({
  imports: [AuthModule, UploadsModule, AppCacheModule],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
