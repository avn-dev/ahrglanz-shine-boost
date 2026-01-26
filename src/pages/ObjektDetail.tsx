import { useParams, Link, useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Phone, Sparkles, Building2, Users, Shield, Clock } from "lucide-react";
import { useSEO, getObjektSEO } from '@/hooks/useSEO';

import wohnanlageImg from "@/assets/object-wohnanlage.jpg";
import bueroImg from "@/assets/object-buero.jpg";
import hotelImg from "@/assets/object-hotel.jpg";
import kitaImg from "@/assets/object-kita.jpg";
import praxisImg from "@/assets/object-praxis.jpg";
import sportclubImg from "@/assets/object-sportclub.jpg";
import industrieImg from "@/assets/object-industrie.jpg";
import geschaeftImg from "@/assets/object-geschaeft.jpg";
import gastronomieImg from "@/assets/object-gastronomie.jpg";
import bildungImg from "@/assets/object-bildung.jpg";
import gesundheitImg from "@/assets/object-gesundheit.jpg";

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

interface ObjektData {
  title: string;
  heroTitle: string;
  subtitle: string;
  heroDescription: string;
  sectionTitle: string;
  sectionDescription: string;
  image: string;
  featureBoxes: FeatureBox[];
  bulletPoints: string[];
  bulletTitle: string;
  bulletSubtitle: string;
  process: ProcessStep[];
  services: string[];
  closingQuestion: string;
  closingText: string;
}

const objekteData: Record<string, ObjektData> = {
  wohnanlage: {
    title: "Wohnanlage",
    heroTitle: "Gebäudereinigung für Wohnanlagen",
    subtitle: "Saubere Wohnanlagen für Bewohner & Besucher",
    heroDescription: "Eine gepflegte Wohnanlage trägt maßgeblich zum Wohlbefinden der Bewohner und zum Werterhalt der Immobilie bei. Saubere Treppenhäuser, ordentliche Eingangsbereiche und hygienische Gemeinschaftsflächen sorgen für einen positiven Eindruck und ein angenehmes Wohnumfeld. Mit unserer Gebäudereinigung für Wohnanlagen sorgt AhrGlanz Gebäudereinigung für zuverlässige Sauberkeit, feste Abläufe und gepflegte Wohnbereiche – individuell abgestimmt auf Ihre Wohnanlage.",
    sectionTitle: "Reinigung von Wohnanlagen von Anfang bis Ende",
    sectionDescription: "Wohnanlagen stellen besondere Anforderungen an die Gebäudereinigung. Regelmäßige Unterhaltsreinigung, feste Reinigungsintervalle und ein zuverlässiger Ansprechpartner sind entscheidend für Eigentümer, Hausverwaltungen und Bewohner. Unsere Reinigungskonzepte für Wohnanlagen werden individuell geplant und sorgen für dauerhaft saubere, gepflegte und einladende Gemeinschaftsbereiche.",
    image: wohnanlageImg,
    featureBoxes: [
      { title: "Treppenhäuser & Flure", description: "Gründliche Reinigung von Treppenhäusern, Fluren und Etagen – für saubere und sichere Verkehrswege.", icon: "building" },
      { title: "Eingangs- & Gemeinschaftsbereiche", description: "Reinigung von Eingangsbereichen, Aufzügen und gemeinschaftlich genutzten Flächen für einen gepflegten ersten Eindruck.", icon: "users" },
      { title: "Sanitär- & Nebenbereiche", description: "Sorgfältige Reinigung von gemeinschaftlichen Sanitäranlagen, Kellerräumen und Nebenflächen.", icon: "shield" },
      { title: "Regelmäßige Reinigungsintervalle", description: "Einsatz geeigneter Reinigungsmittel und Methoden – abgestimmt auf Bodenbeläge, Handläufe und Oberflächen.", icon: "clock" },
      { title: "Materialschonende Reinigung", description: "Schonende Pflege aller Oberflächen und Materialien für langfristigen Werterhalt.", icon: "sparkles" },
      { title: "Klare Ergebnisse & Werterhalt", description: "Regelmäßige Unterhaltsreinigung trägt zum langfristigen Werterhalt der Wohnanlage und zur Zufriedenheit der Bewohner bei.", icon: "check" }
    ],
    bulletTitle: "Wohnanlagenreinigung aus einer Hand",
    bulletSubtitle: "Zuverlässige Unterhaltsreinigung für Hausverwaltungen & Eigentümer",
    bulletPoints: [
      "Gründliche Reinigung von Treppenhäusern und Gemeinschaftsflächen",
      "Gepflegte Eingangsbereiche für Bewohner und Besucher",
      "Regelmäßige und planbare Reinigungsintervalle",
      "Materialschonende Reinigung aller Oberflächen"
    ],
    process: [
      { step: 1, title: "Kostenlose Besichtigung", description: "Wir besichtigen Ihre Wohnanlage und erfassen Flächen, Anforderungen und Reinigungsumfang." },
      { step: 2, title: "Individuelles Angebot", description: "Sie erhalten ein transparentes Angebot – abgestimmt auf Größe und Nutzung der Wohnanlage." },
      { step: 3, title: "Fachgerechte Reinigung", description: "Die Reinigung erfolgt zuverlässig, gründlich und nach festen Qualitätsstandards." }
    ],
    services: ["Unterhaltsreinigung", "Treppenhausreinigung", "Glasreinigung", "Grundreinigung"],
    closingQuestion: "Noch Fragen zur Gebäudereinigung für Wohnanlagen?",
    closingText: "Nach einer kostenlosen Besichtigung erstellen wir ein individuelles Angebot für die Reinigung Ihrer Wohnanlage. Zuverlässig, termingerecht und nach festen Qualitätsstandards – im Raum Bad Neuenahr-Ahrweiler, Bonn & Umgebung."
  },
  buero: {
    title: "Bürogebäude",
    heroTitle: "Gebäudereinigung für Büros",
    subtitle: "Saubere Arbeitsplätze für produktives Arbeiten",
    heroDescription: "Ein sauberes Büro ist die Grundlage für konzentriertes Arbeiten, ein angenehmes Raumklima und einen professionellen Eindruck bei Kunden und Geschäftspartnern. Mit unserer Gebäudereinigung für Büros sorgen wir von AhrGlanz Gebäudereinigung für hygienische, gepflegte Arbeitsumgebungen – zuverlässig, diskret und individuell auf Ihre Büroräume abgestimmt.",
    sectionTitle: "Büroreinigung von Anfang bis Ende",
    sectionDescription: "Jedes Büro stellt unterschiedliche Anforderungen an die Reinigung. Nutzungszeiten, Mitarbeiteranzahl und Raumaufteilung spielen dabei eine wichtige Rolle. Unsere Büroreinigung wird individuell geplant und umfasst alle relevanten Bereiche – von Arbeitsplätzen über Sanitäranlagen bis hin zu Gemeinschaftsflächen. So stellen wir dauerhaft Sauberkeit, Hygiene und Werterhalt sicher.",
    image: bueroImg,
    featureBoxes: [
      { title: "Arbeitsplätze & Büroräume", description: "Gründliche Reinigung von Schreibtischen, Arbeitsflächen und Büroräumen – für eine saubere und angenehme Arbeitsatmosphäre.", icon: "building" },
      { title: "Sanitär- & Hygienebereiche", description: "Sorgfältige Sanitärreinigung von WC-Anlagen, Waschbereichen und Küchenzeilen nach festen Hygienevorgaben.", icon: "shield" },
      { title: "Gemeinschaftsflächen & Kontaktbereiche", description: "Reinigung stark frequentierter Bereiche wie Flure, Treppenhäuser, Eingangsbereiche und Kontaktflächen.", icon: "users" },
      { title: "Flexible Reinigungszeiten", description: "Reinigungszeiten abgestimmt auf Ihre Arbeitszeiten – früh morgens, abends oder am Wochenende, ohne den Betrieb zu stören.", icon: "clock" },
      { title: "Materialschonende Reinigung", description: "Einsatz geeigneter Reinigungsmittel und schonender Methoden – abgestimmt auf Böden, Möbel und empfindliche Oberflächen.", icon: "sparkles" },
      { title: "Klare Ergebnisse & Werterhalt", description: "Regelmäßige Reinigung schützt Oberflächen und sorgt dauerhaft für ein professionelles Erscheinungsbild.", icon: "check" }
    ],
    bulletTitle: "Büroreinigung aus einer Hand",
    bulletSubtitle: "Zuverlässige Unterhaltsreinigung für Ihr Büro",
    bulletPoints: [
      "Regelmäßige Büroreinigung für saubere Arbeitsplätze",
      "Gründliche Sanitärreinigung für Mitarbeiter und Besucher",
      "Reinigung stark genutzter Kontakt- und Gemeinschaftsflächen",
      "Flexible Einsatzzeiten außerhalb der Bürozeiten"
    ],
    process: [
      { step: 1, title: "Kostenlose Besichtigung", description: "Wir besichtigen Ihre Büroräume und erfassen Flächen, Anforderungen und Reinigungsumfang." },
      { step: 2, title: "Individuelles Angebot", description: "Sie erhalten ein transparentes Angebot – abgestimmt auf Bürogröße und Nutzungszeiten." },
      { step: 3, title: "Fachgerechte Reinigung", description: "Die Reinigung erfolgt zuverlässig, gründlich und nach festen Qualitätsstandards." }
    ],
    services: ["Unterhaltsreinigung", "Glasreinigung", "Grundreinigung", "Teppichreinigung"],
    closingQuestion: "Noch Fragen zur Büroreinigung?",
    closingText: "Nach einer kostenlosen Besichtigung erstellen wir ein individuelles Angebot für die Reinigung Ihrer Büroräume. Zuverlässig, termingerecht und nach festen Qualitätsstandards – im Raum Bad Neuenahr-Ahrweiler, Bonn & Umgebung."
  },
  hotel: {
    title: "Hotel & Gastgewerbe",
    heroTitle: "Gebäudereinigung für Hotels",
    subtitle: "Höchste Hygienestandards für Gästezufriedenheit",
    heroDescription: "In der Hotellerie entscheidet Sauberkeit über den Erfolg. Gepflegte Lobbys, hygienische Gemeinschaftsbereiche und saubere Konferenzräume sind entscheidend für positive Gästebewertungen und wiederkehrende Besucher. Mit unserer Gebäudereinigung für Hotels sorgt AhrGlanz Gebäudereinigung für professionelle Sauberkeit nach höchsten Hygienestandards.",
    sectionTitle: "Hotelreinigung von Anfang bis Ende",
    sectionDescription: "Hotels stellen besondere Anforderungen an die Reinigung. Hohe Besucherfrequenz, wechselnde Gäste und strenge Hygienestandards erfordern strukturierte Abläufe und diskrete Durchführung. Unsere Reinigungskonzepte für Hotels werden individuell geplant – für dauerhaft gepflegte und einladende Räumlichkeiten.",
    image: hotelImg,
    featureBoxes: [
      { title: "Lobby & Empfangsbereiche", description: "Gründliche Reinigung von Eingangshallen, Rezeption und Wartebereichen für einen perfekten ersten Eindruck.", icon: "building" },
      { title: "Restaurant & Bar", description: "Hygienische Reinigung von Gastronomiebereichen nach geltenden Hygienevorgaben.", icon: "users" },
      { title: "Konferenzräume", description: "Saubere und repräsentative Tagungsräume für erfolgreiche Geschäftstreffen.", icon: "shield" },
      { title: "Gemeinschaftliche Sanitäranlagen", description: "Sorgfältige Sanitärreinigung für Gäste und Personal nach höchsten Hygienestandards.", icon: "sparkles" },
      { title: "Außenbereiche & Terrassen", description: "Pflege von Außenanlagen, Eingängen und Terrassenbereichen.", icon: "clock" },
      { title: "Diskrete Durchführung", description: "Reinigung erfolgt diskret und ohne Störung des laufenden Hotelbetriebs.", icon: "check" }
    ],
    bulletTitle: "Hotelreinigung aus einer Hand",
    bulletSubtitle: "Professionelle Reinigung für Ihr Hotel",
    bulletPoints: [
      "Hygienische Reinigung aller Gemeinschaftsbereiche",
      "Gepflegte Lobby und Empfangsbereiche",
      "Diskrete Durchführung ohne Störung der Gäste",
      "Flexible Einsatzzeiten nach Hotelbetrieb"
    ],
    process: [
      { step: 1, title: "Kostenlose Besichtigung", description: "Wir besichtigen Ihr Hotel und erfassen Flächen, Anforderungen und Reinigungsumfang." },
      { step: 2, title: "Individuelles Angebot", description: "Sie erhalten ein transparentes Angebot – abgestimmt auf Hotelgröße und Belegung." },
      { step: 3, title: "Fachgerechte Reinigung", description: "Die Reinigung erfolgt zuverlässig, diskret und nach festen Qualitätsstandards." }
    ],
    services: ["Unterhaltsreinigung", "Grundreinigung", "Glasreinigung", "Sonderreinigung"],
    closingQuestion: "Noch Fragen zur Gebäudereinigung für Hotels?",
    closingText: "Nach einer kostenlosen Besichtigung erstellen wir ein individuelles Angebot für die Reinigung Ihres Hotels. Zuverlässig, termingerecht und nach festen Qualitätsstandards – im Raum Bad Neuenahr-Ahrweiler, Bonn & Umgebung."
  },
  kita: {
    title: "Kita & Bildungseinrichtung",
    heroTitle: "Gebäudereinigung für Kitas",
    subtitle: "Hygienische Sauberkeit für Kinder & Erzieher",
    heroDescription: "In Kindertagesstätten hat Hygiene oberste Priorität. Saubere Gruppenräume, hygienische Sanitäranlagen und gepflegte Spielbereiche sind entscheidend für die Gesundheit der Kinder und das Vertrauen der Eltern. Mit unserer Gebäudereinigung für Kitas sorgt AhrGlanz Gebäudereinigung für kindgerechte, gründliche und zuverlässige Reinigung.",
    sectionTitle: "Kita-Reinigung von Anfang bis Ende",
    sectionDescription: "Kindertagesstätten stellen besondere Anforderungen an die Reinigung. Sensible Oberflächen, kindgerechte Reinigungsmittel und flexible Einsatzzeiten sind entscheidend. Unsere Reinigungskonzepte für Kitas werden individuell geplant und sorgen für dauerhaft hygienische und sichere Räumlichkeiten.",
    image: kitaImg,
    featureBoxes: [
      { title: "Gruppen- & Spielräume", description: "Hygienische Reinigung von Gruppenräumen, Spielbereichen und Schlafräumen – für eine sichere Umgebung.", icon: "users" },
      { title: "Sanitär- & Hygienebereiche", description: "Sorgfältige Sanitärreinigung von Kinder- und Personalbereichen nach erhöhten Hygieneanforderungen.", icon: "shield" },
      { title: "Kontakt- & Spieloberflächen", description: "Reinigung sensibler Kontaktflächen, Spielgeräte und häufig berührter Oberflächen.", icon: "sparkles" },
      { title: "Kindgerechte Reinigungsmittel", description: "Einsatz material- und kindgerechter Reinigungsmittel ohne schädliche Inhaltsstoffe.", icon: "check" },
      { title: "Flexible Einsatzzeiten", description: "Reinigung angepasst an Betreuungszeiten – ohne Störung des Kita-Alltags.", icon: "clock" },
      { title: "Reduzierte Krankheitsübertragung", description: "Regelmäßige hygienische Reinigung reduziert die Übertragung von Keimen und Krankheiten.", icon: "building" }
    ],
    bulletTitle: "Kita-Reinigung aus einer Hand",
    bulletSubtitle: "Zuverlässige Unterhaltsreinigung für Ihre Kita",
    bulletPoints: [
      "Hygienische Reinigung von Gruppen- und Spielräumen",
      "Kindersichere und materialschonende Reinigungsmittel",
      "Gründliche Sanitärreinigung nach Hygienevorgaben",
      "Flexible Einsatzzeiten außerhalb der Betreuungszeiten"
    ],
    process: [
      { step: 1, title: "Kostenlose Besichtigung", description: "Wir besichtigen Ihre Kita und erfassen Flächen, Anforderungen und Reinigungsumfang." },
      { step: 2, title: "Individuelles Angebot", description: "Sie erhalten ein transparentes Angebot – abgestimmt auf Gruppengröße und Betreuungszeiten." },
      { step: 3, title: "Fachgerechte Reinigung", description: "Die Reinigung erfolgt zuverlässig, kindgerecht und nach festen Qualitätsstandards." }
    ],
    services: ["Unterhaltsreinigung", "Desinfektionsreinigung", "Grundreinigung", "Glasreinigung"],
    closingQuestion: "Noch Fragen zur Gebäudereinigung für Kitas?",
    closingText: "Nach einer kostenlosen Besichtigung erstellen wir ein individuelles Angebot für die Reinigung Ihrer Kita. Zuverlässig, termingerecht und nach festen Qualitätsstandards – im Raum Bad Neuenahr-Ahrweiler, Bonn & Umgebung."
  },
  bildungseinrichtung: {
    title: "Bildungseinrichtung",
    heroTitle: "Gebäudereinigung für Bildungseinrichtungen",
    subtitle: "Hygienische Sauberkeit für Schulen & Bildungsträger",
    heroDescription: "In Bildungseinrichtungen ist Hygiene besonders wichtig. Saubere Klassenzimmer, hygienische Sanitäranlagen und gepflegte Gemeinschaftsflächen sind entscheidend für konzentriertes Lernen und die Gesundheit von Schülern und Lehrern. Mit unserer Gebäudereinigung für Bildungseinrichtungen sorgt AhrGlanz Gebäudereinigung für zuverlässige, gründliche und hygienische Reinigung.",
    sectionTitle: "Schulreinigung von Anfang bis Ende",
    sectionDescription: "Schulen und Bildungseinrichtungen stellen besondere Anforderungen an die Reinigung. Hohe Frequenz, unterschiedliche Raumtypen und strenge Hygienevorgaben erfordern strukturierte Abläufe. Unsere Reinigungskonzepte werden individuell geplant und sorgen für dauerhaft saubere, gepflegte Lernumgebungen.",
    image: bildungImg,
    featureBoxes: [
      { title: "Klassen- & Gruppenräume", description: "Hygienische Reinigung von Klassenzimmern, Gruppenräumen und Aufenthaltsräumen für konzentriertes Lernen.", icon: "building" },
      { title: "Sanitär- & Hygienebereiche", description: "Sorgfältige Sanitärreinigung nach aktuellen Hygienevorgaben für Schüler und Personal.", icon: "shield" },
      { title: "Gemeinschaftsflächen", description: "Reinigung stark frequentierter Kontakt- und Gemeinschaftsflächen wie Flure, Mensen und Eingangsbereiche.", icon: "users" },
      { title: "Flexible Einsatzplanung", description: "Rücksicht auf Lern- und Betreuungszeiten durch flexible Einsatzplanung.", icon: "clock" },
      { title: "Materialschonende Reinigung", description: "Einsatz geprüfter Reinigungsmittel für alle Oberflächen und Materialien.", icon: "sparkles" },
      { title: "Hygienisch saubere Lernumgebung", description: "Regelmäßige Reinigung für eine gesunde und einladende Lernumgebung.", icon: "check" }
    ],
    bulletTitle: "Schulreinigung aus einer Hand",
    bulletSubtitle: "Zuverlässige Unterhaltsreinigung für Bildungseinrichtungen",
    bulletPoints: [
      "Hygienische Reinigung von Klassenzimmern und Gruppenräumen",
      "Gründliche Sanitärreinigung nach Hygienevorgaben",
      "Reinigung stark frequentierter Gemeinschaftsflächen",
      "Flexible Einsatzzeiten nach Schulbetrieb"
    ],
    process: [
      { step: 1, title: "Kostenlose Besichtigung", description: "Wir besichtigen Ihre Einrichtung und erfassen Flächen, Anforderungen und Reinigungsumfang." },
      { step: 2, title: "Individuelles Angebot", description: "Sie erhalten ein transparentes Angebot – abgestimmt auf Größe und Nutzung." },
      { step: 3, title: "Fachgerechte Reinigung", description: "Die Reinigung erfolgt zuverlässig, gründlich und nach festen Qualitätsstandards." }
    ],
    services: ["Unterhaltsreinigung", "Desinfektionsreinigung", "Grundreinigung", "Glasreinigung"],
    closingQuestion: "Noch Fragen zur Gebäudereinigung für Bildungseinrichtungen?",
    closingText: "Nach einer kostenlosen Besichtigung erstellen wir ein individuelles Angebot für die Reinigung Ihrer Bildungseinrichtung. Zuverlässig, termingerecht und nach festen Qualitätsstandards – im Raum Bad Neuenahr-Ahrweiler, Bonn & Umgebung."
  },
  praxis: {
    title: "Praxis & Gesundheitswesen",
    heroTitle: "Gebäudereinigung für Arztpraxen",
    subtitle: "Hygienische Sauberkeit für Praxen & Gesundheitseinrichtungen",
    heroDescription: "In Arztpraxen und Gesundheitseinrichtungen hat Hygiene oberste Priorität. Saubere Wartebereiche, hygienische Behandlungsräume und gepflegte Sanitäranlagen sind entscheidend für das Vertrauen der Patienten und die Einhaltung von Hygienevorgaben. Mit unserer Gebäudereinigung für Arztpraxen sorgt AhrGlanz Gebäudereinigung für professionelle, gründliche und zuverlässige Reinigung.",
    sectionTitle: "Praxisreinigung von Anfang bis Ende",
    sectionDescription: "Arztpraxen und Gesundheitseinrichtungen stellen besondere Anforderungen an die Reinigung. Erhöhte Hygienestandards, sensible Bereiche und diskrete Durchführung sind entscheidend. Unsere Reinigungskonzepte werden individuell geplant und sorgen für dauerhaft hygienische und vertrauenswürdige Räumlichkeiten.",
    image: gesundheitImg,
    featureBoxes: [
      { title: "Behandlungs- & Untersuchungsräume", description: "Hygienische Reinigung von Behandlungsräumen nach erhöhten Hygieneanforderungen.", icon: "shield" },
      { title: "Wartebereiche", description: "Saubere und einladende Wartezimmer für einen positiven ersten Eindruck bei Patienten.", icon: "users" },
      { title: "Sanitär- & Hygienebereiche", description: "Sorgfältige Sanitärreinigung nach medizinischen Hygienevorgaben.", icon: "sparkles" },
      { title: "Kontaktflächen", description: "Reinigung und Desinfektion sensibler Kontakt- und Arbeitsflächen.", icon: "check" },
      { title: "Diskrete Durchführung", description: "Reinigung erfolgt diskret, außerhalb der Sprechzeiten oder nach Absprache.", icon: "clock" },
      { title: "Patientenvertrauen stärken", description: "Professionelle Sauberkeit stärkt das Vertrauen Ihrer Patienten.", icon: "building" }
    ],
    bulletTitle: "Praxisreinigung aus einer Hand",
    bulletSubtitle: "Zuverlässige Unterhaltsreinigung für Ihre Praxis",
    bulletPoints: [
      "Hygienische Reinigung von Behandlungs- und Wartebereichen",
      "Gründliche Sanitärreinigung nach medizinischen Standards",
      "Reinigung und Desinfektion von Kontaktflächen",
      "Diskrete Durchführung außerhalb der Sprechzeiten"
    ],
    process: [
      { step: 1, title: "Kostenlose Besichtigung", description: "Wir besichtigen Ihre Praxis und erfassen Flächen, Anforderungen und Reinigungsumfang." },
      { step: 2, title: "Individuelles Angebot", description: "Sie erhalten ein transparentes Angebot – abgestimmt auf Praxisgröße und Sprechzeiten." },
      { step: 3, title: "Fachgerechte Reinigung", description: "Die Reinigung erfolgt zuverlässig, diskret und nach festen Qualitätsstandards." }
    ],
    services: ["Unterhaltsreinigung", "Desinfektionsreinigung", "Grundreinigung", "Sonderreinigung"],
    closingQuestion: "Noch Fragen zur Gebäudereinigung für Arztpraxen?",
    closingText: "Nach einer kostenlosen Besichtigung erstellen wir ein individuelles Angebot für die Reinigung Ihrer Praxis. Zuverlässig, termingerecht und nach festen Qualitätsstandards – im Raum Bad Neuenahr-Ahrweiler, Bonn & Umgebung."
  },
  gesundheitseinrichtung: {
    title: "Gesundheitseinrichtung",
    heroTitle: "Gebäudereinigung für Gesundheitseinrichtungen",
    subtitle: "Hygienische Sauberkeit für Praxen & Pflegeeinrichtungen",
    heroDescription: "In Gesundheitseinrichtungen hat Hygiene oberste Priorität. Saubere Wartebereiche, hygienische Behandlungsräume und gepflegte Sanitäranlagen sind entscheidend für das Vertrauen der Patienten und die Einhaltung von Hygienevorgaben. Mit unserer Gebäudereinigung für Gesundheitseinrichtungen sorgt AhrGlanz Gebäudereinigung für professionelle, gründliche und zuverlässige Reinigung.",
    sectionTitle: "Reinigung von Gesundheitseinrichtungen von Anfang bis Ende",
    sectionDescription: "Gesundheitseinrichtungen stellen besondere Anforderungen an die Reinigung. Erhöhte Hygienestandards, sensible Bereiche und diskrete Durchführung sind entscheidend. Unsere Reinigungskonzepte werden individuell geplant und sorgen für dauerhaft hygienische und vertrauenswürdige Räumlichkeiten.",
    image: gesundheitImg,
    featureBoxes: [
      { title: "Behandlungs- & Pflegebereiche", description: "Hygienische Reinigung von Behandlungs- und Pflegebereichen nach erhöhten Hygieneanforderungen.", icon: "shield" },
      { title: "Wartebereiche", description: "Saubere und einladende Wartezimmer für einen positiven ersten Eindruck.", icon: "users" },
      { title: "Sanitär- & Hygienebereiche", description: "Sorgfältige Sanitärreinigung nach medizinischen Hygienevorgaben.", icon: "sparkles" },
      { title: "Kontaktflächen", description: "Reinigung und Desinfektion sensibler Kontakt- und Arbeitsflächen.", icon: "check" },
      { title: "Diskrete Durchführung", description: "Reinigung erfolgt diskret und ohne Störung des laufenden Betriebs.", icon: "clock" },
      { title: "Patientenvertrauen stärken", description: "Professionelle Sauberkeit stärkt das Vertrauen Ihrer Patienten.", icon: "building" }
    ],
    bulletTitle: "Reinigung aus einer Hand",
    bulletSubtitle: "Zuverlässige Unterhaltsreinigung für Gesundheitseinrichtungen",
    bulletPoints: [
      "Hygienische Reinigung von Behandlungs- und Pflegebereichen",
      "Gründliche Sanitärreinigung nach medizinischen Standards",
      "Reinigung und Desinfektion von Kontaktflächen",
      "Diskrete Durchführung nach Absprache"
    ],
    process: [
      { step: 1, title: "Kostenlose Besichtigung", description: "Wir besichtigen Ihre Einrichtung und erfassen Flächen, Anforderungen und Reinigungsumfang." },
      { step: 2, title: "Individuelles Angebot", description: "Sie erhalten ein transparentes Angebot – abgestimmt auf Größe und Anforderungen." },
      { step: 3, title: "Fachgerechte Reinigung", description: "Die Reinigung erfolgt zuverlässig, diskret und nach festen Qualitätsstandards." }
    ],
    services: ["Unterhaltsreinigung", "Desinfektionsreinigung", "Grundreinigung"],
    closingQuestion: "Noch Fragen zur Gebäudereinigung für Gesundheitseinrichtungen?",
    closingText: "Nach einer kostenlosen Besichtigung erstellen wir ein individuelles Angebot für die Reinigung Ihrer Einrichtung. Zuverlässig, termingerecht und nach festen Qualitätsstandards – im Raum Bad Neuenahr-Ahrweiler, Bonn & Umgebung."
  },
  sportclub: {
    title: "Sportclub & Fitnessstudio",
    heroTitle: "Gebäudereinigung für Sportclubs",
    subtitle: "Hygienische Sauberkeit für Mitglieder & Personal",
    heroDescription: "In Sportstätten und Fitnessstudios hat Hygiene oberste Priorität. Saubere Trainingsräume, hygienische Umkleiden und gepflegte Sanitäranlagen sind entscheidend für zufriedene Mitglieder und die Vermeidung von Keimübertragung. Mit unserer Gebäudereinigung für Sportclubs sorgt AhrGlanz Gebäudereinigung für professionelle, gründliche und desinfizierende Reinigung.",
    sectionTitle: "Sportstättenreinigung von Anfang bis Ende",
    sectionDescription: "Sportstätten und Fitnessstudios stellen besondere Anforderungen an die Reinigung. Hohe Frequenz, intensive Nutzung und erhöhte Hygieneanforderungen erfordern strukturierte Abläufe und geschultes Personal. Unsere Reinigungskonzepte werden individuell geplant und sorgen für dauerhaft hygienische und einladende Räumlichkeiten.",
    image: sportclubImg,
    featureBoxes: [
      { title: "Trainings- & Sportbereiche", description: "Reinigung von Trainingsräumen, Kursräumen und Sportflächen für eine saubere Trainingsumgebung.", icon: "building" },
      { title: "Umkleiden & Duschen", description: "Gründliche Sanitärreinigung von Umkleiden, Duschen und WC-Anlagen nach erhöhten Hygienevorgaben.", icon: "shield" },
      { title: "Geräte & Kontaktflächen", description: "Desinfizierende Reinigung stark genutzter Trainingsgeräte und Kontaktflächen.", icon: "sparkles" },
      { title: "Wellnessbereiche", description: "Hygienische Reinigung von Sauna, Wellness und Ruhebereichen.", icon: "users" },
      { title: "Flexible Reinigungszeiten", description: "Reinigung angepasst an Trainingszeiten – ohne Störung des Sportbetriebs.", icon: "clock" },
      { title: "Zufriedene Mitglieder", description: "Professionelle Sauberkeit sorgt für zufriedene Mitglieder und positive Bewertungen.", icon: "check" }
    ],
    bulletTitle: "Sportstättenreinigung aus einer Hand",
    bulletSubtitle: "Zuverlässige Unterhaltsreinigung für Ihren Sportclub",
    bulletPoints: [
      "Hygienische Reinigung von Trainings- und Sportbereichen",
      "Gründliche Sanitärreinigung von Umkleiden und Duschen",
      "Desinfizierende Reinigung von Geräten und Kontaktflächen",
      "Flexible Einsatzzeiten nach Trainingsbetrieb"
    ],
    process: [
      { step: 1, title: "Kostenlose Besichtigung", description: "Wir besichtigen Ihren Sportclub und erfassen Flächen, Anforderungen und Reinigungsumfang." },
      { step: 2, title: "Individuelles Angebot", description: "Sie erhalten ein transparentes Angebot – abgestimmt auf Größe und Nutzungszeiten." },
      { step: 3, title: "Fachgerechte Reinigung", description: "Die Reinigung erfolgt zuverlässig, gründlich und nach festen Qualitätsstandards." }
    ],
    services: ["Unterhaltsreinigung", "Desinfektionsreinigung", "Grundreinigung", "Glasreinigung"],
    closingQuestion: "Noch Fragen zur Gebäudereinigung für Sportclubs?",
    closingText: "Nach einer kostenlosen Besichtigung erstellen wir ein individuelles Angebot für die Reinigung Ihres Sportclubs. Zuverlässig, termingerecht und nach festen Qualitätsstandards – im Raum Bad Neuenahr-Ahrweiler, Bonn & Umgebung."
  },
  industrie: {
    title: "Industrie & Produktion",
    heroTitle: "Gebäudereinigung für Industriebetriebe",
    subtitle: "Professionelle Reinigung für Produktion & Lager",
    heroDescription: "In Industriebetrieben hat Sauberkeit direkte Auswirkungen auf Arbeitssicherheit und Effizienz. Saubere Produktionshallen, gepflegte Lagerflächen und hygienische Sozialräume sind entscheidend für einen reibungslosen Betriebsablauf. Mit unserer Gebäudereinigung für Industriebetriebe sorgt AhrGlanz Gebäudereinigung für professionelle, gründliche und zuverlässige Reinigung.",
    sectionTitle: "Industriereinigung von Anfang bis Ende",
    sectionDescription: "Industriebetriebe stellen besondere Anforderungen an die Reinigung. Große Flächen, spezielle Verschmutzungen und Schichtbetrieb erfordern flexible und strukturierte Abläufe. Unsere Reinigungskonzepte werden individuell geplant und in den Betriebsablauf integriert.",
    image: industrieImg,
    featureBoxes: [
      { title: "Produktionshallen", description: "Reinigung von Industriehallen, Produktions- und Arbeitsbereichen für Sicherheit und Effizienz.", icon: "building" },
      { title: "Lager- & Nutzflächen", description: "Reinigung von Verkehrs-, Lager- und Nutzflächen für geordnete Abläufe.", icon: "users" },
      { title: "Produktionsrückstände", description: "Entfernung von Staub, Schmutz und produktionsbedingten Rückständen.", icon: "sparkles" },
      { title: "Sozialräume", description: "Hygienische Reinigung von Pausenräumen, Umkleiden und Sanitäranlagen.", icon: "shield" },
      { title: "Sicherheitsvorgaben", description: "Berücksichtigung betrieblicher Sicherheits- und Hygienevorgaben.", icon: "check" },
      { title: "Flexible Einsatzzeiten", description: "Reinigung angepasst an Schichtbetrieb und Produktionszeiten.", icon: "clock" }
    ],
    bulletTitle: "Industriereinigung aus einer Hand",
    bulletSubtitle: "Zuverlässige Unterhaltsreinigung für Ihren Betrieb",
    bulletPoints: [
      "Gründliche Reinigung von Produktionshallen und Arbeitsbereichen",
      "Entfernung von Staub und produktionsbedingten Rückständen",
      "Hygienische Reinigung von Sozialräumen und Sanitäranlagen",
      "Flexible Einsatzzeiten nach Schichtbetrieb"
    ],
    process: [
      { step: 1, title: "Kostenlose Besichtigung", description: "Wir besichtigen Ihren Betrieb und erfassen Flächen, Anforderungen und Reinigungsumfang." },
      { step: 2, title: "Individuelles Angebot", description: "Sie erhalten ein transparentes Angebot – abgestimmt auf Betriebsgröße und Schichtzeiten." },
      { step: 3, title: "Fachgerechte Reinigung", description: "Die Reinigung erfolgt zuverlässig, gründlich und nach festen Qualitätsstandards." }
    ],
    services: ["Unterhaltsreinigung", "Grundreinigung", "Sonderreinigung", "Baureinigung"],
    closingQuestion: "Noch Fragen zur Gebäudereinigung für Industriebetriebe?",
    closingText: "Nach einer kostenlosen Besichtigung erstellen wir ein individuelles Angebot für die Reinigung Ihres Betriebs. Zuverlässig, termingerecht und nach festen Qualitätsstandards – im Raum Bad Neuenahr-Ahrweiler, Bonn & Umgebung."
  },
  geschaeft: {
    title: "Einzelhandel & Geschäft",
    heroTitle: "Gebäudereinigung für den Einzelhandel",
    subtitle: "Saubere Verkaufsflächen für zufriedene Kunden",
    heroDescription: "Im Einzelhandel entscheidet der erste Eindruck. Saubere Verkaufsflächen, gepflegte Schaufenster und hygienische Kundenbereiche sind entscheidend für ein positives Einkaufserlebnis und zufriedene Kunden. Mit unserer Gebäudereinigung für den Einzelhandel sorgt AhrGlanz Gebäudereinigung für professionelle, gründliche und zuverlässige Reinigung.",
    sectionTitle: "Geschäftsreinigung von Anfang bis Ende",
    sectionDescription: "Der Einzelhandel stellt besondere Anforderungen an die Reinigung. Hohe Kundenfrequenz, unterschiedliche Öffnungszeiten und repräsentative Anforderungen erfordern flexible Abläufe. Unsere Reinigungskonzepte werden individuell geplant und sorgen für dauerhaft saubere, einladende Verkaufsräume.",
    image: geschaeftImg,
    featureBoxes: [
      { title: "Verkaufs- & Ausstellungsflächen", description: "Saubere Reinigung von Verkaufs-, Ausstellungs- und Kundenflächen für einen einladenden Eindruck.", icon: "building" },
      { title: "Sanitär- & Kundenbereiche", description: "Gründliche Sanitärreinigung für Kunden- und Personalbereiche.", icon: "shield" },
      { title: "Lauf- & Kontaktzonen", description: "Reinigung stark frequentierter Lauf- und Kontaktzonen.", icon: "users" },
      { title: "Schaufenster & Eingänge", description: "Gepflegte Schaufenster und Eingangsbereiche für maximale Attraktivität.", icon: "sparkles" },
      { title: "Flexible Reinigungszeiten", description: "Reinigung angepasst an Öffnungszeiten – vor Ladeneröffnung oder nach Ladenschluss.", icon: "clock" },
      { title: "Positiver erster Eindruck", description: "Professionelle Sauberkeit sorgt für höhere Kundenzufriedenheit.", icon: "check" }
    ],
    bulletTitle: "Geschäftsreinigung aus einer Hand",
    bulletSubtitle: "Zuverlässige Unterhaltsreinigung für Ihr Geschäft",
    bulletPoints: [
      "Saubere Reinigung von Verkaufs- und Kundenflächen",
      "Gründliche Sanitärreinigung für Kunden und Personal",
      "Gepflegte Schaufenster und Eingangsbereiche",
      "Flexible Einsatzzeiten nach Öffnungszeiten"
    ],
    process: [
      { step: 1, title: "Kostenlose Besichtigung", description: "Wir besichtigen Ihr Geschäft und erfassen Flächen, Anforderungen und Reinigungsumfang." },
      { step: 2, title: "Individuelles Angebot", description: "Sie erhalten ein transparentes Angebot – abgestimmt auf Ladengröße und Öffnungszeiten." },
      { step: 3, title: "Fachgerechte Reinigung", description: "Die Reinigung erfolgt zuverlässig, gründlich und nach festen Qualitätsstandards." }
    ],
    services: ["Unterhaltsreinigung", "Glasreinigung", "Grundreinigung"],
    closingQuestion: "Noch Fragen zur Gebäudereinigung für den Einzelhandel?",
    closingText: "Nach einer kostenlosen Besichtigung erstellen wir ein individuelles Angebot für die Reinigung Ihres Geschäfts. Zuverlässig, termingerecht und nach festen Qualitätsstandards – im Raum Bad Neuenahr-Ahrweiler, Bonn & Umgebung."
  },
  gastronomiebetrieb: {
    title: "Gastronomiebetrieb",
    heroTitle: "Gebäudereinigung für Gastronomiebetriebe",
    subtitle: "Hygienische Sauberkeit für Restaurants, Cafés & Gastrobetriebe",
    heroDescription: "In gastronomischen Betrieben hat Sauberkeit oberste Priorität. Gepflegte Gasträume, hygienische Sanitäranlagen und saubere Nebenbereiche sind entscheidend für Gästezufriedenheit, Hygienevorgaben und den positiven Gesamteindruck. Mit unserer Gebäudereinigung für Gastronomiebetriebe sorgt AhrGlanz Gebäudereinigung für zuverlässige, gründliche und hygienische Reinigung.",
    sectionTitle: "Gastronomiereinigung von Anfang bis Ende",
    sectionDescription: "Gastronomiebetriebe stellen besondere Anforderungen an die Reinigung. Hohe Besucherfrequenz, unterschiedliche Nutzungszeiten und strenge Hygienevorgaben erfordern strukturierte Abläufe und geschultes Personal. Unsere Reinigungskonzepte für Restaurants, Cafés und ähnliche Betriebe werden individuell geplant und sorgen für dauerhaft hygienische und gepflegte Räumlichkeiten.",
    image: gastronomieImg,
    featureBoxes: [
      { title: "Gasträume & Gästebereiche", description: "Gründliche Reinigung von Gasträumen, Sitzbereichen und Aufenthaltsflächen – für einen sauberen und einladenden Eindruck.", icon: "users" },
      { title: "Sanitär- & Hygienebereiche", description: "Sorgfältige Sanitärreinigung nach geltenden Hygienevorgaben, inklusive WC-Anlagen und Personaltoiletten.", icon: "shield" },
      { title: "Theken- & Kontaktbereiche", description: "Reinigung stark frequentierter Bereiche wie Eingänge, Thekenbereiche und häufig berührte Kontaktflächen.", icon: "sparkles" },
      { title: "HACCP-konforme Reinigung", description: "Reinigung nach HACCP-Richtlinien für erfolgreiche Betriebsprüfungen.", icon: "check" },
      { title: "Flexible Reinigungszeiten", description: "Reinigungszeiten angepasst an Öffnungs-, Ruhe- und Betriebszeiten.", icon: "clock" },
      { title: "Positive Gästebewertungen", description: "Professionelle Sauberkeit sorgt für zufriedene Gäste und positive Bewertungen.", icon: "building" }
    ],
    bulletTitle: "Gastronomiereinigung aus einer Hand",
    bulletSubtitle: "Zuverlässige Unterhaltsreinigung für Ihren Betrieb",
    bulletPoints: [
      "Hygienische Reinigung von Gasträumen und Gästebereichen",
      "Gründliche Sanitärreinigung nach geltenden Hygienevorgaben",
      "Reinigung stark frequentierter Kontakt- und Nutzflächen",
      "Flexible Einsatzzeiten angepasst an den Gastronomiebetrieb"
    ],
    process: [
      { step: 1, title: "Kostenlose Besichtigung", description: "Wir besichtigen Ihren Gastronomiebetrieb und erfassen Flächen, Anforderungen und Reinigungsumfang." },
      { step: 2, title: "Individuelles Angebot", description: "Sie erhalten ein transparentes Angebot – abgestimmt auf Betriebsgröße und Öffnungszeiten." },
      { step: 3, title: "Fachgerechte Reinigung", description: "Die Reinigung erfolgt zuverlässig, gründlich und nach festen Qualitätsstandards." }
    ],
    services: ["Unterhaltsreinigung", "Grundreinigung", "Glasreinigung", "Sonderreinigung"],
    closingQuestion: "Noch Fragen zur Gebäudereinigung für Gastronomiebetriebe?",
    closingText: "Nach einer kostenlosen Besichtigung erstellen wir ein individuelles Angebot für die Reinigung Ihres Gastronomiebetriebs. Zuverlässig, termingerecht und nach festen Qualitätsstandards – im Raum Bad Neuenahr-Ahrweiler, Bonn & Umgebung."
  },
  gastronomie: {
    title: "Gastronomiebetrieb",
    heroTitle: "Gebäudereinigung für Gastronomiebetriebe",
    subtitle: "Hygienische Sauberkeit für Restaurants, Cafés & Gastrobetriebe",
    heroDescription: "In gastronomischen Betrieben hat Sauberkeit oberste Priorität. Gepflegte Gasträume, hygienische Sanitäranlagen und saubere Nebenbereiche sind entscheidend für Gästezufriedenheit, Hygienevorgaben und den positiven Gesamteindruck. Mit unserer Gebäudereinigung für Gastronomiebetriebe sorgt AhrGlanz Gebäudereinigung für zuverlässige, gründliche und hygienische Reinigung.",
    sectionTitle: "Gastronomiereinigung von Anfang bis Ende",
    sectionDescription: "Gastronomiebetriebe stellen besondere Anforderungen an die Reinigung. Hohe Besucherfrequenz, unterschiedliche Nutzungszeiten und strenge Hygienevorgaben erfordern strukturierte Abläufe und geschultes Personal. Unsere Reinigungskonzepte für Restaurants, Cafés und ähnliche Betriebe werden individuell geplant und sorgen für dauerhaft hygienische und gepflegte Räumlichkeiten.",
    image: gastronomieImg,
    featureBoxes: [
      { title: "Gasträume & Gästebereiche", description: "Gründliche Reinigung von Gasträumen, Sitzbereichen und Aufenthaltsflächen – für einen sauberen und einladenden Eindruck.", icon: "users" },
      { title: "Sanitär- & Hygienebereiche", description: "Sorgfältige Sanitärreinigung nach geltenden Hygienevorgaben, inklusive WC-Anlagen und Personaltoiletten.", icon: "shield" },
      { title: "Theken- & Kontaktbereiche", description: "Reinigung stark frequentierter Bereiche wie Eingänge, Thekenbereiche und häufig berührte Kontaktflächen.", icon: "sparkles" },
      { title: "HACCP-konforme Reinigung", description: "Reinigung nach HACCP-Richtlinien für erfolgreiche Betriebsprüfungen.", icon: "check" },
      { title: "Flexible Reinigungszeiten", description: "Reinigungszeiten angepasst an Öffnungs-, Ruhe- und Betriebszeiten.", icon: "clock" },
      { title: "Positive Gästebewertungen", description: "Professionelle Sauberkeit sorgt für zufriedene Gäste und positive Bewertungen.", icon: "building" }
    ],
    bulletTitle: "Gastronomiereinigung aus einer Hand",
    bulletSubtitle: "Zuverlässige Unterhaltsreinigung für Ihren Betrieb",
    bulletPoints: [
      "Hygienische Reinigung von Gasträumen und Gästebereichen",
      "Gründliche Sanitärreinigung nach geltenden Hygienevorgaben",
      "Reinigung stark frequentierter Kontakt- und Nutzflächen",
      "Flexible Einsatzzeiten angepasst an den Gastronomiebetrieb"
    ],
    process: [
      { step: 1, title: "Kostenlose Besichtigung", description: "Wir besichtigen Ihren Gastronomiebetrieb und erfassen Flächen, Anforderungen und Reinigungsumfang." },
      { step: 2, title: "Individuelles Angebot", description: "Sie erhalten ein transparentes Angebot – abgestimmt auf Betriebsgröße und Öffnungszeiten." },
      { step: 3, title: "Fachgerechte Reinigung", description: "Die Reinigung erfolgt zuverlässig, gründlich und nach festen Qualitätsstandards." }
    ],
    services: ["Unterhaltsreinigung", "Grundreinigung", "Glasreinigung", "Sonderreinigung"],
    closingQuestion: "Noch Fragen zur Gebäudereinigung für Gastronomiebetriebe?",
    closingText: "Nach einer kostenlosen Besichtigung erstellen wir ein individuelles Angebot für die Reinigung Ihres Gastronomiebetriebs. Zuverlässig, termingerecht und nach festen Qualitätsstandards – im Raum Bad Neuenahr-Ahrweiler, Bonn & Umgebung."
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

const ObjektDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const objekt = slug ? objekteData[slug] : null;
  
  // SEO for the current object
  useSEO(
    objekt 
      ? getObjektSEO(objekt.title, slug!) 
      : { title: 'Objekt nicht gefunden | AhrGlanz', description: 'Das angeforderte Objekt wurde nicht gefunden.' }
  );

  if (!objekt) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Objekt nicht gefunden</h1>
            <Button onClick={() => navigate('/objekte')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zu Objekte
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
              to="/objekte" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Alle Objekte
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                  {objekt.heroTitle}
                </h1>
                <p className="text-xl text-primary font-semibold mb-6">{objekt.subtitle}</p>
                <p className="text-lg text-muted-foreground mb-8">
                  {objekt.heroDescription}
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
                    src={objekt.image} 
                    alt={objekt.title}
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
                {objekt.sectionTitle}
              </h2>
              <p className="text-muted-foreground text-lg">
                {objekt.sectionDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Feature Boxes */}
        <section className="pb-20 bg-background">
          <div className="section-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {objekt.featureBoxes.map((feature, index) => {
                const IconComponent = getIcon(feature.icon);
                return (
                  <div 
                    key={index}
                    className="bg-card rounded-2xl p-6 shadow-sm border hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
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
                <span className="text-primary font-medium text-sm uppercase tracking-wider mb-2 block">{objekt.bulletTitle}</span>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
                  {objekt.bulletSubtitle}
                </h2>
                <p className="text-muted-foreground mb-8">
                  Unsere Gebäudereinigung umfasst alle relevanten Reinigungsleistungen – fachgerecht, zuverlässig und transparent. Mit festen Ansprechpartnern, klaren Reinigungsplänen und geschultem Personal gewährleisten wir eine gleichbleibend hohe Reinigungsqualität.
                </p>
                <ul className="space-y-4">
                  {objekt.bulletPoints.map((point, index) => (
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
                    src={objekt.image} 
                    alt={objekt.title}
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
              <span className="text-primary font-medium text-sm uppercase tracking-wider mb-2 block">Ablauf der Reinigung</span>
              <h2 className="text-2xl md:text-3xl font-display font-bold">
                So einfach funktioniert unsere Reinigung
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {objekt.process.map((step) => (
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

        {/* Services Links */}
        <section className="py-16 bg-muted/30">
          <div className="section-container">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-display font-bold">Passende Leistungen</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {objekt.services.map((service, index) => (
                <Link 
                  key={index}
                  to={`/leistungen/${service.toLowerCase().replace(/\s+/g, '').replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u')}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-full border hover:border-primary hover:text-primary transition-colors"
                >
                  <Sparkles className="w-4 h-4" />
                  {service}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary/5">
          <div className="section-container text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              {objekt.closingQuestion}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {objekt.closingText}
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

export default ObjektDetail;
