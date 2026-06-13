"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useNavigationDirection } from "@/providers/NavigationProvider";

interface PageTransitionProps {
  children: ReactNode;
}

const forwardVariants = {
  initial: { opacity: 0, x: 48, filter: "blur(6px)" },
  animate: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    opacity: 0,
    x: -32,
    filter: "blur(4px)",
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const backwardVariants = {
  initial: { opacity: 0, x: -48, filter: "blur(6px)" },
  animate: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    opacity: 0,
    x: 32,
    filter: "blur(4px)",
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const direction = useNavigationDirection();
  const variants = direction === "forward" ? forwardVariants : backwardVariants;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
