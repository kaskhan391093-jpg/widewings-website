"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const menuRef = useRef<HTMLDivElement>(null);
    const toggleRef = useRef<HTMLButtonElement>(null);

    const links = [
        { href: "/", label: "Home" },
        { href: "/digital-marketing-services/", label: "Services" },
        { href: "/about-us/", label: "About Us" },
        { href: "/insights/", label: "Blogs" },
        { href: "/news/", label: "News" },
        { href: "/contact-us/", label: "Contact Us" },
    ];

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === "Escape") setIsMenuOpen(false);
            };
            window.addEventListener("keydown", handleKeyDown);
            return () => {
                document.body.style.overflow = "";
                window.removeEventListener("keydown", handleKeyDown);
            };
        }
    }, [isMenuOpen]);

    useEffect(() => {
        if (isMenuOpen && menuRef.current) {
            const focusableElements = menuRef.current.querySelectorAll(
                'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])',
            );
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[
                focusableElements.length - 1
            ] as HTMLElement;

            const handleTabTrap = (e: KeyboardEvent) => {
                if (e.key === "Tab") {
                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            e.preventDefault();
                            lastElement.focus();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            e.preventDefault();
                            firstElement.focus();
                        }
                    }
                }
            };

            firstElement?.focus();
            window.addEventListener("keydown", handleTabTrap);
            return () => window.removeEventListener("keydown", handleTabTrap);
        }
    }, [isMenuOpen]);

    return (
        <header className="absolute top-0 left-0 right-0 w-full z-100">
            <div className="flex items-center justify-between px-6 lg:px-12 xl:px-16 py-4 lg:py-6">
                {/* Logo */}
                <Link href="/" className="relative h-12 lg:h-14 xl:h-16 w-auto aspect-[3/1] block">
                    <Image
                        src="/Logo.webp"
                        alt="Wide Wings Media Home"
                        fill
                        className="object-contain object-left"
                        sizes="(min-width: 1024px) 200px, 144px"
                    />
                </Link>

                {/* Right: Let's Talk + Hamburger */}
                <div className="flex items-center gap-3 lg:gap-4">
                    <Link
                        href="/contact-us/"
                        className="bg-black text-white font-nexa font-bold text-sm lg:text-base xl:text-lg px-5 lg:px-7 xl:px-9 pt-2.5 pb-2 lg:pt-3 lg:pb-2.5 xl:pt-3.5 xl:pb-3 rounded-full inline-flex items-center gap-2 hover:bg-black/85 transition-colors"
                    >
                        Let&apos;s Talk
                        <svg className="w-5 h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    </Link>

                    <button
                        ref={toggleRef}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="w-10 h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 rounded-full border-[2px] border-black/80 flex items-center justify-center hover:border-black transition-colors cursor-pointer"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        <div className="flex flex-col justify-center gap-1.5">
                            <span
                                className={`block w-5 lg:w-6 h-[2px] bg-black transition-all duration-200 ${isMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
                            />
                            <span
                                className={`block w-5 lg:w-6 h-[2px] bg-black transition-all duration-200 ${isMenuOpen ? "opacity-0" : ""}`}
                            />
                            <span
                                className={`block w-5 lg:w-6 h-[2px] bg-black transition-all duration-200 ${isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Full-screen Menu Overlay */}
            <div
                id="mobile-menu"
                ref={menuRef}
                className={`
                    fixed inset-0 bg-[#2E2E62]/95 backdrop-blur-md
                    overflow-hidden transition-all duration-500 ease-in-out z-40
                    ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                `}
                aria-hidden={!isMenuOpen}
            >
                <nav
                    className="flex flex-col items-center justify-center h-full gap-8"
                    aria-label="Navigation"
                >
                    {links.map((link, index) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                tabIndex={isMenuOpen ? 0 : -1}
                                style={{ transitionDelay: `${index * 50}ms` }}
                                className={`
                                    font-nexa text-white text-3xl lg:text-5xl tracking-wide transform transition-all duration-300
                                    ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
                                    ${isActive ? "font-bold" : "font-light hover:font-bold"}
                                `}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
}
