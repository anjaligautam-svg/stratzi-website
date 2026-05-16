"use client";

import { Reveal, Stagger, StaggerItem } from "../motion/Reveal";

type CaseStudy = {
  industry: string;
  client: string;
  before: string;
  agents: string[];
  outcome: string;
  outcomeHighlight: string;
};

const cases: CaseStudy[] = [
  {
    industry: "Insurance Broking",
    client: "My Policy Express",
    before:
      "Their ops team handled every policy quotation manually — collecting customer details from POSPs, visiting each insurer portal, fetching quotes, selecting the right options, and issuing payment links by hand. Every sale required hours of ops work.",
    agents: [
      "Ops Bot (POSP interface)",
      "Portal navigation agent",
      "Quotation decision agent",
      "Payment link agent",
    ],
    outcome:
      "The agent now runs the full quotation-to-payment workflow autonomously. It gathers customer details from the POSP, selects the right insurers, navigates portals, fetches live quotes, communicates options back, and generates the payment link —",
    outcomeHighlight: "without a human touching the process.",
  },
  {
    industry: "Lending / NBFC",
    client: "Finonest",
    before:
      "Their sales team was spending the bulk of their time on early-stage qualification calls — high-volume, repetitive work that consumed capacity better spent closing warm leads. Cost per qualified lead was high and human bandwidth was the ceiling.",
    agents: [
      "Voice qualification agent",
      "Lead scoring + routing",
      "Live handoff to human agent",
    ],
    outcome:
      "A voice agent now handles the first qualification call autonomously — asks the right questions, scores intent, and transfers interested leads live to a human agent.",
    outcomeHighlight:
      "Cost per qualified lead reduced significantly. Human agents only engage with leads already warmed and screened.",
  },
];

export function Proof() {
  return (
    <section id="proof" className="section-pad section-x bg-bg">
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="max-w-3xl">
          <Reveal>
            <div className="eyebrow">Proof</div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="headline-lg mt-5">
              Live in the field.{" "}
              <span className="text-primary italic font-medium">
                Not in demo.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-2xl text-[16.5px] leading-relaxed text-ink-muted">
              Two deployments live. Both on existing SaaS infrastructure.
              Agents running real workflows, delivering real outcomes.
            </p>
          </Reveal>
        </div>

        {/* Case study cards */}
        <Stagger
          className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6"
          staggerChildren={0.15}
        >
          {cases.map((c) => (
            <StaggerItem key={c.client}>
              <CaseCard study={c} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function CaseCard({ study }: { study: CaseStudy }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface overflow-hidden transition-colors duration-300 hover:border-primary-edge">
      {/* Top */}
      <div className="border-b border-line p-7 md:p-9">
        <div className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-primary">
          {study.industry}
        </div>
        <h3 className="mt-3 font-heading text-[32px] md:text-[36px] font-semibold leading-[1.1] text-ink tracking-[-0.01em]">
          {study.client}
        </h3>

        {/* Before/after framing — Before */}
        <div className="mt-7 grid grid-cols-1 sm:grid-cols-[60px_1fr] gap-3 sm:gap-4">
          <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-taupe sm:pt-1">
            Before
          </div>
          <p className="text-[14px] leading-relaxed text-ink-muted">
            {study.before}
          </p>
        </div>
      </div>

      {/* Middle — agents deployed */}
      <div className="border-b border-line bg-surface-elev p-7 md:p-9">
        <div className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-ink-subtle">
          What was deployed
        </div>
        <div className="mt-3.5 flex flex-wrap gap-2">
          {study.agents.map((a) => (
            <span
              key={a}
              className="inline-flex items-center rounded-full bg-taupe-cream/70 px-3 py-1.5 text-[12px] font-medium text-brown"
            >
              {a}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom — outcome */}
      <div className="flex-1 p-7 md:p-9">
        <div className="grid grid-cols-1 sm:grid-cols-[60px_1fr] gap-3 sm:gap-4">
          <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-primary sm:pt-1">
            After
          </div>
          <p className="text-[14.5px] leading-relaxed text-ink">
            {study.outcome}{" "}
            <span className="italic text-primary font-medium">
              {study.outcomeHighlight}
            </span>
          </p>
        </div>
      </div>
    </article>
  );
}
