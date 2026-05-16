# Stratzi — Design System

> Source: `~/Downloads/DESIGN (1).md` (Material-style tokens) — adapted, narrowed, and given a clear hierarchy below. Primary teal is **locked**. Beige/taupe layers and accents are tuned for the website's editorial feel.

## Aesthetic direction (one-liner)

**Editorial minimalism with tactile warmth.** Earth-toned palette, generous whitespace, restrained motion, real product visuals — never the generic AI brain/circuit imagery. Inspired by Wispr Flow's restraint and Zamp's confident first-person voice. No glassmorphism-on-everything, no gradient text, no neon.

## Color palette (final, applied to Tailwind v4 `@theme`)

### Surfaces / backgrounds (Besh — warm off-white system)

| Token | Hex | Use |
|---|---|---|
| `bg` | `#F8FAF9` | Page background (warm off-white) |
| `bg-warm` | `#F1ECE4` | Beige section bg — used for contrast bands, hero variant |
| `surface` | `#FFFFFF` | Cards (with 1px taupe border, no shadows) |
| `surface-elev` | `#FBFAF7` | Slightly elevated containers |
| `surface-muted` | `#ECEEED` | Subtle inset bands |

### Ink (text + primary structure)

| Token | Hex | Use |
|---|---|---|
| `ink` | `#191C1C` | Primary text |
| `ink-muted` | `#3F4848` | Secondary text |
| `ink-subtle` | `#6F7978` | Tertiary text, captions |
| `ink-faint` | `#BFC8C8` | Hint text, dividers |

### Primary — Deep Teal (LOCKED)

| Token | Hex | Use |
|---|---|---|
| `primary` | `#003434` | Primary CTAs, brand moments, link hover, focus ring |
| `primary-hover` | `#044F4F` | Hover state for primary |
| `primary-soft` | `#B0EEED` | Primary-tinted backgrounds (badges, highlights) |
| `primary-edge` | `#80BDBC` | Accent borders, subtle teal moments |

### Secondary — Taupe

| Token | Hex | Use |
|---|---|---|
| `taupe` | `#6B5B4F` | Secondary text, structural dividers |
| `taupe-soft` | `#D8C3B4` | Soft taupe surfaces |
| `taupe-cream` | `#F5DECF` | Warm cream bg for chips/tags |

### Tertiary — Rich Brown

| Token | Hex | Use |
|---|---|---|
| `brown` | `#3F291D` | Depth markers, high-contrast text on cream |
| `brown-soft` | `#583F32` | Iconography, deep accents |

### Functional

| Token | Hex | Use |
|---|---|---|
| `border` | `#E1E3E2` | Default 1px borders |
| `border-warm` | `#E3D7C6` | Borders on beige sections |
| `error` | `#BA1A1A` | Form errors only — should rarely appear |

### Use rules

- **Primary teal appears only on**: CTAs, focus rings, the single accent moment per section (a number, a verb, an underline). Never on backgrounds larger than a button.
- **NEVER use generic gradients.** If a gradient is used at all, it's a subtle wash from `bg` → `bg-warm` (one degree of warm shift), no rainbow, no purple/cyan.
- **Cards = white with 1px `border` line, no shadow.** OR cream `taupe-cream` with `border-warm`. No drop shadows except a single subtle one on the floating primary CTA.

## Typography

| Role | Family | Weight | Size desktop | Size mobile | Tracking |
|---|---|---|---|---|---|
| Display XL (hero) | Montserrat | 700 | 72–96px | 44–56px | -0.02em |
| Headline LG (sections) | Montserrat | 600 | 40–48px | 32–36px | -0.01em |
| Headline MD (cards) | Montserrat | 600 | 24px | 22px | 0 |
| Body LG | Inter | 400 | 18px | 17px | 0 |
| Body MD | Inter | 400 | 16px | 15px | 0 |
| Body SM | Inter | 400 | 14px | 14px | 0 |
| Label MD (eyebrows, tags) | Inter | 600 | 12px | 12px | +0.05em, UPPERCASE |
| Label SM (meta) | Inter | 500 | 11px | 11px | +0.04em, UPPERCASE |

Loaded via `next/font/google` in `app/layout.tsx`. Will replace shadcn's default Geist.

## Spacing & rhythm

- Base unit: 4px
- Section vertical padding: **96–128px desktop / 64–80px mobile**
- Headline → body gap: 24px (mobile) / 32px (desktop)
- Side margins: **80px desktop / 20px mobile** (per source design system)
- Max content width: **1280px** (wider than typical, lets editorial layouts breathe)
- 12-col desktop grid / 4-col mobile grid

## Radius

| Token | Value | Use |
|---|---|---|
| `sm` | 4px | Inputs, small badges |
| `DEFAULT` | 8px | Most UI |
| `md` | 12px | Cards |
| `lg` | 16px | Hero artifact / large containers |
| `xl` | 24px | Pricing-style large cards (rare) |
| `full` | 9999px | Pills, CTAs, tag chips |

CTAs are **pills** (`rounded-full`). Cards are `rounded-md` to `rounded-lg`. Avoid mixing radii in the same composition.

## Motion language

> Restraint > exuberance. Motion is for emphasis, never decoration.

- **Library**: Framer Motion only (we deliberately skipped GSAP/Lenis to stay disciplined).
- **Page-entrance**: hero headline fades up 16px over 600ms with custom ease `[0.16, 1, 0.3, 1]`. Stagger child elements 80ms.
- **Scroll-triggered**: `whileInView` with `once: true`, threshold ~0.2. Same 16px fade-up curve.
- **Hover**: 200ms ease. Translate buttons 1px up, color shift on primary. No bouncy springs.
- **Number counters**: count up once on scroll-in over 1.2s, easing out.
- **The signature visual** (hero artifact): a single subtle parallax + a continuous slow breathe (4–6s loop) to suggest "alive."

## Component patterns (to be built in `components/ui/` and `components/sections/`)

- **Button (primary)**: `bg-primary text-white rounded-full px-8 py-3.5`, Inter 14px 600 weight, hover lifts 1px and shifts to `primary-hover`. Tiny right-arrow icon on hover.
- **Button (secondary / ghost)**: `bg-transparent text-ink border border-taupe-soft rounded-full px-7 py-3.5`, hover: border darkens to `taupe`.
- **Eyebrow label**: Label MD, color `taupe`, paired with a 28px teal underline (`bg-primary h-px`) to its left.
- **Pillar card**: 1px `border`, `rounded-md`, padding 40px, no shadow. On hover: border shifts to `primary-edge`, subtle inner glow (NOT a drop shadow).
- **Stat card**: large Montserrat number + small Inter caption. Number has a teal underline accent.
- **Section divider**: 1px `border` line, full-bleed, NEVER a gradient.

## Anti-patterns (active rejection list)

These are AI-slop tells — actively reject:

- ❌ Gradient text on headings
- ❌ Glow effects on cards
- ❌ Purple-cyan / teal-magenta gradients
- ❌ Generic isometric SaaS illustrations
- ❌ "Powered by AI" + emojis
- ❌ Floating 3D blobs / brain renders / circuit boards
- ❌ Drop-shadowed white cards on white background
- ❌ Bouncy spring animations on everything
- ❌ Centered-everything layouts
- ❌ Identical card grids stacked vertically
- ❌ Anonymous testimonials
- ❌ Counter that ticks beyond reasonable numbers (e.g. "9,000+ companies")

## Inspirations — what to borrow

| Site | Pattern to borrow | Why |
|---|---|---|
| **Wispr Flow** | Before/after demo as proof section | Buyer needs to *see* the transformation, not read it |
| **Zamp** | "Day 1 → Day 30" implementation timeline + first-person hero copy | MSME buyers want short, realistic time-to-value |
| **Nurix** | Restrained palette (single electric accent) | Models the "one accent, used sparingly" discipline |

## Inspirations — what to AVOID

| Common SaaS mistake | What we do instead |
|---|---|
| Centered hero stack | Left-aligned editorial hero with visual on right |
| Robot/brain hero imagery | Real product UI artifact (animated chat thread, knowledge graph node) |
| Feature grid of 9 capabilities | 3 deep pillars with full treatment each |
| Generic "Learn more" CTAs | Verb-product CTAs ("Hire an agent", "Build your brain") |

---

_Last updated: 2026-05-16_
