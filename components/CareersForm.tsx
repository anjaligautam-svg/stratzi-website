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
 * Resend, /api route, etc.) before launch.
 *
 * NOTE: The "Role applying for" dropdown options must stay in sync with the
 * open roles listed on the Careers page. When roles change, update both.
 */

const EXPERIENCE_OPTIONS = [
  "0–1 yr",
  "1–3 yrs",
  "3–5 yrs",
  "5–8 yrs",
  "8+ yrs",
];

const ROLE_OPTIONS = [
  "AI Engineer",
  "Database Administrator",
  "Full-stack Developer",
];

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

      <SelectField
        label="Work experience"
        options={EXPERIENCE_OPTIONS}
        placeholder="Select experience"
        className="mt-4"
      />

      <SelectField
        label="Role applying for"
        options={ROLE_OPTIONS}
        placeholder="Choose a role"
        className="mt-4"
      />

      <Field
        label="Current CTC (per annum)"
        type="text"
        placeholder="e.g. ₹8 LPA"
        className="mt-4"
      />

      <Field
        label="Expected CTC (per annum)"
        type="text"
        placeholder="e.g. ₹14 LPA"
        className="mt-4"
      />

      <FileField
        label="Resume"
        accept=".pdf,.doc,.docx"
        helper="PDF or DOC"
        className="mt-4"
      />

      <Field
        label="GitHub / Portfolio link"
        type="url"
        placeholder="https://..."
        className="mt-4"
      />

      <div className="mt-4">
        <label className="block text-[10.5px] font-semibold tracking-[0.16em] uppercase text-white/65 mb-2">
          Why Stratzi? (max 200 words)
        </label>
        <textarea
          rows={4}
          placeholder="Tell us what drew you to this role and what you'd bring to the team…"
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

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-[10.5px] font-semibold tracking-[0.16em] uppercase text-white/65 mb-2">
      {children}
    </label>
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
      <FieldLabel>{label}</FieldLabel>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-white/[0.04] border border-white/15 text-white text-[14px] px-4 py-3 rounded-lg outline-none transition-colors focus:border-primary-soft focus:bg-white/[0.07] placeholder:text-white/35"
      />
    </div>
  );
}

function SelectField({
  label,
  options,
  placeholder,
  className = "",
}: {
  label: string;
  options: string[];
  placeholder: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <FieldLabel>{label}</FieldLabel>
      <div className="relative">
        <select
          defaultValue=""
          className="w-full appearance-none bg-white/[0.04] border border-white/15 text-white text-[14px] px-4 py-3 pr-10 rounded-lg outline-none transition-colors focus:border-primary-soft focus:bg-white/[0.07] cursor-pointer"
        >
          <option value="" disabled className="text-white/40 bg-[#0f3a42]">
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="text-ink bg-white">
              {opt}
            </option>
          ))}
        </select>
        {/* Custom chevron — appearance:none hides the native one */}
        <svg
          aria-hidden
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/55"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </div>
  );
}

function FileField({
  label,
  accept,
  helper,
  className = "",
}: {
  label: string;
  accept: string;
  helper?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <FieldLabel>
        {label}
        {helper && (
          <span className="ml-2 text-white/40 font-normal tracking-normal normal-case">
            ({helper})
          </span>
        )}
      </FieldLabel>
      <label
        className="flex items-center justify-between w-full bg-white/[0.04] border border-white/15 text-white text-[14px] px-4 py-3 rounded-lg cursor-pointer transition-colors hover:border-primary-soft/50 hover:bg-white/[0.07]"
      >
        <span className="text-white/55">Choose a file…</span>
        <span className="inline-flex items-center gap-2 text-primary-soft text-[12px] font-semibold">
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
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          Upload
        </span>
        <input type="file" accept={accept} className="hidden" />
      </label>
    </div>
  );
}
