"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-linear-to-br from-[#dcdcdc] via-[#f5f5f5] to-[#dcdcdc] flex items-center justify-center px-6 py-20 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.03 }}
                    transition={{ duration: 1 }}
                    className="absolute top-20 left-10 font-nexa font-black text-[#2e2e62] text-[20rem] leading-none"
                >
                    404
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.03 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="absolute bottom-20 right-10 font-nexa font-black text-[#2e2e62] text-[15rem] leading-none"
                >
                    404
                </motion.div>
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mb-6"
                        >
                            <h1 className="font-nexa font-black text-[8rem] md:text-[12rem] lg:text-[14rem] text-[#2e2e62] leading-none tracking-tighter">
                                404
                            </h1>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="font-nexa font-bold text-3xl md:text-5xl lg:text-6xl text-[#d8a423] mb-6"
                        >
                            Oops! Page Not Found
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="font-body text-lg md:text-xl text-[#2e2e62]/80 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
                        >
                            We searched everywhere, but couldn&apos;t find the
                            page you&apos;re looking for. It might have been
                            moved, deleted, or perhaps it never existed.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Link href="/">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 17,
                                    }}
                                    className="relative cursor-pointer overflow-hidden rounded-full text-center py-4 px-10 text-white font-bold shadow-lg hover:shadow-xl transition-shadow duration-300"
                                    style={{
                                        background:
                                            "linear-gradient(to right, #DFA518, #CF6B00)",
                                    }}
                                >
                                    <span className="font-section-title relative z-10 flex items-center gap-2 text-md md:text-lg lg:text-xl">
                                        Back to Home
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5"
                                        >
                                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                                        </svg>
                                    </span>
                                </motion.div>
                            </Link>

                            <Link href="/contact-us">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 17,
                                    }}
                                    className="relative cursor-pointer overflow-hidden rounded-full text-center py-4 px-10 font-bold shadow-lg hover:shadow-xl transition-all duration-300 bg-[#2e2e62] text-white hover:bg-[#2e2e62]/90"
                                >
                                    <span className="font-section-title relative z-10 flex items-center gap-2 text-md md:text-lg lg:text-xl">
                                        Contact Us
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-5 h-5"
                                        >
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                    </span>
                                </motion.div>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="mt-12"
                        >
                            <p className="font-nexa text-sm text-[#2e2e62]/60 mb-4">
                                Quick Links:
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                <Link
                                    href="/digital-marketing-services"
                                    className="font-nexa text-[#2e2e62] hover:text-[#d8a423] transition-colors duration-300 underline"
                                >
                                    Services
                                </Link>
                                <Link
                                    href="/about-us"
                                    className="font-nexa text-[#2e2e62] hover:text-[#d8a423] transition-colors duration-300 underline"
                                >
                                    About Us
                                </Link>
                                <Link
                                    href="/insights"
                                    className="font-nexa text-[#2e2e62] hover:text-[#d8a423] transition-colors duration-300 underline"
                                >
                                    Blogs
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50, rotate: -5 }}
                        animate={{ opacity: 1, x: 0, rotate: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex justify-center items-center"
                    >
                        <motion.div className="relative">
                            <div className="absolute inset-0 bg-linear-to-br from-[#DFA518]/20 to-[#CF6B00]/20 rounded-full blur-3xl scale-110" />
                            <Image
                                src="/ResultsRobot.png"
                                alt="Lost Robot"
                                width={500}
                                height={500}
                                className="relative z-10 drop-shadow-2xl"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="mt-20 text-center"
                >
                    <div className="bg-white/50 backdrop-blur-sm rounded-[3rem] p-8 md:p-12 shadow-lg border border-[#2e2e62]/10">
                        <h3 className="font-nexa font-bold text-2xl md:text-3xl text-[#2e2e62] mb-4">
                            Need Help Finding Something?
                        </h3>
                        <p className="font-body text-lg text-[#2e2e62]/70 mb-6 max-w-2xl mx-auto">
                            Our team at Wide Wings Media is here to help you
                            navigate. Whether you&apos;re looking for digital
                            marketing services, insights, or just want to
                            connect, we&apos;ve got you covered.
                        </p>
                        <div className="flex flex-wrap gap-6 justify-start md:justify-center items-center">
                            <a
                                href="mailto:info@wide-wings.ae"
                                className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300"
                            >
                                <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#DFA518] to-[#CF6B00] flex items-center justify-center">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="white"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <p className="font-nexa text-sm text-[#2e2e62]/60">
                                        Email Us
                                    </p>
                                    <p className="font-nexa font-bold text-[#2e2e62] hover:text-[#d8a423] transition-colors duration-300">
                                        info@wide-wings.ae
                                    </p>
                                </div>
                            </a>
                            <a
                                href="tel:+971555657609"
                                className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300"
                            >
                                <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#DFA518] to-[#CF6B00] flex items-center justify-center">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="2"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <p className="font-nexa text-sm text-[#2e2e62]/60">
                                        Call Us
                                    </p>
                                    <p className="font-nexa font-bold text-[#2e2e62] hover:text-[#d8a423] transition-colors duration-300">
                                        +971 55 565 7609
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
