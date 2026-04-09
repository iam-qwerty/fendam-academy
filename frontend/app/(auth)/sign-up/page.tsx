"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signUp } from "@/lib/auth-client";
import { createStudentProfile } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TRACKS = [
  { id: "track-ai-ml", name: "AI / Machine Learning" },
  { id: "track-fullstack", name: "Full-Stack Software Development" },
  { id: "track-cybersecurity", name: "Cybersecurity" },
  { id: "track-network-hacking", name: "Network Hacking" },
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

      // Create StudentProfile linking user to their selected track
      if (result.data?.user?.id) {
        await createStudentProfile(result.data.user.id, selectedTrack);
      }

      router.push("/dashboard");
      router.refresh();
    } catch {
      setError("An unexpected error occurred");
      setLoading(false);
    }
  }

  return (
    <Card className="border-border/50 shadow-xl">
      <CardHeader className="text-center space-y-2">
        <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-lg">
          FA
        </div>
        <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
        <CardDescription>
          Join FendAm Academy and start your learning journey
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          {error && (
            <div className="rounded-lg bg-destructive/10 border border-destructive/20 px-4 py-3 text-sm text-destructive">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Min 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              autoComplete="new-password"
            />
          </div>

          <div className="space-y-2">
            <Label>Learning Track</Label>
            <div className="grid grid-cols-1 gap-2">
              {TRACKS.map((track) => (
                <button
                  key={track.id}
                  type="button"
                  onClick={() => setSelectedTrack(track.id)}
                  className={`rounded-lg border px-4 py-3 text-left text-sm transition-all ${
                    selectedTrack === track.id
                      ? "border-primary bg-primary/5 text-foreground ring-1 ring-primary"
                      : "border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {track.name}
                </button>
              ))}
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Creating account..." : "Create account"}
          </Button>
          <p className="text-sm text-muted-foreground text-center">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="text-primary underline-offset-4 hover:underline font-medium"
            >
              Sign in
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
}
