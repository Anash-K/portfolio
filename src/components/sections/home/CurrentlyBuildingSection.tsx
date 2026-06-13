"use client";

import { motion } from "framer-motion";
import { CURRENTLY_BUILDING } from "@/data/home";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { CheckCircle2 } from "lucide-react";

export function CurrentlyBuildingSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="In Progress"
          title="Currently Building"
          description="Active development on enterprise-grade airport services infrastructure."
        />

        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/[0.06] via-white/[0.02] to-transparent p-8 md:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/[0.06] blur-3xl" />
            <div className="relative">
              <motion.span
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium text-gold"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Active Development
              </motion.span>

              <h3 className="mb-8 font-display text-2xl font-bold text-white md:text-3xl">
                {CURRENTLY_BUILDING.title}
              </h3>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {CURRENTLY_BUILDING.features.map((feature, i) => (
                  <motion.div
                    key={feature}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-black/30 px-4 py-3 backdrop-blur-sm"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                  >
                    <CheckCircle2 size={16} className="shrink-0 text-gold" />
                    <span className="text-sm text-white/70">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
