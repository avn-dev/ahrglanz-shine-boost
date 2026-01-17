import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, 'Bitte geben Sie Ihren Namen ein.').max(100),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein.').max(255),
  phone: z.string().optional(),
  service: z.string().min(1, 'Bitte wählen Sie eine Leistung.'),
  location: z.string().min(2, 'Bitte geben Sie Ihren Ort/PLZ ein.').max(100),
  message: z.string().min(10, 'Bitte beschreiben Sie Ihr Anliegen genauer.').max(1000),
  privacy: z.boolean().refine((val) => val === true, {
    message: 'Sie müssen der Datenschutzerklärung zustimmen.',
  }),
  // Honeypot field
  website: z.string().max(0).optional(),
});

type FormData = z.infer<typeof formSchema>;

const services = [
  'Unterhaltsreinigung',
  'Grundreinigung',
  'Glasreinigung',
  'Bauendreinigung',
  'Außenanlagenpflege',
  'Sonstiges',
];

export function QuoteForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      location: '',
      message: '',
      privacy: false,
      website: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    // Honeypot check
    if (data.website && data.website.length > 0) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission (replace with actual backend call)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Anfrage gesendet!",
      description: "Vielen Dank für Ihre Anfrage. Wir melden uns in Kürze bei Ihnen.",
    });
  };

  if (isSubmitted) {
    return (
      <section id="quote-form" className="py-20 lg:py-28">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-success" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Vielen Dank für Ihre Anfrage!
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Wir haben Ihre Nachricht erhalten und melden uns schnellstmöglich bei Ihnen.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setIsSubmitted(false);
                form.reset();
              }}
            >
              Neue Anfrage stellen
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote-form" className="py-20 lg:py-28">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Kontakt
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Kostenloses Angebot{' '}
              <span className="text-primary">anfordern</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Beschreiben Sie uns Ihr Anliegen und wir erstellen Ihnen ein 
              unverbindliches Angebot – fair, transparent und passend zu Ihrem Bedarf.
            </p>

            {/* Alternative Contact */}
            <div className="space-y-4">
              <p className="font-medium text-foreground">Oder kontaktieren Sie uns direkt:</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+4926413968989"
                  className="flex items-center gap-3 px-5 py-4 rounded-xl bg-muted hover:bg-secondary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telefon</p>
                    <p className="font-medium text-foreground">+49 2641 3968989</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/4926413968989"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-4 rounded-xl bg-muted hover:bg-secondary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <p className="font-medium text-foreground">Nachricht senden</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-background rounded-2xl p-8 shadow-lg border border-border/50">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Honeypot - hidden from users */}
                <input
                  type="text"
                  name="website"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                  {...form.register('website')}
                />

                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Ihr Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-Mail *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="ihre@email.de" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefon (optional)</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+49 ..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ort / PLZ *</FormLabel>
                        <FormControl>
                          <Input placeholder="z.B. 53474 Bad Neuenahr" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gewünschte Leistung *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Bitte wählen..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ihre Nachricht *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Beschreiben Sie kurz Ihr Objekt und Ihren Reinigungsbedarf..."
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="privacy"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-normal text-muted-foreground">
                          Ich habe die{' '}
                          <a href="/datenschutz" className="text-primary hover:underline">
                            Datenschutzerklärung
                          </a>{' '}
                          gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung 
                          meiner Anfrage zu. *
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Anfrage absenden
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
