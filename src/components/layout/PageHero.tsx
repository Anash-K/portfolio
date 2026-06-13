"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
}

export function PageHero({ label, title, description, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08)_0%,transparent_55%)]" />
      <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.span
          className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.35em] text-gold/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {label}
        </motion.span>
        <motion.h1
          className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            className="mt-5 max-w-2xl text-lg text-white/55 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {description}
          </motion.p>
        )}
        <motion.div
          className="mt-10 h-px w-24 bg-gradient-to-r from-gold to-transparent"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </section>
  );
}
