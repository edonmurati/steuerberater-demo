"use client";

import Link from "next/link";
import { ShieldCheck } from "@phosphor-icons/react";

const kanzleiLinks = [
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Über uns", href: "/#ueber-uns" },
  { label: "Team", href: "/#ueber-uns" },
  { label: "Karriere", href: "/#kontakt" },
];

const rechtlichesLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "AGB", href: "/impressum" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <span className="font-[family-name:var(--font-playfair)] text-2xl font-semibold tracking-tight">
              Musterberater
            </span>
            <p className="text-xs text-cream/30 uppercase tracking-[0.2em] mt-1 mb-6">
              Steuerberatung
            </p>
            <p className="text-sm text-cream/50 leading-relaxed max-w-[35ch]">
              Persönliche Steuerberatung mit digitalem Anspruch.
              Seit 2008 in München.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-wider text-cream/30 mb-4 font-medium">
              Kanzlei
            </h4>
            <ul className="space-y-3">
              {kanzleiLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream/60 hover:text-cream transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-wider text-cream/30 mb-4 font-medium">
              Rechtliches
            </h4>
            <ul className="space-y-3">
              {rechtlichesLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream/60 hover:text-cream transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Steuerberaterkammer Badge */}
          <div className="md:col-span-4 flex md:justify-end">
            <div className="inline-flex flex-col items-start md:items-end">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <ShieldCheck size={24} weight="duotone" className="text-bronze-light" />
                </div>
                <div className="text-right">
                  <p className="text-xs text-cream/60 font-medium">Mitglied</p>
                  <p className="text-sm text-cream/80">
                    Steuerberaterkammer München
                  </p>
                </div>
              </div>
              <p className="text-[11px] text-cream/25 md:text-right leading-relaxed max-w-[30ch]">
                Berufsrechtlich zugelassen nach dem Steuerberatungsgesetz (StBerG)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-cream/25">
            2026 Kanzlei Musterberater. Alle Rechte vorbehalten.
          </p>
          <p className="text-xs text-cream/25">
            Website von{" "}
            <a
              href="https://www.tigonautomation.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bronze-light/60 hover:text-bronze-light transition-colors"
            >
              Tigon Automation
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
