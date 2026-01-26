import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const Impressum = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-4xl font-bold text-foreground mb-8">
              Impressum
            </h1>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Serkan Sel
                <br />
                AhrGlanz Gebäudereinigung
                <br />
                <a 
                  href="https://maps.google.com/?q=Ehlinger+Str.+74,+53474+Bad+Neuenahr-Ahrweiler"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Ehlinger Str. 74
                  <br />
                  53474 Bad Neuenahr-Ahrweiler
                </a>
              </p>

              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                Kontakt
              </h2>
              <p>
                Telefon: <a href="tel:+4926413968989" className="hover:text-primary transition-colors">+49 2641 3968989</a>
                <br />
                E-Mail: <a href="mailto:info@ahrglanz.de" className="hover:text-primary transition-colors">info@ahrglanz.de</a>
              </p>

              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                Umsatzsteuer-ID
              </h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                <br />
                DE368671469
              </p>

              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                Berufsbezeichnung und berufsrechtliche Regelungen
              </h2>
              <p>
                Berufsbezeichnung:
                <br />
                Gebäudereinigung
                <br />
                <br />
                Zuständige Kammer:
                <br />
                HWK
                <br />
                IHK
              </p>

              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                Angaben zur Berufshaftplfichtverischerung
              </h2>
              <p><strong>Name und Sitz des Versicherers:</strong><br />
                Allianz Vertretung<br />
                <br />
                Gr&uuml;ber und Gr&uuml;ber GbR<br />
                Marktplatz 16<br />
                53474 Bad Neuenahr-Ahrweiler</p>
              <h2>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
              <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
