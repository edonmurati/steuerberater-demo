"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Quotes, Star } from "@phosphor-icons/react";

const testimonials = [
  {
    quote:
      "Seit dem Wechsel zu Kanzlei Musterberater spare ich nicht nur Steuern, sondern vor allem Zeit. Die digitale Zusammenarbeit über das Mandantenportal ist genau das, was ich als Unternehmer brauche.",
    name: "Andreas Reimann",
    role: "Geschäftsführer, Reimann Metallbau GmbH",
    initials: "AR",
    stars: 5,
  },
  {
    quote:
      "Als Freiberuflerin war ich immer unsicher, ob ich steuerlich alles richtig mache. Frau Bergmann hat mich von Anfang an begleitet — von der Gründung bis zur ersten Steuererklärung. Endlich habe ich einen Überblick.",
    name: "Dr. Katharina Vogel",
    role: "Psychotherapeutin, Praxis München-Schwabing",
    initials: "KV",
    stars: 5,
  },
  {
    quote:
      "Die Lohnabrechnung für unsere 23 Mitarbeiter lief vorher über einen Lohnbuchhaltungsservice, der ständig Fehler machte. Seit zwei Jahren macht das Kanzlei Musterberater — seitdem kein einziges Problem mehr.",
    name: "Michael Brandt",
    role: "Inhaber, Brandt Gastro GmbH & Co. KG",
    initials: "MB",
    stars: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="mandanten" className="py-24 md:py-32 bg-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-bronze font-medium">
            Mandantenstimmen
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl tracking-tight text-navy mt-4 max-w-[24ch]">
            Was unsere
            <span className="text-bronze"> Mandanten </span>
            sagen
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Large featured testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7"
          >
            <div className="relative bg-white/60 border border-warm-border/60 rounded-2xl p-8 md:p-12 h-full">
              <Quotes
                size={40}
                weight="fill"
                className="text-bronze/15 absolute top-8 right-8"
              />
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[0].stars }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    weight="fill"
                    className="text-bronze"
                  />
                ))}
              </div>
              <p className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-navy leading-relaxed mb-8">
                &ldquo;{testimonials[0].quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-navy text-cream flex items-center justify-center text-sm font-medium">
                  {testimonials[0].initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">
                    {testimonials[0].name}
                  </p>
                  <p className="text-xs text-navy/45">{testimonials[0].role}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stacked smaller testimonials */}
          <div className="md:col-span-5 flex flex-col gap-4">
            {testimonials.slice(1).map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex-1"
              >
                <div className="h-full bg-white/60 border border-warm-border/60 rounded-2xl p-6 md:p-8 hover:border-bronze/30 transition-all duration-500">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star
                        key={j}
                        size={14}
                        weight="fill"
                        className="text-bronze"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-navy/70 leading-relaxed mb-5">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-bronze text-cream flex items-center justify-center text-xs font-medium">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-navy">{t.name}</p>
                      <p className="text-[11px] text-navy/40">{t.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
