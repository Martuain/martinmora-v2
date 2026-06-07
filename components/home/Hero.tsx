"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] blob-teal rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] blob-blue rounded-full blur-[100px] opacity-40" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="eyebrow mb-6">
              Product Strategy · AI Innovation · Digital Transformation
            </p>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="display-xl text-[var(--primary)] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Turn ambitious ideas into{" "}
            <em className="not-italic accent-text">measurable outcomes.</em>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-[var(--secondary)] leading-relaxed max-w-2xl mb-10"
          >
            I help organizations identify opportunities, align teams, and execute product,
            AI, and transformation initiatives that create measurable business value.
            From growth-stage companies to global enterprises.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
          >
            <a
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--accent)] text-black font-semibold text-sm hover:bg-[var(--accent-dim)] transition-colors shadow-lg shadow-[var(--accent-glow)]"
            >
              Book a Discovery Call
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[var(--border)] text-[var(--primary)] text-sm font-semibold hover:bg-white/5 hover:border-white/20 transition-all"
            >
              Explore Case Studies
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Trust note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xs text-[var(--secondary)] mt-8 tracking-wide"
          >
            Trusted by organizations operating in highly regulated, high-growth, and mission-critical environments.
          </motion.p>
        </div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "15+", label: "Years Experience" },
            { value: "€470M+", label: "Assets Tokenized" },
            { value: "$2.5B", label: "Transaction Volume" },
            { value: "90%", label: "Ops Effort Reduction" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass glass-hover rounded-2xl p-5 text-center"
            >
              <div className="text-2xl font-bold text-[var(--primary)] mb-1">{stat.value}</div>
              <div className="text-xs text-[var(--secondary)]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
