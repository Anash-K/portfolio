"use client";

import { HOME_IMPACT_STATS } from "@/data/home";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";

export function ImpactStatsSection() {
  return (
    <section className="relative border-y border-white/[0.06] bg-white/[0.01] py-16 md:py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-8">
        {HOME_IMPACT_STATS.map((stat) => (
          <AnimatedCounter
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
}
