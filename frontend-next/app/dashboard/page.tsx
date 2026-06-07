import { auth } from "@/lib/auth";
import { getDashboardRedirectPath, getUserRole } from "@/lib/auth-flow";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

/**
 * Dashboard router — redirects users to their role-specific dashboard.
 * This is the universal entry point after sign-in.
 */
export default async function DashboardPage() {
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

  const profile = await prisma.studentProfile.findUnique({
    where: { userId: session.user.id },
    select: { id: true },
  });

  redirect(getDashboardRedirectPath(role, Boolean(profile)));
}
