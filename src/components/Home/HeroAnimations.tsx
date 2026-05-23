"use client";

import { motion } from "framer-motion";

interface HeroAnimationsProps {
    onCtaClick: () => void;
}

export default function HeroAnimations({ onCtaClick }: HeroAnimationsProps) {
    return (
        <div className="relative w-full h-full flex flex-col justify-between z-10">
            {/* Main Content */}
            <div className="flex-1 flex flex-col justify-between px-6 md:px-12 lg:px-16 xl:px-24 pt-32 lg:pt-40 pb-14 lg:pb-16">
                {/* Large Typography + Right side text */}
                <div className="relative">
                    {/* connect */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="font-nexa font-bold text-black text-[5.5rem] md:text-[8rem] lg:text-[10rem] xl:text-[13rem] 2xl:text-[16rem] leading-[0.9] tracking-tight lowercase"
                    >
                        connect
                    </motion.h1>

                    {/* create + side text */}
                    <div className="relative -mt-8 md:-mt-12 lg:-mt-16 xl:-mt-20 2xl:-mt-28">
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                            className="font-nexa font-light text-black text-[5.5rem] md:text-[8rem] lg:text-[10rem] xl:text-[13rem] 2xl:text-[16rem] leading-[0.9] tracking-tight lowercase"
                        >
                            create
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            className="hidden md:block absolute bottom-[30px] lg:bottom-[35px] xl:bottom-[40px] left-[400px] md:left-[460px] lg:left-[560px] xl:left-[700px] 2xl:left-[840px] font-nexa text-black text-base lg:text-lg xl:text-xl 2xl:text-2xl max-w-[260px] lg:max-w-[300px] xl:max-w-[360px] 2xl:max-w-[420px] leading-snug"
                        >
                            Unlock your brand&apos;s potential with our proven marketing expertise.{" "}
                            <span className="font-bold">From strategy to execution, we drive growth.</span>
                        </motion.p>
                    </div>

                    {/* captivate */}
                    <div className="relative -mt-8 md:-mt-12 lg:-mt-16 xl:-mt-20 2xl:-mt-28">
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="font-nexa font-bold text-black text-[5.5rem] md:text-[8rem] lg:text-[10rem] xl:text-[13rem] 2xl:text-[16rem] leading-[0.9] tracking-tight lowercase"
                        >
                            captivate
                        </motion.h1>
                    </div>
                </div>

                {/* Bottom row: buttons + description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 lg:gap-6 mt-6 lg:mt-8"
                >
                    {/* Left: CTA buttons */}
                    <div className="flex items-center gap-4 lg:gap-6">
                        <motion.button
                            onClick={onCtaClick}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-black text-white font-nexa font-bold text-base lg:text-lg xl:text-xl px-6 lg:px-8 xl:px-10 pt-3 pb-2.5 lg:pt-4 lg:pb-3 xl:pt-4.5 xl:pb-3.5 rounded-full inline-flex items-center gap-3 cursor-pointer"
                        >
                            Let&apos;s Talk
                            <svg className="w-4 h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </motion.button>

                        <button className="flex items-center gap-3 cursor-pointer group">
                            <span className="w-10 h-10 lg:w-11 lg:h-11 rounded-full border-[2px] border-black/80 flex items-center justify-center group-hover:border-black transition-colors">
                                <svg className="w-4 h-4 lg:w-5 lg:h-5 text-black/80 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </span>
                            <span className="font-nexa font-medium text-black/80 text-sm lg:text-base xl:text-lg group-hover:text-black transition-colors">
                                Watch Showreel
                            </span>
                        </button>
                    </div>

                    {/* Right: Agency description */}
                    <p className="font-nexa text-black text-xs lg:text-sm xl:text-base 2xl:text-lg max-w-xs lg:max-w-sm xl:max-w-md 2xl:max-w-lg leading-relaxed">
                        We are a full-service, 360° marketing agency based in the Middle East, with active operations across the UAE, Saudi Arabia, and Egypt. Located in Dubai, supported by a skilled team operating between the UAE and Egypt.
                    </p>
                </motion.div>
            </div>

        </div>
    );
}
