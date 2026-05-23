"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import LeadContactForm from "@/components/Contact/LeadContactForm";

interface HomeHeroContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function HomeHeroContactModal({
    isOpen,
    onClose,
}: HomeHeroContactModalProps) {
    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-999999999999 bg-[#2E2E62]/55 backdrop-blur-sm p-4 md:p-6"
                    onClick={onClose}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Free consultation form"
                >
                    <div className="flex min-h-full items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 24, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.96 }}
                            transition={{ duration: 0.24, ease: "easeOut" }}
                            className="relative w-full max-w-4xl overflow-hidden rounded-4xl bg-white shadow-2xl"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <button
                                type="button"
                                onClick={onClose}
                                className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-[#2E2E62]/10 bg-white text-[#2E2E62] shadow-sm transition-colors hover:bg-[#2E2E62] hover:text-white cursor-pointer"
                                aria-label="Close popup form"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className="h-5 w-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 6l12 12M18 6L6 18"
                                    />
                                </svg>
                            </button>

                            <div className="max-h-[90vh] overflow-y-auto p-6 pt-16 md:p-10 md:pt-12">
                                <LeadContactForm
                                    source="home-page-popup"
                                    template="home-hero-popup"
                                />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
