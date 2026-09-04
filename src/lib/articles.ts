import { desc, eq } from "drizzle-orm";
import { db } from "@/db";
import { articles, type Article } from "@/db/schema";

export const ARTICLE_CATEGORIES = [
  "Guide Étudiant",
  "Guide Tuteur",
  "Fonctionnalités",
  "Méthodologie",
  "Parents",
  "Examens",
];

const FALLBACK: Article[] = [
  {
    id: 1,
    slug: "reussir-le-bac-national-plan-revision",
    title: "Réussir le Bac national : le plan de révision des 12 dernières semaines",
    excerpt:
      "Un rétroplanning réaliste, matière par matière, pour aborder le national sans paniquer et sans sacrifier ton sommeil.",
    body: "",
    category: "Examens",
    audience: "student",
    author: "Sara H., professeure agrégée",
    readMinutes: 8,
    cover: "/images/hero-student.jpg",
    featured: true,
    publishedAt: new Date("2026-01-12"),
  },
  {
    id: 2,
    slug: "choisir-un-prof-particulier-au-maroc",
    title: "Comment choisir un prof particulier au Maroc : 7 critères qui comptent vraiment",
    excerpt:
      "Diplôme, expérience, feeling, tarif : le guide pour les parents qui veulent éviter les mauvaises surprises.",
    body: "",
    category: "Parents",
    audience: "parent",
    author: "Équipe INCLASS",
    readMinutes: 6,
    cover: "/images/parents.jpg",
    featured: true,
    publishedAt: new Date("2026-01-05"),
  },
  {
    id: 3,
    slug: "fixer-son-tarif-horaire-prof-particulier",
    title: "Professeurs : comment fixer un tarif horaire juste (et le défendre)",
    excerpt:
      "Grille de prix par matière, par ville et par niveau, plus la méthode pour augmenter sans perdre tes élèves.",
    body: "",
    category: "Professeurs",
    audience: "tutor",
    author: "Amine M., Head of Tutors",
    readMinutes: 7,
    cover: "/images/become-tutor.jpg",
    featured: false,
    publishedAt: new Date("2025-12-18"),
  },
  {
    id: 4,
    slug: "methode-pomodoro-lyceens",
    title: "La méthode Pomodoro adaptée aux lycéens marocains",
    excerpt:
      "25 minutes de travail, 5 de pause : comment structurer une soirée de révision efficace après une journée de cours.",
    body: "",
    category: "Méthodologie",
    audience: "student",
    author: "Équipe INCLASS",
    readMinutes: 5,
    cover: "/images/banner-resources.jpg",
    featured: false,
    publishedAt: new Date("2025-12-02"),
  },
  {
    id: 5,
    slug: "apres-le-bac-filieres-marocaines",
    title: "Après le Bac : panorama des filières marocaines et de leurs concours",
    excerpt:
      "CPGE, ENCG, médecine, ENSA, facultés : ce qu'il faut préparer dès la 1ère Bac pour ne rien rater.",
    body: "",
    category: "Orientation",
    audience: "student",
    author: "Soukaina L., cofondatrice",
    readMinutes: 10,
    cover: "/images/lesson-home.jpg",
    featured: false,
    publishedAt: new Date("2025-11-20"),
  },
  {
    id: 6,
    slug: "suivre-progres-enfant-sans-pression",
    title: "Suivre les progrès de son enfant sans mettre la pression",
    excerpt:
      "Les 5 indicateurs à regarder chaque mois, et les phrases à éviter avant un contrôle important.",
    body: "",
    category: "Parents",
    audience: "parent",
    author: "Hind N., support familles",
    readMinutes: 6,
    cover: "/images/hero-tutor.jpg",
    featured: false,
    publishedAt: new Date("2025-11-04"),
  },
];

const SECTIONS: { heading: string; paragraphs: string[] }[] = [
  {
    heading: "Pourquoi ça change tout",
    paragraphs: [
      "Sur INCLASS, nous accompagnons chaque semaine des milliers d'élèves marocains. Le constat est toujours le même : ce n'est pas le nombre d'heures de travail qui fait la différence, mais la régularité et la qualité du feedback reçu.",
      "Un professeur particulier bien choisi ne se contente pas de refaire le cours : il identifie les blocages précis, propose des exercices ciblés et vérifie la progression séance après séance.",
    ],
  },
  {
    heading: "La méthode en pratique",
    paragraphs: [
      "Commence par un diagnostic honnête du niveau actuel. Un test de 30 minutes suffit pour repérer les chapitres fragiles et éviter de perdre du temps sur ce qui est déjà acquis.",
      "Découpe ensuite l'objectif en blocs hebdomadaires. Deux séances d'une heure par semaine donnent de bien meilleurs résultats qu'une session marathon de trois heures le dimanche soir.",
      "Enfin, garde une trace écrite : fiche de synthèse après chaque séance, liste des erreurs récurrentes, et un point de contrôle mensuel avec le professeur et les parents.",
    ],
  },
  {
    heading: "Les erreurs à éviter",
    paragraphs: [
      "Changer de professeur toutes les trois semaines empêche de construire une relation pédagogique. Donne au moins un mois avant d'évaluer, sauf si le courant ne passe vraiment pas dès la première séance.",
      "Ne néglige pas non plus les matières « secondaires » : sur le Bac national, ce sont souvent elles qui font gagner ou perdre une mention.",
    ],
  },
];

export function articleSections() {
  return SECTIONS;
}

type ApiResource = {
  id: string;
  slug: string;
  type?: string;
  title: string;
  excerpt?: string | null;
  body_preview?: string | null;
  cover_image_url?: string | null;
  read_time_minutes?: number | null;
  language?: string | null;
  access_tier?: string | null;
  is_featured?: boolean;
  published_at?: string | null;
  view_count?: number;
  like_count?: number;
  tutor?: {
    id?: string;
    first_name?: string;
    last_name?: string;
  } | null;
  category?: {
    id?: number;
    name?: string;
    slug?: string;
  } | null;
  tags?: Array<{ id: number; name: string; slug: string }>;
};

function mapApiResourceToArticle(item: ApiResource): Article {
  const catName =
    item.category?.name ||
    item.tags?.[0]?.name ||
    (item.type === "guide" ? "Guide" : "Méthodologie");

  const isTutor =
    item.category?.slug?.toLowerCase().includes("tuteur") ||
    item.tags?.some((t) => t.slug === "tuteur" || t.name.toLowerCase().includes("tuteur"));
  const isParent =
    item.tags?.some((t) => t.slug === "parents" || t.name.toLowerCase().includes("parent"));
  const audience = isTutor ? "tutor" : isParent ? "parent" : "student";

  const authorName = item.tutor
    ? `${item.tutor.first_name || ""} ${item.tutor.last_name || ""}`.trim()
    : "Équipe INCLASS";

  const cleanPreview = item.body_preview
    ? item.body_preview.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").trim()
    : "";

  return {
    id: item.id as unknown as number,
    slug: item.slug,
    title: item.title,
    excerpt: item.excerpt || (cleanPreview ? cleanPreview.slice(0, 180) + "..." : ""),
    body: cleanPreview,
    category: catName,
    audience,
    author: authorName || "Équipe INCLASS",
    readMinutes: item.read_time_minutes || 5,
    cover: item.cover_image_url || "/images/banner-resources.jpg",
    featured: Boolean(item.is_featured || item.type === "guide"),
    publishedAt: new Date(item.published_at || Date.now()),
  };
}

export async function getArticles(category?: string): Promise<Article[]> {
  try {
    const res = await fetch("https://api.inclass.app/api/resources", {
      next: { revalidate: 300 },
    });
    if (res.ok) {
      const json = await res.json();
      if (Array.isArray(json?.data) && json.data.length > 0) {
        const list: Article[] = json.data.map(mapApiResourceToArticle);
        return category ? list.filter((a: Article) => a.category.toLowerCase() === category.toLowerCase()) : list;
      }
    }
  } catch {
    // API fallback
  }

  try {
    const rows = await db.select().from(articles).orderBy(desc(articles.publishedAt));
    if (rows.length) {
      return category ? rows.filter((r) => r.category.toLowerCase() === category.toLowerCase()) : rows;
    }
  } catch {
    // table not migrated yet
  }
  return category
    ? FALLBACK.filter((a) => a.category.toLowerCase() === category.toLowerCase())
    : FALLBACK;
}

export async function getArticle(slug: string): Promise<Article | null> {
  try {
    const all = await getArticles();
    const found = all.find((a) => a.slug === slug || String(a.id) === slug);
    if (found) return found;
  } catch {
    // ignore
  }

  try {
    const rows = await db.select().from(articles).where(eq(articles.slug, slug)).limit(1);
    if (rows[0]) return rows[0];
  } catch {
    // ignore
  }
  return FALLBACK.find((a) => a.slug === slug || String(a.id) === slug) ?? null;
}
