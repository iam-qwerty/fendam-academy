"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const TRACKS = [
  {
    name: "AI / Machine Learning",
    description: "Build real-world AI applications with modern ML frameworks.",
    icon: "🤖",
  },
  {
    name: "Full-Stack Development",
    description: "Master frontend and backend with production-grade tools.",
    icon: "💻",
  },
  {
    name: "Cybersecurity",
    description: "Learn penetration testing and defensive security.",
    icon: "🛡️",
  },
  {
    name: "Network Hacking",
    description: "Deep dive into protocols, exploitation, and ethical hacking.",
    icon: "🌐",
  },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b border-border/50">
        <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
              FA
            </div>
            <span className="font-semibold text-lg">FendAm Academy</span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/sign-in"
              className={buttonVariants({ variant: "ghost", size: "sm" })}
            >
              Sign in
            </Link>
            <Link
              href="/sign-up"
              className={buttonVariants({ size: "sm" })}
            >
              Get started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Launch your tech career
            <br />
            <span className="text-muted-foreground">in 7 months</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            FendAm Academy offers intensive, hands-on training in four
            cutting-edge tracks. Learn from industry experts and build a
            portfolio that gets you hired.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/sign-up"
              className={buttonVariants({ size: "lg" })}
            >
              Apply now
            </Link>
            <Link
              href="#tracks"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Explore tracks
            </Link>
          </div>
        </section>

        {/* Tracks */}
        <section id="tracks" className="max-w-6xl mx-auto px-6 pb-24">
          <h2 className="text-2xl font-bold text-center mb-12">
            Four specialized tracks
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRACKS.map((track) => (
              <div
                key={track.name}
                className="rounded-xl border border-border p-6 hover:border-primary/50 hover:shadow-md transition-all group"
              >
                <div className="text-3xl mb-4">{track.icon}</div>
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                  {track.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {track.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} FendAm Academy. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
