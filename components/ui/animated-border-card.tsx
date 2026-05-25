"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * AnimatedBorderCard — wrapper that overlays a card with four traveling
 * light beams (top, right, bottom, left), corner glow spots, and a soft
 * pulsing card glow.
 *
 * Pattern adapted from a sign-in-card design and re-themed to the Stratzi
 * brand: light teal (`primary-soft`) beams + spots instead of generic
 * white. Use it on cards that sit on the dark-teal sections so the beams
 * read as luminous traces along the edges.
 *
 * Children are responsible for their own card styling (background, border,
 * radius, padding). This wrapper just adds the decorative motion layer
 * positioned to fill the parent's footprint.
 */

export function AnimatedBorderCard({
  children,
  className,
  /** Base color of the moving light beams. Defaults to brand primary-soft. */
  beamColor = "rgba(176, 238, 237, 0.85)",
  /** Color of the four corner glow dots. */
  cornerColor = "rgba(176, 238, 237, 0.55)",
  /** Per-card delay offset so multiple cards don't pulse in sync. */
  staggerDelay = 0,
}: {
  children: ReactNode;
  className?: string;
  beamColor?: string;
  cornerColor?: string;
  staggerDelay?: number;
}) {
  return (
    <div className={cn("relative group", className)}>
      {/* Slow ambient glow — only fully visible on hover */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        animate={{
          boxShadow: [
            "0 0 10px 2px rgba(176, 238, 237, 0.04)",
            "0 0 18px 6px rgba(176, 238, 237, 0.10)",
            "0 0 10px 2px rgba(176, 238, 237, 0.04)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "mirror",
          delay: staggerDelay,
        }}
      />

      {/* Traveling light beam layer — clipped to the card's rounded box */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-[1px] rounded-2xl overflow-hidden"
      >
        {/* Top beam — slides left → right */}
        <motion.div
          className="absolute top-0 left-0 h-[2px] w-[50%]"
          style={{
            background: `linear-gradient(to right, transparent, ${beamColor}, transparent)`,
          }}
          initial={{ filter: "blur(2px)" }}
          animate={{
            left: ["-50%", "100%"],
            opacity: [0.25, 0.7, 0.25],
            filter: ["blur(1px)", "blur(2.5px)", "blur(1px)"],
          }}
          transition={{
            left: {
              duration: 2.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
              delay: staggerDelay,
            },
            opacity: {
              duration: 1.2,
              repeat: Infinity,
              repeatType: "mirror",
              delay: staggerDelay,
            },
            filter: {
              duration: 1.5,
              repeat: Infinity,
              repeatType: "mirror",
              delay: staggerDelay,
            },
          }}
        />

        {/* Right beam — slides top → bottom */}
        <motion.div
          className="absolute top-0 right-0 h-[50%] w-[2px]"
          style={{
            background: `linear-gradient(to bottom, transparent, ${beamColor}, transparent)`,
          }}
          initial={{ filter: "blur(2px)" }}
          animate={{
            top: ["-50%", "100%"],
            opacity: [0.25, 0.7, 0.25],
            filter: ["blur(1px)", "blur(2.5px)", "blur(1px)"],
          }}
          transition={{
            top: {
              duration: 2.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
              delay: staggerDelay + 0.6,
            },
            opacity: {
              duration: 1.2,
              repeat: Infinity,
              repeatType: "mirror",
              delay: staggerDelay + 0.6,
            },
            filter: {
              duration: 1.5,
              repeat: Infinity,
              repeatType: "mirror",
              delay: staggerDelay + 0.6,
            },
          }}
        />

        {/* Bottom beam — slides right → left */}
        <motion.div
          className="absolute bottom-0 right-0 h-[2px] w-[50%]"
          style={{
            background: `linear-gradient(to right, transparent, ${beamColor}, transparent)`,
          }}
          initial={{ filter: "blur(2px)" }}
          animate={{
            right: ["-50%", "100%"],
            opacity: [0.25, 0.7, 0.25],
            filter: ["blur(1px)", "blur(2.5px)", "blur(1px)"],
          }}
          transition={{
            right: {
              duration: 2.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
              delay: staggerDelay + 1.2,
            },
            opacity: {
              duration: 1.2,
              repeat: Infinity,
              repeatType: "mirror",
              delay: staggerDelay + 1.2,
            },
            filter: {
              duration: 1.5,
              repeat: Infinity,
              repeatType: "mirror",
              delay: staggerDelay + 1.2,
            },
          }}
        />

        {/* Left beam — slides bottom → top */}
        <motion.div
          className="absolute bottom-0 left-0 h-[50%] w-[2px]"
          style={{
            background: `linear-gradient(to bottom, transparent, ${beamColor}, transparent)`,
          }}
          initial={{ filter: "blur(2px)" }}
          animate={{
            bottom: ["-50%", "100%"],
            opacity: [0.25, 0.7, 0.25],
            filter: ["blur(1px)", "blur(2.5px)", "blur(1px)"],
          }}
          transition={{
            bottom: {
              duration: 2.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
              delay: staggerDelay + 1.8,
            },
            opacity: {
              duration: 1.2,
              repeat: Infinity,
              repeatType: "mirror",
              delay: staggerDelay + 1.8,
            },
            filter: {
              duration: 1.5,
              repeat: Infinity,
              repeatType: "mirror",
              delay: staggerDelay + 1.8,
            },
          }}
        />

        {/* Corner glow spots — slow opacity pulse */}
        {[
          { pos: "top-0 left-0", size: "h-[5px] w-[5px]", blur: "blur-[1px]", dur: 2, delay: 0 },
          { pos: "top-0 right-0", size: "h-[8px] w-[8px]", blur: "blur-[2px]", dur: 2.4, delay: 0.5 },
          { pos: "bottom-0 right-0", size: "h-[8px] w-[8px]", blur: "blur-[2px]", dur: 2.2, delay: 1 },
          { pos: "bottom-0 left-0", size: "h-[5px] w-[5px]", blur: "blur-[1px]", dur: 2.3, delay: 1.5 },
        ].map((c, i) => (
          <motion.div
            key={i}
            className={cn("absolute rounded-full", c.pos, c.size, c.blur)}
            style={{ backgroundColor: cornerColor }}
            animate={{ opacity: [0.2, 0.55, 0.2] }}
            transition={{
              duration: c.dur,
              repeat: Infinity,
              repeatType: "mirror",
              delay: staggerDelay + c.delay,
            }}
          />
        ))}
      </div>

      {/* The actual card content — positioned above the decorative layer */}
      <div className="relative">{children}</div>
    </div>
  );
}
