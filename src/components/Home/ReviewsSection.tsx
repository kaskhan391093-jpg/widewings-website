"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import ReviewsCard from "./ReviewsCard";

const reviewsData = [
    {
        text: "When we partnered with Wide Wings Media, LLC, we expected a 6-month campaign that would help us achieve our goals. However, WWM managed to exceed all our expectations and delivered exceptional results in just 4 months.\n\nThe team made everything feel effortless, even when it was certainly a stressful campaign. We look forward to partnering with WWM in the future as new developments roll out.",
        author: "House of Santoba",
        avatarBg: "#2E2E62",
    },
    {
        text: "Our primary goal was to attract leads across the MENA region, but we were at a loss and almost thought the website was useless, given our past disappointments with digital marketing agencies. We turned to Wide Wings Media, LLC, to assist us in reaching this large target audience, informed by their success with the Saudi German Hospital Group.\n\nNeedless to say, our expectations were exceeded. Wide Wings Media, LLC helped us rank in the search engine results across multiple locations and brought us the highest quality leads and improved sales for gynecologists and normal delivery packages.",
        author: "Saudi German Hospital, Dubai",
        avatarBg: "#DFA518",
    },
    {
        text: "Since Wide Wings Media, LLC, took over the SEO services of our website, we have not only seen an increase in qualified traffic but also conversions. The Wide Wings Media, LLC team also worked closely with our in-house team during the transition to a new website, which can often be a tricky exercise.\n\nThanks to the team, the transition was incredibly smooth, and within a few weeks, we noticed even higher search traffic coming onto the website. Overall, we find the team very responsive and senior management actively involved in the process.",
        author: "Bex Beauty",
        avatarBg: "#6BA0BA",
    },
    {
        text: "It is an absolute pleasure to recommend Wide Wings Media, LLC, for website projects. They are the best in the business. We asked Wide Wings Media, LLC, to pitch to us for website projects, and they stood out for two main reasons.\n\nFirst, they demonstrated their experience in building the correct hierarchy and structure for SEO, particularly for websites in an international market context. Second, they have several expert teams dedicated to the website project.\n\nTo sum up, the Wide Wings Media, LLC team is professional and passionate about delivering the best website and service. They don’t just tick boxes to get a website done; they genuinely care and go the extra mile.",
        author: "Saudi German Hospital, Ajman",
        avatarBg: "#7E8B98",
    },
    {
        text: "Initially skeptical about digital marketing, we entrusted Wide Wings Media, LLC, to demonstrate how it could genuinely benefit our brand and business growth. It didn't take long for Wide Wings Media, LLC, to impress us with their expertise and knowledge of digital technologies and marketing strategies, leading to a significant ROI.\n\nWe are very pleased with their work. They have supported us in understanding how to manage all our digital campaigns at optimal times to achieve the best outcomes across multiple countries and diverse markets.",
        author: "Saudi German Hospital, Sharjah",
        avatarBg: "#B5C0C9",
    },
    {
        text: "Wide Wings Media transformed our online presence completely. Their strategic approach to social media marketing increased our engagement by 300% in just three months. The team's creativity and professionalism exceeded all our expectations.",
        author: "Srilesh N",
        subtitle: "Head of Marketing, SGH Group",
        avatarBg: "#2E2E62",
    },
];

const AUTO_SCROLL_INTERVAL = 5000;
const AUTO_SCROLL_RESUME_DELAY = 2200;
const VELOCITY_INFLUENCE = 0.22;

const ReviewsSection = () => {
    const totalSlides = reviewsData.length;
    const slides = useMemo(
        () => [...reviewsData, ...reviewsData, ...reviewsData],
        [],
    );

    const viewportRef = useRef<HTMLDivElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const animationRef = useRef<ReturnType<typeof animate> | null>(null);
    const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const hasMeasuredRef = useRef(false);

    const [isDragging, setIsDragging] = useState(false);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [currentVisualIndex, setCurrentVisualIndex] = useState(totalSlides);
    const [snapPoints, setSnapPoints] = useState<number[]>([]);
    const [dragBounds, setDragBounds] = useState({ left: 0, right: 0 });
    const x = useMotionValue(0);

    const currentIndex =
        ((currentVisualIndex % totalSlides) + totalSlides) % totalSlides;

    const findNearestIndex = useCallback((offset: number, points: number[]) => {
        if (!points.length) {
            return 0;
        }

        return points.reduce(
            (closestIndex, point, index) =>
                Math.abs(point - offset) < Math.abs(points[closestIndex] - offset)
                    ? index
                    : closestIndex,
            0,
        );
    }, []);

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
                track.querySelectorAll<HTMLElement>("[data-review-card]"),
            );

            if (!cards.length) {
                return;
            }

            const nextSnapPoints = cards.map((card) => {
                const centeredOffset =
                    card.offsetLeft - (viewportWidth - card.offsetWidth) / 2;
                return Math.max(0, Math.min(centeredOffset, maxOffset));
            });

            setSnapPoints(nextSnapPoints);
            setDragBounds({
                left: -nextSnapPoints[nextSnapPoints.length - 1],
                right: -nextSnapPoints[0],
            });

            if (!hasMeasuredRef.current) {
                x.set(-nextSnapPoints[totalSlides]);
                setCurrentVisualIndex(totalSlides);
                hasMeasuredRef.current = true;
                return;
            }

            const clampedOffset = Math.max(
                nextSnapPoints[0],
                Math.min(-x.get(), nextSnapPoints[nextSnapPoints.length - 1]),
            );
            x.set(-clampedOffset);
            setCurrentVisualIndex(findNearestIndex(clampedOffset, nextSnapPoints));
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
    }, [findNearestIndex, totalSlides, x]);

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
            if (!snapPoints.length) {
                return;
            }

            if (index < totalSlides || index >= totalSlides * 2) {
                const normalizedIndex = (index % totalSlides) + totalSlides;
                x.set(-snapPoints[normalizedIndex]);
                setCurrentVisualIndex(normalizedIndex);
            }
        },
        [snapPoints, totalSlides, x],
    );

    const animateToIndex = useCallback(
        (index: number) => {
            if (!snapPoints.length) {
                return;
            }

            const clampedIndex = Math.max(0, Math.min(index, snapPoints.length - 1));
            animationRef.current?.stop();
            setCurrentVisualIndex(clampedIndex);

            const controls = animate(x, -snapPoints[clampedIndex], {
                type: "spring",
                stiffness: 230,
                damping: 30,
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
        [normalizeLoopIfNeeded, snapPoints, x],
    );

    useEffect(() => {
        if (!isAutoPlaying || isDragging || snapPoints.length <= 1) {
            return;
        }

        const timeout = setTimeout(() => {
            animateToIndex(currentVisualIndex + 1);
        }, AUTO_SCROLL_INTERVAL);

        return () => clearTimeout(timeout);
    }, [animateToIndex, currentVisualIndex, isAutoPlaying, isDragging, snapPoints.length]);

    const handleDotClick = (index: number) => {
        pauseAutoScroll();

        const candidates = [index, index + totalSlides, index + totalSlides * 2];
        const nearestIndex = candidates.reduce((closest, candidate) => {
            return Math.abs(candidate - currentVisualIndex) <
                Math.abs(closest - currentVisualIndex)
                ? candidate
                : closest;
        }, candidates[0]);

        animateToIndex(nearestIndex);
        scheduleAutoScrollResume();
    };

    const handleDragStart = () => {
        animationRef.current?.stop();
        pauseAutoScroll();
        setIsDragging(true);
    };

    const handleDrag = () => {
        if (!snapPoints.length) {
            return;
        }

        const currentOffset = Math.max(
            snapPoints[0],
            Math.min(-x.get(), snapPoints[snapPoints.length - 1]),
        );
        setCurrentVisualIndex(findNearestIndex(currentOffset, snapPoints));
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

        const minOffset = snapPoints[0];
        const maxOffset = snapPoints[snapPoints.length - 1];
        const currentOffset = Math.max(minOffset, Math.min(-x.get(), maxOffset));
        const projectedOffset = Math.max(
            minOffset,
            Math.min(currentOffset - info.velocity.x * VELOCITY_INFLUENCE, maxOffset),
        );

        animateToIndex(findNearestIndex(projectedOffset, snapPoints));
        scheduleAutoScrollResume();
    };

    return (
        <section className="bg-[#F3F4F6] py-20 md:py-32 overflow-hidden">
            <div className="w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-5 px-6"
                >
                    <h2 className="font-hero text-[#2E2E62] text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight">
                        REVIEWS
                    </h2>
                </motion.div>

                <div
                    className="relative"
                    onMouseEnter={pauseAutoScroll}
                    onMouseLeave={scheduleAutoScrollResume}
                >
                    <div ref={viewportRef} className="overflow-hidden">
                        <motion.div
                            ref={trackRef}
                            className="flex items-stretch cursor-grab active:cursor-grabbing select-none will-change-transform"
                            style={{ x, gap: "24px", touchAction: "pan-y" }}
                            drag="x"
                            dragConstraints={dragBounds}
                            dragElastic={0.1}
                            dragMomentum={true}
                            dragTransition={{
                                bounceStiffness: 260,
                                bounceDamping: 30,
                                power: 0.18,
                                timeConstant: 220,
                            }}
                            onDragStart={handleDragStart}
                            onDrag={handleDrag}
                            onDragEnd={handleDragEnd}
                        >
                            {slides.map((review, idx) => {
                                const isActive = currentVisualIndex === idx;
                                return (
                                    <div
                                        key={`${review.author}-${idx}`}
                                        data-review-card
                                        className={`shrink-0 transition-opacity duration-300 w-[85vw] md:w-[65vw] lg:w-[55vw] ${
                                            isActive ? "opacity-100" : "opacity-30"
                                        }`}
                                    >
                                        <ReviewsCard
                                            text={review.text}
                                            author={review.author}
                                            subtitle={review.subtitle}
                                            avatarBg={review.avatarBg}
                                        />
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>

                <div className="flex justify-center gap-3 mt-12 md:mt-12">
                    {reviewsData.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => handleDotClick(i)}
                            className={`w-3 h-3 cursor-pointer md:w-4 md:h-4 rounded-full transition-all duration-300 border-2 ${
                                currentIndex === i
                                    ? "bg-[#DFA518] border-[#DFA518] scale-125"
                                    : "bg-transparent border-[#2E2E62]/20 hover:border-[#2E2E62]/40"
                            }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
