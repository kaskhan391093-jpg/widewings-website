"use client";

import ServicesHeroSection from "./ServicesHeroSection";
import ServiceOverview from "./ServiceOverview";
import ServiceAuthority from "./ServiceAuthority";
import ServiceFAQ from "./ServiceFAQ";
import ServiceProcess from "./ServiceProcess";
import ServiceWhyChooseUs from "./ServiceWhyChooseUs";
import ServiceFinalCTA from "./ServiceFinalCTA";
import { Service } from "@/data/services";

export default function ServicePageClient({ service }: { service: Service }) {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <ServicesHeroSection service={service} />
            <ServiceOverview service={service} />
            <ServiceAuthority service={service} />
            <ServiceFAQ service={service} />
            <ServiceProcess service={service} />
            <ServiceWhyChooseUs service={service} />
            <ServiceFinalCTA service={service} />
        </main>
    );
}
