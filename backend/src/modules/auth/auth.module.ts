import { Module } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard.js';
import { RolesGuard } from './roles.guard.js';
import { EmailVerifiedGuard } from './verified.guard.js';

@Module({
  providers: [JwtAuthGuard, RolesGuard, EmailVerifiedGuard],
  exports: [JwtAuthGuard, RolesGuard, EmailVerifiedGuard],
})
export class AuthModule {}
