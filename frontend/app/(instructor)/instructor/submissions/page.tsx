"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api/fetcher";
import { SecureFileLink } from "@/components/secure-file-link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

interface Submission {
  id: string;
  studentId: string;
  student: { id: string; name: string | null; email: string } | null;
  fileReadUrl: string;
  score: number | null;
  feedback: string | null;
  status: string;
  createdAt: string;
  assignment: { title: string; maxScore: number; moduleId: string };
}

interface SubmissionsResponse {
  data: Submission[];
  total: number;
  page: number;
  totalPages: number;
}

export default function InstructorSubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filter, setFilter] = useState("");
  const [grading, setGrading] = useState<string | null>(null);
  const [gradeScore, setGradeScore] = useState("");
  const [gradeFeedback, setGradeFeedback] = useState("");

  useEffect(() => {
    const params = new URLSearchParams({ page: String(page) });
    if (filter) params.set("status", filter);

    apiFetch<SubmissionsResponse>(`/instructor/submissions?${params}`)
      .then((res) => {
        setSubmissions(res.data);
        setTotalPages(res.totalPages);
      })
      .catch(() => {
        toast.error("Failed to load submissions");
      })
      .finally(() => setLoading(false));
  }, [page, filter]);

  async function handleGrade(submissionId: string) {
    try {
      await apiFetch(`/instructor/submissions/${submissionId}`, {
        method: "PATCH",
        body: JSON.stringify({
          score: parseInt(gradeScore, 10),
          feedback: gradeFeedback || undefined,
          status: "graded",
        }),
      });

      setSubmissions((prev) =>
        prev.map((s) =>
          s.id === submissionId
            ? { ...s, score: parseInt(gradeScore, 10), feedback: gradeFeedback, status: "graded" }
            : s,
        ),
      );
      setGrading(null);
      setGradeScore("");
      setGradeFeedback("");
    } catch {
      toast.error("Failed to grade submission");
    }
  }

  if (loading && submissions.length === 0) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-48" />
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-24" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Submissions</h1>
          <p className="text-muted-foreground mt-1">
            Review and grade student submissions
          </p>
        </div>

        <div className="flex gap-2">
          {["", "submitted", "graded", "returned"].map((status) => (
            <Button
              key={status}
              variant={filter === status ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setLoading(true);
                setFilter(status);
                setPage(1);
              }}
            >
              {status || "All"}
            </Button>
          ))}
        </div>
      </div>

      {submissions.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          No submissions found
        </div>
      ) : (
        <div className="space-y-4">
          {submissions.map((sub) => (
            <Card key={sub.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <p className="font-medium">{sub.assignment.title}</p>
                    <p className="text-sm text-muted-foreground">
                      Student: {sub.student?.name || sub.student?.email || sub.studentId.slice(0, 8) + "..."} •{" "}
                      {new Date(sub.createdAt).toLocaleDateString()}
                    </p>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={
                          sub.status === "graded"
                            ? "default"
                            : sub.status === "returned"
                              ? "secondary"
                              : "outline"
                        }
                        className="capitalize"
                      >
                        {sub.status}
                      </Badge>
                      {sub.score !== null && (
                        <span className="text-sm font-medium">
                          {sub.score}/{sub.assignment.maxScore}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <SecureFileLink href={sub.fileReadUrl} label="View File" />
                    {sub.status === "submitted" && (
                      <Button
                        size="sm"
                        onClick={() => setGrading(sub.id)}
                      >
                        Grade
                      </Button>
                    )}
                  </div>
                </div>

                {/* Inline grading form */}
                {grading === sub.id && (
                  <div className="mt-4 rounded-lg border border-border p-4 space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <Label htmlFor="score">Score (max {sub.assignment.maxScore})</Label>
                        <Input
                          id="score"
                          type="number"
                          min={0}
                          max={sub.assignment.maxScore}
                          value={gradeScore}
                          onChange={(e) => setGradeScore(e.target.value)}
                          placeholder="0"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="feedback">Feedback</Label>
                        <Input
                          id="feedback"
                          value={gradeFeedback}
                          onChange={(e) => setGradeFeedback(e.target.value)}
                          placeholder="Optional feedback"
                        />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        onClick={() => handleGrade(sub.id)}
                        disabled={!gradeScore}
                      >
                        Submit Grade
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => setGrading(null)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled={page === 1}
            onClick={() => {
              setLoading(true);
              setPage((p) => p - 1);
            }}
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
            onClick={() => {
              setLoading(true);
              setPage((p) => p + 1);
            }}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
