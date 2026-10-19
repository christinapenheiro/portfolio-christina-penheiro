"use client";
/*
  'use client' is needed here because Next.js 16 does not allow new Date()
  during server-side prerendering (the value could vary per render).
  Making the Footer a Client Component evaluates the year in the browser,
  which is stable and correct.
*/

import { useState, useEffect } from "react";
import { GitBranch, Link2, Mail } from "lucide-react";
import { socialLinks } from "@/data/social";

/* Map icon string names → actual Lucide components */
const iconMap = {
  GitBranch,
  Link2,
  Mail,
  X: Mail,     // fallback if Twitter/X link added later
  Globe: Mail, // fallback
} as const;

export default function Footer() {
  /*
    new Date() cannot run during prerendering even in a Client Component.
    We initialise year as null and populate it in useEffect (browser only).
    During prerender the year is simply omitted; after hydration it appears.
  */
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => { setYear(new Date().getFullYear()); }, []);

  return (
    <footer
      role="contentinfo"
      className="border-t border-border"
    >
      <div className="section-container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-sm text-ghost">
          © {year}{" "}
          <span className="text-secondary">Christina Penheiro</span>.
          {" "}Built with Next.js & Tailwind CSS.
        </p>

        {/* Social links */}
        <ul role="list" className="flex items-center gap-4">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={link.label}
                  className="text-ghost hover:text-lime transition-colors duration-200"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
