import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle01Icon, ReloadIcon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

interface VerificationEmailSentProps {
  email: string;
  error?: string;
  resending: boolean;
  onResend: () => void;
}

export function VerificationEmailSent({
  email,
  error,
  resending,
  onResend,
}: VerificationEmailSentProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-primary/20 bg-primary/10 p-6 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary">
          <HugeiconsIcon icon={CheckmarkCircle01Icon} className="h-8 w-8" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Check your inbox</h1>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          We sent a verification link to{" "}
          <span className="font-semibold text-foreground">{email}</span>. Open it
          to activate your account, then sign in to choose your learning track.
        </p>
      </div>

      {error && (
        <div className="rounded-2xl border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {error}
        </div>
      )}

      <div className="space-y-3">
        <Button
          type="button"
          className="h-14 w-full rounded-2xl text-lg font-semibold shadow-lg shadow-primary/20"
          onClick={onResend}
          disabled={resending}
        >
          {resending ? "Sending another link..." : "Resend verification email"}
          {!resending && <HugeiconsIcon icon={ReloadIcon} className="ml-2 h-5 w-5" />}
        </Button>
        <Link
          href="/sign-in"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-14 w-full rounded-2xl text-lg",
          )}
        >
          Continue to sign in
        </Link>
      </div>
    </div>
  );
}
