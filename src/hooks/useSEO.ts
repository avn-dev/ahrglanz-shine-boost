import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
}

const BASE_URL = 'https://ahrglanz.de';
const BRAND = 'AhrGlanz Gebäudereinigung';

export function useSEO({ title, description, canonical }: SEOConfig) {
  const location = useLocation();
  
  useEffect(() => {
    // Set document title
    document.title = title;
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical || `${BASE_URL}${location.pathname}`);
    
    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', canonical || `${BASE_URL}${location.pathname}`);
    
  }, [title, description, canonical, location.pathname]);
}

// Pre-defined SEO configurations for static pages
export const SEO_CONFIGS = {
  home: {
    title: 'Gebäudereinigung Bad Neuenahr-Ahrweiler | AhrGlanz',
    description: 'AhrGlanz Gebäudereinigung: Unterhaltsreinigung, Grundreinigung, Glasreinigung & Baureinigung in Bad Neuenahr-Ahrweiler, Bonn & Koblenz. Jetzt kostenloses Angebot anfordern!',
  },
  leistungen: {
    title: 'Reinigungsleistungen | Gebäudereinigung Bad Neuenahr-Ahrweiler | AhrGlanz',
    description: 'Professionelle Reinigungsleistungen: Unterhaltsreinigung, Grundreinigung, Glasreinigung, Baureinigung & mehr. AhrGlanz – Ihr Partner für Gebäudereinigung in Bad Neuenahr-Ahrweiler.',
  },
  objekte: {
    title: 'Objektreinigung | Gebäudereinigung für alle Objektarten | AhrGlanz',
    description: 'Gebäudereinigung für Wohnanlagen, Büros, Praxen, Kitas & Gewerbe in Bad Neuenahr-Ahrweiler, Bonn & Koblenz. Maßgeschneiderte Reinigungslösungen von AhrGlanz.',
  },
  ueberUns: {
    title: 'Über uns | AhrGlanz Gebäudereinigung Bad Neuenahr-Ahrweiler',
    description: 'AhrGlanz Gebäudereinigung – Ihr zuverlässiger Partner in Bad Neuenahr-Ahrweiler. Erfahren Sie mehr über unser Team, unsere Werte und unseren persönlichen Service.',
  },
  kontakt: {
    title: 'Kontakt | Kostenloses Angebot anfordern | AhrGlanz Gebäudereinigung',
    description: 'Kontaktieren Sie AhrGlanz Gebäudereinigung in Bad Neuenahr-Ahrweiler. Telefon, E-Mail oder Kontaktformular – wir erstellen Ihnen ein kostenloses Angebot!',
  },
  impressum: {
    title: 'Impressum | AhrGlanz Gebäudereinigung',
    description: 'Impressum der AhrGlanz Gebäudereinigung – Serkan Sel, Ehlinger Str. 74, 53474 Bad Neuenahr-Ahrweiler.',
  },
  datenschutz: {
    title: 'Datenschutzerklärung | AhrGlanz Gebäudereinigung',
    description: 'Datenschutzerklärung der AhrGlanz Gebäudereinigung. Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO.',
  },
  notFound: {
    title: 'Seite nicht gefunden | AhrGlanz Gebäudereinigung',
    description: 'Die angeforderte Seite wurde nicht gefunden. Zurück zur Startseite von AhrGlanz Gebäudereinigung.',
  },
} as const;

// Helper to generate service page SEO with optional city
export function getLeistungSEO(serviceName: string, slug: string, cityName?: string) {
  const location = cityName || 'Bad Neuenahr-Ahrweiler';
  const canonical = cityName 
    ? `https://ahrglanz.de/leistungen/${slug}/${cityName.toLowerCase().replace(/\s+/g, '-').replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u')}`
    : `https://ahrglanz.de/leistungen/${slug}`;
  
  return {
    title: `${serviceName} ${location} | Gebäudereinigung | AhrGlanz`,
    description: `Professionelle ${serviceName} in ${location}. AhrGlanz Gebäudereinigung – zuverlässig, gründlich & fair. Jetzt kostenloses Angebot anfordern!`,
    canonical,
  };
}

// Helper to generate object page SEO with optional city
export function getObjektSEO(objectName: string, slug: string, cityName?: string) {
  const location = cityName || 'Bad Neuenahr-Ahrweiler';
  const canonical = cityName 
    ? `https://ahrglanz.de/objekte/${slug}/${cityName.toLowerCase().replace(/\s+/g, '-').replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u')}`
    : `https://ahrglanz.de/objekte/${slug}`;
  
  return {
    title: `${objectName} Reinigung ${location} | Gebäudereinigung | AhrGlanz`,
    description: `Professionelle Gebäudereinigung für ${objectName} in ${location}. AhrGlanz – Ihr Partner für saubere ${objectName}. Kostenloses Angebot!`,
    canonical,
  };
}
