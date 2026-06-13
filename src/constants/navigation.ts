import type { NavLink, SocialLink } from "@/types";
import { SITE_CONFIG } from "@/constants/site";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export const ROUTE_ORDER = NAV_LINKS.map((link) => link.href);

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/anash-khan",
    icon: "linkedin",
  },
  {
    name: "Email",
    href: `mailto:${SITE_CONFIG.email}`,
    icon: "mail",
  },
  {
    name: "Phone",
    href: "tel:+919106093266",
    icon: "phone",
  },
];

export const FOOTER_TECH_STACK = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
] as const;
