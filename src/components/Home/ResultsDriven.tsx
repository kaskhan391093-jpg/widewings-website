"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
        step: "01",
        label: "OUR EXPERTISE",
        text: "We specialize in creating and executing result-driven digital marketing campaigns that go beyond basic social media management, SEO services, and Google Ads. As a performance-driven digital marketing agency in Dubai, we transform how companies leverage digital marketing opportunities and guide them toward increased brand awareness, lead generation, and revenue growth.",
        image: "/services/Analytics-&-Performance-Marketing.webp",
    },
    {
        step: "02",
        label: "OUR APPROACH",
        text: "As digital marketing experts and a leading Dubai digital marketing agency, equipped with advanced marketing tools, conversion optimization techniques, and creative content strategies, we exceed traditional marketing agency limitations. Our objective is to deliver outstanding marketing services, engaging content marketing, and strategic brand positioning that serve today’s competitive marketplace while preparing brands for tomorrow.",
        image: "/services/Creative-&-Branding.webp",
    },
    {
        step: "03",
        label: "OUR METHODOLOGY",
        text: "Our marketing methodology centers on redesigning, optimizing, and scaling business success within the online ecosystem. As a digital marketing agency in Dubai and a certified digital marketing partner, we help companies build stronger customer relationships, dominate search engine results, and deliver exceptional marketing ROI through data-driven strategies and continuous optimization.",
        image: "/services/SEO-&-Performance-Management.webp",
    },
];

export default function ResultsDriven() {
    const [current, setCurrent] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const handleDotClick = (index: number) => {
        setCurrent(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const slide = slides[current];

    return (
        <section className="relative w-full bg-[#dcdcdc] pt-20 lg:pt-32 pb-6 lg:pb-10">
            <div className="max-w-[110rem] mx-auto px-8 lg:px-16 xl:px-24">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-10 lg:mb-14"
                >
                    <h2 className="font-nexa font-black text-[#2e2e62] text-6xl md:text-8xl lg:text-[7rem] xl:text-[9rem] 2xl:text-[11rem] leading-[0.85] tracking-tighter uppercase">
                        Results Driven
                    </h2>
                    <p className="font-nexa font-bold text-[#d8a423] text-3xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl mt-2 lg:mt-4">
                        Digital Marketing Agency
                    </p>
                </motion.div>

                {/* Main Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="bg-white rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-xl"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Left — Image */}
                        <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:min-h-[500px] xl:min-h-[550px] overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={current}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={slide.image}
                                        alt={slide.label}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-[#2e2e62]/40" />
                                </motion.div>
                            </AnimatePresence>

                            {/* Step badge on image */}
                            <div className="absolute top-6 left-6 lg:top-8 lg:left-8 z-10">
                                <span className="inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#D4A853] font-nexa font-bold text-white text-xl lg:text-2xl shadow-lg">
                                    {slide.step}
                                </span>
                            </div>

                            {/* Label on image */}
                            <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8 z-10">
                                <span className="font-nexa font-bold text-white text-lg lg:text-xl tracking-widest uppercase">
                                    {slide.label}
                                </span>
                            </div>
                        </div>

                        {/* Right — Content */}
                        <div className="flex flex-col justify-center p-8 lg:p-12 xl:p-16">
                            <div className="relative min-h-[220px] lg:min-h-[320px] xl:min-h-[350px]">
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={current}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                        className="font-nexa text-[#2E2E62]/85 text-lg md:text-xl lg:text-2xl xl:text-2xl leading-relaxed absolute top-0 left-0 w-full"
                                    >
                                        {slide.text}
                                    </motion.p>
                                </AnimatePresence>
                            </div>

                            {/* Progress dots + Counter */}
                            <div className="flex items-center gap-4 mt-6">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleDotClick(index)}
                                        className="relative h-1.5 rounded-full cursor-pointer overflow-hidden transition-all duration-300"
                                        style={{ width: current === index ? 48 : 12 }}
                                        aria-label={`Go to slide ${index + 1}`}
                                    >
                                        <span className={`absolute inset-0 rounded-full transition-colors duration-300 ${current === index ? "bg-[#D4A853]" : "bg-gray-300 hover:bg-gray-400"}`} />
                                        {current === index && isAutoPlaying && (
                                            <motion.span
                                                initial={{ scaleX: 0 }}
                                                animate={{ scaleX: 1 }}
                                                transition={{ duration: 5, ease: "linear" }}
                                                className="absolute inset-0 rounded-full bg-[#B48833] origin-left"
                                            />
                                        )}
                                    </button>
                                ))}
                                <span className="ml-auto font-nexa font-bold text-[#2E2E62]/40 text-xl lg:text-2xl">
                                    {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
