"use client";

import { useRef, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiFetch, ApiError } from "@/lib/api/fetcher";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CheckmarkCircle01Icon,
  Upload01Icon,
  File01Icon,
  Clock01Icon,
  AlertCircleIcon,
  InformationCircleIcon,
} from "@hugeicons/core-free-icons";

interface KycStatus {
  kycStatus: string;
  latestRecord: {
    id: string;
    status: string;
    reviewComment: string | null;
    createdAt: string;
  } | null;
}

export default function StudentKycPage() {
  const queryClient = useQueryClient();
  const idCardRef = useRef<HTMLInputElement>(null);
  const paymentRef = useRef<HTMLInputElement>(null);
  const [idCardFile, setIdCardFile] = useState<File | null>(null);
  const [paymentFile, setPaymentFile] = useState<File | null>(null);

  const { data: kycStatus, isLoading } = useQuery({
    queryKey: ["student", "kyc"],
    queryFn: () => apiFetch<KycStatus>("/student/kyc"),
    staleTime: 1 * 60 * 1000,
  });

  const submitMutation = useMutation({
    mutationFn: async () => {
      if (!idCardFile || !paymentFile) {
        throw new Error("Both ID card and payment proof are required");
      }

      const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
      for (const file of [idCardFile, paymentFile]) {
        if (!allowedTypes.includes(file.type)) {
          throw new Error("Files must be JPG, PNG, or PDF");
        }
        if (file.size > 10 * 1024 * 1024) {
          throw new Error("Files must be under 10MB");
        }
      }

      const idCardResult = await apiFetch<{ signedUrl: string; fileKey: string }>(
        "/uploads/presigned",
        {
          method: "POST",
          body: JSON.stringify({ filename: idCardFile.name, contentType: idCardFile.type }),
        },
      );

      await fetch(idCardResult.signedUrl, {
        method: "PUT",
        body: idCardFile,
        headers: { "Content-Type": idCardFile.type },
      });

      const paymentResult = await apiFetch<{ signedUrl: string; fileKey: string }>(
        "/uploads/presigned",
        {
          method: "POST",
          body: JSON.stringify({ filename: paymentFile.name, contentType: paymentFile.type }),
        },
      );

      await fetch(paymentResult.signedUrl, {
        method: "PUT",
        body: paymentFile,
        headers: { "Content-Type": paymentFile.type },
      });

      await apiFetch("/student/kyc", {
        method: "POST",
        body: JSON.stringify({
          idCardFileKey: idCardResult.fileKey,
          paymentProofFileKey: paymentResult.fileKey,
        }),
      });
    },
    onSuccess: () => {
      toast.success("KYC documents submitted");
      queryClient.invalidateQueries({ queryKey: ["student", "kyc"] });
      setIdCardFile(null);
      setPaymentFile(null);
    },
    onError: (err) => {
      if (err instanceof ApiError) toast.error(err.message);
      else toast.error("Failed to submit KYC");
    },
  });

  async function handleSubmit() {
    submitMutation.mutate();
  }

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-64" />
      </div>
    );
  }

  if (!kycStatus) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        Could not load KYC status
      </div>
    );
  }

  const isSubmitted = ["submitted", "under_review", "approved"].includes(kycStatus.kycStatus);
  const isRejected = kycStatus.kycStatus === "rejected";
  const needsAction = kycStatus.kycStatus === "not_started" || isRejected;

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">KYC Verification</h1>
        <p className="text-muted-foreground mt-1">
          Submit your identity and payment documents for verification
        </p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            {kycStatus.kycStatus === "approved" && (
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-6 h-6" />
              </div>
            )}
            {(kycStatus.kycStatus === "submitted" || kycStatus.kycStatus === "under_review") && (
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                <HugeiconsIcon icon={Clock01Icon} className="w-6 h-6" />
              </div>
            )}
            {isRejected && (
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                <HugeiconsIcon icon={AlertCircleIcon} className="w-6 h-6" />
              </div>
            )}
            {kycStatus.kycStatus === "not_started" && (
              <div className="w-12 h-12 rounded-full bg-muted-foreground/10 flex items-center justify-center text-muted-foreground">
                <HugeiconsIcon icon={InformationCircleIcon} className="w-6 h-6" />
              </div>
            )}
            <div>
              <p className="font-semibold capitalize">
                {kycStatus.kycStatus.replace("_", " ")}
              </p>
              {kycStatus.latestRecord && (
                <p className="text-sm text-muted-foreground">
                  Submitted {new Date(kycStatus.latestRecord.createdAt).toLocaleDateString()}
                </p>
              )}
            </div>
            <Badge
              variant={
                kycStatus.kycStatus === "approved"
                  ? "default"
                  : kycStatus.kycStatus === "rejected"
                    ? "destructive"
                    : "outline"
              }
              className="ml-auto capitalize"
            >
              {kycStatus.kycStatus.replace("_", " ")}
            </Badge>
          </div>

          {isRejected && kycStatus.latestRecord?.reviewComment && (
            <div className="mt-4 rounded-lg border border-destructive/20 bg-destructive/5 p-4 text-sm">
              <p className="font-medium text-destructive">Review comment:</p>
              <p className="mt-1 text-muted-foreground">{kycStatus.latestRecord.reviewComment}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {needsAction && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              {isRejected ? "Resubmit Documents" : "Submit Documents"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>ID Card / Passport</Label>
              <div className="flex items-center gap-4">
                <input
                  ref={idCardRef}
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf"
                  className="hidden"
                  onChange={(e) => setIdCardFile(e.target.files?.[0] || null)}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => idCardRef.current?.click()}
                  className="flex-1 justify-start"
                >
                  <HugeiconsIcon icon={Upload01Icon} className="w-4 h-4 mr-2" />
                  {idCardFile ? idCardFile.name : "Choose file"}
                </Button>
                {idCardFile && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <HugeiconsIcon icon={File01Icon} className="w-4 h-4" />
                    <span>{(idCardFile.size / 1024 / 1024).toFixed(2)} MB</span>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Payment Proof</Label>
              <div className="flex items-center gap-4">
                <input
                  ref={paymentRef}
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf"
                  className="hidden"
                  onChange={(e) => setPaymentFile(e.target.files?.[0] || null)}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => paymentRef.current?.click()}
                  className="flex-1 justify-start"
                >
                  <HugeiconsIcon icon={Upload01Icon} className="w-4 h-4 mr-2" />
                  {paymentFile ? paymentFile.name : "Choose file"}
                </Button>
                {paymentFile && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <HugeiconsIcon icon={File01Icon} className="w-4 h-4" />
                    <span>{(paymentFile.size / 1024 / 1024).toFixed(2)} MB</span>
                  </div>
                )}
              </div>
            </div>

            <Button
              onClick={handleSubmit}
              disabled={submitMutation.isPending || !idCardFile || !paymentFile}
              className="w-full"
            >
              {submitMutation.isPending ? "Submitting..." : isRejected ? "Resubmit" : "Submit KYC"}
            </Button>
          </CardContent>
        </Card>
      )}

      {isSubmitted && (
        <Card>
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-500">
              <HugeiconsIcon icon={Clock01Icon} className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Under Review</h3>
            <p className="text-muted-foreground">
              Your documents are being reviewed by an admin. You will be notified once the review is complete.
            </p>
          </CardContent>
        </Card>
      )}

      {kycStatus.kycStatus === "approved" && (
        <Card>
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-green-500">
              <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Verified</h3>
            <p className="text-muted-foreground">
              Your identity has been verified. You have full access to the platform.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
