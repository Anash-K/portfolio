import type { Metadata } from "next";
import { AboutPageContent } from "@/components/pages/AboutPageContent";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn about Anash Khan — Full Stack Developer with 3+ years building SaaS and enterprise applications in Bangalore, India.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
