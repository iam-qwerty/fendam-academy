"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { apiFetch, ApiError } from "@/lib/api/fetcher";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ChartLineData01Icon,
  CheckmarkCircle01Icon,
  CourseIcon,
  Task01Icon,
  ArrowRight01Icon,
  Calendar01Icon,
} from "@hugeicons/core-free-icons";

interface DashboardData {
  track: { id: string; name: string };
  enrollmentStatus: string;
  kycStatus: string;
  progressPercent: number;
  nextLesson: { id: string; title: string; moduleTitle: string } | null;
  pendingAssignments: { id: string; title: string; dueDate: string }[];
}

export default function StudentDashboard() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["student", "dashboard"],
    queryFn: () => apiFetch<DashboardData>("/student/dashboard"),
    staleTime: 2 * 60 * 1000,
  });

  if (isLoading) {
    return (
      <div className="space-y-8">
        <div className="space-y-3">
          <Skeleton className="h-10 w-64 rounded-xl" />
          <Skeleton className="h-5 w-96 rounded-lg" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-48 rounded-2xl" />
          ))}
        </div>
        <Skeleton className="h-64 rounded-2xl" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="border border-destructive/20 bg-card rounded-2xl p-10 text-center max-w-md">
          <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6 text-destructive">
            <HugeiconsIcon
              icon={CheckmarkCircle01Icon}
              className="w-8 h-8 rotate-45"
            />
          </div>
          <h2 className="text-xl font-bold mb-2">Something went wrong</h2>
          <p className="text-muted-foreground mb-6">
            {error instanceof ApiError
              ? error.message
              : "Failed to load dashboard"}
          </p>
          <Button
            onClick={() => window.location.reload()}
            variant="outline"
            className="rounded-xl"
          >
            Try again
          </Button>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="space-y-10">
      {/* Decorative dot cluster */}
      <div className="absolute top-0 right-0 w-40 h-40 dot-cluster opacity-20 pointer-events-none hidden lg:block -z-10" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 animate-fade-up relative">
        <div>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-px bg-primary" />
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Student
            </p>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-2">
            Dashboard
          </h1>
          <p className="text-muted-foreground">
            Welcome back — you&apos;re in{" "}
            <span className="text-foreground font-semibold">
              {data.track.name}
            </span>
          </p>
        </div>
        <div className="hidden lg:flex items-center gap-2.5 border border-border bg-card px-4 py-2 rounded-xl">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Connected
          </span>
        </div>
      </div>

      {/* Status cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Progress Card */}
        <div className="card-clean hover-lift animate-fade-up stagger-1">
          <div className="flex items-center justify-between mb-6">
            <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center">
              <HugeiconsIcon
                icon={ChartLineData01Icon}
                className="w-5 h-5 text-primary"
              />
            </div>
            <Badge
              variant="outline"
              className="text-xs font-semibold rounded-lg px-2.5 py-0.5"
            >
              Live
            </Badge>
          </div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
            Course Progress
          </p>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-3xl font-bold tracking-tight">
              {data.progressPercent}%
            </span>
            <span className="text-sm text-muted-foreground">completed</span>
          </div>
          <Progress
            value={data.progressPercent}
            className="h-2 rounded-full"
          />
        </div>

        {/* Enrollment Card */}
        <div className="card-clean hover-lift animate-fade-up stagger-2">
          <div className="flex items-center justify-between mb-6">
            <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center">
              <HugeiconsIcon
                icon={CheckmarkCircle01Icon}
                className="w-5 h-5 text-primary"
              />
            </div>
          </div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
            Enrollment Status
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold capitalize">
                {data.enrollmentStatus}
              </span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
              <span className="text-sm text-muted-foreground">
                KYC: {data.kycStatus.replace("_", " ")}
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Your identity has been verified and your enrollment is active.
            </p>
          </div>
        </div>

        {/* Next Lesson Card */}
        <div className="card-clean hover-lift animate-fade-up stagger-3">
          <div className="flex items-center justify-between mb-6">
            <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center">
              <HugeiconsIcon
                icon={CourseIcon}
                className="w-5 h-5 text-primary"
              />
            </div>
          </div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
            Up Next
          </p>
          {data.nextLesson ? (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold line-clamp-1">
                  {data.nextLesson.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {data.nextLesson.moduleTitle}
                </p>
              </div>
              <Link
                href={`/student/lessons/${data.nextLesson.id}`}
                className={cn(
                  buttonVariants({ size: "sm" }),
                  "w-full rounded-xl"
                )}
              >
                Jump In
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  className="ml-2 w-4 h-4"
                />
              </Link>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-4 text-center">
              <p className="text-sm font-bold text-primary">
                All caught up!
              </p>
              <p className="text-xs text-muted-foreground">
                No pending lessons.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Pending Assignments */}
      {data.pendingAssignments.length > 0 ? (
        <div className="border border-border bg-card rounded-2xl p-8 md:p-10 animate-fade-up stagger-4 relative overflow-hidden">
          {/* Subtle decorative corner dot cluster */}
          <div className="absolute -top-4 -right-4 w-32 h-32 dot-cluster opacity-15 pointer-events-none" />
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                <HugeiconsIcon
                  icon={Task01Icon}
                  className="w-5 h-5 text-primary"
                />
              </div>
              <h2 className="text-xl font-bold tracking-tight">
                Pending Assignments
              </h2>
            </div>
            <Link
              href="/student/assignments"
              className="text-sm font-semibold text-primary hover:underline underline-offset-4"
            >
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.pendingAssignments.map((assignment) => (
              <div
                key={assignment.id}
                className="flex items-center justify-between rounded-xl border border-border bg-background p-5 hover:border-primary/30 transition-colors group/task"
              >
                <div className="flex gap-4 items-center">
                  <div className="w-11 h-11 rounded-lg border border-border flex flex-col items-center justify-center bg-secondary/50">
                    <HugeiconsIcon
                      icon={Calendar01Icon}
                      className="w-4 h-4 text-muted-foreground mb-0.5"
                    />
                    <span className="text-[9px] font-bold uppercase text-muted-foreground">
                      {new Date(assignment.dueDate).toLocaleString("en-US", {
                        month: "short",
                      })}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold group-hover/task:text-primary transition-colors">
                      {assignment.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Due{" "}
                      {new Date(assignment.dueDate).toLocaleDateString(
                        "en-US",
                        { day: "numeric", month: "short", year: "numeric" }
                      )}
                    </p>
                  </div>
                </div>
                <Link
                  href="/student/assignments"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "rounded-lg shrink-0"
                  )}
                >
                  Submit
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="border border-border bg-card rounded-2xl p-12 text-center animate-fade-up stagger-4">
          <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-5">
            <HugeiconsIcon
              icon={CheckmarkCircle01Icon}
              className="w-8 h-8 text-primary"
            />
          </div>
          <h2 className="text-xl font-bold mb-2">No pending assignments</h2>
          <p className="text-muted-foreground text-sm">
            You&apos;re all caught up. Take a moment to review your notes.
          </p>
        </div>
      )}
    </div>
  );
}
