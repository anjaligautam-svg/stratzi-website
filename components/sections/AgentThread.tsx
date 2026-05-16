"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * AgentThread — the hero's signature visual.
 * An auto-playing thread between a Human Agent (HA) and the Stratzi Agent,
 * showing the insurance-broking quotation flow (Scenario A).
 * Loops with a 3s pause between cycles.
 */

type Role = "ha" | "agent" | "system";

type Step =
  | { role: Role; kind: "text"; text: string }
  | { role: Role; kind: "upload"; label: string }
  | { role: "agent"; kind: "typing"; text: string }
  | { role: "agent"; kind: "quotes" }
  | { role: "agent"; kind: "confirm"; text: string };

const script: Step[] = [
  {
    role: "ha",
    kind: "text",
    text: "Got a potential customer — Rakesh Kumar.",
  },
  {
    role: "agent",
    kind: "text",
    text: "Got it. Share his age, vehicle, and pin code.",
  },
  {
    role: "ha",
    kind: "upload",
    label: "rakesh_details.pdf",
  },
  {
    role: "agent",
    kind: "typing",
    text: "Fetching quotations from 4 insurers…",
  },
  {
    role: "agent",
    kind: "quotes",
  },
  {
    role: "ha",
    kind: "text",
    text: "Go with ICICI.",
  },
  {
    role: "agent",
    kind: "confirm",
    text: "Payment link sent to Rakesh on WhatsApp.",
  },
];

const quotes = [
  { insurer: "ICICI Lombard", price: "₹8,400", best: true },
  { insurer: "HDFC Ergo", price: "₹9,100", best: false },
  { insurer: "Tata AIG", price: "₹8,750", best: false },
];

export function AgentThread() {
  const [visibleCount, setVisibleCount] = useState(0);

  // Auto-play the script then loop
  useEffect(() => {
    if (visibleCount >= script.length) {
      const restart = setTimeout(() => setVisibleCount(0), 3500);
      return () => clearTimeout(restart);
    }
    const next = setTimeout(() => {
      setVisibleCount((c) => c + 1);
    }, visibleCount === 0 ? 600 : 1300);
    return () => clearTimeout(next);
  }, [visibleCount]);

  return (
    <div className="relative">
      {/* Soft beige wash behind the card */}
      <div
        aria-hidden
        className="absolute -inset-8 rounded-[2rem] bg-bg-warm/70"
      />

      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative rounded-2xl border border-line-warm bg-surface p-5 md:p-6 shadow-[0_24px_60px_-30px_rgba(63,41,29,0.25)]"
      >
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-line pb-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-taupe-soft" />
            <div className="h-2 w-2 rounded-full bg-taupe-soft" />
            <div className="h-2 w-2 rounded-full bg-primary-edge" />
          </div>
          <div className="text-[10px] font-semibold tracking-[0.16em] uppercase text-ink-subtle">
            Stratzi Agent · Live
          </div>
        </div>

        {/* Messages */}
        <div className="flex flex-col gap-3 min-h-[320px] md:min-h-[360px]">
          <AnimatePresence>
            {script.slice(0, visibleCount).map((step, i) => (
              <motion.div
                key={`${i}-${visibleCount}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={[
                  "flex items-start gap-3",
                  step.role === "ha" ? "flex-row-reverse" : "",
                ].join(" ")}
              >
                <Avatar role={step.role} />
                <Bubble step={step} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Tiny meta strip under card */}
      <div className="relative mt-4 flex items-center justify-between px-1 text-[10px] font-semibold tracking-[0.16em] uppercase text-ink-subtle">
        <span>Insurance broking workflow</span>
        <span className="flex items-center gap-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 rounded-full bg-primary-edge animate-ping opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          Running
        </span>
      </div>
    </div>
  );
}

function Avatar({ role }: { role: Role }) {
  if (role === "agent") {
    return (
      <div className="flex-shrink-0 h-7 w-7 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-semibold font-heading">
        S
      </div>
    );
  }
  if (role === "ha") {
    return (
      <div className="flex-shrink-0 h-7 w-7 rounded-full bg-taupe-cream text-brown flex items-center justify-center text-[10px] font-semibold font-heading">
        HA
      </div>
    );
  }
  return <div className="flex-shrink-0 h-7 w-7" />;
}

function Bubble({ step }: { step: Step }) {
  const base =
    "max-w-[78%] rounded-2xl px-4 py-2.5 text-[13.5px] leading-relaxed";

  if (step.kind === "text") {
    return (
      <div
        className={[
          base,
          step.role === "ha"
            ? "bg-taupe-cream text-brown rounded-tr-md"
            : "bg-surface-muted text-ink rounded-tl-md",
        ].join(" ")}
      >
        {step.text}
      </div>
    );
  }

  if (step.kind === "upload") {
    return (
      <div
        className={[
          base,
          "bg-taupe-cream/80 text-brown rounded-tr-md flex items-center gap-2.5",
        ].join(" ")}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-70"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
        </svg>
        <span className="font-medium">{step.label}</span>
      </div>
    );
  }

  if (step.kind === "typing") {
    return (
      <div
        className={[
          base,
          "bg-surface-muted text-ink-muted rounded-tl-md flex items-center gap-3",
        ].join(" ")}
      >
        <span className="text-[13px]">{step.text}</span>
        <span className="inline-flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-primary"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                delay: i * 0.18,
                ease: "easeInOut",
              }}
            />
          ))}
        </span>
      </div>
    );
  }

  if (step.kind === "quotes") {
    return (
      <div className="max-w-full flex flex-col gap-2">
        <div className="text-[11px] font-semibold tracking-[0.12em] uppercase text-ink-subtle">
          Best matches
        </div>
        <div className="flex flex-col gap-1.5">
          {quotes.map((q, i) => (
            <motion.div
              key={q.insurer}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 * i + 0.1, duration: 0.4 }}
              className={[
                "flex items-center justify-between gap-4 rounded-lg border px-3 py-2",
                q.best
                  ? "border-primary-edge bg-primary-soft/30"
                  : "border-line bg-surface",
              ].join(" ")}
            >
              <span className="text-[13px] font-medium text-ink">
                {q.insurer}
              </span>
              <span className="font-heading text-[13.5px] font-semibold text-ink">
                {q.price}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // confirm
  return (
    <div
      className={[
        base,
        "bg-primary text-white rounded-tl-md flex items-center gap-2",
      ].join(" ")}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <span>{step.text}</span>
    </div>
  );
}
