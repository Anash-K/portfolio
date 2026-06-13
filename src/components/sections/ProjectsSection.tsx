"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/ui/SocialIcons";
import { PROJECTS, FEATURED_PROJECT_SLUGS } from "@/data/projects";
import type { Project } from "@/types";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { ProjectCoverImage } from "@/components/ui/ProjectCoverImage";
import Link from "next/link";

function ProjectCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: (p: Project) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="group relative cursor-pointer"
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(project)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl transition-colors group-hover:border-gold/20">
        <ProjectCoverImage
          src={project.image}
          alt={`${project.title} preview`}
          title={project.title}
          fit={project.imageFit ?? "cover"}
          className="aspect-[16/10]"
        />
        <Badge variant="gold" className="absolute top-4 left-4 z-10">
          {project.category}
        </Badge>

        <div className="p-6">
          <div className="mb-2 flex items-start justify-between">
            <h3 className="text-xl font-semibold text-white group-hover:text-gold transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight
              size={20}
              className="text-white/30 transition-all group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
          <p className="mb-4 text-sm text-white/50 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-white/40"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-white/40">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <Modal isOpen={!!project} onClose={onClose} title={project.title}>
      <div className="space-y-6">
        <div className="group overflow-hidden rounded-xl border border-white/[0.06]">
          <ProjectCoverImage
            src={project.image}
            alt={`${project.title} preview`}
            title={project.title}
            fit={project.imageFit ?? "cover"}
            className="aspect-[16/9]"
          />
        </div>

        <div>
          <Badge variant="gold">{project.category}</Badge>
          <h2 className="mt-3 text-2xl font-bold text-white">{project.title}</h2>
          <p className="mt-2 text-white/60">{project.longDescription}</p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-white/40">
            Impact
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {project.impactMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center"
              >
                <p className="text-2xl font-bold text-gold">{metric.value}</p>
                <p className="mt-1 text-xs text-white/40">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-white/40">
            Features
          </h3>
          <ul className="grid gap-2 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-sm text-white/60"
              >
                <span className="h-1 w-1 rounded-full bg-gold" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-white/40">
            Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary">
                <ExternalLink size={16} />
                Live Demo
              </Button>
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary">
                <GitHubIcon className="h-4 w-4" />
                View Code
              </Button>
            </a>
          )}
          <Link href={`/projects/${project.slug}`}>
            <Button variant="ghost">Full Details →</Button>
          </Link>
        </div>
      </div>
    </Modal>
  );
}

export function ProjectsSection({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projects = featuredOnly
    ? PROJECTS.filter((p) => FEATURED_PROJECT_SLUGS.includes(p.slug as (typeof FEATURED_PROJECT_SLUGS)[number]))
    : PROJECTS;

  return (
    <section className="relative pb-24 md:pb-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.01] to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard
                project={project}
                onSelect={setSelectedProject}
              />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
