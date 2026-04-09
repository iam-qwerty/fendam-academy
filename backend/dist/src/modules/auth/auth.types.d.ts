import { JWTPayload } from 'jose';
export interface AuthUser extends JWTPayload {
    sub: string;
    email: string;
    role: string;
    emailVerified: boolean;
}
declare global {
    namespace Express {
        interface Request {
            user?: AuthUser;
        }
    }
}
