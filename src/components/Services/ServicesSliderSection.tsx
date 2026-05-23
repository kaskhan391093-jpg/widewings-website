"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const services = [
    {
        title: "WEB & APP DEVELOPMENT",
        slug: "web-design-company-dubai/",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" height="1em" width="1em">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
            </svg>
        ),
    },
    {
        title: "CREATIVE & BRANDING",
        slug: "creative-branding/",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" height="1em" width="1em">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
        ),
    },
    {
        title: "PAID ADVERTISING & MEDIA BUYING",
        slug: "ppc-advertising-company-dubai/",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" height="1em" width="1em">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-1.684-14.35V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
            </svg>
        ),
    },
    {
        title: "SOCIAL MEDIA MANAGEMENT",
        slug: "social-media-marketing-agency-in-dubai/",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" height="1em" width="1em">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
        ),
    },
    {
        title: "CONTENT CREATION & GRAPHIC DESIGN",
        slug: "content-creation-graphic-design/",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" height="1em" width="1em">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
        ),
    },
    {
        title: "EMAIL, SMS & CRM MARKETING",
        slug: "email-sms-crm-marketing/",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" height="1em" width="1em">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
        ),
    },
    {
        title: "SEO & PERFORMANCE MANAGEMENT",
        slug: "seo-services-dubai/",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" height="1em" width="1em">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
        ),
    },
    {
        title: "OOH ADVERTISING",
        slug: "outdoor-advertising-dubai/",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" height="1em" width="1em">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
        ),
    },
    {
        title: "ANALYTICS & PERFORMANCE MARKETING",
        slug: "analytics-performance-marketing/",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" height="1em" width="1em">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
            </svg>
        ),
    },
    {
        title: "PR MANAGEMENT",
        slug: "pr-management/",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" height="1em" width="1em">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
            </svg>
        ),
    },
];

const DRAG_CLICK_THRESHOLD = 8;
const AUTOPLAY_SPEED = 120;
const INTERACTION_PAUSE_MS = 1200;

const ServicesSliderSection = () => {
    const viewportRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const resumeTimeoutRef = useRef<number | null>(null);
    const suppressClickRef = useRef(false);
    const loopWidthRef = useRef(0);
    const [isDragging, setIsDragging] = useState(false);
    const [hasOverflow, setHasOverflow] = useState(false);
    const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
    const x = useMotionValue(0);
    const repeatedServices = [...services, ...services, ...services];

    const clearResumeTimeout = () => {
        if (resumeTimeoutRef.current !== null) {
            window.clearTimeout(resumeTimeoutRef.current);
            resumeTimeoutRef.current = null;
        }
    };

    const normalizeX = () => {
        const loopWidth = loopWidthRef.current;

        if (loopWidth <= 0) {
            x.set(0);
            return;
        }

        let currentX = x.get();

        while (currentX <= -2 * loopWidth) {
            currentX += loopWidth;
        }

        while (currentX >= 0) {
            currentX -= loopWidth;
        }

        if (currentX !== x.get()) {
            x.set(currentX);
        }
    };

    useEffect(() => {
        const updateMeasurements = () => {
            if (!viewportRef.current || !trackRef.current) {
                return;
            }

            const singleLoopWidth = trackRef.current.scrollWidth / 3;
            loopWidthRef.current = singleLoopWidth;

            const nextHasOverflow =
                singleLoopWidth > viewportRef.current.clientWidth + 1;

            setHasOverflow(nextHasOverflow);
            x.set(nextHasOverflow ? -singleLoopWidth : 0);
        };

        updateMeasurements();

        const resizeObserver = new ResizeObserver(() => {
            updateMeasurements();
        });

        if (viewportRef.current) {
            resizeObserver.observe(viewportRef.current);
        }

        if (trackRef.current) {
            resizeObserver.observe(trackRef.current);
        }

        window.addEventListener("resize", updateMeasurements);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener("resize", updateMeasurements);
            clearResumeTimeout();
        };
    }, [x]);

    useAnimationFrame((_, delta) => {
        if (!hasOverflow) {
            return;
        }

        if (!isDragging && !isAutoScrollPaused) {
            x.set(x.get() - AUTOPLAY_SPEED * (delta / 1000));
        }

        normalizeX();
    });

    return (
        <section className="relative w-full py-16 md:pb-24 bg-white overflow-hidden">
            <div ref={viewportRef} className="overflow-hidden">
                <motion.div
                    ref={trackRef}
                    className={`flex w-max items-center select-none ${
                        hasOverflow
                            ? isDragging
                                ? "cursor-grabbing"
                                : "cursor-grab"
                            : "cursor-grab"
                    }`}
                    style={{ x, touchAction: "pan-y" }}
                    drag={hasOverflow ? "x" : false}
                    dragConstraints={false}
                    dragElastic={0}
                    dragMomentum={true}
                    dragTransition={{
                        bounceStiffness: 280,
                        bounceDamping: 28,
                        power: 0.2,
                        timeConstant: 240,
                    }}
                    onPointerDown={() => {
                        suppressClickRef.current = false;
                    }}
                    onDragStart={() => {
                        clearResumeTimeout();
                        setIsDragging(true);
                        setIsAutoScrollPaused(true);
                    }}
                    onDrag={(_, info) => {
                        if (Math.abs(info.offset.x) > DRAG_CLICK_THRESHOLD) {
                            suppressClickRef.current = true;
                        }
                    }}
                    onDragEnd={() => {
                        setIsDragging(false);
                        resumeTimeoutRef.current = window.setTimeout(() => {
                            setIsAutoScrollPaused(false);
                        }, INTERACTION_PAUSE_MS);
                    }}
                >
                    {repeatedServices.map((service, index) => (
                        <Link
                            key={`${service.slug}-${index}`}
                            href={`/${service.slug}`}
                            draggable={false}
                            onClick={(event) => {
                                if (suppressClickRef.current) {
                                    event.preventDefault();
                                    suppressClickRef.current = false;
                                }
                            }}
                            className="flex items-center gap-4 md:gap-7 bg-[#2E2E62] px-6 py-8 md:px-10 md:py-14 rounded-3xl md:rounded-4xl mx-2 md:mx-5 min-w-[280px] md:min-w-[480px] lg:min-w-[520px] border border-white/10 hover:border-white/30 transition-all duration-300 group/card cursor-[inherit]"
                        >
                            <div className="shrink-0 w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-[#D49D26] rounded-full flex items-center justify-center transition-transform duration-300 group-hover/card:scale-110 text-white text-2xl md:text-4xl lg:text-5xl">
                                {service.icon}
                            </div>
                            <h3 className="font-nexa text-white text-base md:text-2xl lg:text-[1.75rem] font-bold uppercase tracking-tight leading-[1.1] transition-colors duration-300 group-hover/card:text-[#D49D26]">
                                {service.title}
                            </h3>
                        </Link>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSliderSection;
