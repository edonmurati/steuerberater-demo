"use client";

import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Clock, ChartLineUp } from "@phosphor-icons/react";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background accent shape */}
      <div className="absolute top-0 right-0 w-[55%] h-full bg-cream-dark/60 hidden lg:block" />
      <div className="absolute bottom-0 left-[10%] w-[300px] h-[300px] bg-bronze/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left — Text Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block text-xs uppercase tracking-[0.3em] text-bronze font-medium mb-6">
                Steuerberatung in München
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.08] tracking-tight text-navy mb-8"
            >
              Ihre Steuern.
              <br />
              <span className="text-bronze">Unsere Expertise.</span>
              <br />
              Ihr Vorteil.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-lg text-navy/60 leading-relaxed max-w-[52ch] mb-10"
            >
              Seit 2008 beraten wir Unternehmer, Freiberufler und Privatpersonen
              in München — persönlich, vorausschauend und mit dem Anspruch,
              dass Steuerberatung mehr ist als Pflichterfüllung.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#kontakt"
                className="group inline-flex items-center justify-center gap-3 bg-navy text-cream px-8 py-4 rounded-full text-sm font-medium hover:bg-navy-light transition-all duration-300"
              >
                Erstgespräch vereinbaren
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href="tel:+498912345678"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-medium text-navy border border-warm-border hover:border-bronze/40 transition-all duration-300"
              >
                089 — 123 456 78
              </a>
            </motion.div>
          </div>

          {/* Right — Trust Signals */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              {[
                {
                  icon: ShieldCheck,
                  title: "Mitglied der Steuerberaterkammer München",
                  desc: "Berufsrechtlich zugelassen, fortlaufend fortgebildet",
                },
                {
                  icon: Clock,
                  title: "Seit 2008 in München",
                  desc: "Über 15 Jahre Erfahrung mit regionalen und internationalen Mandanten",
                },
                {
                  icon: ChartLineUp,
                  title: "380+ Mandanten betreut",
                  desc: "Vom Einzelunternehmer bis zur mittelständischen GmbH",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5 + i * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group relative bg-white/70 backdrop-blur-sm border border-warm-border/60 rounded-2xl p-6 hover:border-bronze/30 transition-all duration-500"
                >
                  <div className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-bronze/8 flex items-center justify-center">
                      <item.icon size={20} className="text-bronze" weight="duotone" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-navy mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-navy/50 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
