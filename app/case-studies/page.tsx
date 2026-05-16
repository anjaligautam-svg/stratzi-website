import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTA } from "@/components/sections/CTA";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import {
  CaseStudiesOrbital,
  caseStudiesCount,
} from "@/components/CaseStudiesOrbital";

export const metadata: Metadata = {
  title: "Case Studies — Stratzi",
  description:
    "Transformative AI case studies across fintech, banking, insurance, and government — autonomous agents, document automation, and search systems.",
};

type CaseStudy = {
  number: string;
  sector: string;
  title: string;
  body: string;
  href?: string;
};

// Content carried over from the current stratzi.ai/case-studies (PDFs hosted
// externally on Google Drive — for now we surface the same links; future
// version can move these to in-site detail pages once we have the source PDFs.
const studies: CaseStudy[] = [
  {
    number: "01",
    sector: "Financial Reporting · GenAI",
    title:
      "Revolutionizing financial reporting with GenAI and intelligent data integration",
    body: "In today's fast-moving financial world, our GenAI-powered platform uses autonomous agents to generate dynamic reports by integrating data from SQL databases, file storage, and the internet — delivering fast, accurate, and actionable insights.",
  },
  {
    number: "02",
    sector: "Lending · Document Automation",
    title:
      "Automated pipeline for customer document processing in loan approval",
    body: "In a competitive lending market, fast and accurate financial assessment is essential. Our solution automates the processing of customer bank statements to extract structured data, generate financial profiles, and verify document authenticity.",
  },
  {
    number: "03",
    sector: "Retrieval · RAG Systems",
    title:
      "Scaling RAG systems with sparse embeddings via a Masked Language Model",
    body: "To reduce memory use in RAG systems at scale, we trained a Masked Language Model to generate sparse embeddings. This approach matches the retrieval performance of our dense model (Stella) while using significantly less memory.",
  },
  {
    number: "04",
    sector: "Healthcare · Genomics",
    title: "End-to-end tool for cancer biomarker identification",
    body: "Cancer biomarkers are key to early detection and treatment, but identifying them from genomic data is complex. We built a tool that makes advanced biomarker discovery accessible to scientists and clinicians.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        {/* Page hero — 2-col: copy left, orbital animation in glassy card right */}
        <section className="relative pt-36 md:pt-44 pb-16 md:pb-20 section-x overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,theme(colors.bg-warm)_0%,theme(colors.bg)_55%)]"
          />
          <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: copy */}
            <div className="lg:col-span-6">
              <Reveal>
                <div className="eyebrow">Case studies</div>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="display-xl mt-6">
                  Transformative{" "}
                  <span className="text-primary italic font-medium">
                    case studies.
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-7 max-w-2xl text-[17px] md:text-[18px] leading-relaxed text-ink-muted">
                  Real-world deployments of agentic AI, document automation,
                  and retrieval systems across fintech, lending, insurance,
                  and research. Each one shipped against a concrete business
                  outcome.
                </p>
              </Reveal>
            </div>

            {/* Right: orbital animation in a glassy white/teal-tinted card */}
            <Reveal delay={0.32} className="lg:col-span-6">
              <div className="relative">
                {/* Soft teal halo behind the card */}
                <div
                  aria-hidden
                  className="absolute -inset-8 rounded-[2.5rem] bg-primary-soft/25 blur-2xl"
                />
                {/* Glass card */}
                <div className="relative rounded-3xl border border-primary-edge/30 bg-white/55 backdrop-blur-xl p-6 md:p-9 shadow-[0_40px_100px_-50px_rgba(44,102,110,0.4)]">
                  {/* Window-chrome row */}
                  <div className="flex items-center justify-between border-b border-primary-edge/20 pb-4 mb-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary-soft/70" />
                      <div className="h-2 w-2 rounded-full bg-primary-soft/70" />
                      <div className="h-2 w-2 rounded-full bg-primary-edge" />
                    </div>
                    <div className="text-[10px] font-semibold tracking-[0.16em] uppercase text-primary/70">
                      Deployments · Live
                    </div>
                  </div>

                  {/* Orbital animation — click any node to see detail */}
                  <CaseStudiesOrbital />

                  {/* Quiet meta row */}
                  <div className="mt-2 flex items-center justify-between text-[10px] font-semibold tracking-[0.16em] uppercase text-primary/70">
                    <span>{caseStudiesCount} active workflows</span>
                    <span className="flex items-center gap-1.5">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inset-0 rounded-full bg-primary-edge animate-ping opacity-60" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                      </span>
                      Orbiting
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Case study cards — same UI/animation as home Pillars */}
        <section className="section-pad section-x bg-bg">
          <div className="mx-auto max-w-[1440px]">
            <Stagger
              className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6"
              staggerChildren={0.1}
            >
              {studies.map((s) => (
                <StaggerItem key={s.number} className="h-full">
                  <TiltCard
                    tiltLimit={7}
                    scale={1.02}
                    effect="evade"
                    spotlightColor="rgba(176, 238, 237, 0.18)"
                    className="h-full rounded-2xl"
                  >
                    <StudyCard study={s} />
                  </TiltCard>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* CTA — same "Get in touch" form as home */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}

function StudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="relative h-full rounded-2xl border border-primary-edge/45 bg-surface p-7 md:p-9 overflow-hidden flex flex-col">
      {/* Top row — numeral circle + sector eyebrow (same pattern as Pillars) */}
      <div className="relative flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary-edge bg-primary-soft/30 font-heading text-[13px] font-semibold text-primary">
          {study.number}
        </span>
        <span className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-ink-subtle">
          {study.sector}
        </span>
      </div>

      <h3 className="headline-md relative mt-5">{study.title}</h3>

      <p className="relative mt-3 text-[14.5px] leading-relaxed text-ink">
        {study.body}
      </p>

      {/* Bottom block — "Read the full study" affordance, separated by divider
          like Pillars' "In action" block */}
      <div className="relative mt-auto pt-5 border-t border-primary-edge/30">
        <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-primary">
          Read the full study
        </div>
        <div className="mt-2 flex items-center gap-2 text-[13px] text-ink-muted">
          <span className="italic">External PDF — opens in a new tab</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
    </article>
  );
}
