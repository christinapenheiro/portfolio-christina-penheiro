import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** The main heading text */
  title: string;
  /** Optional subtitle rendered below the title */
  subtitle?: string;
  /** Tailwind classes for the wrapper div */
  className?: string;
}

/**
 * SectionHeading — reusable h2 + decorative lime underline used by every section.
 *
 * Why a component?
 * So every section heading looks identical without repeating the same
 * className strings everywhere. Change it here → changes everywhere.
 */
export default function SectionHeading({
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", className)}>
      <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        {title}
        {/* Decorative lime underline — purely visual, not a real <hr> */}
        <span
          className="block mt-2 h-0.5 w-12 bg-lime"
          aria-hidden="true"
        />
      </h2>
      {subtitle && (
        <p className="mt-4 text-secondary text-base sm:text-lg max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
