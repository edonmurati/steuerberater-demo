"use client";

import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import { Plus, Minus } from "@phosphor-icons/react";

const faqs = [
  {
    q: "Was kostet eine Steuerberatung bei Ihnen?",
    a: "Unsere Honorare richten sich nach der Steuerberatervergütungsverordnung (StBVV). Die genauen Kosten hängen vom Umfang Ihrer steuerlichen Angelegenheiten ab. In einem kostenlosen Erstgespräch geben wir Ihnen eine transparente Einschätzung.",
  },
  {
    q: "Kann ich meine Belege digital einreichen?",
    a: "Ja. Wir arbeiten mit DATEV Unternehmen Online und einem eigenen Mandantenportal. Sie fotografieren oder scannen Ihre Belege, laden sie hoch — und wir kümmern uns um den Rest. Papierbelege nehmen wir natürlich auch entgegen.",
  },
  {
    q: "Wie schnell bekomme ich einen Termin?",
    a: "Für bestehende Mandanten in der Regel innerhalb von 48 Stunden. Für Erstgespräche bieten wir meist innerhalb einer Woche einen Termin an — telefonisch, per Video oder persönlich in unserer Kanzlei.",
  },
  {
    q: "Betreuen Sie auch Mandanten außerhalb von München?",
    a: "Selbstverständlich. Dank digitaler Zusammenarbeit betreuen wir Mandanten in ganz Deutschland. Für persönliche Gespräche bieten wir Videokonferenzen an.",
  },
  {
    q: "Ich bin gerade in der Gründungsphase. Können Sie mir helfen?",
    a: "Gründungsberatung ist einer unserer Schwerpunkte. Wir unterstützen Sie bei der Wahl der Rechtsform, der steuerlichen Anmeldung, dem Businessplan und begleiten Sie durch das erste Geschäftsjahr.",
  },
  {
    q: "Was ist der Unterschied zwischen Ihnen und einem Online-Steuerservice?",
    a: "Online-Services arbeiten standardisiert. Wir arbeiten individuell. Ihr fester Ansprechpartner kennt Ihre Situation, denkt vorausschauend mit und ist erreichbar, wenn Sie ihn brauchen. Für komplexe Sachverhalte — Immobilien, Erbschaft, Unternehmensverkäufe — macht das den Unterschied.",
  },
];

function FAQItem({
  faq,
  index,
  open,
  toggle,
}: {
  faq: (typeof faqs)[0];
  index: number;
  open: boolean;
  toggle: () => void;
}) {
  return (
    <div className="border-b border-warm-border/60 last:border-b-0">
      <button
        onClick={toggle}
        className="w-full flex items-start justify-between gap-4 py-6 text-left group"
      >
        <span className="font-[family-name:var(--font-playfair)] text-base md:text-lg text-navy group-hover:text-bronze transition-colors duration-300">
          {faq.q}
        </span>
        <span className="shrink-0 mt-1 w-6 h-6 rounded-full border border-warm-border flex items-center justify-center group-hover:border-bronze/40 transition-colors duration-300">
          {open ? (
            <Minus size={12} className="text-bronze" />
          ) : (
            <Plus size={12} className="text-navy/50" />
          )}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-sm text-navy/55 leading-relaxed pb-6 max-w-[65ch]">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-cream-dark/40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left — Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-bronze font-medium">
              Häufige Fragen
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl tracking-tight text-navy mt-4 mb-6">
              Antworten auf Ihre
              <span className="text-bronze"> Fragen</span>
            </h2>
            <p className="text-sm text-navy/50 leading-relaxed">
              Noch Fragen? Rufen Sie uns an oder schreiben Sie uns.
              Wir melden uns innerhalb eines Werktags.
            </p>
          </motion.div>

          {/* Right — Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-8"
          >
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                open={openIndex === i}
                toggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
