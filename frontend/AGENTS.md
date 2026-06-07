<!-- intent-skills:start -->
## Skill Loading

Before substantial work:
- Skill check: run `bunx @tanstack/intent@latest list`, or use skills already listed in context.
- Skill guidance: if one local skill clearly matches the task, run `bunx @tanstack/intent@latest load <package>#<skill>` and follow the returned `SKILL.md`.
- Monorepos: when working across packages, run the skill check from the workspace root and prefer the local skill for the package being changed.
- Multiple matches: prefer the most specific local skill for the package or concern you are changing; load additional skills only if the task spans multiple packages or concerns.
<!-- intent-skills:end -->

---

## Project Context: FendAm Academy — TanStack Start

### Scaffolding Command
```bash
npx @tanstack/cli@latest create my-tanstack-app \
  --agent --deployment cloudflare \
  --add-ons neon,drizzle,sentry,better-auth,tanstack-query
```

### Chosen Stack
- **Framework**: React 19 + TanStack Start + TanStack Router (file-based)
- **Data**: TanStack Query + Drizzle ORM + Neon (PostgreSQL)
- **Auth**: Better Auth (drizzleAdapter, tanstackStartCookies, JWT, email+password, Google/GitHub OAuth)
- **Observability**: Sentry (`@sentry/tanstackstart-react`)
- **Deployment**: Cloudflare Workers (`wrangler deploy`)
- **Package Manager**: bun
- **Styling**: Tailwind CSS v4 + shadcn/ui (base-maia)
- **Icons**: hugeicons + lucide-react

### Environment Variables
| Variable | Scope | Purpose |
|---|---|---|
| `DATABASE_URL` | Server | Neon PostgreSQL connection string |
| `GOOGLE_CLIENT_ID` | Server | Google OAuth |
| `GOOGLE_CLIENT_SECRET` | Server | Google OAuth |
| `GITHUB_CLIENT_ID` | Server | GitHub OAuth |
| `GITHUB_CLIENT_SECRET` | Server | GitHub OAuth |
| `BETTER_AUTH_SECRET` | Server | Better Auth encryption |
| `APP_URL` / `VITE_APP_URL` | Both | Public app URL |
| `VITE_API_URL` | Client | NestJS backend API URL |
| `RESEND_API_KEY` | Server | Resend email API |
| `RESEND_FROM_EMAIL` | Server | Resend sender address |
| `VITE_SENTRY_DSN` | Both | Sentry project DSN |
| `SENTRY_ORG` / `SENTRY_PROJECT` / `SENTRY_AUTH_TOKEN` | Build | Sentry source maps upload |

### Migration Rules
1. No Prisma imports in `src/`.
2. No `pg` Pool — use `@neondatabase/serverless` HTTP driver with Drizzle.
3. All database access must go through `createServerFn` or route `loader`.
4. Auth guards belong in route `beforeLoad` or layout `beforeLoad`.
5. Replace `next/font/google` with `@fontsource-variable` imports.
6. Replace `next/image` with standard `<img>`.
7. Replace `next/link` with `@tanstack/react-router` `Link`.
8. Remove all `'use client'` directives.

### Role-Based Route Map
- `_auth` — sign-in, sign-up (no sidebar)
- `_student` — /student/dashboard, /student/modules, /student/assignments, /student/kyc, /student/lessons
- `_instructor` — /instructor/modules, /instructor/modules/:moduleId, /instructor/submissions
- `_admin` — /admin/users, /admin/kyc, /admin/instructor-modules

### Known Gotchas
- `tanstackStartCookies()` must be the **last** Better Auth plugin.
- Cloudflare Workers require `nodejs_compat` flag.
- Client env vars need `VITE_` prefix; server vars use `process.env`.
- The server API uses `getRequest()` (not `getWebRequest()`) from `@tanstack/react-start/server`.

### Migration Complete ✅ (Phases 0-8)
- **Phase 0**: Scaffold, Intent, legacy clone, AGENTS.md, .coderabbit.yaml
- **Phase 1**: Fonts (Fontsource), Tailwind theme, shadcn/ui (10 components), root layout
- **Phase 2**: Drizzle schema (all 12 tables), @neondatabase/serverless driver, drizzle.config
- **Phase 3**: Better Auth (drizzleAdapter, tanstackStartCookies, JWT, social providers, email verification)
- **Phase 4**: 17 routes registered, 4 pathless layouts (_auth, _student, _instructor, _admin), shared DashboardSidebar
- **Phase 5**: Server functions (getSession, requireAuth, requireRole), onboarding DB operation
- **Phase 6**: All 13 pages ported (landing, auth, onboarding, dashboard redirect, 5 student, 3 instructor, 3 admin)
- **Phase 7**: Sentry Vite plugin, client/server init, error boundary, wrangler config, .env.example, build verified
- **Phase 8**: Audit clean (zero next/prisma/pg imports), all integrations verified, 8 tests passing, legacy-source removed

### Key Files
- `src/db/schema.ts` — Drizzle schema (12 tables)
- `src/db/index.ts` — Neon HTTP driver
- `src/lib/auth.ts` — Better Auth server config
- `src/lib/auth-client.ts` — Better Auth client with JWT
- `src/lib/server-fns.ts` — getSession, requireAuth, requireRole
- `src/lib/onboarding.ts` — createOnboardingProfile server function
- `src/lib/api-client.ts` — Client-side apiFetch with JWT auth (calls NestJS backend)
- `src/lib/auth-flow.ts` — Role-based redirect helpers
- `src/lib/sentry.client.ts` — Client-side Sentry initialization
- `src/lib/tracks.ts` — getTracks server function
- `src/components/dashboard-sidebar.tsx` — shared sidebar layout
- `src/components/site-header.tsx` — landing page header
- `src/components/onboarding-form.tsx` — onboarding form with server fn
- `src/components/ui/` — 10 shadcn/ui components (no "use client")
- `instrument.server.mjs` — Server-side Sentry initialization
- `vite.config.ts` — Vite config with Cloudflare, Sentry, Neon plugins
- `wrangler.jsonc` — Cloudflare deployment config
