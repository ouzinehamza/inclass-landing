import type { Metadata } from "next";
import { getArticles } from "@/lib/articles";
import ResourcesView from "@/components/pages/resources-view";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Ressources & conseils pédagogiques",
  description:
    "Guides de révision, orientation, conseils aux parents et bonnes pratiques pour les professeurs : le blog d'INCLASS.",
};

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export default async function ResourcesPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const raw = params.categorie;
  const category = (Array.isArray(raw) ? raw[0] : raw) ?? "";
  const all = await getArticles();
  const list = category ? all.filter((a) => a.category === category) : all;

  return <ResourcesView articles={list} selectedCategory={category} />;
}
