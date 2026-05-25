"use client";

import { Reveal, Stagger, StaggerItem } from "../motion/Reveal";
import { TiltCard } from "@/components/ui/tilt-card";

type Pillar = {
  numeral: string;
  label: string;
  name: string;
  description: string;
  bullets: string[];
  example: string;
};

const pillars: Pillar[] = [
  {
    numeral: "I",
    label: "Component 01",
    name: "Company Brain",
    description:
      "Everything your business knows — made accessible. Built from how your team actually works, it becomes the single source of truth that never walks out the door.",
    bullets: [
      "Captures knowledge as your team operates",
      "Answers questions your team used to ask each other",
      "Gets more useful the longer it runs",
      "The foundation everything else builds on",
    ],
    example:
      "A new team member asks about a client's history. They get a complete answer in seconds — no digging through emails, no asking around.",
  },
  {
    numeral: "II",
    label: "Component 02",
    name: "AI Employee Buddies",
    description:
      "Dedicated AI colleagues that handle the repetitive, time-consuming work your team currently does by hand — so your people can focus on what actually needs them.",
    bullets: [
      "Own tasks end-to-end, not just single steps",
      "Work across communication, documents, and portals",
      "Hand off to humans only when it matters",
      "Available around the clock, without follow-up",
    ],
    example:
      "A routine client request comes in after hours. It's handled, logged, and responded to before your team arrives in the morning.",
  },
  {
    numeral: "III",
    label: "Component 03",
    name: "Learning Loops",
    description:
      "The system pays attention to what works and what doesn't — and adjusts. Six months in, it runs your business noticeably better than it did on day one.",
    bullets: [
      "Learns from every interaction and outcome",
      "Adapts when your business or market changes",
      "Reduces exceptions over time, not more",
      "No manual updates or IT involvement needed",
    ],
    example:
      "Your team stops correcting the same type of error after week three. The system noticed the pattern first.",
  },
];

export function Pillars() {
  return (
    <section id="pillars" className="pt-12 md:pt-24 pb-16 md:pb-32 section-x bg-bg">
      <div className="mx-auto max-w-[1440px]">
        {/* Header — centered */}
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <div className="eyebrow">What we deliver</div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="headline-lg mt-5">
              Less time on operations.{" "}
              <span className="text-primary italic font-medium">
                More time on growth.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 mx-auto max-w-2xl text-[16.5px] leading-relaxed text-ink-muted">
              We build and run the automation layer for your business — and the
              more it runs, the better it gets.
            </p>
          </Reveal>
        </div>

        {/* Pillar cards */}
        <Stagger
          className="mt-12 md:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6"
          staggerChildren={0.12}
        >
          {pillars.map((p) => (
            <StaggerItem key={p.numeral} className="h-full">
              <TiltCard
                tiltLimit={7}
                scale={1.02}
                effect="evade"
                spotlightColor="rgba(176, 238, 237, 0.18)"
                className="h-full rounded-2xl"
              >
                <PillarCard pillar={p} />
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function PillarCard({ pillar }: { pillar: Pillar }) {
  return (
    <article
      className="relative h-full rounded-2xl border border-primary-edge/45 bg-surface p-6 md:p-9 overflow-hidden flex flex-col"
    >
      {/* Top */}
      <div className="relative flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary-edge bg-primary-soft/30 font-heading text-[13px] font-semibold text-primary">
          {pillar.numeral}
        </span>
        <span className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-ink-subtle">
          {pillar.label}
        </span>
      </div>

      <h3 className="headline-md relative mt-5">{pillar.name}</h3>

      <p className="relative mt-3 text-[14.5px] leading-relaxed text-ink">
        {pillar.description}
      </p>

      <ul className="relative mt-7 flex flex-col gap-2.5 flex-1">
        {pillar.bullets.map((b) => (
          <li
            key={b}
            className="flex items-start gap-2.5 text-[13px] leading-snug text-ink"
          >
            <span className="mt-1 text-primary font-semibold leading-none">
              →
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {/* In-action example */}
      <div className="relative mt-8 border-t border-primary-edge/30 pt-5">
        <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-primary">
          In action
        </div>
        <p className="mt-2 italic text-[13px] leading-relaxed text-brown">
          {pillar.example}
        </p>
      </div>
    </article>
  );
}
