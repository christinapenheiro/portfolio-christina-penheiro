import { skills, type SkillStatus } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBadge from "@/components/ui/SkillBadge";

/*
  Each tier has:
  - key:         maps to SkillStatus in data/skills.ts
  - label:       displayed heading for the group
  - description: honest one-liner explaining what this tier means
  - indicatorClass: the color of the small dot beside the heading
*/
const tiers: {
  key: SkillStatus;
  label: string;
  description: string;
  indicatorClass: string;
}[] = [
  {
    key: "using",
    label: "Currently Using",
    description: "Technologies I actively write code with on a regular basis.",
    indicatorClass: "bg-lime",
  },
  {
    key: "learning",
    label: "Currently Learning",
    description: "Technologies I'm actively studying and building practice projects with.",
    indicatorClass: "bg-sky-400",
  },
  {
    key: "planned",
    label: "Planning to Learn",
    description: "On my roadmap — I haven't started these yet but they're next.",
    indicatorClass: "bg-ghost",
  },
];

/**
 * SkillsSection — renders skills from data/skills.ts grouped into three tiers.
 *
 * The three-tier model is the honest way to present skills:
 * recruiters and engineers can immediately see where you stand,
 * rather than a vague star-rating system.
 */
export default function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-t border-border"
    >
      <div className="section-container">
        <SectionHeading
          title="Skills"
          subtitle="An honest breakdown of where I am in my learning journey."
        />

        <div className="space-y-10">
          {tiers.map(({ key, label, description, indicatorClass }) => {
            const tierSkills = skills.filter((s) => s.status === key);
            if (tierSkills.length === 0) return null;

            return (
              <div key={key}>
                {/* Tier heading */}
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`w-2 h-2 rounded-full ${indicatorClass}`}
                    aria-hidden="true"
                  />
                  <h3 className="text-sm font-semibold text-primary uppercase tracking-widest">
                    {label}
                  </h3>
                </div>
                <p className="text-xs text-ghost mb-4 font-mono">{description}</p>

                {/* Badge grid */}
                <div
                  className="flex flex-wrap gap-2"
                  role="list"
                  aria-label={`${label} skills`}
                >
                  {tierSkills.map((skill) => (
                    <div key={skill.name} role="listitem">
                      <SkillBadge name={skill.name} status={skill.status} />
                    </div>
                  ))}
                </div>

                {/* Divider between tiers (not after the last one) */}
                {key !== "planned" && (
                  <hr className="mt-10 border-border" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
