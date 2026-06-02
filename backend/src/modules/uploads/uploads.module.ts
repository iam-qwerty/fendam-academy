import { Module } from '@nestjs/common';
import { UploadsController } from './uploads.controller.js';
import { UploadsService } from './uploads.service.js';
import { AuthModule } from '../auth/auth.module.js';
import { AppCacheModule } from '../../common/cache/app-cache.module.js';

@Module({
  imports: [AuthModule, AppCacheModule],
  controllers: [UploadsController],
  providers: [UploadsService],
  exports: [UploadsService],
})
export class UploadsModule {}
