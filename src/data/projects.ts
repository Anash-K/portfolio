import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "1",
    slug: "tripare-ai",
    title: "Tripare AI",
    description:
      "Travel booking platform with flight and hotel search, payment workflows, and role-based multi-tenant dashboards.",
    longDescription:
      "Tripare AI is a travel booking platform featuring high-performance flight and hotel search optimized with Redis indexing. The platform includes payment, refund, and billing systems with Zoho Invoice integration, role-based multi-tenant dashboards, and a smart fare comparison module for improved booking efficiency and cost savings.",
    image: "/projects/tripare-ai.png",
    imageFit: "cover",
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "Redis",
      "AWS",
      "Temporal",
      "Zoho Invoice",
    ],
    features: [
      "Flight and hotel booking workflows with Redis-optimized search",
      "Smart fare comparison module for booking efficiency and cost savings",
      "Payment, refund, and billing with Zoho Invoice integration",
      "Role-based and multi-tenant user management with invite flow",
      "Idempotent and fault-tolerant payment processing",
    ],
    impactMetrics: [
      { label: "Query Latency", value: "-35%" },
      { label: "Booking Efficiency", value: "+30%" },
      { label: "Manual Billing Effort", value: "-40%" },
    ],
    category: "Travel Tech",
  },
  {
    id: "2",
    slug: "airport-services-platform",
    title: "Airport Services Platform (Adani Group)",
    description:
      "Enterprise booking platform for airport services including Lounge Access, Meet & Greet, Porter, and Wheelchair.",
    longDescription:
      "Built for Adani Group, this enterprise-scale platform handles booking and fulfillment workflows for airport services. It includes responsive customer and operational dashboards with real-time updates via Socket.IO, integrated payment systems, entitlement validation, and booking orchestration.",
    image: "/projects/tfs-platform.jpg",
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Socket.IO",
    ],
    features: [
      "Lounge Access, Meet & Greet, Porter, and Wheelchair service booking",
      "Customer and operational dashboards with real-time Socket.IO updates",
      "Payment and entitlement validation integration",
      "Booking orchestration for streamlined airport service operations",
    ],
    impactMetrics: [
      { label: "Service Types", value: "4" },
      { label: "Real-time Updates", value: "Socket.IO" },
      { label: "Platform", value: "Enterprise" },
    ],
    category: "Airport Services",
  },
  {
    id: "3",
    slug: "crm-platform",
    title: "CRM Platform",
    description:
      "Modern CRM with lead-to-client pipeline, Google Meet integration, and real-time notifications.",
    longDescription:
      "A scalable CRM system built with reusable components and advanced form workflows. Features include automated lead-to-client pipelines, Google Meet integration, real-time notifications, and centralized customer data management — improving operational efficiency and data management by 30%.",
    image: "/projects/crm-platform.jpg",
    technologies: [
      "Next.js",
      "React.js",
      "Zustand",
      "Nest.js",
      "PostgreSQL",
      "Prisma",
    ],
    features: [
      "Lead-to-client pipeline with automated reminders",
      "Google Meet integration for client meetings",
      "Real-time notifications and customer management dashboards",
      "Reusable component system with advanced form workflows",
      "Centralized customer data management",
    ],
    impactMetrics: [
      { label: "Data Efficiency", value: "+30%" },
      { label: "Pipeline", value: "Automated" },
      { label: "Integrations", value: "Google Meet" },
    ],
    category: "CRM",
  },
  {
    id: "4",
    slug: "rental-platform",
    title: "Vehicle Rental Platform",
    description:
      "Event-driven vehicle rental platform with real-time tracking, fault-tolerant payments, and dynamic pricing.",
    longDescription:
      "A scalable vehicle rental platform built with Kafka-based event-driven microservices. Features real-time vehicle tracking and booking via Socket.IO, a fault-tolerant payment system with webhooks and transactional outbox pattern, and a dynamic pricing engine with Redis caching — reducing response time by 30–40%.",
    image: "/projects/rental-platform.jpg",
    technologies: [
      "Node.js",
      "React.js",
      "Kafka",
      "RabbitMQ",
      "Socket.IO",
      "Redis",
      "Temporal",
    ],
    features: [
      "Real-time vehicle tracking and booking with Socket.IO",
      "Fault-tolerant payment system with webhooks and idempotency",
      "Transactional outbox pattern for reliable transactions",
      "Dynamic pricing engine with rule-based logic",
      "Kafka-based event-driven microservices architecture",
    ],
    impactMetrics: [
      { label: "Bookings / Month", value: "100K+" },
      { label: "Response Time", value: "-30-40%" },
      { label: "Architecture", value: "Event-Driven" },
    ],
    category: "Enterprise SaaS",
  },
  {
    id: "5",
    slug: "daily-shepherd",
    title: "Daily Shepherd",
    description:
      "A modern faith-tech platform for Scripture engagement through interactive learning, audio content, daily devotionals, and community experiences.",
    longDescription:
      "Daily Shepherd is a faith-tech platform that empowers users to engage with Scripture through Bible learning, daily devotionals, podcast streaming, and content discovery. The platform includes subscription management, search, reading history, sharing, comments, and engagement workflows — delivered through scalable, responsive mobile interfaces and reusable UI components for a seamless spiritual growth experience.",
    image: "/projects/daily-shepherd.png",
    imageFit: "contain",
    technologies: [
      "React.js",
      "React Native",
      "Next.js",
      "TypeScript",
      "Node.js",
    ],
    features: [
      "Bible learning, daily devotionals, and podcast streaming",
      "Interactive content discovery for spiritual growth",
      "Subscription management and user engagement workflows",
      "Search, reading history, sharing, and comments",
      "Scalable responsive mobile interfaces with reusable UI components",
    ],
    liveUrl: "https://www.dailyshepherd.me/",
    impactMetrics: [
      { label: "Content", value: "Bible + Podcast" },
      { label: "Engagement", value: "Comments & Share" },
      { label: "Platform", value: "Mobile + Web" },
    ],
    category: "Faith Tech",
  },
  {
    id: "6",
    slug: "bettermint-health",
    title: "Bettermint Health",
    description:
      "A health-tech platform helping users improve fitness consistency through personalized wellness programs, activity tracking, sleep monitoring, and behavioral health insights.",
    longDescription:
      "Bettermint Health is a behaviour psychology-powered fitness app built for busy users, focusing on consistency over extremes. The platform balances four pillars — Movement, Nutrition, Sleep, and Wellbeing — through personalized wellness journeys, lifestyle assessments, and incremental habit-building. Built with scalable React Native architecture for high-performance health tracking and long-term engagement.",
    image: "/projects/bettermint-health.png",
    imageFit: "contain",
    technologies: [
      "React Native",
      "TypeScript",
      "Node.js",
      "Google Fit",
      "Apple HealthKit",
    ],
    features: [
      "Google Fit and Apple HealthKit integration with background activity tracking",
      "Sleep monitoring and personalized wellness program workflows",
      "Subscription management, in-app purchases, reminders, and notifications",
      "Habit-building journeys powered by behavioural psychology",
      "Lifestyle assessment across Movement, Nutrition, Sleep, and Wellbeing",
      "Scalable React Native architecture with high-performance health analytics UI",
    ],
    liveUrl: "https://betterminthealth.com/",
    impactMetrics: [
      { label: "Wellness Pillars", value: "4" },
      { label: "Health Integrations", value: "Fit + HealthKit" },
      { label: "Platform", value: "iOS + Android" },
    ],
    category: "Health Tech",
  },
];

export const FEATURED_PROJECT_SLUGS = [
  "tripare-ai",
  "airport-services-platform",
  "crm-platform",
] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
