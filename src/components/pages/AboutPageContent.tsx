"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/layout/PageHero";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { Card } from "@/components/ui/Card";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { ABOUT_BIO, ABOUT_TIMELINE } from "@/data/about";
import { DOMAIN_EXPERTISE, SITE_CONFIG, STATS, EDUCATION, ACHIEVEMENTS } from "@/constants/site";

export function AboutPageContent() {
  return (
    <>
      <PageHero
        label="About Me"
        title="Crafting Digital Excellence"
        description="Full Stack Developer building scalable SaaS and enterprise applications across travel, healthcare, airport services, and CRM."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerChildren className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat) => (
              <StaggerItem key={stat.label}>
                <Card className="group text-center transition-all hover:border-gold/25 hover:bg-white/[0.04]">
                  <motion.p
                    className="font-display text-3xl font-bold text-gold-shine text-glow-gold md:text-4xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="mt-2 text-sm text-white/50">{stat.label}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <FadeIn className="lg:col-span-2" direction="left">
              <div className="group relative mx-auto max-w-sm">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-gold/40 via-gold/10 to-transparent opacity-60 transition-opacity group-hover:opacity-100" />
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
                  <ProfileImage priority className="absolute inset-0" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-display text-3xl font-bold text-gold-shine text-glow-gold">
                      {SITE_CONFIG.yearsOfExperience}+
                    </p>
                    <p className="text-sm text-white/70">Years of Experience</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <div className="lg:col-span-3">
              <FadeIn delay={0.1}>
                <h2 className="mb-4 font-display text-2xl font-bold text-gold-shine text-glow-gold">
                  Professional Introduction
                </h2>
                <p className="whitespace-pre-line text-lg leading-relaxed text-white/65">
                  {ABOUT_BIO}
                </p>
              </FadeIn>
            </div>
          </div>

          <FadeIn delay={0.15} className="mt-20">
            <h2 className="mb-8 font-display text-2xl font-bold text-gold-shine text-glow-gold">
              Domains Worked In
            </h2>
            <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {DOMAIN_EXPERTISE.map((domain) => (
                <StaggerItem key={domain.id}>
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
          </FadeIn>

          <FadeIn delay={0.2} className="mt-20">
            <h2 className="mb-8 font-display text-2xl font-bold text-gold-shine text-glow-gold">
              Career Journey
            </h2>
            <StaggerChildren className="space-y-4">
              {ABOUT_TIMELINE.map((item) => (
                <StaggerItem key={`${item.year}-${item.title}`}>
                  <Card className="group transition-all hover:border-gold/20">
                    <div className="flex gap-5">
                      <span className="shrink-0 font-mono text-sm font-bold text-gold">
                        {item.year}
                      </span>
                      <div>
                        <h4 className="font-semibold text-white transition-colors group-hover:text-gold">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm text-white/50">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </FadeIn>
          <FadeIn delay={0.25} className="mt-20">
            <h2 className="mb-8 font-display text-2xl font-bold text-gold-shine text-glow-gold">Education</h2>
            <Card className="max-w-2xl">
              <h3 className="font-semibold text-white">{EDUCATION.degree}</h3>
              <p className="mt-1 text-gold/80">{EDUCATION.institution}</p>
              <p className="mt-2 text-sm text-white/50">
                CGPA: {EDUCATION.cgpa} · {EDUCATION.year}
              </p>
            </Card>
          </FadeIn>

          <FadeIn delay={0.3} className="mt-20">
            <h2 className="mb-8 font-display text-2xl font-bold text-gold-shine text-glow-gold">Key Achievements</h2>
            <StaggerChildren className="space-y-3">
              {ACHIEVEMENTS.map((achievement) => (
                <StaggerItem key={achievement}>
                  <Card className="flex items-start gap-3 transition-all hover:border-gold/20">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <p className="text-sm leading-relaxed text-white/60">{achievement}</p>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
