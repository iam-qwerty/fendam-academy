"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { apiFetch, ApiError } from "@/lib/api/fetcher";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  Calendar01Icon
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
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    apiFetch<DashboardData>("/student/dashboard")
      .then(setData)
      .catch((err) => {
        if (err instanceof ApiError) {
          setError(err.message);
        } else {
          setError("Failed to load dashboard");
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="space-y-8 animate-pulse">
        <div className="space-y-3">
          <Skeleton className="h-10 w-64 rounded-xl" />
          <Skeleton className="h-5 w-96 rounded-lg" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-48 rounded-[2rem]" />
          ))}
        </div>
        <Skeleton className="h-64 rounded-[2rem]" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="glass p-10 rounded-[2.5rem] border-destructive/20 text-center max-w-md">
          <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6 text-destructive">
            <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-8 h-8 rotate-45" />
          </div>
          <h2 className="text-xl font-bold mb-2">Something went wrong</h2>
          <p className="text-muted-foreground mb-6">{error}</p>
          <Button onClick={() => window.location.reload()} variant="outline" className="rounded-xl">
            Try again
          </Button>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">Dashboard</h1>
          <p className="text-muted-foreground text-lg">
            Welcome back! You&apos;re mastering{" "}
            <span className="text-primary font-bold">{data.track.name}</span>
          </p>
        </div>
        <div className="hidden lg:flex items-center gap-3 glass px-4 py-2 rounded-2xl border-white/5">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-sm font-semibold uppercase tracking-wider opacity-70">Academy Connected</span>
        </div>
      </div>

      {/* Status cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Progress Card */}
        <div className="glass p-8 rounded-[2.5rem] border-white/5 shadow-xl hover:shadow-primary/5 transition-all group">
          <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary transition-transform group-hover:scale-110">
              <HugeiconsIcon icon={ChartLineData01Icon} className="w-6 h-6" />
            </div>
            <Badge className="bg-primary/20 text-primary border-none text-xs rounded-full px-3 py-1 font-bold">LIVE</Badge>
          </div>
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-1">Course Progress</p>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-4xl font-black">{data.progressPercent}%</span>
            <span className="text-xs text-muted-foreground font-medium">completed</span>
          </div>
          <Progress value={data.progressPercent} className="h-2.5 rounded-full bg-white/5" />
        </div>

        {/* Enrollment Card */}
        <div className="glass p-8 rounded-[2.5rem] border-white/5 shadow-xl hover:shadow-purple-500/5 transition-all group">
          <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 transition-transform group-hover:scale-110">
              <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-6 h-6" />
            </div>
          </div>
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-1">Status</p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold capitalize">{data.enrollmentStatus}</span>
              <div className="w-1 h-1 rounded-full bg-muted-foreground/30"></div>
              <span className="text-sm text-muted-foreground uppercase tracking-widest">KYC: {data.kycStatus.replace("_", " ")}</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">Your identity has been verified and your enrollment is active for the current semester.</p>
          </div>
        </div>

        {/* Next Lesson Card */}
        <div className="glass p-8 rounded-[2.5rem] border-white/5 shadow-xl hover:shadow-blue-500/5 transition-all group">
          <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 transition-transform group-hover:scale-110">
              <HugeiconsIcon icon={CourseIcon} className="w-6 h-6" />
            </div>
          </div>
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-1">Up Next</p>
          {data.nextLesson ? (
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold line-clamp-1">{data.nextLesson.title}</h3>
                <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{data.nextLesson.moduleTitle}</p>
              </div>
              <Link
                href={`/student/lessons/${data.nextLesson.id}`}
                className={cn(buttonVariants({ size: "sm" }), "w-full rounded-xl h-11 bg-white/5 hover:bg-white/10 border-white/5 text-primary-foreground")}
              >
                Jump In <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-4 text-center">
              <p className="text-sm font-bold text-primary">Mission Complete!</p>
              <p className="text-xs text-muted-foreground">All lessons up to date.</p>
            </div>
          )}
        </div>
      </div>

      {/* Pending Assignments */}
      {data.pendingAssignments.length > 0 ? (
        <div className="glass p-8 md:p-10 rounded-[2.5rem] border-white/5 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl -z-10"></div>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400">
                <HugeiconsIcon icon={Task01Icon} className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">Pending Tasks</h2>
            </div>
            <Link href="/student/assignments" className="text-sm font-bold text-primary hover:underline">View All</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.pendingAssignments.map((assignment) => (
              <div
                key={assignment.id}
                className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 p-6 hover:bg-white/10 transition-colors group/task"
              >
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex flex-col items-center justify-center bg-background/50">
                    <HugeiconsIcon icon={Calendar01Icon} className="w-4 h-4 text-muted-foreground mb-0.5" />
                    <span className="text-[10px] font-bold uppercase text-muted-foreground">{new Date(assignment.dueDate).toLocaleString('en-US', { month: 'short' })}</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg group-hover/task:text-primary transition-colors">{assignment.title}</p>
                    <p className="text-xs text-muted-foreground">
                      Deadline:{" "}
                      {new Date(assignment.dueDate).toLocaleDateString("en-US", {
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
                <Link
                  href="/student/assignments"
                  className={cn(buttonVariants({ variant: "outline", size: "sm" }), "rounded-xl border-white/10 hover:bg-white/5")}
                >
                  Submit
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="glass p-12 rounded-[2.5rem] border-white/5 text-center">
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
            <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold mb-2">No pending assignments</h2>
          <p className="text-muted-foreground">You&apos;re all caught up with your tasks. Take a moment to review your notes!</p>
        </div>
      )}
    </div>
  );
}

