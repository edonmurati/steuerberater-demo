"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, Handshake, Globe } from "@phosphor-icons/react";

const team = [
  {
    name: "Dr. Markus Weber",
    role: "Geschäftsführer, Steuerberater",
    bio: "Promotion in Steuerrecht, 20 Jahre Erfahrung. Spezialisiert auf Unternehmenssteuerrecht und internationale Steuergestaltung.",
    initials: "MW",
    color: "bg-navy text-cream",
  },
  {
    name: "Sarah Bergmann",
    role: "Steuerberaterin",
    bio: "Schwerpunkt Einkommensteuer und Existenzgründung. Betreut insbesondere Freiberufler und Solo-Selbstständige.",
    initials: "SB",
    color: "bg-bronze text-cream",
  },
  {
    name: "Thomas Keller",
    role: "Steuerberater, Fachberater für Internationales Steuerrecht",
    bio: "Ehemals Big Four. Spezialisiert auf grenzüberschreitende Sachverhalte und Verrechnungspreise.",
    initials: "TK",
    color: "bg-navy-light text-cream",
  },
];

const values = [
  {
    icon: Handshake,
    title: "Persönlich",
    desc: "Jeder Mandant hat einen festen Ansprechpartner. Keine Callcenter, keine Weiterleitungen.",
  },
  {
    icon: GraduationCap,
    title: "Kompetent",
    desc: "Fortlaufende Fortbildung. Immer auf dem aktuellen Stand der Gesetzgebung und Rechtsprechung.",
  },
  {
    icon: Globe,
    title: "Digital",
    desc: "DATEV Unternehmen Online, digitale Belege, Mandantenportal. Papierlos, wo es sinnvoll ist.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ueber-uns" className="py-24 md:py-32 bg-cream-dark/40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-bronze font-medium">
            Über uns
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl tracking-tight text-navy mt-4 max-w-[24ch]">
            Ein Team, das Ihre
            <span className="text-bronze"> Sprache </span>
            spricht
          </h2>
        </motion.div>

        {/* Team Grid — Asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-20">
          {/* Lead partner — larger card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 md:row-span-2"
          >
            <div className="h-full bg-navy rounded-2xl p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
                  <span className="font-[family-name:var(--font-playfair)] text-2xl text-cream font-medium">
                    {team[0].initials}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-cream font-medium mb-2">
                  {team[0].name}
                </h3>
                <p className="text-sm text-cream/50 mb-6">{team[0].role}</p>
                <p className="text-sm text-cream/70 leading-relaxed max-w-[40ch]">
                  {team[0].bio}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs text-cream/40 uppercase tracking-wider">
                  Steuerberaterkammer München · Mitglied seit 2006
                </p>
              </div>
            </div>
          </motion.div>

          {/* Other team members */}
          {team.slice(1).map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="md:col-span-7"
            >
              <div className="h-full bg-white/60 border border-warm-border/60 rounded-2xl p-8 md:p-10 hover:border-bronze/30 transition-all duration-500">
                <div className="flex gap-5">
                  <div
                    className={`shrink-0 w-14 h-14 rounded-xl ${member.color} flex items-center justify-center`}
                  >
                    <span className="font-[family-name:var(--font-playfair)] text-lg font-medium">
                      {member.initials}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl font-medium text-navy mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-navy/45 mb-3">{member.role}</p>
                    <p className="text-sm text-navy/60 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.4 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <value.icon
                size={28}
                weight="duotone"
                className="text-bronze mb-4"
              />
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-medium text-navy mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-navy/55 leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
