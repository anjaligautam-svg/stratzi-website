"use client";

import { cn } from "@/lib/utils";
import React, { type ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

/**
 * AuroraBackground — soft animated wave behind hero content.
 *
 * Adapted from the original aceternity component:
 * - Strips dark-mode variants (we ship light-only for now).
 * - Strips the `invert` filter and original blue/indigo palette.
 * - Uses Stratzi tokens (primary teal, primary-edge, primary-soft, taupe-cream,
 *   bg-warm) so the wave reads as brand, not generic.
 * - Tuned opacity down to ~35% so the hero copy and agent thread stay readable.
 * - Removes built-in flex centering and forced 100vh so callers control layout.
 */
export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-bg text-ink",
        className
      )}
      {...props}
    >
      {/* Aurora layer — purely decorative, behind content via z-0 */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div
          className={cn(
            // Soft beige stripe pattern (the "wash")
            "[--soft-gradient:repeating-linear-gradient(100deg,var(--color-bg)_0%,var(--color-bg)_7%,transparent_10%,transparent_12%,var(--color-bg)_16%)]",
            // Brand-colored aurora stripes (teal → cream)
            "[--aurora:repeating-linear-gradient(100deg,var(--color-primary)_10%,var(--color-primary-edge)_15%,var(--color-primary-soft)_20%,var(--color-taupe-cream)_25%,var(--color-primary)_30%)]",
            // Stack the two backgrounds
            "[background-image:var(--soft-gradient),var(--aurora)]",
            "[background-size:300%,_200%]",
            "[background-position:50%_50%,50%_50%]",
            "filter blur-[10px]",
            // Pseudo-element drives the animation (decoupled from the base layer
            // so the base can hold position while ::after drifts)
            "after:content-[''] after:absolute after:inset-0",
            "after:[background-image:var(--soft-gradient),var(--aurora)]",
            "after:[background-size:200%,_100%]",
            "after:animate-aurora after:[background-attachment:fixed]",
            "after:mix-blend-multiply",
            "pointer-events-none absolute -inset-[10px] opacity-35 will-change-transform",
            // Mask the aurora into the top-right corner so it's a soft glow,
            // not a wall of color across the whole hero.
            showRadialGradient &&
              "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]"
          )}
        />
      </div>

      {/* Foreground content sits above aurora via z-10 */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
