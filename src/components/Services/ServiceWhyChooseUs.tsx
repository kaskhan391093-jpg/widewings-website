"use client";

import { Service } from "@/data/services";
import { motion } from "framer-motion";

interface ServiceWhyChooseUsProps {
    service: Service;
}

const ServiceWhyChooseUs = ({ service }: ServiceWhyChooseUsProps) => {
    const values = service.value_cards_section;
    if (!values) return null;

    return (
        <section className="py-24 bg-[#F8F9FA]">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-nexa font-black text-[#2E2E62] uppercase leading-tight max-w-4xl mx-auto"
                    >
                        {values.headline}
                    </motion.h2>
                </div>

                {/* 
                   Grid Logic:
                   "Use a grid of cards... 3 cards per row... Last row stretches"
                   Flexbox with flex-grow and flex-basis is perfect for this.
                   flex-basis of roughly 30% allows 3 per row (with gap).
                   flex-grow allows the remaining 2 to stretch to 50% each.
                */}
                <div className="flex flex-wrap gap-6 justify-center">
                    {values.cards.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 grow basis-full md:basis-[45%] lg:basis-[30%] min-w-[280px] hover:border-[#D4A017] hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-[#D4A017]/10 text-[#D4A017] flex items-center justify-center font-nexa font-bold text-xl mb-6 group-hover:bg-[#D4A017] group-hover:text-white transition-colors duration-300">
                                {i + 1}
                            </div>
                            <h3 className="text-2xl font-nexa font-bold text-[#2E2E62] mb-4">
                                {card.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed font-body text-lg">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceWhyChooseUs;
