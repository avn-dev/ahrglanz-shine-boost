import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { WhyUs } from '@/components/sections/WhyUs';
import { ObjectCarousel } from '@/components/sections/ObjectCarousel';
import { Process } from '@/components/sections/Process';
import { Reviews } from '@/components/sections/Reviews';
import { FAQ } from '@/components/sections/FAQ';
import { QuoteForm } from '@/components/sections/QuoteForm';
import { Footer } from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <ObjectCarousel />
        <Process />
        <Reviews />
        <FAQ />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
