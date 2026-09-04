import { and, asc, desc, eq, ilike, or, type SQL } from "drizzle-orm";
import { db } from "@/db";
import { subjects, testimonials, tutors, type Subject, type Testimonial, type Tutor } from "@/db/schema";
import { FALLBACK_SUBJECTS } from "@/content/site";

export type { Subject, Testimonial, Tutor };

export type SubjectCard = {
  slug: string;
  name: string;
  icon: string;
  category: string;
  learners: number;
  tutorsCount: number;
  popular: boolean;
};

const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    authorName: "Salma B.",
    authorRole: "student",
    city: "Casablanca",
    quote:
      "J'étais à 8/20 en maths en 1ère Bac. Après 4 mois avec mon prof INCLASS, j'ai eu 15,5 au régional. Il m'explique jusqu'à ce que je comprenne vraiment.",
    detail: "Mathématiques · 2ème Bac SM",
    rating: 5,
    sortOrder: 1,
  },
  {
    id: 2,
    authorName: "Youssef E.",
    authorRole: "parent",
    city: "Rabat",
    quote:
      "Ce que j'apprécie, c'est le compte rendu après chaque séance. Je sais exactement ce que mon fils a travaillé et où il bloque encore.",
    detail: "Parent d'un élève de 6ème année",
    rating: 5,
    sortOrder: 2,
  },
  {
    id: 3,
    authorName: "Nadia L.",
    authorRole: "tutor",
    city: "Marrakech",
    quote:
      "En 6 mois sur INCLASS j'ai construit un planning de 18 heures par semaine. Les paiements arrivent à l'heure, et je choisis mes élèves.",
    detail: "Professeure de physique-chimie",
    rating: 5,
    sortOrder: 3,
  },
  {
    id: 4,
    authorName: "Imane K.",
    authorRole: "student",
    city: "Tanger",
    quote:
      "Les cours en ligne le soir m'ont sauvée pendant la prépa. Zéro déplacement et un prof d'anglais qui m'a fait passer le TOEFL à 98.",
    detail: "Anglais · Préparation TOEFL",
    rating: 5,
    sortOrder: 4,
  },
];

const FALLBACK_TUTORS: Tutor[] = [
  {
    id: 1,
    slug: "mehdi-a",
    fullName: "Mehdi A.",
    headline: "Ingénieur EMI · 8 ans d'expérience en maths Bac & prépa",
    bio: "Méthode par objectifs : diagnostic, fiches, exercices type examen et corrections détaillées.",
    city: "Casablanca",
    subjectSlug: "mathematiques",
    subjectLabel: "Mathématiques",
    levels: "1ère Bac · 2ème Bac · Prépa",
    languages: "Arabe · Français",
    mode: "both",
    pricePerHour: 180,
    rating: "4.9",
    reviews: 214,
    lessons: 1890,
    verified: true,
    initials: "MA",
  },
  {
    id: 2,
    slug: "sara-h",
    fullName: "Sara H.",
    headline: "Professeure agrégée de français, spécialiste des oraux",
    bio: "Expression écrite, méthodologie du commentaire et confiance à l'oral.",
    city: "Rabat",
    subjectSlug: "francais",
    subjectLabel: "Français",
    levels: "Collège · Lycée",
    languages: "Français · Anglais",
    mode: "online",
    pricePerHour: 150,
    rating: "5.0",
    reviews: 132,
    lessons: 940,
    verified: true,
    initials: "SH",
  },
  {
    id: 3,
    slug: "omar-b",
    fullName: "Omar B.",
    headline: "Docteur en physique · pédagogie expérimentale",
    bio: "Comprendre avant d'appliquer : chaque notion part d'une expérience concrète.",
    city: "Marrakech",
    subjectSlug: "physique-chimie",
    subjectLabel: "Physique-Chimie",
    levels: "Lycée · Supérieur",
    languages: "Arabe · Français · Anglais",
    mode: "home",
    pricePerHour: 200,
    rating: "4.8",
    reviews: 98,
    lessons: 720,
    verified: true,
    initials: "OB",
  },
  {
    id: 4,
    slug: "hajar-z",
    fullName: "Hajar Z.",
    headline: "Coach anglais IELTS/TOEFL · certifiée Cambridge",
    bio: "Conversation dès le premier cours, préparation ciblée aux tests internationaux.",
    city: "Tanger",
    subjectSlug: "anglais",
    subjectLabel: "Anglais",
    levels: "Lycée · Adultes",
    languages: "Anglais · Français",
    mode: "online",
    pricePerHour: 160,
    rating: "4.9",
    reviews: 176,
    lessons: 1320,
    verified: true,
    initials: "HZ",
  },
  {
    id: 5,
    slug: "anas-t",
    fullName: "Anas T.",
    headline: "Développeur senior · Python, algorithmique et projets",
    bio: "Du premier script au projet déployé, adapté aux lycéens et étudiants.",
    city: "Casablanca",
    subjectSlug: "informatique",
    subjectLabel: "Informatique & Code",
    levels: "Lycée · Supérieur · Adultes",
    languages: "Français · Anglais",
    mode: "online",
    pricePerHour: 220,
    rating: "4.9",
    reviews: 87,
    lessons: 560,
    verified: true,
    initials: "AT",
  },
  {
    id: 6,
    slug: "fatima-ezzahra-m",
    fullName: "Fatima Ezzahra M.",
    headline: "Institutrice · soutien primaire et méthodologie",
    bio: "Lecture, calcul et confiance en soi, avec des séances ludiques de 45 minutes.",
    city: "Fès",
    subjectSlug: "soutien-primaire",
    subjectLabel: "Soutien primaire",
    levels: "Primaire",
    languages: "Arabe · Français",
    mode: "home",
    pricePerHour: 110,
    rating: "5.0",
    reviews: 143,
    lessons: 1010,
    verified: true,
    initials: "FM",
  },
  {
    id: 7,
    slug: "khalid-r",
    fullName: "Khalid R.",
    headline: "Professeur de SVT · préparation concours médecine",
    bio: "Fiches de synthèse, QCM chronométrés et suivi hebdomadaire.",
    city: "Agadir",
    subjectSlug: "svt",
    subjectLabel: "SVT",
    levels: "2ème Bac · Concours",
    languages: "Arabe · Français",
    mode: "both",
    pricePerHour: 170,
    rating: "4.8",
    reviews: 64,
    lessons: 430,
    verified: true,
    initials: "KR",
  },
  {
    id: 8,
    slug: "loubna-s",
    fullName: "Loubna S.",
    headline: "Professeure d'arabe · grammaire et expression",
    bio: "Approche vivante de la langue arabe, du collège au niveau avancé.",
    city: "Meknès",
    subjectSlug: "arabe",
    subjectLabel: "Arabe",
    levels: "Primaire · Collège · Lycée",
    languages: "Arabe · Français",
    mode: "both",
    pricePerHour: 120,
    rating: "4.9",
    reviews: 71,
    lessons: 505,
    verified: true,
    initials: "LS",
  },
];

function parseSubjectTranslations(rawName: string, nameTranslations?: string | null): string {
  if (nameTranslations) {
    try {
      const parsed = typeof nameTranslations === "string" ? JSON.parse(nameTranslations) : nameTranslations;
      if (parsed?.fr) return parsed.fr;
    } catch {
      // ignore
    }
  }
  return rawName;
}

type ApiSubject = {
  id: number;
  name: string;
  name_translations?: string | null;
  slug: string;
  icon?: string;
  color?: string;
  category_id?: number;
  is_featured?: boolean;
  is_popular?: boolean;
  tutors_count?: number;
};

type ApiTutor = {
  id: string;
  first_name?: string;
  last_name?: string;
  full_name?: string;
  avatar_url?: string | null;
  bio?: string | null;
  headline?: string | null;
  professional_title?: string | null;
  is_verified?: boolean;
  city?: { id?: number; name?: string } | null;
  years_of_experience?: number | null;
  base_hourly_rate?: string | number | null;
  subjects?: Array<{ id?: number; name?: string; icon?: string; slug?: string }>;
  languages?: Array<{ name?: string; native_name?: string; code?: string }>;
  teaching_modes?: Array<{ id?: number; code?: string; name?: string }>;
  stats?: {
    average_rating?: number | null;
    total_reviews?: number | null;
    completed_sessions?: number | null;
  } | null;
};

function toCard(row: Subject): SubjectCard {
  return {
    slug: row.slug,
    name: row.name,
    icon: row.icon,
    category: row.category,
    learners: row.learners,
    tutorsCount: row.tutorsCount,
    popular: row.popular,
  };
}

function mapApiSubjectToCard(item: ApiSubject): SubjectCard {
  const frenchName = parseSubjectTranslations(item.name, item.name_translations);
  const categoryMap: Record<number, string> = {
    12: "Langues",
    3: "Sciences",
    8: "Économie & Gestion",
    23: "Concours & Prépa",
    34: "Informatique",
    43: "Arts & Musique",
    7: "Ingénierie",
    9: "Santé & Médecine",
    5: "Sciences Humaines",
    41: "Développement Personnel",
    36: "Design & Création",
    10: "Droit",
  };

  return {
    slug: item.slug,
    name: frenchName,
    icon: item.icon || "book",
    category: (item.category_id && categoryMap[item.category_id]) || "Scolaire",
    learners: (item.tutors_count || 1) * 35 + item.id * 14,
    tutorsCount: item.tutors_count || (item.is_popular ? 28 : 8),
    popular: Boolean(item.is_popular || item.is_featured),
  };
}

function mapApiTutorToTutor(item: ApiTutor): Tutor {
  const firstName = item.first_name || "";
  const lastName = item.last_name || "";
  const initials = `${firstName[0] || "I"}${lastName[0] || "C"}`.toUpperCase();
  const sub = item.subjects?.[0];
  const subjectName = sub?.name || "Mathématiques";
  const subjectSlug = sub?.slug || subjectName.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  const hasOnline = item.teaching_modes?.some((m) => m.code === "online");
  const hasInPerson = item.teaching_modes?.some(
    (m) => m.code === "in_person" || m.code === "at_student" || m.code === "at_tutor",
  );
  const mode = hasOnline && hasInPerson ? "both" : hasOnline ? "online" : "home";

  const rate = item.base_hourly_rate ? Math.round(Number(item.base_hourly_rate)) : 150;
  const ratingNum = item.stats?.average_rating ? Number(item.stats.average_rating) : 0;
  const rating = ratingNum > 0 ? ratingNum.toFixed(1) : "5.0";

  return {
    id: item.id as unknown as number,
    slug: item.id,
    fullName: item.full_name || `${firstName} ${lastName}`.trim() || "Professeur INCLASS",
    headline: item.headline || item.professional_title || "Professeur particulier expérimenté",
    bio:
      item.bio ||
      "Pédagogie adaptée, explications claires et préparation ciblée aux examens et contrôles continus.",
    city: item.city?.name || "Casablanca",
    subjectSlug,
    subjectLabel: subjectName,
    levels: item.years_of_experience
      ? `${item.years_of_experience} ans d'exp.`
      : "Collège · Lycée",
    languages:
      item.languages?.map((l) => l.native_name || l.name).filter(Boolean).join(" · ") ||
      "Arabe · Français",
    mode,
    pricePerHour: rate,
    rating,
    reviews: item.stats?.total_reviews || (item.is_verified ? 14 : 5),
    lessons:
      item.stats?.completed_sessions ||
      (item.years_of_experience ? item.years_of_experience * 110 : 260),
    verified: Boolean(item.is_verified),
    initials,
  };
}

export async function getSubjects(): Promise<SubjectCard[]> {
  try {
    const res = await fetch("https://api.inclass.app/api/catalog/subjects", {
      next: { revalidate: 300 },
    });
    if (res.ok) {
      const json = await res.json();
      if (Array.isArray(json?.data) && json.data.length > 0) {
        return json.data.map(mapApiSubjectToCard);
      }
    }
  } catch {
    // API fallback
  }

  try {
    const rows = await db.select().from(subjects).orderBy(asc(subjects.sortOrder));
    if (rows.length) return rows.map(toCard);
  } catch {
    // table fallback
  }
  return FALLBACK_SUBJECTS;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const rows = await db.select().from(testimonials).orderBy(asc(testimonials.sortOrder));
    if (rows.length) return rows;
  } catch {
    // ignore
  }
  return FALLBACK_TESTIMONIALS;
}

export type TutorFilters = {
  subject?: string;
  city?: string;
  mode?: string;
  q?: string;
  limit?: number;
};

export async function getTutors(filters: TutorFilters = {}): Promise<Tutor[]> {
  const { subject, city, mode, q, limit = 24 } = filters;

  let allTutors: Tutor[] = [];

  try {
    const res = await fetch("https://api.inclass.app/api/tutors", {
      next: { revalidate: 300 },
    });
    if (res.ok) {
      const json = await res.json();
      if (Array.isArray(json?.data) && json.data.length > 0) {
        allTutors = json.data.map(mapApiTutorToTutor);
      }
    }
  } catch {
    // API fallback
  }

  if (!allTutors.length) {
    try {
      const where: SQL[] = [];
      if (subject) where.push(eq(tutors.subjectSlug, subject));
      if (city) where.push(eq(tutors.city, city));
      if (mode && mode !== "all") {
        const modeFilter = or(eq(tutors.mode, mode), eq(tutors.mode, "both"));
        if (modeFilter) where.push(modeFilter);
      }
      if (q) {
        const search = or(
          ilike(tutors.fullName, `%${q}%`),
          ilike(tutors.headline, `%${q}%`),
          ilike(tutors.subjectLabel, `%${q}%`),
        );
        if (search) where.push(search);
      }

      const rows = await db
        .select()
        .from(tutors)
        .where(where.length ? and(...where) : undefined)
        .orderBy(desc(tutors.reviews))
        .limit(limit);
      if (rows.length) return rows;
      if (where.length) return [];
    } catch {
      // ignore
    }
    allTutors = FALLBACK_TUTORS;
  }

  return allTutors
    .filter((t) => {
      if (subject && t.subjectSlug !== subject && !t.subjectLabel.toLowerCase().includes(subject.toLowerCase()))
        return false;
      if (city && t.city.toLowerCase() !== city.toLowerCase()) return false;
      if (mode && mode !== "all" && t.mode !== mode && t.mode !== "both") return false;
      if (
        q &&
        !`${t.fullName} ${t.headline} ${t.subjectLabel} ${t.city}`.toLowerCase().includes(q.toLowerCase())
      )
        return false;
      return true;
    })
    .slice(0, limit);
}

export async function getTutorBySlug(slug: string): Promise<Tutor | null> {
  try {
    const list = await getTutors({ limit: 100 });
    const found = list.find((t) => String(t.slug) === slug || String(t.id) === slug);
    if (found) return found;
  } catch {
    // ignore
  }

  try {
    const rows = await db.select().from(tutors).where(eq(tutors.slug, slug)).limit(1);
    if (rows[0]) return rows[0];
  } catch {
    // ignore
  }
  return (
    FALLBACK_TUTORS.find((t) => String(t.slug) === slug || String(t.id) === slug) ?? null
  );
}
