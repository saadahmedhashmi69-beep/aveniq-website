# Aveniq Website — Phase 1: Architecture, UX & Design System

Status: **Planning document only. Nothing in this file has been implemented.**
Branch: `claude/new-session-hyetzm`
Scope: Product architecture, UX architecture, design system, and content rules that govern every later build phase.

---

## A. Repository Assessment

**Current state (verified by inspection, nothing modified):**

| Item | Status |
|---|---|
| Framework | Next.js 16.3.1, App Router |
| UI | React 19.2.8 |
| Language | TypeScript, `strict: true` |
| Styling | Tailwind CSS v4 (`@tailwindcss/postcss`, CSS-based theme, no `tailwind.config.js`) |
| Linting | ESLint 9, flat config, `eslint-config-next` (core-web-vitals + typescript) |
| Package manager | npm |
| Fonts | Geist Sans + Geist Mono, self-hosted via `next/font/google` |
| Folders | `app/`, `components/ui/`, `lib/`, `public/`, `types/` (empty, `.gitkeep` only) |
| Deployment target | Vercel |

**Must be preserved as-is going into Phase 2:**
- `next.config.ts`, `tsconfig.json`, `eslint.config.mjs` — no changes needed; strict TS and Next/ESLint defaults are correct for this project.
- Geist font wiring in `app/layout.tsx` — becomes the typography system's technical foundation (see F).
- The `app/`, `components/ui/`, `lib/`, `public/`, `types/` folder shape — the component/content architecture below builds inside it, doesn't replace it.

**Known placeholder that Phase 2 will replace (not touched in Phase 1):**
- `app/globals.css` still carries the generic `create-next-app` light/dark theme (`#ffffff` / `#0a0a0a`, system-preference dark mode). Phase 2 replaces this with the fixed dark design-token theme defined in section F — the site is **dark by default**, not light/dark adaptive, since the entire visual direction (premium/technical/dark palette) assumes a single controlled theme rather than OS-driven light mode.
- `app/page.tsx` / `app/layout.tsx` currently hold a one-line placeholder — intentionally left alone until Phase 2.

---

## B. Brand Positioning

**Brand essence:** Aveniq is an engineering partner that turns a business's actual operating problems into working software — not a template shop, not a marketing agency that also codes.

**Positioning statement (primary):**
> "You bring us the business problem. We engineer the system."

This is kept as the core statement — it's specific, ownable, and immediately differentiates from generic "we build websites" agency language. It also structurally matches the homepage narrative (problem first, system second).

**Supporting line:**
> "We build digital systems around the way your business actually works."

Used as a secondary/subheading line, not a second competing headline.

**Value proposition:**
For a business running on spreadsheets, disconnected tools, or software that doesn't fit how they actually operate, Aveniq designs and builds the specific system the business needs — catalogue, pricing, applications, admin, operations — as one connected piece of software instead of a patchwork.

**Differentiators (credible only — no invented scale claims):**
1. **Systems-first process** — engagement starts by mapping the business workflow, not by picking a template.
2. **Full-stack delivery under one process** — frontend, backend, and admin/operational tooling built as one coherent system rather than stitched from separate vendors.
3. **Demonstrated delivery** — a real, functioning system (Siraj Din Electronics: catalogue, cash/installment pricing, installment applications, admin panel) exists and can be shown, not just described.
4. **Engineering discipline over sales language** — the site explains how systems are built (process, security practices) rather than relying on claims that can't be checked.

Anything beyond these four (team size, years in business, number of clients, awards) is **not claimed** until confirmed (see Q).

**Brand personality:** Intelligent · Precise · Confident (not aggressive) · Business-minded · Honest.
"Technical" is deliberately *not* listed as a personality trait — technical competence should be demonstrated through the work and the process section, not asserted as a vibe. This keeps the tone aimed at business owners, not developers.

**Tone of voice rules:**
- Plain business language first; technical terms only when explaining, never to impress.
- Short, declarative sentences. Active voice.
- Banned: "revolutionary," "cutting-edge," "synergy," "leverage," "ecosystem," "world-class," "#1," "leading," "best-in-class," "next-generation."
- No fear-based security language ("hackers are targeting you"), no aggressive urgency ("act now"), no unverifiable superiority claims.
- Every claim on the site must be checkable against something Aveniq can actually show (the process, the one real case study, the stated engineering practices).

---

## C. Target Audience

**Primary:**
- Small and medium-sized business owners/founders and operations leads.
- Businesses currently running on spreadsheets, disconnected SaaS tools, or manual processes.
- Businesses that need a specific internal system (admin tooling, applications/approvals workflow, inventory, customer records) that off-the-shelf software doesn't fit.
- Businesses that need a serious commerce or catalogue presence, not a generic template site.

**Secondary:**
- Businesses that need a professional website or e-commerce platform as a standalone need.
- Businesses replacing an outdated or outgrown system.
- Businesses that need two or more existing tools connected/integrated.
- Businesses exploring automation of a manual process.
- Businesses that need a customer-facing portal or dashboard.

**Design implication:** the primary audience is *not* technically fluent. Every explanation of "what we build" must be phrased as a business outcome (fewer manual steps, one system instead of five, customers can self-serve) before — or instead of — any technology name is mentioned.

---

## D. Sitemap

**Recommended pages (launch set):**

| Path | Page | Include? | Why |
|---|---|---|---|
| `/` | Home | Yes | Core narrative, entry point for all traffic |
| `/services` | Services | Yes | Organized by business problem, not tech stack — see below |
| `/work` | Work (case studies index) | Yes | Proof stage; scales as more cases are added |
| `/work/[slug]` | Case study detail | Yes | e.g. `/work/siraj-din-electronics` |
| `/process` | Process | Yes | Explains engagement + folds in the security/engineering-discipline content |
| `/about` | About | Yes, lightweight | Positioning/philosophy only — no fabricated history/team |
| `/estimator` | Project discovery tool | Yes | Primary qualification path, distinct from a generic contact form |
| `/contact` | Contact | Yes | Direct path for visitors who already know they want to talk |
| `/privacy`, `/terms` | Legal | Yes (footer-only) | Required once any form collects contact data |

**Deliberately excluded at launch:**
- **`/solutions` as a separate page from `/services`** — would duplicate content and split SEO equity. Instead, `/services` itself is organized by business problem ("You need to sell online," "You need to replace spreadsheets," "You need a customer portal") with the specific deliverable (e-commerce platform, CRM, admin dashboard) named underneath each — this *is* the solutions framing, just not a second page.
- **`/technology`** — a dedicated tech-stack page reads as written for developers, not the buyer. Confirmed technologies are surfaced briefly in Process and in case-study "Technology used" sections instead (see K).
- **`/security` as its own page** — not enough distinct content to justify a standalone page yet; it's a subsection of `/process`. Revisit as a dedicated page once more engineering-practice content exists.
- **Team/office/history content on `/about`** — omitted entirely rather than fabricated.

**Per-page detail:**

**Home (`/`)**
- Purpose: convert cold traffic into a qualified conversation.
- Target visitor: any primary/secondary audience segment, first touch.
- Primary CTA: "Start a Project" → `/estimator`.
- Secondary CTA: "View Our Work" → `/work`.
- Main content: full narrative sequence, see section E.
- Conversion role: top of funnel, routes to Estimator or Work.
- SEO role: brand + primary commercial terms ("custom business software development," "custom web application development").

**Services (`/services`)**
- Purpose: let a visitor confirm "they build what I need" before committing to the estimator.
- Target visitor: visitor past initial trust, evaluating fit.
- Primary CTA: "Start a Project" → `/estimator`.
- Secondary CTA: "See how we've done this" → `/work`.
- Main content: problem-led groupings (see D above) with the deliverable named under each; hierarchy weighted toward custom web applications / business systems / e-commerce (see below), not toward every possible service equally.
- Conversion role: mid-funnel confirmation.
- SEO role: targets specific commercial-intent service terms.

**Work index (`/work`)**
- Purpose: proof.
- Target visitor: visitor evaluating credibility.
- Primary CTA: "Start a Project."
- Secondary CTA: link into the case study itself.
- Main content: case study card(s) — currently one real entry (Siraj Din Electronics). The page must be designed to hold 1 case study without looking empty (see I) rather than padded with fake entries.
- Conversion role: proof stage.
- SEO role: supports "who has actually built this" query intent; internal links into detail pages.

**Case study detail (`/work/[slug]`)**
- Purpose: demonstrate real, specific capability.
- Target visitor: visitor who wants evidence before talking to sales.
- Primary CTA: "Start a Project" (contextual: "Have a similar problem?").
- Secondary CTA: back to `/work`.
- Main content: Problem → Solution → Functionality → Technology (marked per confirmation status) → Screenshots → Outcome (only if verifiable, see I and N).
- Conversion role: strongest proof-to-action moment on the site.
- SEO role: long-tail, specific functionality terms (e.g., "installment pricing system," "product catalogue admin panel").

**Process (`/process`)**
- Purpose: reduce the perceived risk of commissioning custom software.
- Target visitor: visitor asking "how would this actually work / is my data safe."
- Primary CTA: "Start a Project."
- Secondary CTA: none needed — this page's job is trust, not a second decision.
- Main content: discovery → architecture → build → launch → support methodology; engineering-discipline/security practices subsection (K/security content, honestly scoped — see section on Security below).
- Conversion role: trust stage, reduces friction before Estimator.
- SEO role: "how do you build custom software" style queries.

**About (`/about`)**
- Purpose: state what Aveniq is and why it exists, briefly.
- Target visitor: visitor doing final due diligence.
- Primary CTA: "Start a Project."
- Secondary CTA: `/process`.
- Main content: positioning statement, value proposition, philosophy (systems over templates). No team bios, no office photos, no founding-year claims unless confirmed.
- Conversion role: light trust support, not a primary conversion page.
- SEO role: brand-name queries, "about Aveniq."

**Estimator (`/estimator`)**
- Purpose: qualify and capture serious leads with context, not a generic "send us a message" form.
- Target visitor: visitor ready to describe their project.
- Primary CTA: submit → Preliminary Project Profile → "Send this to Aveniq."
- Secondary CTA: none (single funnel, no distraction).
- Main content: multi-step qualification flow, see J.
- Conversion role: the main conversion event of the site.
- SEO role: minor; primarily a conversion asset, lightly indexed with its own title/description.

**Contact (`/contact`)**
- Purpose: direct channel for visitors who don't want a guided flow (e.g., referrals, quick questions).
- Target visitor: visitor with existing intent.
- Primary CTA: submit direct message.
- Secondary CTA: "Prefer a guided start? Use the Project Estimator."
- Main content: simple form (name, email, company, message) + direct contact info if available.
- Conversion role: secondary, lower-friction conversion path.
- SEO role: "contact Aveniq," local/branded queries.

---

## E. Homepage Blueprint

Sequenced against the funnel in the brief (Trust → Understanding → Proof → Desire → Conversation), front-loading *understanding* right after the hero so the visitor feels correctly diagnosed before being sold anything.

| # | Section | Objective | Visitor question answered | CTA | Fold |
|---|---|---|---|---|---|
| 1 | Hero | State positioning immediately | "What does this company actually do?" | Primary: Start a Project · Secondary: View Our Work | Above |
| 2 | Problems we solve | Make the visitor feel understood before being sold to | "Do they get my actual problem?" | none (sets up next section) | Just below fold |
| 3 | What we build | Show breadth without overload, problem-organized | "Can they build what I need?" | "See all services" → `/services` | Below |
| 4 | Featured work | Proof via one real, specific system | "Have they actually done this?" | "View case study" → `/work/[slug]` | Below |
| 5 | How we work | Demystify engagement, reduce risk | "What happens if I contact them?" | "See our process" → `/process` | Below |
| 6 | Why custom software | Reframe value: system built around them, not a template | "Why not just use off-the-shelf tools?" | none (persuasion, not action) | Below |
| 7 | Engineering discipline (brief) | Trust without fear tactics | "Is this safe/professional?" | none | Below |
| 8 | Project qualification teaser | Route serious visitors into a structured path | "How do I actually start?" | "Start the Project Estimator" → `/estimator` | Below |
| 9 | Final CTA | Convert | "I'm ready to talk." | Primary: Start a Project · Secondary: Contact directly | Below |

**Explicitly not on the homepage at launch:**
- Interactive demo — deferred to Phase 4, and only the architecture-diagram concept (see H) is approved at all. Nothing simulated ships until it's built deliberately.
- A dedicated "Technology" section — technology is mentioned in passing (Process section, footer) but is not a homepage pillar, per the "don't build for developers" rule.
- Testimonials / client logos — none exist; the section is omitted entirely rather than left empty or faked.

Per section, for implementation reference in Phase 2+:
- **Interaction level**: sections 1, 4, 8 may carry light interactivity (hero visual, case-study preview, estimator teaser); everything else is static content with scroll-reveal only.
- **Mobile behavior**: every section stacks to single-column; section 3 ("what we build") and section 4 (proof) go from grid/side-by-side to stacked cards; no hover-dependent content anywhere (see M).

---

## F. Design System

### Visual direction
Premium, intelligent, technical, trustworthy, modern — achieved through restraint (precise spacing, one dominant accent, real content) rather than density of effects. Explicitly rejecting: neon-everywhere gaming aesthetics, crypto-style gradient glow cards, generic "AI startup" gradient blobs, WebGL-for-its-own-sake, and stock-template card patterns.

### Color system

The brief's proposed palette is a reasonable starting point but needs **hierarchy, not equal usage** — three neon accents used interchangeably is exactly the "gaming/crypto" look the brief asks to avoid. Adjustments:

- **Cyan (`#00E5FF`) becomes the single dominant interactive accent** — buttons, links, focus states, active nav, key data highlights. Used at small/high-emphasis surface area only (not large fills, not body text) to avoid visual fatigue.
- **Green (`#00FF88`) is reserved as the semantic "success" color only** (form success, positive status) — not used decoratively alongside cyan, since dual-purposing it as both "brand accent" and "success" undermines the semantic meaning.
- **Purple (`#A855F7`) becomes a reserved tertiary accent**, used only for data-visualization variety (e.g., distinguishing node types in the future architecture diagram) — not for UI chrome, buttons, or general decoration.
- Warning and error colors weren't specified in the brief; proposing accessible standard values below, flagged for design sign-off.

| Token | Value | Usage |
|---|---|---|
| `bg-base` | `#08080A` | Page background |
| `bg-surface` | `#121318` | Cards, elevated panels |
| `bg-surface-hover` | `#17181F` | Hover state on surfaces |
| `border-subtle` | `#24252C` | Default card/divider borders |
| `border-strong` | `#33343D` | Hover/emphasis borders |
| `text-primary` | `#E2E8F0` | Headings, primary copy |
| `text-secondary` | `#94A3B8` | Supporting copy |
| `text-muted` | `#64748B` | Captions, metadata |
| `accent` | `#00E5FF` | Primary interactive accent |
| `accent-hover` | `#00C4DB` | Accent hover/active |
| `success` | `#00FF88` | Semantic success only |
| `warning` (proposed) | `#F5A623` | Semantic warning only |
| `error` (proposed) | `#F87171` | Semantic error only |
| `focus-ring` | `#00E5FF` @ full opacity, 2px, 2px offset | Keyboard focus, all interactive elements |

All pairings must be validated against WCAG 2.2 AA at implementation time — in particular, `accent` cyan and `success` green as *text* on `bg-base` need a real contrast check before use at small sizes (they're safe as icon/border/large-surface colors; body-text usage needs verification, not assumption).

### Typography

Recommendation: **no second typeface.** Geist Sans (already wired via `next/font`, self-hosted, zero added dependency) covers both display and body — it's technical without being futuristic-for-its-own-sake, and highly readable at small sizes, which matters for a non-technical business audience. Geist Mono (also already wired) is reserved for sparing technical/label accents (stat numbers, system labels) — not a body font.

| Role | Size (responsive, `clamp()`) | Weight | Line-height |
|---|---|---|---|
| H1 | `clamp(2.25rem, 1.8rem + 2vw, 3.75rem)` | 600–700 | 1.1, tracking -0.02em |
| H2 | `clamp(1.875rem, 1.6rem + 1.2vw, 2.75rem)` | 600 | 1.15 |
| H3 | `clamp(1.5rem, 1.35rem + 0.6vw, 1.875rem)` | 600 | 1.25 |
| Body large | 1.125–1.25rem | 400 | 1.6 |
| Body | 1rem | 400 | 1.6 |
| Small | 0.875rem | 400–500 | 1.5 |
| Labels | 0.8125rem | 500, optional uppercase, 0.02em tracking | 1.4 |
| Buttons | 0.9375–1rem | 500–600 | 1 |
| Navigation | 0.9375rem | 500 | 1 |

### Spacing

Base unit: Tailwind's default 4px scale, used exclusively — **no arbitrary pixel values** anywhere in the codebase. Semantic guidance:

- Section vertical padding: 96–128px desktop (`py-24`/`py-32`), 56–64px mobile (`py-14`/`py-16`).
- Container max-width: 1280px for reading/content sections; select proof/visual sections may go full-bleed up to 1536px.
- Gutters: 24px mobile, 32px tablet, 48–64px desktop.
- Card padding: 24–32px.
- Grid gaps: 16–20px mobile, 24–32px desktop.

### Grid & layout

- Max content width: 1280px (primary), 1536px (occasional full-bleed).
- Desktop: 12-column grid. Tablet: 8-column. Mobile: 4-column.
- Breakpoints: Tailwind v4 defaults — `sm` 640, `md` 768, `lg` 1024, `xl` 1280, `2xl` 1536. No custom breakpoints needed.

### Component system (lean — build only what will be reused)

- **Global:** Navbar, Footer, Container, Section, Button, Link, Badge, Icon wrapper, Heading, Text.
- **Content:** ServiceCard, CaseStudyCard, ProcessStep, CTABlock. `TechnologyItem` only introduced if/when a technology-display need is actually built. **Testimonial component intentionally excluded** — not even the shell is built until real testimonials exist (see N).
- **Interactive:** Tabs, Accordion, Tooltip — built when a real content need calls for them, not speculatively. Modal — only if a concrete use case emerges (e.g., screenshot lightbox on a case study). `DataVisualizationContainer`/`DemoContainer` — reserved specifically for the Phase 4 architecture diagram, not built now.
- **Forms:** Input, Select, Textarea, Checkbox, Radio, FormField, ValidationMessage — built starting Phase 5 when the Estimator and Contact form are actually implemented.

### Buttons

| Variant | Style | Height | Radius |
|---|---|---|---|
| Primary | Solid `accent` bg, `bg-base` text (contrast-checked) | 48px desktop / 44px mobile | 8px |
| Secondary | 1px `border-strong`, transparent bg, `text-primary` | 48px / 44px | 8px |
| Ghost | No border, text-only, subtle bg on hover | 44px | 8px |
| Text link | Underline, inline | — | — |
| Icon button | Square, centered icon | 40–44px | 8px |

8px radius (not pill-shaped) across buttons, cards, and inputs — reads as precise/engineered rather than soft/consumer-app. Hover: subtle bg deepen + 150ms ease. Active: `scale(0.98)`. Focus: always-visible 2px accent ring, never suppressed. Disabled: 40% opacity, no pointer events. The primary CTA must be visually obvious through contrast and consistent placement, not through motion or size escalation.

### Cards

Explicitly rejecting "dark card + glowing gradient border" as the default for every card on the site. Default card: `bg-surface`, 1px `border-subtle`, 12–16px radius, no glow. Hover: border shifts to `border-strong`, 2–4px lift, soft shadow, 200ms ease. The elevated glow/accent-border treatment is reserved for **one moment per page at most** (e.g., the featured case study), so it retains meaning instead of becoming wallpaper. Internal structure: eyebrow/label → heading → body → CTA, consistent 12–16px internal gaps.

### Navigation

Desktop: logo left, 4–5 flat nav items (Services, Work, Process, About), primary CTA button right. No dropdowns at launch — the sitemap is intentionally flat. Sticky on scroll with a solid/blur background transition (no glow effect) and a modest height reduction. Mobile: hamburger → slide-in panel with large tap targets and the CTA button prominent. Active route indicated via underline/accent color + `aria-current="page"`.

### Design tokens (naming convention for Phase 2 implementation)

```
--color-bg-base, --color-bg-surface, --color-bg-surface-hover
--color-border-subtle, --color-border-strong
--color-text-primary, --color-text-secondary, --color-text-muted
--color-accent, --color-accent-hover, --color-success, --color-warning, --color-error
--color-focus-ring
--radius-sm, --radius-md, --radius-lg, --radius-xl
--shadow-sm, --shadow-md, --shadow-lg
--space-* (reuse Tailwind's default scale, no custom additions)
--font-display, --font-body, --font-mono (mapped to existing Geist variables)
--duration-fast, --duration-base, --ease-standard
--breakpoint-* (reuse Tailwind v4 defaults)
--container-max
--z-nav, --z-modal, --z-tooltip, --z-toast
```

These become the `@theme` block in `app/globals.css` in Phase 2 — not created now.

---

## G. UX Architecture

**Navigation:** flat, 4–5 items, no dropdowns, one obvious primary CTA repeated in the nav on every page.

**Primary user journey (matches funnel in the brief):**
Trust (hero states positioning plainly) → Understanding (problems-we-solve, what-we-build) → Proof (featured work) → Desire (why custom software, process) → Conversation (estimator/contact).

**CTA strategy:**
- One primary CTA phrase used consistently sitewide: **"Start a Project"**, always routing to `/estimator`.
- One consistent secondary CTA: **"View Our Work"**, routing to `/work`.
- No competing CTAs within a single section — every section has at most one primary action asked of the visitor.
- No manipulative patterns: no fake urgency/scarcity, no forced multi-step gates before showing basic information, no auto-playing sound/video, no interstitial modals blocking content on entry.

**Friction points to actively remove:**
- Estimator collects contact info **last**, after the visitor has already invested effort answering project questions (progressive commitment, not an upfront email gate).
- Contact page exists as a low-friction escape hatch for visitors who don't want the guided flow.

---

## H. Interactive Experiences

Evaluated against one test: does it demonstrate real capability, or is it decoration?

| Concept | Verdict | Reasoning |
|---|---|---|
| **Business system architecture visualization** (User → Frontend → API → Auth → Business Logic → Database → Integrations) | **Build in Phase 4** | Directly demonstrates the "we engineer the system" positioning; can be built as SVG/CSS with scroll- or click-driven highlighting — no WebGL required; low technical complexity, low performance risk. |
| **CRM pipeline demo** (Lead → Qualification → Pipeline → Customer → Task → Notification) | **Reject as standalone** | Aveniq doesn't sell a generic CRM product, so a simulated one risks looking like an off-the-shelf template demo. Fold the equivalent idea into the real case study instead (Siraj Din's application/admin workflow already covers this ground honestly). |
| **Fictional dashboard with filtering** | **Reject** | Exactly the "generic AI startup / dashboard template" look the brief warns against. Use real (or realistically anonymized) screenshots from the Siraj Din admin panel instead — actual evidence beats simulated data. |
| **Visual workflow builder** (drag/connect nodes) | **Reject for now** | High build complexity, high risk of being a "cool but pointless" gimmick, and doesn't map to a product Aveniq currently delivers. Revisit only if Aveniq builds and can honestly demo a real workflow/automation product for a client. |

**For the one approved concept (architecture diagram), required before Phase 4 build starts:**
- Purpose: show, not tell, what "engineering the system" means.
- Interaction model: click/tap or scroll-triggered stage reveal; no drag, no physics, no WebGL.
- Mobile behavior: degrades to a vertical stacked diagram with captions — never relies on hover.
- Accessibility: full content available as ordered, labeled text if JS/animation is unavailable; respects `prefers-reduced-motion` by disabling the reveal animation and showing the full diagram statically.
- Performance: isolated via `next/dynamic`, not part of the initial homepage bundle.

---

## I. Case Study Architecture

**Card (index page):** project name, one-line problem statement, 2–3 capability tags (e.g., "Product Catalogue," "Installment Engine," "Admin Panel"), thumbnail, "View case study" link.

**Detail page structure:**
1. **Problem** — the real business situation before the system existed.
2. **Solution** — what was built, in plain terms.
3. **Functionality** — the actual feature set: product catalogue, cash pricing, installment pricing, installment calculator, installment applications, admin panel, product management, application management.
4. **Technology used** — only confirmed technologies are named; unconfirmed stack details are marked **"Requires confirmation"** rather than guessed (see N).
5. **Screenshots** — real product screenshots if available; if not yet supplied, the section is marked **"Assets required — requires confirmation"** rather than filled with placeholder/stock imagery.
6. **Outcome** — stated only in verifiable, qualitative terms unless a real metric is confirmed (e.g., "replaced manual installment tracking with a structured admin workflow" is fine; a specific percentage or dollar figure is not used unless sourced). No invented statistics under any circumstance.

This structure is written to scale honestly — it works with exactly one case study today and doesn't need to change shape as more are added.

---

## J. Project Estimator Architecture

Not a price calculator — a **qualification flow** that produces a "Preliminary Project Profile," not a fake quote.

**Flow:**
1. What are you building? *(Website / E-commerce / Custom web application / Internal business system / CRM or admin tool / Not sure — need guidance)* — drives conditional logic.
2. What type of business are you in? *(select + "other" free text)*
3. What problem are you trying to solve? *(free text — the core of the "bring us the problem" positioning)*
4. Roughly how many people will use this system? *(Just me / 2–10 / 11–50 / 50+)*
5. What do you need? *(multi-select: customer-facing website, online payments/e-commerce, admin dashboard, customer accounts/portal, integration with existing tools, mobile app)*
6. Timeline *(Flexible / 1–3 months / 3–6 months / ASAP)*
7. Budget range *(presented as ranges, skippable — not a hard gate)*
8. Contact details *(name, email, company; phone optional)* — collected last.

**Conditional logic:** selecting "Not sure — need guidance" at step 1 skips the detailed feature multi-select and routes straight to the problem description and contact fields — avoids forcing an unsure visitor through questions they can't answer.

**Progress indicator:** a step counter ("Step 3 of 6"), not a percentage bar implying false precision.

**Result screen ("Preliminary Project Profile"):** summarizes the visitor's own answers back to them and names the likely project category (e.g., "this looks like a custom web application with an admin dashboard"). It explicitly does **not** generate a price. Any promised response time (e.g., "we'll follow up within 2 business days") is marked **"Requires confirmation"** until a real SLA is decided — not invented for the mockup.

**Validation:** inline, real-time, accessible (errors tied to fields via `aria-describedby`).

**Not built in Phase 1** — this is architecture only.

---

## K. SEO Architecture

- **Titles:** `{Page Topic} | Aveniq` pattern, unique per page.
- **Meta descriptions:** unique, benefit-led, no keyword stuffing.
- **Heading hierarchy:** one H1 per page, logical H2/H3 nesting — no skipped levels.
- **Canonical tags:** self-referencing on every page.
- **Open Graph / Twitter cards:** per-page, real imagery required before launch (no stock placeholder shipped to production).
- **Sitemap/robots:** via Next.js file conventions (`app/sitemap.ts`, `app/robots.ts`) once routes exist.
- **Structured data:** `Organization` schema on Home using only confirmable fields (name, url, logo) — no fabricated founding date/address. `BreadcrumbList` on case study detail pages.
- **Commercial search themes** (informative, not stuffed): "custom business software development," "custom web application development," "business system integration," "e-commerce development for small business" — language oriented to a US-primary audience without inventing geographic presence/claims.
- **Internal linking:** every page links toward `/estimator` and at least one proof point (`/work`).
- **Image alt text:** written per-image, descriptive, never auto-generated boilerplate.

---

## L. Performance Architecture

**Governing rule: performance budget comes before visual effects.** Any proposed effect that risks Core Web Vitals must be justified or dropped.

- **Server Components by default**; Client Components only for genuinely interactive islands (nav toggle, estimator steps, the Phase 4 architecture diagram).
- **Dynamic imports** (`next/dynamic`) for anything heavy or below-the-fold-optional, isolated from the initial bundle.
- **Images:** `next/image` everywhere, explicit sizes, no unoptimized `<img>` tags.
- **Fonts:** already self-hosted via `next/font` — no additional font-loading cost to introduce.
- **Lazy-loading** for below-fold sections where it doesn't hurt perceived load.
- **No WebGL in the initial bundle** — ties directly to the hero decision in F/H; if introduced later, it must be isolated and justified against this budget, never default-loaded.
- **Third-party scripts:** none by default; any analytics tool is a deliberate, minimal choice (see Q) — no unbounded tag-manager sprawl.
- **Target:** all Core Web Vitals (LCP, INP, CLS) in the "Good" band on mobile, not just desktop.

---

## M. Accessibility Architecture

Target: WCAG 2.2 AA.

- Semantic landmarks (`header`, `nav`, `main`, `footer`) on every page; a skip-to-content link.
- Visible keyboard focus at all times — outlines are never suppressed; the `focus-ring` token (F) is used consistently.
- Full keyboard operability for every interactive component (nav, tabs/accordion if used, estimator steps, the architecture diagram).
- Color contrast validated for every text/background pairing before shipping, especially the accent cyan/green against the dark background (see F — flagged as needing verification, not assumed safe).
- Forms: explicit `<label>` association, error messages tied via `aria-describedby`, no placeholder-only labels.
- Touch targets ≥44px on all interactive elements.
- `prefers-reduced-motion` respected sitewide — non-essential motion disabled, opacity-only fades where motion remains.
- **Every interactive experience (the architecture diagram, the estimator) has a fully usable non-animated, keyboard/screen-reader-accessible fallback** — nothing on the site is only understandable through animation or hover.

---

## N. Dependency Plan

**Current dependencies are correct and sufficient for the foundation — nothing added in this phase.**

| Candidate | Verdict | Reasoning |
|---|---|---|
| `lucide-react` | **Likely justified in Phase 2** | Lightweight, tree-shakeable SVG icons; real need once Navbar/buttons/cards are built. Low risk. |
| `clsx` / `tailwind-merge` | **Not justified — use a native alternative** | A ~5-line dependency-free `cn()` helper covers conditional class composition without adding two packages. |
| Framer Motion | **Not justified at launch** | The defined motion system (subtle fades, hover micro-interactions, scroll reveals) is achievable with CSS transitions + `IntersectionObserver`. Revisit only if the architecture diagram needs orchestration CSS genuinely can't do cleanly. |
| Three.js / React Three Fiber | **Not justified** | Hero strategy (F/H) explicitly avoids WebGL at launch; no confirmed use case earns the bundle-size and performance cost. Revisit only with a specific, approved 3D use case, isolated via dynamic import. |
| React Hook Form + a validation library | **Justified starting Phase 5** | Needed once the Estimator and Contact forms are actually built — not before. |
| MDX / CMS | **Not justified** | Case study and service content is small and structured; typed static TypeScript/JSON data modules (see O) are simpler and sufficient. |

---

## O. Content / Data Architecture

- **UI components** (`components/`, `components/ui/`) contain no hardcoded business content — they render props/data only.
- **Content data** lives in typed TypeScript modules (e.g., `lib/data/services.ts`, `lib/data/case-studies.ts`, `lib/data/nav.ts`), imported by pages — not scattered as inline literals across JSX, and not a CMS (no genuine multi-editor/non-technical-content-owner requirement exists yet to justify one).
- **Case study content** structured per the schema in section I, one object per case study, so `/work` and `/work/[slug]` are generated from data rather than hand-built per project.
- **Types** (`types/`) hold shared shapes (e.g., `CaseStudy`, `Service`, `NavItem`) consumed by both the data modules and the components that render them.
- Revisit a CMS only if/when non-technical staff need to edit content independently — not a launch requirement.

---

## P. Implementation Roadmap

| Phase | Deliverables | Dependencies | Key risks | Validation |
|---|---|---|---|---|
| **1 — Architecture (this document)** | This blueprint, approved | None | Approving assumptions that later prove wrong | Your sign-off (section Q) |
| **2 — Design tokens + core shell** | `@theme` tokens in `globals.css`, Navbar/Footer/Container/Section/Button/Card/Heading/Text primitives, real homepage structure with real (non-fabricated) copy | Phase 1 approval | Token/contrast mistakes baked into every component | Lint + typecheck + build clean; manual contrast check |
| **3 — Services + Work** | `/services`, `/work`, `/work/[slug]`, Siraj Din Electronics case study populated from real data | Phase 2 primitives, real case-study assets/screenshots supplied | Missing real screenshots/tech-stack confirmation stalls the page | Content reviewed against Truth & Credibility rules (N) |
| **4 — Architecture-diagram interactive demo** | The one approved interactive experience, accessible + reduced-motion safe | Phase 2 primitives | Scope creep toward a "cool but pointless" build | Keyboard/screen-reader test, `prefers-reduced-motion` test, mobile fallback check |
| **5 — Estimator + Contact** | Multi-step estimator, contact form, lead-capture wiring | Decision needed on lead destination (email vs. service vs. future CRM — see Q) | Building auth/DB prematurely if lead handling isn't scoped correctly | Form accessibility test, end-to-end submission test |
| **6 — SEO + Performance + Accessibility hardening** | Sitemap/robots/structured data, Lighthouse + axe pass, image/font audit | All content pages exist | Retrofitting SEO/a11y late is more expensive than building it in | Lighthouse "Good" on mobile, axe zero critical issues |
| **7 — Final QA + production deploy** | Cross-browser/device QA, full content proofread against Truth & Credibility rules, Vercel production deploy | All prior phases | Shipping an unverified claim | Manual content audit + smoke test on production |

---

## Q. Risks & Decisions Requiring Your Approval

1. **Positioning statement** — approve "You bring us the business problem. We engineer the system." (+ supporting line) as final, or redirect.
2. **Color hierarchy** — approve treating cyan as the single dominant accent, green as success-only, purple as tertiary/data-viz-only, plus the proposed warning (`#F5A623`) and error (`#F87171`) additions (not specified in your original palette).
3. **Typography** — approve a Geist-only system (no second typeface added).
4. **Sitemap** — approve folding "Solutions" into Services, folding Security into Process, and omitting a standalone Technology page and an About team/history section.
5. **Hero visual** — approve **not** using WebGL/3D at launch, in favor of an SVG/CSS system-visual or a real product-screenshot treatment.
6. **Interactive demo verdict** — approve building only the architecture-diagram concept in Phase 4; CRM/dashboard/workflow-builder demos rejected or deferred.
7. **Case study assets** — are there real screenshots/assets available for Siraj Din Electronics, and are there additional real case studies beyond it?
8. **Technology claims** — confirm the actual backend/infrastructure stack Aveniq uses for client delivery (Node, Python, PostgreSQL, Prisma, AWS, etc.) before any of it is published; until confirmed, only Next.js/React/TypeScript/Tailwind/Vercel are stated as fact.
9. **Legal pages** — Privacy Policy/Terms cannot be drafted with real content until the legal entity name, jurisdiction, and contact address are confirmed.
10. **Lead-capture destination** — where should Estimator/Contact submissions go (email notification, form-handling service, future CRM)? This determines whether Phase 5 needs any backend/environment secrets at all.
11. **Analytics** — confirm whether any analytics/tracking tool is used at launch, or explicitly none (affects performance and privacy posture).
12. **Estimator as a separate page** — approve `/estimator` as distinct from `/contact` rather than merging them.

No implementation, dependency installation, or content fabrication has occurred. This document is the full deliverable for Phase 1.
