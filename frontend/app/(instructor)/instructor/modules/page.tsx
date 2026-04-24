"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { apiFetch } from "@/lib/api/fetcher";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { HugeiconsIcon } from "@hugeicons/react";
import { Book02Icon, Task01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";

interface InstructorModule {
  id: string;
  title: string;
  orderIndex: number;
  track: { id: string; name: string };
  lessonCount: number;
  assignmentCount: number;
  assignedAt: string;
}

export default function InstructorModulesPage() {
  const [modules, setModules] = useState<InstructorModule[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiFetch<InstructorModule[]>("/instructor/modules")
      .then(setModules)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-64" />
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-32" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Your Modules</h1>
        <p className="text-muted-foreground mt-1">
          Modules assigned to you for teaching
        </p>
      </div>

      {modules.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          No modules assigned yet. Contact an admin to get started.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {modules.map((mod) => (
            <Card key={mod.id} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{mod.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {mod.track.name}
                    </p>
                  </div>
                  <Badge variant="secondary">#{mod.orderIndex}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <HugeiconsIcon icon={Book02Icon} className="w-4 h-4" />
                    <span>{mod.lessonCount} lessons</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <HugeiconsIcon icon={Task01Icon} className="w-4 h-4" />
                    <span>{mod.assignmentCount} assignments</span>
                  </div>
                </div>
                <Link
                  href={`/instructor/modules/${mod.id}`}
                  className="inline-flex items-center text-sm font-semibold text-primary hover:gap-2 transition-all"
                >
                  Manage module <HugeiconsIcon icon={ArrowRight01Icon} className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
