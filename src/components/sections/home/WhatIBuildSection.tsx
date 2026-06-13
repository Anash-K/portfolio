"use client";

import {
  Layers,
  Plane,
  Smartphone,
  CreditCard,
  Zap,
  Sparkles,
} from "lucide-react";
import { WHAT_I_BUILD } from "@/data/home";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/Card";

const iconMap = {
  layers: Layers,
  plane: Plane,
  smartphone: Smartphone,
  "credit-card": CreditCard,
  zap: Zap,
  sparkles: Sparkles,
};

export function WhatIBuildSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Expertise"
          title="What I Build"
          description="From enterprise SaaS to real-time mobile apps — full-stack products that scale."
          align="center"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHAT_I_BUILD.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <FadeIn key={item.title} delay={i * 0.08}>
                <Card className="group h-full transition-all duration-300 hover:border-gold/25 hover:bg-white/[0.05]">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-gold/20 bg-gold/5 transition-colors group-hover:bg-gold/10">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <h3 className="mb-2 font-semibold text-white transition-colors group-hover:text-gold">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/50">
                    {item.description}
                  </p>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
