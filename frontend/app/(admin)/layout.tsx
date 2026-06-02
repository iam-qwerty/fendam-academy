"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { clearRoleCookie } from "@/lib/clear-role";
import { HugeiconsIcon } from "@hugeicons/react";
import { Logout01Icon, Menu01Icon } from "@hugeicons/core-free-icons";

const adminLinks = [
  { href: "/admin/users", label: "Users" },
  { href: "/admin/kyc", label: "KYC Queue" },
  { href: "/admin/instructor-modules", label: "Instructor Assignments" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col border-r border-border bg-card/50">
        <div className="flex h-16 items-center gap-2.5 px-6 border-b border-border">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xs">
            FA
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight leading-none">
              FendAm
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground leading-none mt-0.5">
              Admin
            </span>
          </div>
        </div>

        <nav className="flex-1 space-y-1 p-4">
          {adminLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors",
                pathname === link.href
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 mt-auto border-t border-border">
          <div className="flex items-center gap-3 px-3 py-2 mb-2">
            <div className="h-8 w-8 rounded-lg bg-secondary flex items-center justify-center text-xs font-bold text-primary">
              {session?.user?.name?.[0] || "A"}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate">
                {session?.user?.name || "Admin"}
              </p>
              <p className="text-[11px] text-muted-foreground truncate">
                {session?.user?.email}
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
            <HugeiconsIcon icon={Logout01Icon} className="mr-3 w-4 h-4" />
            Sign out
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Mobile header */}
        <header className="flex md:hidden h-14 items-center justify-between border-b border-border px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xs">
              FA
            </div>
            <span className="font-bold text-sm tracking-tight">
              Admin Panel
            </span>
          </div>
          <Button variant="ghost" size="sm" className="rounded-lg">
            <HugeiconsIcon icon={Menu01Icon} className="w-5 h-5" />
          </Button>
        </header>

        <div className="flex-1 overflow-auto p-6 lg:p-8 animate-fade-up">
          {children}
        </div>
      </main>
    </div>
  );
}
