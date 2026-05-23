"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LeadContactForm from "@/components/Contact/LeadContactForm";

export default function ContactUsPage() {
    return (

        <main className="min-h-screen bg-[#F8F9FA] overflow-hidden">
            {/* Immersive Hero Section - Matching Blog Style */}
            <section className="relative w-full bg-white overflow-visible mb-10">
                <div className="w-full max-w-[1600px] 3xl:max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 pt-10 pb-0">
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
                                    src="/Verification Badge Icon blue.svg"
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
                                    LET&apos;S <br /> SOAR
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
                                    Ready to take your brand to new heights? Our
                                    digital marketing experts in Dubai are here
                                    to craft your success story. Reach out to us
                                    today and let&apos;s build your legacy
                                    together.
                                </p>
                            </motion.div>
                        </div>

                        {/* Right Column: Robot Image */}
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
                                    alt="Contact Robot"
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

            {/* Contact & Form Section */}
            <section className="container mx-auto px-6 py-20 -mt-10 lg:-mt-20 relative z-20">
                <div className="grid lg:grid-cols-12 gap-10">
                    {/* Left: Quick Connect Info */}
                    <div className="lg:col-span-5 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 h-full flex flex-col"
                        >
                            <h2 className="font-nexa font-black text-3xl text-[#2E2E62] mb-10">
                                Quick Connect
                            </h2>

                            <div className="space-y-10">
                                {/* Phone/WhatsApp */}
                                <a
                                    href="https://wa.me/971555657609"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-5 group cursor-pointer"
                                >
                                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#D4A017]/10 flex items-center justify-center text-[#D4A017] group-hover:bg-[#D4A017] group-hover:text-white transition-all duration-300 shadow-sm">
                                        <svg
                                            stroke="currentColor"
                                            fill="none"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            height="24"
                                            width="24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-1">
                                            WhatsApp Now
                                        </p>
                                        <p className="text-xl font-black text-[#2E2E62]">
                                            +971 55 565 7609
                                        </p>
                                    </div>
                                </a>

                                {/* Email */}
                                <a
                                    href="mailto:info@wide-wings.ae"
                                    className="flex items-start gap-5 group cursor-pointer"
                                >
                                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#2E2E62]/5 flex items-center justify-center text-[#2E2E62] group-hover:bg-[#2E2E62] group-hover:text-white transition-all duration-300 shadow-sm">
                                        <svg
                                            stroke="currentColor"
                                            fill="none"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            height="24"
                                            width="24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                            <polyline points="22,6 12,13 2,6"></polyline>
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-1">
                                            Email Us
                                        </p>
                                        <p className="text-xl font-black text-[#2E2E62]">
                                            info@wide-wings.ae
                                        </p>
                                    </div>
                                </a>

                                {/* Address */}
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Wings+Media+LLC+Al+Quoz+Industrial+Area+3+Goshi+Warehouse+City+Warehouse+47"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-5 group cursor-pointer"
                                >
                                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#D4A017]/10 flex items-center justify-center text-[#D4A017] group-hover:bg-[#D4A017] group-hover:text-white transition-all duration-300 shadow-sm">
                                        <svg
                                            stroke="currentColor"
                                            fill="none"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            height="24"
                                            width="24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                            <circle
                                                cx="12"
                                                cy="10"
                                                r="3"
                                            ></circle>
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-1">
                                            Visit Office
                                        </p>
                                        <p className="text-xl font-black text-[#2E2E62]">
                                            Wide Wings Media, LLC, Dubai, United
                                            Arab Emirates,{" "}
                                        </p>
                                    </div>
                                </a>
                            </div>

                            {/* Social Presence */}
                            <div className="mt-16 pt-10 border-t border-gray-100">
                                <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-6">
                                    Stay Connected
                                </p>
                                <div className="flex gap-4">
                                    {[
                                        {
                                            href: "https://www.facebook.com/widewingsadvertising",
                                            svg: (
                                                <svg
                                                    className="w-6 h-6"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                                </svg>
                                            ),
                                        },
                                        {
                                            href: "https://www.instagram.com/wide.wings.media/",
                                            svg: (
                                                <svg
                                                    className="w-6 h-6"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.984 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.057-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.148-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.584-.071 4.85c-.055 1.17-.249 1.805-.415 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.056.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.584-.015-4.85-.071c-1.17-.055-1.805-.249-2.227-.415-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.015-3.584.071-4.85c.055-1.17.249-1.805.415-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.265-.057 1.646-.07 4.85-.07zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                                </svg>
                                            ),
                                        },
                                        {
                                            href: "https://x.com/Wide_WingsMedia/",
                                            svg: (
                                                <svg
                                                    className="w-6 h-6"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" />
                                                </svg>
                                            ),
                                        },
                                        {
                                            href: "https://www.linkedin.com/company/wide-wings-media-advertising/",
                                            svg: (
                                                <svg
                                                    className="w-6 h-6"
                                                    fill="currentColor"
                                                    viewBox="0 0 448 512"
                                                >
                                                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                                                </svg>
                                            ),
                                        },
                                    ].map((social, i) => (
                                        <motion.a
                                            key={i}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ y: -5 }}
                                            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#D4A017] hover:border-[#D4A017] transition-colors duration-300"
                                        >
                                            {social.svg}
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Immersive Glass Form */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-white h-full"
                        >
                            <LeadContactForm />
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}





