"use client";

import { useLayoutEffect } from "react";
import type { RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type HeroAnimationRefs = {
    sectionRef: RefObject<HTMLElement | null>;
    heroRef: RefObject<HTMLDivElement | null>;
    imageRef: RefObject<HTMLDivElement | null>;
    badgeRef: RefObject<HTMLDivElement | null>;
    titleRef: RefObject<HTMLHeadingElement | null>;
    descriptionRef: RefObject<HTMLParagraphElement | null>;
    buttonsRef: RefObject<HTMLDivElement | null>;
    mobileButtonRef: RefObject<HTMLDivElement | null>;
};

export function useHeroAnimation({
    sectionRef,
    heroRef,
    imageRef,
    badgeRef,
    titleRef,
    descriptionRef,
    buttonsRef,
    mobileButtonRef,
}: HeroAnimationRefs) {
    useLayoutEffect(() => {
        if (
            !sectionRef.current ||
            !heroRef.current ||
            !imageRef.current
        ) {
            return;
        }

        gsap.registerPlugin(ScrollTrigger);

        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        if (reduceMotion) return;

        const context = gsap.context(() => {
            /*
             * Animation initiale du Hero.
             */
            const introTimeline = gsap.timeline({
                defaults: {
                    ease: "power4.out",
                },
            });

            introTimeline.fromTo(
                heroRef.current,
                {
                    clipPath:
                        "inset(112% 118% 112% 118% round 180px)",
                    scale: 0.94,
                    opacity: 0,
                },
                {
                    clipPath: "inset(0% 0% 0% 0% round 40px)",
                    scale: 1,
                    opacity: 1,
                    duration: 2.35,
                },
            );

            introTimeline.fromTo(
                imageRef.current,
                {
                    scale: 1.2,
                    filter: "blur(8px)",
                },
                {
                    scale: 1,
                    filter: "blur(0px)",
                    duration: 5.7,
                },
                0,
            );

            introTimeline.fromTo(
                [
                    badgeRef.current,
                    titleRef.current,
                    descriptionRef.current,
                    buttonsRef.current,
                ],
                {
                    y: 45,
                },
                {
                    y: 0,
                    duration: 4.85,
                    stagger: 0.1,
                },
                0.55,
            );

            if (mobileButtonRef.current) {
                introTimeline.fromTo(
                    mobileButtonRef.current,
                    {
                        y: 35,
                        xPercent: -50,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        xPercent: -50,
                        opacity: 1,
                        duration: 0.75,
                    },
                    1,
                );
            }

            /*
             * Animation inverse liée au scroll.
             */
            const createScrollAnimation = () => {
                const scrollTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: 1.4,
                        invalidateOnRefresh: true,
                    },
                });

                scrollTimeline.fromTo(
                    imageRef.current,
                    {
                        scale: 1,
                        filter: "blur(0px)",
                    },
                    {
                        scale: 1.2,
                        filter: "blur(8px)",
                        ease: "none",
                    },
                    0,
                );

                scrollTimeline.fromTo(
                    [
                        badgeRef.current,
                        titleRef.current,
                        descriptionRef.current,
                        buttonsRef.current,
                    ],
                    {
                        y: 0,
                    },
                    {
                        y: 45,
                        ease: "none",
                        stagger: 0.02,
                    },
                    0,
                );

                if (mobileButtonRef.current) {
                    scrollTimeline.fromTo(
                        mobileButtonRef.current,
                        {
                            y: 0,
                            xPercent: -50,
                            opacity: 1,
                        },
                        {
                            y: 35,
                            xPercent: -50,
                            opacity: 0,
                            ease: "none",
                        },
                        0,
                    );
                }

                scrollTimeline.fromTo(
                    heroRef.current,
                    {
                        clipPath: "inset(0% 0% 0% 0% round 40px)",
                        scale: 1,
                        opacity: 1,
                    },
                    {
                        clipPath:
                            "inset(112% 118% 112% 118% round 180px)",
                        scale: 0.94,
                        opacity: 0,
                        ease: "none",
                    },
                    0,
                );

                ScrollTrigger.refresh();
            };

            introTimeline.eventCallback(
                "onComplete",
                createScrollAnimation,
            );
        }, sectionRef);

        return () => {
            context.revert();
        };
    }, [
        sectionRef,
        heroRef,
        imageRef,
        badgeRef,
        titleRef,
        descriptionRef,
        buttonsRef,
        mobileButtonRef,
    ]);
}