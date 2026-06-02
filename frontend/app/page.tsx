"use client";

import Link from "next/link";
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
  CheckmarkCircle01Icon,
  Clock01Icon,
  UserGroupIcon,
  Award01Icon,
  BookOpen01Icon,
  Task01Icon,
  ComputerPhoneSyncIcon,
} from "@hugeicons/core-free-icons";

const TRACKS = [
  {
    name: "AI & Machine Learning",
    description:
      "Build production AI systems — from neural network fundamentals to deploying ML pipelines at scale.",
    icon: AiCloud01Icon,
    modules: 12,
    duration: "7 months",
  },
  {
    name: "Full-Stack Development",
    description:
      "Ship real products with Next.js, NestJS, PostgreSQL, and modern DevOps workflows.",
    icon: CodeIcon,
    modules: 14,
    duration: "7 months",
  },
  {
    name: "Cybersecurity",
    description:
      "Master penetration testing, threat modeling, incident response, and security architecture.",
    icon: Shield01Icon,
    modules: 11,
    duration: "7 months",
  },
  {
    name: "Network Hacking",
    description:
      "Deep-dive into protocol exploitation, wireless attacks, and advanced network penetration.",
    icon: Settings01Icon,
    modules: 10,
    duration: "7 months",
  },
];

const METRICS = [
  { value: "2,400+", label: "Students Enrolled" },
  { value: "94%", label: "Completion Rate" },
  { value: "4", label: "Specialized Tracks" },
  { value: "7 mo", label: "Program Duration" },
];

const FEATURES = [
  {
    icon: BookOpen01Icon,
    title: "Project-Based Curriculum",
    description:
      "Every module ends with a real deliverable. No toy examples — you build portfolio-ready work from week one.",
  },
  {
    icon: UserGroupIcon,
    title: "Cohort-Based Learning",
    description:
      "Join a small, vetted cohort. Collaborate on assignments, get peer feedback, and build your network.",
  },
  {
    icon: Task01Icon,
    title: "Instructor-Led Grading",
    description:
      "Every submission is reviewed and scored by an assigned instructor with written feedback.",
  },
  {
    icon: ComputerPhoneSyncIcon,
    title: "Structured Dashboard",
    description:
      "Track your progress, upcoming deadlines, and pending assignments from a single view.",
  },
  {
    icon: Clock01Icon,
    title: "Self-Paced Within Structure",
    description:
      "Watch lectures and complete lessons on your schedule, with cohort milestones to keep you on track.",
  },
  {
    icon: Award01Icon,
    title: "Verified Enrollment",
    description:
      "KYC-verified students only. A professional learning environment with accountability built in.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Apply and verify your identity",
    description:
      "Create an account, verify your email, and complete KYC with a valid ID and payment proof.",
  },
  {
    number: "02",
    title: "Choose your learning track",
    description:
      "Select one of four specialized paths. Your curriculum, assignments, and instructor are assigned automatically.",
  },
  {
    number: "03",
    title: "Start building",
    description:
      "Access video lectures, submit assignments, track progress, and get graded feedback from day one.",
  },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-24 pb-20 lg:pt-36 lg:pb-28 animate-fade-up stagger-1 spotlight overflow-hidden">
          {/* Floating decorative shapes */}
          <div className="float-shape w-16 h-16 top-24 left-[12%] rotate-12 hidden lg:block" style={{ animationDelay: '0s' }} />
          <div className="float-shape w-10 h-10 top-40 right-[15%] rotate-45 hidden lg:block" style={{ animationDelay: '3s' }} />
          <div className="float-shape w-8 h-8 bottom-20 left-[20%] -rotate-6 hidden lg:block" style={{ animationDelay: '6s' }} />
          <div className="float-shape w-12 h-12 bottom-32 right-[10%] rotate-12 hidden lg:block" style={{ animationDelay: '9s' }} />
          <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-px bg-primary/40" />
              <p className="text-sm font-semibold tracking-wide uppercase text-primary">
                Applications open — Q3 2026 cohort
              </p>
              <span className="w-8 h-px bg-primary/40" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              Forge Your Career in Advanced Technology
              {/* <br className="hidden sm:block" /> build what&apos;s next. */}
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              A 7-month, cohort-based program across AI, full-stack development,
              and cybersecurity. Structured curriculum, real instructors, and
              graded assignments — not just another video library.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/sign-up"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full sm:w-auto px-8 h-13 text-base rounded-xl"
                )}
              >
                Apply to the Academy
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  className="ml-2 w-4 h-4"
                />
              </Link>
              <Link
                href="#tracks"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full sm:w-auto px-8 h-13 text-base rounded-xl"
                )}
              >
                Explore the curriculum
              </Link>
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="border-y border-border animate-fade-up stagger-2 relative overflow-hidden">
          {/* Dot cluster accents */}
          <div className="absolute top-0 left-0 w-24 h-full dot-cluster opacity-30 pointer-events-none hidden lg:block" />
          <div className="absolute top-0 right-0 w-24 h-full dot-cluster opacity-30 pointer-events-none hidden lg:block" />
          <div className="container mx-auto px-6 max-w-5xl relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
              {METRICS.map((m) => (
                <div key={m.label} className="py-10 px-6 text-center">
                  <p className="text-3xl lg:text-4xl font-bold tracking-tight mb-1">
                    {m.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tracks */}
        <section id="tracks" className="py-24 lg:py-32 animate-fade-up stagger-3">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="max-w-2xl mb-16">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-5 h-px bg-primary" />
                <p className="text-sm font-semibold tracking-wide uppercase text-primary">
                  Curriculum
                </p>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
                Four tracks. One standard of excellence.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Each track is a focused, 7-month program with structured
                modules, video lectures, and graded assignments reviewed by
                assigned instructors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TRACKS.map((track) => (
                <div
                  key={track.name}
                  className="group relative p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors hover-lift"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                      <HugeiconsIcon
                        icon={track.icon}
                        className="w-6 h-6 text-primary"
                      />
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{track.modules} modules</span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span>{track.duration}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{track.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {track.description}
                  </p>
                  <Link
                    href="/sign-up"
                    className="inline-flex items-center text-sm font-semibold text-primary hover:underline underline-offset-4"
                  >
                    Apply for this track
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      className="w-3.5 h-3.5 ml-1"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-24 lg:py-32 border-t border-border animate-fade-up stagger-4">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="max-w-2xl mb-16">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-5 h-px bg-primary" />
                <p className="text-sm font-semibold tracking-wide uppercase text-primary">
                  How it works
                </p>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
                From application to your first graded assignment.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We keep onboarding simple so you can start learning fast.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {STEPS.map((step, i) => (
                <div key={step.number} className={cn(i < STEPS.length - 1 && 'md:step-connector')}>
                  <div className="w-14 h-14 rounded-2xl border border-border bg-card flex items-center justify-center mb-5">
                    <span className="text-lg font-bold text-primary tracking-tight">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="platform" className="py-24 lg:py-32 border-t border-border animate-fade-up stagger-5">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="max-w-2xl mb-16">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-5 h-px bg-primary" />
                <p className="text-sm font-semibold tracking-wide uppercase text-primary">
                  Platform
                </p>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
                Everything you need to learn seriously.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Built for accountability and outcomes — not passive video
                watching.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {FEATURES.map((feature) => (
                <div key={feature.title} className="hover-lift">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
                    <HugeiconsIcon
                      icon={feature.icon}
                      className="w-5 h-5 text-primary"
                    />
                  </div>
                  <h3 className="text-base font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social proof / Testimonial */}
        <section className="py-24 lg:py-32 border-t border-border animate-fade-up stagger-5">
          <div className="container mx-auto px-6 max-w-3xl text-center relative">
            <div className="quote-mark">
              <HugeiconsIcon
                icon={CheckmarkCircle01Icon}
                className="w-10 h-10 text-primary mx-auto mb-8 relative z-10"
              />
              <blockquote className="text-2xl lg:text-3xl font-semibold tracking-tight leading-snug mb-8 relative z-10">
                &ldquo;FendAm gave me the structure I was missing. The graded
                assignments and instructor feedback made the difference between
                watching tutorials and actually shipping work.&rdquo;
              </blockquote>
            </div>
            <div>
              <p className="font-semibold">Adaeze N.</p>
              <p className="text-sm text-muted-foreground">
                Full-Stack Development Track — Cohort 2
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 lg:py-32 border-t border-border animate-fade-up stagger-6">
          <div className="container mx-auto px-6 max-w-3xl text-center relative">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
                Ready to commit to your craft?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
                Applications for the Q3 2026 cohort are open now. Seats are
                limited to maintain instructor-to-student quality.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/sign-up"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full sm:w-auto px-10 h-13 text-base rounded-xl"
                )}
              >
                Apply now
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  className="ml-2 w-4 h-4"
                />
              </Link>
              <Link
                href="/sign-in"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full sm:w-auto px-10 h-13 text-base rounded-xl"
                )}
              >
                Sign in
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container mx-auto px-6 max-w-5xl py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xs">
                  FA
                </div>
                <span className="font-bold text-lg">FendAm Academy</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A 7-month academy program for engineers building careers in AI,
                software, and security.
              </p>
            </div>

            {/* Program */}
            <div>
              <p className="text-sm font-semibold mb-4">Program</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link href="#tracks" className="hover:text-foreground transition-colors">
                    AI & Machine Learning
                  </Link>
                </li>
                <li>
                  <Link href="#tracks" className="hover:text-foreground transition-colors">
                    Full-Stack Development
                  </Link>
                </li>
                <li>
                  <Link href="#tracks" className="hover:text-foreground transition-colors">
                    Cybersecurity
                  </Link>
                </li>
                <li>
                  <Link href="#tracks" className="hover:text-foreground transition-colors">
                    Network Hacking
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="text-sm font-semibold mb-4">Company</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <p className="text-sm font-semibold mb-4">Legal</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} FendAm Academy. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">
                Twitter
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                LinkedIn
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
