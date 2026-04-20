import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { jwt } from "better-auth/plugins";
import { sendEmail } from "@/lib/email";
import { prisma } from "@/lib/prisma";

function buildVerificationEmailHtml(name: string | null, verificationUrl: string) {
  const displayName = name?.trim() || "there";

  return `
    <div style="font-family: Arial, sans-serif; background: #06131d; color: #f5fbff; padding: 32px;">
      <div style="max-width: 560px; margin: 0 auto; background: #0d1f2d; border: 1px solid rgba(115, 212, 255, 0.2); border-radius: 24px; padding: 32px;">
        <p style="margin: 0 0 12px; font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; color: #73d4ff;">FendAm Academy</p>
        <h1 style="margin: 0 0 16px; font-size: 28px; line-height: 1.2;">Verify your email address</h1>
        <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.7; color: #c3d7e6;">
          Hi ${displayName}, confirm this email so we can unlock your student onboarding and protect your account.
        </p>
        <a
          href="${verificationUrl}"
          style="display: inline-block; padding: 14px 22px; border-radius: 999px; background: #03a9f4; color: #06131d; text-decoration: none; font-weight: 700;"
        >
          Verify Email
        </a>
        <p style="margin: 24px 0 0; font-size: 14px; line-height: 1.7; color: #9eb5c7;">
          If the button does not work, copy and paste this link into your browser:<br />
          <a href="${verificationUrl}" style="color: #73d4ff;">${verificationUrl}</a>
        </p>
      </div>
    </div>
  `;
}

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "postgresql" }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  emailVerification: {
    sendOnSignUp: true,
    sendOnSignIn: true,
    expiresIn: 60 * 60 * 24,
    sendVerificationEmail: async ({ user, url }) => {
      void sendEmail({
        to: user.email,
        subject: "Verify your FendAm Academy account",
        html: buildVerificationEmailHtml(user.name, url),
        text: `Verify your FendAm Academy account by opening ${url}`,
      }).catch((error) => {
        console.error("Failed to send verification email", error);
      });
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "student",
        input: false, // cannot be set by the user during sign-up
      },
    },
  },
  trustedOrigins: [
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ],
  plugins: [
    nextCookies(),
    jwt({
      jwt: {
        definePayload: ({ user }) => ({
          sub: user.id,
          email: user.email,
          role: (user as Record<string, unknown>).role as string || "student",
          emailVerified: user.emailVerified,
        }),
        expirationTime: "15m",
      },
    }),
  ],
});

export type Session = typeof auth.$Infer.Session;
