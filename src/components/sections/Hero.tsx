import { useState, useEffect } from 'react';
import { CheckCircle, Phone, ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-building.jpg';
import ahrglanzLogo from '@/assets/ahrglanz-logo.png';

const trustBadges = [
  'Schnelle Rückmeldung',
  'Zuverlässig & termintreu',
  'Individuelle Lösungen',
];

export function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToQuoteForm = () => {
    const element = document.getElementById('quote-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Fullscreen Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Moderne Glasfassaden - Professionelle Gebäudereinigung"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        {/* Subtle glanz accent */}
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/5"
          aria-hidden="true"
        />
      </div>

      {/* Large Logo that animates to nav */}
      <div 
        className={`fixed z-[60] transition-all duration-700 ease-out ${
          isScrolled 
            ? 'top-2 left-4 md:left-8 scale-[0.35] origin-top-left opacity-0' 
            : 'top-20 left-1/2 -translate-x-1/2 scale-100 opacity-100'
        }`}
      >
        <img 
          src={ahrglanzLogo} 
          alt="AhrGlanz Logo" 
          className="h-28 sm:h-36 md:h-44 w-auto object-contain drop-shadow-2xl"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto mt-32 sm:mt-40">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6 animate-fade-up border border-white/20">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Professionelle Gebäudereinigung
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-up stagger-1">
          Gebäudereinigung, die{' '}
          <span className="text-accent">wirklich glänzt.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-up stagger-2">
          Professionelle Reinigungsleistungen für Privat, Gewerbe und Bauprojekte 
          in Bad Neuenahr-Ahrweiler & Umgebung.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-up stagger-3">
          <Button onClick={scrollToQuoteForm} variant="hero" size="xl" className="group">
            Kostenloses Angebot anfordern
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button asChild variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm">
            <a href="tel:+4926413968989">
              <Phone className="w-5 h-5" />
              Anrufen
            </a>
          </Button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap gap-3 sm:gap-4 justify-center animate-fade-up stagger-4">
          {trustBadges.map((badge) => (
            <div key={badge} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm border border-white/20">
              <CheckCircle className="w-4 h-4 text-accent" />
              {badge}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce cursor-pointer"
        aria-label="Weiter zu den Leistungen"
      >
        <ChevronDown className="w-8 h-8" />
      </button>

      {/* Floating badge - repositioned for fullscreen hero */}
      <div className="absolute bottom-8 right-4 sm:right-8 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-3 sm:p-4 animate-fade-up stagger-5 border border-white/50 hidden sm:block">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-success/20 flex items-center justify-center">
            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-success" />
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm sm:text-base">Lokaler Betrieb</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Bad Neuenahr-Ahrweiler</p>
          </div>
        </div>
      </div>
    </section>
  );
}
