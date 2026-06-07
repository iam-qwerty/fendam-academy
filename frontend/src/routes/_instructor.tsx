import { createFileRoute, redirect } from '@tanstack/react-router'
import { DashboardSidebar } from '@/components/dashboard-sidebar'
import { Book02Icon, Task01Icon } from '@hugeicons/core-free-icons'
import { requireRole } from '@/lib/server-fns'

const instructorLinks = [
  { href: '/instructor/modules', label: 'Modules', icon: Book02Icon },
  { href: '/instructor/submissions', label: 'Submissions', icon: Task01Icon },
]

export const Route = createFileRoute('/_instructor')({
  beforeLoad: async () => {
    try {
      await requireRole({ data: { roles: ['instructor', 'admin'] } })
    } catch {
      throw redirect({ to: '/sign-in' })
    }
  },
  component: InstructorLayout,
})

function InstructorLayout() {
  return (
    <DashboardSidebar
      links={instructorLinks}
      brandSubLabel="Instructor"
      roleLabel="Instructor"
    />
  )
}
