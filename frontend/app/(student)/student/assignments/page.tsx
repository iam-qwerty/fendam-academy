"use client";

import { useRef, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiFetch, ApiError } from "@/lib/api/fetcher";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

interface Module {
  id: string;
  title: string;
  assignments: { id: string; title: string; dueDate: string }[];
}

export default function StudentAssignmentsPage() {
  const queryClient = useQueryClient();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [submitting, setSubmitting] = useState<string | null>(null);
  const [activeAssignmentId, setActiveAssignmentId] = useState<string | null>(null);

  const { data: modules = [], isLoading } = useQuery({
    queryKey: ["student", "modules"],
    queryFn: () => apiFetch<Module[]>("/student/modules"),
    staleTime: 10 * 60 * 1000,
  });

  const submitMutation = useMutation({
    mutationFn: async ({ assignmentId, file }: { assignmentId: string; file: File }) => {
      const { signedUrl, fileKey } = await apiFetch<{ signedUrl: string; fileKey: string }>(
        "/uploads/presigned",
        {
          method: "POST",
          body: JSON.stringify({ filename: file.name, contentType: file.type }),
        },
      );

      const uploadRes = await fetch(signedUrl, {
        method: "PUT",
        body: file,
        headers: { "Content-Type": file.type },
      });

      if (!uploadRes.ok) throw new Error("Upload to storage failed");

      await apiFetch("/student/submissions", {
        method: "POST",
        body: JSON.stringify({ assignmentId, fileKey }),
      });
    },
    onSuccess: () => {
      toast.success("Assignment submitted successfully!");
      queryClient.invalidateQueries({ queryKey: ["student", "modules"] });
      queryClient.invalidateQueries({ queryKey: ["student", "dashboard"] });
    },
    onError: (err) => {
      if (err instanceof ApiError) toast.error(err.message);
      else toast.error("Submission failed. Please try again.");
    },
    onSettled: () => {
      setSubmitting(null);
      setActiveAssignmentId(null);
    },
  });

  function openFilePicker(assignmentId: string) {
    setActiveAssignmentId(assignmentId);
    fileInputRef.current?.click();
  }

  async function handleFileSelected(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file || !activeAssignmentId) return;

    e.target.value = "";

    const allowedTypes = ["application/pdf", "image/jpeg", "image/png", "application/zip"];
    if (!allowedTypes.includes(file.type)) {
      toast.error("File type not allowed. Use PDF, JPG, PNG, or ZIP.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      toast.error("File too large. Maximum 10MB.");
      return;
    }

    setSubmitting(activeAssignmentId);
    submitMutation.mutate({ assignmentId: activeAssignmentId, file });
  }

  if (isLoading) {
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
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.jpg,.jpeg,.png,.zip"
        className="hidden"
        onChange={handleFileSelected}
      />

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
            const isSubmitting = submitting === assignment.id;
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
                    disabled={isSubmitting || isPastDue}
                    onClick={() => openFilePicker(assignment.id)}
                  >
                    {isSubmitting ? "Uploading..." : "Upload & Submit"}
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
