import type { Metadata } from "next";
import HowItWorksView from "@/components/pages/how-it-works-view";

export const metadata: Metadata = {
  title: "Comment ça marche — Le guide complet INCLASS",
  description:
    "Découvre le fonctionnement d'INCLASS pour les élèves, les parents et les professeurs. Cours particuliers vérifiés partout au Maroc, en ligne ou à domicile.",
};

export default function HowItWorksIndexPage() {
  return <HowItWorksView />;
}
