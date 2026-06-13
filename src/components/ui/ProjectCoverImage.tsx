"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectCoverImageProps {
  src?: string;
  alt: string;
  title: string;
  fit?: "cover" | "contain";
  className?: string;
  priority?: boolean;
}

export function ProjectCoverImage({
  src,
  alt,
  title,
  fit = "cover",
  className,
  priority = false,
}: ProjectCoverImageProps) {
  const isLogo = fit === "contain";

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        isLogo
          ? "bg-[#0a0a0a]"
          : "bg-gradient-to-br from-gold/10 via-black to-black",
        className
      )}
    >
      {src ? (
        <>
          {isLogo && (
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background:
                  title.toLowerCase().includes("bettermint")
                    ? "radial-gradient(ellipse at center, rgba(45, 120, 110, 0.35) 0%, transparent 70%)"
                    : "radial-gradient(ellipse at center, rgba(212, 175, 55, 0.12) 0%, transparent 70%)",
              }}
            />
          )}
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            className={cn(
              "transition-transform duration-700 ease-out group-hover:scale-[1.03]",
              isLogo
                ? "object-contain p-8 sm:p-10 md:p-12"
                : "object-cover object-top"
            )}
            quality={90}
          />
        </>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-5xl font-bold text-gold/15">
            {title.charAt(0)}
          </span>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.06] transition-colors duration-500 group-hover:ring-gold/20" />
    </div>
  );
}
