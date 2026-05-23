"use client";

import { Service } from "@/data/services";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface ServiceFAQProps {
    service: Service;
}

const ServiceFAQ = ({ service }: ServiceFAQProps) => {
    const faq = service.faq_section;
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    if (!faq) return null;

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-[1000px]">
                <div className="text-center mb-8 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl  font-nexa font-black text-[#2E2E62] uppercase leading-tight"
                    >
                        {faq.title || "FAQ"}
                    </motion.h2>
                </div>

                <div className="space-y-4">
                    {faq.faqs.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="border-b border-gray-200"
                        >
                            <button
                                onClick={() => toggle(i)}
                                className="flex cursor-pointer items-center justify-between w-full py-6 text-left focus:outline-none group"
                            >
                                <span
                                    className={`text-lg md:text-xl font-bold font-nexa transition-colors duration-300 ${openIndex === i ? "text-[#D4A017]" : "text-[#2E2E62] group-hover:text-[#D4A017]"}`}
                                >
                                    {item.question}
                                </span>
                                <span
                                    className={`shrink-0 ml-4 transition-colors duration-300 ${openIndex === i ? "text-[#D4A017]" : "text-gray-400 group-hover:text-[#D4A017]"}`}
                                >
                                    {openIndex === i ? (
                                        <svg
                                            stroke="currentColor"
                                            fill="none"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            height="24"
                                            width="24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <line
                                                x1="5"
                                                y1="12"
                                                x2="19"
                                                y2="12"
                                            ></line>
                                        </svg>
                                    ) : (
                                        <svg
                                            stroke="currentColor"
                                            fill="none"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            height="24"
                                            width="24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <line
                                                x1="12"
                                                y1="5"
                                                x2="12"
                                                y2="19"
                                            ></line>
                                            <line
                                                x1="5"
                                                y1="12"
                                                x2="19"
                                                y2="12"
                                            ></line>
                                        </svg>
                                    )}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-8 text-gray-600 leading-relaxed text-lg font-body pr-8">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceFAQ;
