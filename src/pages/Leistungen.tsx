import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Building2, Home, Sun, Droplets, Wrench, Footprints, ClipboardCheck } from 'lucide-react';

const services = [
  {
    id: 'unterhaltsreinigung',
    icon: ClipboardCheck,
    title: 'Unterhaltsreinigung',
    description: 'Regelmäßige Reinigung für dauerhaft saubere Räumlichkeiten. Planbar, zuverlässig und nach Ihren Anforderungen.',
    details: [
      'Tägliche, wöchentliche oder monatliche Reinigung',
      'Büros, Praxen, Kitas und Gewerbeflächen',
      'Feste Qualitätsstandards',
      'Flexible Reinigungszeiten'
    ]
  },
  {
    id: 'grundreinigung',
    icon: Sparkles,
    title: 'Grundreinigung',
    description: 'Intensive Tiefenreinigung für hartnäckige Verschmutzungen und vernachlässigte Flächen.',
    details: [
      'Entfernung von Altschmutz',
      'Bodenversiegelung erneuern',
      'Intensive Sanitärreinigung',
      'Ideal vor Neubezug'
    ]
  },
  {
    id: 'glasreinigung',
    icon: Sun,
    title: 'Glasreinigung',
    description: 'Streifenfreie Reinigung von Fenstern, Glasfassaden und Wintergärten für klare Durchsicht.',
    details: [
      'Fensterreinigung innen & außen',
      'Glasfassaden',
      'Wintergärten',
      'Schaufenster'
    ]
  },
  {
    id: 'baureinigung',
    icon: Building2,
    title: 'Baureinigung',
    description: 'Professionelle Bauendreinigung nach Renovierung, Sanierung oder Neubau.',
    details: [
      'Bauschutt-Entfernung',
      'Feinreinigung aller Oberflächen',
      'Fenster- und Rahmenreinigung',
      'Übergabefertig'
    ]
  },
  {
    id: 'desinfektionsreinigung',
    icon: Droplets,
    title: 'Desinfektionsreinigung',
    description: 'Hygienische Reinigung mit Desinfektionsmitteln für sensible Bereiche.',
    details: [
      'Medizinische Einrichtungen',
      'Lebensmittelbetriebe',
      'Kitas und Schulen',
      'Zertifizierte Desinfektionsmittel'
    ]
  },
  {
    id: 'treppenhausreinigung',
    icon: Footprints,
    title: 'Treppenhausreinigung',
    description: 'Regelmäßige Reinigung von Treppenhäusern für einen gepflegten ersten Eindruck.',
    details: [
      'Böden und Geländer',
      'Fensterbänke und Fensterbereiche',
      'Briefkasten- und Klingelanlagen',
      'Eingangsbereiche'
    ]
  },
  {
    id: 'photovoltaikreinigung',
    icon: Sun,
    title: 'Photovoltaikreinigung',
    description: 'Fachgerechte Reinigung von Solarmodulen für maximale Energieausbeute.',
    details: [
      'Schonende Reinigungsmethoden',
      'Entfernung von Verschmutzungen',
      'Ertragssteigerung',
      'Regelmäßige Wartung'
    ]
  },
  {
    id: 'steinreinigung',
    icon: Wrench,
    title: 'Steinreinigung',
    description: 'Professionelle Reinigung von Stein-, Pflaster- und Außenflächen.',
    details: [
      'Terrassenreinigung',
      'Einfahrten und Gehwege',
      'Fassadenreinigung',
      'Graffiti-Entfernung'
    ]
  },
];

const Leistungen = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="section-container mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Unsere Leistungen
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Professionelle <span className="text-primary">Reinigung</span> für jeden Bedarf
            </h1>
            <p className="text-lg text-muted-foreground">
              Von der regelmäßigen Unterhaltsreinigung bis zur spezialisierten Desinfektionsreinigung – 
              wir bieten maßgeschneiderte Lösungen für Ihre Anforderungen.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="section-container">
          <div className="space-y-8">
            {services.map((service, index) => (
              <article 
                key={service.id}
                className={`group flex flex-col lg:flex-row gap-8 p-8 rounded-2xl border border-border/50 bg-card hover:shadow-lg transition-all duration-300 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Icon & Title Section */}
                <div className="flex-shrink-0 lg:w-1/3">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-foreground">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <Link to="/#quote-form">
                    <Button className="group/btn">
                      Angebot anfordern
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </div>

                {/* Details Section */}
                <div className="flex-1 lg:pl-8 lg:border-l border-border/50">
                  <h3 className="font-semibold text-foreground mb-4">Das ist inklusive:</h3>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-container mt-20">
          <div className="bg-primary/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Individuelle Lösung gesucht?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Sie haben spezielle Anforderungen? Wir beraten Sie gerne und erstellen ein 
              maßgeschneidertes Angebot für Ihre Reinigungsbedürfnisse.
            </p>
            <Link to="/#quote-form">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Kostenlose Beratung anfordern
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Leistungen;
