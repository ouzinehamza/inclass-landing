import type { Metadata } from "next";
import ProfsView from "@/components/pages/profs-view";

export const metadata: Metadata = {
  title: "Devenir professeur particulier",
  description:
    "Rejoins les 12 400 professeurs INCLASS : reçois des demandes d'élèves qualifiées, fixe ton tarif et sois payé après chaque cours.",
};

export default function TutorsHowItWorksPage() {
  return <ProfsView />;
}
