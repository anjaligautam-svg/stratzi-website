"use client";

import { useEffect, useRef, useState } from "react";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface OrbitalItem {
  id: number;
  /** Short label shown under the orbiting node */
  title: string;
  /** Tag/eyebrow line shown above the title in the expanded detail card */
  sector: string;
  /** Body copy shown in the expanded detail card */
  detail: string;
  /** Optional lucide-react icon rendered inside the node */
  icon: LucideIcon;
}

export interface OrbitalTimelineProps {
  items: OrbitalItem[];
  className?: string;
  /** Pixel radius of the orbiting circle. Default 130. */
  radius?: number;
  /** Degrees per 50ms tick (auto-rotation speed). Default 0.3. */
  rotationSpeed?: number;
}

/**
 * OrbitalTimeline — adapted from the aceternity radial orbital component.
 *
 * Stratzi changes:
 *  - Bespoke palette (teal core, primary-edge orbit ring, taupe-soft glow)
 *    instead of the original purple/blue/teal rainbow + black bg.
 *  - Contained sizing (renders inside any positioned parent) — original
 *    was `w-full h-screen`.
 *  - Removed status badges / energy bars / "related nodes" because case
 *    studies don't have lifecycle state. Detail card stays minimal:
 *    sector eyebrow + title + body.
 *  - No shadcn Card/Badge/Button dependency — uses our utility classes.
 */
export function OrbitalTimeline({
  items,
  className,
  radius = 130,
  rotationSpeed = 0.3,
}: OrbitalTimelineProps) {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autoRotate) return;
    const tick = setInterval(() => {
      setRotationAngle((prev) => (prev + rotationSpeed) % 360);
    }, 50);
    return () => clearInterval(tick);
  }, [autoRotate, rotationSpeed]);

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.currentTarget === e.target) {
      setActiveId(null);
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    if (activeId === id) {
      setActiveId(null);
      setAutoRotate(true);
    } else {
      setActiveId(id);
      setAutoRotate(false);
    }
  };

  const calculatePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.45,
      Math.min(1, 0.45 + 0.55 * ((1 + Math.sin(radian)) / 2))
    );
    return { x, y, zIndex, opacity };
  };

  return (
    <div
      ref={containerRef}
      onClick={handleBackgroundClick}
      className={cn(
        "relative w-full aspect-square flex items-center justify-center overflow-hidden",
        className
      )}
    >
      <div
        className="relative w-full h-full flex items-center justify-center"
        style={{ perspective: "1000px" }}
        onClick={handleBackgroundClick}
      >
        {/* Outer orbit rings (decorative) */}
        <div
          className="absolute rounded-full border border-primary-edge/25 pointer-events-none"
          style={{ width: radius * 2, height: radius * 2 }}
        />
        <div
          className="absolute rounded-full border border-primary-edge/12 pointer-events-none"
          style={{ width: radius * 2 + 60, height: radius * 2 + 60 }}
        />

        {/* Central pulsing brain */}
        <div className="absolute w-14 h-14 rounded-full flex items-center justify-center z-10 pointer-events-none">
          {/* Outer pings */}
          <div className="absolute -inset-2 rounded-full border border-primary-edge/40 animate-ping opacity-60" />
          <div
            className="absolute -inset-4 rounded-full border border-primary-edge/25 animate-ping opacity-40"
            style={{ animationDelay: "0.5s" }}
          />
          {/* Gradient core */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-primary-edge to-primary-soft animate-pulse shadow-[0_0_30px_rgba(44,102,110,0.45)]" />
          {/* Inner highlight bead */}
          <div className="relative w-7 h-7 rounded-full bg-white/85 backdrop-blur-sm" />
        </div>

        {/* Orbiting nodes */}
        {items.map((item, index) => {
          const pos = calculatePosition(index, items.length);
          const isActive = activeId === item.id;
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="absolute transition-all duration-700"
              style={{
                transform: `translate(${pos.x}px, ${pos.y}px)`,
                zIndex: isActive ? 300 : pos.zIndex,
                opacity: isActive ? 1 : pos.opacity,
              }}
              onClick={(e) => {
                e.stopPropagation();
                toggleItem(item.id);
              }}
            >
              {/* Soft halo */}
              <div className="absolute -inset-2 rounded-full bg-primary-soft/25 blur-md pointer-events-none" />

              {/* Node circle */}
              <div
                className={cn(
                  "relative w-10 h-10 rounded-full flex items-center justify-center border-2 cursor-pointer transition-all duration-300",
                  isActive
                    ? "bg-primary text-white border-white scale-125 shadow-lg shadow-primary/40"
                    : "bg-white/95 text-primary border-primary-edge/65 hover:bg-primary-soft/40 hover:border-primary-edge"
                )}
              >
                <Icon size={14} strokeWidth={2.2} />
              </div>

              {/* Label */}
              <div
                className={cn(
                  "absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10.5px] font-semibold tracking-[0.12em] uppercase transition-all duration-300",
                  isActive
                    ? "text-primary scale-110"
                    : "text-primary/65"
                )}
              >
                {item.title}
              </div>

              {/* Expanded detail card */}
              {isActive && (
                <div className="absolute top-[72px] left-1/2 -translate-x-1/2 w-60 rounded-2xl border border-primary-edge/45 bg-white/95 backdrop-blur-xl p-4 shadow-[0_24px_60px_-30px_rgba(44,102,110,0.4)] z-[400]">
                  {/* Connector dot from label to card */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-px h-2 bg-primary-edge/60" />

                  <div className="text-[9.5px] font-semibold tracking-[0.18em] uppercase text-primary mb-2">
                    {item.sector}
                  </div>
                  <div className="font-heading text-[15px] font-semibold leading-tight text-ink tracking-[-0.005em]">
                    {item.title}
                  </div>
                  <p className="mt-2.5 text-[12px] leading-relaxed text-ink-muted">
                    {item.detail}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
