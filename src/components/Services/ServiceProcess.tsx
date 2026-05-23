"use client";

import { Service } from "@/data/services";
import { motion } from "framer-motion";
import Image from "next/image";

interface ServiceProcessProps {
    service: Service;
}

const ServiceProcess = ({ service }: ServiceProcessProps) => {
    const process = service.process_section;
    if (!process) return null;

    const icons = [
        // FiServer
        (props: React.SVGProps<SVGSVGElement>) => (
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
                {...props}
            >
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
            </svg>
        ),
        // FiShield
        (props: React.SVGProps<SVGSVGElement>) => (
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
                {...props}
            >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
        ),
        // FiMonitor
        (props: React.SVGProps<SVGSVGElement>) => (
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
                {...props}
            >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
        ),
        // FiUsers
        (props: React.SVGProps<SVGSVGElement>) => (
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
                {...props}
            >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
        ),
    ];

    return (
        <section className="py-24 bg-[#2E2E62] text-white overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
            </div>

            <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Visual / Headline Column */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-nexa font-black uppercase leading-tight mb-8"
                        >
                            {process.headline}
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12"
                        >
                            {/* Assuming the first paragraph acts as intro if multiple present */}
                            {process.paragraphs[0]}
                        </motion.p>

                        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                            {/* Placeholder generic abstract visual or use service.image/robot? 
                                 Design requested "Abstract tech visual or high-quality photo".
                                 We'll use a generic tech/dashboard image if available, or just a nice gradient/pattern block with the Robot if specific image missing.
                             */}
                            <div className="aspect-video bg-linear-to-br from-[#1a1a3a] to-[#2E2E62] relative flex items-center justify-center">
                                <Image
                                    src="/ReadyToHelp.svg"
                                    alt="Process Support"
                                    width={400}
                                    height={400}
                                    className="w-2/3 h-auto opacity-80"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Steps / List Column */}
                    <div className="space-y-8">
                        {/* 
                            Mapping paragraphs to "Steps" is tricky as the schema was just "paragraphs: string[]".
                            But the content provided in Step 92 clearly has separate points effectively.
                            "Web Design Company in Dubai: Builds and Hosts Websites" is headline.
                            Paragraphs seem to be the points. We'll map them to nice cards.
                         */}
                        {process.paragraphs.slice(1).map((para, i) => {
                            const Icon = icons[i % icons.length];
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300 flex gap-6"
                                >
                                    <div className="shrink-0 w-12 h-12 rounded-full bg-[#D4A017]/20 flex items-center justify-center text-[#D4A017]">
                                        <Icon width={24} height={24} />
                                    </div>
                                    <div>
                                        <p className="text-gray-200 text-lg leading-relaxed font-body">
                                            {para}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceProcess;
