"use server";

import { prisma } from "@/lib/prisma";

/**
 * Create a StudentProfile linking the new user to their selected track.
 * Called immediately after successful sign-up.
 */
export async function createStudentProfile(userId: string, trackId: string) {
  // Check if profile already exists (idempotent)
  const existing = await prisma.studentProfile.findUnique({
    where: { userId },
  });
  if (existing) return existing;

  return prisma.studentProfile.create({
    data: {
      userId,
      trackId,
      kycStatus: "not_started",
      enrollmentStatus: "applied",
      progressPercent: 0,
    },
  });
}
