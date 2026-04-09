var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable, UnauthorizedException, } from '@nestjs/common';
import { createRemoteJWKSet, jwtVerify } from 'jose';
const JWKS_URL = process.env.FRONTEND_URL || 'http://localhost:3000';
const jwks = createRemoteJWKSet(new URL(`${JWKS_URL}/api/auth/jwks`));
let JwtAuthGuard = class JwtAuthGuard {
    async canActivate(context) {
        const req = context.switchToHttp().getRequest();
        const token = this.extractToken(req);
        if (!token)
            throw new UnauthorizedException();
        try {
            const { payload } = await jwtVerify(token, jwks, {
                issuer: JWKS_URL,
                audience: JWKS_URL,
            });
            req.user = payload;
        }
        catch {
            throw new UnauthorizedException('Token invalid or expired');
        }
        return true;
    }
    extractToken(req) {
        const [type, token] = req.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : null;
    }
};
JwtAuthGuard = __decorate([
    Injectable()
], JwtAuthGuard);
export { JwtAuthGuard };
//# sourceMappingURL=jwt-auth.guard.js.map