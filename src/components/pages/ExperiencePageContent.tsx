"use client";

import { PageHero } from "@/components/layout/PageHero";
import { ExperienceSection } from "@/components/sections/ExperienceSection";

export function ExperiencePageContent() {
  return (
    <>
      <PageHero
        label="Career"
        title="Professional Experience"
        description="Building impactful products at leading technology companies."
      />
      <ExperienceSection />
    </>
  );
}
