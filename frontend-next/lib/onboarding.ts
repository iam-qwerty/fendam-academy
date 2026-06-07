import { prisma } from "@/lib/prisma";

export interface OnboardingProfileResponse {
  id: string;
  trackId: string;
  enrollmentStatus: string;
  kycStatus: string;
}

type OnboardingPrisma = Pick<typeof prisma, "track" | "studentProfile">;

export async function createOnboardingProfile(
  prismaClient: OnboardingPrisma,
  sessionUserId: string,
  trackId: string,
) {
  const track = await prismaClient.track.findUnique({
    where: { id: trackId },
    select: { id: true },
  });

  if (!track) {
    return {
      status: 400,
      body: { message: "Selected track could not be found" },
    };
  }

  const existingProfile = await prismaClient.studentProfile.findUnique({
    where: { userId: sessionUserId },
    select: {
      id: true,
      trackId: true,
      enrollmentStatus: true,
      kycStatus: true,
    },
  });

  if (existingProfile) {
    return {
      status: 200,
      body: { profile: existingProfile },
    };
  }

  const profile = await prismaClient.studentProfile.create({
    data: {
      userId: sessionUserId,
      trackId: track.id,
      kycStatus: "not_started",
      enrollmentStatus: "applied",
    },
    select: {
      id: true,
      trackId: true,
      enrollmentStatus: true,
      kycStatus: true,
    },
  });

  return {
    status: 201,
    body: { profile },
  };
}
