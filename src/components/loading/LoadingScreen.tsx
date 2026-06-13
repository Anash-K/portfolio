"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LOADING_MESSAGES } from "@/constants/site";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const duration = 2800;
    const interval = 16;
    const steps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const newProgress = Math.min((current / steps) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 30) setMessageIndex(1);
      if (newProgress >= 65) setMessageIndex(2);

      if (current >= steps) {
        clearInterval(timer);
        setIsExiting(true);
        setTimeout(onComplete, 700);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_60%)]" />

      <div className="relative flex w-full max-w-sm flex-col items-center justify-center px-6">
        <motion.div
          className="relative mb-10"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative flex h-24 w-24 items-center justify-center">
            <motion.div
              className="absolute inset-0 rounded-full border border-gold/25"
              animate={{ rotate: 360, scale: [1, 1.05, 1] }}
              transition={{
                rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
            />
            <motion.div
              className="absolute inset-3 rounded-full border border-gold/40"
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-0 rounded-full bg-gold/10 blur-xl"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="relative font-display text-3xl font-bold tracking-wider text-gold">
              AK
            </span>
          </div>
        </motion.div>

        <div className="mb-10 h-7 w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={messageIndex}
              className="text-center text-xs font-medium uppercase tracking-[0.35em] text-white/50 sm:text-sm"
              initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              {LOADING_MESSAGES[messageIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="w-full max-w-xs">
          <div className="relative h-[3px] overflow-hidden rounded-full bg-white/[0.06]">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <motion.p
            className="mt-4 text-center font-mono text-sm tabular-nums text-gold/70"
            key={Math.round(progress)}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
          >
            {Math.round(progress)}%
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
