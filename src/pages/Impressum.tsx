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
              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <p>
                AhrGlanz Gebäudereinigung
                <br />
                Ehlinger Str. 74
                <br />
                53474 Bad Neuenahr-Ahrweiler
              </p>

              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                Kontakt
              </h2>
              <p>
                Telefon: +49 2641 3968989
                <br />
                E-Mail: info@ahrglanz.de
              </p>

              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p>
                AhrGlanz Gebäudereinigung
                <br />
                Ehlinger Str. 74
                <br />
                53474 Bad Neuenahr-Ahrweiler
              </p>

              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                EU-Streitschlichtung
              </h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
                <br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>

              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                Verbraucherstreitbeilegung / Universalschlichtungsstelle
              </h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor 
                einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>

              <p className="mt-8 text-sm">
                <strong>Hinweis:</strong> Bitte ergänzen Sie dieses Impressum mit Ihren vollständigen 
                Angaben (Inhaber, Handelsregister-Nr., USt-ID falls vorhanden, etc.).
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
