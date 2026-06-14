"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PhoenixLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showGlow?: boolean;
}

const SIZES = {
  sm: 40,
  md: 52,
  lg: 96,
} as const;

const FLAME_WISPS = [
  { x: 18, y: 72, delay: 0, scale: 0.9 },
  { x: 28, y: 78, delay: 0.3, scale: 1.1 },
  { x: 38, y: 74, delay: 0.15, scale: 1 },
  { x: 50, y: 82, delay: 0.45, scale: 1.2 },
  { x: 62, y: 76, delay: 0.2, scale: 0.95 },
  { x: 72, y: 80, delay: 0.55, scale: 1.05 },
  { x: 82, y: 73, delay: 0.35, scale: 0.85 },
] as const;

const EMBER_PARTICLES = [
  { x: 22, y: 58, delay: 0 },
  { x: 78, y: 55, delay: 0.4 },
  { x: 35, y: 42, delay: 0.8 },
  { x: 65, y: 44, delay: 1.2 },
  { x: 50, y: 68, delay: 0.6 },
] as const;

export function PhoenixLogo({
  className,
  size = "md",
  showGlow = true,
}: PhoenixLogoProps) {
  const dimension = SIZES[size];

  return (
    <div
      className={cn("relative inline-flex shrink-0 items-center justify-center", className)}
      style={{ width: dimension, height: dimension }}
      aria-hidden
    >
      {showGlow && (
        <>
          <div className="phoenix-glow absolute inset-0 rounded-full bg-gold/15 blur-xl" />
          <div className="phoenix-glow-delayed absolute inset-1 rounded-full bg-amber-500/10 blur-lg" />
        </>
      )}

      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 h-full w-full"
        role="img"
        aria-label="Phoenix logo"
      >
        <defs>
          <linearGradient id="phoenixBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFDF0" />
            <stop offset="40%" stopColor="#EAD075" />
            <stop offset="75%" stopColor="#C29A30" />
            <stop offset="100%" stopColor="#7E5406" />
          </linearGradient>

          <linearGradient id="phoenixWingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2B2" />
            <stop offset="30%" stopColor="#E5C158" />
            <stop offset="70%" stopColor="#C29323" />
            <stop offset="100%" stopColor="#8A5A00" />
          </linearGradient>

          <linearGradient id="phoenixTailGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#EAD075" />
            <stop offset="50%" stopColor="#B3861B" />
            <stop offset="100%" stopColor="#7E5406" stopOpacity="0" />
          </linearGradient>

          <filter id="phoenixFireGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="phoenixSoftGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Tail flame plumes */}
        <g className="phoenix-tail-flames" filter="url(#phoenixSoftGlow)">
          <path
            className="phoenix-flame-wisp"
            style={{ animationDelay: "0s" }}
            d="M50 60 C42 72, 34 84, 30 96 C36 90, 44 78, 48 60Z"
            fill="url(#phoenixTailGradient)"
            opacity="0.85"
          />
          <path
            className="phoenix-flame-wisp"
            style={{ animationDelay: "0.25s" }}
            d="M50 60 C58 72, 66 84, 70 96 C64 90, 56 78, 52 60Z"
            fill="url(#phoenixTailGradient)"
            opacity="0.85"
          />
          <path
            className="phoenix-flame-wisp"
            style={{ animationDelay: "0.5s" }}
            d="M50 60 C50 74, 50 86, 50 98 C49 86, 49 74, 50 60Z"
            fill="url(#phoenixTailGradient)"
            opacity="0.95"
          />
        </g>

        {/* Left Wing (Sleek Geometric Feathers) */}
        <g className="phoenix-wing-left" filter="url(#phoenixFireGlow)">
          {/* Feather 1 - Top */}
          <path
            d="M50 42 C 35 30, 20 18, 6 12 C 16 22, 32 34, 50 42 Z"
            fill="url(#phoenixWingGradient)"
          />
          {/* Feather 2 - Mid Top */}
          <path
            d="M50 42 C 32 35, 18 28, 10 20 C 18 28, 32 36, 50 42 Z"
            fill="url(#phoenixWingGradient)"
            opacity="0.9"
          />
          {/* Feather 3 - Mid Bottom */}
          <path
            d="M50 42 C 30 40, 20 36, 14 30 C 20 34, 32 39, 50 42 Z"
            fill="url(#phoenixWingGradient)"
            opacity="0.8"
          />
          {/* Feather 4 - Bottom */}
          <path
            d="M50 42 C 32 45, 24 42, 18 38 C 22 40, 32 42, 50 42 Z"
            fill="url(#phoenixWingGradient)"
            opacity="0.7"
          />
        </g>

        {/* Right Wing (Sleek Geometric Feathers) */}
        <g className="phoenix-wing-right" filter="url(#phoenixFireGlow)">
          {/* Feather 1 - Top */}
          <path
            d="M50 42 C 65 30, 80 18, 94 12 C 84 22, 68 34, 50 42 Z"
            fill="url(#phoenixWingGradient)"
          />
          {/* Feather 2 - Mid Top */}
          <path
            d="M50 42 C 68 35, 82 28, 90 20 C 82 28, 68 36, 50 42 Z"
            fill="url(#phoenixWingGradient)"
            opacity="0.9"
          />
          {/* Feather 3 - Mid Bottom */}
          <path
            d="M50 42 C 70 40, 80 36, 86 30 C 80 34, 68 39, 50 42 Z"
            fill="url(#phoenixWingGradient)"
            opacity="0.8"
          />
          {/* Feather 4 - Bottom */}
          <path
            d="M50 42 C 68 45, 76 42, 82 38 C 78 40, 68 42, 50 42 Z"
            fill="url(#phoenixWingGradient)"
            opacity="0.7"
          />
        </g>

        {/* Body (Sleek Tapered Diamond/Shield) */}
        <path
          d="M50 30 C53 38, 56 46, 56 54 C56 60, 52 64, 50 64 C48 64, 44 60, 44 54 C44 46, 47 38, 50 30 Z"
          fill="url(#phoenixBodyGradient)"
          filter="url(#phoenixFireGlow)"
        />

        {/* Head, Beak & Crest */}
        {/* Head & Neck */}
        <path
          d="M50 30 C47 28, 46 22, 48 18 C48 18, 51 16, 53 19 C55 22, 57 24, 56 26 C53 27, 51 29, 50 30 Z"
          fill="url(#phoenixBodyGradient)"
        />
        {/* Beak */}
        <path d="M53 19 L57 22 L53 23 Z" fill="#EAD075" />

        {/* Crest Feathers */}
        <path
          d="M49 18 C46 12, 44 6, 42 4 C45 6, 48 12, 49 18 Z"
          fill="url(#phoenixBodyGradient)"
          className="phoenix-crest"
        />
        <path
          d="M50 18 C50 10, 51 4, 50 2 C52 4, 52 10, 50 18 Z"
          fill="#FFFDF0"
          className="phoenix-crest"
          style={{ animationDelay: "0.2s" }}
        />
        <path
          d="M51 18 C54 12, 56 6, 58 4 C57 6, 54 12, 51 18 Z"
          fill="url(#phoenixBodyGradient)"
          className="phoenix-crest"
          style={{ animationDelay: "0.4s" }}
        />

        {/* Animated flame wisps at base */}
        {FLAME_WISPS.map((wisp, i) => (
          <motion.ellipse
            key={`wisp-${i}`}
            cx={wisp.x}
            cy={wisp.y}
            rx={3 * wisp.scale}
            ry={6 * wisp.scale}
            fill="url(#phoenixTailGradient)"
            filter="url(#phoenixSoftGlow)"
            initial={{ opacity: 0.3, scaleY: 0.8 }}
            animate={{
              opacity: [0.3, 0.9, 0.4, 0.8, 0.3],
              scaleY: [0.8, 1.3, 0.9, 1.2, 0.8],
              cy: [wisp.y, wisp.y - 4, wisp.y - 1, wisp.y - 5, wisp.y],
            }}
            transition={{
              duration: 1.8 + wisp.delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: wisp.delay,
            }}
          />
        ))}

        {/* Rising embers */}
        {EMBER_PARTICLES.map((ember, i) => (
          <motion.circle
            key={`ember-${i}`}
            cx={ember.x}
            cy={ember.y}
            r="1.2"
            fill="#EAD075"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0.6, 0],
              cy: [ember.y, ember.y - 18, ember.y - 28],
              cx: [ember.x, ember.x + (i % 2 === 0 ? 3 : -3), ember.x + (i % 2 === 0 ? 5 : -5)],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeOut",
              delay: ember.delay,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function PhoenixBrand({
  className,
  size = "md",
  showLabel = false,
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <PhoenixLogo size={size} />
      {showLabel && (
        <span className="font-display text-lg font-bold tracking-wide text-gold">
          Anash Khan
        </span>
      )}
    </span>
  );
}
