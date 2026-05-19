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
      className="fixed top-0 inset-x-0 z-50 border-b border-primary-edge/25 backdrop-blur-sm"
      style={{
        // Solid teal with a subtle vertical gradient (lighter top → deeper
        // bottom) and just a hint of backdrop-blur so content scrolling
        // underneath gets a whisper of softening without the navbar feeling
        // transparent.
        background:
          "linear-gradient(180deg, rgba(44, 102, 110, 0.95) 0%, rgba(31, 81, 89, 0.97) 100%)",
      }}
    >
      <div className="section-x mx-auto flex h-16 max-w-[1440px] items-center justify-between md:h-20">
        {/* Logo — its own light plate sits on the teal bar as a clean badge */}
        <Logo size="sm" />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-white/85 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
          {/* Get-in-touch CTA — explicit h-10 to match the logo plate */}
          <Link
            href="/#cta"
            className="inline-flex items-center gap-2 h-10 rounded-full bg-white text-primary text-[13px] font-semibold px-5 hover:bg-primary-soft hover:text-primary transition-colors shadow-[0_4px_14px_-4px_rgba(0,0,0,0.25)]"
          >
            Get in touch
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md"
        >
          <span className="relative block h-3 w-4">
            <span
              className={[
                "absolute left-0 top-0 h-px w-4 bg-white transition-transform",
                open ? "translate-y-[6px] rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-[6px] h-px w-4 bg-white transition-opacity",
                open ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-[12px] h-px w-4 bg-white transition-transform",
                open ? "-translate-y-[6px] -rotate-45" : "",
              ].join(" ")}
            />
          </span>
        </button>
      </div>

      {/* Mobile drawer — drops out of the teal bar as a continuation of the
          same color story (slightly darker so it's distinct from the bar). */}
      {open && (
        <div
          className="md:hidden border-t border-white/15"
          style={{
            background:
              "linear-gradient(180deg, rgba(31, 81, 89, 0.96) 0%, rgba(15, 58, 66, 0.98) 100%)",
          }}
        >
          <div className="section-x py-4 flex flex-col">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[17px] font-medium text-white py-3.5 border-b border-white/15 last:border-b-0 hover:text-primary-soft transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#cta"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-white text-primary text-[14px] font-semibold w-full mt-4 py-3.5 hover:bg-primary-soft transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
