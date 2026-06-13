"use client";

import { HOME_DOMAINS } from "@/data/home";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { Card } from "@/components/ui/Card";

export function DomainExperienceSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.015] to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Domains"
          title="Industries & Domains"
          description="Deep experience building products across diverse, high-impact industries."
          align="center"
        />

        <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_DOMAINS.map((domain) => (
            <StaggerItem key={domain.title}>
              <Card className="group h-full transition-all hover:border-gold/25 hover:bg-white/[0.04]">
                <h3 className="mb-2 font-semibold text-gold transition-colors group-hover:text-gold-light">
                  {domain.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {domain.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
