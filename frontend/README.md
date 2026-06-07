# FendAm Academy — TanStack Start

A full-stack online learning platform built with TanStack Start, Better Auth, Drizzle ORM, and Neon PostgreSQL, deployed to Cloudflare Workers.

## Tech Stack

- **Framework**: React 19 + TanStack Start + TanStack Router (file-based routing)
- **Data**: TanStack Query + Drizzle ORM + Neon (serverless PostgreSQL)
- **Auth**: Better Auth (email/password, Google/GitHub OAuth, JWT, role-based access)
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Icons**: Hugeicons + Lucide React
- **Observability**: Sentry (error tracking, performance monitoring, session replay)
- **Deployment**: Cloudflare Workers via Wrangler
- **Testing**: Vitest

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 22+
- A Neon PostgreSQL database
- Google and GitHub OAuth credentials
- A Resend account for transactional emails

### Setup

1. **Clone and install dependencies:**

```bash
git clone <your-repo-url>
cd fa-tanstack
bun install
```

2. **Configure environment variables:**

```bash
cp .env.example .env.local
```

Fill in all values in `.env.local`. See `.env.example` for documentation of each variable.

3. **Run database migrations:**

```bash
bun run db:generate
bun run db:migrate
```

4. **Start the development server:**

```bash
bun run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Scripts

| Script | Description |
|---|---|
| `bun run dev` | Start development server on port 3000 |
| `bun run build` | Production build (client + SSR) |
| `bun run preview` | Preview production build locally |
| `bun run test` | Run Vitest test suite |
| `bun run typecheck` | TypeScript type checking |
| `bun run deploy` | Build and deploy to Cloudflare |
| `bun run deploy:preview` | Upload preview deployment |
| `bun run db:generate` | Generate Drizzle migrations |
| `bun run db:migrate` | Run database migrations |
| `bun run db:push` | Push schema changes directly |
| `bun run db:pull` | Introspect existing database |
| `bun run db:studio` | Open Drizzle Studio |

## Project Structure

```
src/
├── components/          # Shared UI components
│   ├── auth/            # Auth-specific components
│   ├── ui/              # shadcn/ui primitives
│   ├── dashboard-sidebar.tsx
│   ├── onboarding-form.tsx
│   ├── secure-file-link.tsx
│   └── site-header.tsx
├── db/
│   ├── index.ts         # Neon HTTP driver (Drizzle)
│   └── schema.ts        # Database schema (12 tables)
├── integrations/        # TanStack integration providers
│   ├── better-auth/
│   └── tanstack-query/
├── lib/
│   ├── api-client.ts    # Client-side API fetch with JWT
│   ├── auth.ts          # Better Auth server config
│   ├── auth-client.ts   # Better Auth client
│   ├── auth-flow.ts     # Role-based redirect helpers
│   ├── email.ts         # Resend email utility
│   ├── onboarding.ts    # Onboarding server function
│   ├── sentry.client.ts # Sentry browser init
│   ├── server-fns.ts    # Session & auth server functions
│   ├── tracks.ts        # Tracks loader
│   └── utils.ts         # cn() helper
├── routes/              # File-based routes
│   ├── __root.tsx       # Root layout + error boundary
│   ├── index.tsx        # Landing page
│   ├── dashboard.tsx    # Role-based redirect
│   ├── onboarding.tsx   # Student onboarding
│   ├── _auth/           # Auth layout (sign-in, sign-up)
│   ├── _student/        # Student layout + pages
│   ├── _instructor/     # Instructor layout + pages
│   ├── _admin/          # Admin layout + pages
│   └── api/auth/$.ts    # Better Auth catch-all
├── router.tsx           # Router + Query client setup
└── styles.css           # Global styles + Tailwind
```

## Route Map

| Path | Description | Auth |
|---|---|---|
| `/` | Landing page | Public |
| `/sign-in` | Email + social login | Public |
| `/sign-up` | Registration with email verification | Public |
| `/onboarding` | Track selection for new students | Student |
| `/dashboard` | Auto-redirect based on role | Authenticated |
| `/student/dashboard` | Student progress overview | Student |
| `/student/modules` | Module + lesson listing | Student |
| `/student/lessons/:id` | Video lesson viewer | Student |
| `/student/assignments` | Assignment submissions | Student |
| `/student/kyc` | KYC document upload | Student |
| `/instructor/modules` | Assigned modules grid | Instructor |
| `/instructor/modules/:moduleId` | Module detail + assignments | Instructor |
| `/instructor/submissions` | Submission grading queue | Instructor |
| `/admin/users` | User management table | Admin |
| `/admin/kyc` | KYC review queue | Admin |
| `/admin/instructor-modules` | Instructor assignments | Admin |

## Deployment

### Cloudflare Workers

1. **Set secrets** (one-time):

```bash
wrangler secret put DATABASE_URL
wrangler secret put BETTER_AUTH_SECRET
wrangler secret put GOOGLE_CLIENT_ID
wrangler secret put GOOGLE_CLIENT_SECRET
wrangler secret put GITHUB_CLIENT_ID
wrangler secret put GITHUB_CLIENT_SECRET
wrangler secret put RESEND_API_KEY
wrangler secret put RESEND_FROM_EMAIL
wrangler secret put VITE_SENTRY_DSN
```

2. **Deploy:**

```bash
bun run deploy
```

### Environment Variables

See `.env.example` for the complete list of required variables.

## Testing

```bash
bun run test          # Run all tests
bun run test -- --watch  # Watch mode
```

## License

Private — All rights reserved.
