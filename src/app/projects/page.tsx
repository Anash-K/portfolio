import type { Metadata } from "next";
import { ProjectsPageContent } from "@/components/pages/ProjectsPageContent";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects including Tripare AI, Airport Services Platform, CRM Platform, Daily Shepherd, Bettermint Health, and more.",
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
