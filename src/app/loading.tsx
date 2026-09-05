"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Loading() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. Apparition du texte "INCLASS" + Zoom
      tl.fromTo(
        textRef.current,
        {
          opacity: 0,
          scale: 0.7,
          y: 20,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        }
      )
      // 2. Pulsation
      .to(textRef.current, {
        scale: 1.05,
        duration: 0.5,
        repeat: 1,
        yoyo: true,
        ease: "sine.inOut",
      })
      // 3. Sélection du texte
      .to(textRef.current, {
        duration: 0.2,
        onComplete: () => {
          if (textRef.current) {
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(textRef.current);
            selection?.removeAllRanges();
            selection?.addRange(range);
          }
        },
      })
      // 4. Pause légère avec le texte sélectionné
      .to({}, { duration: 0.4 })
      // 5. La SCREEN entière monte vers le haut (Exit Animation)
      .to(containerRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-cream/90 backdrop-blur-md dark:bg-ink-950/90"
    >
      <h1
        ref={textRef}
        className="text-6xl font-black tracking-wider text-ink dark:text-white sm:text-7xl md:text-8xl selection:bg-student-500 selection:text-white"
      >
        INCLASS
      </h1>
    </div>
  );
}