"use client";

import Image from "next/image";
import ClientsLogos from "../Home/ClientsLogos";

const AboutHeroSection = () => {
    return (
        <section className="relative w-full bg-white pt-16 lg:py-32 pb-12 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-[1400px]">
                <div className="relative bg-[#F2F2F2] rounded-[2.5rem] lg:rounded-[4rem] px-6 pt-12 pb-0 md:pt-16 md:pb-0 lg:pt-24 lg:px-24 lg:pb-0 flex flex-col lg:flex-row items-center lg:items-end gap-12 lg:gap-16 min-h-[500px] lg:min-h-[700px] overflow-visible">
                    {/* Robot Visual Column (LEFT on Desktop) */}
                    <div className="relative w-full lg:w-[48%] flex justify-center items-end self-stretch lg:h-full order-2 lg:order-1">
                        {/* Circular Background Shape */}
                        <div className="absolute left-[4%] md:left-[20%] lg:left-[-10%] bottom-[35%] lg:bottom-[40%] w-[150px] md:w-[250px] lg:w-[320px] z-0 pointer-events-none">
                            <Image
                                src="/Cirvular.svg"
                                alt=""
                                width={350}
                                height={350}
                                className="w-full h-auto opacity-100"
                            />
                        </div>

                        {/* Robot Image Container */}
                        <div className="relative z-10 w-full max-w-[400px] md:max-w-[450px] lg:max-w-[800px] flex justify-center items-end">
                            <Image
                                src="/About-Us.png"
                                alt="About Us Robot"
                                width={1200}
                                height={1400}
                                className="w-full h-auto object-contain block lg:scale-[1.1] scale-[1.05] origin-bottom lg:translate-y-0"
                                priority
                            />
                        </div>
                    </div>

                    {/* Content Column (RIGHT on Desktop) */}
                    <div className="relative z-20 w-full lg:w-[52%] flex flex-col justify-center text-left pt-10 lg:pt-0 pb-12 md:pb-16 lg:pb-48 order-1 lg:order-2">
                        {/* Heading Section */}
                        <div className="flex flex-col mb-8 font-nexa">
                            <h1 className="text-5xl md:text-7xl lg:text-[7rem] xl:text-[7.5rem] font-black text-[#2E2E62] leading-[0.8] uppercase tracking-tight">
                                OUR
                            </h1>
                            <h2 className="text-5xl md:text-7xl lg:text-[7rem] xl:text-[7.5rem] font-black text-[#2E2E62] leading-[0.8] uppercase tracking-tight -mt-1 lg:-mt-2">
                                MISSION
                            </h2>
                        </div>

                        {/* Paragraph Content */}
                        <div className="font-ui">
                            <p className="text-[#333333] text-sm md:text-lg lg:text-xl xl:text-2xl font-normal leading-relaxed max-w-2xl">
                                At Wide Wings Media, we believe in limitless
                                potential. Our mission is to help brands break
                                free from boundaries and explore new horizons.
                                With Proper research, Tailored Plan and creative
                                solutions, we empower businesses to spread their
                                wings and soar way beyond their expectations
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Client Logos Strip (Directly below hero content) */}
            <div className="relative w-full overflow-visible z-30 mt-[-50px] md:mt-[-80px] lg:mt-[-150px]">
                <div className="w-[150vw] lg:w-[120vw] xl:w-screen mx-auto -rotate-2">
                    <ClientsLogos />
                </div>
            </div>
        </section>
    );
};

export default AboutHeroSection;
