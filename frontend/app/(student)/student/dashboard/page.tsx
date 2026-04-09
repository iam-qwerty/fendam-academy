"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { apiFetch, ApiError } from "@/lib/api/fetcher";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";

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
      <div className="space-y-6">
        <div>
          <Skeleton className="h-8 w-48 mb-2" />
          <Skeleton className="h-4 w-72" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-40" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="rounded-lg bg-destructive/10 border border-destructive/20 px-6 py-4 text-destructive max-w-md text-center">
          <p className="font-medium">Unable to load dashboard</p>
          <p className="text-sm mt-1">{error}</p>
        </div>
      </div>
    );
  }

  if (!data) return null;

  const statusVariant =
    data.enrollmentStatus === "enrolled"
      ? "default"
      : data.enrollmentStatus === "approved"
        ? "secondary"
        : "outline";

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Student Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome to your learning journey in{" "}
          <span className="font-medium text-foreground">{data.track.name}</span>
        </p>
      </div>

      {/* Status cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Progress */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Course Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{data.progressPercent}%</div>
            <Progress value={data.progressPercent} className="mt-3 h-2" />
          </CardContent>
        </Card>

        {/* Enrollment Status */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Enrollment Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant={statusVariant} className="text-sm capitalize">
              {data.enrollmentStatus}
            </Badge>
            <p className="text-xs text-muted-foreground mt-2">
              KYC: <span className="capitalize">{data.kycStatus.replace("_", " ")}</span>
            </p>
          </CardContent>
        </Card>

        {/* Next Lesson */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Next Lesson
            </CardTitle>
          </CardHeader>
          <CardContent>
            {data.nextLesson ? (
              <div>
                <p className="font-medium text-sm">{data.nextLesson.title}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {data.nextLesson.moduleTitle}
                </p>
                <Link
                  href={`/student/lessons/${data.nextLesson.id}`}
                  className={buttonVariants({ size: "sm", className: "mt-3" })}
                >
                  Continue
                </Link>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                All lessons completed! 🎉
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Pending Assignments */}
      {data.pendingAssignments.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Pending Assignments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {data.pendingAssignments.map((assignment) => (
                <div
                  key={assignment.id}
                  className="flex items-center justify-between rounded-lg border border-border p-4"
                >
                  <div>
                    <p className="font-medium text-sm">{assignment.title}</p>
                    <p className="text-xs text-muted-foreground">
                      Due:{" "}
                      {new Date(assignment.dueDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <Link
                    href="/student/assignments"
                    className={buttonVariants({ variant: "outline", size: "sm" })}
                  >
                    Submit
                  </Link>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
