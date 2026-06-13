"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILL_CATEGORIES, STATE_MANAGEMENT } from "@/data/skills";
import { FadeIn } from "@/components/animations/FadeIn";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(SKILL_CATEGORIES[0].id);
  const current = SKILL_CATEGORIES.find((c) => c.id === activeCategory)!;

  return (
    <section className="relative pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mb-12 flex flex-wrap justify-center gap-2">
          {SKILL_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "relative rounded-full px-5 py-2.5 text-sm font-medium transition-all",
                activeCategory === category.id
                  ? "text-black"
                  : "text-white/60 hover:text-white"
              )}
            >
              {activeCategory === category.id && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-gold"
                  layoutId="skill-tab"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category.title}</span>
            </button>
          ))}
        </FadeIn>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {current.skills.map((skill, i) => (
                <Card
                  key={skill.name}
                  className="group transition-all hover:border-gold/20 hover:bg-white/[0.05]"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-medium text-white group-hover:text-gold transition-colors">
                      {skill.name}
                    </span>
                    <motion.span
                      className="font-mono text-sm text-gold"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  <ProgressBar value={skill.level} delay={i * 0.1} />
                </Card>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <FadeIn delay={0.3} className="mt-16">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
            State Management & Data Fetching
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {STATE_MANAGEMENT.map((tool, i) => (
              <motion.span
                key={tool}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-mono text-white/55"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.25,
                }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.35} className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-6 opacity-40">
            {SKILL_CATEGORIES.flatMap((c) => c.skills)
              .filter(
                (skill, i, arr) =>
                  arr.findIndex((s) => s.name === skill.name) === i
              )
              .map((skill, i) => (
                <motion.span
                  key={skill.name}
                  className="text-sm font-mono text-white/60"
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                >
                  {skill.name}
                </motion.span>
              ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
