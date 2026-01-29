// Subtile SEO-Lokalisierung für Städte-Seiten
// Ersetzt nur die Ortsangaben in bestehenden Texten – keine zusätzlichen Textblöcke

import { City, DEFAULT_CITY } from './cities';

// Hilfsfunktion: Stadtname mit optionaler Region
function getCityWithRegion(city: City | null): string {
  if (!city) return `${DEFAULT_CITY.name} ${DEFAULT_CITY.region}`;
  return city.region ? `${city.name} ${city.region}` : city.name;
}

// ============= LEISTUNGEN LOKALISIERUNG =============

export interface LeistungSEOContent {
  closingTextLocalized: string;
}

export function getLeistungSEOContent(
  serviceSlug: string,
  serviceName: string,
  city: City | null
): LeistungSEOContent {
  const cityWithRegion = getCityWithRegion(city);
  
  return {
    closingTextLocalized: `Nach einer kostenlosen Besichtigung erstellen wir ein individuelles Angebot für die ${serviceName} Ihres Objekts. Zuverlässig, termingerecht und nach festen Qualitätsstandards – im Raum ${cityWithRegion}.`
  };
}

// ============= OBJEKTE LOKALISIERUNG =============

export interface ObjektSEOContent {
  closingTextLocalized: string;
}

export function getObjektSEOContent(
  objectSlug: string,
  objectName: string,
  city: City | null
): ObjektSEOContent {
  const cityWithRegion = getCityWithRegion(city);
  
  return {
    closingTextLocalized: `Nach einer kostenlosen Besichtigung erstellen wir ein individuelles Angebot für die Reinigung Ihres Objekts. Zuverlässig, termingerecht und nach festen Qualitätsstandards – im Raum ${cityWithRegion}.`
  };
}
