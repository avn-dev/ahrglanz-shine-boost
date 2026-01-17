import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const Datenschutz = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-4xl font-bold text-foreground mb-8">
              Datenschutzerklärung
            </h1>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                  1. Datenschutz auf einen Blick
                </h2>
                <h3 className="font-display text-lg font-semibold text-foreground mt-6 mb-3">
                  Allgemeine Hinweise
                </h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                  personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
                  Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                  2. Verantwortlicher
                </h2>
                <p>
                  Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
                </p>
                <p>
                  AhrGlanz Gebäudereinigung
                  <br />
                  Ehlinger Str. 74
                  <br />
                  53474 Bad Neuenahr-Ahrweiler
                  <br />
                  <br />
                  Telefon: +49 2641 3968989
                  <br />
                  E-Mail: info@ahrglanz.de
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                  3. Datenerfassung auf dieser Website
                </h2>
                
                <h3 className="font-display text-lg font-semibold text-foreground mt-6 mb-3">
                  Kontaktformular
                </h3>
                <p>
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben 
                  aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten 
                  zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns 
                  gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p>
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, 
                  sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur 
                  Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen 
                  beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven 
                  Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder 
                  auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
                </p>

                <h3 className="font-display text-lg font-semibold text-foreground mt-6 mb-3">
                  Anfrage per E-Mail oder Telefon
                </h3>
                <p>
                  Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive 
                  aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke 
                  der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                  4. Hosting
                </h2>
                <p>
                  Wir hosten die Inhalte unserer Website bei einem europäischen Anbieter. 
                  Beim Abruf dieser Website werden personenbezogene Daten wie Ihre IP-Adresse 
                  in sogenannten Server-Log-Dateien gespeichert.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                  5. Ihre Rechte
                </h2>
                <p>Sie haben jederzeit das Recht:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Auskunft über Ihre bei uns gespeicherten Daten zu erhalten (Art. 15 DSGVO)</li>
                  <li>Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)</li>
                  <li>Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO)</li>
                  <li>Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO)</li>
                  <li>Ihre Daten in einem übertragbaren Format zu erhalten (Art. 20 DSGVO)</li>
                  <li>Der Verarbeitung zu widersprechen (Art. 21 DSGVO)</li>
                  <li>Sich bei einer Aufsichtsbehörde zu beschweren</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                  6. Cookies
                </h2>
                <p>
                  Diese Website verwendet ausschließlich technisch notwendige Cookies, 
                  die für den Betrieb der Website erforderlich sind. Eine Einwilligung 
                  ist hierfür nicht erforderlich.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                  7. Externe Inhalte
                </h2>
                <p>
                  Externe Inhalte wie eingebettete Karten oder Bewertungs-Widgets werden 
                  nur nach Ihrer ausdrücklichen Einwilligung geladen, um Ihre Privatsphäre 
                  zu schützen.
                </p>
              </section>

              <p className="mt-12 text-sm border-t pt-8">
                <strong>Hinweis:</strong> Diese Datenschutzerklärung ist ein Muster und muss 
                an Ihre spezifischen Datenverarbeitungsvorgänge angepasst werden. Für eine 
                rechtssichere Datenschutzerklärung konsultieren Sie bitte einen Rechtsanwalt 
                oder Datenschutzbeauftragten.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
