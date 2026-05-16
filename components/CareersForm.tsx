"use client";

/**
 * Application form for the Careers page.
 * Lives in its own client component because the parent page is server-rendered
 * (server components cannot receive function props like onSubmit).
 *
 * Styled for the dark-teal gradient background of the apply section —
 * frosted glass card, white text, light teal accents.
 *
 * Submission is currently a no-op — wire to a real handler (Formspree,
 * Resend, /api route, etc.) before launch. See DECISIONS.md.
 */
export function CareersForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-xl p-7 md:p-9 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)]"
    >
      <Field label="Full name" type="text" placeholder="Full name" />
      <Field
        label="Email"
        type="email"
        placeholder="you@example.com"
        className="mt-4"
      />
      <Field
        label="Portfolio / GitHub link"
        type="url"
        placeholder="https://..."
        className="mt-4"
      />
      <Field
        label="Resume link"
        type="url"
        placeholder="https://..."
        className="mt-4"
      />

      <div className="mt-4">
        <label className="block text-[10.5px] font-semibold tracking-[0.16em] uppercase text-white/65 mb-2">
          Why join us? (max 200 words)
        </label>
        <textarea
          rows={4}
          placeholder="Tell us a bit about yourself…"
          className="w-full bg-white/[0.04] border border-white/15 text-white text-[14px] px-4 py-3 rounded-lg outline-none transition-colors focus:border-primary-soft focus:bg-white/[0.07] placeholder:text-white/35 resize-none"
        />
      </div>

      <button
        type="submit"
        className="btn-primary mt-7 w-full justify-center text-[13px] py-4"
      >
        Apply now
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
