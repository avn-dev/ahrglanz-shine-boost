import { Star, Quote } from 'lucide-react';

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
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? 'text-accent fill-accent' : 'text-muted'
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
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Kundenstimmen
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Was unsere Kunden sagen
          </h2>
          <p className="text-lg text-muted-foreground">
            Vertrauen entsteht durch gute Arbeit. Hier teilen unsere Kunden ihre Erfahrungen.
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

        {/* Trust Note */}
        <p className="text-center text-sm text-muted-foreground mt-12">
          * Beispielhafte Kundenstimmen. Echte Bewertungen finden Sie auf Google.
        </p>
      </div>
    </section>
  );
}
