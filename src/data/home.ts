export const HERO_TECH_STACK = [
  "React.js",
  "Next.js",
  "TypeScript",
  "React Native",
  "Node.js",
] as const;

export const HERO_SUBTITLE =
  "Building scalable digital products across Travel Tech, Health Tech, Enterprise SaaS, and Airport Services.";

export const HOME_IMPACT_STATS = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Production Applications" },
  { value: 6, suffix: "", label: "Industry Domains" },
  { value: 100, suffix: "K+", label: "Transactions Processed" },
] as const;

export const FEATURED_PRODUCTS = [
  {
    slug: "tripare-ai",
    title: "Tripare AI",
    subtitle: "Travel Booking Platform",
    summary:
      "Flight and hotel booking with Redis-optimized search, payments, and multi-tenant dashboards.",
    technologies: ["React.js", "Next.js", "Node.js", "Redis", "AWS"],
  },
  {
    slug: "bettermint-health",
    title: "BetterMint Health",
    subtitle: "Health & Wellness Platform",
    summary:
      "Behaviour-driven fitness app with HealthKit, Google Fit, sleep monitoring, and habit-building.",
    technologies: ["React Native", "TypeScript", "HealthKit", "Google Fit"],
  },
  {
    slug: "daily-shepherd",
    title: "Daily Shepherd",
    subtitle: "Faith-Based Learning Platform",
    summary:
      "Scripture engagement through devotionals, podcast streaming, and community experiences.",
    technologies: ["React.js", "Next.js", "React Native", "Node.js"],
  },
  {
    slug: "airport-services-platform",
    title: "EATS Assist",
    subtitle: "Booking & Fulfillment System",
    summary:
      "Enterprise airport services for Lounge, Meet & Greet, Porter, and Wheelchair bookings.",
    technologies: ["React.js", "Next.js", "TypeScript", "Socket.IO"],
  },
] as const;

export const WHAT_I_BUILD = [
  {
    title: "Enterprise SaaS Platforms",
    description:
      "Multi-tenant, scalable B2B products with robust architecture and analytics.",
    icon: "layers",
  },
  {
    title: "Travel & Booking Systems",
    description:
      "High-performance search, payments, and real-time booking workflows.",
    icon: "plane",
  },
  {
    title: "Mobile Applications",
    description:
      "Cross-platform React Native apps with native health and device integrations.",
    icon: "smartphone",
  },
  {
    title: "Payment & Subscription Systems",
    description:
      "Fault-tolerant payments, IAP, subscriptions, and billing automation.",
    icon: "credit-card",
  },
  {
    title: "Real-Time Applications",
    description:
      "Socket.IO, Kafka, and event-driven systems for live data and tracking.",
    icon: "zap",
  },
  {
    title: "AI-Ready User Experiences",
    description:
      "Interfaces and architectures designed for intelligent, data-driven products.",
    icon: "sparkles",
  },
] as const;

export const CURRENTLY_BUILDING = {
  title: "EATS Assist",
  features: [
    "Booking Workflows",
    "Payment Integrations",
    "Real-Time Tracking",
    "Event-Driven Architecture",
    "Operational Dashboards",
  ],
} as const;

export const HOME_DOMAINS = [
  {
    title: "Travel Tech",
    description: "Booking platforms, fare optimization, and travel workflows.",
  },
  {
    title: "Health Tech",
    description: "Wellness apps, HealthKit integrations, and habit-building.",
  },
  {
    title: "Enterprise SaaS",
    description: "Scalable B2B products with multi-tenant architecture.",
  },
  {
    title: "Airport Services",
    description: "Lounge, Porter, and Meet & Greet fulfillment systems.",
  },
  {
    title: "CRM Platforms",
    description: "Lead pipelines, automation, and customer management.",
  },
] as const;

export const RECRUITER_VALUE = [
  {
    title: "Frontend Architecture",
    description:
      "Reusable component systems, design tokens, and scalable UI patterns.",
  },
  {
    title: "Scalable UI Systems",
    description:
      "Component libraries and patterns used across multiple product lines.",
  },
  {
    title: "Performance Optimization",
    description:
      "Code splitting, lazy loading, and Redis caching for 30–40% gains.",
  },
  {
    title: "Real-Time Applications",
    description: "Socket.IO, Kafka, and event-driven microservices at scale.",
  },
  {
    title: "Complex Product Development",
    description:
      "End-to-end ownership from architecture to production deployment.",
  },
  {
    title: "Cross-Functional Collaboration",
    description:
      "Working across teams to ship products in travel, health, and enterprise.",
  },
] as const;
