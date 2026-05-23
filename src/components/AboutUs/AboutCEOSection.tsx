"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutCEOSection() {
    return (
        <section className="relative w-full pb-16 lg:pb-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    {/* Left Side: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
                    >
                        {/* Verified Badge */}
                        <div className="relative w-16 h-16 md:w-24 md:h-24 mb-6">
                            <Image
                                src="/Verification Badge Icon blue.svg"
                                alt="Verified Badge"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Name */}
                        <h2 className="font-section-title text-[#D49D26] text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4">
                            Reem Osman
                        </h2>

                        {/* Title with Faded Style */}
                        <div className="relative">
                            <h3 className="font-hero text-[#D9D9D9] text-[4rem] md:text-[6rem] lg:text-[7rem] xl:text-[8rem] leading-[0.85] uppercase tracking-tight">
                                CEO & <br /> FOUNDER
                            </h3>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative w-full lg:w-1/2 flex justify-center lg:justify-end"
                    >
                        <div className="relative w-full max-w-[220px] md:max-w-[280px] lg:max-w-[340px] aspect-3/4 lg:mr-10 grid grid-cols-1 items-end justify-items-center">
                            {/* Rounded Gray Background Shape */}
                            <div className="col-start-1 row-start-1 z-0 w-[110%] h-[92%] relative -translate-x-8">
                                <Image
                                    src="/BgShape.svg"
                                    alt=""
                                    fill
                                    className="object-contain object-bottom opacity-100"
                                />
                            </div>

                            {/* CEO Image */}
                            <div className="col-start-1 row-start-1 z-10 w-full relative translate-x-4">
                                <Image
                                    src="/Dr_reem.png"
                                    alt="Reem Osman - CEO & Founder"
                                    width={400}
                                    height={533}
                                    className="w-full h-auto object-contain origin-bottom"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
