import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module.js';
import { AuthModule } from './modules/auth/auth.module.js';
import { StudentsModule } from './modules/students/students.module.js';
import { InstructorsModule } from './modules/instructors/instructors.module.js';
import { AdminModule } from './modules/admin/admin.module.js';
import { UploadsModule } from './modules/uploads/uploads.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    StudentsModule,
    InstructorsModule,
    AdminModule,
    UploadsModule,
  ],
})
export class AppModule {}
