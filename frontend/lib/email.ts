/**
 * Email sender — STUBBED for MVP
 * TODO: Replace with Resend integration when API key is available
 */
export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  // Stub: log email to console in development
  console.log("📧 [STUB] Email would be sent:");
  console.log(`  To: ${to}`);
  console.log(`  Subject: ${subject}`);
  console.log(`  Body: ${html.substring(0, 100)}...`);

  // TODO: Uncomment when Resend API key is ready
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({ from: "noreply@yourdomain.com", to, subject, html });
}
