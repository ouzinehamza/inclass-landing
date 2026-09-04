import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TutorDetailView from "@/components/pages/tutor-detail-view";
import { getTutorBySlug, getTutors } from "@/lib/data";

export const dynamic = "force-dynamic";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const tutor = await getTutorBySlug(slug);
  if (!tutor) return { title: "Professeur introuvable" };
  return {
    title: `${tutor.fullName} — ${tutor.subjectLabel} à ${tutor.city}`,
    description: tutor.headline,
  };
}

export default async function TutorProfilePage({ params }: { params: Params }) {
  const { slug } = await params;
  const tutor = await getTutorBySlug(slug);
  if (!tutor) notFound();

  const similar = (await getTutors({ subject: tutor.subjectSlug, limit: 4 })).filter(
    (t) => t.slug !== tutor.slug,
  );

  return <TutorDetailView tutor={tutor} similar={similar} />;
}
