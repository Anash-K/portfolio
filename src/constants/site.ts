export const SITE_CONFIG = {
  name: "Anash Khan",
  title: "Full Stack Developer",
  tagline:
    "Building scalable products and exceptional digital experiences.",
  description:
    "Full Stack Developer with 3+ years of experience building scalable SaaS and enterprise applications using React, Next.js, Node.js, Nest.js, and TypeScript.",
  email: "anash.khan.dev@gmail.com",
  phone: "+91 91060 93266",
  location: "Bangalore, India",
  yearsOfExperience: 3,
  resumeUrl: "/Anash_Khan_FullStack.pdf",
  profileImage: "/images/anash-khan.jpg",
  profileImageAlt: "Anash Khan — Full Stack Developer",
  url: "https://anashkhan.dev",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Nest.js",
    "Enterprise SaaS",
  ],
} as const;

export const LOADING_MESSAGES = [
  "Initializing Portfolio...",
  "Loading Experience...",
  "Preparing Showcase...",
] as const;

export const DOMAIN_EXPERTISE = [
  {
    id: "travel-tech",
    title: "Travel Tech",
    description:
      "Flight and hotel booking platforms with Redis-optimized search, payment workflows, and fare comparison.",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description:
      "Healthcare platform optimization reducing patient processing time and improving reporting performance.",
  },
  {
    id: "enterprise-saas",
    title: "Enterprise SaaS",
    description:
      "Scalable web and mobile applications with robust API integrations and real-time data synchronization.",
  },
  {
    id: "airport-services",
    title: "Airport Services",
    description:
      "Booking and fulfillment for Lounge Access, Meet & Greet, Porter, and Wheelchair services at airports.",
  },
  {
    id: "health-tech",
    title: "Health Tech",
    description:
      "Fitness and wellness apps with HealthKit/Google Fit integration, sleep monitoring, and behaviour-driven habit-building.",
  },
  {
    id: "faith-tech",
    title: "Faith Tech",
    description:
      "Scripture engagement platforms with devotionals, podcast streaming, and community-driven spiritual growth experiences.",
  },
] as const;

export const STATS = [
  { label: "Years Experience", value: "3+" },
  { label: "Apps Delivered", value: "10+" },
  { label: "Bookings / Month", value: "100K+" },
  { label: "Domains", value: "7" },
] as const;

export const EDUCATION = {
  degree: "B.E. Information Technology",
  institution: "Sal College of Engineering",
  cgpa: "7.2/10",
  year: "2023",
} as const;

export const ACHIEVEMENTS = [
  "Improved booking efficiency and cost savings with a smart fare comparison module in Tripare AI",
  "Reduced system failures in payment workflows through idempotent and fault-tolerant processing",
  "Reduced payment app crashes by 40% on 5 Keys Communication at Silversky Technology",
  "Improved CRM data management efficiency by 30% at Six Sigma Solutions",
] as const;
