import { createServerFn } from '@tanstack/react-start'
import { auth } from '@/lib/auth'
import { getRequest } from '@tanstack/react-start/server'

/**
 * Returns the current Better Auth session, or null if not authenticated.
 */
export const getSession = createServerFn({ method: 'GET' }).handler(
  async () => {
    const request = getRequest()
    const session = await auth.api.getSession({
      headers: request.headers,
    })
    return session
  },
)

/**
 * Throws a redirect to /sign-in if the user is not authenticated.
 * Returns the session if authenticated.
 */
export const requireAuth = createServerFn({ method: 'GET' }).handler(
  async () => {
    const session = await getSession()
    if (!session) {
      throw new Response(null, {
        status: 302,
        headers: { Location: '/sign-in' },
      })
    }
    return session
  },
)

/**
 * Checks that the authenticated user has one of the allowed roles.
 * Throws a redirect to / if the role doesn't match.
 */
export const requireRole = createServerFn({ method: 'GET' })
  .validator((d: { roles: string[] }) => d)
  .handler(async ({ data }) => {
    const session = await requireAuth()
    const role =
      (session.user as Record<string, unknown>).role as string ?? 'student'
    if (!data.roles.includes(role)) {
      throw new Response(null, {
        status: 302,
        headers: { Location: '/' },
      })
    }
    return { session, role }
  })
