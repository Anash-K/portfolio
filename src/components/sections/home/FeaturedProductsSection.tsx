"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FEATURED_PRODUCTS } from "@/data/home";
import { getProjectBySlug } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCoverImage } from "@/components/ui/ProjectCoverImage";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

export function FeaturedProductsSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Portfolio"
          title="Products I've Built"
          description="Real-world platforms across travel, health, faith, and enterprise — built for scale and impact."
        />

        <StaggerChildren className="grid gap-6 md:grid-cols-2">
          {FEATURED_PRODUCTS.map((product) => {
            const project = getProjectBySlug(product.slug);

            return (
              <StaggerItem key={product.slug}>
                <motion.article
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:border-gold/25 hover:bg-white/[0.04]"
                  whileHover={{ y: -4 }}
                >
                  <ProjectCoverImage
                    src={project?.image}
                    alt={`${product.title} preview`}
                    title={product.title}
                    category={product.subtitle}
                    fit={project?.imageFit ?? "cover"}
                    className="aspect-[16/9]"
                  />
                  <span className="absolute top-4 left-4 z-10 rounded-full border border-gold/30 bg-black/50 px-3 py-1 text-xs font-medium text-gold backdrop-blur-sm">
                    {product.subtitle}
                  </span>

                  <div className="p-6">
                  <div className="mb-2 flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-gold">
                      {product.title}
                    </h3>
                    <ArrowUpRight
                      size={18}
                      className="text-white/30 transition-all group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-white/50">
                    {product.summary}
                  </p>
                  <div className="mb-5 flex flex-wrap gap-1.5">
                    {product.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-white/45"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/projects/${product.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-gold transition-colors hover:text-gold-light"
                  >
                    View Project
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </motion.article>
            </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
