"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiFetch, ApiError } from "@/lib/api/fetcher";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, AddCircleIcon, Calendar01Icon, Task01Icon } from "@hugeicons/core-free-icons";

interface Assignment {
  id: string;
  title: string;
  instructions: string;
  dueDate: string;
  maxScore: number;
}

interface ModuleDetail {
  id: string;
  title: string;
  orderIndex: number;
  track: { id: string; name: string };
  lessonCount: number;
  assignmentCount: number;
  assignedAt: string;
}

export default function InstructorModuleDetailPage() {
  const params = useParams();
  const router = useRouter();
  const queryClient = useQueryClient();
  const moduleId = params.moduleId as string;

  const { data: module, isLoading: moduleLoading } = useQuery({
    queryKey: ["instructor", "modules", moduleId],
    queryFn: () => apiFetch<ModuleDetail>(`/instructor/modules/${moduleId}`),
    staleTime: 10 * 60 * 1000,
    enabled: !!moduleId,
  });

  const { data: assignmentsResponse } = useQuery({
    queryKey: ["instructor", "assignments", moduleId],
    queryFn: () =>
      apiFetch<{ data: Assignment[] }>(`/instructor/assignments?moduleId=${moduleId}`),
    staleTime: 5 * 60 * 1000,
    enabled: !!moduleId,
  });
  const assignments = assignmentsResponse?.data ?? [];

  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [maxScore, setMaxScore] = useState("");

  const createMutation = useMutation({
    mutationFn: () =>
      apiFetch("/instructor/assignments", {
        method: "POST",
        body: JSON.stringify({
          moduleId,
          title: title.trim(),
          instructions: instructions.trim(),
          dueDate: new Date(dueDate).toISOString(),
          maxScore: parseInt(maxScore, 10),
        }),
      }),
    onSuccess: () => {
      toast.success("Assignment created");
      setTitle("");
      setInstructions("");
      setDueDate("");
      setMaxScore("");
      setShowForm(false);
      queryClient.invalidateQueries({ queryKey: ["instructor", "assignments", moduleId] });
    },
    onError: (err) => {
      if (err instanceof ApiError) toast.error(err.message);
      else toast.error("Failed to create assignment");
    },
  });

  async function handleCreateAssignment(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !instructions.trim() || !dueDate || !maxScore) {
      toast.error("All fields are required");
      return;
    }
    createMutation.mutate();
  }

  if (moduleLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-64" />
      </div>
    );
  }

  if (!module) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        Module not found
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => router.back()}>
          <HugeiconsIcon icon={ArrowLeft01Icon} className="w-4 h-4 mr-2" />
          Back
        </Button>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{module.title}</h1>
          <p className="text-muted-foreground mt-1">
            {module.track.name} • Module #{module.orderIndex}
          </p>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <HugeiconsIcon icon={Task01Icon} className="w-4 h-4" />
          <span>{module.lessonCount} lessons</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <HugeiconsIcon icon={Calendar01Icon} className="w-4 h-4" />
          <span>{assignments.length} assignments</span>
        </div>
      </div>

      {!showForm ? (
        <Button onClick={() => setShowForm(true)}>
          <HugeiconsIcon icon={AddCircleIcon} className="w-4 h-4 mr-2" />
          Create Assignment
        </Button>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">New Assignment</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreateAssignment} className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Assignment title"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="instructions">Instructions</Label>
                <Textarea
                  id="instructions"
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  placeholder="Assignment instructions..."
                  rows={4}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="dueDate">Due Date</Label>
                  <Input
                    id="dueDate"
                    type="datetime-local"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="maxScore">Max Score</Label>
                  <Input
                    id="maxScore"
                    type="number"
                    min={1}
                    value={maxScore}
                    onChange={(e) => setMaxScore(e.target.value)}
                    placeholder="100"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button type="submit" disabled={createMutation.isPending}>
                  {createMutation.isPending ? "Creating..." : "Create"}
                </Button>
                <Button type="button" variant="ghost" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Assignments</h2>
        {assignments.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            No assignments created yet
          </div>
        ) : (
          assignments.map((assignment) => (
            <Card key={assignment.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{assignment.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {assignment.instructions}
                    </p>
                    <div className="flex items-center gap-4 mt-3">
                      <Badge variant="outline">
                        Due {new Date(assignment.dueDate).toLocaleDateString()}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        Max score: {assignment.maxScore}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
