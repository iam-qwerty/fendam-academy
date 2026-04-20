"use client";

import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";
import { 
  AiCloud01Icon, 
  CodeIcon, 
  Shield01Icon, 
  Settings01Icon,
  ArrowRight01Icon,
  CheckmarkCircle01Icon
} from "@hugeicons/core-free-icons";

const TRACKS = [
  {
    name: "AI & Machine Learning",
    description: "Build real-world AI applications with modern ML frameworks and neural networks.",
    icon: <HugeiconsIcon icon={AiCloud01Icon} className="w-8 h-8 text-primary" />,
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    name: "Full-Stack Dev",
    description: "Master frontend and backend with production-grade tools like Next.js and NestJS.",
    icon: <HugeiconsIcon icon={CodeIcon} className="w-8 h-8 text-blue-400" />,
    color: "from-indigo-500/20 to-purple-500/20",
  },
  {
    name: "Cybersecurity",
    description: "Learn penetration testing, defensive security, and incident response strategies.",
    icon: <HugeiconsIcon icon={Shield01Icon} className="w-8 h-8 text-purple-400" />,
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    name: "Network Hacking",
    description: "Deep dive into network protocols, exploitation techniques, and ethical hacking.",
    icon: <HugeiconsIcon icon={Settings01Icon} className="w-8 h-8 text-cyan-400" />,
    color: "from-cyan-500/20 to-teal-500/20",
  },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen background-grid">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-40 glow-mesh">
          <div className="container mx-auto px-6 relative z-10 text-center lg:text-left">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="reveal">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6 animate-pulse">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Enrolling for Q3 2026
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
                  Forge Your Career in <br />
                  <span className="text-gradient">Advanced Technology</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
                  Join an elite academy designed for the next generation of tech leaders.
                  7 months of intensive, project-based learning to take you from zero to industry-ready.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    href="/sign-up"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "w-full sm:w-auto px-8 h-14 text-lg rounded-2xl shadow-[0_20px_40px_-10px_rgba(3,169,244,0.3)] hover:shadow-primary/40 transition-all"
                    )}
                  >
                    Apply to Academy
                    <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    href="#tracks"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "w-full sm:w-auto px-8 h-14 text-lg rounded-2xl glass hover:bg-white/5"
                    )}
                  >
                    View Curriculum
                  </Link>
                </div>

                <div className="mt-12 flex items-center gap-6 justify-center lg:justify-start grayscale opacity-50">
                  <span className="text-sm font-medium">TRUSTED BY ALUMNI AT:</span>
                  <div className="flex gap-8 font-bold text-xl">
                    <span>GOOGLE</span>
                    <span>META</span>
                    <span>AZURE</span>
                  </div>
                </div>
              </div>

              <div className="relative hidden lg:block animate-float reveal" style={{ animationDelay: "0.2s" }}>
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src="/hero-bg.png"
                    alt="Cybersecurity and Tech Learning"
                    width={800}
                    height={600}
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent"></div>

                  {/* Floating Stats */}
                  <div className="absolute bottom-6 left-6 glass p-4 rounded-2xl flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">94%</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Placement Rate</p>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 blur-3xl -z-10 animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-500/10 blur-3xl -z-10 animate-pulse" style={{ animationDelay: "1s" }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Tracks Section */}
        <section id="tracks" className="container mx-auto px-6 py-24 relative">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Choose Your Path</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our curriculum is built by industry veterans to ensure you learn the most
              relevant skills for today&apos;s market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TRACKS.map((track, index) => (
              <div
                key={track.name}
                className="group relative p-8 rounded-[2rem] border border-border/50 bg-card/30 hover:bg-card/50 transition-all hover:-translate-y-2 reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br transition-transform group-hover:scale-110",
                  track.color
                )}>
                  {track.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {track.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {track.description}
                </p>
                <Link
                  href={`/tracks/${track.name.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                  className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 transition-all"
                >
                  Learn more <HugeiconsIcon icon={ArrowRight01Icon} className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="container mx-auto px-6 py-24">
          <div className="relative rounded-[3rem] overflow-hidden glass p-12 lg:p-24 text-center reveal">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 -z-10"></div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to start your journey?</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Applications are currently open for our next cohort.
              Limited seats available for high-impact learning.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/sign-up"
                className={cn(buttonVariants({ size: "lg" }), "rounded-2xl px-10")}
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-2xl px-10")}
              >
                Talk to an Advisor
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/40 py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xs">
              FA
            </div>
            <span className="font-bold text-lg">FendAm Academy</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FendAm Academy. Built for the future.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary">Privacy</Link>
            <Link href="#" className="hover:text-primary">Terms</Link>
            <Link href="#" className="hover:text-primary">Twitter</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
