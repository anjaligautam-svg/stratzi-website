# Stratzi — Architecture Decisions

> Why each choice was made. Read before re-litigating.

## D1: Next.js (App Router) over Vanilla HTML or Astro

**Date**: 2026-05-16

**Decision**: Next.js 16 + React 19 + TypeScript + Tailwind v4, App Router.

**Why**:
- 21st.dev Magic MCP outputs React + shadcn components — drops in cleanly
- Multi-file by convention (each section = one component file)
- Static export (`output: "export"`) ships static HTML to GitHub Pages — no server runtime needed
- `next/font` handles font loading without FOUT
- App Router gives us per-section co-location

**Trade-off**: Tiny build step (`npm run build` → `out/`) vs. zero-config Vanilla. Worth it for component reuse.

## D2: shadcn/ui as component base

**Date**: 2026-05-16

**Decision**: Use shadcn/ui (slate base color).

**Why**:
- 21st.dev components are shadcn-shaped — direct drop-in
- We own the source (copied into `components/ui/`), so we can edit freely to break the "default shadcn look"
- Lighter than a heavy UI lib (Material, Chakra)

**Mitigation for AI-slop look**: We **customize** the copied primitives — adjust spacing, replace fonts, change radius, override the default palette. Default shadcn = recognizable. Heavily-edited shadcn = ours.

## D3: Framer Motion for animation (skipping GSAP and Lenis initially)

**Date**: 2026-05-16

**Decision**: `framer-motion` only. Skipping `gsap`, `lenis`, `lucide-react` (icons inline SVG for now).

**Why**:
- Framer Motion covers ~90% of motion needs (entrance, scroll-triggered, layout, gesture)
- `gsap` only needed for complex timelines — add if a specific section demands it
- `lenis` smooth-scroll is polish — measure perceived need first
- Inline SVG icons keep bundle small and design control tight

**Revisit**: If we hit a wall on timeline orchestration or smooth-scroll feel.

## D4: Static export for GitHub Pages

**Date**: 2026-05-16

**Decision**: `output: "export"` in `next.config.ts`. No SSR, no API routes.

**Why**:
- Site is marketing-only — no dynamic data
- GitHub Pages is free, fast, and serves static HTML perfectly
- `images: { unoptimized: true }` because GH Pages doesn't run Next's image optimizer

**Deployment** (when ready):
1. `npm run build` → produces `out/`
2. Either commit `out/` to a `gh-pages` branch, OR use GitHub Actions to build + deploy on push
3. If hosting at `username.github.io/stratzi-website/`, uncomment `basePath` + `assetPrefix` in `next.config.ts` with the repo name. For custom domain (`stratzi.ai`), leave commented.

## D5: Tailwind v4 (not v3)

**Date**: 2026-05-16

**Decision**: Use Tailwind v4 (came default with Next 16).

**Why**: Faster, CSS-first config (`@theme` in CSS instead of `tailwind.config.js`), no migration cost since this is greenfield.

**Note**: Older 21st.dev / shadcn snippets may use v3-style `tailwind.config.js` directives — convert to `@theme` blocks in `globals.css`.

---

_Add new decisions above this line. Don't edit past entries — append corrections as new entries._
