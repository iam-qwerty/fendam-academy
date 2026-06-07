import { createFileRoute, redirect } from '@tanstack/react-router'
import { DashboardSidebar } from '@/components/dashboard-sidebar'
import {
  UserGroupIcon,
  IdIcon,
  TeacherIcon,
} from '@hugeicons/core-free-icons'
import { requireRole } from '@/lib/server-fns'

const adminLinks = [
  { href: '/admin/users', label: 'Users', icon: UserGroupIcon },
  { href: '/admin/kyc', label: 'KYC Queue', icon: IdIcon },
  { href: '/admin/instructor-modules', label: 'Instructor Assignments', icon: TeacherIcon },
]

export const Route = createFileRoute('/_admin')({
  beforeLoad: async () => {
    try {
      await requireRole({ data: { roles: ['admin'] } })
    } catch {
      throw redirect({ to: '/sign-in' })
    }
  },
  component: AdminLayout,
})

function AdminLayout() {
  return (
    <DashboardSidebar
      links={adminLinks}
      brandSubLabel="Admin"
      roleLabel="Admin"
    />
  )
}
