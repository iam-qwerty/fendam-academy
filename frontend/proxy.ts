import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

/**
 * Next.js 16 proxy — route protection per spec §4.
 * 
 * Two layers:
 * 1. Auth check: redirect unauthenticated users to /sign-in
 * 2. Role check: redirect users accessing wrong role routes (UX-only, real security is in NestJS)
 * 
 * Cookie-only check (fast, optimistic). Real security is enforced server-side.
 */
export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Public routes — no auth required
  const publicPaths = ["/", "/sign-in", "/sign-up", "/api/auth"];
  const isPublic = publicPaths.some(
    (p) => pathname === p || pathname.startsWith(p + "/"),
  );

  if (isPublic) {
    return NextResponse.next();
  }

  // Protected routes — redirect to sign-in if no session
  const sessionCookie = getSessionCookie(request);
  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // Role-based UX guards
  // We read the role from a lightweight cookie set after sign-in.
  // This is NOT a security boundary — NestJS guards enforce real RBAC.
  const roleCookie = request.cookies.get("fendam_role")?.value;

  if (roleCookie) {
    // Admin routes
    if (pathname.startsWith("/admin") && roleCookie !== "admin") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // Instructor routes
    if (pathname.startsWith("/instructor") && roleCookie !== "instructor") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // Student routes
    if (pathname.startsWith("/student") && roleCookie !== "student") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all routes except static files and API auth routes
    "/((?!_next/static|_next/image|favicon.ico|api/auth).*)",
  ],
};
