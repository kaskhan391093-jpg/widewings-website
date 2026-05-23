"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/data/services";
import CTAButton from "./CTAButton";

export default function ServicesSection() {
    return (
        <section className="relative pt-44 pb-20 lg:pt-60 lg:pb-28 -mt-20 md:-mt-35 z-50">
            <div className="absolute inset-0 bg-[#2e2e62] pointer-events-none" />

            {/* Header */}
            <div className="relative container mx-auto px-6 text-center mb-14 lg:mb-20">
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-nexa font-bold text-[#D4A017] text-sm md:text-base tracking-[0.2em] uppercase mb-4"
                >
                    What We Offer
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-nexa font-black text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[0.95] tracking-tight uppercase"
                >
                    Full-Service
                    <br />
                    <span className="text-[#D4A017]">
                        Digital Marketing
                        <br />
                        Agency
                    </span>
                </motion.h2>
            </div>

            {/* Services Grid */}
            <div className="relative container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
                    {servicesData.slice(0, 6).map((service, index) => (
                        <motion.div
                            key={service.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.08,
                            }}
                            className="bg-white rounded-2xl overflow-hidden flex flex-col"
                        >
                            {/* Image */}
                            <div className="relative w-full aspect-[16/10] bg-[#2e2e62]/10">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 xl:p-8 flex flex-col flex-1">
                                <h3 className="font-nexa font-black text-[#2E2E62] text-xl xl:text-2xl mb-3 leading-tight">
                                    {service.title}
                                </h3>
                                <p className="font-nexa text-gray-600 text-sm xl:text-base leading-relaxed mb-5 line-clamp-3">
                                    {service.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {service.tags.slice(0, 5).map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 rounded-full border border-[#D4A017] font-nexa font-bold text-xs text-[#D4A017] whitespace-nowrap"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Find Out More */}
                                <div className="mt-auto">
                                    <Link
                                        href={`/${service.slug}`}
                                        className="font-nexa font-bold text-[#D4A017] text-sm hover:text-[#B38612] transition-colors inline-flex items-center gap-1"
                                    >
                                        Find Out More &rarr;
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex justify-center mt-12 lg:mt-16"
                >
                    <CTAButton text="Explore All Services" href="/services" />
                </motion.div>
            </div>
        </section>
    );
}
