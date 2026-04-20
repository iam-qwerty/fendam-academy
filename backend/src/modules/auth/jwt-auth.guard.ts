import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { createRemoteJWKSet, jwtVerify } from 'jose';
import type { Request } from 'express';
import type { AuthUser } from './auth.types.js';

const JWKS_URL = process.env.FRONTEND_URL || 'http://localhost:3000';

// Cache the JWKS set — it rarely changes
const jwks = createRemoteJWKSet(new URL(`${JWKS_URL}/api/auth/jwks`));

@Injectable()
export class JwtAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest<Request>();
    const token = this.extractToken(req);
    if (!token) throw new UnauthorizedException();

    try {
      const { payload } = await jwtVerify(token, jwks, {
        issuer: JWKS_URL,
        audience: JWKS_URL,
      });

      // Set user on request — payload contains sub, email, role, emailVerified
      req.user = payload as AuthUser;
    } catch {
      throw new UnauthorizedException('Token invalid or expired');
    }
    return true;
  }

  private extractToken(req: Request): string | null {
    const [type, token] = req.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : null;
  }
}
