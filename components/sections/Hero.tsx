"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AgentThread } from "./AgentThread";
import { AuroraBackground } from "@/components/ui/aurora-background";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

export function Hero() {
  return (
    <AuroraBackground className="pt-24 md:pt-40 pb-10 md:pb-12 section-x">
      <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
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
            Automate your business operations with{" "}
            <span className="text-primary italic font-medium">
              intelligence that grows
            </span>
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
            <Link href="/#cta" className="btn-primary">
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
            </Link>
            <Link href="/case-studies" className="btn-glass">
              See it in action
            </Link>
          </motion.div>

        </div>

        {/* Right: agent thread */}
        <div className="lg:col-span-5 reveal reveal-d4">
          <AgentThread />
        </div>
      </div>
    </AuroraBackground>
  );
}
