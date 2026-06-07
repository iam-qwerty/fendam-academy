export const EMAIL_VERIFICATION_CALLBACK_URL = "/sign-in?verified=1";

export function getUserRole(user: unknown): string {
  if (
    typeof user === "object" &&
    user !== null &&
    "role" in user &&
    typeof user.role === "string"
  ) {
    return user.role;
  }

  return "student";
}

export function getDashboardRedirectPath(
  role: string,
  hasStudentProfile: boolean,
) {
  switch (role) {
    case "admin":
      return "/admin/users";
    case "instructor":
      return "/instructor/modules";
    default:
      return hasStudentProfile ? "/student/dashboard" : "/onboarding";
  }
}
