"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Service } from "@/data/services";

interface ServicesHeroSectionProps {
    service?: Service;
}

const ServicesHeroSection = ({ service }: ServicesHeroSectionProps) => {
    // Fallbacks or Defaults
    const isServicePage = !!service;

    const eyebrow = service?.hero?.eyebrow || (isServicePage ? "Our" : "OUR");
    const title =
        service?.hero?.title ||
        (isServicePage ? service?.title : "Digital Marketing");
    const subtitle =
        service?.hero?.subtitle || (isServicePage ? "Services" : "SERVICES");
    const description =
        service?.hero?.description ||
        service?.description ||
        "Use digital marketing services that are based on data to make your brand stronger. Get a high return on investment (ROI) and more conversions with Wide Wings Media’s digital marketing services, which are data-based. Request a quote now.";
    const ctaLabel = service?.hero?.cta_label || "Get a Proposal";

    return (
        <section className="relative w-full bg-white pt-24 lg:pt-32 pb-12 lg:pb-24 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-[1400px]">
                <div className="relative bg-[#F2F2F2] rounded-[2.5rem] lg:rounded-[4rem] px-6 py-16 md:py-24 lg:pt-32 lg:pb-24 flex flex-col items-center justify-center text-center min-h-[500px] overflow-hidden">
                    {/* Decorative Orange Shape Top Right */}
                    <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 overflow-hidden rounded-tr-[2.5rem] lg:rounded-tr-[4rem] pointer-events-none">
                        <div className="absolute top-[-20%] right-[35%] w-[120%] h-[120%] bg-[#D4A853] rounded-full translate-x-1/2 -translate-y-1/2 opacity-90" />
                    </div>

                    {/* Content Column */}
                    <div className="relative z-20 w-full max-w-4xl flex flex-col items-center">
                        {/* Heading Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col mb-8 font-nexa items-center"
                        >
                            {/* Standard Service Page Layout */}
                            <>
                                {eyebrow && (
                                    <span className="text-[#D49D26] font-bold text-xl md:text-2xl tracking-widest uppercase mb-4 block">
                                        {eyebrow}
                                    </span>
                                )}
                                <h1 className="text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] font-black text-[#2E2E62] leading-[1.1] uppercase tracking-tight">
                                    {title}
                                </h1>
                                {subtitle && (
                                    <p className="text-xl md:text-2xl text-gray-500 font-medium mt-4">
                                        {subtitle}
                                    </p>
                                )}
                            </>
                        </motion.div>

                        {/* Paragraph Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="font-body space-y-8 flex flex-col items-center"
                        >
                            <p className="text-[#2E2E62]/80 text-lg md:text-xl font-normal leading-relaxed max-w-3xl">
                                {description}
                            </p>

                            <Link
                                href="/contact-us"
                                className="inline-flex items-center gap-3 bg-[#2E2E62] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#D4A017] transition-colors duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                            >
                                {ctaLabel}
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesHeroSection;
