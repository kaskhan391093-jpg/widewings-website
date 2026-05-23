"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const NewsHeaderSection = () => {
    return (
        <section className="relative w-full bg-white overflow-visible">
            {/* Main Content Wrapper - Contained width for ultra-wide screens */}
            <div className="w-full max-w-[1600px] 3xl:max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-0">
                <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 lg:gap-0">
                    {/* Left Column: Text Content */}
                    <div className="relative w-full lg:w-[48%] z-20 flex flex-col items-start text-left mb-8 lg:mb-32">
                        {/* Decorative Icon */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="mb-6"
                        >
                            <Image
                                src="/Verification Badge Icon.svg"
                                alt="Verified Badge"
                                width={120}
                                height={120}
                                className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28"
                            />
                        </motion.div>

                        {/* Title Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mb-6 font-nexa"
                        >
                            <h1 className="font-black text-[#2E2E62] text-[3rem] md:text-[5rem] lg:text-[5.5rem] xl:text-[6.5rem] 2xl:text-[7.5rem] leading-[0.85] tracking-tight uppercase">
                                NEWS & <br /> MEDIA
                            </h1>
                        </motion.div>

                        {/* Body Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="font-ui"
                        >
                            <p className="text-[#2E2E62] text-base md:text-lg lg:text-xl leading-relaxed max-w-[550px]">
                                Stay updated with the latest press mentions, media coverage, and 
                                company announcements. Discover how Wide Wings Media is making headlines 
                                and shaping the future of digital marketing and branding.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column: Robot Image (or similar) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative w-full lg:w-[40%] flex flex-col justify-end items-center lg:items-end self-stretch z-10"
                    >
                        <div className="relative w-full max-w-[340px] md:max-w-[320px] lg:max-w-none lg:w-full lg:-mr-4 flex flex-col justify-end">
                            <Image
                                src="/BlogRobot.png"
                                alt="News Robot"
                                width={800}
                                height={800}
                                className="w-full h-auto object-contain block self-end"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default NewsHeaderSection;
