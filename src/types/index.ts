export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image?: string;
  images?: string[];
  imageFit?: "cover" | "contain";
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  impactMetrics: { label: string; value: string }[];
  category: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  startDate: string;
  endDate: string | "Present";
  achievements: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}
