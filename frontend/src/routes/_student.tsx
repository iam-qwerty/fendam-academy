import { createFileRoute, redirect } from '@tanstack/react-router'
import { DashboardSidebar } from '@/components/dashboard-sidebar'
import {
  DashboardSquare01Icon,
  Book02Icon,
  Task01Icon,
  IdIcon,
} from '@hugeicons/core-free-icons'
import { requireRole } from '@/lib/server-fns'

const studentLinks = [
  { href: '/student/dashboard', label: 'Dashboard', icon: DashboardSquare01Icon },
  { href: '/student/modules', label: 'Curriculum', icon: Book02Icon },
  { href: '/student/assignments', label: 'Assignments', icon: Task01Icon },
  { href: '/student/kyc', label: 'KYC', icon: IdIcon },
]

export const Route = createFileRoute('/_student')({
  beforeLoad: async () => {
    try {
      await requireRole({ data: { roles: ['student', 'admin'] } })
    } catch {
      throw redirect({ to: '/sign-in' })
    }
  },
  component: StudentLayout,
})

function StudentLayout() {
  return (
    <DashboardSidebar
      links={studentLinks}
      brandLabel="FendAm Academy"
      roleLabel="Student"
    />
  )
}
