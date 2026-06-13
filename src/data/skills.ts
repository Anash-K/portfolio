import type { SkillCategory } from "@/types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "React Native", level: 80 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Node.js", level: 92 },
      { name: "Nest.js", level: 88 },
      { name: "Express.js", level: 88 },
      { name: "REST APIs", level: 92 },
      { name: "GraphQL", level: 78 },
      { name: "Socket.IO", level: 85 },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "Redis", level: 90 },
      { name: "Prisma", level: 85 },
      { name: "Sequelize", level: 78 },
    ],
  },
  {
    id: "cloud",
    title: "Cloud",
    skills: [
      { name: "AWS EC2", level: 82 },
      { name: "AWS Lambda", level: 80 },
      { name: "AWS S3", level: 85 },
      { name: "Azure Functions", level: 78 },
      { name: "Firebase", level: 82 },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    skills: [
      { name: "Docker", level: 82 },
      { name: "CI/CD", level: 85 },
      { name: "Kafka", level: 88 },
      { name: "RabbitMQ", level: 85 },
      { name: "Temporal", level: 80 },
    ],
  },
];

export const STATE_MANAGEMENT = [
  "Redux",
  "Context API",
  "Zustand",
  "TanStack Query",
  "Axios",
] as const;
