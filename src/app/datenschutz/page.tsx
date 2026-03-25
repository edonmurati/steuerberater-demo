import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Kanzlei Musterberater",
  description: "Datenschutzerklärung der Demo-Website Kanzlei Musterberater — erstellt von Tigon Automation.",
};

export default function DatenschutzPage() {
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
            . Es werden keine echten personenbezogenen Daten verarbeitet oder gespeichert.
          </p>
        </div>

        {/* Heading */}
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl tracking-tight text-navy mb-4">
          Datenschutzerklärung
        </h1>
        <p className="text-sm text-warm-muted mb-12">
          Gemäß Art. 13, 14 DSGVO
        </p>

        <div className="space-y-10 text-navy/80">
          {/* Verantwortlicher */}
          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl text-navy mb-4">
              1. Verantwortlicher
            </h2>
            <div className="space-y-1 text-sm leading-relaxed">
              <p className="font-semibold text-navy">Tigon Automation Muratovic &amp; Cungu GbR</p>
              <p>Gartenstraße 50, 70563 Stuttgart</p>
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

          {/* Allgemeine Hinweise */}
          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl text-navy mb-4">
              2. Allgemeine Hinweise
            </h2>
            <p className="text-sm leading-relaxed">
              Diese Website ist eine Demo-Präsentation von Tigon Automation. Die
              Nutzung dieser Website ist ohne Angabe personenbezogener Daten möglich.
              Soweit personenbezogene Daten (beispielsweise Name oder E-Mail-Adresse)
              erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger
              Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an
              Dritte weitergegeben.
            </p>
          </section>

          {/* Hosting */}
          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl text-navy mb-4">
              3. Hosting
            </h2>
            <div className="space-y-3 text-sm leading-relaxed">
              <p>
                Diese Website wird bei <strong className="text-navy">Vercel Inc.</strong> gehostet
                (440 N Barranca Ave #4133, Covina, CA 91723, USA).
              </p>
              <p>
                Vercel ist Empfänger Ihrer personenbezogenen Daten. Dies entspricht
                unserem berechtigten Interesse im Sinne des Art. 6 Abs. 1 S. 1 lit. f
                DSGVO, selbst keinen Server vorhalten zu müssen. Serverstandort ist
                Deutschland/EU soweit verfügbar.
              </p>
              <p>
                Vercel hat Compliance-Maßnahmen für internationale Datenübermittlungen
                umgesetzt. Diese gelten für alle weltweiten Aktivitäten, bei denen
                Vercel personenbezogene Daten von natürlichen Personen in der EU
                verarbeitet. Vercel nimmt am EU-US Data Privacy Framework (DPF) teil.
              </p>
              <p>
                Weitere Informationen finden Sie in der Datenschutzerklärung von
                Vercel:{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bronze hover:text-bronze-light transition-colors"
                >
                  vercel.com/legal/privacy-policy
                </a>
              </p>
            </div>
          </section>

          {/* Kontaktformular */}
          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl text-navy mb-4">
              4. Kontaktformular
            </h2>
            <div className="space-y-3 text-sm leading-relaxed">
              <p>
                Diese Website enthält ein Kontaktformular zu Demo-Zwecken. Eingaben
                in das Formular werden <strong className="text-navy">nicht dauerhaft gespeichert</strong> und
                nicht an Dritte weitergeleitet. Es handelt sich um eine reine
                Frontend-Demo ohne Backend-Anbindung.
              </p>
              <p>
                Auf einer echten produktiven Website würden Kontaktanfragen per
                E-Mail oder über einen sicheren Webhook (z. B. n8n) weitergeleitet.
                In diesem Fall würden folgende Daten verarbeitet: Name, E-Mail-Adresse,
                Anliegen und Nachrichteninhalt. Rechtsgrundlage wäre Art. 6 Abs. 1
                lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f
                DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
              </p>
            </div>
          </section>

          {/* Server-Logfiles */}
          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl text-navy mb-4">
              5. Server-Log-Dateien
            </h2>
            <div className="space-y-3 text-sm leading-relaxed">
              <p>
                Der Hosting-Anbieter dieser Website erhebt und speichert automatisch
                Informationen in sogenannten Server-Log-Dateien, die Ihr Browser
                automatisch übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-navy/70">
                <li>Browsertyp und -version</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p>
                Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
                Interesse an einem störungsfreien Betrieb der Website).
              </p>
            </div>
          </section>

          {/* Betroffenenrechte */}
          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl text-navy mb-4">
              6. Ihre Rechte als betroffene Person
            </h2>
            <div className="space-y-3 text-sm leading-relaxed">
              <p>Sie haben nach der DSGVO folgende Rechte gegenüber uns:</p>
              <ul className="space-y-2 pl-2">
                <li className="flex gap-2">
                  <span className="text-bronze shrink-0">—</span>
                  <span><strong className="text-navy">Auskunftsrecht</strong> (Art. 15 DSGVO): Sie können Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten verlangen.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-bronze shrink-0">—</span>
                  <span><strong className="text-navy">Recht auf Berichtigung</strong> (Art. 16 DSGVO): Sie können unverzüglich die Berichtigung unrichtiger Daten verlangen.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-bronze shrink-0">—</span>
                  <span><strong className="text-navy">Recht auf Löschung</strong> (Art. 17 DSGVO): Sie können die Löschung Ihrer bei uns gespeicherten Daten verlangen.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-bronze shrink-0">—</span>
                  <span><strong className="text-navy">Recht auf Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO): Sie können die Einschränkung der Verarbeitung Ihrer Daten verlangen.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-bronze shrink-0">—</span>
                  <span><strong className="text-navy">Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO): Sie können Ihre Daten in einem strukturierten, gängigen, maschinenlesbaren Format erhalten.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-bronze shrink-0">—</span>
                  <span><strong className="text-navy">Widerspruchsrecht</strong> (Art. 21 DSGVO): Sie können der Verarbeitung Ihrer Daten widersprechen, soweit diese auf berechtigtem Interesse beruht.</span>
                </li>
              </ul>
              <p>
                Zur Ausübung Ihrer Rechte wenden Sie sich an:{" "}
                <a
                  href="mailto:kontakt@tigonautomation.de"
                  className="text-bronze hover:text-bronze-light transition-colors"
                >
                  kontakt@tigonautomation.de
                </a>
              </p>
            </div>
          </section>

          {/* Beschwerderecht */}
          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl text-navy mb-4">
              7. Beschwerderecht bei der Aufsichtsbehörde
            </h2>
            <p className="text-sm leading-relaxed">
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über
              die Verarbeitung Ihrer personenbezogenen Daten zu beschweren. Die
              zuständige Aufsichtsbehörde für Baden-Württemberg ist der Landesbeauftragte
              für den Datenschutz und die Informationsfreiheit Baden-Württemberg
              (LfDI BW), Königstraße 10a, 70173 Stuttgart.
            </p>
          </section>

          {/* Aktualität */}
          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl text-navy mb-4">
              8. Aktualität dieser Datenschutzerklärung
            </h2>
            <p className="text-sm leading-relaxed">
              Diese Datenschutzerklärung hat den Stand März 2026. Wir behalten uns
              vor, diese Datenschutzerklärung anzupassen, um sie an geänderte
              Rechtslagen oder bei Änderungen des Dienstes sowie der Datenverarbeitung
              anzupassen.
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
            href="/impressum"
            className="text-sm text-bronze hover:text-bronze-light transition-colors duration-300"
          >
            Impressum →
          </Link>
        </div>
      </div>
    </main>
  );
}
