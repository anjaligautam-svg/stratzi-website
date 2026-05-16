# Stratzi — Build Progress

> Chronological log. Newest first.

## 2026-05-16 (later) — Home layout polish

- Trimmed the Hero→Pillars gap. Hero `pb` dropped from `pb-20 md:pb-28` to `pb-8 md:pb-12`; Pillars top padding overridden from `section-pad` (96/128px) to `pt-16 md:pt-24` (64/96px). Roughly 45% less whitespace at the seam.
- Removed the **Proof** section from `app/page.tsx` — case studies now live exclusively on [/case-studies](app/case-studies/page.tsx). The hero's "See it in action" CTA now navigates there (was `#proof` anchor).
- `components/sections/Proof.tsx` is kept on disk for now (still has the MyPolicyExpress / Finonest before-after copy in one place). Can delete in a future cleanup or re-mount on a different page.

## 2026-05-16 (late evening) — Logo + 3 sub-pages

**Logo**
- Built `components/Logo.tsx` — Stratzi.AI wordmark in Quicksand (`font-logo` token, loaded via `next/font/google`) colored with `text-primary` (deep teal `#003434`), plus a custom-drawn cursor SVG glyph colored with `text-brown-soft` (`#583F32`).
- Replaced text "STRATZI" mark in both `Navbar.tsx` and `Footer.tsx`.
- Old logo (white text + light-blue cyan cursor) replaced with brand-aligned palette.

**Sub-pages built**
- ✅ `/case-studies` — Hero + 4 case-study cards (Financial Reporting / Loan Approval / RAG / Cancer Biomarker). Content carried over verbatim from current stratzi.ai.
- ✅ `/solutions` — Hero + 4 category blocks (Generative AI / Retrieval / Document Processing / Predictive AI) with 10 sub-product cards across them.
- ✅ `/careers` — Hero + 3 open roles + 5 perks + note + decorative application form.

**Navbar**
- Switched from anchor links (`#pillars`, `#how`, `#proof`) to real page routes (`/solutions`, `/case-studies`, `/careers`).
- "Get in touch" CTA → `/#cta` (always lands on home contact form).

**Motion system rewrite**
- Replaced framer-motion-based `Reveal` / `Stagger` / `StaggerItem` with pure CSS keyframe animation (`.reveal` class + delay buckets in `globals.css`). Reason: framer-motion 12's `whileInView` and `useInView` had timing issues with Next.js 16 + React 19 hydration, leaving elements stuck at opacity 0. CSS animation is simpler and fires reliably on mount.

**Bug fixed**
- `app/careers/page.tsx` originally inlined the form with an `onSubmit` handler — Next.js rejected this because server components can't receive function props. Extracted to `components/CareersForm.tsx` as a `"use client"` component.

## 2026-05-16 (evening) — Full v1 build shipped

All 5 sections + nav + footer built and rendering. Compiles clean, dev server boots in ~350ms.

**Sections built**
- ✅ `components/sections/Navbar.tsx` — sticky, transparent over hero, glass with border on scroll, mobile menu
- ✅ `components/sections/Hero.tsx` — left-aligned editorial copy, animated agent thread on right, soft beige radial wash
- ✅ `components/sections/AgentThread.tsx` — auto-playing insurance quotation flow (Scenario A), loops every ~3.5s, breathes subtly
- ✅ `components/sections/Pillars.tsx` — 3 cards (Brain, Agents, Loops) with Roman numerals, bullet lists, "In Action" example block per card
- ✅ `components/sections/HowItWorks.tsx` — 4-phase timeline rows with number, title/body, deliverable; hover slides teal accent in from left
- ✅ `components/sections/Proof.tsx` — 2 case study cards (MyPolicyExpress, Finonest) with Before / Deployed / After structure
- ✅ `components/sections/CTA.tsx` — split copy + form (decorative, no backend yet)
- ✅ `components/sections/Footer.tsx` — minimal single-row footer

**Foundation**
- ✅ `app/layout.tsx` — Montserrat (heading) + Inter (body) via `next/font`
- ✅ `app/globals.css` — Stratzi palette tokens (bg, bg-warm, primary, taupe, brown, cream, etc.), shadcn semantic mappings, section utilities (`section-pad`, `section-x`, `.eyebrow`, `.display-xl`, `.headline-lg`, `.btn-primary`, `.btn-ghost`)
- ✅ `components/motion/Reveal.tsx` — Reveal + Stagger + StaggerItem primitives wrapping framer-motion `whileInView`
- ✅ `app/page.tsx` — composes all sections in order

**Visual verification**
Screenshots taken via Claude Preview MCP at 1440×900 — all sections render correctly:
- Hero: ✓ Left copy stack, agent thread auto-plays right
- Pillars: ✓ 3 cards side-by-side with In-Action block
- How It Works: ✓ 4 phase rows with big taupe numbers
- Proof: ✓ 2 case-study cards with Before/After framing
- CTA: ✓ Split layout, form with 4 fields
- Footer: ✓ Minimal single row

## Known issues / future polish

- **Intersection-observer jump-scroll edge case**: jumping to a section via URL hash sometimes leaves Reveal-wrapped content briefly invisible until scroll moves. Probably fine in normal use but worth revisiting.
- **Mobile layout not yet visually verified** — only desktop screenshots taken. Stack should reflow correctly since I built mobile-first, but eyes-on-screen needed.
- **Form is decorative** — wire to Formspree (or similar) before launch (tracked in DECISIONS.md D6 when added).
- **Logo treatment is text-only** — if you want a real wordmark / SVG logo, drop the file and I'll swap.
- **No favicon or social/OG image yet** — generate via Pollinations later.

## How to resume in a new Claude session

Tell Claude:
> "Open `~/Desktop/stratzi-website/`. Read `BRIEF.md`, `DESIGN.md`, `STRUCTURE.md`, `PROGRESS.md`, `DECISIONS.md` in that order to get context. The v1 build is shipped — current focus is polish / new sections / wiring backend."

## How to run locally

```bash
cd ~/Desktop/stratzi-website
npm run dev
# → http://localhost:3000
```

## How to build for GitHub Pages

```bash
cd ~/Desktop/stratzi-website
npm run build
# Output: ./out/
```

For deployment to `username.github.io/stratzi-website/`, uncomment the `basePath` + `assetPrefix` lines in `next.config.ts` first. For a custom domain (stratzi.ai), leave them commented.

---

## 2026-05-16 (afternoon) — Project scaffolded

- ✅ Next.js 16.2.6 + React 19 + TypeScript + Tailwind v4 + App Router
- ✅ Installed `framer-motion` for animations
- ✅ Initialized shadcn/ui
- ✅ Configured `next.config.ts` for static export
- ✅ Tracking files created
- ⬜ Awaiting company content, color palette, section visions

---

_Last updated: 2026-05-16_
