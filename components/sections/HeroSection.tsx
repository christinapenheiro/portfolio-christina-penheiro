import Image from "next/image";
import { ArrowDown, GitBranch, Mail } from "lucide-react";
import { contactEmail, socialLinks } from "@/data/social";
import Link from "next/link";

/**
 * HeroSection — the very first thing visitors see.
 *
 * Structure:
 *   - Animated grid background (CSS only)
 *   - Two-column layout: intro text (left) + profile image (right)
 *   - Eyebrow label ("Available for opportunities")
 *   - Large display name with gradient
 *   - Tagline / value proposition
 *   - CTA buttons (stack on mobile, row on sm+)
 *   - Scroll indicator arrow
 *
 * This is a Server Component (no 'use client') because it has
 * no interactivity — everything is static HTML + CSS animations.
 */
export default function HeroSection() {
  const githubLink = socialLinks.find((l) => l.icon === "GitBranch");

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Background: subtle lime grid pattern ── */}
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />
      {/* Vignette overlay — fades the grid at edges for depth */}
      <div
        className="absolute inset-0 bg-radial-fade"
        aria-hidden="true"
      />
      {/* Ambient lime glow — top center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]
                    bg-lime/5 blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="section-container relative z-10 pt-20 md:pt-28 pb-24 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">

          {/* ── Left: Text content ── */}
          <div className="flex-1 min-w-0">
            {/* Eyebrow label */}
            <div
              className="inline-flex items-center gap-2 mb-6
                         text-xs font-mono font-medium uppercase tracking-widest
                         text-lime border border-lime/20 bg-lime/5
                         px-3 py-1.5 rounded-full"
              style={{ animation: "fade-up 0.5s ease 0.1s both" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse-slow" aria-hidden="true" />
              Available for opportunities
            </div>

            {/* Display name */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight
                         leading-none mb-6"
              style={{ animation: "fade-up 0.6s ease 0.2s both" }}
            >
              <span className="text-primary">Hi, I&apos;m</span>
              <br />
              {/* text-gradient applies the off-white → lime gradient */}
              <span className="text-gradient">Christina Penheiro</span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg sm:text-xl text-secondary max-w-xl mb-4 leading-relaxed"
              style={{ animation: "fade-up 0.6s ease 0.3s both" }}
            >
              Aspiring{" "}
              <strong className="text-primary font-semibold">
                Full-Stack Web Developer
              </strong>{" "}
              crafting modern, accessible web experiences with React and Next.js.
            </p>

            {/* Honest value statement — no fake claims */}
            <p
              className="text-sm text-ghost max-w-lg mb-10"
              style={{ animation: "fade-up 0.6s ease 0.35s both" }}
            >
              Currently learning the full stack. Building in public. Always improving.
            </p>

            {/* CTA buttons — stack vertically on mobile, row on sm+ */}
            <div
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
              style={{ animation: "fade-up 0.6s ease 0.45s both" }}
            >
              {/* Primary CTA: scrolls to #projects via CSS scroll-behavior: smooth */}
              <a
                href="#projects"
                id="hero-view-work-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg
                           bg-lime text-base font-semibold text-black
                           hover:bg-lime-dim transition-colors duration-200
                           focus-visible:outline-2 focus-visible:outline-lime"
              >
                View My Work
              </a>

              {/* Secondary CTA: open email */}
              <a
                href={`mailto:${contactEmail}`}
                id="hero-contact-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg
                           border border-border text-primary text-sm font-medium
                           hover:border-lime/40 hover:text-lime transition-colors duration-200"
              >
                <Mail size={16} aria-hidden="true" />
                Get In Touch
              </a>

              {githubLink && (
                <Link
                  href="/"
                  id="hero-github-btn"
                  rel="noopener noreferrer"
                  aria-label="View GitHub profile"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg
                             border border-border text-secondary text-sm font-medium
                             hover:border-lime/40 hover:text-lime transition-colors duration-200"
                >
                  
                  Download Resume
                </Link>
              )}
            </div>
          </div>

          {/* ── Right: Profile image ── */}
          <div
            className="flex-shrink-0 flex justify-center"
            style={{ animation: "fade-in 0.8s ease 0.3s both" }}
          >
            <div className="relative">
              {/* Lime ambient glow behind image */}
              <div
                className="absolute inset-0 rounded-full bg-lime/10 blur-2xl scale-110 pointer-events-none"
                aria-hidden="true"
              />
              {/* Gradient ring border */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72
                              rounded-full p-[3px] bg-gradient-to-br from-lime/60 via-lime/20 to-transparent">
                <div className="w-full h-full rounded-full overflow-hidden bg-surface">
                  <Image
                    src="/profile.png"
                    alt="Christina Penheiro — Full-Stack Developer"
                    width={288}
                    height={288}
                    priority
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2
                   flex flex-col items-center gap-1 text-ghost"
        style={{ animation: "fade-in 1s ease 1.2s both" }}
        aria-hidden="true"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </div>
    </section>
  );
}

