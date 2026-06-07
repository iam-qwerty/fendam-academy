import { OnboardingForm } from "@/components/onboarding-form";
import { auth } from "@/lib/auth";
import { getDashboardRedirectPath, getUserRole } from "@/lib/auth-flow";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function OnboardingPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }

  const role = getUserRole(session.user);
  if (role !== "student") {
    redirect(getDashboardRedirectPath(role, true));
  }

  const existingProfile = await prisma.studentProfile.findUnique({
    where: { userId: session.user.id },
    select: { id: true },
  });

  if (existingProfile) {
    redirect("/student/dashboard");
  }

  const tracks = await prisma.track.findMany({
    orderBy: { name: "asc" },
    select: {
      id: true,
      name: true,
      description: true,
    },
  });

  return (
    <main className="background-grid min-h-screen px-6 py-12">
      <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-white/10 bg-card/40 p-8 shadow-2xl shadow-black/20 backdrop-blur md:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="space-y-6">
            <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Student Onboarding
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                Choose the track that matches how you want to build.
              </h1>
              <p className="max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
                Your account is ready. Pick one focused path now and we&apos;ll wire
                your curriculum, assignments, and progress dashboard around it.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["1", "Verified account"],
                ["2", "Track-based curriculum"],
                ["3", "Dashboard unlock"],
              ].map(([step, label]) => (
                <div
                  key={step}
                  className="rounded-3xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    Step {step}
                  </p>
                  <p className="mt-2 text-sm font-medium">{label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-white/10 bg-background/70 p-6 md:p-8">
            <div className="mb-6 space-y-2">
              <h2 className="text-2xl font-semibold">
                Select your learning track
              </h2>
              <p className="text-sm text-muted-foreground">
                You can change direction later with admin help, but this sets
                your first curriculum path.
              </p>
            </div>

            <OnboardingForm tracks={tracks} />
          </section>
        </div>
      </div>
    </main>
  );
}
