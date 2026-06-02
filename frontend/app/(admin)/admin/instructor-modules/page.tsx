"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/fetcher";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

interface InstructorModuleAssignment {
  id: string;
  instructor: { id: string; name?: string; email?: string };
  module: { title: string; track: { name: string } };
  assignedAt: string;
}

interface AssignmentsResponse {
  data: InstructorModuleAssignment[];
  total: number;
  page: number;
  totalPages: number;
}

export default function AdminInstructorModulesPage() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [instructorId, setInstructorId] = useState("");
  const [moduleId, setModuleId] = useState("");
  const [removing, setRemoving] = useState<string | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: ["admin", "instructor-modules", { page }],
    queryFn: () =>
      apiFetch<AssignmentsResponse>(`/admin/instructor-modules?page=${page}`),
    staleTime: 5 * 60 * 1000,
  });
  const assignments = data?.data ?? [];
  const totalPages = data?.totalPages ?? 1;

  const assignMutation = useMutation({
    mutationFn: () =>
      apiFetch("/admin/instructor-modules", {
        method: "POST",
        body: JSON.stringify({
          instructorId: instructorId.trim(),
          moduleId: moduleId.trim(),
        }),
      }),
    onSuccess: () => {
      toast.success("Instructor assigned to module");
      setInstructorId("");
      setModuleId("");
      setShowForm(false);
      queryClient.invalidateQueries({ queryKey: ["admin", "instructor-modules"] });
    },
    onError: () => {
      // Toast already handled by apiFetch
    },
  });

  const removeMutation = useMutation({
    mutationFn: (assignmentId: string) =>
      apiFetch(`/admin/instructor-modules/${assignmentId}`, { method: "DELETE" }),
    onSuccess: () => {
      toast.success("Instructor unassigned from module");
      queryClient.invalidateQueries({ queryKey: ["admin", "instructor-modules"] });
    },
    onError: () => {
      // Toast already handled by apiFetch
    },
    onSettled: () => {
      setRemoving(null);
    },
  });

  async function handleAssign(e: React.FormEvent) {
    e.preventDefault();
    if (!instructorId.trim() || !moduleId.trim()) {
      toast.error("Both Instructor ID and Module ID are required");
      return;
    }
    assignMutation.mutate();
  }

  async function handleRemove(assignmentId: string) {
    setRemoving(assignmentId);
    removeMutation.mutate(assignmentId);
  }

  if (isLoading && assignments.length === 0) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-48" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Instructor Assignments
          </h1>
          <p className="text-muted-foreground mt-1">
            Assign or remove instructors from modules
          </p>
        </div>
        <Button
          size="sm"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Cancel" : "+ Assign"}
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Assign Instructor to Module</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAssign} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 space-y-1.5">
                <Label htmlFor="instructorId">Instructor User ID</Label>
                <Input
                  id="instructorId"
                  placeholder="e.g. cuid..."
                  value={instructorId}
                  onChange={(e) => setInstructorId(e.target.value)}
                  required
                />
              </div>
              <div className="flex-1 space-y-1.5">
                <Label htmlFor="moduleId">Module ID</Label>
                <Input
                  id="moduleId"
                  placeholder="e.g. cuid..."
                  value={moduleId}
                  onChange={(e) => setModuleId(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-end">
                <Button type="submit" disabled={assignMutation.isPending}>
                  {assignMutation.isPending ? "Assigning..." : "Assign"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {assignments.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          No instructor assignments yet
        </div>
      ) : (
        <div className="rounded-lg border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50 border-b border-border">
                <th className="text-left px-4 py-3 font-medium">Instructor</th>
                <th className="text-left px-4 py-3 font-medium">Module</th>
                <th className="text-left px-4 py-3 font-medium">Track</th>
                <th className="text-left px-4 py-3 font-medium">Assigned</th>
                <th className="text-right px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((a) => (
                <tr
                  key={a.id}
                  className="border-b border-border last:border-0"
                >
                  <td className="px-4 py-3">
                    <div>
                      <p className="font-medium">
                        {a.instructor.name || "—"}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {a.instructor.email || a.instructor.id.slice(0, 12) + "..."}
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-3 font-medium">
                    {a.module.title}
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant="outline">{a.module.track.name}</Badge>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {new Date(a.assignedAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Button
                      variant="destructive"
                      size="sm"
                      disabled={removing === a.id || removeMutation.isPending}
                      onClick={() => handleRemove(a.id)}
                    >
                      {removing === a.id ? "Removing..." : "Remove"}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            Previous
          </Button>
          <span className="text-sm text-muted-foreground">
            Page {page} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
