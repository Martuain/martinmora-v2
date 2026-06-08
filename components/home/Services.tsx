"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const services = [
  {
    id: "product",
    title: "Fractional Product Leadership",
    tagline: "Senior product leadership without the full-time executive hire.",
    description:
      "For organizations needing strategic product leadership to define direction, align stakeholders, and accelerate delivery. I embed as an extension of your leadership team.",
    deliverables: [
      "Product strategy & vision",
      "Roadmap design & prioritization",
      "Discovery & customer validation",
      "Team leadership & coaching",
      "Executive alignment",
      "OKR & metrics frameworks",
    ],
    bestFor: "Scaleups · SaaS · Digital businesses",
    accent: "#14b8a6",
  },
  {
    id: "ai",
    title: "AI Strategy & Product Innovation",
    tagline: "From AI opportunity to measurable business value — across the full AI spectrum.",
    description:
      "I help organizations identify, validate, and implement AI opportunities that create real business value — both for product innovation and operational transformation. Strategy first, technology second.",
    deliverables: [
      "AI opportunity assessment & roadmap",
      "AI product strategy & feature design",
      "Use-case prioritization & business case",
      "AI agent design & workflow automation",
      "Governance, risk & ethics frameworks",
      "AI adoption & change management",
    ],
    bestFor: "Product teams · Operations leaders · Innovation units",
    accent: "#6366f1",
  },
  {
    id: "transformation",
    title: "Digital Transformation Programs",
    tagline: "From operational bottleneck to scalable execution.",
    description:
      "For organizations seeking operational excellence and scalable execution. I design and lead transformation programs that connect strategy to delivery and delivery to measurable outcomes.",
    deliverables: [
      "Operating model design",
      "Process optimization",
      "Delivery transformation",
      "KPI & measurement frameworks",
      "Organizational alignment",
      "Program leadership",
    ],
    bestFor: "Mid-size companies · Enterprises · Innovation teams",
    accent: "#f59e0b",
  },
];

const engagementModels = [
  {
    title: "Strategic Advisory",
    description: "Ongoing strategic guidance for leadership teams navigating critical decisions — including AI strategy and product direction.",
  },
  {
    title: "Fractional Leadership",
    description: "Embedded senior product or AI transformation leadership for a defined period.",
  },
  {
    title: "Workshops & Design Sprints",
    description: "Fixed-scope engagements: Product Strategy Sprint, AI Opportunity Sprint, Transformation Assessment.",
  },
  {
    title: "Transformation Programs",
    description: "End-to-end program leadership from discovery through execution and measurement.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-28 section-divider">
      <div className="container">
        <Reveal>
          <p className="eyebrow mb-4">How I Can Help</p>
          <h2 className="display-md text-[var(--primary)] max-w-4xl mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Three flagship services.
          </h2>
          <p className="text-[var(--secondary)] text-lg max-w-2xl mb-16">
            Not a menu of ten offerings. Three well-defined services, each with a clear purpose and measurable outcome.
          </p>
        </Reveal>

        {/* Service cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="glass glass-hover rounded-3xl p-8 flex flex-col"
            >
              <div
                className="w-2 h-2 rounded-full mb-6"
                style={{ background: service.accent, boxShadow: `0 0 12px ${service.accent}` }}
              />
              <h3 className="text-xl font-semibold text-[var(--primary)] mb-3">
                {service.title}
              </h3>
              <p className="text-sm font-medium mb-4" style={{ color: service.accent }}>
                {service.tagline}
              </p>
              <p className="text-sm text-[var(--secondary)] leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="mt-auto">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--secondary)] mb-3">
                  Deliverables
                </p>
                <ul className="space-y-2">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-xs text-[var(--secondary)]">
                      <span className="text-[var(--accent)] flex-shrink-0">·</span>
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-[var(--border)]">
                  <p className="text-xs text-[var(--secondary)]">
                    <span className="text-[var(--primary)] font-semibold">Best for: </span>
                    {service.bestFor}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Engagement models */}
        <Reveal>
          <h3 className="text-xl font-semibold text-[var(--primary)] mb-8">Ways We Can Work Together</h3>
        </Reveal>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mb-12">
          {engagementModels.map((model, i) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <h4 className="text-sm font-semibold text-[var(--primary)] mb-3">{model.title}</h4>
              <p className="text-xs text-[var(--secondary)] leading-relaxed">{model.description}</p>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.2}>
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:text-[var(--primary)] transition-colors"
          >
            Discuss your specific challenge
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

