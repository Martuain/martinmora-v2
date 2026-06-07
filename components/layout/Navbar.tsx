"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navItems, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#090909]/95 backdrop-blur-xl border-b border-[#222222]"
            : "bg-transparent"
        )}
      >
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="Martin Fernando Mora"
          >
            <div className="w-7 h-7 rounded-md bg-[var(--accent)] flex items-center justify-center flex-shrink-0">
              <span className="text-black font-bold text-sm leading-none">M</span>
            </div>
            <span className="font-semibold text-sm text-[var(--primary)] tracking-tight">
              Martin Mora
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm transition-all duration-150",
                  pathname === item.href
                    ? "text-[var(--primary)] bg-white/5"
                    : "text-[var(--secondary)] hover:text-[var(--primary)] hover:bg-white/5"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)] text-black text-sm font-semibold hover:bg-[var(--accent-dim)] transition-colors"
            >
              Book a Call
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-[var(--border)] text-[var(--secondary)] hover:text-[var(--primary)]"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="md:hidden border-t border-[var(--border)] bg-[#090909]/98 backdrop-blur-xl">
            <nav className="container py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm transition-colors",
                    pathname === item.href
                      ? "text-[var(--primary)] bg-white/5"
                      : "text-[var(--secondary)] hover:text-[var(--primary)]"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 pt-4 border-t border-[var(--border)]">
                <a
                  href={siteConfig.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[var(--accent)] text-black text-sm font-semibold"
                >
                  Book a Discovery Call
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Mobile sticky CTA */}
      <MobileStickyCTA />
    </>
  );
}

function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const progress = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setWidth(progress);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[2px] bg-[var(--accent)] z-[9999] transition-[width] duration-75"
      style={{ width: `${width}%` }}
      aria-hidden="true"
    />
  );
}

function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="md:hidden fixed bottom-6 left-0 right-0 z-40 flex justify-center px-6">
      <a
        href={siteConfig.calendly}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-black text-sm font-semibold shadow-lg shadow-[var(--accent-glow)]"
      >
        Book a Discovery Call
      </a>
    </div>
  );
}
