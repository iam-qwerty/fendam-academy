"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";
import { AiCloud01Icon } from "@hugeicons/core-free-icons";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-border/40">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold shadow-[0_0_20px_rgba(3,169,244,0.3)] group-hover:scale-105 transition-transform">
            <HugeiconsIcon icon={AiCloud01Icon} className="w-6 h-6" />
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:inline-block">
            FendAm <span className="text-primary">Academy</span>
          </span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            href="/sign-in"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "text-muted-foreground hover:text-foreground transition-colors"
            )}
          >
            Sign in
          </Link>
          <Link
            href="/sign-up"
            className={cn(
              buttonVariants({ size: "sm" }),
              "bg-primary hover:bg-primary/90 shadow-[0_0_15px_rgba(3,169,244,0.2)] transition-shadow"
            )}
          >
            Get started
          </Link>
        </nav>
      </div>
    </header>
  );
}
