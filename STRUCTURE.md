# Stratzi — Page Structure

> Target: **5–6 scrolls total**. Each section ≈ 1 viewport on desktop.

## Page: `/` (Home)

Composed in `app/page.tsx` from section components in `components/sections/`.

| # | Section | Component | Approx height | Status | Notes |
|---|---|---|---|---|---|
| – | Navbar | `Navbar.tsx` | Sticky 64px | ⬜ Pending | Glass on scroll, subtle border-bottom |
| 1 | **Hero** | `Hero.tsx` | 100vh | ⬜ Pending | Left-aligned headline + dual CTA + signature visual right |
| 2 | **Three Pillars** | `Pillars.tsx` | ~100vh | ⬜ Pending | Company Brain / Agentic Employees / Learning Loops |
| 3 | **How It Works** | `HowItWorks.tsx` | ~90vh | ⬜ Pending | Day 1 → Day 30 timeline (4 phases reframed) |
| 4 | **Proof / Case Studies** | `Proof.tsx` | ~100vh | ⬜ Pending | Before/after framing for MyPolicyExpress + Finonest |
| 5 | **CTA / Discovery Call** | `CTA.tsx` | ~80vh | ⬜ Pending | Form + reassurance copy |
| – | Footer | `Footer.tsx` | ~30vh | ⬜ Pending | Logo, email, 2025, minimal |

**Total: 5 sections + nav + footer ≈ 5.5 viewports on desktop.** Fits the brief.

**Status legend**: ⬜ Pending · 🔨 Building · ✅ Done · 🐛 Needs polish

## Section briefs (one per section — read before building)

### 1. Hero

- **Layout**: 12-col grid, left 7 cols copy, right 5 cols visual
- **Eyebrow**: `THE AI-NATIVE BUSINESS OS` (Label MD, taupe + teal underline)
- **Headline**: `Your business should run on intelligence, not headcount.` (Montserrat 700, "intelligence" in primary teal)
- **Subhead**: 1 sentence naming the three pillars in plain language
- **CTAs**: Primary `Book a discovery call` (teal pill), Secondary `See it in action ↓` (ghost, scrolls to Proof)
- **Visual (right)**: **Animated agent-thread mockup of Scenario A** — the insurance broking quotation flow. Glass card on `bg-warm` wash.
  - Persona: Human Agent (HA) = sales person at insurance broker (e.g. POSP user)
  - Thread sequence (one message reveals at a time, 1.2s apart, then loops with a 3s pause):
    1. HA: "Got a potential customer — Rakesh Kumar"
    2. Stratzi Agent: "Got it. Share his age, vehicle, and pin code."
    3. HA: (uploads details)
    4. Agent: "Fetching quotations from 4 insurers…" (typing pulse, then 2s delay)
    5. Agent: "Here are 3 best matches:" (3 small quote cards slide in: ICICI ₹8,400 · HDFC ₹9,100 · Tata AIG ₹8,750)
    6. HA: "Go with ICICI"
    7. Agent: "Payment link sent to Rakesh on WhatsApp ✓"
  - Visual treatment: white card, 1px taupe border, rounded-md, soft inner shadow with brown tint. Avatars: a small teal circle (Agent) and a taupe circle (HA). Quote cards = pill-shaped chips with insurer name + price.
  - Motion: each message fades+slides in from the bottom 12px, 400ms, custom ease. Typing dots pulse during the "Fetching…" beat. Thread auto-replays.
- **Motion (copy side)**: Fade-up sequence (eyebrow → headline → subhead → CTAs), 80ms stagger
- **Footer of hero**: One thin row with `LIVE TODAY · MY POLICY EXPRESS · FINONEST` as quiet proof

### 2. Three Pillars

- **Eyebrow**: `WHAT STRATZI BUILDS`
- **Headline**: `Three components. One operating system.`
- **Body**: 1 sentence — "Not a chatbot. Not a workflow tool. A full AI operations layer architected to your business."
- **Layout**: 3-column grid, each pillar in a card (`rounded-md`, 1px taupe border, no shadow)
- **Each card** has: Roman numeral mark (I/II/III in `primary-soft`), pillar name (Headline MD), description (Body MD), 4-item bullet list with teal `→` markers, and a **real-world example block** at the bottom (small italic Inter, taupe color, prefixed with `IN ACTION ·`)
- **Real-world examples per pillar** (from user's Scenarios B–E):
  - **Company Brain** → *"A transaction confirmation lands in the manager's inbox. The agent detects it, updates memory, and reflects it in analytics — automatically."*
  - **Agentic Employees** → *"Upload a lead list. The voice agent calls on your behalf, runs the script, books follow-ups, and updates the sheet."*
  - **Learning Loops** → *"A provider changes a business rule overnight. The agent detects it and updates payment/payout logic — no IT ticket."*
- **Motion**: Cards fade-up with 120ms stagger on scroll-in
- **Hover**: Card border shifts to `primary-edge`, no other change

### 3. How It Works (4-phase, original framing)

- **Eyebrow**: `HOW IT WORKS`
- **Headline**: `Four phases. One transformation.`
- **Body**: 1 sentence — "Every deployment is scoped to your exact business, your workflows, your tools."
- **Layout**: Vertical timeline. Each phase is a horizontal row with: phase number (large taupe), title + description (left), deliverable (right). 1px dividers between rows.
- **4 phases** (from old HTML, kept verbatim — no day markers):
  1. **We map your operations** — A precise automation blueprint
  2. **We build your company brain** — A living knowledge base
  3. **We deploy your agentic employees** — An operations layer running 24/7
  4. **The OS learns. The business compounds.** — An intelligence asset that appreciates
- **Motion**: Each row fades up + the number reveals with a soft scale-in on scroll-in
- **Hover on row**: Subtle teal accent slides in from left edge

### 4. Proof (Case Studies)

- **Eyebrow**: `PROOF`
- **Headline**: `Live in the field. Not in demo.`
- **Body**: 1 sentence
- **Layout**: 2-column grid, 2 cards side by side
- **Each card**: industry tag (small), client name (Headline MD), the pain (Body MD), what was deployed (4 pill chips for agents), outcome (Body MD with one phrase in italic)
- **Card 1**: My Policy Express (Insurance)
- **Card 2**: Finonest (NBFC Lending)
- **Borrowed pattern**: Before/after framing in the copy itself ("Their team did X by hand → Now an agent runs Y autonomously")
- **Motion**: Cards fade-up + chips stagger in
- **Hover**: Card border to `primary-edge`

### 5. CTA / Discovery Call

- **Layout**: 2-column. Left: copy. Right: form (white card, 1px taupe border)
- **Headline (left)**: `See what the Business OS looks like for your business.`
- **Body (left)**: 30 min. We map your operations, identify what agents can own, show you exactly what your Stratzi OS would look like.
- **Form fields**: Name · Company · Email · "What do you want to automate?" (optional)
- **Submit**: Primary teal pill: `Book a discovery call →`
- **Reassurance line**: `We respond within 24 hours · No sales pressure`
- **Note**: Form is decorative for now (GitHub Pages = no backend). Will wire to Formspree or similar later — captured in `DECISIONS.md` D6.

### – Navbar

- Sticky top, transparent on hero, becomes `surface` with bottom border on scroll past 50px
- Left: `STRATZI` logo (Montserrat 600, primary color on A?)
- Right: `What we build` · `How it works` · `Proof` (Body SM) + primary CTA pill `Get in touch`
- Mobile: hamburger → full-screen overlay menu

### – Footer

- Single row: Logo (left) · "The Business OS for MSMEs · India · 2026" (center) · `hello@stratzi.ai` (right)
- Top border, generous vertical padding, no other clutter
- Skip mega-footer with sitemap — out of scope

## File layout

```
stratzi-website/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Home — composes all sections
│   ├── globals.css         # Tailwind v4 + design tokens (@theme)
│   └── favicon.ico
├── components/
│   ├── sections/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Pillars.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Proof.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   ├── ui/                 # shadcn primitives + custom UI (Button, Input, etc.)
│   └── motion/             # Reusable: FadeUp, Stagger, BreatheLoop
├── lib/
│   └── utils.ts            # cn() helper (shadcn)
├── public/
│   ├── favicon.ico
│   └── media/              # Logos, hero artifact assets
├── BRIEF.md
├── DESIGN.md
├── STRUCTURE.md            # This file
├── PROGRESS.md
└── DECISIONS.md
```

## Conventions

- One section = one file in `components/sections/`
- Section files cap at **200 lines**. If exceeded, extract sub-components.
- All animations use primitives from `components/motion/` — never inline `motion.div` with custom variants in section files.
- Images in `public/media/<section>/<name>.png`.
- Section padding utility class: `section-pad` (96px desktop / 64px mobile) — defined in `globals.css`.

---

_Last updated: 2026-05-16_
