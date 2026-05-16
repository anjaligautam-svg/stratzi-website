"use client";

import { motion } from "framer-motion";
import { AgentThread } from "./AgentThread";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

export function Hero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 section-x overflow-hidden">
      {/* Soft background wash */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,theme(colors.bg-warm)_0%,theme(colors.bg)_55%)]"
      />

      <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: copy */}
        <div className="lg:col-span-7">
          <motion.div {...fadeUp} className="eyebrow">
            The AI-native Business OS
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.08 }}
            className="display-xl mt-6"
          >
            Your business should run on{" "}
            <span className="text-primary italic font-medium">
              intelligence,
            </span>
            <br className="hidden sm:block" /> not headcount.
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.16 }}
            className="mt-7 max-w-xl text-[17px] md:text-[18px] leading-relaxed text-ink-muted"
          >
            Stratzi builds the AI operations layer for SaaS-enabled MSMEs —{" "}
            <span className="text-ink font-medium">
              a company brain, agentic employees, and learning loops
            </span>{" "}
            that make your business smarter the longer it runs.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href="#cta" className="btn-primary">
              Book a discovery call
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
            </a>
            <a href="#proof" className="btn-ghost">
              See it in action
            </a>
          </motion.div>

          {/* Quiet proof strip */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.36 }}
            className="mt-14 md:mt-20 flex flex-wrap items-center gap-x-5 gap-y-3 text-[10.5px] font-semibold tracking-[0.18em] uppercase text-ink-subtle"
          >
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Live today
            </span>
            <span className="text-ink-faint">·</span>
            <span>My Policy Express</span>
            <span className="text-ink-faint">·</span>
            <span>Finonest</span>
          </motion.div>
        </div>

        {/* Right: agent thread */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.32 }}
          className="lg:col-span-5"
        >
          <AgentThread />
        </motion.div>
      </div>
    </section>
  );
}
