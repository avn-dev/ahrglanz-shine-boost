import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

import wohnanlageBild from '@/assets/object-wohnanlage.jpg';
import sportclubBild from '@/assets/object-sportclub.jpg';
import kitaBild from '@/assets/object-kita.jpg';
import bueroBild from '@/assets/object-buero.jpg';
import hotelBild from '@/assets/object-hotel.jpg';
import praxisBild from '@/assets/object-praxis.jpg';

const objects = [
  { id: 1, title: 'Wohnanlage', image: wohnanlageBild },
  { id: 2, title: 'Sportclub', image: sportclubBild },
  { id: 3, title: 'Kita', image: kitaBild },
  { id: 4, title: 'Bürogebäude', image: bueroBild },
  { id: 5, title: 'Hotel', image: hotelBild },
  { id: 6, title: 'Arztpraxis', image: praxisBild },
];

export const ObjectCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Wir reinigen Objekte aller Art
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            className="absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:bg-white"
            aria-label="Vorheriges Objekt"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:bg-white"
            aria-label="Nächstes Objekt"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </Button>

          {/* Slides Container */}
          <div className="overflow-hidden mx-8 md:mx-0" ref={emblaRef}>
            <div className="flex gap-4 md:gap-6">
              {objects.map((object) => (
                <div 
                  key={object.id}
                  className="flex-none w-[85%] sm:w-[45%] lg:w-[31%]"
                >
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden group cursor-pointer">
                    {/* Image */}
                    <img
                      src={object.image}
                      alt={object.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                      <h3 
                        className="text-2xl md:text-3xl font-display font-bold text-white mb-4"
                        style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7), 0 4px 16px rgba(0,0,0,0.5)' }}
                      >
                        {object.title}
                      </h3>
                      <Button
                        variant="secondary"
                        className="bg-white/95 hover:bg-white text-foreground font-medium shadow-lg"
                      >
                        Mehr erfahren
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {objects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === selectedIndex 
                  ? 'bg-foreground w-6' 
                  : 'bg-foreground/30 hover:bg-foreground/50'
              }`}
              aria-label={`Gehe zu Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Ihr Objekt ist nicht dabei? Kein Problem, wir finden die passende Lösung!
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
          >
            Lösung finden
          </Button>
        </div>
      </div>
    </section>
  );
};
