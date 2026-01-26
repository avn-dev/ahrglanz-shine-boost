import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'In welchem Gebiet sind Sie tätig?',
    answer: 'Wir sind in Bad Neuenahr-Ahrweiler, Bonn, Koblenz und der gesamten Region tätig – inklusive Ahrtal, Sinzig, Remagen und Umgebung. Der genaue Radius hängt vom Auftrag ab – sprechen Sie uns gern an, wir finden eine Lösung.',
  },
  {
    question: 'Welche Reinigungen bieten Sie an?',
    answer: 'Wir bieten ein umfassendes Leistungsspektrum: Unterhaltsreinigung, Grundreinigung, Glasreinigung, Bauendreinigung, Treppenhausreinigung, Photovoltaikreinigung, Steinreinigung und Desinfektionsreinigung. Ob Büro, Praxis, Wohnanlage oder Gewerbe – wir haben die passende Lösung.',
  },
  {
    question: 'Wie schnell bekomme ich ein Angebot?',
    answer: 'In der Regel erhalten Sie nach kurzer Klärung der Eckdaten innerhalb weniger Tage ein individuelles Angebot. Bei größeren Objekten vereinbaren wir bei Bedarf einen Besichtigungstermin.',
  },
  {
    question: 'Bieten Sie regelmäßige Reinigung an?',
    answer: 'Ja, unsere Unterhaltsreinigung kann im passenden Turnus erfolgen – wöchentlich, 14-tägig, monatlich oder nach individueller Vereinbarung. So bleibt Ihr Objekt dauerhaft gepflegt.',
  },
  {
    question: 'Welche Reinigungsmittel verwenden Sie?',
    answer: 'Wir verwenden professionelle, auf das jeweilige Material abgestimmte Reinigungsmittel. Bei besonderen Anforderungen (z.B. empfindliche Oberflächen oder Allergiker) passen wir unsere Produkte entsprechend an.',
  },
  {
    question: 'Wie kann ich Sie am besten erreichen?',
    answer: 'Sie erreichen uns telefonisch unter +49 2641 3968989, per E-Mail an info@ahrglanz.de oder direkt über das Kontaktformular auf dieser Seite. Wir melden uns schnellstmöglich bei Ihnen.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-muted/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Häufige Fragen
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Sie haben Fragen?{' '}
              <span className="text-primary">Wir haben Antworten.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Hier finden Sie Antworten auf die häufigsten Fragen rund um unsere 
              Reinigungsleistungen. Bei weiteren Fragen sind wir gern für Sie da.
            </p>
            <a
              href="#quote-form"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              Noch Fragen? Kontaktieren Sie uns
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right - Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background rounded-xl border border-border/50 px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary py-5 [&[data-state=open]]:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
