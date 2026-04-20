"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TrackOption {
  id: string;
  name: string;
  description: string;
}

interface OnboardingFormProps {
  tracks: TrackOption[];
}

export function OnboardingForm({ tracks }: OnboardingFormProps) {
  const router = useRouter();
  const [selectedTrack, setSelectedTrack] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!selectedTrack) {
      setError("Choose a learning track to continue.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/onboarding/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ trackId: selectedTrack }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as {
          message?: string;
        } | null;
        throw new Error(
          payload?.message || "We could not save your onboarding details.",
        );
      }

      router.push("/dashboard");
      router.refresh();
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "We could not save your onboarding details.",
      );
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-2xl border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {error}
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        {tracks.map((track) => {
          const isSelected = selectedTrack === track.id;

          return (
            <button
              key={track.id}
              type="button"
              onClick={() => setSelectedTrack(track.id)}
              className={cn(
                "rounded-[1.75rem] border p-6 text-left transition-all",
                isSelected
                  ? "border-primary bg-primary/10 shadow-[0_20px_45px_-30px_rgba(3,169,244,0.75)]"
                  : "border-white/10 bg-white/5 hover:border-primary/40 hover:bg-white/10",
              )}
            >
              <p className="text-lg font-semibold">{track.name}</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {track.description}
              </p>
            </button>
          );
        })}
      </div>

      <Button
        type="submit"
        className="h-14 w-full rounded-2xl text-lg font-semibold shadow-lg shadow-primary/20"
        disabled={loading}
      >
        {loading ? "Saving your track..." : "Continue to your student dashboard"}
      </Button>
    </form>
  );
}
