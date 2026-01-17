import { CheckCircle, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-cleaning.jpg';

const trustBadges = [
  'Schnelle Rückmeldung',
  'Zuverlässig & termintreu',
  'Individuelle Lösungen',
];

export function Hero() {
  const scrollToQuoteForm = () => {
    const element = document.getElementById('quote-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background"
        aria-hidden="true"
      />
      
      {/* Decorative glanz glow */}
      <div 
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, hsl(195 85% 28% / 0.2) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Professionelle Gebäudereinigung
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-up stagger-1">
              Gebäudereinigung, die{' '}
              <span className="text-primary">wirklich glänzt.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg animate-fade-up stagger-2">
              Professionelle Reinigungsleistungen für Privat, Gewerbe und Bauprojekte 
              in Bad Neuenahr-Ahrweiler & Umgebung.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up stagger-3">
              <Button onClick={scrollToQuoteForm} variant="hero" size="xl" className="group">
                Kostenloses Angebot anfordern
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button asChild variant="outline" size="xl">
                <a href="tel:+4926413968989">
                  <Phone className="w-5 h-5" />
                  Anrufen
                </a>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-up stagger-4">
              {trustBadges.map((badge) => (
                <div key={badge} className="trust-badge">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative animate-fade-up stagger-3">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Hero image */}
              <img 
                src={heroImage} 
                alt="Professionelle Gebäudereinigung - Fensterreinigung in einem modernen Bürogebäude"
                className="w-full aspect-[4/3] object-cover"
                loading="eager"
              />
              
              {/* Shine overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 pointer-events-none" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 left-4 sm:-left-4 bg-background rounded-xl shadow-lg p-4 animate-fade-up stagger-5 border border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-success" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Lokaler Betrieb</p>
                  <p className="text-sm text-muted-foreground">Bad Neuenahr-Ahrweiler</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
