export interface ArticleItem {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  body?: string | null;
  category: string;
  audience: string;
  author: string;
  readMinutes: number;
  cover: string;
  featured?: boolean | null;
  publishedAt: Date;
}

export const ARTICLE_CATEGORIES = [
  "Guide Étudiant",
  "Guide Tuteur",
  "Fonctionnalités",
  "Méthodologie",
  "Parents",
  "Examens",
];

export function getDefaultArticleSections() {
  return [
    {
      heading: "1. Comprendre les attentes et le cadre",
      paragraphs: [
        "Chaque matière et chaque niveau exigent une méthode d'apprentissage spécifique. Avant de commencer les révisions, prenez le temps de structurer votre planning hebdomadaire.",
        "La régularité prime sur l'intensité : 45 minutes par jour d'exercices ciblés sont nettement plus efficaces qu'une session de 6 heures le week-end.",
      ],
    },
    {
      heading: "2. Les erreurs fréquentes à éviter",
      paragraphs: [
        "Ne pas faire d'annales corrigées en conditions réelles d'examen est l'erreur numéro un.",
        "N'hésitez pas à solliciter votre professeur particulier pour débriefer chaque erreur et transformer les incompréhensions en points forts.",
      ],
    },
    {
      heading: "3. Conseils pratiques et plan d'action",
      paragraphs: [
        "Faites des fiches synthétiques avec formules clés et définitions indispensables.",
        "Fixez-vous des objectifs hebdomadaires clairs et mesurez votre progression avec des évaluations régulières.",
      ],
    },
  ];
}
