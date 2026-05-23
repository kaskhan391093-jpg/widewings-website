"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ThankYouPage() {
    return (
        <main className="min-h-screen bg-[#F8F9FA] overflow-hidden flex items-center justify-center pt-24 pb-20">
            <div className="container mx-auto px-6 relative z-20">
                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-12 md:p-16 rounded-[2.5rem] shadow-2xl border border-white text-center"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                delay: 0.3,
                                type: "spring",
                                stiffness: 200,
                                damping: 20,
                            }}
                            className="w-28 h-28 mx-auto bg-[#D4A017]/10 rounded-full flex items-center justify-center text-[#D4A017] mb-8"
                        >
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                height="56"
                                width="56"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                        </motion.div>

                        <h1 className="font-nexa font-black text-4xl md:text-5xl text-[#2E2E62] mb-6 tracking-tight">
                            Message Received!
                        </h1>

                        <p className="text-gray-500 text-lg md:text-xl mb-10 leading-relaxed max-w-lg mx-auto">
                            Thank you for reaching out to Wide Wings Media. Your
                            message has successfully landed in our inbox! Our
                            team will review your inquiry and get back to you
                            within 24 hours.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 w-full sm:w-auto rounded-2xl bg-linear-to-r from-[#D4A017] to-[#B38612] text-white font-nexa font-bold text-lg shadow-lg shadow-[#D4A017]/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        height="20"
                                        width="20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <line
                                            x1="19"
                                            y1="12"
                                            x2="5"
                                            y2="12"
                                        ></line>
                                        <polyline points="12 19 5 12 12 5"></polyline>
                                    </svg>
                                    Return Home
                                </motion.button>
                            </Link>

                            <Link href="/insights/">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 w-full sm:w-auto rounded-2xl bg-white border-2 border-[#2E2E62] text-[#2E2E62] font-nexa font-bold text-lg transition-all duration-300 cursor-pointer hover:bg-gray-50"
                                >
                                    Explore Insights
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#D4A017]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#2E2E62]/5 rounded-full blur-3xl"></div>
            </div>
        </main>
    );
}
