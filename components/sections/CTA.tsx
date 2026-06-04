"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "../motion/Reveal";
import { WebGLShader } from "@/components/ui/web-gl-shader";

export function CTA() {
  // Submission flow:
  //  - On submit we set `submitted = true` and swap the form for a success
  //    card. Currently the actual email-send is a stub — wire to a real
  //    handler (Formspree, Resend, /api route, etc.) before launch.
  //  - "Send another" resets state so the form reappears.
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: send form data to hiring@stratzi.ai via backend handler.
    setSubmitted(true);
  };

  return (
    <section
      id="cta"
      className="relative isolate section-pad section-x text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0f3a42 0%, #0a2a30 55%, #061d22 100%)",
      }}
    >
      {/* Bottom-anchored WebGL wave shader. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[280px] md:h-[360px] z-0 [mask-image:linear-gradient(to_bottom,transparent_0%,black_55%,black_100%)]"
      >
        <WebGLShader intensity={0.45} speed={0.7} />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
        {/* Left: copy */}
        <div>
          <Reveal>
            <div className="eyebrow eyebrow-on-dark">Get in touch</div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="headline-lg mt-5 text-white">
              See what this looks like for{" "}
              <span className="text-primary-soft italic font-medium">
                your business.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-white/80">
              30 minutes. We&apos;ll walk through what your operations look
              like today and show you exactly where automation makes sense.
              No obligation.
            </p>
          </Reveal>
        </div>

        {/* Right: form ↔ success state swap. AnimatePresence handles the
            crossfade so the layout never jumps. Both states share the same
            frosted-glass shell so the section feels visually stable. */}
        <Reveal delay={0.16}>
          <AnimatePresence mode="wait" initial={false}>
            {!submitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8, transition: { duration: 0.25 } }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-xl p-6 md:p-9 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)]"
              >
                <Field label="Your name" type="text" placeholder="Full name" />
                <Field
                  label="Company"
                  type="text"
                  placeholder="Company name"
                  className="mt-4"
                />
                <Field
                  label="Email"
                  type="email"
                  placeholder="work@company.com"
                  className="mt-4"
                />
                <Field
                  label="Any specific requirements in mind? (optional)"
                  type="text"
                  placeholder="Share anything you'd like us to know"
                  className="mt-4"
                />

                <button
                  type="submit"
                  className="btn-primary mt-7 w-full justify-center text-[13px] py-4"
                >
                  Book a conversation
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
                </button>
              </motion.form>
            ) : (
              <SuccessCard key="success" onReset={() => setSubmitted(false)} />
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}

/**
 * SuccessCard — confirmation state shown after the form is submitted.
 * Designed to feel like a calm, premium acknowledgement: ambient teal glow,
 * animated checkmark, headline, body, and a quiet "Send another" reset
 * link in case the user wants to submit again.
 */
function SuccessCard({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.99 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-2xl border border-primary-soft/35 bg-white/[0.04] backdrop-blur-xl p-8 md:p-12 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)] flex flex-col items-center text-center overflow-hidden"
    >
      {/* Ambient teal halo behind the checkmark */}
      <motion.div
        aria-hidden
        className="absolute -top-16 left-1/2 -translate-x-1/2 h-48 w-48 rounded-full bg-primary-soft/20 blur-3xl pointer-events-none"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated check badge */}
      <motion.div
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 0.1,
          type: "spring",
          stiffness: 220,
          damping: 18,
        }}
        className="relative h-16 w-16 rounded-full bg-primary-soft/20 border border-primary-soft/45 flex items-center justify-center"
      >
        {/* Pulsing outer ring */}
        <motion.div
          aria-hidden
          className="absolute inset-0 rounded-full border border-primary-soft/40"
          animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
        />

        <motion.svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary-soft relative"
        >
          {/* Animated stroke draw — feels intentional, not just instant */}
          <motion.polyline
            points="20 6 9 17 4 12"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { delay: 0.25, duration: 0.45, ease: [0.16, 1, 0.3, 1] },
              opacity: { delay: 0.25, duration: 0.15 },
            }}
          />
        </motion.svg>
      </motion.div>

      {/* Status pill */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.4 }}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary-soft/10 border border-primary-soft/25 px-3 py-1 text-[10.5px] font-semibold tracking-[0.18em] uppercase text-primary-soft"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inset-0 rounded-full bg-primary-soft animate-ping opacity-70" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary-soft" />
        </span>
        Request received
      </motion.div>

      {/* Headline */}
      <motion.h3
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.42, duration: 0.45 }}
        className="mt-4 font-heading text-[24px] md:text-[30px] font-semibold leading-tight tracking-[-0.01em] text-white"
      >
        We&apos;ve got your request.
      </motion.h3>

      {/* Body */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.45 }}
        className="mt-3 max-w-sm text-[14px] leading-relaxed text-white/75"
      >
        Our team will get in touch with you within 24 hours — usually
        sooner. Keep an eye on your inbox.
      </motion.p>

      {/* Recipient line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="mt-6 flex items-center gap-2 text-[11px] text-white/55"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
        Sent to{" "}
        <span className="text-primary-soft">hiring@stratzi.ai</span>
      </motion.div>

      {/* Reset link */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.4 }}
        onClick={onReset}
        className="mt-8 group inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.04em] text-white/70 hover:text-white transition-colors"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform group-hover:-rotate-45"
        >
          <polyline points="9 14 4 9 9 4" />
          <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
        </svg>
        Send another request
      </motion.button>
    </motion.div>
  );
}

function Field({
  label,
  type,
  placeholder,
  className = "",
}: {
  label: string;
  type: string;
  placeholder: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-[10.5px] font-semibold tracking-[0.16em] uppercase text-white/65 mb-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-white/[0.04] border border-white/15 text-white text-[14px] px-4 py-3 rounded-lg outline-none transition-colors focus:border-primary-soft focus:bg-white/[0.07] placeholder:text-white/35"
      />
    </div>
  );
}
