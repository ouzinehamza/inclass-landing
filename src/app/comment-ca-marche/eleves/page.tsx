import type { Metadata } from "next";
import { getSubjects } from "@/lib/data";
import ElevesView from "@/components/pages/eleves-view";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Comment ça marche pour les élèves et les parents",
  description:
    "Trouver un prof, réserver un cours, suivre les progrès : découvre le fonctionnement d'INCLASS côté élèves et parents. 100% gratuit et sans abonnement.",
};

export default async function StudentsHowItWorksPage() {
  const subjects = await getSubjects();

  return <ElevesView subjects={subjects} />;
}
