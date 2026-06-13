"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { RECRUITER_VALUE } from "@/data/home";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/effects/MagneticButton";

export function RecruiterSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="For Recruiters"
          title="Why Companies Hire Me"
          description="Proven ability to ship complex products that drive measurable business impact."
          align="center"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RECRUITER_VALUE.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.06}>
              <motion.div
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-xl transition-all hover:border-gold/20"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gold/[0.04] blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
                <span className="mb-3 inline-block font-mono text-xs text-gold/60">
                  0{i + 1}
                </span>
                <h3 className="mb-2 font-semibold text-white transition-colors group-hover:text-gold">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {item.description}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-16 text-center">
          <p className="mb-6 text-lg text-white/60">
            Ready to build something impactful together?
          </p>
          <MagneticButton>
            <Link href="/contact">
              <Button variant="primary" size="lg" className="group">
                Let&apos;s Connect
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </MagneticButton>
        </FadeIn>
      </div>
    </section>
  );
}
