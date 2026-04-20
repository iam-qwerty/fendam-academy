"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { authClient, signIn, useSession } from "@/lib/auth-client";
import { EMAIL_VERIFICATION_CALLBACK_URL, getUserRole, getDashboardRedirectPath } from "@/lib/auth-flow";
import { SocialLoginButtons } from "@/components/auth/social-login-buttons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  CheckmarkCircle01Icon,
  LockKeyIcon,
  Mail01Icon,
  ReloadIcon,
} from "@hugeicons/core-free-icons";
import { toast } from "sonner";

export default function SignInPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [verificationEmail, setVerificationEmail] = useState<string | null>(null);
  const [resending, setResending] = useState(false);

  const isVerifiedRedirect = searchParams.get("verified") === "1";

  useEffect(() => {
    if (session) {
      const role = getUserRole(session.user);
      const hasStudentProfile = !!(session.user as Record<string, unknown>)?.studentProfile;
      const path = getDashboardRedirectPath(role, hasStudentProfile);
      router.push(path);
    }
  }, [session, router]);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError("");
    setVerificationEmail(null);
    setLoading(true);

    try {
      const result = await signIn.email({
        email,
        password,
      });

      if (result.error) {
        const status = (result.error as { status?: number }).status;

        if (status === 403) {
          setVerificationEmail(email);
          setError(
            "Please verify your email before signing in. We can send another link if you need one.",
          );
        } else {
          setError(result.error.message || "Sign in failed");
        }

        setLoading(false);
        return;
      }

      const role = getUserRole(result.data?.user);
      document.cookie = `fendam_role=${role}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax`;

      router.push("/dashboard");
      router.refresh();
    } catch {
      setError("An unexpected error occurred");
      setLoading(false);
    }
  }

  async function handleResend() {
    const recipient = verificationEmail ?? email;
    if (!recipient) {
      setError("Enter your email address first so we know where to send the link.");
      return;
    }

    setResending(true);
    setError("");

    try {
      await authClient.sendVerificationEmail({
        email: recipient,
        callbackURL: EMAIL_VERIFICATION_CALLBACK_URL,
      });
      toast.success("Verification email sent.");
      setVerificationEmail(recipient);
    } catch {
      setError("We could not resend the verification email. Please try again.");
    } finally {
      setResending(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
        <p className="text-muted-foreground">
          Continue your journey at FendAm Academy
        </p>
      </div>

      {isVerifiedRedirect && (
        <div className="rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 text-sm text-primary">
          <div className="flex items-center gap-2">
            <HugeiconsIcon icon={CheckmarkCircle01Icon} className="h-5 w-5" />
            <span>Your email is verified. Sign in to continue your onboarding.</span>
          </div>
        </div>
      )}

      {error && (
        <div className="animate-in fade-in slide-in-from-top-1 rounded-2xl border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {error}
        </div>
      )}

      <SocialLoginButtons callbackURL={EMAIL_VERIFICATION_CALLBACK_URL} />

      <div className="relative flex items-center py-1">
        <div className="flex-1 border-t border-white/10" />
        <span className="mx-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">or</span>
        <div className="flex-1 border-t border-white/10" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label
            htmlFor="email"
            className="ml-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            Email Address
          </Label>
          <div className="relative">
            <HugeiconsIcon
              icon={Mail01Icon}
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              className="h-14 rounded-2xl border-white/10 bg-white/5 pl-12 transition-all focus:border-primary/50"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              autoComplete="email"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="ml-1 flex items-center justify-between">
            <Label
              htmlFor="password"
              className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
            >
              Password
            </Label>
            <Link href="#" className="text-xs text-primary hover:underline">
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <HugeiconsIcon
              icon={LockKeyIcon}
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="h-14 rounded-2xl border-white/10 bg-white/5 pl-12 transition-all focus:border-primary/50"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              autoComplete="current-password"
            />
          </div>
        </div>

        <Button
          type="submit"
          className="h-14 w-full rounded-2xl text-lg font-semibold shadow-lg shadow-primary/20"
          disabled={loading}
        >
          {loading ? "Verifying..." : "Sign In"}
          {!loading && <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 h-5 w-5" />}
        </Button>

        {verificationEmail && (
          <Button
            type="button"
            variant="outline"
            className="h-14 w-full rounded-2xl text-lg"
            onClick={handleResend}
            disabled={resending}
          >
            {resending ? "Sending another link..." : "Resend verification email"}
            {!resending && <HugeiconsIcon icon={ReloadIcon} className="ml-2 h-5 w-5" />}
          </Button>
        )}
      </form>

      <div className="pt-4 text-center">
        <p className="text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href="/sign-up"
            className="font-bold text-primary transition-colors hover:text-primary/80"
          >
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}
