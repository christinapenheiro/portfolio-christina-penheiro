import { type SkillStatus } from "@/data/skills";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  status: SkillStatus;
}

/*
  Status → visual style mapping.
  Each status gets its own color scheme so the three tiers are instantly
  distinguishable at a glance.
*/
const statusStyles: Record<SkillStatus, string> = {
  using:
    "bg-lime/10 text-lime border border-lime/30 hover:bg-lime/20",
  learning:
    "bg-sky-400/10 text-sky-300 border border-sky-400/30 hover:bg-sky-400/20",
  planned:
    "bg-surface text-secondary border border-border hover:border-secondary",
};

/**
 * SkillBadge — a small pill representing a single technology.
 * Color encodes the skill status (using / learning / planned).
 */
export default function SkillBadge({ name, status }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
        "font-mono transition-colors duration-200 cursor-default select-none",
        statusStyles[status]
      )}
    >
      {name}
    </span>
  );
}
