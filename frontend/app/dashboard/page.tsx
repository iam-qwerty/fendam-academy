import { auth } from "@/lib/auth";
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

  const role = (session.user as { role?: string }).role || "student";

  switch (role) {
    case "admin":
      redirect("/admin/users");
    case "instructor":
      redirect("/instructor/submissions");
    default:
      redirect("/student/dashboard");
  }
}
