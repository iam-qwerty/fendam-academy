"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const adminLinks = [
  { href: "/admin/users", label: "Users" },
  { href: "/admin/kyc", label: "KYC Queue" },
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
      <aside className="hidden md:flex w-64 flex-col border-r border-border bg-sidebar">
        <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-6">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
            FA
          </div>
          <span className="font-semibold text-sidebar-foreground">
            Admin
          </span>
        </div>

        <nav className="flex-1 space-y-1 p-4">
          {adminLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname === link.href
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-sidebar-border p-4">
          <div className="mb-3 px-3">
            <p className="text-sm font-medium text-sidebar-foreground truncate">
              {session?.user?.name || "Admin"}
            </p>
            <p className="text-xs text-sidebar-foreground/60 truncate">
              {session?.user?.email}
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-sidebar-foreground/70"
            onClick={() => signOut({ fetchOptions: { onSuccess: () => { window.location.href = "/sign-in"; } } })}
          >
            Sign out
          </Button>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <header className="flex md:hidden h-14 items-center justify-between border-b border-border px-4">
          <span className="font-semibold">Admin Panel</span>
          <Button variant="ghost" size="sm" onClick={() => signOut({ fetchOptions: { onSuccess: () => { window.location.href = "/sign-in"; } } })}>
            Sign out
          </Button>
        </header>
        <div className="p-6 lg:p-8">{children}</div>
      </main>
    </div>
  );
}
