import Link from "next/link";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { siteConfig, navItems } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] mt-0">
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-md bg-[var(--accent)] flex items-center justify-center">
                <span className="text-black font-bold text-sm">M</span>
              </div>
              <span className="font-semibold text-[var(--primary)]">Martin Mora</span>
            </div>
            <p className="text-[var(--secondary)] text-sm leading-relaxed max-w-xs">
              Product Strategy, AI Innovation & Digital Transformation advisor. Helping organizations turn ambitious ideas into measurable business outcomes.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--secondary)] hover:text-[var(--accent)] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[var(--secondary)] hover:text-[var(--accent)] transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--secondary)] mb-4">Navigation</p>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[var(--secondary)] hover:text-[var(--primary)] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--secondary)] mb-4">Get in Touch</p>
            <a
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[var(--accent)] text-black text-sm font-semibold hover:bg-[var(--accent-dim)] transition-colors mb-4"
            >
              Book a Discovery Call
              <ArrowUpRight size={14} />
            </a>
            <p className="text-sm text-[var(--secondary)] mt-3">
              Or reach out directly at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-[var(--border)] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--secondary)]">
            © {year} Martin Fernando Mora. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-[var(--secondary)]">
            <Link href="/privacy" className="hover:text-[var(--primary)] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[var(--primary)] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
