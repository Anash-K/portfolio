"use client";

import { PageHero } from "@/components/layout/PageHero";
import { SkillsSection } from "@/components/sections/SkillsSection";

export function SkillsPageContent() {
  return (
    <>
      <PageHero
        label="Expertise"
        title="Skills & Technologies"
        description="A comprehensive toolkit for building world-class, scalable applications."
      />
      <SkillsSection />
    </>
  );
}
