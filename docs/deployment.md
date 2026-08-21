# Deployment Guide

This covers what's required to take the Aveniq site from this repository to a
live, working deployment with a real database and a working admin account.
Nothing here has been exercised against an actual Vercel deployment — see
"What this guide has NOT verified" at the end.

## 1. Environment variables

Set these in your hosting platform's environment configuration (e.g. Vercel
Project Settings → Environment Variables), never in a committed file.
`.env.example` documents the same list with no values.

| Variable | Required | Purpose |
|---|---|---|
| `DATABASE_URL` | Yes | PostgreSQL connection string. Format: `postgresql://USER:PASSWORD@HOST:5432/DATABASE`. Used by Prisma at runtime (`lib/prisma.ts`) and by the CLI at migration/seed time (`prisma.config.ts`). |
| `NEXT_PUBLIC_SITE_URL` | Recommended | The production URL (e.g. `https://aveniq.example`), used for canonical links, `sitemap.xml`, and Open Graph metadata. Falls back to `http://localhost:3000` if unset — fine for local dev, wrong for production. |
| `RESEND_API_KEY` | Optional | Enables the contact-form email notification via [Resend](https://resend.com). Without it, submissions are still saved to the database (visible in `/admin/inquiries`) — only the email side-channel is skipped. See `app/api/contact/route.ts`. |
| `CONTACT_TO_EMAIL` | Optional | The inbox that receives contact-form notification emails. Required alongside `RESEND_API_KEY` for email delivery to activate. |
| `ADMIN_EMAIL` | Once, at bootstrap | The first admin account's email. Only read by `prisma/seed.ts`. |
| `ADMIN_INITIAL_PASSWORD` | Once, at bootstrap | The first admin account's initial password (12+ characters). Only read by `prisma/seed.ts`, which hashes it with scrypt before storing anything — the plaintext value is never persisted. **Remove this variable from the environment after running the seed once.** |

`ADMIN_EMAIL`/`ADMIN_INITIAL_PASSWORD` must be supplied by whoever owns this
deployment — nothing in this codebase invents, hardcodes, or defaults them.
`prisma/seed.ts` refuses to run without both set, and refuses a password
under 12 characters.

## 2. Database setup

1. Provision a PostgreSQL database (Vercel Postgres, Neon, Supabase, RDS,
   or any standard Postgres host all work — the only requirement is a
   connection string Prisma can use).
2. Set `DATABASE_URL` to that connection string, in the deployment
   platform's environment settings.
3. Apply migrations. From a machine with `DATABASE_URL` pointed at the
   **production** database:
   ```bash
   npx prisma migrate deploy
   ```
   This applies every migration under `prisma/migrations/` in order. It does
   not prompt for anything and is safe to re-run (already-applied
   migrations are skipped). Do not use `prisma migrate dev` against a
   production database — it's a development-time command that can prompt
   for destructive resets.

## 3. Seeding

Four independent seed scripts, run with `node` directly (they use Node's
native TypeScript support — **Node 22.6 or newer is required** to run them
this way; if your deploy/CI environment only has an older Node, install
`tsx` as a dev dependency and run each with `npx tsx <path>` instead). Point
`DATABASE_URL` at the production database before running any of them.

```bash
# 1. Bootstrap the first admin account (idempotent — safe to re-run;
#    does nothing if ADMIN_EMAIL already has an account).
ADMIN_EMAIL=you@example.com ADMIN_INITIAL_PASSWORD='a-strong-unique-password' \
  node prisma/seed.ts

# 2. Seed the portfolio (29 projects: 1 verified — Siraj Din Electronics —
#    plus 28 illustrative concepts). Upserts by slug, safe to re-run to
#    sync content changes made in prisma/data/projects.ts.
node prisma/seed-projects.ts

# 3. Seed the 6 service categories. Same upsert-by-slug behavior.
node prisma/seed-services.ts

# 4. Seed the 3 admin-editable homepage/process content blocks. Unlike
#    the two above, this only CREATES missing keys — it never overwrites
#    a row that already exists, so it won't clobber edits made later
#    through /admin/content.
node prisma/seed-settings.ts
```

None of these scripts need `RESEND_API_KEY` or any other optional variable
— only `DATABASE_URL`, plus `ADMIN_EMAIL`/`ADMIN_INITIAL_PASSWORD` for the
first script.

## 4. Application deploy (Vercel or similar)

1. Connect the repository, targeting the `claude/new-session-hyetzm` branch
   (or whichever branch/PR you deploy from).
2. Set the environment variables from section 1.
3. Build command: the default (`next build`, or `npm run build`) is
   correct as-is. `npm install` now runs `prisma generate` automatically
   via a `postinstall` script — without this, the build would fail because
   `@prisma/client`'s generated code wouldn't exist. (This was missing
   until this pass and has been added to `package.json`.)
4. No other build configuration is required — `next.config.ts` doesn't
   need environment-specific overrides.

## 5. Post-deploy checklist

- Visit `/admin/login` and sign in with the account created in step 3.
  Change the password by rotating `ADMIN_INITIAL_PASSWORD` and re-running
  the seed is **not** how to do this today — there's no self-service
  password-change UI yet (a real gap; see the final report).
- Remove `ADMIN_INITIAL_PASSWORD` (and ideally `ADMIN_EMAIL`) from the
  live environment once the seed has run — they have no further purpose
  and there's no reason to leave a password sitting in plaintext in
  platform environment config longer than necessary.
- Submit a test contact-form entry and confirm it appears in
  `/admin/inquiries`. If `RESEND_API_KEY`/`CONTACT_TO_EMAIL` are set,
  confirm the notification email arrives too.
- Confirm `/sitemap.xml` and `/robots.txt` resolve and reference the real
  production domain (this depends on `NEXT_PUBLIC_SITE_URL` being set
  correctly).

## What this guide has NOT verified

Everything above was validated locally against a real PostgreSQL instance
in this development sandbox (migrations, all four seed scripts, the full
admin login/CRUD flow, and a production build) — but not against an actual
Vercel deployment. A prior attempt in this same engagement to run
`vercel deploy` from this sandbox failed due to a network-policy block at
the environment level (outbound access to `api.vercel.com` and
`telemetry.vercel.com` was denied by the proxy), which is an infrastructure
constraint of this sandbox, not a defect in the application. Deploying for
real — and confirming the build succeeds, migrations apply, and the seeded
admin can log in — is a step the project owner needs to do from an
environment with real Vercel access.
