"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";

// Every internal route here uses Next's <Link>, NOT <a>. With basePath set
// for GH Pages, <Link> auto-prepends `/stratzi-website` so clicks land on
// the right URL. Plain <a href="/solutions"> would go to the domain root.

const navLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Case studies", href: "/case-studies" },
  { label: "Careers", href: "/careers" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Close mobile drawer on viewport resize past the md breakpoint.
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 border-b border-line/70 backdrop-blur-xl backdrop-saturate-150"
      style={{
        // Light "frosted glass" bar — tinted with the page background
        // (#F8FAF9) at ~80-90% alpha so heavy backdrop-blur reads as premium
        // glass while keeping a faint vertical gradient for depth.
        background:
          "linear-gradient(180deg, rgba(248, 250, 249, 0.80) 0%, rgba(248, 250, 249, 0.92) 100%)",
      }}
    >
      <div className="section-x mx-auto flex h-16 max-w-[1440px] items-center justify-between md:h-20">
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
          {/* Get-in-touch CTA — teal pill for contrast on the light glass bar */}
          <Link
            href="/#cta"
            className="inline-flex items-center gap-2 h-10 rounded-full bg-primary text-white text-[13px] font-semibold px-5 hover:bg-primary-hover transition-colors shadow-[0_4px_14px_-6px_rgba(44,102,110,0.45)]"
          >
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

      {/* Mobile drawer — light frosted continuation of the bar. */}
      {open && (
        <div
          className="md:hidden border-t border-line"
          style={{
            background:
              "linear-gradient(180deg, rgba(248, 250, 249, 0.97) 0%, rgba(241, 236, 228, 0.98) 100%)",
          }}
        >
          <div className="section-x py-4 flex flex-col">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[17px] font-medium text-ink py-3.5 border-b border-line last:border-b-0 hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#cta"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-primary text-white text-[14px] font-semibold w-full mt-4 py-3.5 hover:bg-primary-hover transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
