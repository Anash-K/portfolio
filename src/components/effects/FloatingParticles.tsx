"use client";

import { motion } from "framer-motion";

const PARTICLES = [
  { left: 8, top: 15, size: 3, delay: 0, duration: 4 },
  { left: 18, top: 72, size: 2, delay: 0.5, duration: 5 },
  { left: 82, top: 22, size: 4, delay: 1, duration: 4.5 },
  { left: 90, top: 68, size: 2, delay: 1.5, duration: 3.5 },
  { left: 45, top: 8, size: 2, delay: 0.8, duration: 5.5 },
  { left: 62, top: 88, size: 3, delay: 2, duration: 4 },
  { left: 28, top: 42, size: 2, delay: 1.2, duration: 6 },
  { left: 75, top: 48, size: 2, delay: 0.3, duration: 4.8 },
];

export function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-gold/30 blur-[1px]"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
