"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/fetcher";
import { SecureFileLink } from "@/components/secure-file-link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

interface KycRecord {
  id: string;
  studentId: string;
  idCardReadUrl: string;
  paymentProofReadUrl: string;
  status: string;
  reviewComment: string | null;
  createdAt: string;
  student: { id: string; name: string | null; email: string } | null;
}

interface KycResponse {
  data: KycRecord[];
  total: number;
  page: number;
  totalPages: number;
}

export default function AdminKycPage() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [reviewing, setReviewing] = useState<string | null>(null);
  const [reviewComment, setReviewComment] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["admin", "kyc", { page, filter }],
    queryFn: () => {
      const params = new URLSearchParams({ page: String(page) });
      if (filter) params.set("status", filter);
      return apiFetch<KycResponse>(`/admin/kyc?${params}`);
    },
    staleTime: 30 * 1000,
  });
  const records = data?.data ?? [];
  const totalPages = data?.totalPages ?? 1;

  const reviewMutation = useMutation({
    mutationFn: ({ kycId, status, comment }: { kycId: string; status: "approved" | "rejected"; comment?: string }) =>
      apiFetch(`/admin/kyc/${kycId}`, {
        method: "PATCH",
        body: JSON.stringify({ status, reviewComment: comment || undefined }),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "kyc"] });
      setReviewing(null);
      setReviewComment("");
    },
    onError: () => {
      toast.error("Failed to update KYC");
    },
  });

  async function handleAction(kycId: string, status: "approved" | "rejected") {
    reviewMutation.mutate({ kycId, status, comment: reviewComment || undefined });
  }

  if (isLoading && records.length === 0) {
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
          <h1 className="text-2xl font-bold tracking-tight">KYC Queue</h1>
          <p className="text-muted-foreground mt-1">
            Review and approve student KYC submissions
          </p>
        </div>

        <div className="flex gap-2">
          {["", "submitted", "under_review", "approved", "rejected"].map(
            (status) => (
              <Button
                key={status}
                variant={filter === status ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setFilter(status);
                  setPage(1);
                }}
              >
                {(status || "All").replace("_", " ")}
              </Button>
            ),
          )}
        </div>
      </div>

      {records.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          No KYC records found
        </div>
      ) : (
        <div className="space-y-4">
          {records.map((record) => (
            <Card key={record.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <p className="font-medium">
                      {record.student?.name || record.student?.email || record.studentId.slice(0, 8) + "..."}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {record.student?.email || ""} •{" "}
                      {new Date(record.createdAt).toLocaleDateString()}
                    </p>
                    <Badge
                      variant={
                        record.status === "approved"
                          ? "default"
                          : record.status === "rejected"
                            ? "destructive"
                            : "outline"
                      }
                      className="capitalize"
                    >
                      {record.status.replace("_", " ")}
                    </Badge>
                  </div>

                  <div className="flex gap-2">
                    <SecureFileLink href={record.idCardReadUrl} label="ID Card" />
                    <SecureFileLink
                      href={record.paymentProofReadUrl}
                      label="Payment"
                    />
                    {record.status === "submitted" && (
                      <Button size="sm" onClick={() => setReviewing(record.id)}>
                        Review
                      </Button>
                    )}
                  </div>
                </div>

                {reviewing === record.id && (
                  <div className="mt-4 rounded-lg border border-border p-4 space-y-3">
                    <div className="space-y-1.5">
                      <Label htmlFor="comment">Review Comment (optional)</Label>
                      <Input
                        id="comment"
                        value={reviewComment}
                        onChange={(e) => setReviewComment(e.target.value)}
                        placeholder="Optional comment for the student"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        onClick={() => handleAction(record.id, "approved")}
                        disabled={reviewMutation.isPending}
                      >
                        {reviewMutation.isPending ? "Processing..." : "Approve"}
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleAction(record.id, "rejected")}
                        disabled={reviewMutation.isPending}
                      >
                        {reviewMutation.isPending ? "Processing..." : "Reject"}
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => setReviewing(null)}
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

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <Button variant="outline" size="sm" disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
            Previous
          </Button>
          <span className="text-sm text-muted-foreground">
            Page {page} of {totalPages}
          </span>
          <Button variant="outline" size="sm" disabled={page === totalPages} onClick={() => setPage((p) => p + 1)}>
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
