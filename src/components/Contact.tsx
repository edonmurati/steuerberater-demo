"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  EnvelopeSimple,
  Clock,
  PaperPlaneTilt,
  Check,
} from "@phosphor-icons/react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="kontakt" className="py-24 md:py-32 bg-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-bronze font-medium">
            Kontakt
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl tracking-tight text-navy mt-4 max-w-[24ch]">
            Lassen Sie uns
            <span className="text-bronze"> sprechen</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="bg-navy rounded-2xl p-8 md:p-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-cream font-medium mb-8">
                  Kanzlei Musterberater
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin
                      size={20}
                      weight="duotone"
                      className="text-bronze-light mt-0.5 shrink-0"
                    />
                    <div>
                      <p className="text-sm text-cream/80">
                        Maximilianstraße 42
                      </p>
                      <p className="text-sm text-cream/80">80539 München</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone
                      size={20}
                      weight="duotone"
                      className="text-bronze-light shrink-0"
                    />
                    <p className="text-sm text-cream/80">089 — 123 456 78</p>
                  </div>
                  <div className="flex gap-4">
                    <EnvelopeSimple
                      size={20}
                      weight="duotone"
                      className="text-bronze-light shrink-0"
                    />
                    <p className="text-sm text-cream/80">
                      info@kanzlei-musterberater.de
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Clock
                      size={20}
                      weight="duotone"
                      className="text-bronze-light shrink-0"
                    />
                    <div>
                      <p className="text-sm text-cream/80">
                        Mo — Do: 08:30 — 17:00
                      </p>
                      <p className="text-sm text-cream/80">
                        Fr: 08:30 — 14:00
                      </p>
                      <p className="text-xs text-cream/40 mt-1">
                        Termine nach Vereinbarung auch außerhalb
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/10">
                <p className="text-[11px] text-cream/30 uppercase tracking-wider leading-relaxed">
                  Mitglied der Steuerberaterkammer München
                  <br />
                  Berufsrechtlich zugelassen nach StBerG
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="bg-white/60 border border-warm-border/60 rounded-2xl p-8 md:p-10 h-full">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-bronze/10 flex items-center justify-center mb-6">
                    <Check size={28} className="text-bronze" />
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-navy mb-3">
                    Vielen Dank
                  </h3>
                  <p className="text-sm text-navy/50 max-w-[40ch]">
                    Wir haben Ihre Nachricht erhalten und melden uns innerhalb
                    eines Werktags bei Ihnen.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-navy/60 mb-2 uppercase tracking-wider">
                        Vorname
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Max"
                        className="w-full px-4 py-3 rounded-xl bg-cream/80 border border-warm-border/60 text-sm text-navy placeholder:text-navy/25 focus:outline-none focus:ring-2 focus:ring-bronze/20 focus:border-bronze/40 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-navy/60 mb-2 uppercase tracking-wider">
                        Nachname
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Mustermann"
                        className="w-full px-4 py-3 rounded-xl bg-cream/80 border border-warm-border/60 text-sm text-navy placeholder:text-navy/25 focus:outline-none focus:ring-2 focus:ring-bronze/20 focus:border-bronze/40 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-navy/60 mb-2 uppercase tracking-wider">
                      E-Mail
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="max@mustermann.de"
                      className="w-full px-4 py-3 rounded-xl bg-cream/80 border border-warm-border/60 text-sm text-navy placeholder:text-navy/25 focus:outline-none focus:ring-2 focus:ring-bronze/20 focus:border-bronze/40 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-navy/60 mb-2 uppercase tracking-wider">
                      Wobei können wir helfen?
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl bg-cream/80 border border-warm-border/60 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-bronze/20 focus:border-bronze/40 transition-all appearance-none">
                      <option value="">Bitte wählen</option>
                      <option value="einkommensteuer">
                        Einkommensteuererklärung
                      </option>
                      <option value="buchhaltung">Finanzbuchhaltung</option>
                      <option value="lohn">Lohnabrechnung</option>
                      <option value="jahresabschluss">Jahresabschluss</option>
                      <option value="gruendung">Existenzgründung</option>
                      <option value="sonstiges">Sonstiges</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-navy/60 mb-2 uppercase tracking-wider">
                      Ihre Nachricht
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                      className="w-full px-4 py-3 rounded-xl bg-cream/80 border border-warm-border/60 text-sm text-navy placeholder:text-navy/25 focus:outline-none focus:ring-2 focus:ring-bronze/20 focus:border-bronze/40 transition-all resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      required
                      id="datenschutz"
                      className="mt-1 accent-bronze"
                    />
                    <label
                      htmlFor="datenschutz"
                      className="text-xs text-navy/40 leading-relaxed"
                    >
                      Ich habe die{" "}
                      <Link
                        href="/datenschutz"
                        className="text-bronze hover:text-bronze-light transition-colors underline underline-offset-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Datenschutzerklärung
                      </Link>{" "}
                      gelesen und bin mit der Verarbeitung meiner Daten zur
                      Bearbeitung meiner Anfrage einverstanden.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="group flex items-center gap-3 bg-navy text-cream px-8 py-4 rounded-full text-sm font-medium hover:bg-navy-light transition-all duration-300 active:scale-[0.98]"
                  >
                    Nachricht senden
                    <PaperPlaneTilt
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
