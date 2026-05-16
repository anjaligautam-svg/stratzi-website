import { Children, cloneElement, isValidElement, type ReactNode } from "react";

/**
 * Reveal — fade + Y translate via CSS animation.
 *
 * We initially built this with framer-motion's `whileInView` + `useInView`,
 * but in this Next.js 16 / React 19 / framer-motion 12 stack the motion.div
 * elements were getting stuck at their initial state (opacity 0) and the
 * animation never fired on mount or scroll. Switching to a pure CSS keyframe
 * animation eliminates the hydration / observer edge case entirely and gives
 * us identical visual behavior.
 *
 * Delays map to predefined classes (reveal-d1..d6) in globals.css.
 */

const delayClass: Record<number, string> = {
  0: "",
  1: "reveal-d1",
  2: "reveal-d2",
  3: "reveal-d3",
  4: "reveal-d4",
  5: "reveal-d5",
  6: "reveal-d6",
};

function resolveDelayClass(delay: number) {
  // Old API: delay in seconds (0, 0.08, 0.16, …) — map to bucket index.
  if (delay <= 0) return delayClass[0];
  const bucket = Math.round(delay / 0.08);
  return delayClass[Math.min(bucket, 6)] ?? "";
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const cls = `reveal ${resolveDelayClass(delay)} ${className}`.trim();
  return <div className={cls}>{children}</div>;
}

/**
 * Stagger / StaggerItem — group of reveal items with sequential delays.
 * Each StaggerItem child gets a delay based on its index.
 */
export function Stagger({
  children,
  className = "",
  staggerChildren = 0.08,
}: {
  children: ReactNode;
  className?: string;
  staggerChildren?: number;
}) {
  // Auto-inject `index` prop into each StaggerItem child so they get
  // sequential animation delays without callers having to pass it manually.
  const indexed = Children.map(children, (child, i) => {
    if (isValidElement(child)) {
      return cloneElement(
        child as React.ReactElement<{ index?: number }>,
        { index: i }
      );
    }
    return child;
  });

  return (
    <div
      className={className}
      style={
        {
          "--stagger-step": `${staggerChildren}s`,
        } as React.CSSProperties
      }
    >
      {indexed}
    </div>
  );
}

export function StaggerItem({
  children,
  className = "",
  index = 0,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
}) {
  const style = {
    animationDelay: `calc(var(--stagger-step, 0.08s) * ${index})`,
  };
  return (
    <div className={`reveal ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}
