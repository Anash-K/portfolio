"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  PROJECT_IMAGE_PLACEHOLDER,
  hasProjectImage,
} from "@/lib/project-images";

const DEFAULT_SIZES =
  "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";

interface ProjectCoverImageProps {
  src?: string | null;
  images?: string[];
  alt: string;
  title: string;
  category?: string;
  fit?: "cover" | "contain";
  className?: string;
  priority?: boolean;
  sizes?: string;
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
  images,
  alt,
  title,
  category,
  fit = "cover",
  className,
  priority = false,
  sizes = DEFAULT_SIZES,
}: ProjectCoverImageProps) {
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [srcFailed, setSrcFailed] = useState(false);

  // 1. Filter out images that have failed to load
  const validImagesList = (images || []).filter(
    (img) => !failedImages.has(img) && hasProjectImage(img),
  );

  // 2. Determine if we should use the array (slider/single) or fallback to src
  const useArray = images && images.length > 0 && validImagesList.length > 0;

  // 3. Determine current mode
  const isSlider = useArray && validImagesList.length > 1;

  // 4. Determine current image to display
  let currentSrc = "";
  if (useArray) {
    const safeIndex = currentIndex % validImagesList.length;
    currentSrc = validImagesList[safeIndex];
  } else {
    currentSrc = src || "";
  }

  // 5. Check if we need to show placeholder
  const usePlaceholder =
    !useArray && (!hasProjectImage(currentSrc) || srcFailed);

  // 6. Handle auto-slide
  useEffect(() => {
    if (!isSlider) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % validImagesList.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isSlider, validImagesList.length]);

  const handleImageError = () => {
    if (useArray) {
      setFailedImages((prev) => {
        const next = new Set(prev);
        next.add(currentSrc);
        return next;
      });
    } else {
      setSrcFailed(true);
    }
  };

  return (
    <div className={cn("relative overflow-hidden bg-[#0a0a0a]", className)}>
      {usePlaceholder ? (
        <ProjectCoverPlaceholder title={title} category={category} />
      ) : isSlider ? (
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSrc}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={currentSrc.trim()}
              alt={alt}
              fill
              priority={priority || currentIndex === 0}
              sizes={sizes}
              unoptimized={useArray}
              className={cn(
                "transition-transform duration-700 ease-out group-hover:scale-[1.03]",
                fit === "contain"
                  ? "object-contain p-8 sm:p-10"
                  : "object-cover object-top",
              )}
              quality={90}
              onError={handleImageError}
            />
          </motion.div>
        </AnimatePresence>
      ) : (
        <Image
          src={currentSrc.trim()}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          unoptimized={useArray}
          className={cn(
            "transition-transform duration-700 ease-out group-hover:scale-[1.03]",
            fit === "contain"
              ? "object-contain p-8 sm:p-10"
              : "object-cover object-top",
          )}
          quality={90}
          onError={handleImageError}
        />
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.06] transition-colors duration-500 group-hover:ring-gold/20" />
    </div>
  );
}
