"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUp, Mail, Phone } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/SocialIcons";
import { FOOTER_TECH_STACK, NAV_LINKS, SOCIAL_LINKS } from "@/constants/navigation";
import { SITE_CONFIG } from "@/constants/site";
import { useLenis } from "@/providers/SmoothScrollProvider";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const iconMap = {
  linkedin: LinkedInIcon,
  mail: Mail,
  phone: Phone,
};

export function Footer() {
  const pathname = usePathname();
  const lenis = useLenis();

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.1 });
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.06] bg-black/80 py-16 backdrop-blur-xl">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl font-bold text-gold">
              {SITE_CONFIG.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/50">
              {SITE_CONFIG.title} — {SITE_CONFIG.tagline}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.filter((l) => l.href !== "/").map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm transition-colors hover:text-gold",
                      pathname === link.href ? "text-gold" : "text-white/50"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {SOCIAL_LINKS.map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white/50 transition-all hover:border-gold/40 hover:bg-gold/5 hover:text-gold"
                    aria-label={link.name}
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                );
              })}
            </div>
            <a
              href={SITE_CONFIG.resumeUrl}
              download
              className="mt-4 inline-flex items-center gap-1 text-sm text-gold/80 transition-colors hover:text-gold"
            >
              Download Resume →
            </a>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
              Built With
            </h4>
            <div className="flex flex-wrap gap-2">
              {FOOTER_TECH_STACK.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 text-xs text-white/40"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 md:flex-row">
          <p className="text-sm text-white/30">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all hover:border-gold/30 hover:text-gold"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
