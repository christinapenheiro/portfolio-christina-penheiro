"use client";
/*
  'use client' is required because:
  - We use useState (for the mobile menu toggle)
  - We use useEffect (to detect scroll position for the border/shadow)

  In Next.js App Router, components are Server Components by default.
  Adding 'use client' opts this component into the client-side React model,
  which enables hooks and browser APIs.
*/

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact"  },
] as const;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  /*
    scrolled: becomes true once the user scrolls down 10px.
    Used to show/hide the bottom border, giving a subtle depth cue
    that the navbar is floating above content.
  */
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /*
    Close mobile menu when window resizes to desktop width.
    Prevents the menu from staying open if user rotates device.
  */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    /*
      IMPORTANT: position:fixed + inset-x-0 + top-0 pins this to the very top
      of the viewport on ALL screen sizes. We use bg-[#0a0a0a]/90 (solid tinted
      bg, no backdrop-filter) because backdrop-filter:blur bleeds visually on
      mobile Safari/Chrome and was covering the hero profile image.
    */
    <header
      role="banner"
      className={cn(
        "fixed top-0 inset-x-0 z-50",
        "bg-[#0a0a0a]/95 border-b",
        "transition-all duration-300",
        scrolled
          ? "border-[#252525] shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          : "border-transparent"
      )}
    >
      {/* ── Main nav bar row ── */}
      <div className="w-full px-5 sm:px-8 lg:px-12 flex items-center justify-between h-12">

        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="text-primary font-bold text-base tracking-tight
                     hover:text-lime transition-colors duration-200 shrink-0"
          aria-label="Go to top of page"
        >
          <span className="text-lime">&lt;</span>
          DEV
          <span className="text-lime">/&gt;</span>
        </a>

        {/* Desktop nav links */}
        <ul role="list" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "text-sm text-secondary hover:text-primary",
                  "relative pb-0.5 transition-colors duration-200",
                  "after:absolute after:bottom-0 after:left-0",
                  "after:h-px after:w-0 after:bg-lime",
                  "after:transition-[width] after:duration-300",
                  "hover:after:w-full"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger button */}
        <button
          id="mobile-menu-toggle"
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden flex items-center justify-center
                     w-8 h-8 -mr-1 text-secondary hover:text-primary
                     transition-colors duration-200"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* ── Mobile dropdown ── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation"
        className={cn(
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out",
          "border-t border-[#252525] bg-[#0a0a0a]",
          mobileOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 border-t-0"
        )}
      >
        <ul role="list" className="flex flex-col px-5 py-3 gap-0.5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-2.5 text-sm text-secondary
                           hover:text-lime transition-colors duration-200
                           border-b border-[#1a1a1a] last:border-0"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}