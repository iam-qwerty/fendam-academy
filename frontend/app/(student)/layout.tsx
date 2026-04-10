"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";
import { 
  DashboardSquare01Icon, 
  Book02Icon, 
  Task01Icon, 
  Logout01Icon,
  AiCloud01Icon,
  Menu01Icon
} from "@hugeicons/core-free-icons";

const studentLinks = [
  { href: "/student/dashboard", label: "Dashboard", icon: DashboardSquare01Icon },
  { href: "/student/modules", label: "Curriculum", icon: Book02Icon },
  { href: "/student/assignments", label: "Assignments", icon: Task01Icon },
];

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <div className="flex min-h-screen background-grid">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-72 flex-col m-4 mr-0 glass rounded-[2.5rem] border-white/10 shadow-2xl relative overflow-hidden group">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 blur-[80px] -z-10 group-hover:bg-primary/20 transition-colors"></div>
        
        <div className="flex h-20 items-center gap-3 px-8 border-b border-white/5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20">
            <HugeiconsIcon icon={AiCloud01Icon} className="w-6 h-6" />
          </div>
          <span className="font-bold text-lg tracking-tight">
            FendAm <span className="text-primary">Academy</span>
          </span>
        </div>

        <nav className="flex-1 space-y-2 p-6">
          {studentLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-4 rounded-2xl px-4 py-3.5 text-sm font-semibold transition-all group/link",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground",
                )}
              >
                <HugeiconsIcon icon={Icon} className={cn("w-5 h-5 transition-transform group-hover/link:scale-110", isActive ? "text-primary-foreground" : "text-primary")} />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-6 mt-auto">
          <div className="glass-card bg-white/5 rounded-3xl p-5 mb-4 border border-white/5">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                {session?.user?.name?.[0] || "S"}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold truncate">
                  {session?.user?.name || "Student"}
                </p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider truncate">
                  {(session?.user as any)?.role || "Free Tier"}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start h-10 rounded-xl hover:bg-red-500/10 hover:text-red-500 transition-colors"
              onClick={() => signOut({ fetchOptions: { onSuccess: () => { window.location.href = "/sign-in"; } } })}
            >
              <HugeiconsIcon icon={Logout01Icon} className="mr-3 w-4 h-4" />
              Sign out
            </Button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Mobile header */}
        <header className="lg:hidden flex h-16 items-center justify-between glass border-b border-white/5 px-6 m-4 mb-0 rounded-2xl">
          <div className="flex items-center gap-2">
             <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xs">
              FA
            </div>
            <span className="font-bold text-sm tracking-tight">FendAm Academy</span>
          </div>
          <Button variant="ghost" size="icon" className="rounded-xl">
            <HugeiconsIcon icon={Menu01Icon} className="w-6 h-6" />
          </Button>
        </header>

        <div className="flex-1 p-6 lg:p-10 reveal">
          <div className="max-w-7xl mx-auto h-full">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}

