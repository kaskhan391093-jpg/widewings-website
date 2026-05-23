"use client";

import { motion } from "framer-motion";
import CTAButton from "@/components/Home/CTAButton";

const props = [
    {
        number: "01",
        title: "KEYWORDS OPTIMIZED FOR CONVERSION",
        description:
            "Get in front of high-intent customers with hyper-targeted campaigns and display ads.",
    },
    {
        number: "02",
        title: "TOP OF MIND, BOTTOM OF FUNNEL",
        description:
            "We capture top-funnel traffic and transform it into bottom-funnel conversions through rapid experimentation.",
    },
    {
        number: "03",
        title: "TURN INTENT INTO MEASURABLE GROWTH",
        description:
            "By unlocking high-quality consumer intent, we fuel rapid and measurable growth through quality leads.",
    },
    {
        number: "04",
        title: "DIGITAL MARKETING SERVICES WITH PROVEN REVENUE GROWTH",
        description:
            "Our team of paid search growth experts measure and maximize search intent and keyword potential at every stage of the funnel.",
    },
];

export default function ValuePropSection() {
    return (
        <section className="pb-20 lg:pb-32 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20 md:mb-28">
                    {props.map((prop, index) => (
                        <motion.div
                            key={prop.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-[#2E2E62] rounded-[32px] md:rounded-[40px] p-8 md:p-12 relative overflow-hidden aspect-square flex flex-col justify-start min-h-[320px] md:min-h-[400px]"
                        >
                            {/* Content */}
                            <div className="relative z-10 space-y-4">
                                <h3 className="font-section-title text-xl md:text-3xl text-white leading-tight uppercase">
                                    {prop.title}
                                </h3>
                                <p className="font-ui text-base md:text-xl xl:text-2xl text-white/90 leading-relaxed max-w-sm">
                                    {prop.description}
                                </p>
                            </div>

                            {/* Large Number */}
                            <div className="absolute bottom-0 -left-6 z-0 select-none pointer-events-none opacity-100 overflow-visible h-[120px] md:h-[200px] lg:h-[250px] flex items-end">
                                <span className="font-hero text-[120px] md:text-[200px] lg:text-[250px] text-white leading-[0.7] tracking-[calc(-0.1em)] translate-y-[25%]">
                                    {prop.number}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Area */}
                <div className="flex flex-col items-center text-center space-y-8">
                    <h2 className="font-hero text-3xl md:text-4xl lg:text-5xl text-[#2E2E62]">
                        Have Any Project in minds..?
                    </h2>

                    <CTAButton
                        text="Free Consultation"
                        className="px-10"
                        href="/contact-us"
                    />
                </div>
            </div>
        </section>
    );
}
