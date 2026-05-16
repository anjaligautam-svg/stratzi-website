import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTA } from "@/components/sections/CTA";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

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
        {/* Page hero */}
        <section className="relative pt-36 md:pt-44 pb-16 md:pb-20 section-x overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,theme(colors.bg-warm)_0%,theme(colors.bg)_55%)]"
          />
          <div className="mx-auto max-w-[1440px]">
            <div className="max-w-3xl">
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
          </div>
        </section>

        {/* Case study cards */}
        <section className="section-pad section-x bg-bg">
          <div className="mx-auto max-w-[1440px]">
            <Stagger
              className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6"
              staggerChildren={0.1}
            >
              {studies.map((s) => (
                <StaggerItem key={s.number}>
                  <StudyCard study={s} />
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
    <article className="group relative flex h-full flex-col rounded-2xl border border-line bg-surface p-8 md:p-10 transition-colors hover:border-primary-edge overflow-hidden">
      {/* Big background numeral */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-3 -bottom-8 font-heading font-bold text-[180px] leading-none text-primary-soft/30 select-none"
      >
        {study.number}
      </span>

      <div className="relative flex items-center gap-3">
        <span className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-primary">
          {study.sector}
        </span>
      </div>

      <h3 className="relative mt-5 font-heading text-[24px] md:text-[28px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink">
        {study.title}
      </h3>

      <p className="relative mt-4 text-[14.5px] leading-relaxed text-ink-muted">
        {study.body}
      </p>

      <div className="relative mt-auto pt-8 flex items-center gap-2 text-[12px] font-semibold tracking-[0.04em] text-primary">
        <span className="border-b border-primary/40 pb-0.5 group-hover:border-primary transition-colors">
          Read the full study
        </span>
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
      </div>
    </article>
  );
}
