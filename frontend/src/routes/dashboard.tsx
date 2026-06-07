import { createFileRoute, redirect } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { getSession } from '@/lib/server-fns'
import { getUserRole, getDashboardRedirectPath } from '@/lib/auth-flow'
import { eq } from 'drizzle-orm'
import { db } from '@/db/index.ts'
import { studentProfile } from '@/db/schema.ts'

const resolveDashboard = createServerFn({ method: 'GET' }).handler(async () => {
  const session = await getSession()
  if (!session) {
    throw redirect({ to: '/sign-in' })
  }
  const role = getUserRole(session.user)
  const [profile] = await db
    .select({ id: studentProfile.id })
    .from(studentProfile)
    .where(eq(studentProfile.userId, session.user.id))
    .limit(1)
  const hasStudentProfile = !!profile
  const path = getDashboardRedirectPath(role, hasStudentProfile)
  throw redirect({ to: path })
})

export const Route = createFileRoute('/dashboard')({
  loader: () => resolveDashboard(),
})
