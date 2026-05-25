"use client";

import { Reveal, Stagger, StaggerItem } from "../motion/Reveal";

/**
 * WhyStratzi — three differentiators + a small stat block.
 *
 * Renders on the dark teal palette so it pairs visually with the How It
 * Works section (dark zone) and breaks up the light sections rhythmically.
 */

type Reason = {
  number: string;
  title: string;
  body: string;
};

const reasons: Reason[] = [
  {
    number: "01",
    title: "Fully managed",
    body: "We build, run, and improve the system end-to-end. No engineering hires, no maintenance burden, no separate IT project to manage.",
  },
  {
    number: "02",
    title: "Specific to your business",
    body: "Not a template, not a generic chatbot. Built around how your team actually works — your tools, your rules, your clients.",
  },
  {
    number: "03",
    title: "You pay for results",
    body: "We're aligned with outcomes, not licenses or seats. The model only works when the system measurably moves your business.",
  },
];

const stats = [
  { value: "4", label: "Sectors live in production" },
  { value: "24/7", label: "Operations running on autopilot" },
  { value: "100%", label: "Built around your existing stack" },
];

export function WhyStratzi() {
  return (
    <section
      className="relative isolate pt-12 md:pt-24 pb-16 md:pb-28 section-x text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0f3a42 0%, #0a2a30 55%, #061d22 100%)",
      }}
    >
      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="max-w-3xl">
          <Reveal>
            <div className="eyebrow eyebrow-on-dark">Why Stratzi</div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="headline-lg mt-5 text-white">
              Three reasons teams pick us{" "}
              <span className="text-primary-soft italic font-medium">
                and stay.
              </span>
            </h2>
          </Reveal>
        </div>

        <Stagger
          className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6"
          staggerChildren={0.1}
        >
          {reasons.map((r) => (
            <StaggerItem key={r.number} className="h-full">
              <article className="h-full rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-xl p-7 md:p-9">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary-soft/45 bg-primary-soft/15 font-heading text-[13px] font-semibold text-primary-soft">
                    {r.number}
                  </span>
                </div>
                <h3 className="headline-md mt-5 text-white">{r.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-white/80">
                  {r.body}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Stat block — three numbers with captions, sitting under the cards */}
        <Reveal delay={0.2}>
          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 border-t border-white/15 pt-10 md:pt-14">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <div className="font-heading text-[42px] md:text-[56px] font-semibold leading-none text-primary-soft tracking-tight">
                  {s.value}
                </div>
                <div className="mt-3 text-[12px] font-semibold tracking-[0.18em] uppercase text-white/75">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
