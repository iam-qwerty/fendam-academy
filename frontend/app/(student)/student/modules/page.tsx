"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { apiFetch } from "@/lib/api/fetcher";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

interface Module {
  id: string;
  title: string;
  orderIndex: number;
  lessons: { id: string; title: string; orderIndex: number }[];
  assignments: { id: string; title: string; dueDate: string }[];
}

export default function StudentModulesPage() {
  const [modules, setModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiFetch<Module[]>("/student/modules")
      .then(setModules)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-48" />
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-32" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Modules</h1>
        <p className="text-muted-foreground mt-1">
          Your learning track modules and lessons
        </p>
      </div>

      <div className="space-y-4">
        {modules.map((mod) => (
          <Card key={mod.id} className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">
                  <span className="text-muted-foreground font-normal mr-2">
                    Module {mod.orderIndex}
                  </span>
                  {mod.title}
                </CardTitle>
                <div className="flex gap-2">
                  <Badge variant="secondary">
                    {mod.lessons.length} lessons
                  </Badge>
                  <Badge variant="outline">
                    {mod.assignments.length} assignments
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {mod.lessons.map((lesson) => (
                  <Link
                    key={lesson.id}
                    href={`/student/lessons/${lesson.id}`}
                    className="flex items-center gap-3 rounded-lg border border-border px-4 py-3 text-sm hover:bg-accent/50 transition-colors"
                  >
                    <span className="text-muted-foreground text-xs font-mono w-6">
                      {lesson.orderIndex}
                    </span>
                    <span>{lesson.title}</span>
                  </Link>
                ))}
                {mod.lessons.length === 0 && (
                  <p className="text-sm text-muted-foreground py-2">
                    No lessons added yet
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}

        {modules.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No modules available yet
          </div>
        )}
      </div>
    </div>
  );
}
