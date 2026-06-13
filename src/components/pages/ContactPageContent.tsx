"use client";

import { PageHero } from "@/components/layout/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";

export function ContactPageContent() {
  return (
    <>
      <PageHero
        label="Get In Touch"
        title="Let's Build Something Great"
        description="Have a project in mind or want to collaborate? I'd love to hear from you."
      />
      <ContactSection />
    </>
  );
}
