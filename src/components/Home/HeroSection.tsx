"use client";

import { useCallback, useState } from "react";
import HeroAnimations from "./HeroAnimations";
import HomeHeroContactModal from "@/components/Contact/HomeHeroContactModal";

export default function HeroSection() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const openContactModal = useCallback(() => {
        setIsContactModalOpen(true);
    }, []);

    const closeContactModal = useCallback(() => {
        setIsContactModalOpen(false);
    }, []);

    return (
        <>
            <section className="relative w-full min-h-screen flex flex-col overflow-hidden bg-[#f5f5f5]">
                <HeroAnimations onCtaClick={openContactModal} />

                {/* Gradient blob */}
                <div
                    className="absolute top-0 right-0 w-[50%] lg:w-[45%] h-full z-0 pointer-events-none"
                    aria-hidden="true"
                >
                    <div className="absolute inset-0 bg-gradient-to-bl from-pink-400 via-orange-300 to-yellow-300 opacity-80 blur-[80px] rounded-full scale-125 translate-x-[15%] translate-y-[-5%]" />
                    <div className="absolute top-[20%] right-[10%] w-[60%] h-[50%] bg-gradient-to-tr from-yellow-400 to-pink-500 opacity-60 blur-[80px] rounded-full" />
                    <div className="absolute top-[40%] right-[5%] w-[40%] h-[40%] bg-gradient-to-b from-fuchsia-500 to-pink-400 opacity-50 blur-[80px] rounded-full" />
                </div>
            </section>

            <HomeHeroContactModal
                isOpen={isContactModalOpen}
                onClose={closeContactModal}
            />
        </>
    );
}
