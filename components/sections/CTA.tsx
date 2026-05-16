"use client";

import { Reveal } from "../motion/Reveal";

export function CTA() {
  return (
    <section
      id="cta"
      className="section-pad section-x bg-bg-warm/60 relative overflow-hidden"
    >
      <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left: copy */}
        <div>
          <Reveal>
            <div className="eyebrow">Get in touch</div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="headline-lg mt-5">
              See what the Business OS looks like for{" "}
              <span className="text-primary italic font-medium">
                your business.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-ink-muted">
              30 minutes. We map your operations, identify what agents can own,
              and show you exactly what the Stratzi OS would look like on your
              stack. No obligation.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex items-center gap-3 text-[12px] text-ink-subtle">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                We respond within 24 hours
              </span>
              <span className="text-ink-faint">·</span>
              <span>No sales pressure</span>
            </div>
          </Reveal>
        </div>

        {/* Right: form */}
        <Reveal delay={0.16}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-line bg-surface p-7 md:p-9 shadow-[0_24px_60px_-40px_rgba(63,41,29,0.25)]"
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
      <label className="block text-[10.5px] font-semibold tracking-[0.16em] uppercase text-ink-subtle mb-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-bg border border-line text-ink text-[14px] px-4 py-3 rounded-lg outline-none transition-colors focus:border-primary focus:bg-surface placeholder:text-ink-faint"
      />
    </div>
  );
}
