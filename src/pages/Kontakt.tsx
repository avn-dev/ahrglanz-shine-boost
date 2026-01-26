import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteForm } from '@/components/sections/QuoteForm';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { useSEO, SEO_CONFIGS } from '@/hooks/useSEO';

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefon',
    content: '+49 2641 3968989',
    href: 'tel:+4926413968989',
  },
  {
    icon: Mail,
    title: 'E-Mail',
    content: 'info@ahrglanz.de',
    href: 'mailto:info@ahrglanz.de',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    content: 'Nachricht senden',
    href: 'https://wa.me/4926413968989',
  },
  {
    icon: MapPin,
    title: 'Adresse',
    content: 'Ehlinger Str. 74, 53474 Bad Neuenahr-Ahrweiler',
    href: 'https://maps.google.com/?q=Ehlinger+Str.+74+53474+Bad+Neuenahr-Ahrweiler',
  },
];

const Kontakt = () => {
  useSEO(SEO_CONFIGS.kontakt);
  
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
                Kontakt
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Wir sind für Sie <span className="text-primary">da</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Haben Sie Fragen oder möchten ein kostenloses Angebot? 
                Kontaktieren Sie uns – wir melden uns schnellstmöglich bei Ihnen.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12">
          <div className="section-container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="bg-background rounded-xl p-6 shadow-sm border border-border/50 hover:border-primary/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.content}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Opening Hours */}
        <section className="pb-8">
          <div className="section-container">
            <div className="bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground">
                  Erreichbarkeit
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-foreground">Montag – Freitag</p>
                  <p className="text-muted-foreground">08:00 – 18:00 Uhr</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Samstag</p>
                  <p className="text-muted-foreground">Nach Vereinbarung</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <QuoteForm />

        {/* Service Areas */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="section-container">
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
                Einsatzgebiet
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Wir sind regional für Sie unterwegs
              </h2>
              <p className="text-muted-foreground mb-8">
                Unser Einsatzgebiet umfasst Bad Neuenahr-Ahrweiler und die umliegende Region, 
                einschließlich Bonn, Koblenz, Sinzig, Remagen und das gesamte Ahrtal.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {['Bad Neuenahr-Ahrweiler', 'Bonn', 'Koblenz', 'Sinzig', 'Remagen', 'Ahrtal'].map((area) => (
                  <span 
                    key={area}
                    className="px-4 py-2 bg-background rounded-full text-sm font-medium text-foreground border border-border/50"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Kontakt;
