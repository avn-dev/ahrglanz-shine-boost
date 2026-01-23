import { useParams, Link, useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Phone, Sparkles } from "lucide-react";

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
    description: "Reinigung von Treppenhäusern und gemeinschaftlich genutzten Flächen.",
    longDescription: "Für Wohnanlagen und Mehrfamilienhäuser bieten wir eine zuverlässige Reinigung aller Gemeinschaftsflächen. Saubere Treppenhäuser und gepflegte Eingangsbereiche sorgen für zufriedene Bewohner und eine werterhaltende Gebäudepflege.",
    image: wohnanlageImg,
    features: [
      "Reinigung von Treppenhäusern und gemeinschaftlich genutzten Flächen",
      "Pflege von Eingangsbereichen, Fluren und Podesten",
      "Reinigung von Müllräumen, Tiefgaragen und Außenanlagen",
      "Individuelle Reinigungsintervalle nach Objektgröße",
      "Zuverlässige Unterhaltsreinigung für Wohnanlagen und Mehrfamilienhäuser"
    ],
    services: [
      "Unterhaltsreinigung",
      "Treppenhausreinigung",
      "Glasreinigung",
      "Grundreinigung"
    ],
    benefits: [
      "Zufriedene Mieter & Bewohner",
      "Werterhaltung der Immobilie",
      "Feste Reinigungsintervalle",
      "Dokumentierte Qualität"
    ]
  },
  buero: {
    title: "Bürogebäude",
    subtitle: "Professionelle Büroreinigung",
    description: "Regelmäßige Büroreinigung für saubere und gepflegte Arbeitsplätze.",
    longDescription: "Ein sauberes Büro fördert die Produktivität und hinterlässt bei Kunden und Mitarbeitern einen professionellen Eindruck. Wir reinigen Büroräume, Konferenzräume, Sanitäranlagen und Gemeinschaftsbereiche nach Ihren Vorgaben.",
    image: bueroImg,
    features: [
      "Regelmäßige Büroreinigung für saubere und gepflegte Arbeitsplätze",
      "Gründliche Sanitärreinigung für Mitarbeiter- und Besucherbereiche",
      "Reinigung häufig genutzter Kontakt- und Arbeitsflächen",
      "Flexible Reinigungszeiten außerhalb der Bürozeiten möglich",
      "Zuverlässige Unterhaltsreinigung für Unternehmen und Verwaltungen"
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
    description: "Hygienische Reinigung von Gruppen-, Spiel- und Schlafräumen.",
    longDescription: "In Kindertagesstätten und Bildungseinrichtungen ist Hygiene besonders wichtig. Wir reinigen mit kindersicheren Mitteln und sorgen für saubere, gesunde Räume, in denen Kinder sicher lernen und spielen können.",
    image: kitaImg,
    features: [
      "Hygienische Reinigung von Gruppen-, Spiel- und Schlafräumen",
      "Sorgfältige Sanitärreinigung für Kinder- und Personalbereiche",
      "Reinigung sensibler Kontakt- und Spieloberflächen",
      "Einsatz material- und kindgerechter Reinigungsmittel",
      "Zuverlässige Unterhaltsreinigung für Kitas und Betreuungseinrichtungen"
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
      "Flexible Planung nach Betreuungszeiten"
    ]
  },
  bildungseinrichtung: {
    title: "Bildungseinrichtung",
    subtitle: "Schulen & Bildungsträger",
    description: "Hygienische Reinigung von Klassen-, Gruppen- und Aufenthaltsräumen.",
    longDescription: "Schulen und Bildungseinrichtungen erfordern besondere Hygiene. Wir sorgen für saubere Klassenzimmer, Flure und Sanitäranlagen – mit flexibler Planung nach Lern- und Betreuungszeiten.",
    image: kitaImg,
    features: [
      "Hygienische Reinigung von Klassen-, Gruppen- und Aufenthaltsräumen",
      "Sorgfältige Sanitärreinigung nach aktuellen Hygienevorgaben",
      "Reinigung stark frequentierter Kontakt- und Gemeinschaftsflächen",
      "Rücksicht auf Lern- und Betreuungszeiten durch flexible Einsatzplanung",
      "Zuverlässige Unterhaltsreinigung für Schulen, Kitas & Bildungsträger"
    ],
    services: [
      "Unterhaltsreinigung",
      "Desinfektionsreinigung",
      "Grundreinigung",
      "Glasreinigung"
    ],
    benefits: [
      "Hygienisch saubere Lernumgebung",
      "Flexible Einsatzzeiten",
      "Geprüfte Reinigungsmittel",
      "Zuverlässige Qualität"
    ]
  },
  praxis: {
    title: "Praxis & Gesundheitswesen",
    subtitle: "Arztpraxen & Gesundheitseinrichtungen",
    description: "Hygienische Reinigung von Arztpraxen und medizinischen Einrichtungen.",
    longDescription: "Arztpraxen und Gesundheitseinrichtungen erfordern höchste Hygienestandards. Unsere geschulten Teams reinigen nach medizinischen Vorgaben und sorgen für eine keimfreie, vertrauenswürdige Umgebung für Patienten und Personal.",
    image: praxisImg,
    features: [
      "Hygienische Reinigung von Arztpraxen und medizinischen Einrichtungen",
      "Sorgfältige Sanitärreinigung nach erhöhten Hygieneanforderungen",
      "Reinigung sensibler Kontakt-, Behandlungs- und Wartebereiche",
      "Einhaltung hoher Hygiene- und Qualitätsstandards",
      "Zuverlässige Unterhaltsreinigung für Gesundheits- und Pflegeeinrichtungen"
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
  gesundheitseinrichtung: {
    title: "Gesundheitseinrichtung",
    subtitle: "Praxen & Pflegeeinrichtungen",
    description: "Hygienische Reinigung von Arztpraxen und medizinischen Einrichtungen.",
    longDescription: "Gesundheitseinrichtungen erfordern höchste Hygienestandards. Unsere geschulten Teams reinigen nach medizinischen Vorgaben und sorgen für eine keimfreie Umgebung für Patienten und Personal.",
    image: praxisImg,
    features: [
      "Hygienische Reinigung von Arztpraxen und medizinischen Einrichtungen",
      "Sorgfältige Sanitärreinigung nach erhöhten Hygieneanforderungen",
      "Reinigung sensibler Kontakt-, Behandlungs- und Wartebereiche",
      "Einhaltung hoher Hygiene- und Qualitätsstandards",
      "Zuverlässige Unterhaltsreinigung für Gesundheits- und Pflegeeinrichtungen"
    ],
    services: [
      "Unterhaltsreinigung",
      "Desinfektionsreinigung",
      "Grundreinigung"
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
    description: "Reinigung von Trainings-, Kurs- und Sportbereichen.",
    longDescription: "Sportstätten und Fitnessstudios erfordern intensive Reinigung und regelmäßige Desinfektion. Wir sorgen für hygienische Trainingsgeräte, saubere Umkleiden und gepflegte Sanitäranlagen – für zufriedene Mitglieder.",
    image: sportclubImg,
    features: [
      "Reinigung von Trainings-, Kurs- und Sportbereichen",
      "Gründliche Sanitärreinigung von Umkleiden und Duschen",
      "Desinfizierende Reinigung stark genutzter Kontaktflächen",
      "Hygienische Sauberkeit für Mitglieder und Personal",
      "Flexible Unterhaltsreinigung angepasst an Trainingszeiten"
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
    description: "Reinigung von Industriehallen, Produktions- und Arbeitsbereichen.",
    longDescription: "Industriebetriebe stellen besondere Anforderungen an die Reinigung. Wir bieten professionelle Industriereinigung für Produktionshallen, Lagerflächen und Sozialräume – für Sicherheit, Effizienz und Sauberkeit am Arbeitsplatz.",
    image: bueroImg,
    features: [
      "Reinigung von Industriehallen, Produktions- und Arbeitsbereichen",
      "Entfernung von Staub, Schmutz und produktionsbedingten Rückständen",
      "Reinigung von Verkehrs-, Lager- und Nutzflächen",
      "Berücksichtigung betrieblicher Sicherheits- und Hygienevorgaben",
      "Zuverlässige Unterhaltsreinigung für Industrie- und Gewerbebetriebe"
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
    description: "Saubere Reinigung von Verkaufs-, Ausstellungs- und Kundenflächen.",
    longDescription: "Im Einzelhandel zählt der erste Eindruck. Saubere Verkaufsräume, gepflegte Schaufenster und hygienische Sanitäranlagen sorgen für ein positives Einkaufserlebnis und zufriedene Kunden.",
    image: bueroImg,
    features: [
      "Saubere Reinigung von Verkaufs-, Ausstellungs- und Kundenflächen",
      "Gründliche Sanitärreinigung für Kunden- und Personalbereiche",
      "Reinigung stark frequentierter Lauf- und Kontaktzonen",
      "Flexible Reinigung angepasst an Öffnungszeiten",
      "Zuverlässige Unterhaltsreinigung für Einzelhandel und Shops"
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
    description: "Hygienische Reinigung von Restaurants, Cafés und Gasträumen.",
    longDescription: "In der Gastronomie entscheidet Sauberkeit über den Erfolg. Wir reinigen Gaststätten, Restaurants und Cafés nach höchsten Hygienestandards – für zufriedene Gäste, positive Bewertungen und erfolgreiche Betriebsprüfungen.",
    image: hotelImg,
    features: [
      "Hygienische Reinigung von Restaurants, Cafés und Gasträumen",
      "Sorgfältige Sanitärreinigung nach gesetzlichen Hygienevorgaben",
      "Reinigung stark beanspruchter Kontakt- und Nutzflächen",
      "Anpassung der Reinigung an Öffnungs- und Betriebszeiten",
      "Zuverlässige Unterhaltsreinigung für gastronomische Betriebe"
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
  },
  gastronomie: {
    title: "Gastronomiebetrieb",
    subtitle: "Restaurants & Cafés",
    description: "Hygienische Reinigung von Restaurants, Cafés und Gasträumen.",
    longDescription: "In der Gastronomie entscheidet Sauberkeit über den Erfolg. Wir reinigen Gaststätten, Restaurants und Cafés nach höchsten Hygienestandards – für zufriedene Gäste, positive Bewertungen und erfolgreiche Betriebsprüfungen.",
    image: hotelImg,
    features: [
      "Hygienische Reinigung von Restaurants, Cafés und Gasträumen",
      "Sorgfältige Sanitärreinigung nach gesetzlichen Hygienevorgaben",
      "Reinigung stark beanspruchter Kontakt- und Nutzflächen",
      "Anpassung der Reinigung an Öffnungs- und Betriebszeiten",
      "Zuverlässige Unterhaltsreinigung für gastronomische Betriebe"
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
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="section-container">
            <Link 
              to="/objekte" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Alle Objekte
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div>
                <p className="text-primary font-medium mb-2">{objekt.subtitle}</p>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  {objekt.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  {objekt.longDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
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
              
              {/* Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={objekt.image} 
                    alt={objekt.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/20 rounded-full -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Services & Features */}
        <section className="py-20">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-12">
              Unsere Leistungen für Ihr {objekt.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Reinigungsbereiche */}
              <div className="bg-card rounded-2xl p-8 shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold mb-4">Reinigungsbereiche</h3>
                <ul className="space-y-3">
                  {objekt.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Passende Leistungen */}
              <div className="bg-card rounded-2xl p-8 shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-display font-bold mb-4">Passende Leistungen</h3>
                <ul className="space-y-3">
                  {objekt.services.map((service, index) => (
                    <li key={index}>
                      <Link 
                        to={`/leistungen/${service.toLowerCase().replace(/\s+/g, '').replace('ä', 'a').replace('ö', 'o').replace('ü', 'u')}`}
                        className="flex items-center gap-3 text-primary hover:text-primary/80 hover:underline transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4 rotate-180" />
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ihre Vorteile */}
              <div className="bg-card rounded-2xl p-8 shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-display font-bold mb-4">Ihre Vorteile</h3>
                <ul className="space-y-3">
                  {objekt.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary/5">
          <div className="section-container text-center">
            <h2 className="text-3xl font-display font-bold mb-4">
              Professionelle Reinigung für Ihr {objekt.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Fordern Sie jetzt ein kostenloses und unverbindliches Angebot an. 
              Wir besichtigen Ihr Objekt und erstellen ein maßgeschneidertes Reinigungskonzept.
              Im Raum Bad Neuenahr-Ahrweiler, Bonn & Umgebung.
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
