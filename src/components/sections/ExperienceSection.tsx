"use client";

import { motion } from "framer-motion";
import { EXPERIENCES } from "@/data/experience";
import { FadeIn } from "@/components/animations/FadeIn";
import { Badge } from "@/components/ui/Badge";

export function ExperienceSection() {
  return (
    <section className="relative pb-24 md:pb-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.01] to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, i) => (
              <FadeIn
                key={exp.id}
                delay={i * 0.15}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`relative flex flex-col gap-8 md:flex-row ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden md:block md:w-1/2" />

                  <motion.div
                    className="absolute left-8 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:left-1/2"
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="h-3 w-3 rounded-full border-2 border-gold bg-black" />
                    <div className="absolute h-6 w-6 rounded-full bg-gold/20 animate-ping" />
                  </motion.div>

                  <div className="ml-16 md:ml-0 md:w-1/2">
                    <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-xl transition-colors hover:border-gold/20">
                      <div className="mb-1 flex flex-wrap items-center gap-3">
                        <span className="font-mono text-sm text-gold">
                          {exp.duration}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        {exp.role}
                      </h3>
                      <p className="mb-4 text-gold/80">{exp.company}</p>

                      <ul className="mb-4 space-y-2">
                        {exp.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="flex items-start gap-2 text-sm text-white/60"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                            {achievement}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="default">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
