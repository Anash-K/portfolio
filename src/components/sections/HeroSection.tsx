"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";
import { TypingEffect } from "@/components/animations/TypingEffect";
import { MagneticButton } from "@/components/effects/MagneticButton";
import { FloatingParticles } from "@/components/effects/FloatingParticles";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/constants/site";
import { HERO_SUBTITLE, HERO_TECH_STACK } from "@/data/home";

const GlobeCanvas = dynamic(
  () => import("@/components/hero/GlobeCanvas").then((m) => m.GlobeCanvas),
  { ssr: false, loading: () => <div className="h-[320px] lg:h-[520px]" /> }
);

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <FloatingParticles />
      <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.05] via-transparent to-black" />
      <div className="absolute top-1/4 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-gold/[0.03] blur-[150px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div className="order-2 lg:order-1">
          <motion.p
            className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-gold/70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Full Stack Engineer · Product Builder
          </motion.p>

          <h1 className="mb-4 text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
            <TextReveal text="Hi, I'm" delay={0.3} as="span" className="font-display font-medium text-premium-shine text-glow-white" />
            <br />
            <TextReveal text={SITE_CONFIG.name} delay={0.5} as="span" className="font-display font-bold text-gold-shine text-glow-gold" />
          </h1>

          <motion.p
            className="mb-3 font-display text-2xl font-bold text-white/90 md:text-3xl lg:text-4xl text-premium-shine text-glow-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
          >
            Software Developer
          </motion.p>

          <motion.div
            className="mb-6 h-8 text-lg font-mono md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.95 }}
          >
            <TypingEffect words={HERO_TECH_STACK} />
          </motion.div>

          <motion.p
            className="mb-8 max-w-lg text-base leading-relaxed text-white/55 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            {HERO_SUBTITLE}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.6 }}
          >
            <MagneticButton>
              <Link href="/projects">
                <Button variant="primary" size="lg" className="group">
                  Explore My Work
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </MagneticButton>
            <MagneticButton>
              <a href={SITE_CONFIG.resumeUrl} download>
                <Button variant="secondary" size="lg">
                  <Download size={18} />
                  Download Resume
                </Button>
              </a>
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          className="order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <GlobeCanvas />
        </motion.div>
      </div>
    </section>
  );
}
