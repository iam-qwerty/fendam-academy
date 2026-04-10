"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signUp } from "@/lib/auth-client";
import { createStudentProfile } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";
import { 
  ArrowRight01Icon, 
  Mail01Icon, 
  LockKeyIcon, 
  UserIcon,
  AiCloud01Icon,
  CodeIcon,
  Shield01Icon,
  Settings01Icon
} from "@hugeicons/core-free-icons";

const TRACKS = [
  { id: "track-ai-ml", name: "AI / Machine Learning", icon: AiCloud01Icon },
  { id: "track-fullstack", name: "Full-Stack Dev", icon: CodeIcon },
  { id: "track-cybersecurity", name: "Cybersecurity", icon: Shield01Icon },
  { id: "track-network-hacking", name: "Network Hacking", icon: Settings01Icon },
];

export default function SignUpPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedTrack, setSelectedTrack] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!selectedTrack) {
      setError("Please select a learning track");
      return;
    }

    setLoading(true);

    try {
      const result = await signUp.email({
        name,
        email,
        password,
      });

      if (result.error) {
        setError(result.error.message || "Sign up failed");
        setLoading(false);
        return;
      }

      const userId = result.data?.user?.id;
      if (userId) {
        await createStudentProfile(userId, selectedTrack);
      }

      router.push("/dashboard");
      router.refresh();
    } catch {
      setError("An unexpected error occurred");
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Join the Academy</h1>
        <p className="text-muted-foreground">
          Master the future of technology
        </p>
      </div>

      {error && (
        <div className="rounded-2xl bg-destructive/10 border border-destructive/20 px-4 py-3 text-sm text-destructive animate-in fade-in slide-in-from-top-1">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground ml-1">Full Name</Label>
          <div className="relative">
            <HugeiconsIcon icon={UserIcon} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              className="pl-12 h-14 rounded-2xl bg-white/5 border-white/10 focus:border-primary/50 transition-all"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground ml-1">Email Address</Label>
          <div className="relative">
            <HugeiconsIcon icon={Mail01Icon} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              className="pl-12 h-14 rounded-2xl bg-white/5 border-white/10 focus:border-primary/50 transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground ml-1">Password</Label>
          <div className="relative">
            <HugeiconsIcon icon={LockKeyIcon} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="pl-12 h-14 rounded-2xl bg-white/5 border-white/10 focus:border-primary/50 transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
            />
          </div>
        </div>

        <div className="space-y-3">
          <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground ml-1">Select Learning Track</Label>
          <div className="grid grid-cols-2 gap-2">
            {TRACKS.map((track) => (
              <button
                key={track.id}
                type="button"
                onClick={() => setSelectedTrack(track.id)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all text-sm font-medium",
                  selectedTrack === track.id
                    ? "bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(3,169,244,0.1)]"
                    : "bg-white/5 border-white/10 text-muted-foreground hover:border-white/20 hover:text-foreground"
                )}
              >
                <span className={cn(
                  "transition-colors",
                  selectedTrack === track.id ? "text-primary" : "text-muted-foreground"
                )}>
                  <HugeiconsIcon icon={track.icon} className="w-5 h-5" />
                </span>
                {track.name}
              </button>
            ))}
          </div>
        </div>

        <Button type="submit" className="w-full h-14 rounded-2xl text-lg font-semibold shadow-lg shadow-primary/20 mt-4" disabled={loading}>
          {loading ? "Creating account..." : "Get Started"}
          {!loading && <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 w-5 h-5" />}
        </Button>
      </form>

      <div className="pt-2 text-center">
        <p className="text-sm text-muted-foreground">
          Already a student?{" "}
          <Link
            href="/sign-in"
            className="text-primary hover:text-primary/80 font-bold transition-colors"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

