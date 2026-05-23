"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import CTAButton from "./CTAButton";

const caseStudies = [
    {
        id: "zaina",
        title: "Cafe Chain Launch",
        subtitle: "Zaina Cafe",
        image: "/zaina.webp",
    },
    {
        id: "sgh",
        title: "Healthcare Brand",
        subtitle: "Saudi German Hospital Group",
        image: "/sgh.webp",
    },
    {
        id: "sbk",
        title: "Real Estate Developer",
        subtitle: "SBK Properties",
        image: "/sbk.webp",
    },
];

const AUTO_SCROLL_INTERVAL = 3200;
const AUTO_SCROLL_RESUME_DELAY = 2200;
const VELOCITY_INFLUENCE = 0.18;

export default function SuccessStoriesSection() {
    const slides = useMemo(() => [...caseStudies, caseStudies[0]], []);
    const totalSlides = caseStudies.length;
    const lastVisualIndex = slides.length - 1;

    const viewportRef = useRef<HTMLDivElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const animationRef = useRef<ReturnType<typeof animate> | null>(null);
    const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const [isDragging, setIsDragging] = useState(false);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [currentVisualIndex, setCurrentVisualIndex] = useState(0);
    const [snapPoints, setSnapPoints] = useState<number[]>([]);
    const [dragBounds, setDragBounds] = useState({ left: 0, right: 0 });
    const x = useMotionValue(0);

    const currentIndex = currentVisualIndex % totalSlides;

    useEffect(() => {
        const measureCarousel = () => {
            const viewport = viewportRef.current;
            const track = trackRef.current;

            if (!viewport || !track) {
                return;
            }

            const viewportWidth = viewport.clientWidth;
            const trackWidth = track.scrollWidth;

            if (!viewportWidth || !trackWidth) {
                return;
            }

            const maxOffset = Math.max(0, trackWidth - viewportWidth);
            const cards = Array.from(
                track.querySelectorAll<HTMLElement>("[data-case-study-card]"),
            );
            const nextSnapPoints = cards.map((card) =>
                Math.min(card.offsetLeft, maxOffset),
            );

            setDragBounds({ left: -maxOffset, right: 0 });
            setSnapPoints(nextSnapPoints);

            const currentOffset = Math.min(Math.max(-x.get(), 0), maxOffset);
            x.set(-currentOffset);

            if (nextSnapPoints.length > 0) {
                const nearestIndex = nextSnapPoints.reduce(
                    (closestIndex, point, index) =>
                        Math.abs(point - currentOffset) <
                        Math.abs(nextSnapPoints[closestIndex] - currentOffset)
                            ? index
                            : closestIndex,
                    0,
                );

                setCurrentVisualIndex(nearestIndex);
            }
        };

        measureCarousel();

        if (typeof ResizeObserver === "undefined") {
            window.addEventListener("resize", measureCarousel);
            return () => window.removeEventListener("resize", measureCarousel);
        }

        const resizeObserver = new ResizeObserver(measureCarousel);

        if (viewportRef.current) {
            resizeObserver.observe(viewportRef.current);
        }

        if (trackRef.current) {
            resizeObserver.observe(trackRef.current);
        }

        return () => resizeObserver.disconnect();
    }, [x]);

    useEffect(() => {
        return () => {
            animationRef.current?.stop();

            if (resumeTimeoutRef.current) {
                clearTimeout(resumeTimeoutRef.current);
            }
        };
    }, []);

    const pauseAutoScroll = useCallback(() => {
        if (resumeTimeoutRef.current) {
            clearTimeout(resumeTimeoutRef.current);
        }

        setIsAutoPlaying(false);
    }, []);

    const scheduleAutoScrollResume = useCallback(() => {
        if (resumeTimeoutRef.current) {
            clearTimeout(resumeTimeoutRef.current);
        }

        resumeTimeoutRef.current = setTimeout(() => {
            setIsAutoPlaying(true);
        }, AUTO_SCROLL_RESUME_DELAY);
    }, []);

    const normalizeLoopIfNeeded = useCallback(
        (index: number) => {
            if (index !== lastVisualIndex || snapPoints.length === 0) {
                return;
            }

            x.set(-snapPoints[0]);
            setCurrentVisualIndex(0);
        },
        [lastVisualIndex, snapPoints, x],
    );

    const animateToIndex = useCallback(
        (index: number) => {
            if (!snapPoints.length) {
                return;
            }

            const clampedIndex = Math.max(0, Math.min(index, lastVisualIndex));
            animationRef.current?.stop();
            setCurrentVisualIndex(clampedIndex);

            const controls = animate(x, -snapPoints[clampedIndex], {
                type: "spring",
                stiffness: 220,
                damping: 28,
                mass: 0.9,
            });

            animationRef.current = controls;

            controls.then(() => {
                if (animationRef.current !== controls) {
                    return;
                }

                normalizeLoopIfNeeded(clampedIndex);
            });
        },
        [lastVisualIndex, normalizeLoopIfNeeded, snapPoints, x],
    );

    useEffect(() => {
        if (!isAutoPlaying || isDragging || snapPoints.length <= 1) {
            return;
        }

        const timeout = setTimeout(() => {
            const nextIndex =
                currentVisualIndex >= totalSlides - 1
                    ? lastVisualIndex
                    : currentVisualIndex + 1;

            animateToIndex(nextIndex);
        }, AUTO_SCROLL_INTERVAL);

        return () => clearTimeout(timeout);
    }, [
        animateToIndex,
        currentVisualIndex,
        isAutoPlaying,
        isDragging,
        lastVisualIndex,
        snapPoints.length,
        totalSlides,
    ]);

    const handleDragStart = () => {
        animationRef.current?.stop();
        pauseAutoScroll();
        setIsDragging(true);
    };

    const handleDragEnd = (
        _event: MouseEvent | TouchEvent | PointerEvent,
        info: { velocity: { x: number } },
    ) => {
        setIsDragging(false);

        if (!snapPoints.length) {
            scheduleAutoScrollResume();
            return;
        }

        const maxOffset = Math.max(0, -dragBounds.left);
        const currentOffset = Math.min(Math.max(-x.get(), 0), maxOffset);
        const projectedOffset = Math.min(
            Math.max(currentOffset - info.velocity.x * VELOCITY_INFLUENCE, 0),
            maxOffset,
        );

        const nearestIndex = snapPoints.reduce(
            (closestIndex, point, index) =>
                Math.abs(point - projectedOffset) <
                Math.abs(snapPoints[closestIndex] - projectedOffset)
                    ? index
                    : closestIndex,
            0,
        );

        animateToIndex(nearestIndex);
        scheduleAutoScrollResume();
    };

    const handlePointerDown = () => {
        pauseAutoScroll();
    };

    const handlePointerUp = () => {
        if (!isDragging) {
            scheduleAutoScrollResume();
        }
    };

    return (
        <section className="relative bg-[#f4f4f4] pt-20 pb-20 lg:pt-24 lg:pb-24 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    <div className="w-full lg:w-[45%] relative z-10 flex flex-col">
                        <div className="pl-2">
                            <h2 className="font-nexa font-bold text-4xl sm:text-5xl md:text-6xl text-[#2E2E62] mb-6">
                                Our Success
                            </h2>
                            <div className="pointer-events-none select-none">
                                <span className="font-nexa font-black text-[4rem] sm:text-[8rem] md:text-[10rem] lg:text-[9rem] text-[#2E2E62] leading-none tracking-tighter block">
                                    STORIES
                                </span>
                            </div>
                        </div>

                        <div className="space-y-6 lg:mb-14 pl-2">
                            <p className="font-nexa font-normal text-[#4A4A4A]/90 text-lg sm:text-xl leading-relaxed max-w-xl">
                                As a leading digital marketing company in Dubai,
                                we help ambitious brands grow with data-driven
                                strategies, impactful storytelling, and
                                full-funnel performance marketing.
                            </p>
                            <p className="font-nexa font-normal text-[#4A4A4A]/90 text-lg sm:text-xl leading-relaxed max-w-xl">
                                From eCommerce to real estate to healthcare, you
                                trust our proven results to position us as one
                                of the best digital marketing agencies in Dubai.
                            </p>
                            <p className="font-nexa font-normal text-[#4A4A4A]/90 text-lg sm:text-xl leading-relaxed max-w-xl">
                                See why we are the best digital marketing agency
                                in Dubai
                            </p>
                        </div>

                        <div className="items-center gap-4 pl-2 hidden lg:flex">
                            {caseStudies.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        pauseAutoScroll();
                                        animateToIndex(index);
                                        scheduleAutoScrollResume();
                                    }}
                                    className={`relative w-4 h-4 rounded-full transition-all duration-300 border-2 ${
                                        currentIndex === index
                                            ? "bg-[#DFA518] border-[#DFA518]"
                                            : "border-[#2E2E62]/20 bg-transparent hover:border-[#2E2E62]/40 cursor-pointer"
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="w-full lg:w-[57%] relative lg:pl-8">
                        <div
                            ref={viewportRef}
                            className="relative overflow-hidden"
                            onPointerDown={handlePointerDown}
                            onPointerUp={handlePointerUp}
                            onMouseEnter={pauseAutoScroll}
                            onMouseLeave={scheduleAutoScrollResume}
                        >
                            <motion.div
                                ref={trackRef}
                                className={`flex gap-6 select-none will-change-transform ${
                                    isDragging ? "cursor-grabbing" : "cursor-grab"
                                }`}
                                style={{ x, touchAction: "pan-y" }}
                                drag="x"
                                dragConstraints={dragBounds}
                                dragElastic={0.1}
                                dragMomentum={true}
                                dragTransition={{
                                    bounceStiffness: 260,
                                    bounceDamping: 28,
                                    power: 0.18,
                                    timeConstant: 220,
                                }}
                                onDragStart={handleDragStart}
                                onDragEnd={handleDragEnd}
                            >
                                {slides.map((study, index) => (
                                    <div
                                        key={`${study.id}-${index}`}
                                        data-case-study-card
                                        className="min-w-[75%] relative aspect-square sm:aspect-4/3 rounded-[50px] overflow-hidden select-none"
                                    >
                                        <Image
                                            src={study.image}
                                            alt={study.title}
                                            fill
                                            className="object-cover pointer-events-none"
                                            sizes="(max-width: 768px) 75vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-black/35 pointer-events-none" />

                                        <div className="absolute bottom-12 left-12 text-white z-10 max-w-[80%] pointer-events-none">
                                            <p className="font-nexa font-normal text-xl sm:text-2xl mb-2 opacity-90">
                                                {study.subtitle}
                                            </p>
                                            <h3 className="font-nexa font-bold text-3xl sm:text-5xl tracking-tight">
                                                {study.title}
                                            </h3>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        <div className="items-center gap-4 mt-4 pl-2 flex lg:hidden">
                            {caseStudies.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        pauseAutoScroll();
                                        animateToIndex(index);
                                        scheduleAutoScrollResume();
                                    }}
                                    className={`relative w-4 h-4 rounded-full transition-all duration-300 border-2 ${
                                        currentIndex === index
                                            ? "bg-[#DFA518] border-[#DFA518]"
                                            : "border-[#2E2E62]/20 bg-transparent hover:border-[#2E2E62]/40 cursor-pointer"
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        <div className="absolute -bottom-20 md:-bottom-8 left-1/2 -translate-x-1/2 sm:-bottom-10 z-20">
                            <CTAButton
                                text="All Case Studies"
                                className="px-10! py-5! md:w-[16rem] lg:w-full shadow-2xl text-center"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
