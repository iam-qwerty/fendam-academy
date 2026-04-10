"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api/fetcher";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface Module {
  id: string;
  title: string;
  assignments: { id: string; title: string; dueDate: string }[];
}

export default function StudentAssignmentsPage() {
  const [modules, setModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState<string | null>(null);

  useEffect(() => {
    apiFetch<Module[]>("/student/modules")
      .then(setModules)
      .catch(() => { })
      .finally(() => setLoading(false));
  }, []);

  async function handleSubmit(assignmentId: string) {
    // In a real implementation, this would open a file picker, upload to R2 via presigned URL,
    // then submit the fileKey. For MVP, we show the flow structure.
    setSubmitting(assignmentId);

    try {
      // Step 1: Get presigned URL
      // const { signedUrl, fileKey } = await apiFetch('/uploads/presigned', {
      //   method: 'POST',
      //   body: JSON.stringify({ filename: 'submission.pdf', contentType: 'application/pdf' }),
      // });

      // Step 2: Upload file directly to R2
      // await fetch(signedUrl, { method: 'PUT', body: file });

      // Step 3: Submit fileKey
      // await apiFetch('/student/submissions', {
      //   method: 'POST',
      //   body: JSON.stringify({ assignmentId, fileKey }),
      // });

      alert("File upload UI coming soon — R2 integration is stubbed for MVP");
    } finally {
      setSubmitting(null);
    }
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-48" />
        {[1, 2].map((i) => (
          <Skeleton key={i} className="h-32" />
        ))}
      </div>
    );
  }

  const allAssignments = modules.flatMap((m) =>
    m.assignments.map((a) => ({ ...a, moduleTitle: m.title })),
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Assignments</h1>
        <p className="text-muted-foreground mt-1">
          View and submit your assignments
        </p>
      </div>

      {allAssignments.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          No assignments yet
        </div>
      ) : (
        <div className="space-y-4">
          {allAssignments.map((assignment) => {
            const isPastDue = new Date(assignment.dueDate) < new Date();
            return (
              <Card key={assignment.id}>
                <CardContent className="flex items-center justify-between p-6">
                  <div>
                    <p className="font-medium">{assignment.title}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {assignment.moduleTitle}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant={isPastDue ? "destructive" : "outline"}>
                        {isPastDue ? "Past due" : "Due"}{" "}
                        {new Date(assignment.dueDate).toLocaleDateString(
                          "en-US",
                          { month: "short", day: "numeric" },
                        )}
                      </Badge>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={submitting === assignment.id}
                    onClick={() => handleSubmit(assignment.id)}
                  >
                    {submitting === assignment.id
                      ? "Submitting..."
                      : "Submit"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
