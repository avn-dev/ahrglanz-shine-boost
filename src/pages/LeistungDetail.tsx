import { useParams, Link, useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Phone } from "lucide-react";
import { 
  Sparkles, 
  Building2, 
  Droplets, 
  Construction, 
  Sun, 
  Gem,
  Footprints,
  Brush
} from "lucide-react";

const leistungenData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  icon: React.ElementType;
  features: string[];
  benefits: string[];
  process: { step: number; title: string; description: string }[];
}> = {
  unterhaltsreinigung: {
    title: "Unterhaltsreinigung",
    subtitle: "Regelmäßige professionelle Reinigung",
    description: "Regelmäßige, zuverlässige Reinigung für dauerhaft saubere Räumlichkeiten.",
    longDescription: "Unsere Unterhaltsreinigung sorgt für dauerhaft saubere und hygienische Räumlichkeiten. Mit festen Reinigungsplänen und geschultem Personal gewährleisten wir gleichbleibend hohe Qualität – ob täglich, wöchentlich oder nach individuellem Bedarf.",
    icon: Sparkles,
    features: [
      "Tägliche oder wöchentliche Reinigung",
      "Staubwischen und Staubsaugen",
      "Nassreinigung aller Böden",
      "Sanitärreinigung und Desinfektion",
      "Papier- und Seifenspender auffüllen",
      "Mülleimer leeren und reinigen"
    ],
    benefits: [
      "Gleichbleibend hohe Sauberkeit",
      "Feste Ansprechpartner vor Ort",
      "Flexible Reinigungszeiten",
      "Dokumentierte Qualitätskontrollen"
    ],
    process: [
      { step: 1, title: "Besichtigung", description: "Kostenlose Vor-Ort-Analyse Ihrer Räumlichkeiten" },
      { step: 2, title: "Angebot", description: "Individuelles, transparentes Angebot" },
      { step: 3, title: "Reinigungsplan", description: "Erstellung eines maßgeschneiderten Plans" },
      { step: 4, title: "Umsetzung", description: "Zuverlässige, regelmäßige Reinigung" }
    ]
  },
  grundreinigung: {
    title: "Grundreinigung",
    subtitle: "Intensive Tiefenreinigung",
    description: "Intensive Tiefenreinigung für hartnäckige Verschmutzungen und strahlende Ergebnisse.",
    longDescription: "Die Grundreinigung ist die intensive Lösung für stark verschmutzte Flächen. Wir entfernen hartnäckigen Schmutz, alte Pflegefilme und Ablagerungen – und bringen Ihre Räume wieder zum Strahlen. Ideal vor Neubezug oder als jährliche Intensivreinigung.",
    icon: Building2,
    features: [
      "Tiefenreinigung aller Bodenbeläge",
      "Entfernung von Pflegefilmen",
      "Intensive Sanitärreinigung",
      "Küchenreinigung inkl. Geräte",
      "Fensterrahmen und Türen",
      "Heizkörper und Lüftungsgitter"
    ],
    benefits: [
      "Wie-neu-Zustand Ihrer Räume",
      "Basis für regelmäßige Pflege",
      "Verlängerung der Lebensdauer",
      "Hygienisch einwandfrei"
    ],
    process: [
      { step: 1, title: "Analyse", description: "Beurteilung des Verschmutzungsgrades" },
      { step: 2, title: "Planung", description: "Auswahl der optimalen Reinigungsmethoden" },
      { step: 3, title: "Durchführung", description: "Intensive Reinigung mit Spezialgeräten" },
      { step: 4, title: "Abnahme", description: "Gemeinsame Qualitätskontrolle" }
    ]
  },
  glasreinigung: {
    title: "Glasreinigung",
    subtitle: "Streifenfreie Sauberkeit",
    description: "Streifenfreie Reinigung von Fenstern, Glasfassaden und Wintergärten.",
    longDescription: "Saubere Fenster und Glasflächen sorgen für einen professionellen ersten Eindruck. Unsere Glasreinigung garantiert streifenfreie Ergebnisse – von einzelnen Fenstern bis hin zu großen Glasfassaden. Mit modernster Technik und erfahrenem Personal.",
    icon: Droplets,
    features: [
      "Fensterreinigung innen und außen",
      "Glasfassadenreinigung",
      "Wintergärten und Überdachungen",
      "Schaufensterreinigung",
      "Rahmen- und Falzreinigung",
      "Spezialreinigung für beschichtete Gläser"
    ],
    benefits: [
      "Streifenfreies Ergebnis",
      "Mehr Licht und Helligkeit",
      "Professioneller Eindruck",
      "Werterhaltung der Glasflächen"
    ],
    process: [
      { step: 1, title: "Besichtigung", description: "Erfassung aller Glasflächen" },
      { step: 2, title: "Vorbereitung", description: "Auswahl der richtigen Reinigungsmittel" },
      { step: 3, title: "Reinigung", description: "Professionelle Glasreinigung" },
      { step: 4, title: "Kontrolle", description: "Prüfung auf Streifenfreiheit" }
    ]
  },
  baureinigung: {
    title: "Baureinigung",
    subtitle: "Nach dem Bau, vor dem Einzug",
    description: "Professionelle Reinigung nach Bau- oder Renovierungsarbeiten.",
    longDescription: "Nach Bau- oder Renovierungsarbeiten hinterlassen Handwerker oft Staub, Schmutz und Reste. Unsere Baureinigung sorgt dafür, dass Ihre neuen Räume bezugsfertig und sauber übergeben werden – gründlich und termingerecht.",
    icon: Construction,
    features: [
      "Grobreinigung nach Bauarbeiten",
      "Feinreinigung vor Übergabe",
      "Entfernung von Baustaub",
      "Fenster- und Rahmenreinigung",
      "Sanitäreinrichtungen säubern",
      "Bodenbeläge reinigen und pflegen"
    ],
    benefits: [
      "Bezugsfertiger Zustand",
      "Termingerechte Fertigstellung",
      "Professionelle Übergabe",
      "Schutz vor Folgeschäden"
    ],
    process: [
      { step: 1, title: "Baustellenbegehung", description: "Erfassung des Reinigungsumfangs" },
      { step: 2, title: "Grobreinigung", description: "Entfernung grober Verschmutzungen" },
      { step: 3, title: "Feinreinigung", description: "Detaillierte Endreinigung" },
      { step: 4, title: "Übergabe", description: "Abnahme mit Bauherr/Auftraggeber" }
    ]
  },
  photovoltaikreinigung: {
    title: "Photovoltaikreinigung",
    subtitle: "Maximale Leistung Ihrer Anlage",
    description: "Fachgerechte Reinigung von Solaranlagen für maximale Leistung.",
    longDescription: "Verschmutzte Solarmodule können bis zu 30% Leistungsverlust bedeuten. Unsere professionelle Photovoltaikreinigung mit entmineralisiertem Wasser sorgt für maximalen Ertrag und schont gleichzeitig Ihre Anlage.",
    icon: Sun,
    features: [
      "Reinigung mit entmineralisiertem Wasser",
      "Schonende Bürstentechnik",
      "Keine Reinigungsmittel nötig",
      "Dokumentation des Zustands",
      "Sichtprüfung auf Beschädigungen",
      "Reinigung von Wechselrichtern"
    ],
    benefits: [
      "Bis zu 30% mehr Ertrag",
      "Längere Lebensdauer",
      "Garantieerhaltung",
      "Umweltschonende Reinigung"
    ],
    process: [
      { step: 1, title: "Inspektion", description: "Prüfung der Anlage und Verschmutzung" },
      { step: 2, title: "Vorbereitung", description: "Sicherung und Zugangsvorbereitung" },
      { step: 3, title: "Reinigung", description: "Schonende Modulreinigung" },
      { step: 4, title: "Dokumentation", description: "Fotodokumentation und Bericht" }
    ]
  },
  steinreinigung: {
    title: "Steinreinigung",
    subtitle: "Naturstein, Pflaster & Terrassen",
    description: "Professionelle Reinigung von Naturstein, Pflaster und Terrassen.",
    longDescription: "Steinoberflächen im Außenbereich sind Witterung und Verschmutzung ausgesetzt. Unsere Steinreinigung entfernt Moos, Algen, Flechten und Verschmutzungen schonend und nachhaltig – für gepflegte Einfahrten, Terrassen und Fassaden.",
    icon: Gem,
    features: [
      "Pflasterreinigung",
      "Terrassenreinigung",
      "Natursteinreinigung",
      "Moos- und Algenentfernung",
      "Fassadenreinigung",
      "Imprägnierung optional"
    ],
    benefits: [
      "Wie-neu-Optik",
      "Rutschsicherheit erhöhen",
      "Werterhaltung",
      "Langfristiger Schutz"
    ],
    process: [
      { step: 1, title: "Begutachtung", description: "Analyse des Steinmaterials" },
      { step: 2, title: "Vorbehandlung", description: "Auftragen von Spezialreinigern" },
      { step: 3, title: "Reinigung", description: "Schonende Hochdruckreinigung" },
      { step: 4, title: "Versiegelung", description: "Optional: Imprägnierung" }
    ]
  },
  treppenhausreinigung: {
    title: "Treppenhausreinigung",
    subtitle: "Für Wohnanlagen & Mehrfamilienhäuser",
    description: "Regelmäßige Reinigung von Treppenhäusern und Gemeinschaftsflächen.",
    longDescription: "Das Treppenhaus ist die Visitenkarte eines Gebäudes. Unsere regelmäßige Treppenhausreinigung sorgt für gepflegte Gemeinschaftsflächen, zufriedene Bewohner und Werterhaltung Ihrer Immobilie.",
    icon: Footprints,
    features: [
      "Treppenreinigung und Geländer",
      "Flure und Eingangsbereiche",
      "Briefkastenanlagen",
      "Aufzüge und Spiegel",
      "Fußmatten und Schmutzfänger",
      "Haustür und Glaselemente"
    ],
    benefits: [
      "Zufriedene Mieter",
      "Gepflegter Gesamteindruck",
      "Werterhaltung der Immobilie",
      "Zuverlässige Regelmäßigkeit"
    ],
    process: [
      { step: 1, title: "Objektaufnahme", description: "Erfassung aller Gemeinschaftsflächen" },
      { step: 2, title: "Reinigungsplan", description: "Festlegung von Intervallen" },
      { step: 3, title: "Durchführung", description: "Regelmäßige Reinigung" },
      { step: 4, title: "Kontrolle", description: "Qualitätssicherung" }
    ]
  },
  sonderreinigung: {
    title: "Sonderreinigung",
    subtitle: "Individuelle Reinigungslösungen",
    description: "Individuelle Reinigungslösungen für besondere Anforderungen.",
    longDescription: "Manche Situationen erfordern spezielle Lösungen. Ob Entrümpelung, Desinfektionsreinigung oder außergewöhnliche Verschmutzungen – wir finden die passende Lösung für Ihre individuellen Anforderungen.",
    icon: Brush,
    features: [
      "Desinfektionsreinigung",
      "Tatortreinigung",
      "Entrümpelung mit Reinigung",
      "Graffitientfernung",
      "Geruchsneutralisierung",
      "Spezialreinigungen auf Anfrage"
    ],
    benefits: [
      "Individuelle Lösungen",
      "Diskrete Abwicklung",
      "Schnelle Verfügbarkeit",
      "Fachgerechte Ausführung"
    ],
    process: [
      { step: 1, title: "Anfrage", description: "Schilderung der Situation" },
      { step: 2, title: "Beratung", description: "Individuelle Lösungsfindung" },
      { step: 3, title: "Umsetzung", description: "Professionelle Durchführung" },
      { step: 4, title: "Nachbereitung", description: "Abschlusskontrolle" }
    ]
  }
};

const LeistungDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const leistung = slug ? leistungenData[slug] : null;

  if (!leistung) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Leistung nicht gefunden</h1>
            <Button onClick={() => navigate('/leistungen')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zu Leistungen
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const IconComponent = leistung.icon;

  const scrollToQuote = () => {
    navigate('/#quote-form');
    setTimeout(() => {
      document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="section-container">
            <Link 
              to="/leistungen" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Alle Leistungen
            </Link>
            
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <IconComponent className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="text-primary font-medium mb-2">{leistung.subtitle}</p>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                  {leistung.title}
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  {leistung.longDescription}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="py-16">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Leistungsumfang */}
              <div>
                <h2 className="text-2xl font-display font-bold mb-6">Leistungsumfang</h2>
                <ul className="space-y-3">
                  {leistung.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ihre Vorteile */}
              <div>
                <h2 className="text-2xl font-display font-bold mb-6">Ihre Vorteile</h2>
                <ul className="space-y-3">
                  {leistung.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-secondary/30">
          <div className="section-container">
            <h2 className="text-2xl font-display font-bold mb-8 text-center">So läuft es ab</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {leistung.process.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="section-container text-center">
            <h2 className="text-3xl font-display font-bold mb-4">
              Interesse an {leistung.title}?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Fordern Sie jetzt ein kostenloses und unverbindliches Angebot an. 
              Wir melden uns schnellstmöglich bei Ihnen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={scrollToQuote}>
                Kostenloses Angebot anfordern
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+4926413968989">
                  <Phone className="w-4 h-4 mr-2" />
                  02641 396 89 89
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LeistungDetail;
