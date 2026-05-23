"use client";

import { Service } from "@/data/services";
import { motion } from "framer-motion";

interface ServiceOverviewProps {
    service: Service;
}

const ServiceOverview = ({ service }: ServiceOverviewProps) => {
    // If no overview section data, fallback to old details or return null
    // Ideally we use the new 'overview_section'
    const overview = service.overview_section;

    if (!overview) {
        // Fallback or Generic render if needed, but for now assuming data calls
        // might fallback to 'details' prop if we wanted to support old services.
        // For new design, we focus on 'overview_section'.
        return (
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <p className="text-gray-600">{service.details}</p>
                </div>
            </section>
        );
    }

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                    {/* Sticky Headline Column */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32 self-start h-fit">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl lg:text-[3.5rem] font-nexa font-black text-[#2E2E62] leading-tight uppercase"
                        >
                            {overview.headline}
                        </motion.h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="h-2 w-24 bg-[#D4A017] mt-8 origin-left"
                        />
                    </div>

                    {/* Content Column */}
                    <div className="lg:col-span-7">
                        <div className="space-y-8">
                            {overview.paragraphs.map((para, i) => (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-lg md:text-xl text-gray-600 leading-relaxed font-body"
                                >
                                    {para}
                                </motion.p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceOverview;
