"use client";

/**
 * Application form for the Careers page.
 * Lives in its own client component because the parent page is server-rendered
 * (server components cannot receive function props like onSubmit).
 *
 * Submission is currently a no-op — wire to a real handler (Formspree,
 * Resend, /api route, etc.) before launch. See DECISIONS.md.
 */
export function CareersForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="rounded-2xl border border-line bg-surface p-7 md:p-9 shadow-[0_24px_60px_-40px_rgba(63,41,29,0.25)]"
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
        <label className="block text-[10.5px] font-semibold tracking-[0.16em] uppercase text-ink-subtle mb-2">
          Why join us? (max 200 words)
        </label>
        <textarea
          rows={4}
          placeholder="Tell us a bit about yourself…"
          className="w-full bg-bg border border-line text-ink text-[14px] px-4 py-3 rounded-lg outline-none transition-colors focus:border-primary focus:bg-surface placeholder:text-ink-faint resize-none"
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
