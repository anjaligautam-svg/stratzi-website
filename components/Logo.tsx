import Image from "next/image";
import Link from "next/link";

/**
 * Stratzi.AI logo.
 *
 * Uses the brand PNG (`public/stratzi-logo.png`) which already includes the
 * teal "Stratzi.AI" wordmark + brown cursor element on a light cream plate.
 * Because the plate is baked into the artwork, the logo sits comfortably
 * on any background — including the new teal navbar — without needing a
 * separate wrapper.
 *
 * The `size` prop just maps to a responsive Tailwind height class; the
 * width is set to `auto` so the natural 3.28:1 aspect ratio is preserved.
 */

type LogoSize = "sm" | "md" | "lg";

const sizeClass: Record<LogoSize, string> = {
  // Navbar — small on phones (compact), larger on desktop for presence
  sm: "h-9 md:h-14",
  // Footer + general — a clearer secondary presence
  md: "h-12 md:h-16",
  // Marketing / standalone hero treatments
  lg: "h-16 md:h-20",
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
      width={3525}
      height={1075}
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
