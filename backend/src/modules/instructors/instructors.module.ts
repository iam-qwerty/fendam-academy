import { Module } from '@nestjs/common';
import { InstructorsController } from './instructors.controller.js';
import { InstructorsService } from './instructors.service.js';
import { AuthModule } from '../auth/auth.module.js';

@Module({
  imports: [AuthModule],
  controllers: [InstructorsController],
  providers: [InstructorsService],
})
export class InstructorsModule {}
