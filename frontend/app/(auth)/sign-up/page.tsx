"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient, signUp, useSession } from "@/lib/auth-client";
import { EMAIL_VERIFICATION_CALLBACK_URL, getUserRole, getDashboardRedirectPath } from "@/lib/auth-flow";
import { SocialLoginButtons } from "@/components/auth/social-login-buttons";
import { VerificationEmailSent } from "@/components/auth/verification-email-sent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  LockKeyIcon,
  Mail01Icon,
  UserIcon,
} from "@hugeicons/core-free-icons";
import { toast } from "sonner";

export default function SignUpPage() {
  const router = useRouter();
  const { data: session } = useSession();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [verificationEmail, setVerificationEmail] = useState<string | null>(null);
  const [resending, setResending] = useState(false);

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
    setLoading(true);

    try {
      const result = await signUp.email({
        name,
        email,
        password,
        callbackURL: EMAIL_VERIFICATION_CALLBACK_URL,
      });

      if (result.error) {
        setError(result.error.message || "Sign up failed");
        setLoading(false);
        return;
      }

      setVerificationEmail(email);
      setLoading(false);
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
      toast.success("A fresh verification link is on its way.");
    } catch {
      setError("We could not resend the verification email. Please try again.");
    } finally {
      setResending(false);
    }
  }

  if (verificationEmail) {
    return (
      <VerificationEmailSent
        email={verificationEmail}
        error={error}
        resending={resending}
        onResend={handleResend}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Join the Academy</h1>
        <p className="text-muted-foreground">
          Create your account first. You&apos;ll choose your learning track after
          verifying your email.
        </p>
      </div>

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
            htmlFor="name"
            className="ml-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            Full Name
          </Label>
          <div className="relative">
            <HugeiconsIcon
              icon={UserIcon}
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              className="h-14 rounded-2xl border-white/10 bg-white/5 pl-12 transition-all focus:border-primary/50"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
        </div>

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
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="password"
            className="ml-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            Password
          </Label>
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
              minLength={8}
            />
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-4 text-sm leading-6 text-muted-foreground">
          Next step after verification: we&apos;ll ask you to choose your track and
          create your student profile securely on the server.
        </div>

        <Button
          type="submit"
          className="mt-4 h-14 w-full rounded-2xl text-lg font-semibold shadow-lg shadow-primary/20"
          disabled={loading}
        >
          {loading ? "Creating account..." : "Get Started"}
          {!loading && <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 h-5 w-5" />}
        </Button>
      </form>

      <div className="pt-2 text-center">
        <p className="text-sm text-muted-foreground">
          Already a student?{" "}
          <Link
            href="/sign-in"
            className="font-bold text-primary transition-colors hover:text-primary/80"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
