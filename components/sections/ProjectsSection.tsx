import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";

/**
 * ProjectsSection — renders all projects from data/projects.ts.
 *
 * Layout:
 *   - Featured projects render first (sorted by featured: true)
 *   - 1 column on mobile, 2 on tablet, 3 on desktop
 *
 * To add a new project: open data/projects.ts and add an object to the array.
 * No changes needed here.
 */
export default function ProjectsSection() {
  /*
    Sort so featured projects always appear first.
    .slice() creates a copy so we don't mutate the original array
    (mutating imported data is a bad practice).
  */
  const sorted = projects
    .slice()
    .sort((a, b) => Number(b.featured) - Number(a.featured));

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-t border-border"
    >
      <div className="section-container">
        <SectionHeading
          title="Projects"
          subtitle="Things I've built while learning. Real code, real repos."
        />

        {sorted.length === 0 ? (
          <p className="text-secondary text-sm">
            No projects yet — check back soon, or visit my{" "}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime hover:underline"
            >
              GitHub
            </a>
            .
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorted.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured={project.featured}
              />
            ))}
          </div>
        )}

        {/* Subtle CTA to GitHub for more work */}
        <p className="mt-10 text-sm text-ghost text-center">
          More experiments and work-in-progress projects live on{" "}
          <a
            href="https://github.com/christinapenheiro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lime hover:underline"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </section>
  );
}
