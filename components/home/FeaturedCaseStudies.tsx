"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { caseStudies } from "@/content/caseStudies";

export function FeaturedCaseStudies() {
  return (
    <section className="py-28 section-divider">
      <div className="container">
        <Reveal>
          <p className="eyebrow mb-4">Selected Case Studies</p>
          <h2 className="display-md text-[var(--primary)] max-w-4xl mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Real initiatives. Measurable outcomes.
          </h2>
          <p className="text-[var(--secondary)] text-lg max-w-2xl mb-16">
            Not theoretical frameworks. Every case study below represents actual work with real constraints, real timelines, and real results.
          </p>
        </Reveal>

        {/* Bento grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Link
                href={`/case-studies/${cs.slug}`}
                className="group block glass glass-hover rounded-3xl p-8 h-full"
              >
                <div
                  className="text-4xl font-bold mb-2 leading-none"
                  style={{ color: cs.color }}
                >
                  {cs.metric}
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: cs.color }}>
                  {cs.metricLabel}
                </div>
                <h3 className="text-xl font-semibold text-[var(--primary)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                  {cs.title}
                </h3>
                <p className="text-sm text-[var(--secondary)] leading-relaxed mb-6">
                  {cs.headline}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full border border-[var(--border)] text-[var(--secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[var(--accent)] group-hover:gap-3 transition-all">
                  Read Case Study
                  <ArrowRight size={12} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.2}>
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:text-[var(--primary)] transition-colors"
          >
            View all case studies
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
