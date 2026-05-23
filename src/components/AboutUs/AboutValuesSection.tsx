"use client";

import { motion } from "framer-motion";

const values = [
    {
        number: "01",
        text: "Wide Wings Media leverages the latest technology and tools to deliver unparalleled results.",
    },
    {
        number: "02",
        text: "Our approach is rooted in data driven insights, enabling us to make informed decisions that maximize return on investment (ROI) for our clients.",
    },
    {
        number: "03",
        text: "We understand that every business is unique, which is why we offer tailor-made digital marketing strategies to meet the specific needs and goals of each client.",
    },
];

export default function AboutValuesSection() {
    return (
        <section className="relative w-full pb-20 pt-10 lg:pb-32 lg:pt-0 bg-white overflow-hidden">
            <div className="container mx-auto px-4 lg:px-6 max-w-[1600px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.15 }}
                            className={`bg-[#2E2E62] rounded-[40px] p-8 md:p-12 relative flex flex-col justify-start min-h-[350px] md:min-h-[450px] lg:min-h-[550px] overflow-hidden group`}
                        >
                            {/* Text Content */}
                            <p className="font-ui text-white text-lg md:text-xl xl:text-2xl leading-relaxed relative z-10 max-w-[95%] font-normal mb-10 md:mb-32">
                                {value.text}
                            </p>

                            {/* Large Background Number */}
                            <div className="absolute bottom-0 -left-6 z-0 pointer-events-none select-none overflow-visible flex items-end h-[180px] md:h-[220px] lg:h-[280px]">
                                <span className="font-hero text-white text-[8rem] md:text-[10rem] lg:text-[14rem] leading-[0.7] tracking-tighter translate-y-[25%] opacity-100 block">
                                    {value.number}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
