import { Send, MessageCircle, FileText, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: Send,
    number: '01',
    title: 'Anfrage senden',
    text: 'Kurz beschreiben, was gereinigt werden soll (Objekt, Umfang, Turnus).',
  },
  {
    icon: MessageCircle,
    number: '02',
    title: 'Rückfrage & Termin',
    text: 'Wir klären Details und vereinbaren bei Bedarf eine Besichtigung.',
  },
  {
    icon: FileText,
    number: '03',
    title: 'Angebot erhalten',
    text: 'Transparent, fair, passend zu Ihrem Bedarf.',
  },
  {
    icon: Sparkles,
    number: '04',
    title: 'Reinigung & Qualität',
    text: 'Durchführung nach Plan – mit Augenmerk auf Gründlichkeit.',
  },
];

export function Process() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Unser Ablauf
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            So läuft's ab
          </h2>
          <p className="text-lg text-muted-foreground">
            Von der ersten Anfrage bis zur fertigen Reinigung – 
            einfach, transparent und unkompliziert.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative group"
              >
                {/* Card */}
                <div className="bg-background rounded-2xl p-8 text-center relative z-10 shadow-sm border border-border/50 h-full card-hover">
                  {/* Step Number */}
                  <div className="relative inline-flex mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <step.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.text}
                  </p>
                </div>

                {/* Arrow connector - desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 text-border z-20 -translate-y-1/2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
