import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CareersForm } from "@/components/CareersForm";

export const metadata: Metadata = {
  title: "Careers — Stratzi",
  description:
    "We're not just building AI-powered products — we're rethinking how software gets built and delivered. Open roles at Stratzi.",
};

type Role = {
  title: string;
  blurb: string;
  expectations: string[];
};

const roles: Role[] = [
  {
    title: "App Developer (React Native / Flutter)",
    blurb:
      "Build performant, user-friendly mobile applications from the ground up — both for our internal products and client-facing tools.",
    expectations: [
      "Solid experience with React Native or Flutter",
      "Ability to build & ship across iOS and Android",
      "A product mindset — clean UX and fast iteration",
    ],
  },
  {
    title: "Front-end Developer (Web + App)",
    blurb:
      "If you live and breathe interfaces, this one's for you. Build smooth, responsive UIs that work across web and mobile, helping us bring our designs and ideas to life.",
    expectations: [
      "Strong experience with React, Next.js, or similar frameworks",
      "Bonus if you've dabbled in both web and mobile",
      "A sharp eye for design and UX",
      "Experience collaborating with backend and product teams",
    ],
  },
  {
    title: "DevOps Engineer",
    blurb:
      "Be the glue between code and cloud. Help us automate everything, keep systems reliable, and scale our infrastructure with confidence.",
    expectations: [
      "Own CI/CD pipelines and deployment workflows",
      "Manage infrastructure (AWS / GCP / Azure)",
      "Champion security, monitoring, and performance best practices",
    ],
  },
];

const perks = [
  {
    title: "Flexible hours",
    body: "Trust-based work, not clock-punching.",
  },
  {
    title: "AI-tool driven",
    body: "We use modern tools to move faster and smarter.",
  },
  {
    title: "Learning opportunities",
    body: "Upskill budgets, hack days, freedom to explore.",
  },
  {
    title: "Performance-driven growth",
    body: "Promotions based on output, not time.",
  },
  {
    title: "Trust, transparency & memes",
    body: "We're a startup that believes in people over processes.",
  },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        {/* Page hero */}
        <section className="relative pt-36 md:pt-44 pb-16 md:pb-20 section-x overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,theme(colors.bg-warm)_0%,theme(colors.bg)_55%)]"
          />
          <div className="mx-auto max-w-[1440px]">
            <div className="max-w-3xl">
              <Reveal>
                <div className="eyebrow">We are hiring</div>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="display-xl mt-6">
                  Be part of{" "}
                  <span className="text-primary italic font-medium">
                    our mission.
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-7 max-w-2xl text-[17px] md:text-[18px] leading-relaxed text-ink-muted">
                  At Stratzi, we're not just building AI-powered products,
                  we're rethinking how software gets built and delivered.
                  From smart apps to scalable services, we focus on solving
                  real-world problems with modern, intelligent tech.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Open roles */}
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
              className="mt-12 md:mt-16 flex flex-col gap-4"
              staggerChildren={0.1}
            >
              {roles.map((r) => (
                <StaggerItem key={r.title}>
                  <RoleCard role={r} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Perks */}
        <section className="section-pad section-x bg-bg-warm/60">
          <div className="mx-auto max-w-[1440px]">
            <div className="max-w-2xl">
              <Reveal>
                <div className="eyebrow">Perks & vibes</div>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="headline-lg mt-5">
                  We're not corporate and we{" "}
                  <span className="text-primary italic font-medium">
                    don't pretend to be.
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-5 text-[16px] leading-relaxed text-ink-muted">
                  We're a startup that believes in people over processes.
                  Here's what you get.
                </p>
              </Reveal>
            </div>

            <Stagger
              className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
              staggerChildren={0.08}
            >
              {perks.map((p) => (
                <StaggerItem key={p.title}>
                  <article className="h-full rounded-2xl border border-line-warm bg-surface p-6">
                    <span className="block h-1.5 w-6 rounded-full bg-primary" />
                    <h3 className="mt-5 font-heading text-[16px] font-semibold leading-snug text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-ink-muted">
                      {p.body}
                    </p>
                  </article>
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

        {/* How to apply */}
        <section
          id="apply"
          className="section-pad section-x bg-bg-warm/60 relative overflow-hidden"
        >
          <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: copy */}
            <div>
              <Reveal>
                <div className="eyebrow">How to apply</div>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="headline-lg mt-5">
                  Drop us a line at{" "}
                  <a
                    href="mailto:hiring@stratzi.ai"
                    className="text-primary italic font-medium underline-offset-4 hover:underline"
                  >
                    hiring@stratzi.ai
                  </a>
                  .
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-ink-muted">
                  Send your CV, GitHub, portfolio, or a short note about
                  something you've built or loved working on. Or fill in the
                  form on the right.
                </p>
              </Reveal>
            </div>

            {/* Right: application form (decorative for now — see CareersForm) */}
            <Reveal delay={0.16}>
              <CareersForm />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function RoleCard({ role }: { role: Role }) {
  return (
    <article className="group rounded-2xl border border-line bg-surface p-7 md:p-9 transition-colors hover:border-primary-edge">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
        <div className="lg:col-span-5">
          <h3 className="font-heading text-[22px] md:text-[26px] font-semibold leading-[1.2] tracking-[-0.005em] text-ink">
            {role.title}
          </h3>
          <p className="mt-3 text-[14.5px] leading-relaxed text-ink-muted">
            {role.blurb}
          </p>
        </div>
        <div className="lg:col-span-6">
          <div className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-primary">
            What we're looking for
          </div>
          <ul className="mt-3 flex flex-col gap-2.5">
            {role.expectations.map((e) => (
              <li
                key={e}
                className="flex items-start gap-2.5 text-[13.5px] leading-snug text-ink"
              >
                <span className="mt-1 text-primary font-semibold leading-none">
                  →
                </span>
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-1 lg:text-right flex lg:justify-end">
          <a
            href="#apply"
            className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.04em] text-primary border-b border-primary/40 pb-0.5 hover:border-primary transition-colors self-start"
          >
            Apply
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-1"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}

