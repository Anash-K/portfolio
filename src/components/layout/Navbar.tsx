"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";
import { SITE_CONFIG } from "@/constants/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled || isMobileOpen
            ? "border-b border-white/[0.06] bg-black/70 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
            : "bg-black/20 py-5 backdrop-blur-md"
        )}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link
            href="/"
            className="group relative font-display text-xl font-bold text-gold"
          >
            <span className="relative z-10">
              {SITE_CONFIG.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
            <span className="absolute -inset-2 rounded-lg bg-gold/0 transition-colors group-hover:bg-gold/5" />
          </Link>

          <ul className="hidden items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.03] p-1 backdrop-blur-xl md:flex">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative block rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                      active
                        ? "text-black"
                        : "text-white/55 hover:text-white"
                    )}
                  >
                    {active && (
                      <motion.span
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light shadow-[0_0_20px_rgba(212,175,55,0.25)]"
                        layoutId="nav-pill"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:border-gold/30 hover:text-gold md:hidden"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              className="fixed inset-x-4 top-20 z-40 overflow-hidden rounded-2xl border border-white/10 bg-black/90 shadow-2xl backdrop-blur-2xl md:hidden"
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <nav className="flex flex-col p-4">
                {NAV_LINKS.map((link, i) => {
                  const active = isActive(link.href);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-colors",
                          active
                            ? "bg-gold/10 text-gold"
                            : "text-white/70 hover:bg-white/5 hover:text-white"
                        )}
                      >
                        {link.label}
                        {active && (
                          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
