import type { Metadata } from "next";
import AboutView from "@/components/pages/about-view";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "INCLASS est la marketplace marocaine du cours particulier basée à Agadir. Notre mission : rendre le soutien scolaire de qualité accessible partout au Maroc.",
};

export default function AboutPage() {
  return <AboutView />;
}
