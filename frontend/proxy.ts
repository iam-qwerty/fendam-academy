import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

/**
 * Next.js 16 proxy — route protection per spec §4.
 * Cookie-only check (fast, optimistic). Real security is enforced in NestJS.
 */
export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionCookie = getSessionCookie(request);

  // Public routes — no auth required
  const publicPaths = ["/", "/sign-in", "/sign-up", "/api/auth"];
  const isPublic = publicPaths.some(
    (p) => pathname === p || pathname.startsWith(p + "/"),
  );

  if (isPublic) {
    return NextResponse.next();
  }

  // Protected routes — redirect to sign-in if no session
  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all routes except static files and API auth routes
    "/((?!_next/static|_next/image|favicon.ico|api/auth).*)",
  ],
};
