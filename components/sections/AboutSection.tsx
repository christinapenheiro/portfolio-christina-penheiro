import SectionHeading from "@/components/ui/SectionHeading";

/**
 * AboutSection — a genuine, honest "about me" section.
 *
 * Rules for this section (per the project brief):
 *   ✅ Real information about yourself
 *   ✅ Honest framing (aspiring, learning, building)
 *   ❌ No fake statistics ("5 years experience", "50+ clients")
 *   ❌ No fabricated professional history
 *
 * HOW TO CUSTOMISE:
 *   Replace the placeholder paragraphs below with your own text.
 *   Keep it personal, honest, and specific.
 */
export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-border"
    >
      <div className="section-container">
        <SectionHeading
          title="About Me"
          subtitle="A little about who I am and what I&apos;m building toward."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* ── Text content: 3 of 5 columns on large screens ── */}
          <div className="lg:col-span-3 space-y-4 text-secondary leading-relaxed">
            {/*
              ─────────────────────────────────────────────────────
              TODO: Replace the paragraphs below with your real story.
              ─────────────────────────────────────────────────────
            */}
            <p>
              I&apos;m an aspiring full-stack web developer with a genuine
              passion for building things on the web. What started as curiosity about
              how websites worked has grown into a focused goal: becoming a professional
              developer who ships real products people use.
            </p>
            <p>
              My current focus is mastering the modern JavaScript ecosystem — React and
              Next.js on the frontend, Node.js and MongoDB on the backend. I learn by
              building: every concept I study becomes a project I ship.
            </p>
            <p>
              I care deeply about{" "}
              <span className="text-primary font-medium">clean code</span>,{" "}
              <span className="text-primary font-medium">accessibility</span>, and
              interfaces that feel genuinely good to use. I&apos;m looking for
              opportunities where I can contribute, grow, and build alongside experienced
              engineers.
            </p>
            <p className="text-ghost text-sm">
              When I&apos;m not coding, I&apos;m{" "}
              {/* Replace this with something real about yourself */}
              reading.
            </p>
          </div>

          {/* ── Quick facts sidebar: 2 of 5 columns ── */}
          <aside
            className="lg:col-span-2 rounded-card border border-border bg-surface p-6 space-y-4"
            aria-label="Quick facts"
          >
            <h3 className="text-sm font-semibold text-primary uppercase tracking-widest">
              Quick Facts
            </h3>
            <dl className="space-y-3">
              {[
                { label: "Location",   value: "Rangamati, Bangladesh" },  // ← replace
                { label: "Focus",      value: "Full-Stack Web Dev"  },
                { label: "Currently",  value: "Open to junior roles & internships" },
                { label: "Learning",   value: "Node.js, MongoDB, REST APIs" },
                { label: "Goal",       value: "Ship real products, grow fast" },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <dt className="text-xs text-ghost font-mono uppercase tracking-wider">
                    {label}
                  </dt>
                  <dd className="text-sm text-secondary">{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
