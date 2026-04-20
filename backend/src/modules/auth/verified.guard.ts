import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import type { Request } from 'express';

@Injectable()
export class EmailVerifiedGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const { user } = context.switchToHttp().getRequest<Request>();
    if (!user) throw new ForbiddenException('Authentication context missing');

    if (!user.emailVerified) throw new ForbiddenException('Email not verified');
    return true;
  }
}
