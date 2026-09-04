"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronRight, Minus, Plus } from "lucide-react";

import { SubjectIcon } from "./icons";
import { RollingNumber } from "@/components/gsap/rolling-number";
import type { SubjectCard } from "@/lib/data";
import { useI18n } from "@/i18n";
import { getLocalizedSubject } from "@/lib/subject-translations";

export default function SubjectGrid({
  items,
}: {
  items: SubjectCard[];
}) {
  const [expanded, setExpanded] = useState(false);
  const { dict, locale, isRTL } = useI18n();

  const visible = expanded ? items : items.slice(0, 8);

  return (
    <div className="w-full">
      {/* Subjects Grid */}
      <div
        data-anim-stagger
        className="
          grid
          grid-cols-2
          gap-3
          sm:grid-cols-2
          sm:gap-4
          lg:grid-cols-3
          lg:gap-5
        "
      >
        {visible.map((subject) => (
          <Link
            key={subject.slug}
            data-anim-child
            href={`/contact?subject=${encodeURIComponent(subject.name)}`}
            className="
              group
              relative
              flex
              min-h-[150px]
              flex-col
              items-center
              justify-center
              overflow-hidden
              rounded-[22px]
              border
              bg-white
              px-4
              py-6
              text-center
              transition-all
              duration-300
              hover:-translate-y-1.5
              hover:border-ink/10
              hover:shadow-[0_16px_40px_rgba(0,0,0,0.09)]
              dark:bg-ink-800
              dark:hover:border-white/20
              dark:hover:shadow-[0_16px_40px_rgba(0,0,0,0.28)]

              sm:min-h-[130px]
              sm:flex-row
              sm:justify-start
              sm:gap-5
              sm:px-5
              sm:py-5
              sm:text-left
              rtl:sm:text-right

              lg:min-h-[145px]
              lg:gap-6
              lg:px-6
              lg:py-6
            "
          >
            {/* ICON */}
            <span
              className="
                flex
                h-[76px]
                w-[76px]
                shrink-0
                items-center
                justify-center
                bg-transparent

                sm:h-[82px]
                sm:w-[82px]

                lg:h-[92px]
                lg:w-[92px]
              "
            >
              <SubjectIcon
                name={subject.icon}
                className="
                  h-14
                  w-14
                  shrink-0
                  text-ink
                  transition-all
                  duration-300
                  group-hover:scale-110
                  dark:text-white

                  sm:h-16
                  sm:w-16

                  lg:h-[72px]
                  lg:w-[72px]
                "
              />
            </span>

            {/* Subject Info */}
            <span className="min-w-0 max-w-full flex-1">
              <span
                className="
                  block
                  truncate
                  text-[15px]
                  font-extrabold
                  leading-tight
                  text-ink
                  dark:text-white

                  sm:text-[17px]

                  lg:text-[18px]
                "
              >
                {getLocalizedSubject(subject.slug, locale, subject.name)}
              </span>

              <span
                className="
                  mt-1
                  block
                  truncate
                  text-[11px]
                  font-medium
                  leading-relaxed
                  text-ink-soft
                  dark:text-white/55

                  sm:text-[13px]

                  lg:text-[14px]
                "
              >
                <RollingNumber targetNumber={subject.tutorsCount.toLocaleString("fr-MA")} height={18} /> {dict.subjectsSection.tutorsWord} ·{" "}
                <RollingNumber targetNumber={subject.learners.toLocaleString("fr-MA")} height={18} /> {dict.subjectsSection.studentsWord}
              </span>
            </span>

            {/* Arrow */}
            <span
              className="
                absolute
                right-2
                rtl:right-auto
                rtl:left-2
                top-2
                grid
                h-7
                w-7
                place-items-center
                rounded-full
                bg-ink/[0.04]
                transition-all
                duration-300
                group-hover:translate-x-1
                rtl:group-hover:-translate-x-1
                group-hover:bg-ink
                dark:bg-white/[0.06]
                dark:group-hover:bg-white

                sm:right-3
                rtl:sm:right-auto
                rtl:sm:left-3
                sm:top-3

                lg:relative
                lg:right-auto
                lg:left-auto
                lg:top-auto
                lg:h-10
                lg:w-10
              "
            >
              <ChevronRight
                className={`
                  h-4
                  w-4
                  text-ink/40
                  transition-colors
                  duration-300
                  group-hover:text-white
                  dark:text-white/40
                  dark:group-hover:text-ink

                  lg:h-5
                  lg:w-5
                  ${isRTL ? "rotate-180" : ""}
                `}
              />
            </span>
          </Link>
        ))}
      </div>

      {/* Show More / Less */}
      {items.length > 8 ? (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="
              mt-8
              inline-flex
              items-center
              gap-2.5
              rounded-full
              border
              border-line
              bg-white
              px-6
              py-3
              text-sm
              font-bold
              text-ink
              shadow-sm
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-sand
              hover:shadow-md
              dark:border-white/15
              dark:bg-white/[0.06]
              dark:text-white
              dark:hover:bg-white/[0.12]
            "
          >
            {expanded ? (
              <Minus className="h-4 w-4" />
            ) : (
              <Plus className="h-4 w-4" />
            )}

            <span>
              {expanded
                ? dict.subjectsSection.showLess
                : `${dict.subjectsSection.showMore} (${items.length - 8})`}
            </span>
          </button>
        </div>
      ) : null}
    </div>
  );
}