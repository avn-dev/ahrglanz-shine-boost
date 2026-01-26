import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Users, Award, Heart, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useSEO, SEO_CONFIGS } from '@/hooks/useSEO';

const teamMembers = [
  {
    name: 'Serkan Sel',
    role: 'Geschäftsführer',
    description: 'Gründer und Inhaber von AhrGlanz. Mit langjähriger Erfahrung in der Gebäudereinigung sorgt er für höchste Qualitätsstandards.',
    initial: 'S',
  },
  {
    name: 'Team AhrGlanz',
    role: 'Reinigungsfachkräfte',
    description: 'Unser geschultes Team arbeitet zuverlässig, gründlich und mit Liebe zum Detail – für Ihre Zufriedenheit.',
    initial: 'A',
  },
];

const values = [
  {
    icon: Award,
    title: 'Qualität',
    description: 'Wir arbeiten nach höchsten Standards und verwenden professionelle Reinigungsmittel.',
  },
  {
    icon: Heart,
    title: 'Zuverlässigkeit',
    description: 'Pünktlichkeit und Termintreue sind für uns selbstverständlich.',
  },
  {
    icon: Users,
    title: 'Persönlicher Service',
    description: 'Bei uns haben Sie immer einen festen Ansprechpartner – direkt und unkompliziert.',
  },
  {
    icon: MapPin,
    title: 'Regional verwurzelt',
    description: 'Als lokaler Betrieb kennen wir die Region und sind schnell vor Ort.',
  },
];

const UeberUns = () => {
  useSEO(SEO_CONFIGS.ueberUns);
  
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
                Über uns
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Wir machen <span className="text-primary">sauber</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                AhrGlanz Gebäudereinigung – Ihr zuverlässiger Partner für professionelle 
                Reinigungsdienstleistungen in Bad Neuenahr-Ahrweiler, Bonn, Koblenz und Umgebung.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
                  Unsere Geschichte
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Lokale Expertise, persönlicher Service
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    AhrGlanz Gebäudereinigung wurde mit einer klaren Vision gegründet: 
                    Professionelle Reinigungsdienstleistungen mit persönlichem Service zu verbinden.
                  </p>
                  <p>
                    Als inhabergeführter Betrieb aus Bad Neuenahr-Ahrweiler kennen wir die 
                    Bedürfnisse unserer Kunden in der Region. Wir setzen auf Qualität, 
                    Zuverlässigkeit und faire Preise.
                  </p>
                  <p>
                    Unser Einsatzgebiet erstreckt sich von Bad Neuenahr-Ahrweiler über Bonn 
                    bis nach Koblenz – immer mit dem Anspruch, erstklassige Ergebnisse zu liefern.
                  </p>
                </div>
              </div>
              <div className="bg-primary/5 rounded-2xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-display font-bold text-primary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Kundenzufriedenheit</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-display font-bold text-primary mb-2">5/5</div>
                    <div className="text-sm text-muted-foreground">Google Bewertung</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-display font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Betreute Objekte</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-display font-bold text-primary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Lokal & Regional</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="section-container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
                Unsere Werte
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Was uns auszeichnet
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="bg-background rounded-2xl p-6 shadow-sm border border-border/50">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
                Unser Team
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Die Menschen hinter AhrGlanz
              </h2>
              <p className="text-muted-foreground">
                Ein eingespieltes Team mit Erfahrung, Engagement und dem Blick fürs Detail.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {teamMembers.map((member) => (
                <div key={member.name} className="bg-background rounded-2xl p-8 shadow-sm border border-border/50 text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-display font-bold text-primary">
                      {member.initial}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-xl text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
                  <p className="text-sm text-muted-foreground">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
                Lernen Sie uns kennen
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Wir freuen uns auf Ihre Anfrage und beraten Sie gerne persönlich.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="secondary" size="lg">
                  <Link to="/kontakt">Kontakt aufnehmen</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  <a href="tel:+4926413968989">
                    <Phone className="w-5 h-5 mr-2" />
                    Anrufen
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UeberUns;
