"use client";

import Image from "next/image";

export default function ServicesSecondarySection() {
    return (
        <section className="relative w-full overflow-hidden py-16 lg:pb-24 bg-white">
            <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-20">
                    {/* Left Column: Robot */}
                    <div className="relative w-full lg:w-[45%] flex justify-center lg:justify-start order-2 lg:order-1 pt-12 sm:pt-40 md:pt-36">
                        <div className="relative w-full max-w-[500px] lg:max-w-none flex items-end">
                            {/* Background Shape */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src="/BgSecRobot.svg"
                                    alt="Background Shape"
                                    fill
                                    className="object-contain object-bottom pointer-events-none"
                                    priority
                                />
                            </div>
                            {/* Robot Image */}
                            <div className="relative w-full aspect-4/5 select-none z-10">
                                <Image
                                    src="/secundRobotServ.png"
                                    alt="Service Robot"
                                    fill
                                    className="object-contain object-bottom scale-110 lg:scale-125 origin-bottom "
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="w-full lg:w-[55%] order-1 lg:order-2 flex flex-col justify-center text-center lg:text-left">
                        {/* Icon */}
                        <div className="mb-6 flex justify-center lg:justify-start">
                            <div className="w-24 h-24 relative">
                                <Image
                                    src="/Verification Badge Icon.svg"
                                    alt="Verification Badge"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Top Ranked Heading */}
                        <h2 className="font-hero text-5xl md:text-8xl lg:text-[120px] leading-[0.85] text-[#2E2E62] uppercase mb-10 tracking-tight">
                            TOP <br /> RANKED
                        </h2>

                        {/* Subheadings */}
                        <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
                            <h3 className="font-ui text-xl md:text-3xl lg:text-4xl text-[#1E293B] leading-tight">
                                Take the Leap from{" "}
                                <br className="hidden lg:block" />
                                Experiments to Conversions
                            </h3>
                            <h4 className="font-ui text-lg md:text-2xl lg:text-3xl text-[#1E293B] uppercase tracking-wide">
                                YOUR PARTNER FOR PREMIER{" "}
                                <br className="hidden lg:block" />
                                DIGITAL MARKETING SERVICES
                            </h4>
                        </div>

                        {/* Body Text */}
                        <p className="font-ui text-base md:text-xl lg:text-2xl text-[#475569] max-w-lg mx-auto lg:mx-0 uppercase tracking-wider leading-relaxed">
                            A trusted partner <br className="hidden md:block" />
                            for startups, scaleups,{" "}
                            <br className="hidden md:block" />
                            and Fortune 100s.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
