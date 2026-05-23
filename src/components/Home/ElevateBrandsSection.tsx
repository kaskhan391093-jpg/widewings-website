"use client";

import { motion } from "framer-motion";
import CTAButton from "./CTAButton";

const cards = [
    {
        number: "01",
        text: "50+ experienced digital marketing specialists around the world working tirelessly to support clients irrespective of time zone",
    },
    {
        number: "02",
        text: "We are your trusted digital marketing agency in Dubai, delivering award-winning strategies for lead generation and brand growth.",
    },
    {
        number: "03",
        text: "Wide Wings Media operates as a fully in-house digital marketing company, ensuring quality control, speed, and accountability.",
    },
    {
        number: "04",
        text: "A Google & Meta-verified online marketing agency, delivering compliant and performance-driven campaigns.",
    },
    {
        number: "05",
        text: "At WWM, we are armed with deep local insight and a global perspective for scalable brand growth.",
    },
    {
        number: "06",
        text: "We have delivered proven results across more than 15 industries.",
    },
    {
        number: "07",
        text: "See why we are recognized as one of the best digital marketing agencies in Dubai by growing brands.",
    },
];

export default function ElevateBrandsSection() {
    return (
        <section className="relative bg-[#dcdcdc] pt-10 pb-10 lg:pt-20 lg:pb-20 rounded-b-[4rem] z-100">
            <div className="max-w-[110rem] mx-auto px-8 lg:px-16 xl:px-24 relative z-10">
                {/* Top area: Big decorative title + Card 01 text */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16 mb-10 lg:mb-12">
                    {/* Left: DIGITAL MARKETING + Built to Elevate Brands */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="flex-shrink-0"
                    >
                        <h2 className="font-nexa font-black text-[#2e2e62] text-6xl md:text-8xl lg:text-[7rem] xl:text-[9rem] 2xl:text-[11rem] leading-[0.85] tracking-tighter uppercase">
                            Digital
                            <br />
                            Marketing
                        </h2>
                        <p className="font-nexa font-bold text-[#d8a423] text-3xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl mt-2 lg:mt-4">
                            Built to Elevate Brands
                        </p>
                    </motion.div>

                    {/* Right: 01 number + Card 01 text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-lg lg:max-w-md xl:max-w-lg lg:text-right"
                    >
                        <span className="inline-flex items-center justify-center w-14 h-14 xl:w-16 xl:h-16 rounded-full bg-[#2e2e62] font-nexa font-bold text-[#d8a423] text-2xl xl:text-3xl mb-2 lg:ml-auto">
                            01
                        </span>
                        <p className="font-nexa text-[#2e2e62]/80 text-lg md:text-xl lg:text-2xl xl:text-2xl leading-relaxed">
                            {cards[0].text}
                        </p>
                    </motion.div>
                </div>

                {/* Bottom: Horizontal cards strip — cards 02 to 07, no empty CTA box */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="bg-[#2e2e62] rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
                        {cards.slice(1).map((card, index) => (
                            <motion.div
                                key={card.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.4 + index * 0.08,
                                }}
                                className="p-6 lg:p-6 xl:p-8 flex flex-col gap-4"
                            >
                                <span className="font-nexa font-bold text-[#d8a423] text-xl xl:text-2xl">
                                    {card.number}
                                </span>
                                <p className="font-nexa font-normal text-white/90 text-lg md:text-xl lg:text-2xl xl:text-2xl leading-relaxed">
                                    {card.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex justify-center mt-10 lg:mt-14"
                >
                    <CTAButton text="Learn More About Wide Wings" href="/about-us" />
                </motion.div>
            </div>
        </section>
    );
}
