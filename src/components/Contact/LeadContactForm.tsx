"use client";

import React from "react";
import { motion } from "framer-motion";
import { sendContactEmail } from "@/app/actions/contact";
import { useRouter } from "next/navigation";

interface LeadContactFormProps {
    source?: string;
    template?: string;
    title?: string;
    description?: string;
}

const services = [
    "Website & App Development",
    "Social Media Management",
    "Paid Advertising & Media Buying",
    "SEO & Performance Management",
    "Content Creation",
    "Creative & Branding",
];

export default function LeadContactForm({
    source = "contact-page",
    template = "contact-us-page",
    title = "Send a Message",
    description = "We reply to all inquiries within 24 hours.",
}: LeadContactFormProps) {
    const [selectedService, setSelectedService] = React.useState(
        "Website & App Development",
    );
    const [isServiceOpen, setIsServiceOpen] = React.useState(false);
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitStatus, setSubmitStatus] = React.useState<"error" | null>(
        null,
    );
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const formData = new FormData(e.currentTarget);
        formData.append("service", selectedService);
        formData.append("source", source);
        formData.append("template", template);

        try {
            const result = await sendContactEmail(formData);
            if (result.success) {
                router.push("/thank-you/");
            } else {
                setSubmitStatus("error");
                setIsSubmitting(false);
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitStatus("error");
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <h2 className="font-nexa font-black text-3xl text-[#2E2E62] mb-2">
                {title}
            </h2>
            <p className="text-gray-500 mb-10">{description}</p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-[#2E2E62] ml-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#D4A017] focus:bg-white transition-all duration-300 font-nexa text-[#2E2E62]"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-[#2E2E62] ml-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="john@example.com"
                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#D4A017] focus:bg-white transition-all duration-300 font-nexa text-[#2E2E62]"
                            required
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-[#2E2E62] ml-2">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="+971 00 000 0000"
                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#D4A017] focus:bg-white transition-all duration-300 font-nexa text-[#2E2E62]"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-[#2E2E62] ml-2">
                            Interested Service
                        </label>
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setIsServiceOpen(!isServiceOpen)}
                                className="w-full px-6 py-4 cursor-pointer rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#D4A017] focus:bg-white transition-all duration-300 font-nexa text-[#2E2E62] text-left flex justify-between items-center"
                            >
                                <span>{selectedService}</span>
                                <svg
                                    className={`w-4 h-4 transition-transform duration-300 ${isServiceOpen ? "rotate-180" : ""}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            {isServiceOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 overflow-hidden"
                                >
                                    {services.map((service) => (
                                        <button
                                            key={service}
                                            type="button"
                                            onClick={() => {
                                                setSelectedService(service);
                                                setIsServiceOpen(false);
                                            }}
                                            className="w-full cursor-pointer px-6 py-3 text-left hover:bg-gray-50 font-nexa text-[#2E2E62] transition-colors hover:text-[#D4A017]"
                                        >
                                            {service}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-[#2E2E62] ml-2">
                        Your Message
                    </label>
                    <textarea
                        rows={4}
                        name="message"
                        placeholder="How can we help your brand grow?"
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#D4A017] focus:bg-white transition-all duration-300 font-nexa text-[#2E2E62] resize-none"
                        required
                    />
                </div>

                <input
                    type="text"
                    name="_honey"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                />

                <motion.button
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    disabled={isSubmitting}
                    className={`w-full py-5 rounded-2xl bg-linear-to-r from-[#D4A017] to-[#B38612] text-white font-nexa font-black text-xl shadow-lg shadow-[#D4A017]/30 flex items-center justify-center gap-3 cursor-pointer group transition-all duration-300 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                    {isSubmitting ? (
                        <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                        <>
                            Let&apos;s Talk
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
                                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                            >
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </>
                    )}
                </motion.button>

                {submitStatus === "error" && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-50 border border-red-100 p-4 rounded-xl flex items-center gap-3 text-red-700"
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
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        <p className="font-nexa font-bold text-sm">
                            Failed to send message. Please try again.
                        </p>
                    </motion.div>
                )}
            </form>
        </>
    );
}
