"use client";

import { PageHero } from "@/components/layout/PageHero";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

export function ProjectsPageContent() {
  return (
    <>
      <PageHero
        label="Portfolio"
        title="Projects"
        description="Applications built with precision, performance, and product thinking — from enterprise SaaS to faith-tech platforms."
      />
      <ProjectsSection />
    </>
  );
}
