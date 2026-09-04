import type { Locale } from "@/i18n/types";

export const SUBJECT_TRANSLATIONS: Record<
  string,
  { fr: string; ar: string; en: string; es: string }
> = {
  mathematiques: {
    fr: "Mathématiques",
    ar: "الرياضيات",
    en: "Mathematics",
    es: "Matemáticas",
  },
  "physique-chimie": {
    fr: "Physique-Chimie",
    ar: "الفيزياء والكيمياء",
    en: "Physics & Chemistry",
    es: "Física y Química",
  },
  francais: {
    fr: "Français",
    ar: "اللغة الفرنسية",
    en: "French",
    es: "Francés",
  },
  anglais: {
    fr: "Anglais",
    ar: "اللغة الإنجليزية",
    en: "English",
    es: "Inglés",
  },
  arabe: {
    fr: "Arabe",
    ar: "اللغة العربية",
    en: "Arabic",
    es: "Árabe",
  },
  svt: {
    fr: "SVT",
    ar: "علوم الحياة والأرض",
    en: "Life & Earth Sciences (SVT)",
    es: "Ciencias de la Tierra y la Vida",
  },
  informatique: {
    fr: "Informatique & Code",
    ar: "الإعلاميات والبرمجة",
    en: "Computer Science & Coding",
    es: "Informática y Programación",
  },
  "soutien-primaire": {
    fr: "Soutien primaire",
    ar: "دعم التعليم الابتدائي",
    en: "Primary School Tutoring",
    es: "Apoyo Escolar Primaria",
  },
  "economie-gestion": {
    fr: "Économie & Gestion",
    ar: "الاقتصاد والتدبير",
    en: "Economics & Management",
    es: "Economía y Gestión",
  },
  "histoire-geo": {
    fr: "Histoire-Géographie",
    ar: "التاريخ والجغرافيا",
    en: "History & Geography",
    es: "Historia y Geografía",
  },
  philosophie: {
    fr: "Philosophie",
    ar: "الفلسفة",
    en: "Philosophy",
    es: "Filosofía",
  },
  espagnol: {
    fr: "Espagnol",
    ar: "اللغة الإسبانية",
    en: "Spanish",
    es: "Español",
  },
  allemand: {
    fr: "Allemand",
    ar: "اللغة الألمانية",
    en: "German",
    es: "Alemán",
  },
  italien: {
    fr: "Italien",
    ar: "اللغة الإيطالية",
    en: "Italian",
    es: "Italiano",
  },
  droit: {
    fr: "Droit",
    ar: "القانون",
    en: "Law",
    es: "Derecho",
  },
  comptabilite: {
    fr: "Comptabilité",
    ar: "المحاسبة",
    en: "Accounting",
    es: "Contabilidad",
  },
  marketing: {
    fr: "Marketing & Commerce",
    ar: "التسويق والتجارة",
    en: "Marketing",
    es: "Marketing",
  },
  musique: {
    fr: "Musique & Solfège",
    ar: "الموسيقى والعزف",
    en: "Music",
    es: "Música",
  },
};

export function getLocalizedSubject(slug: string, locale: Locale, fallbackName?: string): string {
  const normSlug = (slug || "").toLowerCase().trim();
  const entry = SUBJECT_TRANSLATIONS[normSlug];
  if (entry && entry[locale]) {
    return entry[locale];
  }
  return fallbackName || slug;
}
