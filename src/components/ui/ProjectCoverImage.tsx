"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  PROJECT_IMAGE_PLACEHOLDER,
  hasProjectImage,
} from "@/lib/project-images";

interface ProjectCoverImageProps {
  src?: string | null;
  alt: string;
  title: string;
  category?: string;
  fit?: "cover" | "contain";
  className?: string;
  priority?: boolean;
}

function ProjectCoverPlaceholder({
  title,
  category,
}: {
  title: string;
  category?: string;
}) {
  return (
    <div className="absolute inset-0">
      <Image
        src={PROJECT_IMAGE_PLACEHOLDER}
        alt=""
        fill
        unoptimized
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
        className="object-cover"
        aria-hidden
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

      {(category || title) && (
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
          {category && (
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold/70">
              {category}
            </p>
          )}
          <p className="font-display text-lg font-semibold text-white/90 sm:text-xl">
            {title}
          </p>
        </div>
      )}
    </div>
  );
}

export function ProjectCoverImage({
  src,
  alt,
  title,
  category,
  fit = "cover",
  className,
  priority = false,
}: ProjectCoverImageProps) {
  const [imageError, setImageError] = useState(false);
  const usePlaceholder = !hasProjectImage(src) || imageError;

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[#0a0a0a]",
        className
      )}
    >
      {usePlaceholder ? (
        <ProjectCoverPlaceholder title={title} category={category} />
      ) : (
        <Image
          src={src!.trim()}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          className={cn(
            "transition-transform duration-700 ease-out group-hover:scale-[1.03]",
            fit === "contain"
              ? "object-contain p-8 sm:p-10"
              : "object-cover object-top"
          )}
          quality={90}
          onError={() => setImageError(true)}
        />
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.06] transition-colors duration-500 group-hover:ring-gold/20" />
    </div>
  );
}
