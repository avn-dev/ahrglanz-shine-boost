// Städte-Konfiguration für dynamische SEO-optimierte URLs
// URL-Struktur: /leistungen/:slug/:stadt? und /objekte/:slug/:stadt?

export interface City {
  slug: string;
  name: string;
  region?: string; // Optionaler Zusatz wie "und Umgebung"
}

// Standard-Fallback wenn keine Stadt angegeben
export const DEFAULT_CITY: City = {
  slug: '',
  name: 'Bad Neuenahr-Ahrweiler',
  region: 'und Umgebung',
};

// Alle unterstützten Städte
export const CITIES: City[] = [
  // Hauptstädte
  { slug: 'bad-neuenahr-ahrweiler', name: 'Bad Neuenahr-Ahrweiler', region: 'und Umgebung' },
  { slug: 'bonn', name: 'Bonn', region: 'und Umgebung' },
  { slug: 'koblenz', name: 'Koblenz', region: 'und Umgebung' },
  
  // Ahrkreis
  { slug: 'sinzig', name: 'Sinzig' },
  { slug: 'remagen', name: 'Remagen' },
  { slug: 'bad-breisig', name: 'Bad Breisig' },
  { slug: 'grafschaft', name: 'Grafschaft' },
  { slug: 'ahrweiler', name: 'Ahrweiler' },
  
  // Ortsteile Bad Neuenahr-Ahrweiler
  { slug: 'loehndorf', name: 'Löhndorf' },
  { slug: 'koisdorf', name: 'Koisdorf' },
  { slug: 'westum', name: 'Westum' },
  { slug: 'bad-bodendorf', name: 'Bad Bodendorf' },
  { slug: 'heimersheim', name: 'Heimersheim' },
  { slug: 'heppingen', name: 'Heppingen' },
  { slug: 'bachem', name: 'Bachem' },
  { slug: 'walporzheim', name: 'Walporzheim' },
  { slug: 'marienthal', name: 'Marienthal' },
  
  // Rhein-Region
  { slug: 'andernach', name: 'Andernach' },
  { slug: 'neuwied', name: 'Neuwied' },
  { slug: 'bad-honnef', name: 'Bad Honnef' },
  { slug: 'koenigswinter', name: 'Königswinter' },
  { slug: 'unkel', name: 'Unkel' },
  { slug: 'linz', name: 'Linz am Rhein' },
  { slug: 'bad-hoenningen', name: 'Bad Hönningen' },
  
  // Eifel & Umgebung
  { slug: 'adenau', name: 'Adenau' },
  { slug: 'altenahr', name: 'Altenahr' },
  { slug: 'mayschoß', name: 'Mayschoß' },
  { slug: 'dernau', name: 'Dernau' },
  { slug: 'rech', name: 'Rech' },
  
  // Mayen-Koblenz
  { slug: 'mayen', name: 'Mayen' },
  { slug: 'mendig', name: 'Mendig' },
  { slug: 'plaidt', name: 'Plaidt' },
  
  // Rhein-Sieg
  { slug: 'meckenheim', name: 'Meckenheim' },
  { slug: 'rheinbach', name: 'Rheinbach' },
  { slug: 'bad-godesberg', name: 'Bad Godesberg' },
  { slug: 'beuel', name: 'Beuel' },
];

// Hilfsfunktion: Stadt anhand Slug finden
export function getCityBySlug(slug: string | undefined): City | null {
  if (!slug) return null;
  return CITIES.find(city => city.slug === slug) || null;
}

// Hilfsfunktion: Vollständiger Stadtname mit optionaler Region
export function getCityDisplayName(city: City): string {
  return city.region ? `${city.name} ${city.region}` : city.name;
}

// Hilfsfunktion: Stadtname für Titel (ohne "und Umgebung")
export function getCityTitleName(city: City | null): string {
  if (!city) return DEFAULT_CITY.name + ' ' + DEFAULT_CITY.region;
  return city.name;
}

// Prüfen ob eine Stadt gültig ist
export function isValidCity(slug: string | undefined): boolean {
  if (!slug) return true; // Keine Stadt = Standard-Fallback
  return CITIES.some(city => city.slug === slug);
}
