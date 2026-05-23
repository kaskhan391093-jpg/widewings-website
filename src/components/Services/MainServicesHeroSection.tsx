"use client";

import Image from "next/image";

const MainServicesHeroSection = () => {
    return (
        <section className="relative w-full bg-white pt-16 lg:pt-50 pb-12 lg:pb-24 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-[1400px]">
                <div className="relative bg-[#F2F2F2] rounded-[2.5rem] lg:rounded-[4rem] px-6 pt-12 pb-0 md:pt-16 md:pb-0 lg:pt-48 lg:px-24 lg:pb-0 flex flex-col lg:flex-row-reverse items-center lg:items-end gap-12 lg:gap-16 min-h-[500px] lg:min-h-[600px] overflow-visible">
                    {/* Decorative Orange Shape Top Right */}
                    <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 overflow-hidden rounded-tr-[2.5rem] lg:rounded-tr-[4rem] pointer-events-none">
                        <div className="absolute top-[-20%] right-[35%] w-[120%] h-[120%] bg-[#D4A853] rounded-full translate-x-1/2 -translate-y-1/2 opacity-90" />
                    </div>

                    {/* Content Column (Now first in JSX, shows top on mobile) */}
                    <div className="relative z-20 w-full lg:w-[52%] flex flex-col justify-center text-left pt-10 lg:pt-0 pb-12 md:pb-16 lg:pb-24">
                        {/* Heading Section */}
                        <div className="flex flex-col mb-8 font-nexa">
                            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                                <h1 className="text-[3rem] md:text-[6.5rem] lg:text-[7rem] xl:text-[7.5rem] font-black text-[#2E2E62] leading-[0.85] uppercase tracking-tight">
                                    OUR
                                </h1>
                                <span className="text-xl md:text-3xl lg:text-[2.2rem] xl:text-[2rem] font-bold text-[#D49D26] whitespace-nowrap translate-y-[-10px]">
                                    Digital Marketing
                                </span>
                            </div>
                            <h2 className="text-[3rem] md:text-[6.5rem] lg:text-[7rem] xl:text-[7.5rem] font-black text-[#2E2E62] leading-[0.85] uppercase tracking-tight -mt-1 lg:-mt-2">
                                SERVICES
                            </h2>
                        </div>

                        {/* Paragraph Content */}
                        <div className="font-body space-y-4">
                            <p className="text-[#2E2E62]/90 text-sm md:text-base lg:text-lg xl:text-xl font-normal leading-relaxed max-w-2xl">
                                Use digital marketing services that are based on
                                data to make your brand stronger. Get a high
                                return on investment (ROI) and more conversions
                                with Wide Wings Media’s digital marketing
                                services, which are data-based. Request a quote
                                now.
                            </p>
                            <p className="text-[#333333] text-sm md:text-base lg:text-lg xl:text-xl font-normal leading-relaxed max-w-2xl">
                                Work with a digital marketing services agency in
                                Dubai that has won awards and is designed to
                                help businesses thrive by making meaningful
                                connections.
                            </p>
                        </div>
                    </div>

                    {/* Robot Visual Column (Now second in JSX, shows bottom on mobile) */}
                    <div className="relative w-full lg:w-[48%] flex justify-center items-end self-stretch lg:h-full">
                        {/* Circular Background Shape */}
                        <div className="absolute left-[4%] md:left-[20%] lg:left-[-10%] bottom-[35%] lg:bottom-[40%] w-[150px] md:w-[250px] lg:w-[320px] z-0 pointer-events-none">
                            <Image
                                src="/Cirvular.svg"
                                alt=""
                                width={350}
                                height={350}
                                className="w-full h-auto opacity-80"
                            />
                        </div>

                        {/* Robot Image Container */}
                        <div className="relative z-10 w-full max-w-[400px] md:max-w-[450px] lg:max-w-[950px] flex justify-center items-end">
                            <Image
                                src="/ServeRobot.png"
                                alt="Services Robot"
                                width={1200}
                                height={1400}
                                className="w-full h-auto object-contain block lg:scale-[1.55] scale-[1.2] origin-bottom lg:-translate-y-32 xl:translate-0"
                                priority
                            />

                            {/* Speech Bubble */}
                            <div className="absolute top-[-25%] -right-4 md:-right-14 md:top-[-15%] lg:top-[-30%] lg:right-[-65%] w-[120px] md:w-[180px] lg:w-[360px]">
                                <Image
                                    src="/ReadyToHelp.svg"
                                    alt="Ready to Help You"
                                    width={260}
                                    height={150}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainServicesHeroSection;
