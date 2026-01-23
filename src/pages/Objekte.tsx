import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import wohnanlageBild from '@/assets/object-wohnanlage.jpg';
import sportclubBild from '@/assets/object-sportclub.jpg';
import kitaBild from '@/assets/object-kita.jpg';
import bueroBild from '@/assets/object-buero.jpg';
import hotelBild from '@/assets/object-hotel.jpg';
import praxisBild from '@/assets/object-praxis.jpg';
import industrieBild from '@/assets/object-industrie.jpg';
import geschaeftBild from '@/assets/object-geschaeft.jpg';
import gastronomieBild from '@/assets/object-gastronomie.jpg';

const objects = [
  { 
    id: 'wohnanlage', 
    title: 'Wohnanlage', 
    image: wohnanlageBild,
    description: 'Treppenhäuser, Eingangsbereiche, Tiefgaragen und Gemeinschaftsflächen – wir sorgen für ein sauberes Wohnumfeld.',
    features: ['Treppenhausreinigung', 'Außenanlagenpflege', 'Mülltonnenplätze', 'Tiefgaragenreinigung']
  },
  { 
    id: 'sportclub', 
    title: 'Sportclub & Fitnessstudio', 
    image: sportclubBild,
    description: 'Hygiene in Umkleiden, Sanitäranlagen und Trainingsräumen für Ihre Mitglieder.',
    features: ['Sanitärreinigung', 'Gerätedesinfektion', 'Umkleiden', 'Wellnessbereiche']
  },
  { 
    id: 'kita', 
    title: 'Kita & Bildungseinrichtung', 
    image: kitaBild,
    description: 'Kindgerechte Reinigung mit besonderen Hygieneanforderungen und schadstofffreien Mitteln.',
    features: ['Kindersichere Reinigungsmittel', 'Spielzeugreinigung', 'Sanitäranlagen', 'Küchenhygiene']
  },
  { 
    id: 'buero', 
    title: 'Bürogebäude', 
    image: bueroBild,
    description: 'Professionelle Büroreinigung für ein produktives und sauberes Arbeitsumfeld.',
    features: ['Arbeitsplatzreinigung', 'Konferenzräume', 'Küchen & Teeküchen', 'Sanitäranlagen']
  },
  { 
    id: 'hotel', 
    title: 'Hotel & Gastgewerbe', 
    image: hotelBild,
    description: 'Hotelreinigung nach höchsten Standards für zufriedene Gäste.',
    features: ['Zimmerreinigung', 'Lobby & Eingangsbereiche', 'Restaurant', 'Wellnessbereiche']
  },
  { 
    id: 'praxis', 
    title: 'Arztpraxis & Gesundheitseinrichtung', 
    image: praxisBild,
    description: 'Hygienische Reinigung nach medizinischen Standards und Vorschriften.',
    features: ['Desinfektionsreinigung', 'Wartebereiche', 'Behandlungsräume', 'Sanitäranlagen']
  },
  { 
    id: 'geschaeft', 
    title: 'Geschäft & Einzelhandel', 
    image: geschaeftBild,
    description: 'Saubere Verkaufsflächen für ein einladendes Einkaufserlebnis.',
    features: ['Verkaufsflächenreinigung', 'Schaufenster', 'Lagerräume', 'Sanitäranlagen']
  },
  { 
    id: 'industrie', 
    title: 'Industrie & Produktion', 
    image: industrieBild,
    description: 'Industriereinigung für Produktionshallen, Lager und Fertigungsbereiche.',
    features: ['Hallenreinigung', 'Maschinenreinigung', 'Bodenreinigung', 'Entsorgung']
  },
  { 
    id: 'gastronomie', 
    title: 'Gastronomiebetrieb', 
    image: gastronomieBild,
    description: 'HACCP-konforme Reinigung für Restaurants, Cafés und Catering.',
    features: ['Küchenreinigung', 'Gastraum', 'Sanitäranlagen', 'Außenbereiche']
  },
];

const Objekte = () => {
  const scrollToQuote = () => {
    const element = document.getElementById('quote-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="section-container mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Unsere Objekte
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Wir reinigen Objekte <span className="text-primary">aller Art</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Von Wohnanlagen über Büros bis zu Arztpraxen – wir passen unsere Reinigungsleistungen 
              flexibel an die Anforderungen Ihres Objekts an.
            </p>
          </div>
        </section>

        {/* Objects Grid */}
        <section className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objects.map((object) => (
              <article 
                key={object.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50"
              >
                {/* Image */}
                <Link to={`/objekte/${object.id}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={object.image}
                      alt={`${object.title} Reinigung`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <h2 
                      className="absolute bottom-4 left-4 right-4 font-display text-xl font-bold text-white"
                      style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
                    >
                      {object.title}
                    </h2>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">
                    {object.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {object.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <Link to={`/objekte/${object.id}`} className="flex-1">
                      <Button variant="outline" className="w-full group/btn">
                        Mehr erfahren
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-container mt-20">
          <div className="bg-primary/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ihr Objekt ist nicht dabei?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Kein Problem! Wir finden die passende Reinigungslösung für jedes Objekt. 
              Kontaktieren Sie uns für eine individuelle Beratung.
            </p>
            <Link to="/#quote-form">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Jetzt kostenlos anfragen
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Objekte;
