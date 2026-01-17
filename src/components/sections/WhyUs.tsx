import { UserCheck, Award, Clock, MapPin, Phone, Mail } from 'lucide-react';

const benefits = [
  {
    icon: UserCheck,
    title: 'Individuelle Beratung',
    text: 'Wir klären Anforderungen vor Ort oder telefonisch – und erstellen ein passendes Angebot.',
  },
  {
    icon: Award,
    title: 'Fachgerechte Ausführung',
    text: 'Sorgfältige Arbeitsweise und klare Qualitätsstandards.',
  },
  {
    icon: Clock,
    title: 'Zuverlässiger Service',
    text: 'Erreichbarkeit, Termineinhaltung und transparente Kommunikation.',
  },
];

const microproofs = [
  { icon: MapPin, text: 'Lokaler Betrieb in Bad Neuenahr-Ahrweiler' },
  { icon: Phone, text: 'Kontakt per Telefon' },
  { icon: Mail, text: 'Anfragen per E-Mail und Formular' },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Warum AhrGlanz?
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ihr verlässlicher Partner für{' '}
              <span className="text-primary">Sauberkeit</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Wir legen Wert auf Qualität, offene Kommunikation und pünktliche Umsetzung. 
              So schaffen wir Vertrauen – von der ersten Anfrage bis zur fertigen Reinigung.
            </p>

            {/* Microproofs */}
            <div className="flex flex-wrap gap-4">
              {microproofs.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Benefits Cards */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group flex gap-5 p-6 rounded-xl bg-muted/50 hover:bg-secondary/50 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
