"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollTop = window.scrollY;
                    const docHeight =
                        document.documentElement.scrollHeight -
                        window.innerHeight;

                    // Visibility toggle
                    if (scrollTop > 300) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }

                    // Progress calculation
                    if (docHeight > 0) {
                        const scrollPercent = (scrollTop / docHeight) * 100;
                        setProgress(Math.min(100, Math.max(0, scrollPercent)));
                    }

                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // SVG Configuration
    const size = 56;
    const strokeWidth = 3;
    const center = size / 2;
    const radius = size / 2 - strokeWidth;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div
            className={`fixed bottom-6 left-6 md:left-auto md:right-24 z-10000000 flex items-center justify-center transition-all duration-500 ease-in-out origin-bottom-left md:origin-bottom-right ${
                isVisible
                    ? "opacity-100 translate-y-0 scale-75 md:scale-100"
                    : "opacity-0 translate-y-8 scale-50 md:scale-75 pointer-events-none"
            }`}
        >
            {/* Progress Ring */}
            <svg
                width={size}
                height={size}
                className="absolute -rotate-90 pointer-events-none"
            >
                {/* Track */}
                <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    stroke="#E5E7EB"
                    strokeWidth={strokeWidth}
                    fill="none"
                />
                {/* Progress Indicator */}
                <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    stroke="#2E2E62"
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    className="transition-[stroke-dashoffset] duration-100 ease-linear"
                />
            </svg>

            {/* Button */}
            <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="relative z-10 p-3 cursor-pointer rounded-full bg-[#2E2E62] text-white shadow-lg transition-all duration-300 ease-in-out transform hover:bg-[#FFCF01] hover:text-[#2E2E62] hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#FFCF01] focus:ring-offset-2 m-1"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                </svg>
            </button>
        </div>
    );
}
