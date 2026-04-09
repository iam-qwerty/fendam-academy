"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api/fetcher";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";

interface KycRecord {
  id: string;
  studentId: string;
  idCardUrl: string;
  paymentProofUrl: string;
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
  const [records, setRecords] = useState<KycRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filter, setFilter] = useState("");
  const [reviewing, setReviewing] = useState<string | null>(null);
  const [reviewComment, setReviewComment] = useState("");

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams({ page: String(page) });
    if (filter) params.set("status", filter);

    apiFetch<KycResponse>(`/admin/kyc?${params}`)
      .then((res) => {
        setRecords(res.data);
        setTotalPages(res.totalPages);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [page, filter]);

  async function handleAction(kycId: string, status: "approved" | "rejected") {
    try {
      await apiFetch(`/admin/kyc/${kycId}`, {
        method: "PATCH",
        body: JSON.stringify({
          status,
          reviewComment: reviewComment || undefined,
        }),
      });

      setRecords((prev) =>
        prev.map((r) => (r.id === kycId ? { ...r, status, reviewComment } : r)),
      );
      setReviewing(null);
      setReviewComment("");
    } catch {
      alert("Failed to update KYC");
    }
  }

  if (loading && records.length === 0) {
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
                    <a
                      href={record.idCardUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants({ variant: "outline", size: "sm" })}
                    >
                      ID Card
                    </a>
                    <a
                      href={record.paymentProofUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants({ variant: "outline", size: "sm" })}
                    >
                      Payment
                    </a>
                    {record.status === "submitted" && (
                      <Button size="sm" onClick={() => setReviewing(record.id)}>
                        Review
                      </Button>
                    )}
                  </div>
                </div>

                {/* Review form */}
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
                      >
                        Approve
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleAction(record.id, "rejected")}
                      >
                        Reject
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
