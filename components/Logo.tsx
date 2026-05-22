import Image from "next/image";
import Link from "next/link";

/**
 * Stratzi.AI logo.
 *
 * Uses the brand PNG (`public/stratzi-logo.png`) — the teal "Stratzi.AI"
 * wordmark with a bronze cursor accent on a TRANSPARENT background. Because
 * it's transparent, the teal wordmark sits directly on whatever surface it's
 * placed on (the light glass navbar, the footer, etc.).
 *
 * Intrinsic artwork size: 2097 × 478 → aspect ratio ≈ 4.39:1.
 * The `size` prop maps to a responsive Tailwind height class; width is
 * `auto` so that 4.39:1 ratio is always preserved (never distorted).
 */

type LogoSize = "sm" | "md" | "lg";

const sizeClass: Record<LogoSize, string> = {
  // Navbar — 28px tall on mobile (≈123px wide), 36px on desktop (≈158px wide).
  // Width is auto so the 4.39:1 aspect ratio is never distorted.
  sm: "h-7 md:h-9",
  // Footer + general — clear secondary presence
  md: "h-10 md:h-12",
  // Marketing / standalone hero treatments
  lg: "h-14 md:h-[68px]",
};

export function Logo({
  size = "sm",
  href = "/",
  className = "",
}: {
  size?: LogoSize;
  href?: string | null;
  className?: string;
}) {
  const inner = (
    <Image
      src="/stratzi-logo.png"
      alt="Stratzi.AI"
      width={2097}
      height={478}
      priority
      className={`block w-auto ${sizeClass[size]} ${className}`}
    />
  );

  if (href === null) return inner;

  return (
    <Link href={href} aria-label="Stratzi.AI — home" className="inline-flex">
      {inner}
    </Link>
  );
}
