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
          <div className="phoenix-glow absolute inset-0 rounded-full bg-gold/20 blur-xl" />
          <div className="phoenix-glow-delayed absolute inset-1 rounded-full bg-orange-500/15 blur-lg" />
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
          <linearGradient id="phoenixBodyGradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FFF4C2">
              <animate
                attributeName="stop-color"
                values="#FFF4C2;#FFD700;#FF8C00;#FFD700;#FFF4C2"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="45%" stopColor="#E8C547">
              <animate
                attributeName="stop-color"
                values="#E8C547;#D4AF37;#FF6B00;#D4AF37;#E8C547"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#FF6B00">
              <animate
                attributeName="stop-color"
                values="#FF6B00;#FF4500;#D4AF37;#FF4500;#FF6B00"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>

          <linearGradient id="phoenixWingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#FF8C00" />
            <stop offset="100%" stopColor="#FF4500" />
          </linearGradient>

          <linearGradient id="phoenixTailGradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#E8C547" />
            <stop offset="40%" stopColor="#FF8C00" />
            <stop offset="100%" stopColor="#FF2200" stopOpacity="0" />
          </linearGradient>

          <filter id="phoenixFireGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="phoenixSoftGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2" result="blur" />
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
            d="M50 58 C48 68, 44 78, 42 88 C41 92, 43 94, 45 90 C47 84, 49 72, 50 58Z"
            fill="url(#phoenixTailGradient)"
            opacity="0.85"
          />
          <path
            className="phoenix-flame-wisp"
            style={{ animationDelay: "0.25s" }}
            d="M50 58 C52 70, 54 80, 56 90 C57 94, 55 96, 53 91 C51 82, 50 70, 50 58Z"
            fill="url(#phoenixTailGradient)"
            opacity="0.75"
          />
          <path
            className="phoenix-flame-wisp"
            style={{ animationDelay: "0.5s" }}
            d="M50 58 C46 72, 40 82, 36 92 C34 96, 38 98, 40 92 C44 82, 48 68, 50 58Z"
            fill="url(#phoenixTailGradient)"
            opacity="0.6"
          />
          <path
            className="phoenix-flame-wisp"
            style={{ animationDelay: "0.75s" }}
            d="M50 58 C54 72, 60 82, 64 92 C66 96, 62 98, 60 92 C56 82, 52 68, 50 58Z"
            fill="url(#phoenixTailGradient)"
            opacity="0.6"
          />
        </g>

        {/* Left wing */}
        <path
          d="M50 42 C38 38, 22 28, 14 18 C10 14, 8 20, 12 24 C20 32, 32 40, 44 44 C48 45, 50 44, 50 42Z"
          fill="url(#phoenixWingGradient)"
          filter="url(#phoenixFireGlow)"
          className="phoenix-wing-left"
        />
        <path
          d="M50 46 C36 44, 18 34, 8 22 C4 18, 6 28, 10 32 C18 40, 34 48, 48 50 C50 50, 50 48, 50 46Z"
          fill="url(#phoenixBodyGradient)"
          opacity="0.7"
          className="phoenix-wing-left"
          style={{ animationDelay: "0.15s" }}
        />

        {/* Right wing */}
        <path
          d="M50 42 C62 38, 78 28, 86 18 C90 14, 92 20, 88 24 C80 32, 68 40, 56 44 C52 45, 50 44, 50 42Z"
          fill="url(#phoenixWingGradient)"
          filter="url(#phoenixFireGlow)"
          className="phoenix-wing-right"
        />
        <path
          d="M50 46 C64 44, 82 34, 92 22 C96 18, 94 28, 90 32 C82 40, 66 48, 52 50 C50 50, 50 48, 50 46Z"
          fill="url(#phoenixBodyGradient)"
          opacity="0.7"
          className="phoenix-wing-right"
          style={{ animationDelay: "0.15s" }}
        />

        {/* Body */}
        <ellipse
          cx="50"
          cy="48"
          rx="8"
          ry="14"
          fill="url(#phoenixBodyGradient)"
          filter="url(#phoenixFireGlow)"
        />

        {/* Head & crest */}
        <path
          d="M50 28 C47 26, 46 22, 48 18 C49 16, 51 16, 52 18 C54 22, 53 26, 50 28Z"
          fill="url(#phoenixBodyGradient)"
        />
        <path
          d="M50 18 C49 12, 52 8, 54 6 C55 5, 56 7, 55 9 C53 12, 51 15, 50 18Z"
          fill="#FFD700"
          className="phoenix-crest"
        />
        <path
          d="M52 20 C54 14, 58 10, 60 8"
          stroke="#FF8C00"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="phoenix-crest"
          style={{ animationDelay: "0.3s" }}
        />
        <circle cx="51" cy="22" r="1.2" fill="#1a0a00" />

        {/* Beak */}
        <path d="M52 24 L56 25 L52 26 Z" fill="#FF8C00" />

        {/* Inner wing fire details */}
        <path
          d="M50 40 L30 26 L34 32 L50 44Z"
          fill="#FFD700"
          opacity="0.35"
          className="phoenix-flame-wisp"
        />
        <path
          d="M50 40 L70 26 L66 32 L50 44Z"
          fill="#FFD700"
          opacity="0.35"
          className="phoenix-flame-wisp"
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
            fill="#FFD700"
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
