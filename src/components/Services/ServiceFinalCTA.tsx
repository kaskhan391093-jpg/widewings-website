"use client";

import { Service } from "@/data/services";
import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceFinalCTAProps {
    service: Service;
}

const ServiceFinalCTA = ({ service }: ServiceFinalCTAProps) => {
    const cta = service.final_cta_section;
    // Fallback if not defined for a specific service
    const headline = cta?.headline || "Ready to Start Your Project?";
    const description =
        cta?.description || "Let's create something amazing together.";
    const ctaLabel = cta?.cta_label || "Get a Free Proposal";

    return (
        <section className="py-32 bg-white text-center relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F2F2F2] rounded-full blur-[100px] -z-10 opacity-60" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    {cta?.eyebrow && (
                        <span className="text-[#D49D26] font-bold text-xl tracking-widest uppercase mb-6 block">
                            {cta.eyebrow}
                        </span>
                    )}

                    <h2 className="text-4xl md:text-6xl font-nexa font-black text-[#2E2E62] mb-8 uppercase leading-none">
                        {headline}
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
                        {description}
                    </p>

                    <Link
                        href="/contact-us"
                        className="inline-flex items-center gap-4 bg-[#2E2E62] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#D4A017] hover:scale-105 transition-all duration-300 shadow-2xl"
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
        </section>
    );
};

export default ServiceFinalCTA;
