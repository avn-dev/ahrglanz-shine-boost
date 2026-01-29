// SEO-optimierte lokalisierte Textinhalte für Städte-Seiten
// Erweitert die statischen Daten mit dynamischen, stadtbezogenen Inhalten

import { City, DEFAULT_CITY } from './cities';

// Hilfsfunktion: Stadtname für natürlichen Text
function getCityText(city: City | null): string {
  if (!city) return `${DEFAULT_CITY.name} ${DEFAULT_CITY.region}`;
  return city.region ? `${city.name} ${city.region}` : city.name;
}

// Hilfsfunktion: Nur Stadtname
function getCityName(city: City | null): string {
  return city?.name || DEFAULT_CITY.name;
}

// Regionszuordnung für SEO-Texte
function getRegionContext(city: City | null): string {
  if (!city) return 'im Ahrkreis';
  
  const ahrkreis = ['bad-neuenahr-ahrweiler', 'sinzig', 'remagen', 'bad-breisig', 'grafschaft', 'ahrweiler', 'adenau', 'altenahr', 'mayschoß', 'dernau', 'rech'];
  const ortsteile = ['loehndorf', 'koisdorf', 'westum', 'bad-bodendorf', 'heimersheim', 'heppingen', 'bachem', 'walporzheim', 'marienthal'];
  const rheinRegion = ['andernach', 'neuwied', 'bad-honnef', 'koenigswinter', 'unkel', 'linz', 'bad-hoenningen'];
  const bonnerRaum = ['bonn', 'bad-godesberg', 'beuel', 'meckenheim', 'rheinbach'];
  const koblenzRaum = ['koblenz', 'mayen', 'mendig', 'plaidt'];
  
  if (ortsteile.includes(city.slug)) return 'im Raum Bad Neuenahr-Ahrweiler';
  if (ahrkreis.includes(city.slug)) return 'im Ahrkreis';
  if (bonnerRaum.includes(city.slug)) return 'im Raum Bonn';
  if (koblenzRaum.includes(city.slug)) return 'im Raum Koblenz';
  if (rheinRegion.includes(city.slug)) return 'am Rhein';
  
  return 'in der Region';
}

// ============= LEISTUNGEN SEO-TEXTE =============

export interface LeistungSEOContent {
  heroDescriptionLocalized: string;
  sectionDescriptionLocalized: string;
  bulletIntroLocalized: string;
  closingTextLocalized: string;
  localSEOParagraph: string;
}

export function getLeistungSEOContent(
  serviceSlug: string,
  serviceName: string,
  city: City | null
): LeistungSEOContent {
  const cityText = getCityText(city);
  const cityName = getCityName(city);
  const region = getRegionContext(city);
  
  const serviceTexts: Record<string, LeistungSEOContent> = {
    unterhaltsreinigung: {
      heroDescriptionLocalized: `Professionelle Unterhaltsreinigung in ${cityName}: AhrGlanz Gebäudereinigung sorgt für dauerhaft saubere und hygienische Räumlichkeiten ${region}. Mit festen Reinigungsplänen, geschultem Personal und zuverlässigem Service gewährleisten wir gleichbleibend hohe Qualität – ob täglich, wöchentlich oder nach individuellem Bedarf. Ihr lokaler Partner für Gebäudereinigung in ${cityText}.`,
      sectionDescriptionLocalized: `Eine regelmäßige Unterhaltsreinigung in ${cityName} sorgt für Sauberkeit, Hygiene und den Werterhalt Ihrer Immobilie. Wir erstellen individuelle Reinigungspläne für Objekte ${region} und setzen diese zuverlässig und planbar um – abgestimmt auf Ihr Objekt und Ihren Bedarf.`,
      bulletIntroLocalized: `Als Ihr Reinigungspartner in ${cityName} erzielen wir mit geschultem Personal, professionellen Reinigungsmitteln und festen Qualitätsstandards nachhaltige Ergebnisse ${region} – zuverlässig und gründlich.`,
      closingTextLocalized: `Kontaktieren Sie AhrGlanz Gebäudereinigung für Ihre Unterhaltsreinigung in ${cityName}. Nach einer kostenlosen Besichtigung vor Ort erstellen wir ein individuelles Angebot. Zuverlässig, termingerecht und nach festen Qualitätsstandards – Ihr lokaler Partner ${region}.`,
      localSEOParagraph: `Als etablierter Gebäudereinigungsbetrieb ${region} kennen wir die Anforderungen von Unternehmen und Hausverwaltungen in ${cityName} genau. Ob Bürogebäude, Wohnanlage oder Gewerbeobjekt – unsere Unterhaltsreinigung ist auf lokale Bedürfnisse abgestimmt.`
    },
    grundreinigung: {
      heroDescriptionLocalized: `Intensive Grundreinigung in ${cityName}: Die Grundreinigung von AhrGlanz ist die professionelle Lösung für stark verschmutzte Flächen ${region}. Wir entfernen hartnäckigen Schmutz, alte Pflegefilme und Ablagerungen – und bringen Ihre Räume wieder zum Strahlen. Ideal vor Neubezug, nach Renovierung oder zur Werterhaltung Ihrer Immobilie in ${cityText}.`,
      sectionDescriptionLocalized: `Unsere Grundreinigung in ${cityName} geht deutlich über die Unterhaltsreinigung hinaus. Wir reinigen intensiv, systematisch und bis ins Detail – ideal nach Bauarbeiten, vor Neubezug oder zur Werterhaltung Ihrer Immobilie ${region}.`,
      bulletIntroLocalized: `Mit professioneller Ausrüstung und erfahrenem Fachpersonal führen wir Grundreinigungen in ${cityName} nach höchsten Standards durch. Vertrauen Sie auf unsere Expertise ${region}.`,
      closingTextLocalized: `Vereinbaren Sie jetzt eine kostenlose Besichtigung für Ihre Grundreinigung in ${cityName}. Wir erstellen ein transparentes Angebot – individuell auf Ihr Objekt ${region} abgestimmt.`,
      localSEOParagraph: `Ob Wohnung, Büro oder Gewerbeimmobilie in ${cityName} – unsere Grundreinigung entfernt selbst hartnäckigste Verschmutzungen. Als lokaler Dienstleister ${region} sind wir schnell vor Ort und flexibel in der Terminplanung.`
    },
    glasreinigung: {
      heroDescriptionLocalized: `Streifenfreie Glasreinigung in ${cityName}: Saubere Glasflächen sorgen für Licht, Transparenz und einen positiven Gesamteindruck. AhrGlanz Gebäudereinigung reinigt Fenster, Glasfassaden und Wintergärten ${region} – fachgerecht, sicher und abgestimmt auf Ihr Objekt in ${cityText}.`,
      sectionDescriptionLocalized: `Professionelle Glasreinigung in ${cityName} für klare Sicht und gepflegte Gebäude. Unsere Glasreinigung umfasst alle relevanten Glas- und Rahmenflächen ${region} – fachgerecht, sicher und abgestimmt auf Ihr Objekt.`,
      bulletIntroLocalized: `Streifenfreie Ergebnisse garantiert: Unsere Glasreinigung in ${cityName} überzeugt durch Professionalität und Zuverlässigkeit. Wir sind Ihr Partner für saubere Glasflächen ${region}.`,
      closingTextLocalized: `Holen Sie sich jetzt ein kostenloses Angebot für Ihre Glasreinigung in ${cityName}. Wir reinigen Fenster, Glasfassaden und mehr – professionell und termingerecht ${region}.`,
      localSEOParagraph: `Von einzelnen Fenstern bis zur kompletten Glasfassade: In ${cityName} und ${region} sind wir Ihr zuverlässiger Partner für professionelle Glasreinigung. Kontaktieren Sie uns für eine Besichtigung vor Ort.`
    },
    baureinigung: {
      heroDescriptionLocalized: `Professionelle Baureinigung in ${cityName}: Ob Neubau, Umbau oder Renovierung – Bauarbeiten hinterlassen Staub, Schmutz und Rückstände. AhrGlanz Gebäudereinigung begleitet Sie ${region} von der Grobreinigung während der Bauphase bis zur gründlichen Endreinigung vor der Übergabe in ${cityText}.`,
      sectionDescriptionLocalized: `Von der Grob- über die Zwischen- bis zur Endreinigung in ${cityName}: Wir kümmern uns zuverlässig um saubere Baustellen und eine termingerechte Übergabe ${region}. Für private, gewerbliche und öffentliche Bauherren.`,
      bulletIntroLocalized: `Termingerechte Bauendreinigung in ${cityName} – für die pünktliche Übergabe Ihres Bauobjekts. Vertrauen Sie auf unsere Erfahrung ${region} bei Neubauten und Renovierungen.`,
      closingTextLocalized: `Planen Sie eine Baureinigung in ${cityName}? Kontaktieren Sie AhrGlanz für ein kostenloses Angebot. Wir sorgen für saubere Baustellen und termingerechte Übergaben ${region}.`,
      localSEOParagraph: `Bauherren und Handwerksbetriebe in ${cityName} vertrauen auf unsere Baureinigung. Als lokaler Partner ${region} sind wir flexibel, zuverlässig und garantieren eine saubere Übergabe – pünktlich zum geplanten Termin.`
    },
    desinfektionsreinigung: {
      heroDescriptionLocalized: `Desinfektionsreinigung in ${cityName}: Wir reduzieren Keime, Bakterien und Viren zuverlässig und sorgen für hygienisch sichere Räume ${region}. AhrGlanz schützt Mitarbeiter, Kunden und Besucher – in Arztpraxen, Büros, Schulen und Pflegeeinrichtungen in ${cityText}.`,
      sectionDescriptionLocalized: `Hygienische Sicherheit in ${cityName}: In sensiblen Bereichen wie Praxen, Pflegeeinrichtungen und Büros ${region} ist Desinfektion entscheidend. Unsere Desinfektionsreinigung reduziert Keime zuverlässig – mit geprüften Desinfektionsmitteln.`,
      bulletIntroLocalized: `Maximale Hygiene in ${cityName}: Mit VAH-geprüften Desinfektionsmitteln und geschultem Personal sorgen wir für keimfreie Oberflächen ${region}.`,
      closingTextLocalized: `Benötigen Sie eine Desinfektionsreinigung in ${cityName}? Wir beraten Sie gerne und erstellen ein individuelles Angebot für Ihre Einrichtung ${region}.`,
      localSEOParagraph: `Praxen, Kitas und Unternehmen in ${cityName} setzen auf unsere professionelle Desinfektionsreinigung. Als lokaler Anbieter ${region} reagieren wir schnell und flexibel auf Ihren Bedarf.`
    },
    photovoltaikreinigung: {
      heroDescriptionLocalized: `Photovoltaikreinigung in ${cityName}: Verschmutzte Solarmodule verlieren messbar an Leistung. AhrGlanz entfernt Staub, Pollen und Ablagerungen ${region} zuverlässig – für maximale Energieausbeute Ihrer PV-Anlage in ${cityText}.`,
      sectionDescriptionLocalized: `Saubere Solarmodule in ${cityName} für mehr Ertrag: Unsere professionelle Photovoltaikreinigung ${region} entfernt Verschmutzungen schonend und ohne Chemie – für maximale Leistung Ihrer Anlage.`,
      bulletIntroLocalized: `Steigern Sie den Ertrag Ihrer Solaranlage in ${cityName}: Mit unserer fachgerechten Photovoltaikreinigung ${region} sorgen wir für saubere Module und optimale Leistung.`,
      closingTextLocalized: `Lassen Sie Ihre PV-Anlage in ${cityName} professionell reinigen. Kontaktieren Sie AhrGlanz für ein kostenloses Angebot – wir sind Ihr lokaler Partner für Photovoltaikreinigung ${region}.`,
      localSEOParagraph: `Hausbesitzer und Unternehmen in ${cityName} profitieren von unserer schonenden Photovoltaikreinigung. Als regionaler Anbieter ${region} kennen wir die lokalen Bedingungen und reinigen Ihre Module fachgerecht.`
    },
    steinreinigung: {
      heroDescriptionLocalized: `Stein- und Außenreinigung in ${cityName}: Terrassen, Einfahrten und Außenflächen werden durch Witterung und Ablagerungen unansehnlich. AhrGlanz bringt Ihre Außenbereiche ${region} wieder zum Strahlen – schonend und gründlich in ${cityText}.`,
      sectionDescriptionLocalized: `Gepflegte Außenflächen in ${cityName}: Unsere Steinreinigung ${region} entfernt Moos, Algen und Verschmutzungen von Terrassen, Wegen und Fassaden – für einen einladenden ersten Eindruck.`,
      bulletIntroLocalized: `Professionelle Außenreinigung in ${cityName}: Wir pflegen Ihre Terrassen, Einfahrten und Außenanlagen ${region} mit modernen Reinigungsmethoden.`,
      closingTextLocalized: `Möchten Sie Ihre Außenflächen in ${cityName} reinigen lassen? Wir erstellen ein kostenloses Angebot für Ihre Steinreinigung ${region}.`,
      localSEOParagraph: `Von der Terrasse bis zur Einfahrt: In ${cityName} und ${region} sind wir Ihr Spezialist für professionelle Steinreinigung und Außenanlagenpflege.`
    },
    treppenhausreinigung: {
      heroDescriptionLocalized: `Treppenhausreinigung in ${cityName}: Saubere Treppenhäuser sind die Visitenkarte jeder Wohnanlage. AhrGlanz sorgt ${region} für gepflegte Eingangsbereiche, hygienische Geländer und saubere Stufen in ${cityText}.`,
      sectionDescriptionLocalized: `Professionelle Treppenhausreinigung in ${cityName} für Wohnanlagen und Mehrfamilienhäuser ${region}. Wir reinigen regelmäßig und zuverlässig – für zufriedene Bewohner und gepflegte Gemeinschaftsflächen.`,
      bulletIntroLocalized: `Zuverlässige Treppenhausreinigung in ${cityName}: Feste Reinigungsintervalle und geschultes Personal sorgen für gleichbleibend saubere Treppenhäuser ${region}.`,
      closingTextLocalized: `Suchen Sie eine zuverlässige Treppenhausreinigung in ${cityName}? Kontaktieren Sie uns für ein Angebot – wir sind Ihr lokaler Partner ${region}.`,
      localSEOParagraph: `Hausverwaltungen und Eigentümer in ${cityName} vertrauen auf unsere Treppenhausreinigung. Als lokaler Anbieter ${region} garantieren wir pünktliche und gründliche Reinigung.`
    },
    tatortreinigung: {
      heroDescriptionLocalized: `Tatortreinigung in ${cityName}: Diskrete und professionelle Reinigung nach Unglücksfällen ${region}. AhrGlanz ist 24/7 erreichbar und sorgt für fachgerechte Dekontamination und Reinigung in ${cityText}.`,
      sectionDescriptionLocalized: `Sensible Tatortreinigung in ${cityName}: Nach Unglücksfällen oder besonderen Vorkommnissen ${region} reinigen wir diskret, gründlich und nach allen Hygienevorschriften.`,
      bulletIntroLocalized: `24/7 Erreichbarkeit für Tatortreinigung in ${cityName}: In schwierigen Situationen sind wir schnell vor Ort ${region} – diskret und professionell.`,
      closingTextLocalized: `Benötigen Sie eine Tatortreinigung in ${cityName}? Rufen Sie uns an – wir sind 24/7 erreichbar und helfen schnell und diskret ${region}.`,
      localSEOParagraph: `In Notfällen sind wir in ${cityName} und ${region} schnell zur Stelle. Unsere Tatortreinigung erfolgt diskret, fachgerecht und mit höchster Sensibilität.`
    }
  };
  
  // Fallback für nicht definierte Services
  const defaultContent: LeistungSEOContent = {
    heroDescriptionLocalized: `Professionelle ${serviceName} in ${cityName}: AhrGlanz Gebäudereinigung ist Ihr zuverlässiger Partner für ${serviceName} ${region}. Wir arbeiten gründlich, termingerecht und nach festen Qualitätsstandards in ${cityText}.`,
    sectionDescriptionLocalized: `${serviceName} in ${cityName}: Unsere Reinigungsleistungen ${region} werden individuell auf Ihr Objekt und Ihre Anforderungen abgestimmt – für nachhaltige Ergebnisse.`,
    bulletIntroLocalized: `Mit geschultem Personal und professioneller Ausrüstung führen wir ${serviceName} in ${cityName} nach höchsten Standards durch.`,
    closingTextLocalized: `Kontaktieren Sie uns für Ihre ${serviceName} in ${cityName}. Wir erstellen ein kostenloses Angebot – individuell auf Ihr Objekt ${region} abgestimmt.`,
    localSEOParagraph: `Als lokaler Reinigungspartner in ${cityName} und ${region} sind wir schnell vor Ort und flexibel in der Terminplanung.`
  };
  
  return serviceTexts[serviceSlug] || defaultContent;
}

// ============= OBJEKTE SEO-TEXTE =============

export interface ObjektSEOContent {
  heroDescriptionLocalized: string;
  sectionDescriptionLocalized: string;
  bulletIntroLocalized: string;
  closingTextLocalized: string;
  localSEOParagraph: string;
}

export function getObjektSEOContent(
  objectSlug: string,
  objectName: string,
  city: City | null
): ObjektSEOContent {
  const cityText = getCityText(city);
  const cityName = getCityName(city);
  const region = getRegionContext(city);
  
  const objectTexts: Record<string, ObjektSEOContent> = {
    wohnanlage: {
      heroDescriptionLocalized: `Gebäudereinigung für Wohnanlagen in ${cityName}: Eine gepflegte Wohnanlage trägt maßgeblich zum Wohlbefinden der Bewohner bei. AhrGlanz sorgt ${region} für saubere Treppenhäuser, ordentliche Eingangsbereiche und hygienische Gemeinschaftsflächen in ${cityText}.`,
      sectionDescriptionLocalized: `Wohnanlagen in ${cityName} stellen besondere Anforderungen an die Gebäudereinigung. Regelmäßige Unterhaltsreinigung, feste Reinigungsintervalle und ein zuverlässiger Ansprechpartner ${region} sind entscheidend für Eigentümer und Hausverwaltungen.`,
      bulletIntroLocalized: `Hausverwaltungen und Eigentümer in ${cityName} vertrauen auf unsere zuverlässige Wohnanlagenreinigung. Mit festen Ansprechpartnern und klaren Reinigungsplänen garantieren wir ${region} gleichbleibende Qualität.`,
      closingTextLocalized: `Suchen Sie einen zuverlässigen Partner für die Reinigung Ihrer Wohnanlage in ${cityName}? Kontaktieren Sie AhrGlanz für ein kostenloses Angebot ${region}.`,
      localSEOParagraph: `Ob Mehrfamilienhaus oder große Wohnanlage in ${cityName} – wir sind Ihr lokaler Partner für Treppenhausreinigung und Gebäudepflege ${region}. Feste Reinigungsintervalle und geschultes Personal garantieren zufriedene Bewohner.`
    },
    buero: {
      heroDescriptionLocalized: `Büroreinigung in ${cityName}: Ein sauberes Büro ist die Grundlage für produktives Arbeiten und einen professionellen Eindruck. AhrGlanz sorgt ${region} für hygienische, gepflegte Arbeitsumgebungen in ${cityText} – zuverlässig und diskret.`,
      sectionDescriptionLocalized: `Jedes Büro in ${cityName} stellt unterschiedliche Anforderungen an die Reinigung. Unsere Büroreinigung ${region} wird individuell geplant und umfasst alle relevanten Bereiche – von Arbeitsplätzen über Sanitäranlagen bis zu Gemeinschaftsflächen.`,
      bulletIntroLocalized: `Unternehmen in ${cityName} setzen auf unsere professionelle Büroreinigung. Flexible Reinigungszeiten ${region} garantieren störungsfreien Betrieb.`,
      closingTextLocalized: `Benötigen Sie eine zuverlässige Büroreinigung in ${cityName}? Wir erstellen ein individuelles Angebot für Ihre Büroräume ${region}.`,
      localSEOParagraph: `Vom kleinen Büro bis zum Bürokomplex in ${cityName} – wir sind Ihr Partner für professionelle Unterhaltsreinigung ${region}. Flexible Einsatzzeiten und feste Ansprechpartner inklusive.`
    },
    hotel: {
      heroDescriptionLocalized: `Hotelreinigung in ${cityName}: In der Hotellerie entscheidet Sauberkeit über den Erfolg. AhrGlanz sorgt ${region} für gepflegte Lobbys, hygienische Gemeinschaftsbereiche und saubere Konferenzräume in ${cityText}.`,
      sectionDescriptionLocalized: `Hotels in ${cityName} stellen besondere Anforderungen an die Reinigung. Hohe Besucherfrequenz, wechselnde Gäste und strenge Hygienestandards ${region} erfordern strukturierte Abläufe und diskrete Durchführung.`,
      bulletIntroLocalized: `Hotels und Gastgewerbebetriebe in ${cityName} vertrauen auf unsere diskrete und professionelle Reinigung ${region}.`,
      closingTextLocalized: `Betreiben Sie ein Hotel in ${cityName}? Kontaktieren Sie uns für ein maßgeschneidertes Reinigungskonzept ${region}.`,
      localSEOParagraph: `Für Hotels und Pensionen in ${cityName} bieten wir flexible Reinigungslösungen ${region}. Diskrete Durchführung und höchste Hygienestandards für zufriedene Gäste.`
    },
    kita: {
      heroDescriptionLocalized: `Kita-Reinigung in ${cityName}: In Kindertagesstätten hat Hygiene oberste Priorität. AhrGlanz sorgt ${region} für saubere Gruppenräume, hygienische Sanitäranlagen und gepflegte Spielbereiche in ${cityText}.`,
      sectionDescriptionLocalized: `Kitas in ${cityName} stellen besondere Anforderungen an die Reinigung. Sensible Oberflächen, kindgerechte Reinigungsmittel und flexible Einsatzzeiten ${region} sind entscheidend für sichere Räumlichkeiten.`,
      bulletIntroLocalized: `Kindertagesstätten in ${cityName} setzen auf unsere kindgerechte und gründliche Reinigung ${region}. Geprüfte Reinigungsmittel und erfahrenes Personal garantieren Sicherheit.`,
      closingTextLocalized: `Suchen Sie eine zuverlässige Reinigung für Ihre Kita in ${cityName}? Wir erstellen ein Angebot nach Ihren Hygienestandards ${region}.`,
      localSEOParagraph: `Für Kindertagesstätten und Kindergärten in ${cityName} bieten wir spezialisierte Reinigungskonzepte ${region}. Hygienisch, kindersicher und zuverlässig.`
    },
    praxis: {
      heroDescriptionLocalized: `Praxisreinigung in ${cityName}: In Arztpraxen gelten besondere Hygienevorschriften. AhrGlanz sorgt ${region} für keimfreie Behandlungsräume, saubere Wartezimmer und hygienische Sanitäranlagen in ${cityText}.`,
      sectionDescriptionLocalized: `Arztpraxen und Gesundheitseinrichtungen in ${cityName} stellen höchste Anforderungen an Hygiene und Reinigung ${region}. Unsere Praxisreinigung erfüllt alle geltenden Standards.`,
      bulletIntroLocalized: `Ärzte und Praxisinhaber in ${cityName} vertrauen auf unsere hygienische Praxisreinigung ${region}. Desinfektion und Dokumentation auf Wunsch.`,
      closingTextLocalized: `Benötigen Sie eine professionelle Praxisreinigung in ${cityName}? Wir beraten Sie gerne zu unseren Leistungen ${region}.`,
      localSEOParagraph: `Arztpraxen, Zahnarztpraxen und Therapieeinrichtungen in ${cityName} setzen auf unsere Fachkompetenz ${region}. Hygienische Reinigung nach medizinischen Standards.`
    },
    geschaeft: {
      heroDescriptionLocalized: `Geschäftsreinigung in ${cityName}: Ein sauberes Ladenlokal ist entscheidend für den Geschäftserfolg. AhrGlanz sorgt ${region} für gepflegte Verkaufsflächen und einladende Eingangsbereiche in ${cityText}.`,
      sectionDescriptionLocalized: `Einzelhandel und Geschäfte in ${cityName} profitieren von unserer regelmäßigen Unterhaltsreinigung ${region}. Saubere Verkaufsflächen für mehr Kundenfrequenz.`,
      bulletIntroLocalized: `Geschäftsinhaber in ${cityName} setzen auf unsere flexible und zuverlässige Ladenreinigung ${region}.`,
      closingTextLocalized: `Betreiben Sie ein Geschäft in ${cityName}? Kontaktieren Sie uns für ein individuelles Reinigungsangebot ${region}.`,
      localSEOParagraph: `Für Einzelhandel, Boutiquen und Geschäfte in ${cityName} bieten wir flexible Reinigungslösungen ${region}. Sauberkeit, die Kunden überzeugt.`
    },
    industrie: {
      heroDescriptionLocalized: `Industriereinigung in ${cityName}: Produktionshallen und Industrieanlagen erfordern spezialisierte Reinigungslösungen. AhrGlanz sorgt ${region} für saubere Arbeitsbereiche und hygienische Sozialräume in ${cityText}.`,
      sectionDescriptionLocalized: `Industriebetriebe in ${cityName} stellen besondere Anforderungen an die Reinigung ${region}. Wir reinigen Produktionsflächen, Lagerbereiche und Sozialräume nach industriellen Standards.`,
      bulletIntroLocalized: `Industrieunternehmen in ${cityName} vertrauen auf unsere Kompetenz bei der Reinigung von Produktionsstätten ${region}.`,
      closingTextLocalized: `Benötigen Sie eine Industriereinigung in ${cityName}? Wir erstellen ein maßgeschneidertes Konzept für Ihren Betrieb ${region}.`,
      localSEOParagraph: `Für Industriebetriebe und Produktionsanlagen in ${cityName} bieten wir professionelle Reinigungslösungen ${region}. Fachgerecht, sicher und zuverlässig.`
    },
    sportclub: {
      heroDescriptionLocalized: `Sportstättenreinigung in ${cityName}: Fitnessstudios und Sportanlagen erfordern höchste Hygienestandards. AhrGlanz sorgt ${region} für saubere Trainingsräume und hygienische Umkleiden in ${cityText}.`,
      sectionDescriptionLocalized: `Sportanlagen in ${cityName} stellen besondere Anforderungen an die Reinigung ${region}. Regelmäßige Desinfektion und gründliche Sanitärreinigung für zufriedene Mitglieder.`,
      bulletIntroLocalized: `Fitnessstudios und Sportvereine in ${cityName} setzen auf unsere hygienische Sportstättenreinigung ${region}.`,
      closingTextLocalized: `Betreiben Sie eine Sportanlage in ${cityName}? Wir erstellen ein Reinigungskonzept nach Ihren Anforderungen ${region}.`,
      localSEOParagraph: `Für Fitnessstudios, Sportvereine und Schwimmbäder in ${cityName} bieten wir spezialisierte Reinigung ${region}. Hygiene, die Mitglieder schätzen.`
    },
    gastronomie: {
      heroDescriptionLocalized: `Gastronomiereinigung in ${cityName}: In Restaurants und Küchen gelten strenge Hygienevorschriften. AhrGlanz sorgt ${region} für saubere Gastbereiche und hygienische Küchen in ${cityText}.`,
      sectionDescriptionLocalized: `Gastronomie in ${cityName} stellt besondere Anforderungen an die Reinigung ${region}. HACCP-konforme Küchenreinigung und gepflegte Gastbereiche für zufriedene Gäste.`,
      bulletIntroLocalized: `Restaurants und Cafés in ${cityName} vertrauen auf unsere professionelle Gastronomiereinigung ${region}.`,
      closingTextLocalized: `Betreiben Sie ein Restaurant in ${cityName}? Kontaktieren Sie uns für ein Reinigungsangebot nach Ihren Hygienestandards ${region}.`,
      localSEOParagraph: `Für Restaurants, Cafés und Kantinen in ${cityName} bieten wir HACCP-konforme Reinigungslösungen ${region}. Sauberkeit, die schmeckt.`
    },
    bildungseinrichtung: {
      heroDescriptionLocalized: `Schulreinigung in ${cityName}: In Bildungseinrichtungen ist Hygiene besonders wichtig. AhrGlanz sorgt ${region} für saubere Klassenzimmer und hygienische Sanitäranlagen in ${cityText}.`,
      sectionDescriptionLocalized: `Schulen und Bildungseinrichtungen in ${cityName} stellen besondere Anforderungen an die Reinigung ${region}. Regelmäßige Unterhaltsreinigung für konzentriertes Lernen.`,
      bulletIntroLocalized: `Schulen und Bildungsträger in ${cityName} setzen auf unsere zuverlässige Gebäudereinigung ${region}.`,
      closingTextLocalized: `Suchen Sie eine Reinigung für Ihre Bildungseinrichtung in ${cityName}? Wir erstellen ein individuelles Angebot ${region}.`,
      localSEOParagraph: `Für Schulen, Volkshochschulen und Bildungszentren in ${cityName} bieten wir professionelle Reinigungslösungen ${region}. Sauberkeit für besseres Lernen.`
    },
    gesundheit: {
      heroDescriptionLocalized: `Reinigung für Gesundheitseinrichtungen in ${cityName}: Kliniken und Pflegeeinrichtungen erfordern höchste Hygienestandards. AhrGlanz sorgt ${region} für keimfreie Räumlichkeiten in ${cityText}.`,
      sectionDescriptionLocalized: `Gesundheitseinrichtungen in ${cityName} stellen höchste Anforderungen an Hygiene und Reinigung ${region}. Unsere Reinigung erfüllt alle medizinischen Standards.`,
      bulletIntroLocalized: `Kliniken und Pflegeheime in ${cityName} vertrauen auf unsere hygienische Reinigung ${region}.`,
      closingTextLocalized: `Benötigen Sie eine Reinigung für Ihre Gesundheitseinrichtung in ${cityName}? Wir beraten Sie gerne ${region}.`,
      localSEOParagraph: `Für Krankenhäuser, Pflegeheime und Therapiezentren in ${cityName} bieten wir spezialisierte Reinigung nach medizinischen Standards ${region}.`
    }
  };
  
  // Fallback für nicht definierte Objekte
  const defaultContent: ObjektSEOContent = {
    heroDescriptionLocalized: `Gebäudereinigung für ${objectName} in ${cityName}: AhrGlanz ist Ihr zuverlässiger Partner für professionelle Reinigung ${region}. Wir sorgen für saubere und gepflegte Räumlichkeiten in ${cityText}.`,
    sectionDescriptionLocalized: `${objectName} in ${cityName} profitieren von unserer individuellen Reinigungslösung ${region}. Abgestimmt auf Ihre Anforderungen und Nutzung.`,
    bulletIntroLocalized: `Betreiber von ${objectName} in ${cityName} vertrauen auf unsere zuverlässige Gebäudereinigung ${region}.`,
    closingTextLocalized: `Kontaktieren Sie uns für die Reinigung Ihres Objekts in ${cityName}. Wir erstellen ein kostenloses Angebot ${region}.`,
    localSEOParagraph: `Als lokaler Reinigungspartner in ${cityName} und ${region} sind wir schnell vor Ort und flexibel in der Terminplanung.`
  };
  
  return objectTexts[objectSlug] || defaultContent;
}
