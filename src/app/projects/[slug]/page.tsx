import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/ui/SocialIcons";
import { getProjectBySlug, PROJECTS } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/layout/PageHero";
import { ProjectCoverImage } from "@/components/ui/ProjectCoverImage";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <>
      <PageHero label={project.category} title={project.title} description={project.description} />
      <article className="mx-auto max-w-4xl px-6 pb-24 lg:px-8">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-gold"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        <div className="group mb-10 overflow-hidden rounded-2xl border border-white/[0.06]">
          <ProjectCoverImage
            src={project.image}
            alt={`${project.title} preview`}
            title={project.title}
            category={project.category}
            fit={project.imageFit ?? "cover"}
            className="aspect-[16/9] md:aspect-[21/9]"
            priority
          />
        </div>

        <p className="text-lg leading-relaxed text-white/60">{project.longDescription}</p>

        <div className="mt-10 grid grid-cols-3 gap-4">
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

        <div className="mt-12">
          <h2 className="mb-4 text-xl font-semibold text-white">Features</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-white/60">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="mb-4 text-xl font-semibold text-white">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
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
        </div>
      </article>
    </>
  );
}
