import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

interface CacheRule {
  match: (method: string, path: string) => boolean;
  directive: string;
}

const CACHE_RULES: CacheRule[] = [
  {
    match: (m, p) => m === 'GET' && p.startsWith('/student/modules'),
    directive: 'private, max-age=1800, stale-while-revalidate=3600',
  },
  {
    match: (m, p) => m === 'GET' && p.startsWith('/student/lessons/'),
    directive: 'private, max-age=1800, stale-while-revalidate=3600',
  },
  {
    match: (m, p) => m === 'GET' && p === '/student/dashboard',
    directive: 'private, max-age=120, stale-while-revalidate=300',
  },
  {
    match: (m, p) => m === 'GET' && p === '/student/kyc',
    directive: 'private, max-age=60, stale-while-revalidate=120',
  },
  {
    match: (m, p) => m === 'GET' && p.startsWith('/instructor/modules'),
    directive: 'private, max-age=600, stale-while-revalidate=1800',
  },
  {
    match: (m, p) => m === 'GET' && p.startsWith('/instructor/assignments'),
    directive: 'private, max-age=300, stale-while-revalidate=600',
  },
  {
    match: (m, p) => m === 'GET' && p.startsWith('/instructor/submissions'),
    directive: 'private, max-age=60, stale-while-revalidate=120',
  },
  {
    match: (m, p) => m === 'GET' && p.startsWith('/admin/users'),
    directive: 'private, no-cache',
  },
  {
    match: (m, p) => m === 'GET' && p.startsWith('/admin/kyc'),
    directive: 'private, no-cache',
  },
  {
    match: (m, p) => m === 'GET' && p.startsWith('/admin/instructor-modules'),
    directive: 'private, max-age=300, stale-while-revalidate=600',
  },
];

const NO_STORE_METHODS = ['POST', 'PATCH', 'PUT', 'DELETE'];

@Injectable()
export class CacheControlInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    return next.handle().pipe(
      tap(() => {
        const res = context.switchToHttp().getResponse();
        const req = context.switchToHttp().getRequest();
        const method = req.method;
        const path = req.path;
        const status = res.statusCode;

        if (status < 200 || status >= 300) return;

        if (NO_STORE_METHODS.includes(method)) {
          res.setHeader('Cache-Control', 'no-store');
          return;
        }

        const rule = CACHE_RULES.find((r) => r.match(method, path));
        if (rule) {
          res.setHeader('Cache-Control', rule.directive);
        } else if (method === 'GET') {
          res.setHeader('Cache-Control', 'private, no-cache');
        }
      }),
    );
  }
}
