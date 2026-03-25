import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Impressum | Kanzlei Musterberater",
  description: "Impressum der Demo-Website Kanzlei Musterberater — erstellt von Tigon Automation.",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-cream">
      <div className="max-w-[760px] mx-auto px-6 md:px-10 py-20 md:py-28">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-navy/50 hover:text-navy transition-colors duration-300 mb-12"
        >
          <ArrowLeft size={16} />
          Zurück zur Startseite
        </Link>

        {/* Demo Banner */}
        <div className="bg-bronze/10 border border-bronze/25 rounded-xl px-5 py-4 mb-12">
          <p className="text-xs text-bronze font-medium uppercase tracking-wider mb-1">
            Demo-Website
          </p>
          <p className="text-sm text-navy/70 leading-relaxed">
            Dies ist eine Demo-Website, erstellt von{" "}
            <a
              href="https://www.tigonautomation.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bronze hover:text-bronze-light transition-colors underline underline-offset-2"
            >
              Tigon Automation
            </a>
            . Die dargestellten Inhalte sind fiktiv und dienen ausschließlich
            Präsentationszwecken.
          </p>
        </div>

        {/* Heading */}
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl tracking-tight text-navy mb-4">
          Impressum
        </h1>
        <p className="text-sm text-warm-muted mb-12">
          Angaben gemäß § 5 TMG
        </p>

        <div className="space-y-10 text-navy/80">
          {/* Angaben */}
          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl text-navy mb-4">
              Angaben gemäß § 5 TMG
            </h2>
            <div className="space-y-1 text-sm leading-relaxed">
              <p className="font-semibold text-navy">Tigon Automation Muratovic &amp; Cungu GbR</p>
              <p>Gartenstraße 50</p>
              <p>70563 Stuttgart</p>
            </div>
          </section>

          {/* Vertreten durch */}
          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl text-navy mb-4">
              Vertreten durch
            </h2>
            <p className="text-sm leading-relaxed">
              Edon Muratovic &amp; Gent Cungu (Gesellschafter)
            </p>
          </section>

          {/* Kontakt */}
          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl text-navy mb-4">
              Kontakt
            </h2>
            <div className="space-y-1 text-sm leading-relaxed">
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:kontakt@tigonautomation.de"
                  className="text-bronze hover:text-bronze-light transition-colors"
                >
                  kontakt@tigonautomation.de
                </a>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://www.tigonautomation.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bronze hover:text-bronze-light transition-colors"
                >
                  www.tigonautomation.de
                </a>
              </p>
            </div>
          </section>

          {/* Umsatzsteuer */}
          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl text-navy mb-4">
              Umsatzsteuer
            </h2>
            <p className="text-sm leading-relaxed">
              Die Tigon Automation Muratovic &amp; Cungu GbR ist als Kleinunternehmer
              im Sinne von § 19 Abs. 1 UStG tätig. Es wird keine Umsatzsteuer
              berechnet.
            </p>
          </section>

          {/* Verantwortlich */}
          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl text-navy mb-4">
              Verantwortlich für den Inhalt
            </h2>
            <div className="space-y-1 text-sm leading-relaxed">
              <p>Edon Muratovic</p>
              <p>Gartenstraße 50</p>
              <p>70563 Stuttgart</p>
            </div>
          </section>

          {/* Haftungsausschluss */}
          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl text-navy mb-4">
              Haftungsausschluss
            </h2>
            <div className="space-y-4 text-sm leading-relaxed">
              <div>
                <p className="font-medium text-navy mb-2">Haftung für Inhalte</p>
                <p>
                  Diese Website ist eine Demo-Präsentation. Sämtliche dargestellten
                  Kanzleidaten, Mitarbeiterangaben, Kontaktdaten und sonstigen
                  Informationen sind fiktiv. Eine Haftung für die Richtigkeit oder
                  Vollständigkeit dieser Demo-Inhalte wird nicht übernommen.
                </p>
              </div>
              <div>
                <p className="font-medium text-navy mb-2">Haftung für Links</p>
                <p>
                  Diese Website enthält Links zu externen Webseiten Dritter. Auf
                  deren Inhalte haben wir keinen Einfluss und übernehmen daher
                  keine Gewähr. Für die Inhalte der verlinkten Seiten ist stets
                  der jeweilige Anbieter verantwortlich.
                </p>
              </div>
              <div>
                <p className="font-medium text-navy mb-2">Urheberrecht</p>
                <p>
                  Die durch Tigon Automation erstellten Inhalte und Werke auf
                  dieser Website unterliegen dem deutschen Urheberrecht. Die
                  Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                  Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
                  schriftlichen Zustimmung von Tigon Automation.
                </p>
              </div>
            </div>
          </section>

          {/* Streitbeilegung */}
          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl text-navy mb-4">
              Online-Streitbeilegung
            </h2>
            <p className="text-sm leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bronze hover:text-bronze-light transition-colors"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              . Wir sind nicht verpflichtet und nicht bereit, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>

        {/* Bottom nav */}
        <div className="mt-16 pt-8 border-t border-warm-border flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-navy/50 hover:text-navy transition-colors duration-300"
          >
            <ArrowLeft size={16} />
            Startseite
          </Link>
          <Link
            href="/datenschutz"
            className="text-sm text-bronze hover:text-bronze-light transition-colors duration-300"
          >
            Datenschutzerklärung →
          </Link>
        </div>
      </div>
    </main>
  );
}
