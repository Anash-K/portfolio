/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect, type ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "@/components/loading/LoadingScreen";

interface LoadingProviderProps {
  children: ReactNode;
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("portfolio-loaded");
    if (hasVisited) {
      setIsLoading(false);
      setShowContent(true);
    }
  }, []);

  const handleComplete = () => {
    sessionStorage.setItem("portfolio-loaded", "true");
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={handleComplete} />}
      </AnimatePresence>
      {showContent && children}
    </>
  );
}
