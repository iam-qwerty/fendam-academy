import { createServerFn } from '@tanstack/react-start'
import { eq } from 'drizzle-orm'
import { db } from '@/db/index.ts'
import { track, studentProfile } from '@/db/schema.ts'
import { requireAuth } from '@/lib/server-fns'

/**
 * Creates a student profile (onboarding) for the current user.
 * Idempotent — returns existing profile if already created.
 */
export const createOnboardingProfile = createServerFn({ method: 'POST' })
  .validator((d: { trackId: string }) => {
    if (!d.trackId?.trim()) {
      throw new Error('A valid trackId is required')
    }
    return d
  })
  .handler(async ({ data }) => {
    const session = await requireAuth()

    // Verify track exists
    const [foundTrack] = await db
      .select({ id: track.id })
      .from(track)
      .where(eq(track.id, data.trackId))
      .limit(1)

    if (!foundTrack) {
      throw new Error('Selected track could not be found')
    }

    // Check for existing profile
    const [existing] = await db
      .select({
        id: studentProfile.id,
        trackId: studentProfile.trackId,
        enrollmentStatus: studentProfile.enrollmentStatus,
        kycStatus: studentProfile.kycStatus,
      })
      .from(studentProfile)
      .where(eq(studentProfile.userId, session.user.id))
      .limit(1)

    if (existing) {
      return { profile: existing }
    }

    // Create new profile
    const [profile] = await db
      .insert(studentProfile)
      .values({
        id: crypto.randomUUID(),
        userId: session.user.id,
        trackId: foundTrack.id,
        kycStatus: 'not_started',
        enrollmentStatus: 'applied',
      })
      .returning({
        id: studentProfile.id,
        trackId: studentProfile.trackId,
        enrollmentStatus: studentProfile.enrollmentStatus,
        kycStatus: studentProfile.kycStatus,
      })

    return { profile }
  })
