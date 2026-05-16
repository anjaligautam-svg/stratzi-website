export function Footer() {
  return (
    <footer className="section-x border-t border-line bg-bg py-10">
      <div className="mx-auto max-w-[1440px] flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div className="font-heading text-[15px] font-semibold tracking-[0.18em] text-ink uppercase">
          STR<span className="text-primary">A</span>TZI
        </div>
        <div className="text-[11px] tracking-[0.12em] uppercase text-ink-subtle">
          The Business OS for MSMEs · India · 2026
        </div>
        <a
          href="mailto:hello@stratzi.ai"
          className="text-[13px] font-medium text-ink hover:text-primary transition-colors"
        >
          hello@stratzi.ai
        </a>
      </div>
    </footer>
  );
}
