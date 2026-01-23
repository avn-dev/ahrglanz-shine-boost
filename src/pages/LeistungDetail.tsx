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
  Brush,
  Shield
} from "lucide-react";

// Import images
import unterhaltsreinigungImg from "@/assets/leistung-unterhaltsreinigung.webp";
import grundreinigungImg from "@/assets/leistung-grundreinigung.webp";
import glasreinigungImg from "@/assets/leistung-glasreinigung.jpg";
import desinfektionImg from "@/assets/leistung-desinfektion.webp";
import baureinigungImg from "@/assets/leistung-baureinigung.webp";
import photovoltaikImg from "@/assets/leistung-photovoltaik.webp";
import steinreinigungImg from "@/assets/leistung-steinreinigung.webp";
import treppenhausImg from "@/assets/leistung-treppenhaus.webp";

const leistungenData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  icon: React.ElementType;
  image: string;
  features: string[];
  benefits: string[];
  process: { step: number; title: string; description: string }[];
}> = {
  unterhaltsreinigung: {
    title: "Unterhaltsreinigung",
    subtitle: "Dauerhaft saubere & gepflegte Objekte",
    description: "Zuverlässige Unterhaltsreinigung für dauerhaft saubere und gepflegte Objekte.",
    longDescription: "Unsere Unterhaltsreinigung sorgt für dauerhaft saubere und hygienische Räumlichkeiten. Mit festen Reinigungsplänen und geschultem Personal gewährleisten wir gleichbleibend hohe Qualität – ob täglich, wöchentlich oder nach individuellem Bedarf. Im Raum Bad Neuenahr-Ahrweiler, Bonn & Umgebung.",
    icon: Sparkles,
    image: unterhaltsreinigungImg,
    features: [
      "Regelmäßige Reinigung: Täglich, wöchentlich oder nach individuellem Turnus",
      "Büros, Praxen, Kitas, Schulen und Verkaufsflächen",
      "Sanitär & Hygiene: Reinigung von Toiletten, Küchen und Gemeinschaftsbereichen",
      "Böden & Oberflächen: Materialschonende Reinigung von Möbeln und Kontaktflächen",
      "Individuelle Reinigungspläne abgestimmt auf Objektgröße und Nutzung",
      "Geschultes Personal & feste Ansprechpartner"
    ],
    benefits: [
      "Gleichbleibend hohe Sauberkeit",
      "Planbar, transparent & termintreu",
      "Flexible Reinigungszeiten",
      "Dokumentierte Qualitätskontrollen"
    ],
    process: [
      { step: 1, title: "Kostenlose Besichtigung", description: "Vor-Ort-Begehung zur Ermittlung des Reinigungsbedarfs" },
      { step: 2, title: "Individuelles Angebot", description: "Transparentes Angebot inkl. Reinigungsplan" },
      { step: 3, title: "Regelmäßige Durchführung", description: "Zuverlässige Reinigung mit regelmäßiger Qualitätskontrolle" }
    ]
  },
  grundreinigung: {
    title: "Grundreinigung",
    subtitle: "Professionelle Intensivreinigung",
    description: "Professionelle Grundreinigung für Gewerbe, Privat- und öffentliche Objekte.",
    longDescription: "Die Grundreinigung ist die intensive Lösung für stark verschmutzte Flächen. Wir entfernen hartnäckigen Schmutz, alte Pflegefilme und Ablagerungen – und bringen Ihre Räume wieder zum Strahlen. Ideal vor Neubezug, nach Renovierung oder als jährliche Intensivreinigung.",
    icon: Building2,
    image: grundreinigungImg,
    features: [
      "Intensive Reinigung von Böden, Oberflächen & schwer zugänglichen Bereichen",
      "Entfernung von Kalk, Fett, Schmutzschichten & alten Pflegefilmen",
      "Spezialreinigung für Fliesen, PVC, Linoleum, Naturstein & Teppich",
      "Tiefenreinigung von Sanitärbereichen, Küchen & Nasszellen",
      "Ideal nach Bauarbeiten, vor Neuvermietung oder bei starker Verschmutzung",
      "Sorgfältig, materialschonend & professionell durchgeführt"
    ],
    benefits: [
      "Wie-neu-Zustand Ihrer Räume",
      "Basis für regelmäßige Pflege",
      "Verlängerung der Lebensdauer von Böden",
      "Hygienisch einwandfrei"
    ],
    process: [
      { step: 1, title: "Kostenlose Besichtigung", description: "Vor-Ort-Begutachtung von Material und Aufwand" },
      { step: 2, title: "Individuelles Angebot", description: "Transparentes, objektspezifisches Angebot" },
      { step: 3, title: "Zuverlässige Durchführung", description: "Professionelle Ausführung nach Qualitätsstandards" }
    ]
  },
  glasreinigung: {
    title: "Glasreinigung",
    subtitle: "Klare Sicht & gepflegter Eindruck",
    description: "Professionelle Glasreinigung für klare Sicht und einen gepflegten Eindruck.",
    longDescription: "Saubere Fenster und Glasflächen sorgen für einen professionellen ersten Eindruck. Unsere Glasreinigung garantiert streifenfreie Ergebnisse – von einzelnen Fenstern bis hin zu großen Glasfassaden. Mit modernster Technik und erfahrenem Personal.",
    icon: Droplets,
    image: glasreinigungImg,
    features: [
      "Fenster & Rahmen: Streifenfreie Reinigung inkl. Rahmen, Falzen und Fensterbänken",
      "Glasfassaden & Fronten: Reinigung von Glasfassaden und Eingangsfronten",
      "Innen- & Außenreinigung: Auch bei schwer zugänglichen Flächen",
      "Gewerbe & Privatobjekte: Büros, Praxen, Wohnanlagen und Gewerbeobjekte",
      "Materialschonende Reinigung: Geeignete Techniken für Glas, Rahmen und Dichtungen",
      "Regelmäßige Glasreinigung für dauerhaft klare Sicht und Werterhalt"
    ],
    benefits: [
      "Streifenfreies Ergebnis",
      "Mehr Licht und Helligkeit",
      "Professioneller Eindruck",
      "Werterhaltung der Glasflächen"
    ],
    process: [
      { step: 1, title: "Kostenlose Besichtigung", description: "Begutachtung der Glasflächen, Zugänglichkeit und Reinigungsumfang" },
      { step: 2, title: "Individuelles Angebot", description: "Transparentes Angebot abgestimmt auf Objektgröße und Aufwand" },
      { step: 3, title: "Fachgerechte Reinigung", description: "Zuverlässige Ausführung nach festen Qualitätsstandards" }
    ]
  },
  baureinigung: {
    title: "Baureinigung",
    subtitle: "Neubau, Umbau & Renovierung",
    description: "Professionelle Baureinigung für Neubau, Umbau und Renovierung – von der Grobreinigung bis zur bezugsfertigen Endreinigung.",
    longDescription: "Ob Neubau, Umbau oder Renovierung – Bauarbeiten hinterlassen Staub, Schmutz und Rückstände. Unsere professionelle Baureinigung begleitet Sie von der Grobreinigung während der Bauphase bis zur gründlichen Endreinigung vor der Übergabe. Wir kümmern uns zuverlässig um saubere Baustellen und eine termingerechte Abnahme – für private, gewerbliche und öffentliche Bauherren.",
    icon: Construction,
    image: baureinigungImg,
    features: [
      "Grobreinigung: Entfernung von Bauschutt, grobem Schmutz und Restmaterialien",
      "Zwischenreinigung: Regelmäßige Reinigung während der Bauarbeiten",
      "Endreinigung: Gründliche Feinreinigung vor Übergabe oder Abnahme",
      "Reinigung von Böden, Türen, Fenstern und Sanitärbereichen",
      "Materialschonende Behandlung empfindlicher Oberflächen",
      "Für Neubau, Umbau und Renovierungsprojekte geeignet"
    ],
    benefits: [
      "Bezugsfertige, saubere Räume ohne Baurückstände",
      "Termingerechte Fertigstellung zur Übergabe",
      "Ordnung und Sicherheit auf der Baustelle",
      "Professionelle Abnahme mit Qualitätskontrolle"
    ],
    process: [
      { step: 1, title: "Kostenlose Besichtigung", description: "Vor-Ort-Begehung zur Klärung von Reinigungsbedarf, Bauphase und Zeitplan" },
      { step: 2, title: "Individuelles Angebot", description: "Transparentes, objektspezifisches Angebot mit klar definierten Leistungen" },
      { step: 3, title: "Zuverlässige Durchführung", description: "Termingerechte Reinigung nach abgestimmtem Plan mit Qualitätskontrolle" }
    ]
  },
  desinfektionsreinigung: {
    title: "Desinfektionsreinigung",
    subtitle: "Hygiene für sensible Bereiche",
    description: "Professionelle Desinfektionsreinigung für sensible Bereiche nach geltenden Hygiene- und Sicherheitsstandards.",
    longDescription: "Wir reduzieren Keime, Bakterien und Viren zuverlässig und sorgen für hygienisch sichere Räume nach geltenden Hygiene- und Qualitätsstandards. Unsere Desinfektionsreinigung schützt Mitarbeiter, Kunden und Besucher – zuverlässig und professionell.",
    icon: Shield,
    image: desinfektionImg,
    features: [
      "Flächendesinfektion: Gründliche Desinfektion von Kontaktflächen, Böden und Sanitärbereichen",
      "Hygienische Sicherheit: Einsatz geprüfter Desinfektionsmittel (VAH) gegen Bakterien, Viren und Keime",
      "Sensible Bereiche: Geeignet für Praxen, Büros, Schulen und Pflegeeinrichtungen",
      "Oberflächen & Materialien: Materialschonende Desinfektion ohne Rückstände",
      "Regelmäßig oder einmalig: Individuell auf Ihr Objekt abgestimmt",
      "Diskrete Durchführung nach klar definierten Qualitätsstandards"
    ],
    benefits: [
      "Reduzierung von Keimen und Krankheitserregern",
      "Schutz für Mitarbeiter und Besucher",
      "Dokumentation auf Wunsch",
      "Geschultes Fachpersonal"
    ],
    process: [
      { step: 1, title: "Kostenlose Besichtigung", description: "Analyse der zu desinfizierenden Bereiche und Klärung der Hygienestandards" },
      { step: 2, title: "Individuelles Angebot", description: "Transparentes, objektspezifisches Angebot mit klar definierten Leistungen" },
      { step: 3, title: "Zuverlässige Durchführung", description: "Termingerechte Desinfektion nach Plan – auf Wunsch mit Dokumentation" }
    ]
  },
  photovoltaikreinigung: {
    title: "Photovoltaikreinigung",
    subtitle: "Maximale Leistung & Werterhalt",
    description: "Professionelle Photovoltaikreinigung für maximale Leistung und langfristigen Werterhalt.",
    longDescription: "Verschmutzte Solarmodule verlieren messbar an Leistung. Unsere professionelle Photovoltaikreinigung entfernt Staub, Pollen, Vogelkot und Umweltablagerungen zuverlässig – für maximale Energieausbeute und sichere Anlagen. Wir reinigen gründlich, materialschonend und ohne Chemie.",
    icon: Sun,
    image: photovoltaikImg,
    features: [
      "Mehr Leistung & Ertrag: Saubere Module verbessern die Lichtaufnahme und den Wirkungsgrad",
      "Schonende Reinigung: Mit entmineralisiertem Wasser und weichen Bürsten – ohne Chemie",
      "Hartnäckige Verschmutzungen: Entfernung von Staub, Pollen, Moos und Vogelkot",
      "Für alle Anlagen: Private, gewerbliche, landwirtschaftliche PV-Anlagen und Solarparks",
      "Sicher & fachgerecht: Geschultes Personal und professionelle Ausrüstung",
      "Langfristiger Werterhalt: Regelmäßige Reinigung verlängert die Lebensdauer"
    ],
    benefits: [
      "Bis zu 30% mehr Ertrag",
      "Chemiefreie Reinigung",
      "Material- & umweltschonend",
      "Für Dach- & Freiflächenanlagen"
    ],
    process: [
      { step: 1, title: "Kostenlose Besichtigung", description: "Prüfung der Anlage, Zugänglichkeit und Verschmutzungsgrad vor Ort" },
      { step: 2, title: "Individuelles Angebot", description: "Transparentes Angebot passend zur Anlagengröße und Anforderung" },
      { step: 3, title: "Zuverlässige Durchführung", description: "Sichere, gründliche Reinigung nach festen Qualitätsstandards" }
    ]
  },
  steinreinigung: {
    title: "Steinreinigung",
    subtitle: "Außenflächen, Wege & Terrassen",
    description: "Professionelle Steinreinigung für Außenflächen, Wege, Terrassen und Fassaden.",
    longDescription: "Steinoberflächen im Außenbereich sind Witterung und Verschmutzung ausgesetzt. Unsere Steinreinigung entfernt Moos, Algen, Flechten und hartnäckige Verschmutzungen schonend und nachhaltig – für gepflegte Einfahrten, Terrassen und Fassaden mit sauberer Optik und sicherer Begehbarkeit.",
    icon: Gem,
    image: steinreinigungImg,
    features: [
      "Tiefenreinigung: Entfernung von Moos, Algen und Ablagerungen bis in die Poren",
      "Materialgerecht: Methoden angepasst an Beton, Naturstein, Pflaster und Klinker",
      "Terrassen, Einfahrten, Gehwege, Innenhöfe, Treppen und Mauern",
      "Für private und gewerbliche Objekte geeignet",
      "Materialschonende Reinigung für langfristigen Werterhalt",
      "Saubere Optik & sichere Begehbarkeit"
    ],
    benefits: [
      "Wie-neu-Optik der Flächen",
      "Rutschsicherheit erhöhen",
      "Werterhaltung der Außenanlagen",
      "Langfristiger Schutz möglich"
    ],
    process: [
      { step: 1, title: "Kostenlose Besichtigung", description: "Begutachtung von Material, Verschmutzungsgrad und Fläche" },
      { step: 2, title: "Individuelles Angebot", description: "Transparentes und faires Angebot nach Aufwand und Fläche" },
      { step: 3, title: "Zuverlässige Durchführung", description: "Gründliche Ausführung nach festen Qualitätsstandards" }
    ]
  },
  treppenhausreinigung: {
    title: "Treppenhausreinigung",
    subtitle: "Die Visitenkarte Ihrer Immobilie",
    description: "Zuverlässige Treppenhausreinigung für Wohn- und Geschäftsgebäude.",
    longDescription: "Ein sauberes Treppenhaus ist die Visitenkarte jeder Immobilie. Mit unserer professionellen Treppenhausreinigung schaffen wir Ordnung, Hygiene und einen positiven ersten Eindruck – regelmäßig, gründlich und nach festen Qualitätsstandards.",
    icon: Footprints,
    image: treppenhausImg,
    features: [
      "Regelmäßige Reinigung: Nach festem Plan – wöchentlich, zweiwöchentlich oder individuell",
      "Böden & Stufen: Gründliche Reinigung von Treppenstufen, Podesten und Bodenflächen",
      "Handläufe & Geländer: Reinigung stark beanspruchter Kontaktflächen",
      "Eingangs- & Gemeinschaftsbereiche: Hauseingänge, Flure, Kellerzugänge und Aufzüge",
      "Wohn- & Gewerbeobjekte: Mehrfamilienhäuser, Wohnanlagen und Bürogebäude",
      "Feste Ansprechpartner und gleichbleibende Reinigungsqualität"
    ],
    benefits: [
      "Zufriedene Mieter & Bewohner",
      "Gepflegter Gesamteindruck",
      "Werterhaltung der Immobilie",
      "Ideal für Hausverwaltungen & Eigentümer"
    ],
    process: [
      { step: 1, title: "Kostenlose Besichtigung", description: "Objektbesichtigung zur Erfassung von Flächen, Umfang und Turnus" },
      { step: 2, title: "Individuelles Angebot", description: "Transparentes Angebot mit klar definierten Leistungen" },
      { step: 3, title: "Zuverlässige Durchführung", description: "Regelmäßige, termingerechte und kontrollierte Reinigung" }
    ]
  },
  sonderreinigung: {
    title: "Sonderreinigung",
    subtitle: "Individuelle Reinigungslösungen",
    description: "Individuelle Reinigungslösungen für besondere Anforderungen.",
    longDescription: "Manche Situationen erfordern spezielle Lösungen. Ob Entrümpelung, Desinfektionsreinigung oder außergewöhnliche Verschmutzungen – wir finden die passende Lösung für Ihre individuellen Anforderungen im Raum Bad Neuenahr-Ahrweiler, Bonn & Umgebung.",
    icon: Brush,
    image: unterhaltsreinigungImg,
    features: [
      "Desinfektionsreinigung",
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
      { step: 3, title: "Umsetzung", description: "Professionelle Durchführung" }
    ]
  },
  tatortreinigung: {
    title: "Tatortreinigung",
    subtitle: "Diskrete Spezialreinigung",
    description: "Professionelle und diskrete Reinigung nach Todesfällen oder traumatischen Ereignissen.",
    longDescription: "Nach Todesfällen, Unfällen oder anderen traumatischen Ereignissen ist eine professionelle Reinigung unerlässlich. Wir bieten diskrete, einfühlsame und fachgerechte Tatortreinigung – schnell verfügbar und absolut vertraulich.",
    icon: Brush,
    image: desinfektionImg,
    features: [
      "Reinigung nach Todesfällen",
      "Beseitigung biologischer Spuren",
      "Geruchsneutralisierung",
      "Desinfektion aller Oberflächen",
      "Entsorgung kontaminierter Materialien",
      "Wiederherstellung der Bewohnbarkeit"
    ],
    benefits: [
      "Absolute Diskretion",
      "24/7 Notfall-Erreichbarkeit",
      "Geschultes Fachpersonal",
      "Einfühlsame Abwicklung",
      "Zusammenarbeit mit Behörden"
    ],
    process: [
      { step: 1, title: "Erstkontakt", description: "Vertrauliche Anfrage 24/7" },
      { step: 2, title: "Begutachtung", description: "Vor-Ort-Analyse nach Freigabe" },
      { step: 3, title: "Spezialreinigung", description: "Professionelle Durchführung" }
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
        {/* Hero Section with Image */}
        <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="section-container">
            <Link 
              to="/leistungen" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4 md:mb-6 text-sm md:text-base"
            >
              <ArrowLeft className="w-4 h-4" />
              Alle Leistungen
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Text Content */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <p className="text-primary font-medium text-sm sm:text-base">{leistung.subtitle}</p>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 md:mb-6">
                  {leistung.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
                  {leistung.longDescription}
                </p>
                
                {/* Desktop CTA buttons */}
                <div className="hidden sm:flex flex-col sm:flex-row gap-4">
                  <Button size="lg" onClick={scrollToQuote}>
                    Kostenloses Angebot
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="tel:+4926413968989">
                      <Phone className="w-4 h-4 mr-2" />
                      02641 396 89 89
                    </a>
                  </Button>
                </div>
              </div>
              
              {/* Hero Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={leistung.image} 
                    alt={leistung.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/20 rounded-full -z-10" />
              </div>
            </div>
            
            {/* Mobile CTA buttons */}
            <div className="flex flex-col sm:hidden gap-3 mt-6">
              <Button size="lg" onClick={scrollToQuote} className="w-full">
                Kostenloses Angebot
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full">
                <a href="tel:+4926413968989">
                  <Phone className="w-4 h-4 mr-2" />
                  Jetzt anrufen
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="py-10 md:py-16">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Leistungsumfang */}
              <div className="bg-card rounded-xl p-5 sm:p-6 border shadow-sm">
                <h2 className="text-xl sm:text-2xl font-display font-bold mb-4 sm:mb-6">Leistungsumfang</h2>
                <ul className="space-y-2.5 sm:space-y-3">
                  {leistung.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2.5 sm:gap-3">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ihre Vorteile */}
              <div className="bg-card rounded-xl p-5 sm:p-6 border shadow-sm">
                <h2 className="text-xl sm:text-2xl font-display font-bold mb-4 sm:mb-6">Ihre Vorteile</h2>
                <ul className="space-y-2.5 sm:space-y-3">
                  {leistung.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2.5 sm:gap-3">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-foreground/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-10 md:py-16 bg-secondary/30">
          <div className="section-container">
            <h2 className="text-xl sm:text-2xl font-display font-bold mb-6 md:mb-8 text-center">So einfach funktioniert es</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {leistung.process.map((step) => (
                <div key={step.step} className="text-center bg-background rounded-xl p-4 md:p-6 shadow-sm">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg md:text-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-display font-semibold text-sm md:text-base mb-1 md:mb-2">{step.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-primary/5">
          <div className="section-container text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-3 md:mb-4">
              Noch Fragen zur {leistung.title}?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
              Nach einer kostenlosen Besichtigung erstellen wir ein individuelles Angebot für Ihre {leistung.title}.
              Zuverlässig, termingerecht und nach festen Qualitätsstandards – im Raum Bad Neuenahr-Ahrweiler, Bonn & Umgebung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={scrollToQuote}>
                Jetzt kostenlos anfragen
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
