import Link from "next/link";

/**
 * Stratzi.AI wordmark.
 * Replaces the previous text-only "STRATZI" mark with the brand wordmark:
 * - "Stratzi.AI" in rounded sans (Quicksand) — colored with --color-primary (deep teal)
 * - A small cursor / AI-pointer glyph sitting next to "AI" — colored with --color-brown-soft (taupe brown)
 *
 * Sizes are driven by the `size` prop so we can use the same component
 * for the navbar (sm) and footer (md) at different scales.
 */

type LogoSize = "sm" | "md" | "lg";

const sizeMap: Record<LogoSize, { text: string; icon: number; gap: string }> = {
  sm: { text: "text-[20px]", icon: 13, gap: "gap-[3px]" },
  md: { text: "text-[24px]", icon: 16, gap: "gap-[4px]" },
  lg: { text: "text-[34px]", icon: 22, gap: "gap-[6px]" },
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
  const dims = sizeMap[size];

  const inner = (
    <span
      className={`inline-flex items-end ${dims.gap} font-logo font-semibold leading-none tracking-[-0.01em] text-primary ${dims.text} ${className}`}
    >
      <span>Stratzi.AI</span>
      <CursorGlyph size={dims.icon} />
    </span>
  );

  if (href === null) return inner;

  return (
    <Link href={href} aria-label="Stratzi.AI — home" className="inline-flex">
      {inner}
    </Link>
  );
}

/**
 * The cursor / AI-pointer glyph next to "AI".
 * Stylized like the click cursor on the original logo, but recolored
 * to taupe-brown to fit the Stratzi palette (no light-blue cyan).
 */
function CursorGlyph({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="none"
      aria-hidden
      className="text-brown-soft -translate-y-[1px]"
    >
      {/* Cursor body — solid taupe-brown */}
      <path
        d="M5 3 L19 12 L13 13.5 L10 21 L5 3 Z"
        fill="currentColor"
      />
    </svg>
  );
}
