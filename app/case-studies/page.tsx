import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/home/FinalCTA";
import { caseStudies } from "@/content/caseStudies";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real initiatives. Measurable outcomes. Explore case studies from Martin Fernando Mora across digital banking, tokenization, AI products, and operational transformation.",
  alternates: { canonical: `${siteConfig.url}/case-studies` },
};

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 section-divider relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] blob-teal rounded-full blur-[130px] opacity-25" />
          </div>
          <div className="container relative z-10 max-w-4xl">
            <Reveal>
              <p className="eyebrow mb-6">Case Studies</p>
              <h1 className="display-xl text-[var(--primary)] mb-8" style={{ fontFamily: "var(--font-display)" }}>
                Real initiatives.<br />Measurable outcomes.
              </h1>
              <p className="text-xl text-[var(--secondary)] leading-relaxed max-w-2xl">
                Not theoretical frameworks. Every case study below represents actual work
                with real constraints, real timelines, and results that can be verified.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Case studies grid */}
        <section className="py-24 section-divider">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((cs, i) => (
                <Reveal key={cs.slug} delay={i * 0.1}>
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="group block glass glass-hover rounded-3xl overflow-hidden"
                  >
                    {/* Color accent bar */}
                    <div
                      className="h-1 w-full"
                      style={{ background: cs.color }}
                    />
                    <div className="p-10">
                      {/* Metric */}
                      <div className="flex items-baseline gap-3 mb-6">
                        <span
                          className="text-5xl font-bold leading-none"
                          style={{ color: cs.color }}
                        >
                          {cs.metric}
                        </span>
                        <span
                          className="text-sm font-semibold uppercase tracking-widest"
                          style={{ color: cs.color }}
                        >
                          {cs.metricLabel}
                        </span>
                      </div>

                      {/* Industry */}
                      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--secondary)] mb-3">
                        {cs.industry}
                      </p>

                      {/* Title */}
                      <h2 className="text-2xl font-semibold text-[var(--primary)] mb-4 group-hover:text-[var(--accent)] transition-colors leading-snug">
                        {cs.title}
                      </h2>

                      <p className="text-sm text-[var(--secondary)] leading-relaxed mb-8">
                        {cs.headline}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {cs.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1 rounded-full border border-[var(--border)] text-[var(--secondary)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-xs font-semibold text-[var(--accent)] group-hover:gap-3 transition-all">
                        Read full case study
                        <ArrowRight size={13} />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
