"use client";

import { Service } from "@/data/services";
import { motion } from "framer-motion";

interface ServiceAuthorityProps {
    service: Service;
}

const ServiceAuthority = ({ service }: ServiceAuthorityProps) => {
    // Using 'authority_section' from new schema
    const authority = service.authority_section;

    if (!authority) return null;

    return (
        <section className="py-24 bg-[#F8F9FA]">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                    {/* Sticky Headline Column */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 self-start h-fit">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-nexa font-black text-[#2E2E62] leading-[1.1] uppercase"
                        >
                            {authority.headline}
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="mt-8 text-gray-500 font-medium"
                        >
                            Expertise & Insights
                        </motion.div>
                    </div>

                    {/* Blocks Grid Column */}
                    <div className="lg:col-span-8">
                        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                            {authority.blocks.map((block, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                                >
                                    <p className="text-gray-600 leading-relaxed font-body">
                                        {block}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceAuthority;
