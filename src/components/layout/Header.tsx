import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '@/assets/logo.png';

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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      
      // Calculate scroll progress for logo animation (0 to 1)
      // Logo transition happens between 100px and 300px of scroll
      const progress = Math.min(Math.max((scrollY - 100) / 200, 0), 1);
      setScrollProgress(progress);
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

  // On homepage, use transparent header with white text until scrolled
  // On other pages, always use solid header with dark text
  const isHomepage = location.pathname === '/';
  const useTransparent = isHomepage && !isScrolled;

  // Dynamic text colors based on scroll state and page
  const textColor = useTransparent ? 'text-white' : 'text-foreground';

  // Logo size and opacity based on scroll progress (only on homepage)
  const logoHeight = isHomepage 
    ? `${12 + scrollProgress * 0}px` // Start invisible, appear as nav logo
    : '48px';
  
  const logoOpacity = isHomepage ? scrollProgress : 1;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        useTransparent
          ? 'bg-transparent py-5'
          : 'bg-background/95 backdrop-blur-md shadow-md py-3'
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between">
          {/* Logo - with animated entrance on homepage */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="AhrGlanz Logo" 
              className="w-auto transition-all duration-300 ease-out group-hover:scale-105"
              style={{
                height: isHomepage ? `${32 + scrollProgress * 16}px` : '48px',
                opacity: isHomepage ? Math.max(scrollProgress, 0.3) : 1,
                transform: isHomepage 
                  ? `translateY(${(1 - scrollProgress) * 10}px) scale(${0.9 + scrollProgress * 0.1})`
                  : 'translateY(0) scale(1)',
              }}
            />
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
                      useTransparent 
                        ? 'text-white/90 hover:text-white after:bg-white' 
                        : 'text-foreground/80 hover:text-primary after:bg-primary'
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
                    useTransparent 
                      ? 'text-white/90 hover:text-white after:bg-white' 
                      : 'text-foreground/80 hover:text-primary after:bg-primary'
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
                useTransparent ? 'text-white/90 hover:text-white' : 'text-foreground/80 hover:text-primary'
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
