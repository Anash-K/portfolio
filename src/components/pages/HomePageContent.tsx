import { HeroSection } from "@/components/sections/HeroSection";
import { ImpactStatsSection } from "@/components/sections/home/ImpactStatsSection";
import { FeaturedProductsSection } from "@/components/sections/home/FeaturedProductsSection";
import { WhatIBuildSection } from "@/components/sections/home/WhatIBuildSection";
import { CurrentlyBuildingSection } from "@/components/sections/home/CurrentlyBuildingSection";
import { DomainExperienceSection } from "@/components/sections/home/DomainExperienceSection";
import { RecruiterSection } from "@/components/sections/home/RecruiterSection";

export function HomePageContent() {
  return (
    <>
      <HeroSection />
      <ImpactStatsSection />
      <FeaturedProductsSection />
      <WhatIBuildSection />
      <CurrentlyBuildingSection />
      <DomainExperienceSection />
      <RecruiterSection />
    </>
  );
}
