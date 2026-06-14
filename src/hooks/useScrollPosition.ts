"use client";

import { useEffect, useState } from "react";
import { useLenis } from "@/providers/SmoothScrollProvider";

export function useScrollPosition(threshold = 20) {
  const lenis = useLenis();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const update = (scroll: number) => {
      setIsScrolled(scroll > threshold);
    };

    if (lenis) {
      update(lenis.scroll);
      const onScroll = ({ scroll }: { scroll: number }) => update(scroll);
      lenis.on("scroll", onScroll);
      return () => {
        lenis.off("scroll", onScroll);
      };
    }

    const onNativeScroll = () => update(window.scrollY);
    onNativeScroll();
    window.addEventListener("scroll", onNativeScroll, { passive: true });
    return () => window.removeEventListener("scroll", onNativeScroll);
  }, [lenis, threshold]);

  return isScrolled;
}
