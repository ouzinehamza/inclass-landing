"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type TextGsapProps = {
    value: number;
    suffix?: string;
    decimals?: number;
    duration?: number;
    delay?: number;
    className?: string;
};

export const TextGsap = ({
    value,
    suffix = "",
    decimals = 0,
    duration = 1.6,
    delay = 0,
    className = "",
}: TextGsapProps) => {
    const textRef = useRef<HTMLSpanElement>(null);

    useGSAP(
        () => {
            if (!textRef.current) return;

            const counter = { value: 0 };

            const formatNumber = (number: number) => {
                return number.toLocaleString("fr-FR", {
                    minimumFractionDigits: decimals,
                    maximumFractionDigits: decimals,
                });
            };

            gsap.to(counter, {
                value,
                duration,
                delay,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 85%",
                    once: true,
                },

                onUpdate: () => {
                    if (!textRef.current) return;

                    const currentValue =
                        decimals > 0
                            ? counter.value
                            : Math.round(counter.value);

                    textRef.current.textContent =
                        `${formatNumber(currentValue)}${suffix}`;
                },
            });
        },
        {
            dependencies: [value, suffix, decimals, duration, delay],
        },
    );

    const initialValue = (0).toLocaleString("fr-FR", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    });

    return (
        <span ref={textRef} className={className}>
            {initialValue}
            {suffix}
        </span>
    );
};
