"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

type RollingTextProps = {
  text?: string;
  children?: React.ReactNode;
  className?: string;
  duration?: number;
  stagger?: number;
};

export const RollingText = ({
  text,
  children,
  className,
  duration = 0.36,
  stagger = 0.015,
}: RollingTextProps) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const content = text || (typeof children === "string" ? children : "");

  // Arabic characters must never be split character-by-character to preserve cursive script
  const isArabic = /[\u0600-\u06FF]/.test(content);

  useGSAP(
    () => {
      if (!content || !containerRef.current) return;

      const parent =
        containerRef.current.closest<HTMLElement>("button, a, .group, [role='button']") ||
        containerRef.current;

      const topChars = containerRef.current.querySelectorAll(".roll-char-top");
      const bottomChars = containerRef.current.querySelectorAll(".roll-char-bottom");

      if (!topChars.length || !bottomChars.length) return;

      const activeStagger = isArabic ? 0.04 : stagger;

      const handleEnter = () => {
        gsap.to(topChars, {
          yPercent: -100,
          duration,
          stagger: activeStagger,
          ease: "power3.out",
          overwrite: "auto",
        });
        gsap.to(bottomChars, {
          yPercent: -100,
          duration,
          stagger: activeStagger,
          ease: "power3.out",
          overwrite: "auto",
        });
      };

      const handleLeave = () => {
        gsap.to(topChars, {
          yPercent: 0,
          duration,
          stagger: activeStagger,
          ease: "power3.out",
          overwrite: "auto",
        });
        gsap.to(bottomChars, {
          yPercent: 0,
          duration,
          stagger: activeStagger,
          ease: "power3.out",
          overwrite: "auto",
        });
      };

      parent.addEventListener("mouseenter", handleEnter);
      parent.addEventListener("mouseleave", handleLeave);

      return () => {
        parent.removeEventListener("mouseenter", handleEnter);
        parent.removeEventListener("mouseleave", handleLeave);
      };
    },
    { dependencies: [content, duration, stagger, isArabic] },
  );

  if (!content) {
    return <span className={className}>{children}</span>;
  }

  if (isArabic) {
    const words = content.split(" ");
    return (
      <span
        ref={containerRef}
        dir="rtl"
        className={cn(
          "relative inline-flex items-center whitespace-nowrap overflow-hidden select-none",
          className,
        )}
      >
        {words.map((word, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span className="inline-block">&nbsp;</span>}
            <span className="relative inline-flex flex-col overflow-hidden">
              <span
                className="roll-char-top inline-block"
                style={{ willChange: "transform" }}
              >
                {word}
              </span>
              <span
                aria-hidden="true"
                className="roll-char-bottom absolute top-full start-0 inline-block"
                style={{ willChange: "transform" }}
              >
                {word}
              </span>
            </span>
          </React.Fragment>
        ))}
      </span>
    );
  }

  const chars = content.split("");

  return (
    <span
      ref={containerRef}
      className={cn(
        "relative inline-flex items-center whitespace-nowrap overflow-hidden select-none",
        className,
      )}
    >
      {chars.map((char, i) => (
        <span key={i} className="relative inline-flex flex-col overflow-hidden">
          <span
            className="roll-char-top inline-block"
            style={{ willChange: "transform" }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
          <span
            aria-hidden="true"
            className="roll-char-bottom absolute top-full left-0 inline-block"
            style={{ willChange: "transform" }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ))}
    </span>
  );
};
