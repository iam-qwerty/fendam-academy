import { useState, useEffect } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import { authClient, signOut } from '@/lib/auth-client'
import { getUserRole } from '@/lib/auth-flow'
import { clearRoleCookie } from '@/lib/clear-role'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  Logout01Icon,
  Menu01Icon,
  Cancel01Icon,
  SidebarLeftIcon,
} from '@hugeicons/core-free-icons'
import type { ComponentType } from 'react'

interface NavItem {
  href: string
  label: string
  icon: ComponentType<{ className?: string }>
}

interface DashboardSidebarProps {
  links: NavItem[]
  brandLabel?: string
  brandSubLabel?: string
  roleLabel?: string
}

export function DashboardSidebar({
  links,
  brandLabel = 'FendAm Academy',
  brandSubLabel,
  roleLabel,
}: DashboardSidebarProps) {
  const { pathname } = useLocation()
  const { data: session } = authClient.useSession()
  const role = roleLabel ?? getUserRole(session?.user)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setSidebarOpen(false)
    }
  }, [pathname])

  const initial =
    session?.user?.name?.[0]?.toUpperCase() ||
    (brandSubLabel?.[0] ?? 'U')

  const sidebarContent = (
    <>
      <div className="flex h-16 items-center justify-between px-6 border-b border-border">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xs shrink-0">
            FA
          </div>
          {brandSubLabel ? (
            <div className="flex flex-col whitespace-nowrap">
              <span className="font-bold text-sm tracking-tight leading-none">
                FendAm
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground leading-none mt-0.5">
                {brandSubLabel}
              </span>
            </div>
          ) : (
            <span className="font-bold text-base tracking-tight whitespace-nowrap">
              {brandLabel}
            </span>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-lg lg:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <HugeiconsIcon icon={Cancel01Icon} className="w-5 h-5" />
        </Button>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {links.map((link) => {
          const Icon = link.icon
          const isActive = pathname === link.href
          return (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => {
                if (typeof window !== 'undefined' && window.innerWidth < 1024) {
                  setSidebarOpen(false)
                }
              }}
              className={cn(
                'flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
              )}
            >
              <HugeiconsIcon
                icon={Icon}
                className={cn(
                  'w-[18px] h-[18px] shrink-0',
                  isActive ? 'text-primary-foreground' : 'text-muted-foreground',
                )}
              />
              <span className="whitespace-nowrap">{link.label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="p-4 mt-auto border-t border-border">
        <div className="flex items-center gap-3 px-3 py-2 mb-2">
          <div className="h-8 w-8 rounded-lg bg-secondary flex items-center justify-center text-xs font-bold text-primary shrink-0">
            {initial}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate">
              {session?.user?.name || 'User'}
            </p>
            <p className="text-[11px] text-muted-foreground uppercase tracking-wider truncate">
              {role}
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-start rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
          onClick={() =>
            signOut({
              fetchOptions: {
                onSuccess: () => {
                  clearRoleCookie()
                  window.location.href = '/sign-in'
                },
              },
            })
          }
        >
          <HugeiconsIcon icon={Logout01Icon} className="mr-3 w-4 h-4 shrink-0" />
          <span className="whitespace-nowrap">Sign out</span>
        </Button>
      </div>
    </>
  )

  return (
    <div className="flex min-h-screen">
      <aside
        className="sidebar-desktop hidden lg:flex flex-col border-r border-border bg-card/50"
        data-open={sidebarOpen ? 'true' : 'false'}
      >
        {sidebarContent}
      </aside>

      <aside
        className="sidebar-mobile lg:hidden flex flex-col border-r border-border bg-card"
        data-open={sidebarOpen ? 'true' : 'false'}
      >
        {sidebarContent}
      </aside>

      <div
        className="sidebar-backdrop lg:hidden"
        data-open={sidebarOpen ? 'true' : 'false'}
        onClick={() => setSidebarOpen(false)}
      />

      <main className="flex-1 flex flex-col min-w-0">
        <header className="hidden lg:flex h-14 items-center justify-between border-b border-border px-6">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg"
            onClick={() => setSidebarOpen((prev) => !prev)}
            aria-label="Toggle sidebar"
          >
            <HugeiconsIcon icon={SidebarLeftIcon} className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-lg bg-secondary flex items-center justify-center text-[10px] font-bold text-primary">
              {initial}
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              {session?.user?.name || 'User'}
            </span>
          </div>
        </header>

        <header className="lg:hidden flex h-14 items-center justify-between border-b border-border px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xs">
              FA
            </div>
            <span className="font-bold text-sm tracking-tight">
              {brandSubLabel ? `FendAm ${brandSubLabel}` : brandLabel}
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg h-11 w-11"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <HugeiconsIcon icon={Menu01Icon} className="w-5 h-5" />
          </Button>
        </header>

        <div className="flex-1 p-6 lg:p-10 animate-fade-up relative overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  )
}

// Re-export Outlet so layout files can reference it
import { Outlet } from '@tanstack/react-router'
