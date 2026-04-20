import { describe, expect, it, mock } from "bun:test";
import { createOnboardingProfile } from "@/lib/onboarding";

describe("createOnboardingProfile", () => {
  it("creates the student profile for the authenticated session user", async () => {
    const prisma = {
      track: {
        findUnique: mock(async () => ({ id: "track-fullstack" })),
      },
      studentProfile: {
        findUnique: mock(async () => null),
        create: mock(async ({ data }: { data: { userId: string; trackId: string } }) => ({
          id: "profile-1",
          trackId: data.trackId,
          enrollmentStatus: "applied",
          kycStatus: "not_started",
          userId: data.userId,
        })),
      },
    };

    const result = await createOnboardingProfile(
      prisma as never,
      "session-user-1",
      "track-fullstack",
    );

    expect(result.status).toBe(201);
    expect(prisma.studentProfile.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          userId: "session-user-1",
          trackId: "track-fullstack",
        }),
      }),
    );
  });

  it("returns an existing profile instead of creating another one", async () => {
    const prisma = {
      track: {
        findUnique: mock(async () => ({ id: "track-ai-ml" })),
      },
      studentProfile: {
        findUnique: mock(async () => ({
          id: "profile-1",
          trackId: "track-ai-ml",
          enrollmentStatus: "applied",
          kycStatus: "not_started",
        })),
        create: mock(async () => {
          throw new Error("should not create");
        }),
      },
    };

    const result = await createOnboardingProfile(
      prisma as never,
      "session-user-1",
      "track-ai-ml",
    );

    expect(result.status).toBe(200);
    expect(prisma.studentProfile.create).not.toHaveBeenCalled();
  });
});
