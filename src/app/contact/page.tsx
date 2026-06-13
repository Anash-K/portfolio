import type { Metadata } from "next";
import { ContactPageContent } from "@/components/pages/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Anash Khan for collaborations and opportunities.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
