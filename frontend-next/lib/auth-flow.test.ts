import { describe, expect, it } from "bun:test";
import { getDashboardRedirectPath, getUserRole } from "@/lib/auth-flow";

describe("auth flow helpers", () => {
  it("routes students without profiles to onboarding", () => {
    expect(getDashboardRedirectPath("student", false)).toBe("/onboarding");
  });

  it("routes signed-in students with profiles to the student dashboard", () => {
    expect(getDashboardRedirectPath("student", true)).toBe("/student/dashboard");
  });

  it("routes admins and instructors to their role dashboards", () => {
    expect(getDashboardRedirectPath("admin", false)).toBe("/admin/users");
    expect(getDashboardRedirectPath("instructor", false)).toBe(
      "/instructor/submissions",
    );
  });

  it("falls back to the student role when a session payload has no role", () => {
    expect(getUserRole({})).toBe("student");
  });
});
