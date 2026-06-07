"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";

const NAV_LINKS = [
  { label: "Curriculum", href: "#tracks" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Platform", href: "#platform" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const isLanding = pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xs">
            FA
          </div>
          <span className="font-bold text-lg tracking-tight">
            FendAm Academy
          </span>
        </Link>

        {/* Desktop nav */}
        {isLanding && (
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-3">
          {/* Auth buttons */}
          <nav className="flex items-center gap-3">
            <Link
              href="/sign-in"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "text-sm"
              )}
            >
              Sign in
            </Link>
            <Link
              href="/sign-up"
              className={cn(
                buttonVariants({ size: "sm" }),
                "rounded-lg hidden sm:inline-flex"
              )}
            >
              Get started
            </Link>
          </nav>

          {/* Mobile hamburger — only on landing page */}
          {isLanding && (
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg hover:bg-secondary transition-colors"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <HugeiconsIcon
                icon={mobileMenuOpen ? Cancel01Icon : Menu01Icon}
                className="w-5 h-5 transition-transform duration-200"
              />
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu — animated slide-down */}
      {isLanding && (
        <div
          className="mobile-menu md:hidden"
          data-open={mobileMenuOpen ? "true" : "false"}
        >
          <div>
            <nav className="flex flex-col gap-1 px-6 pb-4 pt-2 border-t border-border">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center py-2.5 px-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              {/* Mobile-only: Get started button */}
              <Link
                href="/sign-up"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  buttonVariants({ size: "sm" }),
                  "rounded-lg mt-2 sm:hidden justify-center"
                )}
              >
                Get started
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
