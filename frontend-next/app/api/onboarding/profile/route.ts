import { auth } from "@/lib/auth";
import { getUserRole } from "@/lib/auth-flow";
import { createOnboardingProfile } from "@/lib/onboarding";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session) {
    return NextResponse.json(
      { message: "Authentication required" },
      { status: 401 },
    );
  }

  if (getUserRole(session.user) !== "student") {
    return NextResponse.json(
      { message: "Only students can complete onboarding" },
      { status: 403 },
    );
  }

  const payload = (await request.json().catch(() => null)) as {
    trackId?: unknown;
  } | null;

  if (!payload || typeof payload.trackId !== "string" || !payload.trackId.trim()) {
    return NextResponse.json(
      { message: "A valid trackId is required" },
      { status: 400 },
    );
  }

  const result = await createOnboardingProfile(
    prisma,
    session.user.id,
    payload.trackId,
  );

  return NextResponse.json(result.body, { status: result.status });
}
