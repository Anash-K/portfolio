import type { Metadata } from "next";
import { ExperiencePageContent } from "@/components/pages/ExperiencePageContent";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience as Full Stack Developer at Antino Labs, Silversky Technology, and Six Sigma Solutions.",
};

export default function ExperiencePage() {
  return <ExperiencePageContent />;
}
