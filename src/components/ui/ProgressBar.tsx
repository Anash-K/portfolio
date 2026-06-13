"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  className?: string;
  delay?: number;
}

export function ProgressBar({ value, className, delay = 0 }: ProgressBarProps) {
  return (
    <div className={cn("h-1.5 w-full overflow-hidden rounded-full bg-white/5", className)}>
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-gold-dark to-gold"
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay, ease: [0.25, 0.4, 0.25, 1] }}
      />
    </div>
  );
}
