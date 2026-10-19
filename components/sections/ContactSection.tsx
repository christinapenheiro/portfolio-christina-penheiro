import { GitBranch, Link2, Mail, X, Globe } from "lucide-react";
import { socialLinks, contactEmail } from "@/data/social";
import SectionHeading from "@/components/ui/SectionHeading";

/* Map string names → Lucide components */
const iconMap = {
  GitBranch,
  Link2,
  Mail,
  X,
  Globe,
} as const;

/**
 * ContactSection — simple, clean contact area.
 *
 * Design decisions:
 *   - No contact form (would require a backend — out of scope for now)
 *   - Prominent email link as primary CTA
 *   - Social icon links as secondary CTAs
 *   - Honest framing: "I'd love to hear from you" not "Let's work together"
 *     (we don't want to imply professional services we can't yet deliver)
 *
 * When you're ready to add a form, look into Resend or Formspree —
 * both work great with Next.js Server Actions and have free tiers.
 */
export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-border"
    >
      <div className="section-container">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a question, opportunity, or just want to say hi? My inbox is open."
        />

        <div className="max-w-xl space-y-8">
          {/* Primary email CTA */}
          <div>
            <p className="text-secondary text-sm mb-4 leading-relaxed">
              I&apos;m currently looking for junior developer roles and internship
              opportunities. Whether you have a position in mind, a project idea,
              or just want to connect — feel free to reach out.
            </p>

            <a
              href={`mailto:${contactEmail}`}
              id="contact-email-link"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                         bg-lime text-black font-semibold text-sm
                         hover:bg-lime-dim transition-colors duration-200"
            >
              <Mail size={16} aria-hidden="true" />
              {contactEmail}
            </a>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4" aria-hidden="true">
            <hr className="flex-1 border-border" />
            <span className="text-ghost text-xs font-mono">or find me on</span>
            <hr className="flex-1 border-border" />
          </div>

          {/* Social links */}
          <nav aria-label="Social media links">
            <ul
              role="list"
              className="flex flex-wrap gap-3"
            >
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      id={`contact-${link.label.toLowerCase()}-link`}
                      target={link.href.startsWith("mailto") ? undefined : "_blank"}
                      rel={
                        link.href.startsWith("mailto")
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                                 border border-border text-secondary text-sm
                                 hover:border-lime/40 hover:text-lime
                                 transition-colors duration-200"
                    >
                      <Icon size={15} aria-hidden="true" />
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
