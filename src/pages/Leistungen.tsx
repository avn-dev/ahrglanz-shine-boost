import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Building2, Sun, Droplets, Wrench, Footprints, ClipboardCheck, Shield, Home, Briefcase, Heart, GraduationCap, Dumbbell, ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useSEO, SEO_CONFIGS } from '@/hooks/useSEO';

const services = [
  {
    id: 'unterhaltsreinigung',
    icon: ClipboardCheck,
    title: 'Unterhaltsreinigung',
    description: 'Regelmäßige Unterhaltsreinigung für Büros, Praxen & Gewerbe – planbar, zuverlässig und nach festen Qualitätsstandards.',
    details: [
      'Regelmäßige Unterhaltsreinigung für Büros, Praxen & Gewerbe',
      'Individuelle Reinigungspläne nach Objekt & Nutzungsfrequenz',
      'Zuverlässige Reinigung nach festen Qualitätsstandards',
      'Geschultes Personal & feste Ansprechpartner',
      'Planbar, transparent & termintreu umgesetzt'
    ]
  },
  {
    id: 'grundreinigung',
    icon: Sparkles,
    title: 'Grundreinigung',
    description: 'Gründliche Grundreinigung für Böden, Oberflächen & Sanitärbereiche – ideal nach Bauarbeiten oder vor Neuvermietung.',
    details: [
      'Gründliche Grundreinigung für Böden, Oberflächen & Sanitärbereiche',
      'Entfernung hartnäckiger Verschmutzungen & Rückstände',
      'Ideal nach Bauarbeiten, vor Neuvermietung oder als Intensivreinigung',
      'Für Gewerbe, öffentliche Einrichtungen & Privatobjekte',
      'Sorgfältig, materialschonend & professionell durchgeführt'
    ]
  },
  {
    id: 'glasreinigung',
    icon: Sun,
    title: 'Glasreinigung',
    description: 'Streifenfreie Reinigung von Fenstern, Glasfassaden und Wintergärten für klare Durchsicht.',
    details: [
      'Fensterreinigung innen & außen',
      'Glasfassaden & Wintergärten',
      'Schaufensterreinigung',
      'Rahmen- und Falzreinigung'
    ]
  },
  {
    id: 'baureinigung',
    icon: Building2,
    title: 'Baureinigung',
    description: 'Baureinigung für Neubau, Umbau & Renovierung – Grob-, Zwischen- und Endreinigung aus einer Hand.',
    details: [
      'Baureinigung für Neubau, Umbau & Renovierung',
      'Grob-, Zwischen- und Endreinigung aus einer Hand',
      'Entfernung von Bauschmutz, Staub & Baumaterialresten',
      'Termingerechte Reinigung zur Übergabe oder Abnahme',
      'Zuverlässig, gründlich & objektspezifisch umgesetzt'
    ]
  },
  {
    id: 'desinfektionsreinigung',
    icon: Droplets,
    title: 'Desinfektionsreinigung',
    description: 'Professionelle Desinfektionsreinigung für sensible Bereiche nach geltenden Hygiene- & Sicherheitsstandards.',
    details: [
      'Professionelle Desinfektionsreinigung für sensible Bereiche',
      'Reduzierung von Keimen, Bakterien & Viren',
      'Geeignet für Praxen, Büros, Schulen & öffentliche Einrichtungen',
      'Durchführung nach geltenden Hygiene- & Sicherheitsstandards',
      'Zuverlässig, diskret & fachgerecht umgesetzt'
    ]
  },
  {
    id: 'treppenhausreinigung',
    icon: Footprints,
    title: 'Treppenhausreinigung',
    description: 'Zuverlässige Treppenhausreinigung für Wohn- & Gewerbeimmobilien – für einen gepflegten ersten Eindruck.',
    details: [
      'Zuverlässige Treppenhausreinigung für Wohn- & Gewerbeimmobilien',
      'Reinigung von Treppen, Podesten, Geländern & Eingangsbereichen',
      'Gepflegter erster Eindruck für Bewohner, Mieter & Besucher',
      'Individuelle Reinigungsintervalle nach Objekt & Nutzung',
      'Sorgfältig, pünktlich & professionell ausgeführt'
    ]
  },
  {
    id: 'photovoltaikreinigung',
    icon: Sun,
    title: 'Photovoltaikreinigung',
    description: 'Professionelle Photovoltaikreinigung für private & gewerbliche Anlagen zur Steigerung der Leistungsfähigkeit.',
    details: [
      'Professionelle Photovoltaikreinigung für private & gewerbliche Anlagen',
      'Schonende Reinigung zur Steigerung der Leistungsfähigkeit',
      'Entfernung von Schmutz, Staub, Pollen & Umweltrückständen',
      'Einsatz materialschonender Verfahren & entmineralisiertem Wasser',
      'Sicher, effizient & fachgerecht durchgeführt'
    ]
  },
  {
    id: 'steinreinigung',
    icon: Wrench,
    title: 'Steinreinigung',
    description: 'Professionelle Steinreinigung für Wege, Terrassen & Außenflächen – für saubere Optik & sichere Begehbarkeit.',
    details: [
      'Professionelle Steinreinigung für Wege, Terrassen & Außenflächen',
      'Entfernung von Moos, Algen, Flechten & starken Verschmutzungen',
      'Für Beton-, Natur- & Pflastersteine geeignet',
      'Materialschonende Reinigung für langfristigen Werterhalt',
      'Saubere Optik & sichere Begehbarkeit'
    ]
  },
  {
    id: 'tatortreinigung',
    icon: Shield,
    title: 'Tatortreinigung',
    description: 'Diskrete und professionelle Reinigung nach Todesfällen oder traumatischen Ereignissen – 24/7 erreichbar.',
    details: [
      'Reinigung nach Todesfällen',
      'Beseitigung biologischer Spuren',
      'Geruchsneutralisierung',
      '24/7 Notfall-Erreichbarkeit',
      'Absolute Diskretion'
    ]
  },
];

const objekteLinks = [
  { id: 'wohnanlage', title: 'Wohnanlage', icon: Home },
  { id: 'buero', title: 'Büro', icon: Briefcase },
  { id: 'praxis', title: 'Arztpraxis', icon: Heart },
  { id: 'kita', title: 'Kita & Bildung', icon: GraduationCap },
  { id: 'sportclub', title: 'Sportclub', icon: Dumbbell },
  { id: 'hotel', title: 'Hotel & Gastro', icon: Building2 },
];

const faqs = [
  {
    question: 'Wie läuft eine Zusammenarbeit mit AHRglanz ab?',
    answer: 'Nach einer kostenlosen Besichtigung erstellen wir ein individuelles Angebot. Die Reinigung erfolgt anschließend zuverlässig nach abgestimmten Reinigungsplänen und festen Qualitätsstandards.'
  },
  {
    question: 'Wie flexibel sind Reinigungszeiten und -intervalle?',
    answer: 'Reinigungszeiten und Intervalle werden individuell auf Ihr Objekt abgestimmt. Ob täglich, wöchentlich oder zu festen Zeiten – wir passen uns Ihrem Betrieb und Ihren Anforderungen flexibel an.'
  },
  {
    question: 'Gibt es feste Ansprechpartner für mein Objekt?',
    answer: 'Ja. Sie haben feste Ansprechpartner, die Ihr Objekt kennen und für Abstimmungen, Rückfragen oder Anpassungen jederzeit erreichbar sind.'
  },
  {
    question: 'In welchen Regionen ist AHRglanz im Einsatz?',
    answer: 'Wir sind im Raum Bad Neuenahr-Ahrweiler, Bonn, Koblenz sowie in der umliegenden Region tätig und betreuen Objekte zuverlässig vor Ort.'
  },
];

const Leistungen = () => {
  useSEO(SEO_CONFIGS.leistungen);
  
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
              wir bieten maßgeschneiderte Lösungen für Ihre Anforderungen in Bad Neuenahr-Ahrweiler, Bonn, Koblenz und Umgebung.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="section-container">
          <div className="space-y-8">
            {services.map((service, index) => (
              <article 
                key={service.id}
                className={`group flex flex-col lg:flex-row gap-8 p-6 sm:p-8 rounded-2xl border border-border/50 bg-card hover:shadow-lg transition-all duration-300 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Icon & Title Section */}
                <div className="flex-shrink-0 lg:w-1/3">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                    </div>
                    <Link to={`/leistungen/${service.id}`}>
                      <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground hover:text-primary transition-colors">
                        {service.title}
                      </h2>
                    </Link>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to={`/leistungen/${service.id}`}>
                      <Button variant="outline" className="group/btn w-full sm:w-auto">
                        Mehr erfahren
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
                    <Link to="/#quote-form">
                      <Button className="group/btn w-full sm:w-auto">
                        Angebot anfordern
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Details Section */}
                <div className="flex-1 lg:pl-8 lg:border-l border-border/50">
                  <h3 className="font-semibold text-foreground mb-4 text-sm sm:text-base">Das ist inklusive:</h3>
                  <ul className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 sm:gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary mt-1.5 sm:mt-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Objekte Section */}
        <section className="section-container mt-20">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Objekte, die wir betreuen
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wir reinigen Objekte aller Art – von Wohnanlagen über Büros bis hin zu Gesundheitseinrichtungen.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {objekteLinks.map((objekt) => (
              <Link 
                key={objekt.id}
                to={`/objekte/${objekt.id}`}
                className="group flex flex-col items-center gap-3 p-4 sm:p-6 rounded-xl border border-border/50 bg-card hover:shadow-md hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <objekt.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground text-center">{objekt.title}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/objekte">
              <Button variant="outline">
                Alle Objekte ansehen
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-container mt-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Häufige Fragen zur <span className="text-primary">Gebäudereinigung</span>
              </h2>
              <p className="text-muted-foreground">
                Hier finden Sie Antworten auf häufige Fragen rund um unsere Reinigungsleistungen, Abläufe und Zusammenarbeit.
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border/50 rounded-xl px-6 bg-card"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-container mt-20">
          <div className="bg-primary/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Leistung anfragen oder noch Fragen?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Sie haben spezielle Anforderungen? Wir beraten Sie gerne und erstellen ein 
              maßgeschneidertes Angebot für Ihre Reinigungsbedürfnisse.
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

export default Leistungen;
