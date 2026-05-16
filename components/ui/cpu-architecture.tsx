import { cn } from "@/lib/utils";
import React from "react";

export interface CpuArchitectureSvgProps {
  className?: string;
  width?: string;
  height?: string;
  /** Two-line label (rendered as two centered <text> rows). */
  textTop?: string;
  textBottom?: string;
  showCpuConnections?: boolean;
  lineMarkerSize?: number;
  animateText?: boolean;
  animateLines?: boolean;
  animateMarkers?: boolean;
}

/**
 * CpuArchitecture — adapted from the aceternity component.
 *
 * Stratzi-flavored changes:
 *  - "CPU" label split into a two-line "Company Brain" so it fits the box.
 *  - 8 original branches + 4 new ones (12 total) for a denser but still
 *    restrained pattern of data lines.
 *  - Original RGB rainbow gradients replaced with the brand palette
 *    (teal, primary-soft, cream, white). The dots reading as flowing data,
 *    not Christmas lights.
 *  - CPU block flipped from black to glassy white with a teal border
 *    so it reads as a luminous brain, not a literal chip.
 *  - Connection rectangles tinted teal-on-teal instead of grey-on-black.
 */
const CpuArchitecture = ({
  className,
  width = "100%",
  height = "100%",
  textTop = "Company",
  textBottom = "Brain",
  showCpuConnections = true,
  animateText = true,
  lineMarkerSize = 16,
  animateLines = true,
  animateMarkers = true,
}: CpuArchitectureSvgProps) => {
  return (
    <svg
      className={cn("text-primary-edge/55", className)}
      width={width}
      height={height}
      viewBox="0 0 200 100"
    >
      {/* Paths */}
      <g
        stroke="currentColor"
        fill="none"
        strokeWidth="0.3"
        strokeDasharray="100 100"
        pathLength="100"
        markerStart="url(#cpu-circle-marker)"
      >
        <path d="M 10 20 h 79.5 q 5 0 5 5 v 30" />
        <path d="M 180 10 h -69.7 q -5 0 -5 5 v 30" />
        <path d="M 130 20 v 21.8 q 0 5 -5 5 h -10" />
        <path d="M 170 80 v -21.8 q 0 -5 -5 -5 h -50" />
        <path d="M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -20" />
        <path d="M 94.8 95 v -36" />
        <path d="M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 14" />
        <path d="M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 20" />
        {/* New paths 9-12 for more density */}
        <path d="M 5 70 h 70 q 5 0 5 -5 v -10" />
        <path d="M 195 30 h -55 q -5 0 -5 5 v 10" />
        <path d="M 175 95 v -25 q 0 -5 -5 -5 h -35" />
        <path d="M 5 5 v 25 q 0 5 5 5 h 70 q 5 0 5 5 v 5" />
        {/* Paths 13-18 — six more subtle branches */}
        <path d="M 50 5 v 25 q 0 5 5 5 h 35" />
        <path d="M 195 75 h -65 q -5 0 -5 -5 v -5" />
        <path d="M 195 50 h -75" />
        <path d="M 60 95 h 30 q 5 0 5 -5 v -25" />
        <path d="M 165 5 h -35 q -5 0 -5 5 v 30" />
        <path d="M 5 50 h 25 q 5 0 5 5 v 5 q 0 5 5 5 h 40" />
        {animateLines && (
          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            dur="1s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.25,0.1,0.5,1"
            keyTimes="0; 1"
          />
        )}
      </g>

      {/* Glowing dots flowing along each path (18 total) */}
      {Array.from({ length: 18 }, (_, i) => i + 1).map((n) => (
        <g key={n} mask={`url(#cpu-mask-${n})`}>
          <circle
            className={`cpu-architecture cpu-line-${n}`}
            cx="0"
            cy="0"
            r="7"
            fill={`url(#cpu-grad-${(n - 1) % 5})`}
          />
        </g>
      ))}

      {/* CPU Box — glassy white with teal border */}
      <g>
        {showCpuConnections && (
          <g fill="url(#cpu-connection-gradient)">
            <rect x="93" y="37" width="2.5" height="5" rx="0.7" />
            <rect x="104" y="37" width="2.5" height="5" rx="0.7" />
            <rect
              x="116.3"
              y="44"
              width="2.5"
              height="5"
              rx="0.7"
              transform="rotate(90 116.25 45.5)"
            />
            <rect
              x="122.8"
              y="44"
              width="2.5"
              height="5"
              rx="0.7"
              transform="rotate(90 116.25 45.5)"
            />
            <rect
              x="104"
              y="16"
              width="2.5"
              height="5"
              rx="0.7"
              transform="rotate(180 105.25 39.5)"
            />
            <rect
              x="114.5"
              y="16"
              width="2.5"
              height="5"
              rx="0.7"
              transform="rotate(180 105.25 39.5)"
            />
            <rect
              x="80"
              y="-13.6"
              width="2.5"
              height="5"
              rx="0.7"
              transform="rotate(270 115.25 19.5)"
            />
            <rect
              x="87"
              y="-13.6"
              width="2.5"
              height="5"
              rx="0.7"
              transform="rotate(270 115.25 19.5)"
            />
          </g>
        )}
        {/* Main CPU rectangle — glassy white with teal border */}
        <rect
          x="85"
          y="40"
          width="30"
          height="20"
          rx="2.5"
          fill="url(#cpu-box-gradient)"
          stroke="rgba(44, 102, 110, 0.55)"
          strokeWidth="0.35"
          filter="url(#cpu-light-shadow)"
        />
        {/* Inner highlight for glass feel */}
        <rect
          x="86"
          y="41"
          width="28"
          height="3"
          rx="1.5"
          fill="url(#cpu-box-highlight)"
        />
        {/* Two-line label (centered) — "Company / Brain" replaces "CPU" */}
        <text
          x="100"
          y="49.2"
          fontSize="4.2"
          fill={animateText ? "url(#cpu-text-gradient)" : "#2c666e"}
          fontWeight="700"
          letterSpacing="0.04em"
          textAnchor="middle"
        >
          {textTop}
        </text>
        <text
          x="100"
          y="55.4"
          fontSize="4.2"
          fill={animateText ? "url(#cpu-text-gradient)" : "#2c666e"}
          fontWeight="700"
          letterSpacing="0.04em"
          textAnchor="middle"
        >
          {textBottom}
        </text>
      </g>

      {/* Masks (cut the visible portion of each glow circle to stop before
          reaching the CPU). Each mask path mirrors its line route but a
          few units short, so the dot fades just outside the chip. */}
      <defs>
        <mask id="cpu-mask-1"><path d="M 10 20 h 79.5 q 5 0 5 5 v 24" strokeWidth="0.5" stroke="white" fill="none" /></mask>
        <mask id="cpu-mask-2"><path d="M 180 10 h -69.7 q -5 0 -5 5 v 24" strokeWidth="0.5" stroke="white" fill="none" /></mask>
        <mask id="cpu-mask-3"><path d="M 130 20 v 21.8 q 0 5 -5 5 h -10" strokeWidth="0.5" stroke="white" fill="none" /></mask>
        <mask id="cpu-mask-4"><path d="M 170 80 v -21.8 q 0 -5 -5 -5 h -50" strokeWidth="0.5" stroke="white" fill="none" /></mask>
        <mask id="cpu-mask-5"><path d="M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -20" strokeWidth="0.5" stroke="white" fill="none" /></mask>
        <mask id="cpu-mask-6"><path d="M 94.8 95 v -36" strokeWidth="0.5" stroke="white" fill="none" /></mask>
        <mask id="cpu-mask-7"><path d="M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 14" strokeWidth="0.5" stroke="white" fill="none" /></mask>
        <mask id="cpu-mask-8"><path d="M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 20" strokeWidth="0.5" stroke="white" fill="none" /></mask>
        {/* New masks for lines 9-12 — each stops a few units before the CPU */}
        <mask id="cpu-mask-9"><path d="M 5 70 h 70 q 5 0 5 -5 v -5" strokeWidth="0.5" stroke="white" fill="none" /></mask>
        <mask id="cpu-mask-10"><path d="M 195 30 h -55 q -5 0 -5 5 v 5" strokeWidth="0.5" stroke="white" fill="none" /></mask>
        <mask id="cpu-mask-11"><path d="M 175 95 v -25 q 0 -5 -5 -5 h -30" strokeWidth="0.5" stroke="white" fill="none" /></mask>
        <mask id="cpu-mask-12"><path d="M 5 5 v 25 q 0 5 5 5 h 70" strokeWidth="0.5" stroke="white" fill="none" /></mask>
        {/* New masks 13-18 — each stops a few units before the CPU */}
        <mask id="cpu-mask-13"><path d="M 50 5 v 25 q 0 5 5 5 h 30" strokeWidth="0.5" stroke="white" fill="none" /></mask>
        <mask id="cpu-mask-14"><path d="M 195 75 h -60 q -5 0 -5 -5 v -5" strokeWidth="0.5" stroke="white" fill="none" /></mask>
        <mask id="cpu-mask-15"><path d="M 195 50 h -70" strokeWidth="0.5" stroke="white" fill="none" /></mask>
        <mask id="cpu-mask-16"><path d="M 60 95 h 30 q 5 0 5 -5 v -20" strokeWidth="0.5" stroke="white" fill="none" /></mask>
        <mask id="cpu-mask-17"><path d="M 165 5 h -35 q -5 0 -5 5 v 25" strokeWidth="0.5" stroke="white" fill="none" /></mask>
        <mask id="cpu-mask-18"><path d="M 5 50 h 25 q 5 0 5 5 v 5 q 0 5 5 5 h 35" strokeWidth="0.5" stroke="white" fill="none" /></mask>

        {/* Brand-aligned glow gradients (cycled across the 12 lines) */}
        {/* 0: bright white */}
        <radialGradient id="cpu-grad-0" fx="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
          <stop offset="60%" stopColor="rgba(255,255,255,0.35)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        {/* 1: primary teal */}
        <radialGradient id="cpu-grad-1" fx="1">
          <stop offset="0%" stopColor="#2c666e" />
          <stop offset="55%" stopColor="rgba(44,102,110,0.5)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        {/* 2: primary-soft (light teal) */}
        <radialGradient id="cpu-grad-2" fx="1">
          <stop offset="0%" stopColor="#b0eeed" />
          <stop offset="55%" stopColor="rgba(176,238,237,0.55)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        {/* 3: taupe-cream warmth */}
        <radialGradient id="cpu-grad-3" fx="1">
          <stop offset="0%" stopColor="#f5decf" />
          <stop offset="55%" stopColor="rgba(245,222,207,0.55)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        {/* 4: primary-edge mid teal */}
        <radialGradient id="cpu-grad-4" fx="1">
          <stop offset="0%" stopColor="#80bdbc" />
          <stop offset="55%" stopColor="rgba(128,189,188,0.5)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>

        {/* Glassy CPU box fill */}
        <linearGradient id="cpu-box-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
          <stop offset="60%" stopColor="rgba(245,250,250,0.92)" />
          <stop offset="100%" stopColor="rgba(220,235,234,0.88)" />
        </linearGradient>
        {/* Inner top highlight for glass feel */}
        <linearGradient id="cpu-box-highlight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>

        <filter
          id="cpu-light-shadow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feDropShadow
            dx="0"
            dy="1"
            stdDeviation="1.2"
            floodColor="#2c666e"
            floodOpacity="0.25"
          />
        </filter>

        <marker
          id="cpu-circle-marker"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerWidth={lineMarkerSize}
          markerHeight={lineMarkerSize}
        >
          <circle
            cx="5"
            cy="5"
            r="2"
            fill="rgba(44,102,110,0.85)"
            stroke="rgba(176,238,237,0.45)"
            strokeWidth="0.5"
          >
            {animateMarkers && (
              <animate attributeName="r" values="0; 3; 2" dur="0.5s" />
            )}
          </circle>
        </marker>

        {/* Teal-tinted connection rectangle gradient */}
        <linearGradient
          id="cpu-connection-gradient"
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="0%" stopColor="#80bdbc" />
          <stop offset="100%" stopColor="#2c666e" />
        </linearGradient>

        {/* Animated text shimmer (teal-soft → white → teal-soft) */}
        <linearGradient id="cpu-text-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2c666e">
            <animate
              attributeName="offset"
              values="-2; -1; 0"
              dur="5s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
            />
          </stop>
          <stop offset="25%" stopColor="#80bdbc">
            <animate
              attributeName="offset"
              values="-1; 0; 1"
              dur="5s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
            />
          </stop>
          <stop offset="50%" stopColor="#2c666e">
            <animate
              attributeName="offset"
              values="0; 1; 2;"
              dur="5s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
            />
          </stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export { CpuArchitecture };
