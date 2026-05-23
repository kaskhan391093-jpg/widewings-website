"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function CTAFlightSection() {
    return (
        <section className="py-24 relative overflow-hidden bg-white">
            <div className="container mx-auto px-6 relative z-10">
                <div className="bg-[#2E2E62] rounded-[3rem] p-8 md:p-16 lg:p-24 relative overflow-hidden group">
                    {/* Background Robot Decoration */}
                    <div className="absolute right-[-10%] bottom-[-5%] w-[300px] md:w-[450px] lg:w-[600px] opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
                        <Image
                            src="/ResultsRobot.png"
                            alt="Background Robot"
                            width={1000}
                            height={1000}
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    <div className="max-w-3xl relative z-10">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[#D4A017] font-nexa font-bold text-lg md:text-xl uppercase tracking-widest mb-4 block"
                        >
                            Ready to transform your brand?
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-white font-nexa font-black text-4xl md:text-6xl lg:text-7xl leading-tight mb-8"
                        >
                            Prepare for <br />{" "}
                            <span className="text-[#D4A017]">Takeoff.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12 max-w-xl"
                        >
                            Lets build your legacy together. Our experts are
                            ready to craft a digital strategy that propels your
                            business to new heights.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center gap-4 bg-linear-to-r from-[#D4A017] to-[#B38612] text-white px-10 py-5 rounded-2xl font-nexa font-black text-xl shadow-2xl hover:scale-105 transition-transform duration-300 group"
                            >
                                Start the Flight
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="group-hover:translate-x-2 transition-transform duration-300"
                                >
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Decorative Shapes */}
                    <div className="absolute top-10 right-10 w-32 h-32 border-4 border-[#D4A017]/10 rounded-full animate-pulse" />
                    <div className="absolute bottom-20 right-1/4 w-16 h-16 bg-[#D4A017]/5 rounded-full" />
                </div>
            </div>
        </section>
    );
}
