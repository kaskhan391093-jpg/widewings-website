"use client";

import Image from "next/image";
import Link from "next/link";
import CTAButton from "./Home/CTAButton";
import LazyFooterMap from "./LazyFooterMap";
export default function Footer() {
    return (
        <footer className="w-full bg-[#2E2E62] rounded-t-[30px] md:rounded-t-[50px] text-white overflow-hidden pb-12 px-8 md:px-12 lg:px-20 pt-16 lg:pt-24">
            <div className="max-w-[1600px] mx-auto px-4 lg:px-12">
                {/* Unified 2-column grid for perfect balance */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
                    {/* Left Side: Brand & CTA */}
                    <div className="flex flex-col items-start space-y-12">
                        {/* Logo - Scaled to anchor the left side */}
                        <div className="relative w-full aspect-2/1 max-w-[480px] -ml-6 lg:-ml-10">
                            <Image
                                src="/LogoWhite.svg"
                                alt="Wide Wings Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </div>

                        {/* Description Text Block */}
                        <div className="flex flex-col space-y-8 w-full max-w-lg">
                            <p className="font-nexa text-xl md:text-2xl lg:text-3xl text-white leading-[1.3] font-normal tracking-wide">
                                We specialize in connecting communities and
                                ideas that turn your vision into a reality.
                            </p>
                            <div className="w-full h-px bg-white/40"></div>
                        </div>

                        {/* CTA Button */}
                        <CTAButton
                            text="Free Consultation"
                            className="px-10! py-4! text-xl md:text-2xl shadow-lg transition-all"
                            href="/contact-us"
                        />

                        {/* Social Icons & Copyright */}
                        <div className="flex flex-col space-y-4 pt-2">
                            <div className="flex items-center gap-8 text-white">
                                {/* Facebook */}
                                <Link
                                    href="https://www.facebook.com/widewingsadvertising"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="opacity-100 hover:text-[#DFA518] transition-colors"
                                    aria-label="Visit our Facebook page"
                                >
                                    <svg
                                        className="w-8 h-8"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </Link>
                                {/* Instagram */}
                                <Link
                                    href="https://www.instagram.com/wide.wings.media/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="opacity-100 hover:text-[#DFA518] transition-colors"
                                    aria-label="Visit our Instagram page"
                                >
                                    <svg
                                        className="w-8 h-8"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.984 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.057-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.148-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.584-.071 4.85c-.055 1.17-.249 1.805-.415 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.056.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.584-.015-4.85-.071c-1.17-.055-1.805-.249-2.227-.415-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.015-3.584.071-4.85c.055-1.17.249-1.805.415-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.265-.057 1.646-.07 4.85-.07zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                    </svg>
                                </Link>
                                {/* LinkedIn */}
                                <Link
                                    href="https://www.linkedin.com/company/wide-wings-media-advertising/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="opacity-100 hover:text-[#DFA518] transition-colors"
                                    aria-label="Visit our LinkedIn page"
                                >
                                    <svg
                                        className="w-8 h-8"
                                        fill="currentColor"
                                        viewBox="0 0 448 512"
                                    >
                                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                                    </svg>
                                </Link>
                                {/* X / Twitter */}
                                <Link
                                    href="https://x.com/Wide_WingsMedia/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="opacity-100 hover:text-[#DFA518] transition-colors"
                                    aria-label="Visit our X (Twitter) page"
                                >
                                    <svg
                                        className="w-8 h-8"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" />
                                    </svg>
                                </Link>
                            </div>
                            <p className="text-xs md:text-sm font-nexa text-white tracking-wide">
                                Â© {new Date().getFullYear()} | All Rights
                                Reserved by Wide Wings Media
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Contact Info & Map (Reordered for Mobile) */}
                    <div className="flex flex-col space-y-10">
                        {/* 1. Contact Info Grid - Appears FIRST on mobile, SECOND on desktop */}
                        <div className="flex flex-col md:flex-row items-start gap-4 lg:gap-16 order-1 lg:order-2">
                            {/* Vertical Title */}
                            <div className="hidden md:flex items-start">
                                <h3
                                    className="font-nexa font-bold text-[#DFA518] text-base md:text-lg lg:text-3xl tracking-[0.23em] whitespace-nowrap uppercase"
                                    style={{
                                        writingMode: "vertical-rl",
                                        transform: "rotate(180deg)",
                                    }}
                                >
                                    CONTACT US
                                </h3>
                            </div>

                            {/* Mobile Title */}
                            <div className="md:hidden">
                                <h3 className="font-nexa font-bold text-[#DFA518] text-base tracking-[0.35em] uppercase">
                                    CONTACT US
                                </h3>
                            </div>

                            {/* Address & Details */}
                            <div className="flex flex-col font-nexa text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed">
                                <p className="font-bold">Wide Wings Media, LLC,</p>
                                <p>Dubai, United Arab Emirates,</p>
                                <p>Al Quoz Industrial Area 3,</p>
                                <p>Goshi Warehouse City,</p>
                                <p>Warehouse #47.</p>
                                <div className="pt-4 -space-y-2">
                                    <p>
                                        Office:{" "}
                                        <a
                                            href="tel:+97143352645"
                                            className="font-bold hover:text-[#DFA518] transition-colors"
                                        >
                                            +971 4 335 2645
                                        </a>
                                    </p>
                                    <p>
                                        Mobile:{" "}
                                        <a
                                            href="tel:+971555657609"
                                            className="font-bold hover:text-[#DFA518] transition-colors"
                                        >
                                            +971 55 565 7609
                                        </a>
                                    </p>
                                    <p>
                                        Email Us:{" "}
                                        <a
                                            href="mailto:info@wide-wings.ae"
                                            className="font-bold hover:text-[#DFA518] transition-colors"
                                        >
                                            info@wide-wings.ae
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 2. Interactive Map - Appears SECOND on mobile, FIRST on desktop */}
                        <div className="w-full aspect-video lg:aspect-16/7 bg-[#1a1a3a] rounded-[40px] overflow-hidden order-2 lg:order-1 relative">
                            <LazyFooterMap />
                        </div>

                        {/* Bottom Bar for Desktop */}
                        <div className="hidden lg:flex justify-between items-center text-xs md:text-sm font-nexa tracking-widest text-white/60 pt-4 order-3">
                            <div className="flex gap-8">
                                <Link
                                    href="/terms-conditions"
                                    className="hover:text-white transition-colors"
                                >
                                    TERMS & CONDITIONS
                                </Link>
                                <Link
                                    href="/privacy-policy"
                                    className="hover:text-white transition-colors"
                                >
                                    PRIVACY POLICY
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}



