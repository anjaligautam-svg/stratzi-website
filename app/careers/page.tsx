import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { TiltCard } from "@/components/ui/tilt-card";
import { SpecialText } from "@/components/ui/special-text";

export const metadata: Metadata = {
  title: "Careers — Stratzi",
  description:
    "We're not just building AI-powered products — we're rethinking how software gets built and delivered. Open roles at Stratzi.",
};

type Role = {
  number: string;
  title: string;
  meta: string;
  blurb: string;
  expectations: string[];
};

const roles: Role[] = [
  {
    number: "01",
    title: "AI Engineer",
    meta: "2–5 years · Pune hybrid",
    blurb:
      "Own the core AI infrastructure layer — memory, retrieval, and learning systems.",
    expectations: [
      "Production RAG / agent experience required",
      "LangChain / LangGraph",
      "Strong Python",
    ],
  },
  {
    number: "02",
    title: "Database Administrator",
    meta: "2–5 years",
    blurb:
      "Keep the data layer healthy, fast, and reliable across live client operations.",
    expectations: [
      "PostgreSQL + Redis",
      "Query optimisation",
      "GCP / AWS",
    ],
  },
  {
    number: "03",
    title: "Full-stack Developer",
    meta: "1–3 years",
    blurb:
      "Build client-facing interfaces and backend services.",
    expectations: [
      "React / Next.js frontend",
      "Python or Node.js backend",
      "REST APIs and third-party integrations",
    ],
  },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        {/* Page hero — centered header block. The display headline is
            currently a plain element; a text animation will wrap it later
            (the user is providing the animation code separately). */}
        <section className="relative pt-36 md:pt-44 pb-16 md:pb-20 section-x overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,theme(colors.bg-warm)_0%,theme(colors.bg)_55%)]"
          />
          <div className="mx-auto max-w-[1440px]">
            <div className="max-w-3xl mx-auto text-center">
              <Reveal>
                <div className="eyebrow">We are hiring</div>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="display-xl mt-6">
                  {/* SpecialText scrambles each segment then settles to the
                      real text. Both segments inherit the .display-xl font
                      (Montserrat 700 + clamp size + ink color) from the h1;
                      the second segment overrides color + weight + italic
                      so the final state matches the prior static markup.

                      `inView={false}` means animate on mount (the hero is
                      always above the fold) — framer-motion's `useInView`
                      proved unreliable with App Router hydration. */}
                  <SpecialText delay={0.4} speed={28}>
                    Build things that
                  </SpecialText>
                  {" "}
                  <SpecialText
                    delay={0.9}
                    speed={28}
                    className="text-primary italic font-medium"
                  >
                    actually run businesses.
                  </SpecialText>
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-7 mx-auto max-w-2xl text-[17px] md:text-[18px] leading-relaxed text-ink-muted">
                  At Stratzi, we&apos;re putting AI to work inside real Indian
                  businesses — not in demos, not in pilots. If you want to
                  build systems that handle genuine operations for genuine
                  clients, this is where that happens.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Open roles — same UI / animation as home Pillars cards */}
        <section className="section-pad section-x bg-bg">
          <div className="mx-auto max-w-[1440px]">
            <div className="max-w-2xl">
              <Reveal>
                <div className="eyebrow">Open roles</div>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="headline-lg mt-5">
                  Build the next chapter{" "}
                  <span className="text-primary italic font-medium">
                    with us.
                  </span>
                </h2>
              </Reveal>
            </div>

            <Stagger
              className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6"
              staggerChildren={0.12}
            >
              {roles.map((r) => (
                <StaggerItem key={r.number} className="h-full">
                  <TiltCard
                    tiltLimit={7}
                    scale={1.02}
                    effect="evade"
                    spotlightColor="rgba(176, 238, 237, 0.18)"
                    className="h-full rounded-2xl"
                  >
                    <RoleCard role={r} />
                  </TiltCard>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Note from us */}
        <section className="section-pad section-x bg-bg">
          <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="eyebrow">A note from us</div>
              </Reveal>
            </div>
            <Reveal delay={0.08} className="lg:col-span-7">
              <p className="font-heading text-[24px] md:text-[30px] font-medium leading-[1.35] tracking-[-0.01em] text-ink">
                We're not just hiring for roles — we're looking for teammates
                who want to grow with us, shape the product, and influence
                how we work.
              </p>
              <p className="mt-5 text-[16px] leading-relaxed text-ink-muted">
                We value ownership, honesty, and a bias for action.
              </p>
            </Reveal>
          </div>
        </section>

        {/* How to apply — same dark-teal gradient + bottom shader treatment
            as the home page's Get-in-touch CTA, but content stays focused on
            hiring (CareersForm + hiring@stratzi.ai). */}
        <section
          id="apply"
          className="relative isolate section-pad section-x text-white overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, #0f3a42 0%, #0a2a30 55%, #061d22 100%)",
          }}
        >
          {/* Bottom-anchored shader, top fade so it emerges from the dark. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[280px] md:h-[360px] z-0 [mask-image:linear-gradient(to_bottom,transparent_0%,black_55%,black_100%)]"
          >
            <WebGLShader intensity={0.45} speed={0.7} />
          </div>

          <div className="relative z-10 mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: copy */}
            <div>
              <Reveal>
                <div className="eyebrow eyebrow-on-dark">
                  Careers · How to apply
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="headline-lg mt-5 text-white">
                  Drop us a line at{" "}
                  <a
                    href="mailto:hiring@stratzi.ai"
                    className="text-primary-soft italic font-medium underline-offset-4 hover:underline"
                  >
                    hiring@stratzi.ai
                  </a>
                  .
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-white/80">
                  Send your CV, GitHub, portfolio, or a short note about
                  something you&apos;ve built or loved working on.
                </p>
              </Reveal>
            </div>

            {/* Right: single "Apply now" CTA card (replaces the prior
                expanded form). Frosted-glass card with a centered pill
                button — visually anchors the right column without
                competing with the copy on the left. */}
            <Reveal delay={0.16}>
              <div className="relative rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-xl p-8 md:p-12 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)] flex flex-col items-center text-center">
                <div className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-primary-soft">
                  Open to applications
                </div>
                <p className="mt-3 max-w-sm font-heading text-[22px] md:text-[26px] font-semibold leading-snug text-white tracking-[-0.005em]">
                  One email. We reply within a few days.
                </p>
                <p className="mt-3 max-w-sm text-[13.5px] leading-relaxed text-white/70">
                  Attach your CV and anything you&apos;d like us to see.
                  Skip the form, skip the cover letter — just tell us why
                  this role, in your own words.
                </p>
                <a
                  href="mailto:hiring@stratzi.ai?subject=Application%20%E2%80%94%20Stratzi"
                  className="btn-primary mt-7 text-[14px] px-7 py-4"
                >
                  Apply now
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                <div className="mt-5 text-[11px] text-white/55">
                  hiring@stratzi.ai
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

/**
 * RoleCard — same UI/animation pattern as home Pillars cards.
 * Wrapped in TiltCard by the parent for tilt + spotlight.
 */
function RoleCard({ role }: { role: Role }) {
  return (
    <article className="relative h-full rounded-2xl border border-primary-edge/45 bg-surface p-7 md:p-9 overflow-hidden flex flex-col">
      {/* Top row — numeral circle + label (Pillars pattern) */}
      <div className="relative flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary-edge bg-primary-soft/30 font-heading text-[13px] font-semibold text-primary">
          {role.number}
        </span>
        <span className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-ink-subtle">
          Open role
        </span>
      </div>

      <h3 className="headline-md relative mt-5">{role.title}</h3>

      {/* Meta line — experience + location, sits right under the title */}
      <div className="relative mt-2 text-[12px] font-medium text-primary tracking-wide">
        {role.meta}
      </div>

      <p className="relative mt-3 text-[14.5px] leading-relaxed text-ink">
        {role.blurb}
      </p>

      {/* Bullet list — same → marker as Pillars */}
      <ul className="relative mt-7 flex flex-col gap-2.5 flex-1">
        {role.expectations.map((e) => (
          <li
            key={e}
            className="flex items-start gap-2.5 text-[13px] leading-snug text-ink"
          >
            <span className="mt-1 text-primary font-semibold leading-none">
              →
            </span>
            <span>{e}</span>
          </li>
        ))}
      </ul>

      {/* Bottom block — Pillars' "In action" position becomes "Apply" CTA */}
      <div className="relative mt-8 border-t border-primary-edge/30 pt-5">
        <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-primary">
          Apply
        </div>
        <a
          href="#apply"
          className="mt-2 inline-flex items-center gap-2 text-[13px] font-medium text-ink hover:text-primary transition-colors"
        >
          Send your application
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </article>
  );
}
