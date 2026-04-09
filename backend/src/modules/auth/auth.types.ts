import { JWTPayload } from 'jose';

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

// Augment Express Request to include the user set by JwtAuthGuard
declare global {
  namespace Express {
    interface Request {
      user?: AuthUser;
    }
  }
}
