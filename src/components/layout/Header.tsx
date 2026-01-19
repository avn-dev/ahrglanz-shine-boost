import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Objekte', href: '/objekte' },
  { label: 'Über uns', href: '/#why-us' },
  { label: 'Ablauf', href: '/#process' },
  { label: 'Bewertungen', href: '/#reviews' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Kontakt', href: '/#quote-form' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // If it's an anchor on the homepage
    if (href.startsWith('/#')) {
      const hash = href.substring(1); // Remove leading /
      if (location.pathname === '/') {
        // Already on home, just scroll
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to home, then scroll
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };

  const scrollToQuoteForm = () => {
    setIsMobileMenuOpen(false);
    if (location.pathname === '/') {
      const element = document.getElementById('quote-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('quote-form');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  // Dynamic text colors based on scroll state
  const textColor = isScrolled ? 'text-foreground' : 'text-white';
  const textColorMuted = isScrolled ? 'text-foreground/80' : 'text-white/90';
  const logoSubtext = isScrolled ? 'text-muted-foreground' : 'text-white/70';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all group-hover:scale-105 ${
              isScrolled ? 'bg-primary' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <span className="text-white font-display font-bold text-xl">A</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-lg leading-tight transition-colors ${textColor}`}>
                AhrGlanz
              </span>
              <span className={`text-xs leading-tight transition-colors ${logoSubtext}`}>
                Gebäudereinigung
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isExternal = item.href.startsWith('/#');
              
              if (isExternal) {
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className={`text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:transition-all hover:after:w-full ${
                      isScrolled 
                        ? 'text-foreground/80 hover:text-primary after:bg-primary' 
                        : 'text-white/90 hover:text-white after:bg-white'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              }
              
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:transition-all hover:after:w-full ${
                    isScrolled 
                      ? 'text-foreground/80 hover:text-primary after:bg-primary' 
                      : 'text-white/90 hover:text-white after:bg-white'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="tel:+4926413968989" 
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isScrolled ? 'text-foreground/80 hover:text-primary' : 'text-white/90 hover:text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+49 2641 3968989</span>
            </a>
            <Button onClick={scrollToQuoteForm} variant="hero" size="default">
              Kostenloses Angebot
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors ${textColor}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background shadow-lg border-t animate-fade-in">
            <div className="section-container py-4 space-y-4">
              {navItems.map((item) => {
                const isExternal = item.href.startsWith('/#');
                
                if (isExternal) {
                  return (
                    <button
                      key={item.label}
                      onClick={() => handleNavClick(item.href)}
                      className="block text-foreground/80 hover:text-primary py-2 transition-colors text-left w-full"
                    >
                      {item.label}
                    </button>
                  );
                }
                
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="block text-foreground/80 hover:text-primary py-2 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-4 border-t space-y-3">
                <a
                  href="tel:+4926413968989"
                  className="flex items-center gap-2 text-foreground/80 hover:text-primary py-2"
                >
                  <Phone className="w-4 h-4" />
                  +49 2641 3968989
                </a>
                <Button onClick={scrollToQuoteForm} variant="hero" className="w-full">
                  Kostenloses Angebot
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
