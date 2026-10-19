/**
 * components/sections/index.ts
 *
 * Re-exports all section components from a single location.
 * This lets page.tsx import cleanly:
 *   import { HeroSection, AboutSection, ... } from "@/components/sections"
 * instead of one import per file.
 */
export { default as HeroSection }    from "./HeroSection";
export { default as AboutSection }   from "./AboutSection";
export { default as SkillsSection }  from "./SkillsSection";
export { default as ProjectsSection } from "./ProjectsSection";
export { default as ContactSection } from "./ContactSection";
