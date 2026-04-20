import type { JWTPayload } from 'jose';

/**
 * JWT payload shape from better-auth JWT plugin.
 * Matches the definePayload in frontend auth.ts.
 */
export interface AuthUser extends JWTPayload {
  sub: string;
  email: string;
  role: string;
  emailVerified: boolean;
}

declare module 'express-serve-static-core' {
  interface Request {
    user?: AuthUser;
  }
}
