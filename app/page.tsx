/*
  app/page.tsx — The Home Page

  This is a Server Component (no 'use client').
  It simply assembles all the section components in the correct order.
  The layout shell (Navbar + Footer) is added in layout.tsx.

  To add, remove, or reorder sections:
  - Import the component
  - Add/move/remove its <SectionComponent /> line below
  - That's it — no other changes needed
*/

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      {/* Sticky navigation bar */}
      <Navbar />

      {/* ── Page sections in reading order ──────────────────────────────── */}
      <main id="main-content" aria-label="Portfolio content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
