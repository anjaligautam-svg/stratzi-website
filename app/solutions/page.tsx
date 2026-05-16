import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTA } from "@/components/sections/CTA";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CpuArchitecture } from "@/components/ui/cpu-architecture";
import { TiltCard } from "@/components/ui/tilt-card";

export const metadata: Metadata = {
  title: "AI Solutions — Stratzi",
  description:
    "Generative AI, retrieval & search, document processing, and predictive AI — the technical building blocks behind every Stratzi deployment.",
};

type SolutionCard = {
  name: string;
  body: string;
};

type SolutionCategory = {
  eyebrow: string;
  heading: string;
  intro: string;
  cards: SolutionCard[];
};

const categories: SolutionCategory[] = [
  {
    eyebrow: "Innovative solutions",
    heading: "Generative AI",
    intro:
      "Transform how you generate, automate, and interact with content using AI-powered solutions.",
    cards: [
      {
        name: "AI agents & workflow automation",
        body: "Intelligent agents that streamline business processes, reduce manual effort, and enhance operational efficiency. Designed to autonomously handle repetitive tasks, answer queries, and assist in decision-making.",
      },
      {
        name: "Fine-tuning LLMs",
        body: "We specialize in fine-tuning LLaMA, GPT, and smaller language models to adapt to your specific business needs — content generation, knowledge retrieval, decision automation for customer support, content creation, and internal knowledge systems.",
      },
      {
        name: "RAG-based AI solutions",
        body: "Retrieval-Augmented Generation models that combine search and generative AI to deliver contextually relevant, accurate responses. Ideal for knowledge management, legal tech, customer support, and enterprise search.",
      },
    ],
  },
  {
    eyebrow: "Innovative solutions",
    heading: "Retrieval & search",
    intro:
      "Enhance information discovery and search efficiency with AI-powered retrieval systems.",
    cards: [
      {
        name: "End-to-end search engine design",
        body: "Custom AI-powered search engines that optimize indexing, ranking, and retrieval to deliver highly relevant results. Fast, scalable, and intelligent search experiences for users.",
      },
      {
        name: "Optimized AI-powered search",
        body: "Expertise in dense and sparse embeddings improves search ranking and result relevance — users find what they need faster and more accurately.",
      },
      {
        name: "Adaptive search optimization",
        body: "AI-driven search models that continuously learn from user behavior, refining ranking algorithms and recommendations in real-time for highly relevant, context-aware results.",
      },
    ],
  },
  {
    eyebrow: "Innovative solutions",
    heading: "Document processing",
    intro:
      "Automate document-based workflows and extract actionable insights using AI.",
    cards: [
      {
        name: "OCR & ICR for structured data extraction",
        body: "Optical Character Recognition (OCR) and Intelligent Character Recognition (ICR) solutions extract structured data from scanned documents, PDFs, and images — transforming unstructured information into usable data.",
      },
      {
        name: "AI-powered sensitive document detection",
        body: "AI models that automatically detect and classify sensitive documents, ensuring compliance with data security and privacy regulations.",
      },
    ],
  },
  {
    eyebrow: "Innovative solutions",
    heading: "Predictive AI",
    intro:
      "Anticipate trends, detect patterns, and drive informed decisions across industries. Predictive models that analyze vast datasets to uncover insights and optimize outcomes.",
    cards: [
      {
        name: "Risk & opportunity intelligence",
        body: "AI-driven models enhance decision-making by identifying risks, predicting trends, and optimizing resource allocation — financial viability, anomaly detection, demand forecasting, and more.",
      },
      {
        name: "Data-driven insights & automation",
        body: "AI that extracts key insights from structured and unstructured data to boost efficiency and innovation — from understanding consumer behavior to optimizing workflows and personalizing experiences.",
      },
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        {/* Page hero — 2-col with copy left, CpuArchitecture in a glassy
            white/teal-tinted card on the right. */}
        <section className="relative pt-36 md:pt-44 pb-16 md:pb-20 section-x overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,theme(colors.bg-warm)_0%,theme(colors.bg)_55%)]"
          />
          <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: copy */}
            <div className="lg:col-span-6">
              <Reveal>
                <div className="eyebrow">AI Solutions</div>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="display-xl mt-6">
                  Unlock the power of AI to drive{" "}
                  <span className="text-primary italic font-medium">
                    business transformation.
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-7 max-w-2xl text-[17px] md:text-[18px] leading-relaxed text-ink-muted">
                  The technical building blocks behind every Stratzi
                  deployment — generative AI, retrieval, document processing,
                  and predictive systems. Each capability designed to plug
                  into your existing stack, not replace it.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-9">
                  <Link href="/#cta" className="btn-primary">
                    Get in touch
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
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right: glassy white/teal-tinted container with the Company
                Brain animation. Two-layer treatment — soft teal wash behind +
                frosted glass card in front — gives the "modern, glassy" feel
                requested while staying on-brand. */}
            <Reveal delay={0.32} className="lg:col-span-6">
              <div className="relative">
                {/* Outer soft teal halo */}
                <div
                  aria-hidden
                  className="absolute -inset-8 rounded-[2.5rem] bg-primary-soft/25 blur-2xl"
                />
                {/* Glass card — bumped padding + aspect for more presence */}
                <div className="relative rounded-3xl border border-primary-edge/30 bg-white/55 backdrop-blur-xl p-6 md:p-9 shadow-[0_40px_100px_-50px_rgba(44,102,110,0.4)]">
                  {/* Window-chrome row for a modern UI vibe */}
                  <div className="flex items-center justify-between border-b border-primary-edge/20 pb-4 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary-soft/70" />
                      <div className="h-2 w-2 rounded-full bg-primary-soft/70" />
                      <div className="h-2 w-2 rounded-full bg-primary-edge" />
                    </div>
                    <div className="text-[10px] font-semibold tracking-[0.16em] uppercase text-primary/70">
                      Architecture · Live
                    </div>
                  </div>

                  {/* The animation itself — taller aspect (4/3 was 2/1)
                      so the branches have room to breathe */}
                  <div className="aspect-[4/3] w-full">
                    <CpuArchitecture />
                  </div>

                  {/* Quiet meta row underneath */}
                  <div className="mt-4 flex items-center justify-between text-[10px] font-semibold tracking-[0.16em] uppercase text-primary/70">
                    <span>18 data streams</span>
                    <span className="flex items-center gap-1.5">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inset-0 rounded-full bg-primary-edge animate-ping opacity-60" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                      </span>
                      Processing
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Categories — alternating bg for rhythm */}
        {categories.map((cat, i) => (
          <CategoryBlock key={cat.heading} category={cat} alt={i % 2 === 1} />
        ))}

        {/* CTA — same "Get in touch" form as home */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}

function CategoryBlock({
  category,
  alt,
}: {
  category: SolutionCategory;
  alt: boolean;
}) {
  return (
    <section
      className={`section-pad section-x ${
        alt ? "bg-bg-warm/40" : "bg-bg"
      }`}
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: category header (sticky-ish feel) */}
          <div className="lg:col-span-4">
            <Reveal>
              <div className="eyebrow">{category.eyebrow}</div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="headline-lg mt-5">{category.heading}</h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-4 text-[16px] leading-relaxed text-ink-muted">
                {category.intro}
              </p>
            </Reveal>
          </div>

          {/* Right: cards — wrapped in TiltCard so they share the home
              Pillars' tilt + spotlight interaction. Card size unchanged. */}
          <Stagger
            className="lg:col-span-8 flex flex-col gap-4"
            staggerChildren={0.08}
          >
            {category.cards.map((c) => (
              <StaggerItem key={c.name}>
                <TiltCard
                  tiltLimit={7}
                  scale={1.02}
                  effect="evade"
                  spotlightColor="rgba(176, 238, 237, 0.18)"
                  className="h-full rounded-2xl"
                >
                  <SolutionCardBlock card={c} />
                </TiltCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

function SolutionCardBlock({ card }: { card: SolutionCard }) {
  return (
    <article className="rounded-2xl border border-primary-edge/45 bg-surface p-7 md:p-8 flex items-start gap-5 h-full">
      {/* Tiny accent mark */}
      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
      <div className="flex-1">
        <h3 className="font-heading text-[20px] md:text-[22px] font-semibold leading-snug tracking-[-0.005em] text-ink">
          {card.name}
        </h3>
        <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink">
          {card.body}
        </p>
      </div>
    </article>
  );
}
