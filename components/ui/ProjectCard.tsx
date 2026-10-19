import { ExternalLink, GitBranch } from "lucide-react";
import { type Project, type ProjectStatus } from "@/data/projects";
import { cn } from "@/lib/utils";

/* Status badge shown in top-right corner of card */
const statusLabel: Record<ProjectStatus, string> = {
  completed: "Completed",
  "in-progress": "In Progress",
  archived: "Archived",
};

const statusStyles: Record<ProjectStatus, string> = {
  completed: "bg-lime/10 text-lime border-lime/30",
  "in-progress": "bg-sky-400/10 text-sky-300 border-sky-400/30",
  archived: "bg-surface text-secondary border-border",
};

interface ProjectCardProps {
  project: Project;
  /** featured cards get a slightly more prominent left border accent */
  featured?: boolean;
}

/**
 * ProjectCard — displays a single project with title, description,
 * tech stack pills, status badge, and GitHub/live links.
 *
 * The entire card is NOT wrapped in an <a> tag because it has multiple
 * interactive links inside — wrapping them would break accessibility
 * (you can't nest interactive elements).
 */
export default function ProjectCard({ project, featured }: ProjectCardProps) {
  return (
    <article
      className={cn(
        // Base card styles
        "relative flex flex-col gap-4 rounded-card border border-border bg-surface p-6",
        // Smooth hover lift + glow ring
        "transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-card-hover hover:border-lime/20",
        // Featured accent: left border highlight
        featured && "border-l-2 border-l-lime/40"
      )}
    >
      {/* Status badge — top-right corner */}
      <span
        className={cn(
          "absolute top-4 right-4 text-xs font-medium px-2 py-0.5 rounded-full border",
          statusStyles[project.status]
        )}
      >
        {statusLabel[project.status]}
      </span>

      {/* Project title */}
      <h3 className="text-lg font-semibold text-primary pr-24 leading-snug">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-secondary text-sm leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Tech stack pills */}
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono px-2 py-0.5 rounded bg-muted text-secondary border border-border"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action links */}
      <div className="flex items-center gap-4 pt-1">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            className="flex items-center gap-1.5 text-sm text-secondary hover:text-lime transition-colors duration-200"
          >
            <GitBranch size={15} aria-hidden="true" />
            <span>Source</span>
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View live demo of ${project.title}`}
            className="flex items-center gap-1.5 text-sm text-secondary hover:text-lime transition-colors duration-200"
          >
            <ExternalLink size={15} aria-hidden="true" />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </article>
  );
}
