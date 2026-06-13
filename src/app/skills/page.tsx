import type { Metadata } from "next";
import { SkillsPageContent } from "@/components/pages/SkillsPageContent";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills across frontend, backend, databases, cloud, and DevOps.",
};

export default function SkillsPage() {
  return <SkillsPageContent />;
}
