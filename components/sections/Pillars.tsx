"use client";

import { Reveal, Stagger, StaggerItem } from "../motion/Reveal";

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
      "Your institutional memory — captured, structured, and queryable. Built from every email, document, meeting, and decision your business produces. It grows smarter as you operate. It never retires.",
    bullets: [
      "Ingests all channels — email, voice, docs, portals",
      "Long-term, working, and procedural memory",
      "Queryable in natural language by anyone",
      "The foundation every agent draws from",
    ],
    example:
      "A transaction confirmation lands in the manager's inbox. The agent detects it, updates memory, and reflects it in analytics — automatically.",
  },
  {
    numeral: "II",
    label: "Component 02",
    name: "Agentic Employees",
    description:
      "Custom AI agents that own entire workflows — not single tasks. They navigate portals, communicate with clients, process documents, and hand off to humans only when a decision genuinely requires one.",
    bullets: [
      "Process agents — execute end-to-end",
      "Comms agents — call, WhatsApp, email",
      "Compliance agents — reports, filings, audits",
      "Intelligence agents — surface what matters",
    ],
    example:
      "Upload a lead list. The voice agent calls on your behalf, runs the script, books follow-ups, and updates the sheet — overnight.",
  },
  {
    numeral: "III",
    label: "Component 03",
    name: "Learning Loops",
    description:
      "Every agent action generates a signal. Signals flow back into the brain. Playbooks refine. Decisions sharpen. The OS at month 12 is a fundamentally more capable system than month 1 — without a single manual update.",
    bullets: [
      "Outcome signal capture after every action",
      "Automatic playbook refinement",
      "Agent performance tracking and tuning",
      "Compounding intelligence over time",
    ],
    example:
      "A provider changes a business rule overnight. The agent detects it and updates payment & payout logic — no IT ticket required.",
  },
];

export function Pillars() {
  return (
    <section id="pillars" className="section-pad section-x bg-bg">
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="max-w-3xl">
          <Reveal>
            <div className="eyebrow">What Stratzi builds</div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="headline-lg mt-5">
              Three components.{" "}
              <span className="text-primary italic font-medium">
                One operating system.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-2xl text-[16.5px] leading-relaxed text-ink-muted">
              Not a chatbot. Not a workflow tool. Not a one-time automation
              project. A full AI operations layer — architected to your
              business, built on the SaaS you already run, compounding in value
              from day one.
            </p>
          </Reveal>
        </div>

        {/* Pillar cards */}
        <Stagger
          className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6"
          staggerChildren={0.12}
        >
          {pillars.map((p) => (
            <StaggerItem key={p.numeral}>
              <PillarCard pillar={p} />
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
      className="group relative h-full rounded-2xl border border-line bg-surface p-7 md:p-9 transition-colors duration-300 hover:border-primary-edge overflow-hidden flex flex-col"
    >
      {/* Background numeral */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-2 -bottom-6 font-heading font-bold text-[160px] leading-none text-primary-soft/40 select-none"
      >
        {pillar.numeral}
      </span>

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

      <p className="relative mt-3 text-[14.5px] leading-relaxed text-ink-muted">
        {pillar.description}
      </p>

      <ul className="relative mt-7 flex flex-col gap-2.5 flex-1">
        {pillar.bullets.map((b) => (
          <li
            key={b}
            className="flex items-start gap-2.5 text-[13px] leading-snug text-ink-muted"
          >
            <span className="mt-1 text-primary font-semibold leading-none">
              →
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {/* In-action example */}
      <div className="relative mt-8 border-t border-line pt-5">
        <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-primary">
          In action
        </div>
        <p className="mt-2 italic text-[13px] leading-relaxed text-taupe">
          {pillar.example}
        </p>
      </div>
    </article>
  );
}
