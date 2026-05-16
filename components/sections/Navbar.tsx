"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";

// IMPORTANT: every internal route here uses Next's <Link>, NOT <a>.
// Reason — when the site is deployed under a basePath (e.g. GitHub Pages
// at /stratzi-website), `<Link>` automatically prepends the prefix so the
// browser navigates to /stratzi-website/solutions. Plain `<a href="/solutions">`
// goes to the root /solutions → 404.

const navLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Case studies", href: "/case-studies" },
  { label: "Careers", href: "/careers" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 transition-[background,border,backdrop-filter] duration-300",
        scrolled
          ? "bg-bg/80 border-b border-line backdrop-blur-md"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <div className="section-x mx-auto flex h-16 max-w-[1440px] items-center justify-between md:h-[72px]">
        {/* Logo */}
        <Logo size="sm" />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-ink-muted hover:text-primary transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/#cta" className="btn-primary text-[12.5px] px-5 py-2.5">
            Get in touch
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface"
        >
          <span className="relative block h-3 w-4">
            <span
              className={[
                "absolute left-0 top-0 h-px w-4 bg-ink transition-transform",
                open ? "translate-y-[6px] rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-[6px] h-px w-4 bg-ink transition-opacity",
                open ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-[12px] h-px w-4 bg-ink transition-transform",
                open ? "-translate-y-[6px] -rotate-45" : "",
              ].join(" ")}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-line bg-bg">
          <div className="section-x py-6 flex flex-col gap-5">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#cta"
              onClick={() => setOpen(false)}
              className="btn-primary w-full justify-center"
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
