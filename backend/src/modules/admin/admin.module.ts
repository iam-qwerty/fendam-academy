import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller.js';
import { AdminService } from './admin.service.js';
import { AuthModule } from '../auth/auth.module.js';
import { UploadsModule } from '../uploads/uploads.module.js';
import { AppCacheModule } from '../../common/cache/app-cache.module.js';

@Module({
  imports: [AuthModule, UploadsModule, AppCacheModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
