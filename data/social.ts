/**
 * data/social.ts
 *
 * Your contact / social links.
 * Replace the href values with your real URLs.
 *
 * icon → must match a valid Lucide icon component name.
 *   See full list: https://lucide.dev/icons
 */

export interface SocialLink {
  label: string;
  href: string;
  /**
   * Lucide icon name (v0.500+, branded icons removed).
   * GitBranch = GitHub, Link2 = LinkedIn, Mail = email, X = Twitter/X
   */
  icon: "GitBranch" | "Link2" | "Mail" | "X" | "Globe";
}

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/christinapenheiro",
    icon: "GitBranch",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/christina-penheiro/",
    icon: "Link2",
  },
  {
    label: "Email",
    href: "mailto:christinapenheiro@gmail.com",
    icon: "Mail",
  },
];

/** Used in the hero and about sections */
export const contactEmail = "christinapenheiro@gmail.com";
