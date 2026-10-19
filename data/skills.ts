/**
 * data/skills.ts
 *
 * YOUR skills, sorted by status.
 *
 * status:
 *   "using"    → technologies you actively work with today
 *   "learning" → currently studying / building practice projects with
 *   "planned"  → on your roadmap but not started yet
 *
 * category (used for grouping/icons in the future):
 *   "language" | "framework" | "database" | "tool" | "devops"
 *
 * Edit freely — add, remove, or reorder entries.
 */

export type SkillStatus = "using" | "learning" | "planned";
export type SkillCategory =
  | "language"
  | "framework"
  | "database"
  | "tool"
  | "devops";

export interface Skill {
  name: string;
  status: SkillStatus;
  category: SkillCategory;
}

export const skills: Skill[] = [
  // ── Currently Using ────────────────────────────────────────────────────────
  { name: "HTML",         status: "using",    category: "language"  },
  { name: "CSS",          status: "using",    category: "language"  },
  { name: "JavaScript",   status: "using",    category: "language"  },
  { name: "TypeScript",   status: "using",    category: "language"  },
  { name: "React",        status: "using",    category: "framework" },
  { name: "Next.js",      status: "using",    category: "framework" },
  { name: "Tailwind CSS", status: "using",    category: "framework" },
  { name: "Git",          status: "using",    category: "tool"      },
  { name: "VS Code",      status: "using",    category: "tool"      },

  // ── Currently Learning ─────────────────────────────────────────────────────
  { name: "Node.js",      status: "learning", category: "framework" },
  { name: "Express",      status: "learning", category: "framework" },
  { name: "PostgreSQL",   status: "learning", category: "database"  },
  { name: "REST APIs",    status: "learning", category: "tool"      },

  // ── Planning to Learn ──────────────────────────────────────────────────────
  { name: "Docker",       status: "planned",  category: "devops"    },
  { name: "AWS",          status: "planned",  category: "devops"    },
  { name: "GraphQL",      status: "planned",  category: "tool"      },
  { name: "Prisma",       status: "planned",  category: "database"  },
];
