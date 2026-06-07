import { createServerFn } from '@tanstack/react-start'
import { asc } from 'drizzle-orm'
import { db } from '@/db/index.ts'
import { track } from '@/db/schema.ts'

/**
 * Fetches all tracks ordered by name for the onboarding form.
 */
export const getTracks = createServerFn({ method: 'GET' }).handler(async () => {
  return db
    .select({
      id: track.id,
      name: track.name,
      description: track.description,
    })
    .from(track)
    .orderBy(asc(track.name))
})
