"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "@/lib/auth-client";
import { getUserRole } from "@/lib/auth-flow";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { clearRoleCookie } from "@/lib/clear-role";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  DashboardSquare01Icon,
  Book02Icon,
  Task01Icon,
  Logout01Icon,
  Menu01Icon,
  Cancel01Icon,
  IdIcon,
  SidebarLeftIcon,
} from "@hugeicons/core-free-icons";

const studentLinks = [
  { href: "/student/dashboard", label: "Dashboard", icon: DashboardSquare01Icon },
  { href: "/student/modules", label: "Curriculum", icon: Book02Icon },
  { href: "/student/assignments", label: "Assignments", icon: Task01Icon },
  { href: "/student/kyc", label: "KYC", icon: IdIcon },
];

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const role = getUserRole(session?.user);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Close mobile sidebar on route change
  useEffect(() => {
    setSidebarOpen(true);
  }, [pathname]);

  const sidebarContent = (
    <>
      <div className="flex h-16 items-center justify-between px-6 border-b border-border">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xs shrink-0">
            FA
          </div>
          <span className="font-bold text-base tracking-tight whitespace-nowrap">
            FendAm Academy
          </span>
        </div>
        {/* Close button — visible only in mobile drawer */}
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
        {studentLinks.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => {
                if (window.innerWidth < 1024) setSidebarOpen(false);
              }}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
              )}
            >
              <HugeiconsIcon
                icon={Icon}
                className={cn(
                  "w-[18px] h-[18px] shrink-0",
                  isActive ? "text-primary-foreground" : "text-muted-foreground"
                )}
              />
              <span className="whitespace-nowrap">{link.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 mt-auto border-t border-border">
        <div className="flex items-center gap-3 px-3 py-2 mb-2">
          <div className="h-8 w-8 rounded-lg bg-secondary flex items-center justify-center text-xs font-bold text-primary shrink-0">
            {session?.user?.name?.[0] || "S"}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate">
              {session?.user?.name || "Student"}
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
                  clearRoleCookie();
                  window.location.href = "/sign-in";
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
  );

  return (
    <div className="flex min-h-screen">
      {/* Desktop sidebar */}
      <aside
        className="sidebar-desktop hidden lg:flex flex-col border-r border-border bg-card/50"
        data-open={sidebarOpen ? "true" : "false"}
      >
        {sidebarContent}
      </aside>

      {/* Mobile sidebar drawer */}
      <aside
        className="sidebar-mobile lg:hidden flex flex-col border-r border-border bg-card"
        data-open={sidebarOpen ? "true" : "false"}
      >
        {sidebarContent}
      </aside>

      {/* Backdrop for mobile */}
      <div
        className="sidebar-backdrop lg:hidden"
        data-open={sidebarOpen ? "true" : "false"}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Main content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Desktop top bar with toggle */}
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
              {session?.user?.name?.[0] || "S"}
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              {session?.user?.name || "Student"}
            </span>
          </div>
        </header>

        {/* Mobile header */}
        <header className="lg:hidden flex h-14 items-center justify-between border-b border-border px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xs">
              FA
            </div>
            <span className="font-bold text-sm tracking-tight">
              FendAm Academy
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <HugeiconsIcon icon={Menu01Icon} className="w-5 h-5" />
          </Button>
        </header>

        <div className="flex-1 p-6 lg:p-10 animate-fade-up relative overflow-hidden">
          <div className="max-w-6xl mx-auto">{children}</div>
        </div>
      </main>
    </div>
  );
}
