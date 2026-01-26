import { Sparkles, Layers, GlassWater, HardHat, Leaf, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Sparkles,
    title: 'Unterhaltsreinigung',
    slug: 'unterhaltsreinigung',
    description: 'Regelmäßige Reinigung für Büros, Treppenhäuser, Praxen oder Privathaushalte – abgestimmt auf Ihren Turnus.',
  },
  {
    icon: Layers,
    title: 'Grundreinigung',
    slug: 'grundreinigung',
    description: 'Intensive Reinigung für Böden, Sanitär, Küche & stark beanspruchte Bereiche – gründlich bis in die Ecken.',
  },
  {
    icon: GlassWater,
    title: 'Glas- & Fensterreinigung',
    slug: 'glasreinigung',
    description: 'Streifenfreier Durchblick für Fenster, Glasfassaden und Wintergärten – schonend und professionell.',
  },
  {
    icon: HardHat,
    title: 'Bauendreinigung',
    slug: 'baureinigung',
    description: 'Saubere Übergabe nach Bau/Umzug: Bauschmutz entfernen, Oberflächen veredeln, bezugsfertig reinigen.',
  },
  {
    icon: Home,
    title: 'Tatortreinigung',
    slug: 'tatortreinigung',
    description: 'Diskrete und professionelle Reinigung nach Unglücksfällen – 24/7 erreichbar.',
  },
  {
    icon: Leaf,
    title: 'Außenanlagenpflege',
    slug: 'steinreinigung',
    description: 'Saubere Außenbereiche: Wege, Eingänge und Außenflächen gepflegt – der erste Eindruck zählt.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Unsere Leistungen
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Professionelle Reinigung für jeden Bedarf
          </h2>
          <p className="text-lg text-muted-foreground">
            Von der regelmäßigen Unterhaltsreinigung bis zur einmaligen Bauendreinigung – 
            wir bieten maßgeschneiderte Lösungen für Ihr Objekt.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              to={`/leistungen/${service.slug}`}
              key={service.title}
              className="group relative bg-background rounded-2xl p-8 shadow-sm card-hover border border-border/50 block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-primary/20">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-b-2xl scale-x-0 transition-transform origin-left group-hover:scale-x-100" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
