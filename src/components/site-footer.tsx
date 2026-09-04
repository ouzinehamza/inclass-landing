"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { FALLBACK_SUBJECTS, CITIES, LEVELS } from "@/content/site";
import { LogoLockup, MoroccoFlag, WhatsAppIcon } from "./icons";
import { useI18n } from "@/i18n";
import { getLocalizedSubject } from "@/lib/subject-translations";

const COLUMN_TONE = [
  "text-tutor-300",
  "text-student-300",
  "text-parent-300",
  "text-cream",
];

const LINK_CLASS = "transition-colors duration-200 hover:text-white";

export default function SiteFooter() {
  const { dict, locale } = useI18n();

  const subjectGroups = [
    {
      label: "Scientifiques",
      items: FALLBACK_SUBJECTS.filter((s) => s.category === "Scientifique"),
    },
    {
      label: "Langues",
      items: FALLBACK_SUBJECTS.filter((s) => s.category === "Langues"),
    },
    {
      label: "Autres matières",
      items: FALLBACK_SUBJECTS.filter(
        (s) => s.category !== "Scientifique" && s.category !== "Langues"
      ),
    },
  ];

  const footerColumns = [
    {
      title: dict.common.students,
      links: [
        { label: dict.megaMenu.studentLink1, href: "/comment-ca-marche/eleves" },
        { label: dict.megaMenu.studentLink2, href: "/contact" },
        { label: dict.megaMenu.studentLink4, href: "/comment-ca-marche/eleves" },
        { label: dict.megaMenu.studentLink3, href: "/comment-ca-marche/eleves" },
        { label: dict.megaMenu.studentLink5, href: "/comment-ca-marche/eleves#parents" },
      ],
    },
    {
      title: dict.common.tutors,
      links: [
        { label: dict.megaMenu.tutorLink1, href: "/comment-ca-marche/profs" },
        { label: dict.megaMenu.tutorLink2, href: "/comment-ca-marche/profs#commissions" },
        { label: dict.megaMenu.tutorLink3, href: "/comment-ca-marche/profs#candidature" },
        { label: dict.megaMenu.tutorLink4, href: "/comment-ca-marche/profs#faq" },
      ],
    },
    {
      title: dict.common.parents,
      links: [
        { label: dict.megaMenu.parentLink1, href: "/comment-ca-marche/eleves#parents" },
        { label: dict.megaMenu.parentLink2, href: "/comment-ca-marche/eleves#suivi" },
        { label: dict.megaMenu.parentLink3, href: "/a-propos#confiance" },
        { label: dict.megaMenu.parentLink4, href: "/comment-ca-marche/eleves#faq" },
      ],
    },
    {
      title: dict.common.brandName,
      links: [
        { label: dict.nav.about, href: "/a-propos" },
        { label: dict.nav.resources, href: "/ressources" },
        { label: dict.nav.contact, href: "/contact" },
        { label: dict.faq.eyebrow, href: "/#faq" },
      ],
    },
  ];

  return (
    <footer className="w-full">
      {/* =========================================================
          DISCOVERY / SEO FOOTER LINKS (LIGHT SURFACE)
         ========================================================= */}
      <section className="w-full border-t border-line bg-sand/70 px-4 py-14 dark:border-white/10 dark:bg-white/[0.03] sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="text-lg font-bold text-ink dark:text-white">
            {dict.footer.subjectsTitle}
          </h2>

          {/* SUBJECTS */}
          <div className="mt-8 grid w-full gap-10 text-sm sm:grid-cols-2 lg:grid-cols-3">
            {subjectGroups.map((group) => (
              <div key={group.label} className="min-w-0">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-ink-soft dark:text-white/50">
                  {group.label}
                </p>

                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {group.items.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/contact?subject=${encodeURIComponent(s.name)}`}
                      className={`${LINK_CLASS} truncate text-ink-soft dark:text-white/60`}
                    >
                      {getLocalizedSubject(s.slug, locale, s.name)}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* DISCOVERY COLUMNS */}
          <div className="mt-12 grid w-full gap-10 border-t border-line pt-10 text-sm dark:border-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {/* HOME */}
            <div className="min-w-0">
              <p className="mb-4 font-bold text-ink dark:text-white">
                {dict.footer.homeCoursesTitle}
              </p>

              <div className="grid grid-cols-1 gap-2">
                {CITIES.slice(0, 8).map((city) => (
                  <Link
                    key={city}
                    href={`/contact?city=${encodeURIComponent(city)}`}
                    className={`${LINK_CLASS} truncate text-ink-soft dark:text-white/60`}
                  >
                    {dict.footer.tutorInCity} {city}
                  </Link>
                ))}
              </div>
            </div>

            {/* ONLINE */}
            <div className="min-w-0">
              <p className="mb-4 font-bold text-ink dark:text-white">
                {dict.footer.onlineCoursesTitle}
              </p>

              <ul className="space-y-2 text-ink-soft dark:text-white/60">
                {FALLBACK_SUBJECTS.slice(0, 8).map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/contact?subject=${encodeURIComponent(s.name)}`}
                      className={`${LINK_CLASS} truncate`}
                    >
                      {getLocalizedSubject(s.slug, locale, s.name)} ({dict.footer.onlineSubject})
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* LEVELS */}
            <div className="min-w-0">
              <p className="mb-4 font-bold text-ink dark:text-white">
                {dict.footer.levelsTitle}
              </p>

              <ul className="space-y-2 text-ink-soft dark:text-white/60">
                {LEVELS.map((level) => (
                  <li key={level}>
                    <Link
                      href="/comment-ca-marche/eleves"
                      className={`${LINK_CLASS} truncate`}
                    >
                      {level}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* EXAMS */}
            <div className="min-w-0">
              <p className="mb-4 font-bold text-ink dark:text-white">
                {dict.footer.examsTitle}
              </p>

              <ul className="space-y-2 text-ink-soft dark:text-white/60">
                {[
                  "Baccalauréat national",
                  "Concours médecine",
                  "Concours ingénieurs (CNC)",
                  "TCF / DELF",
                  "IELTS & TOEFL",
                  "Régional 1ère Bac",
                ].map((label) => (
                  <li key={label}>
                    <Link
                      href="/contact"
                      className={`${LINK_CLASS} truncate hover:text-parent-600 dark:hover:text-parent-300`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN BRAND FOOTER (DARK SURFACE)
         ========================================================= */}
      <section className="relative overflow-hidden bg-ink px-4 py-16 text-cream dark:bg-black sm:px-6 lg:px-8">
        <div className="relative mx-auto w-full max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
            {/* BRAND COLUMN */}
            <div className="flex flex-col justify-between">
              <Link href="/" className="inline-block">
                <LogoLockup
                  markClassName="h-10 w-10 text-white"
                  textClassName="text-2xl font-extrabold tracking-tight"
                />
              </Link>

              <p className="mt-5 text-sm leading-7 text-cream/65">
                {dict.footer.tagline}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-student-600 px-5 py-2.5 text-xs font-bold text-white transition-transform hover:scale-[1.02]"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>{dict.common.requestTutor}</span>
                </Link>
                <a
                  href="https://wa.me/212600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-white/20"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>{dict.common.whatsappSupport}</span>
                </a>
              </div>
            </div>

            {/* FOOTER LINKS */}
            <div className="grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {footerColumns.map((col, idx) => (
                <div key={col.title}>
                  <p
                    className={`text-xs font-bold uppercase tracking-[0.2em] ${
                      COLUMN_TONE[idx % COLUMN_TONE.length]
                    }`}
                  >
                    {col.title}
                  </p>

                  <ul className="mt-4 space-y-2.5 text-sm">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-cream/70 transition-colors hover:text-cream"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CONTACT & OFFICE ROW */}
          <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-10 text-xs text-cream/70">
            <div className="flex flex-wrap items-center gap-6">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-student-300" />
                <span>{dict.footer.officeAgadir}</span>
              </span>
              <a
                href="tel:+212528000000"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 text-tutor-300" />
                <span>+212 5 28 00 00 00</span>
              </a>
              <a
                href="mailto:salam@inclass.app"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-parent-300" />
                <span>salam@inclass.app</span>
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MoroccoFlag className="h-4 w-6 rounded-sm shadow-sm" />
              <span>{dict.footer.marocAll}</span>
            </div>
          </div>

          {/* BOTTOM COPYRIGHT */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-8 text-[11px] text-cream/50">
            <p>{dict.footer.copyright}</p>

            <div className="flex gap-5">
              <Link href="/a-propos" className="hover:underline">
                {dict.footer.legalNotice}
              </Link>
              <Link href="/a-propos" className="hover:underline">
                {dict.footer.privacy}
              </Link>
              <Link href="/a-propos" className="hover:underline">
                {dict.footer.terms}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}