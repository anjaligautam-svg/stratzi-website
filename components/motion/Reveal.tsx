"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

/**
 * Reveal: single-element scroll-triggered fade + Y translate.
 * Used as the atomic motion primitive across the site.
 */
export function Reveal({
  children,
  delay = 0,
  y = 16,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger: container that staggers Reveal children with a per-child delay.
 * Children should be wrapped in <Reveal> already, or use plain elements
 * — Stagger applies framer's stagger via parent/child variants.
 */
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Stagger({
  children,
  className,
  staggerChildren = 0.08,
}: {
  children: ReactNode;
  className?: string;
  staggerChildren?: number;
}) {
  return (
    <motion.div
      variants={{
        hidden: {},
        show: { transition: { staggerChildren, delayChildren: 0.05 } },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={childVariants} className={className}>
      {children}
    </motion.div>
  );
}

// Exported for cases where we need direct framer variants
export { containerVariants, childVariants };
