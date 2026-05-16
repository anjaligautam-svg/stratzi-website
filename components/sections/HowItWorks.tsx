"use client";

import { Reveal, Stagger, StaggerItem } from "../motion/Reveal";
import { BGPattern } from "@/components/ui/bg-pattern";

type Phase = {
  number: string;
  title: string;
  body: string;
  deliverable: string;
};

const phases: Phase[] = [
  {
    number: "01",
    title: "We map your operations",
    body: "Every workflow your team currently runs by hand. Every SaaS tool in your stack. Every document, email, and portal that touches your business. We identify what agents can own — and what always needs a human.",
    deliverable:
      "A precise automation blueprint — what to build, in what order, and what the full OS looks like deployed on your stack.",
  },
  {
    number: "02",
    title: "We build your company brain",
    body: "Your institutional knowledge — structured and made queryable. Client histories, product rules, operational playbooks, past decisions. The brain does not resign when your ops lead does. It does not forget.",
    deliverable:
      "A living knowledge base that every agent draws from — and that becomes more valuable every month your business operates.",
  },
  {
    number: "03",
    title: "We deploy your agentic employees",
    body: "Custom-built agents for your specific workflows. They navigate portals, communicate with clients, run compliance processes, and execute multi-step tasks end-to-end. Humans receive exceptions. Agents handle everything else.",
    deliverable:
      "An operations layer running 24/7. Your team moves from executing to approving — from doing to deciding.",
  },
  {
    number: "04",
    title: "The OS learns. The business compounds.",
    body: "Every agent action generates a signal. The brain updates. Playbooks sharpen. What runs at year-end is a more capable system than what was deployed on day one — automatically, continuously, without IT projects.",
    deliverable:
      "An intelligence asset that appreciates over time. Not a static tool — a system that gets better as you use it.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how"
      className="relative isolate section-pad section-x text-white overflow-hidden"
      style={{
        // Premium dark-teal gradient: deeper, richer than the flat primary
        // tone. Top is a refined deep teal, bottom drops to near-black with
        // a subtle teal undertone for visual depth.
        background:
          "linear-gradient(180deg, #0f3a42 0%, #0a2a30 55%, #061d22 100%)",
      }}
    >
      {/* Subtle dot pattern overlay — primary-soft tinted, low alpha,
          fade-edges mask so dots concentrate in the center and don't
          fight the section boundaries. */}
      <BGPattern
        variant="dots"
        mask="fade-edges"
        size={26}
        fill="rgba(176, 238, 237, 0.16)"
      />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="max-w-3xl">
          <Reveal>
            <div className="eyebrow eyebrow-on-dark">How it works</div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="headline-lg mt-5 text-white">
              Four phases.{" "}
              <span className="text-primary-soft italic font-medium">
                One transformation.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-2xl text-[16.5px] leading-relaxed text-white/80">
              Every Stratzi deployment is scoped to your exact business — your
              workflows, your tools, your team's actual work. Not a generic
              template applied and abandoned.
            </p>
          </Reveal>
        </div>

        {/* Phases */}
        <Stagger
          className="mt-14 md:mt-20 border-t border-white/15"
          staggerChildren={0.1}
        >
          {phases.map((p) => (
            <StaggerItem key={p.number}>
              <PhaseRow phase={p} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function PhaseRow({ phase }: { phase: Phase }) {
  return (
    <div className="group relative grid grid-cols-12 gap-3 md:gap-6 lg:gap-10 border-b border-white/15 py-8 md:py-12 transition-colors hover:bg-white/[0.06]">
      {/* Left accent that slides in on hover */}
      <span
        aria-hidden
        className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary-soft scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 ease-out"
      />

      {/* Number — smaller on mobile so it pairs visually with the title
          on the next row rather than dominating its own row */}
      <div className="col-span-12 md:col-span-2">
        <div className="font-heading text-[26px] md:text-[52px] font-medium leading-none text-white/40">
          {phase.number}
        </div>
      </div>

      {/* Title + body */}
      <div className="col-span-12 md:col-span-6 -mt-1 md:mt-0">
        <h3 className="headline-md text-white">{phase.title}</h3>
        <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-white/80">
          {phase.body}
        </p>
      </div>

      {/* Deliverable */}
      <div className="col-span-12 md:col-span-4 mt-3 md:mt-0">
        <div className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-primary-soft">
          Deliverable
        </div>
        <p className="mt-2.5 text-[14px] leading-relaxed text-white">
          {phase.deliverable}
        </p>
      </div>
    </div>
  );
}
