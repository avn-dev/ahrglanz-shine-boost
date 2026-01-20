import { useParams, Link, useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Phone } from "lucide-react";

import wohnanlageImg from "@/assets/object-wohnanlage.jpg";
import bueroImg from "@/assets/object-buero.jpg";
import hotelImg from "@/assets/object-hotel.jpg";
import kitaImg from "@/assets/object-kita.jpg";
import praxisImg from "@/assets/object-praxis.jpg";
import sportclubImg from "@/assets/object-sportclub.jpg";

const objekteData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  services: string[];
  benefits: string[];
}> = {
  wohnanlage: {
    title: "Wohnanlage",
    subtitle: "Treppenhäuser & Gemeinschaftsflächen",
    description: "Regelmäßige Reinigung von Treppenhäusern, Fluren und Gemeinschaftsflächen.",
    longDescription: "Für Wohnanlagen und Mehrfamilienhäuser bieten wir eine zuverlässige Reinigung aller Gemeinschaftsflächen. Saubere Treppenhäuser und gepflegte Eingangsbereiche sorgen für zufriedene Bewohner und eine werterhaltende Gebäudepflege.",
    image: wohnanlageImg,
    features: [
      "Treppenhausreinigung",
      "Eingangsbereiche & Flure",
      "Aufzüge & Spiegel",
      "Briefkastenanlagen",
      "Müllräume",
      "Tiefgaragen & Kellerflure"
    ],
    services: [
      "Unterhaltsreinigung",
      "Glasreinigung",
      "Grundreinigung"
    ],
    benefits: [
      "Zufriedene Mieter",
      "Werterhaltung der Immobilie",
      "Feste Reinigungsintervalle",
      "Dokumentierte Qualität"
    ]
  },
  buero: {
    title: "Bürogebäude",
    subtitle: "Professionelle Büroreinigung",
    description: "Saubere Arbeitsplätze für produktive Mitarbeiter und professionelle Außenwirkung.",
    longDescription: "Ein sauberes Büro fördert die Produktivität und hinterlässt bei Kunden und Mitarbeitern einen professionellen Eindruck. Wir reinigen Büroräume, Konferenzräume, Sanitäranlagen und Gemeinschaftsbereiche nach Ihren Vorgaben.",
    image: bueroImg,
    features: [
      "Arbeitsplatz- & Schreibtischreinigung",
      "Konferenz- & Besprechungsräume",
      "Empfang & Wartebereiche",
      "Teeküchen & Sozialräume",
      "Sanitäranlagen",
      "Böden & Teppiche"
    ],
    services: [
      "Unterhaltsreinigung",
      "Glasreinigung",
      "Grundreinigung",
      "Teppichreinigung"
    ],
    benefits: [
      "Höhere Mitarbeiterzufriedenheit",
      "Professionelle Außenwirkung",
      "Flexible Reinigungszeiten",
      "Hygienische Arbeitsumgebung"
    ]
  },
  hotel: {
    title: "Hotel & Gastgewerbe",
    subtitle: "Hotellerie & Gastronomie",
    description: "Höchste Hygienestandards für Gästezufriedenheit und positive Bewertungen.",
    longDescription: "In der Hotellerie und Gastronomie entscheidet Sauberkeit über den Erfolg. Wir bieten professionelle Reinigungsservices, die höchsten Hygienestandards entsprechen – für zufriedene Gäste und positive Bewertungen.",
    image: hotelImg,
    features: [
      "Lobby & Empfangsbereiche",
      "Restaurant & Bar",
      "Konferenzräume",
      "Gemeinschaftliche Sanitäranlagen",
      "Außenbereiche & Terrassen",
      "Küchenbereiche"
    ],
    services: [
      "Unterhaltsreinigung",
      "Grundreinigung",
      "Glasreinigung",
      "Sonderreinigung"
    ],
    benefits: [
      "Höchste Hygienestandards",
      "Positive Gästebewertungen",
      "Flexible Einsatzzeiten",
      "Diskrete Durchführung"
    ]
  },
  kita: {
    title: "Kita & Bildungseinrichtung",
    subtitle: "Kindertagesstätten & Schulen",
    description: "Kindgerechte Hygiene für sichere Lern- und Spielumgebungen.",
    longDescription: "In Kindertagesstätten und Bildungseinrichtungen ist Hygiene besonders wichtig. Wir reinigen mit kindersicheren Mitteln und sorgen für saubere, gesunde Räume, in denen Kinder sicher lernen und spielen können.",
    image: kitaImg,
    features: [
      "Gruppenräume & Spielbereiche",
      "Schlafräume",
      "Sanitäranlagen (kindgerecht)",
      "Küchen & Essräume",
      "Flure & Garderoben",
      "Außenspielgeräte"
    ],
    services: [
      "Unterhaltsreinigung",
      "Desinfektionsreinigung",
      "Grundreinigung",
      "Glasreinigung"
    ],
    benefits: [
      "Kindersichere Reinigungsmittel",
      "Reduzierte Krankheitsübertragung",
      "Hygienisch einwandfreie Räume",
      "Regelmäßige Desinfektion"
    ]
  },
  praxis: {
    title: "Praxis & Gesundheitswesen",
    subtitle: "Arztpraxen & Gesundheitseinrichtungen",
    description: "Medizinische Hygienestandards für Praxen und Gesundheitseinrichtungen.",
    longDescription: "Arztpraxen und Gesundheitseinrichtungen erfordern höchste Hygienestandards. Unsere geschulten Teams reinigen nach medizinischen Vorgaben und sorgen für eine keimfreie, vertrauenswürdige Umgebung für Patienten und Personal.",
    image: praxisImg,
    features: [
      "Wartezimmer & Empfang",
      "Behandlungsräume",
      "Sanitäranlagen",
      "Laborbereiche",
      "Sozialräume",
      "Böden & Oberflächen"
    ],
    services: [
      "Unterhaltsreinigung",
      "Desinfektionsreinigung",
      "Grundreinigung",
      "Sonderreinigung"
    ],
    benefits: [
      "Medizinische Hygienestandards",
      "Geschultes Fachpersonal",
      "Dokumentierte Reinigung",
      "Patientenvertrauen stärken"
    ]
  },
  sportclub: {
    title: "Sportclub & Fitnessstudio",
    subtitle: "Sportstätten & Fitnesseinrichtungen",
    description: "Hygienische Trainingsumgebung für gesunde und zufriedene Mitglieder.",
    longDescription: "Sportstätten und Fitnessstudios erfordern intensive Reinigung und regelmäßige Desinfektion. Wir sorgen für hygienische Trainingsgeräte, saubere Umkleiden und gepflegte Sanitäranlagen – für zufriedene Mitglieder.",
    image: sportclubImg,
    features: [
      "Trainingsflächen & Geräte",
      "Umkleiden & Duschen",
      "Sanitäranlagen",
      "Empfang & Lounge",
      "Kurssäle",
      "Saunabereiche"
    ],
    services: [
      "Unterhaltsreinigung",
      "Desinfektionsreinigung",
      "Grundreinigung",
      "Glasreinigung"
    ],
    benefits: [
      "Hygienische Geräte",
      "Keimfreie Nassbereiche",
      "Zufriedene Mitglieder",
      "Positive Außenwirkung"
    ]
  },
  industrie: {
    title: "Industrie & Produktion",
    subtitle: "Produktionsstätten & Lagerhallen",
    description: "Industrielle Reinigung für sichere und effiziente Produktionsumgebungen.",
    longDescription: "Industriebetriebe stellen besondere Anforderungen an die Reinigung. Wir bieten professionelle Industriereinigung für Produktionshallen, Lagerflächen und Sozialräume – für Sicherheit, Effizienz und Sauberkeit am Arbeitsplatz.",
    image: bueroImg,
    features: [
      "Produktionshallen",
      "Lagerflächen",
      "Sozialräume & Kantinen",
      "Sanitäranlagen",
      "Verwaltungsbereiche",
      "Außenflächen"
    ],
    services: [
      "Unterhaltsreinigung",
      "Grundreinigung",
      "Sonderreinigung",
      "Baureinigung"
    ],
    benefits: [
      "Arbeitssicherheit erhöhen",
      "Effiziente Abläufe",
      "Saubere Arbeitsumgebung",
      "Flexible Einsatzzeiten"
    ]
  },
  geschaeft: {
    title: "Einzelhandel & Geschäft",
    subtitle: "Ladenflächen & Verkaufsräume",
    description: "Einladende Verkaufsflächen für positive Kundenerlebnisse.",
    longDescription: "Im Einzelhandel zählt der erste Eindruck. Saubere Verkaufsräume, gepflegte Schaufenster und hygienische Sanitäranlagen sorgen für ein positives Einkaufserlebnis und zufriedene Kunden.",
    image: bueroImg,
    features: [
      "Verkaufsflächen",
      "Schaufenster",
      "Kassenbereich",
      "Lager & Nebenräume",
      "Sanitäranlagen",
      "Eingangsbereiche"
    ],
    services: [
      "Unterhaltsreinigung",
      "Glasreinigung",
      "Grundreinigung"
    ],
    benefits: [
      "Positiver erster Eindruck",
      "Höhere Kundenzufriedenheit",
      "Gepflegte Präsentation",
      "Flexible Reinigungszeiten"
    ]
  },
  gastronomiebetrieb: {
    title: "Gastronomiebetrieb",
    subtitle: "Restaurants & Cafés",
    description: "Hygienische Gastronomie für zufriedene Gäste und beste Bewertungen.",
    longDescription: "In der Gastronomie entscheidet Sauberkeit über den Erfolg. Wir reinigen Gaststätten, Restaurants und Cafés nach höchsten Hygienestandards – für zufriedene Gäste, positive Bewertungen und erfolgreiche Betriebsprüfungen.",
    image: hotelImg,
    features: [
      "Gastraum & Sitzbereich",
      "Theke & Bar",
      "Küche & Nebenräume",
      "Sanitäranlagen",
      "Außenbereiche & Terrassen",
      "Lagerflächen"
    ],
    services: [
      "Unterhaltsreinigung",
      "Grundreinigung",
      "Glasreinigung",
      "Sonderreinigung"
    ],
    benefits: [
      "HACCP-konforme Reinigung",
      "Positive Gästebewertungen",
      "Erfolgreiche Kontrollen",
      "Flexible Einsatzzeiten"
    ]
  }
};

const ObjektDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const objekt = slug ? objekteData[slug] : null;

  if (!objekt) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Objekt nicht gefunden</h1>
            <Button onClick={() => navigate('/objekte')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zu Objekte
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
        <section className="relative pt-24 pb-16">
          <div className="absolute inset-0 h-80">
            <img 
              src={objekt.image} 
              alt={objekt.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
          </div>
          
          <div className="section-container relative z-10 pt-8">
            <Link 
              to="/objekte" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Alle Objekte
            </Link>
            
            <p className="text-primary-foreground/80 font-medium mb-2">{objekt.subtitle}</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              {objekt.title}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              {objekt.longDescription}
            </p>
          </div>
        </section>

        {/* Services & Features */}
        <section className="py-16 mt-16">
          <div className="section-container">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Reinigungsbereiche */}
              <div className="bg-card rounded-xl p-6 shadow-sm border">
                <h2 className="text-xl font-display font-bold mb-4">Reinigungsbereiche</h2>
                <ul className="space-y-2">
                  {objekt.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Passende Leistungen */}
              <div className="bg-card rounded-xl p-6 shadow-sm border">
                <h2 className="text-xl font-display font-bold mb-4">Passende Leistungen</h2>
                <ul className="space-y-2">
                  {objekt.services.map((service, index) => (
                    <li key={index}>
                      <Link 
                        to={`/leistungen/${service.toLowerCase().replace(/\s+/g, '')}`}
                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                      >
                        <Check className="w-4 h-4" />
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ihre Vorteile */}
              <div className="bg-card rounded-xl p-6 shadow-sm border">
                <h2 className="text-xl font-display font-bold mb-4">Ihre Vorteile</h2>
                <ul className="space-y-2">
                  {objekt.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span className="text-sm text-foreground/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary/5">
          <div className="section-container text-center">
            <h2 className="text-3xl font-display font-bold mb-4">
              Reinigung für Ihr {objekt.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Fordern Sie jetzt ein kostenloses und unverbindliches Angebot an. 
              Wir besichtigen Ihr Objekt und erstellen ein maßgeschneidertes Reinigungskonzept.
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

export default ObjektDetail;
