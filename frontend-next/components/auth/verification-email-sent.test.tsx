import { describe, expect, it } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import { VerificationEmailSent } from "@/components/auth/verification-email-sent";

describe("VerificationEmailSent", () => {
  it("renders the verification message for the signed-up user", () => {
    const markup = renderToStaticMarkup(
      <VerificationEmailSent
        email="student@example.com"
        error=""
        resending={false}
        onResend={() => {}}
      />,
    );

    expect(markup).toContain("student@example.com");
    expect(markup).toContain("Resend verification email");
    expect(markup).toContain("Continue to sign in");
  });
});
