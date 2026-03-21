"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  Receipt,
  BookOpen,
  Users,
  ChartBar,
  Lightbulb,
  Scales,
} from "@phosphor-icons/react";

const services = [
  {
    icon: Receipt,
    title: "Einkommensteuer",
    desc: "Steuererklärungen für Privatpersonen, Freiberufler und Gewerbetreibende — optimiert auf Ihre individuelle Situation.",
    accent: true,
  },
  {
    icon: BookOpen,
    title: "Finanzbuchhaltung",
    desc: "Laufende Buchführung mit digitaler Belegerfassung. DATEV-Schnittstelle, monatliche BWA, transparente Auswertungen.",
    accent: false,
  },
  {
    icon: Users,
    title: "Lohnabrechnung",
    desc: "Gehaltsabrechnungen, Sozialversicherungsmeldungen und Lohnsteueranmeldungen — termingerecht und fehlerfrei.",
    accent: false,
  },
  {
    icon: ChartBar,
    title: "Jahresabschluss",
    desc: "Bilanzen und EÜR nach HGB und Steuerrecht. Inklusive E-Bilanz-Übermittlung an das Finanzamt.",
    accent: false,
  },
  {
    icon: Lightbulb,
    title: "Existenzgründung",
    desc: "Von der Rechtsformwahl über den Businessplan bis zur ersten Steuererklärung — wir begleiten Ihren Start.",
    accent: false,
  },
  {
    icon: Scales,
    title: "Steuergestaltung",
    desc: "Vorausschauende Steuerplanung für Unternehmen und Privatpersonen. Wir finden die Lösung, bevor das Problem entsteht.",
    accent: true,
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="leistungen" className="py-24 md:py-32 bg-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-bronze font-medium">
            Leistungen
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl tracking-tight text-navy mt-4 max-w-[20ch]">
            Steuerberatung, die zu Ihrem
            <span className="text-bronze"> Unternehmen </span>
            passt
          </h2>
        </motion.div>

        {/* Asymmetric grid — NOT 3 equal columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {services.map((service, i) => {
            const spans = [
              "md:col-span-7",
              "md:col-span-5",
              "md:col-span-5",
              "md:col-span-7",
              "md:col-span-7",
              "md:col-span-5",
            ];

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`${spans[i]} group`}
              >
                <div
                  className={`relative h-full rounded-2xl p-8 md:p-10 border transition-all duration-500 hover:shadow-[0_8px_30px_rgba(138,115,85,0.08)] ${
                    service.accent
                      ? "bg-navy text-cream border-navy-light"
                      : "bg-white/60 text-navy border-warm-border/60 hover:border-bronze/30"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                      service.accent
                        ? "bg-white/10"
                        : "bg-bronze/8"
                    }`}
                  >
                    <service.icon
                      size={24}
                      weight="duotone"
                      className={service.accent ? "text-cream" : "text-bronze"}
                    />
                  </div>
                  <h3
                    className={`font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-medium mb-3 ${
                      service.accent ? "text-cream" : "text-navy"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed max-w-[45ch] ${
                      service.accent ? "text-cream/70" : "text-navy/55"
                    }`}
                  >
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
