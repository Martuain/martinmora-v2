import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const industries = [
  "Financial Services",
  "Payments",
  "SaaS",
  "Cybersecurity",
  "AI-enabled Products",
  "Digital Assets",
  "Enterprise Technology",
];

export function AboutPreview() {
  return (
    <section className="py-28 section-divider">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <p className="eyebrow mb-4">About Martin</p>
              <h2 className="display-md text-[var(--primary)] mb-8" style={{ fontFamily: "var(--font-display)" }}>
                Helping organizations bridge the gap between vision and execution.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-[var(--secondary)] text-base leading-relaxed mb-8">
                <p>
                  For more than 15 years, I&apos;ve worked at the intersection of business strategy,
                  technology, and delivery. I&apos;ve led transformation initiatives across digital banking,
                  SaaS platforms, blockchain ecosystems, AI-enabled products, and enterprise-scale
                  modernization programs.
                </p>
                <p>
                  Throughout that journey, one principle has remained constant:{" "}
                  <strong className="text-[var(--primary)]">
                    Technology alone doesn&apos;t create value. Execution does.
                  </strong>
                </p>
                <p>
                  My role is helping organizations transform ideas into outcomes by aligning strategy,
                  people, processes, and technology around measurable objectives.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <Link
                href="/approach"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:text-[var(--primary)] transition-colors"
              >
                Explore my approach
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="space-y-6">
              {/* Industries */}
              <div className="glass rounded-3xl p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--secondary)] mb-5">
                  Industries Served
                </p>
                <div className="flex flex-wrap gap-2">
                  {industries.map((ind) => (
                    <span
                      key={ind}
                      className="text-sm px-4 py-2 rounded-full border border-[var(--border)] text-[var(--secondary)] hover:text-[var(--primary)] hover:border-[var(--accent)]/30 transition-colors cursor-default"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              {/* What I believe */}
              <div className="glass rounded-3xl p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--secondary)] mb-5">
                  What I Believe
                </p>
                <div className="space-y-4">
                  {[
                    { title: "Outcomes over outputs", body: "Ideas matter only when they create measurable business impact." },
                    { title: "Strategy before technology", body: "Whether it's AI, cloud, or automation — the objective is always business value." },
                    { title: "Simplicity scales", body: "Complexity slows organizations. Clarity accelerates them." },
                  ].map((belief) => (
                    <div key={belief.title}>
                      <p className="text-sm font-semibold text-[var(--primary)] mb-1">{belief.title}</p>
                      <p className="text-xs text-[var(--secondary)] leading-relaxed">{belief.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
