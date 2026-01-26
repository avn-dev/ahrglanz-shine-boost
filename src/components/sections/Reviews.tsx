import { Star, Quote, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const reviews = [
  {
    quote: 'Sehr gute Arbeit, zuverlässig und freundlich. Unsere Büroräume waren noch nie so sauber!',
    author: 'M. Schmidt',
    role: 'Geschäftsführer',
    rating: 5,
  },
  {
    quote: 'Pünktlich, gründlich und faire Preise. Kann AhrGlanz nur weiterempfehlen.',
    author: 'S. Müller',
    role: 'Privathaushalt',
    rating: 5,
  },
  {
    quote: 'Die Bauendreinigung war top. Alles bezugsfertig und streifenfrei. Danke!',
    author: 'K. Weber',
    role: 'Bauträger',
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted'
          }`}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28">
      <div className="section-container">
        {/* Google Rating Badge */}
        <div className="flex justify-center mb-12">
          <a 
            href="https://www.google.com/search?q=AhrGlanz+Geb%C3%A4udereinigung+Bad+Neuenahr-Ahrweiler" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-6 py-4 bg-background rounded-2xl shadow-lg border border-border/50 hover:border-primary/30 transition-colors group"
          >
            {/* Google Logo */}
            <div className="flex items-center gap-1 text-2xl font-bold">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </div>
            <div className="h-10 w-px bg-border" />
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-foreground">5.0</span>
                <StarRating rating={5} />
              </div>
              <span className="text-sm text-muted-foreground">Basierend auf Kundenbewertungen</span>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Kundenstimmen
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Was unsere Kunden sagen
          </h2>
          <p className="text-lg text-muted-foreground">
            Vertrauen entsteht durch gute Arbeit. Lesen Sie, was unsere Kunden über uns sagen.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <article
              key={index}
              className="relative bg-background rounded-2xl p-8 shadow-sm border border-border/50 card-hover"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/10">
                <Quote className="w-12 h-12" />
              </div>

              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={review.rating} />
              </div>

              {/* Quote */}
              <blockquote className="text-foreground mb-6 relative z-10">
                "{review.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {review.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{review.author}</p>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA to Google */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <a 
              href="https://www.google.com/search?q=AhrGlanz+Geb%C3%A4udereinigung+Bad+Neuenahr-Ahrweiler" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Alle Bewertungen auf Google ansehen
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
