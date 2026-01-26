import { useParams, Link, useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Phone, Building2, Clock, Shield, Sparkles, Users } from "lucide-react";
import { useSEO, getLeistungSEO } from '@/hooks/useSEO';
import { 
  Droplets, 
  Construction, 
  Sun, 
  Gem,
  Footprints,
  Brush
} from "lucide-react";

// Import images
import unterhaltsreinigungImg from "@/assets/leistung-unterhaltsreinigung.webp";
import grundreinigungImg from "@/assets/leistung-grundreinigung.webp";
import glasreinigungImg from "@/assets/leistung-glasreinigung.jpg";
import desinfektionImg from "@/assets/leistung-desinfektion.webp";
import baureinigungImg from "@/assets/leistung-baureinigung.webp";
import photovoltaikImg from "@/assets/leistung-photovoltaik.webp";
import steinreinigungImg from "@/assets/leistung-steinreinigung.webp";
import treppenhausImg from "@/assets/leistung-treppenhaus.webp";

interface FeatureBox {
  title: string;
  description: string;
  icon: 'building' | 'users' | 'shield' | 'clock' | 'check' | 'sparkles';
}

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface LeistungData {
  title: string;
  heroTitle: string;
  subtitle: string;
  heroDescription: string;
  sectionTitle: string;
  sectionDescription: string;
  icon: React.ElementType;
  image: string;
  featureBoxes: FeatureBox[];
  bulletPoints: string[];
  bulletTitle: string;
  bulletSubtitle: string;
  process: ProcessStep[];
  targetObjects: string[];
  closingQuestion: string;
  closingText: string;
}

const leistungenData: Record<string, LeistungData> = {
  unterhaltsreinigung: {
    title: "Unterhaltsreinigung",
    heroTitle: "Unterhaltsreinigung",
    subtitle: "Dauerhaft saubere & gepflegte Objekte",
    heroDescription: "Unsere Unterhaltsreinigung sorgt für dauerhaft saubere und hygienische Räumlichkeiten. Mit festen Reinigungsplänen und geschultem Personal gewährleisten wir gleichbleibend hohe Qualität – ob täglich, wöchentlich oder nach individuellem Bedarf. Mit unserer Unterhaltsreinigung sorgt AhrGlanz Gebäudereinigung für zuverlässige Sauberkeit, feste Abläufe und gepflegte Räume – individuell abgestimmt auf Ihr Objekt.",
    sectionTitle: "Unterhaltsreinigung von Anfang bis Ende",
    sectionDescription: "Eine regelmäßige Unterhaltsreinigung sorgt für Sauberkeit, Hygiene und den Werterhalt Ihrer Immobilie. Wir erstellen individuelle Reinigungspläne und setzen diese zuverlässig und planbar um – abgestimmt auf Ihr Objekt und Ihren Bedarf.",
    icon: Sparkles,
    image: unterhaltsreinigungImg,
    featureBoxes: [
      { title: "Regelmäßige Reinigung", description: "Laufende Unterhaltsreinigung in festen Intervallen – täglich, wöchentlich oder individuell vereinbart.", icon: "clock" },
      { title: "Büros, Kindergärten & Gewerbeobjekte", description: "Reinigung von Büroräumen, Praxen, Verkaufsflächen und Gewerbeeinheiten für ein gepflegtes Arbeitsumfeld.", icon: "building" },
      { title: "Sanitär & Hygiene", description: "Gründliche Reinigung und Pflege von Sanitäranlagen, Küchen und Gemeinschaftsbereichen.", icon: "shield" },
      { title: "Böden & Oberflächen", description: "Reinigung von Bodenbelägen, Arbeitsflächen, Möbeln und Kontaktflächen – materialschonend und gründlich.", icon: "sparkles" },
      { title: "Individuelle Reinigungspläne", description: "Reinigungsumfang und -zeiten werden exakt auf Nutzung, Objektgröße und Anforderungen abgestimmt.", icon: "check" },
      { title: "Zuverlässig & Planbar", description: "Feste Ansprechpartner, geschultes Personal und gleichbleibend hohe Reinigungsqualität.", icon: "users" }
    ],
    bulletTitle: "Unterhaltsreinigung aus einer Hand",
    bulletSubtitle: "Sauberkeit, die den Unterschied macht",
    bulletPoints: [
      "Regelmäßige & flexible Reinigung",
      "Für Gewerbe, Wohnanlagen & öffentliche Einrichtungen",
      "Materialschonende Verfahren",
      "Feste Abläufe & feste Ansprechpartner"
    ],
    process: [
      { step: 1, title: "Kostenlose Besichtigung", description: "Wir besichtigen Ihr Objekt und erfassen Flächen, Nutzung und Reinigungsbedarf." },
      { step: 2, title: "Individuelles Angebot", description: "Sie erhalten ein transparentes Angebot inklusive Reinigungsplan und Leistungsumfang." },
      { step: 3, title: "Regelmäßige Durchführung", description: "Die Unterhaltsreinigung erfolgt zuverlässig nach Plan und wird regelmäßig kontrolliert." }
    ],
    targetObjects: ["Bürogebäude", "Wohnanlage", "Kita", "Praxis", "Geschäft"],
    closingQuestion: "Noch Fragen zur Unterhaltsreinigung?",
    closingText: "Nach einer kostenlosen Besichtigung erstellen wir ein individuelles Angebot für die Unterhaltsreinigung Ihres Objekts. Zuverlässig, termingerecht und nach festen Qualitätsstandards – im Raum Bad Neuenahr-Ahrweiler, Bonn & Umgebung."
  },
  grundreinigung: {
    title: "Grundreinigung",
    heroTitle: "Grundreinigung",
    subtitle: "Professionelle Intensivreinigung",
    heroDescription: "Die Grundreinigung ist die intensive Lösung für stark verschmutzte Flächen. Wir entfernen hartnäckigen Schmutz, alte Pflegefilme und Ablagerungen – und bringen Ihre Räume wieder zum Strahlen. Unsere Grundreinigung geht deutlich über die Unterhaltsreinigung hinaus – ideal vor Neubezug, nach Renovierung oder zur Werterhaltung Ihrer Immobilie.",
    sectionTitle: "Grundreinigung von Anfang bis Ende",
    sectionDescription: "Unsere Grundreinigung geht deutlich über die Unterhaltsreinigung hinaus. Wir reinigen intensiv, systematisch und bis ins Detail – ideal nach Bauarbeiten, vor Neubezug oder zur Werterhaltung Ihrer Immobilie.",
    icon: Building2,
    image: grundreinigungImg,
    featureBoxes: [
      { title: "Intensive Reinigung", description: "Gründliche Reinigung von Böden, Oberflächen und schwer zugänglichen Bereichen zur Entfernung hartnäckiger Verschmutzungen.", icon: "sparkles" },
      { title: "Hartnäckige Rückstände", description: "Entfernung von Kalk, Fett, Schmutzschichten, Ablagerungen und Pflegefilmen – effektiv und materialschonend.", icon: "shield" },
      { title: "Böden & Beläge", description: "Grundreinigung von Fliesen, PVC, Linoleum, Naturstein, Teppichen und anderen Bodenbelägen.", icon: "building" },
      { title: "Sanitär & Küche", description: "Tiefenreinigung von Sanitärbereichen, Küchen, Armaturen und Nasszellen für hygienische Sauberkeit.", icon: "users" },
      { title: "Nach Bau & Umzug", description: "Ideal nach Renovierungen, Bauarbeiten oder vor Neubezug – für einen sauberen Neustart.", icon: "clock" },
      { title: "Werterhalt & Pflege", description: "Regelmäßige Grundreinigung schützt Materialien, verlängert Lebensdauer und sorgt für ein gepflegtes Erscheinungsbild.", icon: "check" }
    ],
    bulletTitle: "Grundreinigung aus einer Hand",
    bulletSubtitle: "Gründliche Sauberkeit bis ins Detail",
    bulletPoints: [
      "Intensive Reinigung aller relevanten Flächen",
      "Materialschonende Verfahren",
      "Für Gewerbe, Privat & öffentliche Einrichtungen",
      "Geschultes Fachpersonal & klare Abläufe"
    ],
    process: [
      { step: 1, title: "Kostenlose Besichtigung", description: "Wir prüfen Verschmutzungsgrad, Materialien und Reinigungsaufwand direkt vor Ort." },
      { step: 2, title: "Individuelles Angebot", description: "Sie erhalten ein transparentes, objektbezogenes Angebot mit klar definierten Leistungen." },
      { step: 3, title: "Zuverlässige Durchführung", description: "Die Grundreinigung erfolgt termingerecht, sorgfältig und nach festen Qualitätsstandards." }
    ],
    targetObjects: ["Bürogebäude", "Wohnanlage", "Praxis", "Industrie"],
    closingQuestion: "Noch Fragen zur Grundreinigung?",
    closingText: "Nach einer kostenlosen Besichtigung erstellen wir ein individuelles Angebot für die Grundreinigung Ihres Objekts. Zuverlässig, termingerecht und nach festen Qualitätsstandards – im Raum Bad Neuenahr-Ahrweiler, Bonn & Umgebung."
  },
  glasreinigung: {
    title: "Glasreinigung",
    heroTitle: "Glasreinigung",
    subtitle: "Klare Sicht & gepflegter Eindruck",
    heroDescription: "Saubere Glasflächen sorgen für Licht, Transparenz und einen positiven Gesamteindruck. Unsere Glasreinigung umfasst alle relevanten Glas- und Rahmenflächen – fachgerecht, sicher und abgestimmt auf Ihr Objekt. Wir garantieren streifenfreie Ergebnisse – von einzelnen Fenstern bis hin zu großen Glasfassaden.",
    sectionTitle: "Glasreinigung von Anfang bis Ende",
    sectionDescription: "Saubere Glasflächen sorgen für Licht, Transparenz und einen positiven Gesamteindruck. Unsere Glasreinigung umfasst alle relevanten Glas- und Rahmenflächen – fachgerecht, sicher und abgestimmt auf Ihr Objekt.",
    icon: Droplets,
    image: glasreinigungImg,
    featureBoxes: [
      { title: "Fenster & Rahmen", description: "Streifenfreie Reinigung von Fenstern inklusive Rahmen, Falzen und Fensterbänken.", icon: "sparkles" },
      { title: "Glasfassaden & Fronten", description: "Reinigung von Glasfassaden, Eingangsfronten und großflächigen Verglasungen.", icon: "building" },
      { title: "Innen- & Außenreinigung", description: "Glasreinigung innen und außen – auch bei schwer zugänglichen Flächen.", icon: "shield" },
      { title: "Gewerbe & Privatobjekte", description: "Geeignet für Büros, Praxen, Wohnanlagen, Gewerbeobjekte und Privathaushalte.", icon: "users" },
      { title: "Materialschonende Reinigung", description: "Einsatz geeigneter Reinigungsmittel und Techniken für Glas, Rahmen und Dichtungen.", icon: "check" },
      { title: "Klare Ergebnisse & Werterhalt", description: "Regelmäßige Glasreinigung schützt Oberflächen und sorgt dauerhaft für klare Sicht.", icon: "clock" }
    ],
    bulletTitle: "Glasreinigung aus einer Hand",
    bulletSubtitle: "Streifenfreie Sauberkeit für klare Sicht",
    bulletPoints: [
      "Streifenfreie Glasreinigung",
      "Für kleine & große Glasflächen",
      "Materialschonend & gründlich",
      "Zuverlässig & termingerecht"
    ],
    process: [
      { step: 1, title: "Kostenlose Besichtigung", description: "Wir begutachten die Glasflächen, Zugänglichkeit und den Reinigungsumfang vor Ort." },
      { step: 2, title: "Individuelles Angebot", description: "Sie erhalten ein transparentes Angebot abgestimmt auf Objektgröße und Aufwand." },
      { step: 3, title: "Fachgerechte Reinigung", description: "Die Glasreinigung erfolgt zuverlässig, gründlich und nach festen Qualitätsstandards." }
    ],
    targetObjects: ["Bürogebäude", "Wohnanlage", "Geschäft", "Hotel"],
    closingQuestion: "Noch Fragen zur Glasreinigung?",
    closingText: "Nach einer kostenlosen Besichtigung erstellen wir ein individuelles Angebot für die Glasreinigung Ihres Objekts. Zuverlässig, termingerecht und nach festen Qualitätsstandards – im Raum Bad Neuenahr-Ahrweiler, Bonn & Umgebung."
  },
  baureinigung: {
    title: "Baureinigung",
    heroTitle: "Baureinigung",
    subtitle: "Neubau, Umbau & Renovierung",
    heroDescription: "Ob Neubau, Umbau oder Renovierung – Bauarbeiten hinterlassen Staub, Schmutz und Rückstände. Unsere professionelle Baureinigung begleitet Sie von der Grobreinigung während der Bauphase bis zur gründlichen Endreinigung vor der Übergabe. Wir kümmern uns zuverlässig um saubere Baustellen und eine termingerechte Abnahme.",
    sectionTitle: "Baureinigung von Anfang bis Ende",
    sectionDescription: "Von der Grob- über die Zwischen- bis zur Endreinigung kümmern wir uns zuverlässig um saubere Baustellen und eine termingerechte Übergabe. Für private, gewerbliche und öffentliche Bauherren.",
    icon: Construction,
    image: baureinigungImg,
    featureBoxes: [
      { title: "Grobreinigung", description: "Entfernung von Bauschutt, grobem Schmutz und Restmaterialien während oder nach der Bauphase für Ordnung und Sicherheit.", icon: "building" },
      { title: "Zwischenreinigung", description: "Regelmäßige Reinigung während der Bauarbeiten, um Staub, Verschmutzungen und Materialreste kontrolliert zu entfernen.", icon: "clock" },
      { title: "Endreinigung", description: "Gründliche Feinreinigung vor Übergabe oder Abnahme – für saubere, bezugsfertige Räume ohne Baurückstände.", icon: "sparkles" },
      { title: "Oberflächen & Details", description: "Reinigung von Böden, Türen, Fenstern, Sanitärbereichen und empfindlichen Oberflächen – materialschonend und gründlich.", icon: "shield" },
      { title: "Neubau & Renovierung", description: "Geeignet für Neubauten, Umbauten und Renovierungsarbeiten im privaten, gewerblichen und öffentlichen Bereich.", icon: "users" },
      { title: "Zuverlässig & termintreu", description: "Feste Abläufe, geschultes Personal und klare Qualitätsstandards sorgen für eine pünktliche und saubere Übergabe.", icon: "check" }
    ],
    bulletTitle: "Baureinigung aus einer Hand",
    bulletSubtitle: "Von der Baustelle bis zur Übergabe",
    bulletPoints: [
      "Grob-, Zwischen- und Endreinigung aus einer Hand",
      "Reinigung für Neubau, Umbau und Renovierung",
      "Termintreue Ausführung nach Baufortschritt",
      "Feste Ansprechpartner & klare Qualitätsstandards"
    ],
    process: [
      { step: 1, title: "Kostenlose Besichtigung", description: "Wir besichtigen Ihr Bauobjekt vor Ort, klären den Reinigungsbedarf und berücksichtigen Bauphase, Zeitplan und Anforderungen." },
      { step: 2, title: "Individuelles Angebot", description: "Auf Basis der Besichtigung erstellen wir ein transparentes, objektspezifisches Angebot mit klar definierten Leistungen." },
      { step: 3, title: "Zuverlässige Durchführung", description: "Die Reinigung erfolgt termingerecht nach abgestimmtem Plan und wird abschließend sorgfältig kontrolliert." }
    ],
    targetObjects: ["Wohnanlage", "Bürogebäude", "Industrie"],
    closingQuestion: "Noch Fragen zur Baureinigung?",
    closingText: "Nach einer kostenlosen Besichtigung erstellen wir ein individuelles Angebot für die Baureinigung Ihres Objekts. Zuverlässig, termingerecht und nach festen Qualitätsstandards – im Raum Bad Neuenahr-Ahrweiler, Bonn & Umgebung."
  },
  desinfektionsreinigung: {
    title: "Desinfektionsreinigung",
    heroTitle: "Desinfektionsreinigung",
    subtitle: "Hygiene für sensible Bereiche",
    heroDescription: "Wir reduzieren Keime, Bakterien und Viren zuverlässig und sorgen für hygienisch sichere Räume nach geltenden Hygiene- und Qualitätsstandards. Unsere Desinfektionsreinigung schützt Mitarbeiter, Kunden und Besucher – in Arztpraxen, Büros, Schulen, Pflegeeinrichtungen und überall dort, wo erhöhte Hygieneanforderungen gelten.",
    sectionTitle: "Desinfektionsreinigung von Anfang bis Ende",
    sectionDescription: "In sensiblen Bereichen wie Praxen, Pflegeeinrichtungen, Schulen und Büros ist hygienische Sicherheit entscheidend. Unsere Desinfektionsreinigung reduziert Keime, Bakterien und Viren zuverlässig – mit geprüften Desinfektionsmitteln und nach geltenden Hygienevorgaben.",
    icon: Shield,
    image: desinfektionImg,
    featureBoxes: [
      { title: "Flächendesinfektion", description: "Gründliche Desinfektion von Kontaktflächen, Böden und Sanitärbereichen.", icon: "shield" },
      { title: "Hygienische Sicherheit", description: "Einsatz geprüfter Desinfektionsmittel (VAH) gegen Bakterien, Viren und Keime.", icon: "check" },
      { title: "Sensible Bereiche", description: "Geeignet für Praxen, Büros, Schulen, Kitas und Pflegeeinrichtungen.", icon: "users" },
      { title: "Oberflächen & Materialien", description: "Materialschonende Desinfektion ohne schädliche Rückstände.", icon: "sparkles" },
      { title: "Regelmäßig oder einmalig", description: "Desinfektionsreinigung individuell auf Ihr Objekt und Ihre Anforderungen abgestimmt.", icon: "clock" },
      { title: "Diskrete Durchführung", description: "Reinigung nach klar definierten Qualitätsstandards – auf Wunsch mit Dokumentation.", icon: "building" }
    ],
    bulletTitle: "Desinfektionsreinigung aus einer Hand",
    bulletSubtitle: "Hygienische Sicherheit für Ihr Objekt",
    bulletPoints: [
      "Gründliche Desinfektion von Kontaktflächen",
      "Geprüfte Desinfektionsmittel nach VAH-Liste",
      "Für Praxen, Schulen, Büros & Pflegeeinrichtungen",
      "Dokumentation auf Wunsch"
    ],
    process: [
      { step: 1, title: "Kostenlose Besichtigung", description: "Wir analysieren die zu desinfizierenden Bereiche und klären die Hygienestandards vor Ort." },
      { step: 2, title: "Individuelles Angebot", description: "Sie erhalten ein transparentes, objektspezifisches Angebot mit klar definierten Leistungen." },
      { step: 3, title: "Zuverlässige Durchführung", description: "Die Desinfektion erfolgt termingerecht nach Plan – auf Wunsch mit Dokumentation." }
    ],
    targetObjects: ["Praxis", "Kita", "Sportclub", "Bürogebäude"],
    closingQuestion: "Noch Fragen zur Desinfektionsreinigung?",
    closingText: "Nach einer kostenlosen Besichtigung erstellen wir ein individuelles Angebot für die Desinfektionsreinigung Ihres Objekts. Zuverlässig, termingerecht und nach festen Qualitätsstandards – im Raum Bad Neuenahr-Ahrweiler, Bonn & Umgebung."
  },
  photovoltaikreinigung: {
    title: "Photovoltaikreinigung",
    heroTitle: "Photovoltaikreinigung",
    subtitle: "Maximale Leistung & Werterhalt",
    heroDescription: "Verschmutzte Solarmodule verlieren messbar an Leistung. Unsere professionelle Photovoltaikreinigung entfernt Staub, Pollen, Vogelkot und Umweltablagerungen zuverlässig – für maximale Energieausbeute und sichere Anlagen. Wir reinigen gründlich, materialschonend und ohne Chemie.",
    sectionTitle: "Photovoltaikreinigung von Anfang bis Ende",
    sectionDescription: "Verschmutzte Solarmodule verlieren messbar an Leistung. Unsere professionelle Photovoltaikreinigung entfernt Staub, Pollen, Vogelkot und Umweltablagerungen zuverlässig – für maximale Energieausbeute und sichere Anlagen.",
    icon: Sun,
    image: photovoltaikImg,
    featureBoxes: [
      { title: "Mehr Leistung & Ertrag", description: "Saubere Solarmodule sorgen für eine höhere Lichtaufnahme und verbessern den Wirkungsgrad Ihrer Photovoltaikanlage.", icon: "sparkles" },
      { title: "Schonende Reinigung", description: "Reinigung mit entmineralisiertem Wasser und weichen Bürsten – ohne Chemie und ohne Beschädigung der Module.", icon: "shield" },
      { title: "Hartnäckige Verschmutzungen", description: "Entfernung von Staub, Pollen, Moos, Vogelkot und Umweltablagerungen auch an schwer zugänglichen Stellen.", icon: "building" },
      { title: "Für alle Anlagen", description: "Geeignet für private, gewerbliche und landwirtschaftliche Photovoltaikanlagen sowie Solarparks.", icon: "users" },
      { title: "Sicher & Fachgerecht", description: "Geschultes Personal, sichere Arbeitsabläufe und professionelle Ausrüstung sorgen für eine fachgerechte Durchführung.", icon: "check" },
      { title: "Langfristiger Werterhalt", description: "Regelmäßige Photovoltaikreinigung schützt Ihre Anlage und verlängert deren Lebensdauer nachhaltig.", icon: "clock" }
    ],
    bulletTitle: "Photovoltaikreinigung aus einer Hand",
    bulletSubtitle: "Saubere Module für maximale Energie",
    bulletPoints: [
      "Chemiefreie Reinigung",
      "Material- & umweltschonend",
      "Für Dach- & Freiflächenanlagen",
      "Zuverlässig & termingerecht"
    ],
    process: [
      { step: 1, title: "Kostenlose Besichtigung", description: "Wir prüfen Ihre Photovoltaikanlage, Zugänglichkeit und Verschmutzungsgrad vor Ort." },
      { step: 2, title: "Individuelles Angebot", description: "Sie erhalten ein transparentes Angebot passend zur Anlagengröße und Reinigungsanforderung." },
      { step: 3, title: "Zuverlässige Durchführung", description: "Die Reinigung erfolgt sicher, gründlich und nach festen Qualitätsstandards." }
    ],
    targetObjects: ["Wohnanlage", "Industrie"],
    closingQuestion: "Noch Fragen zur Photovoltaikreinigung?",
    closingText: "Nach einer kostenlosen Besichtigung erstellen wir ein individuelles Angebot für die Reinigung Ihrer Photovoltaikanlage. Zuverlässig, termingerecht und nach festen Qualitätsstandards – im Raum Bad Neuenahr-Ahrweiler, Bonn & Umgebung."
  },
  steinreinigung: {
    title: "Steinreinigung",
    heroTitle: "Steinreinigung",
    subtitle: "Außenflächen, Wege & Terrassen",
    heroDescription: "Witterung, Feuchtigkeit und Umweltbelastungen setzen Steinflächen sichtbar zu. Unsere professionelle Steinreinigung sorgt für gepflegte Außenbereiche, sichere Begehbarkeit und eine deutliche optische Aufwertung Ihrer Flächen – für Terrassen, Einfahrten, Gehwege und Fassaden.",
    sectionTitle: "Steinreinigung von Anfang bis Ende",
    sectionDescription: "Witterung, Feuchtigkeit und Umweltbelastungen setzen Steinflächen sichtbar zu. Unsere professionelle Steinreinigung sorgt für gepflegte Außenbereiche, sichere Begehbarkeit und eine deutliche optische Aufwertung Ihrer Flächen.",
    icon: Gem,
    image: steinreinigungImg,
    featureBoxes: [
      { title: "Tiefenreinigung", description: "Entfernung von Moos, Algen, Flechten, Schmutz und Ablagerungen bis in die Poren des Steins.", icon: "sparkles" },
      { title: "Materialschonend", description: "Schonende Reinigungsverfahren abgestimmt auf Steinart, Oberfläche und Zustand – ohne Schäden.", icon: "shield" },
      { title: "Rutschhemmung", description: "Saubere Steinflächen reduzieren Rutschgefahr auf Wegen, Einfahrten und Terrassen.", icon: "check" },
      { title: "Für alle Steinarten", description: "Geeignet für Betonstein, Naturstein, Pflastersteine, Feinsteinzeug und Klinker.", icon: "building" },
      { title: "Außenflächen & Zufahrten", description: "Reinigung von Terrassen, Einfahrten, Gehwegen, Höfen, Treppen und Mauern.", icon: "users" },
      { title: "Werterhalt", description: "Regelmäßige Steinreinigung schützt vor frühzeitiger Alterung und erhält die Substanz Ihrer Flächen.", icon: "clock" }
    ],
    bulletTitle: "Steinreinigung aus einer Hand",
    bulletSubtitle: "Saubere Außenflächen mit neuer Optik",
    bulletPoints: [
      "Moos-, Algen- & Schmutzentfernung",
      "Für private & gewerbliche Objekte",
      "Umwelt- & materialschonend",
      "Saubere Ergebnisse mit System"
    ],
    process: [
      { step: 1, title: "Kostenlose Besichtigung", description: "Wir begutachten Ihre Steinflächen, prüfen Material, Verschmutzungsgrad und Fläche." },
      { step: 2, title: "Individuelles Angebot", description: "Sie erhalten ein transparentes, faires Angebot abgestimmt auf Aufwand und Fläche." },
      { step: 3, title: "Zuverlässige Durchführung", description: "Die Steinreinigung erfolgt gründlich, sicher und nach festen Qualitätsstandards." }
    ],
    targetObjects: ["Wohnanlage", "Geschäft", "Hotel"],
    closingQuestion: "Noch Fragen zur Steinreinigung?",
    closingText: "Nach einer kostenlosen Besichtigung erstellen wir ein individuelles Angebot für die Steinreinigung Ihrer Außenflächen. Zuverlässig, termingerecht und nach festen Qualitätsstandards – im Raum Bad Neuenahr-Ahrweiler, Bonn & Umgebung."
  },
  treppenhausreinigung: {
    title: "Treppenhausreinigung",
    heroTitle: "Treppenhausreinigung",
    subtitle: "Die Visitenkarte Ihrer Immobilie",
    heroDescription: "Ein sauberes Treppenhaus ist die Visitenkarte jeder Immobilie. Mit unserer professionellen Treppenhausreinigung schaffen wir Ordnung, Hygiene und einen positiven ersten Eindruck – zuverlässig und planbar für Hausverwaltungen, Eigentümer und Bewohner.",
    sectionTitle: "Treppenhausreinigung von Anfang bis Ende",
    sectionDescription: "Ein sauberes Treppenhaus ist die Visitenkarte jeder Immobilie. Mit unserer professionellen Treppenhausreinigung schaffen wir Ordnung, Hygiene und einen positiven ersten Eindruck – zuverlässig und planbar.",
    icon: Footprints,
    image: treppenhausImg,
    featureBoxes: [
      { title: "Regelmäßige Treppenhausreinigung", description: "Laufende Reinigung nach festem Reinigungsplan – wöchentlich, zweiwöchentlich oder individuell vereinbart.", icon: "clock" },
      { title: "Böden & Stufen", description: "Gründliche Reinigung von Treppenstufen, Podesten und Bodenflächen – passend zum Belag.", icon: "building" },
      { title: "Handläufe & Geländer", description: "Reinigung stark beanspruchter Kontaktflächen für mehr Hygiene und Sicherheit.", icon: "shield" },
      { title: "Eingangs- & Gemeinschaftsbereiche", description: "Saubere Hauseingänge, Flure, Kellerzugänge und Aufzüge für einen gepflegten Gesamteindruck.", icon: "users" },
      { title: "Wohn- & Gewerbeobjekte", description: "Geeignet für Mehrfamilienhäuser, Wohnanlagen, Bürogebäude und öffentliche Einrichtungen.", icon: "sparkles" },
      { title: "Zuverlässig & Planbar", description: "Feste Ansprechpartner, geschultes Personal und gleichbleibende Reinigungsqualität.", icon: "check" }
    ],
    bulletTitle: "Treppenhausreinigung aus einer Hand",
    bulletSubtitle: "Sauberkeit, die man sieht und spürt",
    bulletPoints: [
      "Regelmäßige Reinigung nach Plan",
      "Gründlich & materialschonend",
      "Feste Qualitätsstandards",
      "Ideal für Hausverwaltungen & Eigentümer"
    ],
    process: [
      { step: 1, title: "Kostenlose Besichtigung", description: "Wir besichtigen das Objekt, erfassen Flächen, Reinigungsumfang und Turnus." },
      { step: 2, title: "Individuelles Angebot", description: "Sie erhalten ein transparentes Angebot mit klar definierten Leistungen." },
      { step: 3, title: "Zuverlässige Durchführung", description: "Die Treppenhausreinigung erfolgt regelmäßig, termingerecht und kontrolliert." }
    ],
    targetObjects: ["Wohnanlage", "Bürogebäude"],
    closingQuestion: "Noch Fragen zur Treppenhausreinigung?",
    closingText: "Nach einer kostenlosen Besichtigung erstellen wir ein individuelles Angebot für die Treppenhausreinigung Ihres Objekts. Zuverlässig, termingerecht und nach festen Qualitätsstandards – im Raum Bad Neuenahr-Ahrweiler, Bonn & Umgebung."
  },
  sonderreinigung: {
    title: "Sonderreinigung",
    heroTitle: "Sonderreinigung",
    subtitle: "Individuelle Reinigungslösungen",
    heroDescription: "Manche Situationen erfordern spezielle Lösungen. Ob Entrümpelung, außergewöhnliche Verschmutzungen oder spezielle Anforderungen – wir finden die passende Lösung für Ihre individuellen Reinigungsanforderungen.",
    sectionTitle: "Sonderreinigung für besondere Anforderungen",
    sectionDescription: "Nicht jede Reinigungssituation passt in ein Standardkonzept. Unsere Sonderreinigung bietet maßgeschneiderte Lösungen für außergewöhnliche Anforderungen – professionell, diskret und zuverlässig.",
    icon: Brush,
    image: unterhaltsreinigungImg,
    featureBoxes: [
      { title: "Entrümpelung mit Reinigung", description: "Kombinierte Entrümpelung und anschließende Reinigung für einen sauberen Neustart.", icon: "building" },
      { title: "Graffitientfernung", description: "Professionelle Entfernung von Graffiti und Schmierereien von verschiedenen Oberflächen.", icon: "sparkles" },
      { title: "Geruchsneutralisierung", description: "Beseitigung hartnäckiger Gerüche aus Räumen und Materialien.", icon: "shield" },
      { title: "Spezielle Verschmutzungen", description: "Reinigung bei außergewöhnlichen Verschmutzungen, die Spezialwissen erfordern.", icon: "users" },
      { title: "Schnelle Verfügbarkeit", description: "Kurzfristige Einsätze bei dringenden Reinigungsanforderungen möglich.", icon: "clock" },
      { title: "Diskrete Abwicklung", description: "Vertrauliche und diskrete Durchführung aller Sonderreinigungen.", icon: "check" }
    ],
    bulletTitle: "Sonderreinigung aus einer Hand",
    bulletSubtitle: "Individuelle Lösungen für besondere Fälle",
    bulletPoints: [
      "Maßgeschneiderte Reinigungslösungen",
      "Diskrete und vertrauliche Abwicklung",
      "Schnelle Verfügbarkeit",
      "Fachgerechte Ausführung"
    ],
    process: [
      { step: 1, title: "Anfrage", description: "Schildern Sie uns Ihre Situation und Anforderungen." },
      { step: 2, title: "Beratung", description: "Wir entwickeln eine individuelle Lösung für Ihren Fall." },
      { step: 3, title: "Umsetzung", description: "Professionelle Durchführung nach vereinbartem Plan." }
    ],
    targetObjects: ["Wohnanlage", "Bürogebäude", "Praxis"],
    closingQuestion: "Noch Fragen zur Sonderreinigung?",
    closingText: "Kontaktieren Sie uns für eine individuelle Beratung. Wir finden die passende Lösung für Ihre Reinigungsanforderung – im Raum Bad Neuenahr-Ahrweiler, Bonn & Umgebung."
  },
  tatortreinigung: {
    title: "Tatortreinigung",
    heroTitle: "Tatortreinigung",
    subtitle: "Diskrete Spezialreinigung",
    heroDescription: "Nach Todesfällen, Unfällen oder anderen traumatischen Ereignissen ist eine professionelle Reinigung unerlässlich. Wir bieten diskrete, einfühlsame und fachgerechte Tatortreinigung – schnell verfügbar und absolut vertraulich.",
    sectionTitle: "Professionelle Tatortreinigung",
    sectionDescription: "Nach traumatischen Ereignissen übernehmen wir die fachgerechte Reinigung und Wiederherstellung der betroffenen Räumlichkeiten. Diskret, einfühlsam und professionell.",
    icon: Brush,
    image: desinfektionImg,
    featureBoxes: [
      { title: "Reinigung nach Todesfällen", description: "Professionelle Reinigung nach unbeaufsichtigten Todesfällen oder Unfällen.", icon: "shield" },
      { title: "Biologische Spuren", description: "Fachgerechte Beseitigung biologischer Spuren und Kontaminationen.", icon: "sparkles" },
      { title: "Geruchsneutralisierung", description: "Vollständige Beseitigung von Gerüchen aus betroffenen Räumen.", icon: "building" },
      { title: "Desinfektion", description: "Gründliche Desinfektion aller Oberflächen nach Hygienestandards.", icon: "check" },
      { title: "Entsorgung", description: "Fachgerechte Entsorgung kontaminierter Materialien.", icon: "users" },
      { title: "Wiederherstellung", description: "Wiederherstellung der Bewohnbarkeit und Nutzbarkeit der Räume.", icon: "clock" }
    ],
    bulletTitle: "Tatortreinigung aus einer Hand",
    bulletSubtitle: "Diskret, professionell und einfühlsam",
    bulletPoints: [
      "Absolute Diskretion garantiert",
      "24/7 Notfall-Erreichbarkeit",
      "Geschultes Fachpersonal",
      "Zusammenarbeit mit Behörden"
    ],
    process: [
      { step: 1, title: "Erstkontakt", description: "Vertrauliche Anfrage – wir sind 24/7 erreichbar." },
      { step: 2, title: "Begutachtung", description: "Vor-Ort-Analyse nach behördlicher Freigabe." },
      { step: 3, title: "Spezialreinigung", description: "Professionelle Durchführung mit vollständiger Dokumentation." }
    ],
    targetObjects: ["Wohnanlage", "Praxis"],
    closingQuestion: "Noch Fragen zur Tatortreinigung?",
    closingText: "Wir sind 24/7 erreichbar und behandeln Ihre Anfrage mit absoluter Diskretion. Professionelle Hilfe in schwierigen Situationen – im Raum Bad Neuenahr-Ahrweiler, Bonn & Umgebung."
  }
};

const getIcon = (iconType: string) => {
  switch (iconType) {
    case 'building': return Building2;
    case 'users': return Users;
    case 'shield': return Shield;
    case 'clock': return Clock;
    case 'sparkles': return Sparkles;
    case 'check': return Check;
    default: return Check;
  }
};

const LeistungDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const leistung = slug ? leistungenData[slug] : null;
  
  // SEO for the current service
  useSEO(
    leistung 
      ? getLeistungSEO(leistung.title, slug!) 
      : { title: 'Leistung nicht gefunden | AhrGlanz', description: 'Die angeforderte Leistung wurde nicht gefunden.' }
  );

  if (!leistung) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Leistung nicht gefunden</h1>
            <Button onClick={() => navigate('/leistungen')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zu Leistungen
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const IconComponent = leistung.icon;

  const scrollToQuote = () => {
    navigate('/#quote-form');
    setTimeout(() => {
      document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="section-container">
            <Link 
              to="/leistungen" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Alle Leistungen
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div>
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                  {leistung.heroTitle}
                </h1>
                <p className="text-xl text-primary font-semibold mb-6">{leistung.subtitle}</p>
                <p className="text-lg text-muted-foreground mb-8">
                  {leistung.heroDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" onClick={scrollToQuote}>
                    Jetzt kostenlos anfragen
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="tel:+4926413968989">
                      <Phone className="w-4 h-4 mr-2" />
                      02641 396 89 89
                    </a>
                  </Button>
                </div>
              </div>
              
              {/* Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={leistung.image} 
                    alt={leistung.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/20 rounded-full -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Section Title */}
        <section className="py-16 bg-background">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider mb-2 block">alles von ahrglanz</span>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                {leistung.sectionTitle}
              </h2>
              <p className="text-muted-foreground text-lg">
                {leistung.sectionDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Feature Boxes */}
        <section className="pb-20 bg-background">
          <div className="section-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {leistung.featureBoxes.map((feature, index) => {
                const FeatureIcon = getIcon(feature.icon);
                return (
                  <div 
                    key={index}
                    className="bg-card rounded-2xl p-6 shadow-sm border hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <FeatureIcon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-display font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bullet Points Section */}
        <section className="py-20 bg-primary/5">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-medium text-sm uppercase tracking-wider mb-2 block">{leistung.bulletTitle}</span>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
                  {leistung.bulletSubtitle}
                </h2>
                <p className="text-muted-foreground mb-8">
                  Mit geschultem Personal, professionellen Reinigungsmitteln und festen Qualitätsstandards erzielen wir nachhaltige Ergebnisse – zuverlässig und gründlich.
                </p>
                <ul className="space-y-4">
                  {leistung.bulletPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={leistung.image} 
                    alt={leistung.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider mb-2 block">Ablauf der {leistung.title}</span>
              <h2 className="text-2xl md:text-3xl font-display font-bold">
                So einfach funktioniert unsere {leistung.title}
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {leistung.process.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Target Objects Links */}
        <section className="py-16 bg-muted/30">
          <div className="section-container">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-display font-bold">Passende Objekte</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {leistung.targetObjects.map((obj, index) => (
                <Link 
                  key={index}
                  to={`/objekte/${obj.toLowerCase().replace(/\s+/g, '').replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u')}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-full border hover:border-primary hover:text-primary transition-colors"
                >
                  <Building2 className="w-4 h-4" />
                  {obj}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary/5">
          <div className="section-container text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              {leistung.closingQuestion}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {leistung.closingText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={scrollToQuote}>
                Jetzt kostenlos anfragen
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+4926413968989">
                  <Phone className="w-4 h-4 mr-2" />
                  02641 396 89 89
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LeistungDetail;
