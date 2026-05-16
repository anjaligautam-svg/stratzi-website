# Stratzi — Build Progress

> Chronological log. Newest first.

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
