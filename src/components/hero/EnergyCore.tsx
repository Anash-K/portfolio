"use client";

import { CoreParticleEmitter } from "@/components/hero/CoreParticleEmitter";

export function EnergyCore() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
      <div className="energy-core relative flex h-[200px] w-[200px] items-center justify-center sm:h-[240px] sm:w-[240px]">
        <div className="energy-core-breathe absolute inset-0 rounded-full bg-gold/20 blur-2xl" />
        <div className="energy-core-breathe-delayed absolute inset-4 rounded-full bg-amber-400/10 blur-xl" />

        <div className="energy-core-ring energy-core-ring-1 absolute inset-0 rounded-full border border-gold/30" />
        <div className="energy-core-ring energy-core-ring-2 absolute inset-3 rounded-full border border-gold/25" />
        <div className="energy-core-ring energy-core-ring-3 absolute inset-6 rounded-full border border-gold/20" />

        <div className="energy-core-pulse absolute inset-8 rounded-full bg-gradient-radial from-gold/25 via-gold/5 to-transparent" />

        <CoreParticleEmitter />

        <div className="energy-core-reactor relative z-10 flex h-[72px] w-[72px] flex-col items-center justify-center rounded-full border border-gold/50 bg-black/90 shadow-[0_0_30px_rgba(212,175,55,0.45),inset_0_0_20px_rgba(212,175,55,0.15)] sm:h-[84px] sm:w-[84px]">
          <div className="energy-core-inner-glow absolute inset-1 rounded-full border border-gold/30 bg-gradient-to-br from-gold/20 via-transparent to-amber-600/10" />
          <span className="relative font-display text-[11px] font-bold tracking-[0.32em] text-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] sm:text-xs">
            ANASH
          </span>
        </div>
      </div>
    </div>
  );
}
