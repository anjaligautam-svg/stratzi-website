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

## D7: CSS animation for Reveal (replacing framer-motion)

**Date**: 2026-05-16

**Decision**: The `Reveal` / `Stagger` / `StaggerItem` primitives use a pure CSS `@keyframes` animation (`.reveal` class in `globals.css`) instead of framer-motion's `whileInView` / `useInView`.

**Why**:
- In this stack (Next.js 16 App Router + React 19 + framer-motion 12 + Turbopack), `whileInView` and `useInView` were unreliable on initial page load — elements stayed at `opacity: 0` even when in viewport. Likely a hydration / IntersectionObserver bootstrap edge case.
- CSS keyframe animations run immediately on element mount with full reliability, no JS runtime needed, and SSR-safe (the initial styles are correct from first paint).
- For short marketing pages the difference between "fire on mount" and "fire on scroll-into-view" is invisible to the user — everything is above-fold or fades in well before the user scrolls.

**Trade-off**: Below-the-fold content fades in immediately on page load (invisible because it's off-screen). When the user scrolls, the content is already in its final state. We lose true scroll-triggered choreography, but the visual cost is zero.

**Revisit**: If we add a long form-of-life page (blog, long landing) where scroll-triggered reveals are actually visible, swap back to an IntersectionObserver-based approach (probably hand-rolled via `useEffect`, not framer's hook).

## D8: Stratzi.AI wordmark via Quicksand font (no SVG/raster)

**Date**: 2026-05-16

**Decision**: The Stratzi.AI logo is rendered with the Quicksand Google font (`<span className="font-logo font-semibold ... text-primary">Stratzi.AI</span>`), with a small SVG cursor glyph drawn inline next to it (`<CursorGlyph />`). No PNG/AVIF asset.

**Why**:
- Text + inline SVG = fully themeable via CSS variables (auto-adapts if we ever do a dark mode).
- Quicksand is a close match to the original brand wordmark's rounded geometric character.
- No image loading, no fixed dimensions, scales perfectly on any DPR.
- Recolor on demand: teal for the wordmark, taupe-brown for the cursor — exactly matching the palette.

**Trade-off**: Not a pixel-perfect replica of the brand AVIF. If exact match matters, replace `Logo.tsx` to use the AVIF/SVG asset, recolored via CSS filters (works for monochrome; we'd need to split the AVIF into two assets if we want the cursor a different color).

## D5: Tailwind v4 (not v3)

**Date**: 2026-05-16

**Decision**: Use Tailwind v4 (came default with Next 16).

**Why**: Faster, CSS-first config (`@theme` in CSS instead of `tailwind.config.js`), no migration cost since this is greenfield.

**Note**: Older 21st.dev / shadcn snippets may use v3-style `tailwind.config.js` directives — convert to `@theme` blocks in `globals.css`.

---

_Add new decisions above this line. Don't edit past entries — append corrections as new entries._
