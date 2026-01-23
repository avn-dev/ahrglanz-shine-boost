import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const currentYear = new Date().getFullYear();

const services = [
  { label: 'Unterhaltsreinigung', href: '/leistungen/unterhaltsreinigung' },
  { label: 'Grundreinigung', href: '/leistungen/grundreinigung' },
  { label: 'Glasreinigung', href: '/leistungen/glasreinigung' },
  { label: 'Baureinigung', href: '/leistungen/baureinigung' },
  { label: 'Alle Leistungen', href: '/leistungen' },
];

const objects = [
  { label: 'Wohnanlage', href: '/objekte/wohnanlage' },
  { label: 'Büro', href: '/objekte/buero' },
  { label: 'Arztpraxis', href: '/objekte/praxis' },
  { label: 'Kita', href: '/objekte/kita' },
  { label: 'Alle Objekte', href: '/objekte' },
];

const legal = [
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background/90">
      <div className="section-container py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-background leading-tight">
                  AhrGlanz
                </span>
                <span className="text-xs text-background/60 leading-tight">
                  Gebäudereinigung
                </span>
              </div>
            </Link>
            <p className="text-background/70 text-sm mb-6">
              Sauber. Glänzend. AhrGlanz.
              <br />
              Professionelle Gebäudereinigung in Bad Neuenahr-Ahrweiler & Umgebung.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+4926413968989"
                  className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +49 2641 3968989
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ahrglanz.de"
                  className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@ahrglanz.de
                </a>
              </li>
              <li className="flex items-start gap-2 text-background/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  Ehlinger Str. 74
                  <br />
                  53474 Bad Neuenahr-Ahrweiler
                </span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Leistungen</h4>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Objects */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Objekte</h4>
            <ul className="space-y-2 text-sm">
              {objects.map((object) => (
                <li key={object.label}>
                  <Link
                    to={object.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {object.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              {legal.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-background/50">
            <p>© {currentYear} AhrGlanz Gebäudereinigung. Alle Rechte vorbehalten.</p>
            <p>
              Gebäudereinigung in Bad Neuenahr-Ahrweiler
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
