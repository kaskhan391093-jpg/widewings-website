"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Card = ({
    number,
    title,
    body,
    buttonText,
    href,
    highlighted = false,
    delay = 0,
    customBodyClass = "",
}: {
    number: string;
    title: string;
    body: string | string[];
    buttonText: string;
    href?: string;
    highlighted?: boolean;
    delay?: number;
    customBodyClass?: string;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={`relative flex flex-col p-8 rounded-[40px] shadow-xl h-full transition-colors duration-300 ${
                highlighted
                    ? "bg-[#2E2E62] text-white"
                    : "bg-white text-[#2E2E62]"
            }`}
        >
            <div className="mb-6">
                <span className="text-6xl md:text-7xl lg:text-8xl font-hero opacity-90 leading-none">
                    {number}
                </span>
            </div>

            <h3 className="text-xl md:text-2xl font-section-title mb-6 leading-tight">
                {title}
            </h3>

            <div
                className={`grow mb-8 font-ui text-[15px] md:text-base leading-relaxed opacity-90 ${customBodyClass}`}
            >
                {Array.isArray(body) ? (
                    <ul className="space-y-3">
                        {body.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                                <span className="mt-1 shrink-0">
                                    <svg
                                        className={`w-4 h-4 ${
                                            highlighted
                                                ? "text-white"
                                                : "text-[#2E2E62]"
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="3"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>{body}</p>
                )}
            </div>

            {href ? (
                <Link href={href} className="mt-auto block">
                    <div
                        className="w-full py-4 px-6 rounded-full font-section-title text-white text-center text-sm md:text-base shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
                        style={{
                            background:
                                "linear-gradient(to right, #DFA518, #CF6B00)",
                        }}
                    >
                        {buttonText}
                    </div>
                </Link>
            ) : (
                <button
                    className="mt-auto py-4 px-6 rounded-full font-section-title text-white text-sm md:text-base shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
                    style={{
                        background:
                            "linear-gradient(to right, #DFA518, #CF6B00)",
                    }}
                >
                    {buttonText}
                </button>
            )}
        </motion.div>
    );
};

const WhyWorkWithUsSection = () => {
    return (
        <section className="relative w-full overflow-hidden">
            {/* Background Section (Two-tone) */}
            <div className="absolute inset-0 flex flex-col">
                <div className="h-[65%] bg-[#F3F4F6]" />
                <div className="h-[35%] bg-[#2E2E62] rounded-t-[4rem]" />
            </div>

            <div className="relative container mx-auto px-6 pt-10 pb-20 xl:pt-0 max-w-7xl">
                {/* Header */}
                <div className="text-center md:mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-[#2E2E62] font-section-title text-3xl md:text-5xl lg:text-6xl mb-1"
                    >
                        Why You Should
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-[#DFA518] font-hero text-4xl md:text-7xl lg:text-8xl mb-6 tracking-tight"
                    >
                        WORK WITH US
                    </motion.h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    <Card
                        number="01"
                        title="We are one of the top digital marketing companies in Dubai"
                        body="We deliver strategic thinking, outstanding execution, and trackable results, which is why we have worked with brands across the UAE, Saudi Arabia, and indeed the entire GCC region."
                        buttonText="Boost Your Marketing Game"
                        href="/contact-us"
                        delay={0}
                        customBodyClass="md:text-xl"
                    />
                    <Card
                        number="02"
                        title="What Sets Us Apart"
                        body={[
                            "GCC’s best digital marketing agency",
                            "Google & Meta-verified partners",
                            "Flexible terms – No minimum retainer",
                            "Local knowledge with global perspective",
                            "Performance-based, full-funnel approach",
                            "Full capability visibility with real-time dashboards",
                        ]}
                        buttonText="Explore More Strategies"
                        href="/contact-us"
                        highlighted={true}
                        delay={0.1}
                    />
                    <Card
                        number="03"
                        title="Trusted by brands across Dubai, GCC, and beyond."
                        body={[
                            "4.9/5 Average client rating",
                            "600% increase in traffic, 5x ROAS for the SGH Group",
                            "Proven results across 15+ industries",
                            "Dedicated strategists & in-house creatives",
                            "Get a free digital strategy session",
                        ]}
                        buttonText="Get The Full Story"
                        href="/about-us"
                        delay={0.2}
                    />
                </div>
            </div>
        </section>
    );
};

export default WhyWorkWithUsSection;
