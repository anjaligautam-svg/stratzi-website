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
    title: "We understand your business",
    body: "We spend time with your team mapping how work actually flows — what's slow, what's manual, what breaks, and where the real bottlenecks are. No assumptions, no templates.",
    deliverable:
      "A clear picture of what can be automated and what the impact will be — before we build anything.",
  },
  {
    number: "02",
    title: "We set up your AI foundation",
    body: "We build the intelligence layer on top of your existing tools — capturing how your business works, what your clients need, and the rules your team runs by. It learns as it goes.",
    deliverable:
      "A system that knows your business — and gets harder to replace the longer it runs.",
  },
  {
    number: "03",
    title: "Your AI team goes to work",
    body: "We deploy AI colleagues built around your specific workflows. They handle the routine work end-to-end and bring your team in only when a real decision is needed.",
    deliverable:
      "Your team focused on clients and decisions — not paperwork and follow-ups.",
  },
  {
    number: "04",
    title: "It compounds over time",
    body: "Every task completed, every correction made, every outcome recorded makes the system more capable. What you have at the end of year one is fundamentally better than what you started with.",
    deliverable:
      "An asset that appreciates — not a tool that depreciates.",
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
              Simple to start.{" "}
              <span className="text-primary-soft italic font-medium">
                Built to last.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-2xl text-[16.5px] leading-relaxed text-white/80">
              Every Stratzi engagement is scoped to your exact business — your
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

      {/* "You get" callout */}
      <div className="col-span-12 md:col-span-4 mt-3 md:mt-0">
        <div className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-primary-soft">
          You get
        </div>
        <p className="mt-2.5 text-[14px] leading-relaxed text-white">
          {phase.deliverable}
        </p>
      </div>
    </div>
  );
}
