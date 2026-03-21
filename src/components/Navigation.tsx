"use client";

import { useState, useEffect } from "react";
import { List, X, Phone } from "@phosphor-icons/react";

const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#mandanten", label: "Mandantenstimmen" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-xl border-b border-warm-border shadow-[0_1px_3px_rgba(138,115,85,0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        {/* Logo */}
        <a href="#" className="flex flex-col">
          <span className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-semibold tracking-tight text-navy">
            Musterberater
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-warm-muted font-medium">
            Steuerberatung
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-navy/70 hover:text-navy transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+498912345678"
            className="flex items-center gap-2 text-sm font-medium text-cream bg-navy px-5 py-2.5 rounded-full hover:bg-navy-light transition-colors duration-300"
          >
            <Phone size={16} weight="bold" />
            089 — 123 456 78
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-navy"
          aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {mobileOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream/95 backdrop-blur-xl border-t border-warm-border">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base text-navy/80 hover:text-navy py-2 border-b border-warm-border/50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+498912345678"
              className="flex items-center justify-center gap-2 text-sm font-medium text-cream bg-navy px-5 py-3 rounded-full mt-2"
            >
              <Phone size={16} weight="bold" />
              089 — 123 456 78
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
