"use client";

import { Reveal } from "../motion/Reveal";
import { WebGLShader } from "@/components/ui/web-gl-shader";

export function CTA() {
  return (
    <section
      id="cta"
      className="relative isolate section-pad section-x text-white overflow-hidden"
      style={{
        // Same premium dark-teal gradient as the How It Works section so
        // the two dark zones read as one continuous "engine" of the site.
        background:
          "linear-gradient(180deg, #0f3a42 0%, #0a2a30 55%, #061d22 100%)",
      }}
    >
      {/* Bottom-anchored WebGL wave shader.
          - Lives in the lower ~360px so it doesn't fight the form/headline.
          - Top edge fades from transparent to opaque via mask-image, so the
            waves appear to "emerge" out of the dark void.
          - pointer-events-none so it never blocks form interaction. */}
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
              See what the Business OS looks like for{" "}
              <span className="text-primary-soft italic font-medium">
                your business.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-white/80">
              30 minutes. We map your operations, identify what agents can own,
              and show you exactly what the Stratzi OS would look like on your
              stack. No obligation.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] text-white/70">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-soft" />
                We respond within 24 hours
              </span>
              <span className="text-white/30 hidden sm:inline">·</span>
              <span>No sales pressure</span>
            </div>
          </Reveal>
        </div>

        {/* Right: form — frosted dark-mode card so it reads cleanly over the
            gradient + emerging waves below. */}
        <Reveal delay={0.16}>
          <form
            onSubmit={(e) => e.preventDefault()}
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
              label="What do you want to automate? (optional)"
              type="text"
              placeholder="Brief description"
              className="mt-4"
            />

            <button
              type="submit"
              className="btn-primary mt-7 w-full justify-center text-[13px] py-4"
            >
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
            </button>
          </form>
        </Reveal>
      </div>
    </section>
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
