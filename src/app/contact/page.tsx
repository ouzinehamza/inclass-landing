import type { Metadata } from "next";
import ContactView from "@/components/pages/contact-view";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Contact & Conseil personnalisé",
  description:
    "Une question sur les cours particuliers INCLASS ? Écris-nous, appelle-nous ou passe par WhatsApp. Réponse garantie sous 24 heures ouvrées.",
};

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

function one(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function ContactPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const tutor = one(params.tutor);
  const subject = one(params.subject);

  return (
    <ContactView
      initialSubject={subject}
      initialTutor={tutor}
    />
  );
}
