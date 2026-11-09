/**
 * data/projects.ts
 *
 * This is YOUR content file. Edit the objects below to reflect your real projects.
 * No code knowledge needed — just update the strings and booleans.
 *
 * Fields:
 *   id          → unique slug used as a React key (lowercase, hyphenated)
 *   title       → project name shown on the card
 *   description → 2–3 sentence summary of what the project does and why
 *   techStack   → array of technology names shown as pills
 *   githubUrl   → optional link to the GitHub repo (remove the line if private)
 *   liveUrl     → optional link to a deployed demo (remove the line if none)
 *   status      → "completed" | "in-progress" | "archived"
 *   featured    → true = shown first and slightly larger on desktop
 */

export type ProjectStatus = "completed" | "in-progress" | "archived";

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: ProjectStatus;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "booknook",
    title: "BookNook",
    description:
      "BookNook is an online community library platform where readers can explore books, share their favorite reads, borrow books, and manage their personal book collections. The platform provides a simple and user-friendly experience for discovering and borrowing books.",
    techStack: [
      "NextJs",
      "React",
      "ExpressJs",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "BetterAuth",
      "MongoDB",
      "HTML",
    ],
    githubUrl: "https://github.com/christinapenheiro/booknook",
    liveUrl: "https://booknook-blond.vercel.app",
    status: "completed",
    featured: true,
  },
  {
    id: "market-price-tracker",
    title: "Market Price Tracker",
    description:
      "A real-time market price tracking application that monitors and displays live commodity and stock prices. " +
      "Built to help users stay informed on price fluctuations with a clean, data-driven interface.",
    techStack: [
      "NextJs",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "BetterAuth",
      "MongoDB",
      "HTML",
    ],
    githubUrl: "https://github.com/christinapenheiro/market-price-tracker",
    liveUrl: "https://market-price-tracker-two.vercel.app/",
    status: "completed",
    featured: true,
  },
  {
    id: "fitlog-nextjs",
    title: "FitLog — Fitness Tracker",
    description:
      "A Next.js-powered fitness logging app that allows users to track workouts, sets, reps, and personal records. " +
      "Demonstrates full-stack data flow with persistent state management and a modern UI.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML"],
    githubUrl:
      "https://github.com/christinapenheiro/fitlog-project-using-next.js",
    liveUrl: "https://fitlog-project.vercel.app/",
    status: "completed",
    featured: false,
  },
];
