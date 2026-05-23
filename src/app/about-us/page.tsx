import React from "react";
import AboutHeroSection from "@/components/AboutUs/AboutHeroSection";
import AboutValuesSection from "@/components/AboutUs/AboutValuesSection";
import AboutCEOSection from "@/components/AboutUs/AboutCEOSection";
import ExpertTeamSection from "@/components/AboutUs/ExpertTeamSection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Wide Wings Media: A Digital Marketing Partner You Can Trust.",
    description:
        "Wide Wings Media is a digital marketing company in Dubai, driving growth through SEO, paid media, and social marketing. Reach out for more.",
    alternates: {
        canonical: "https://wide-wings.ae/about-us",
    },
};

export default function AboutUsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://wide-wings.ae/about-us/#webpage",
                url: "https://wide-wings.ae/about-us/",
                name: "About Wide Wings Media | Digital Marketing Company in Dubai",
                isPartOf: {
                    "@id": "https://wide-wings.ae/#website",
                },
                about: {
                    "@id": "https://wide-wings.ae/#organization",
                },
            },
            {
                "@type": "Organization",
                "@id": "https://wide-wings.ae/#organization",
                name: "Wide Wings Media",
                url: "https://wide-wings.ae/",
                description:
                    "Wide Wings Media is a digital marketing company in Dubai, driving growth through SEO, paid media, and social marketing. Reach out for more.",
                slogan: "Performance-Driven Digital Marketing in Dubai",
                areaServed: {
                    "@type": "City",
                    name: "Dubai",
                },
                knowsAbout: [
                    "Digital Marketing",
                    "Search Engine Optimization (SEO)",
                    "Local SEO Dubai",
                    "Google Ads Management",
                    "Meta Advertising",
                    "Social Media Marketing",
                    "Performance Marketing",
                    "Content Marketing",
                    "Conversion Rate Optimization",
                    "Website Development",
                    "Ecommerce Marketing UAE",
                    "Lead Generation Strategies",
                    "Brand Positioning",
                    "Marketing Analytics",
                    "Online Advertising in Dubai",
                ],
                hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Digital Marketing Services",
                    itemListElement: [
                        {
                            "@type": "Offer",
                            itemOffered: {
                                "@type": "Service",
                                name: "SEO Services in Dubai",
                            },
                        },
                        {
                            "@type": "Offer",
                            itemOffered: {
                                "@type": "Service",
                                name: "Google Ads Management",
                            },
                        },
                        {
                            "@type": "Offer",
                            itemOffered: {
                                "@type": "Service",
                                name: "Social Media Marketing",
                            },
                        },
                        {
                            "@type": "Offer",
                            itemOffered: {
                                "@type": "Service",
                                name: "Performance Marketing",
                            },
                        },
                    ],
                },
            },
            {
                "@type": "Product",
                "@id": "https://wide-wings.ae/about-us/#digitalmarketingproduct",
                name: "Digital Marketing Company Dubai",
                description:
                    "Wide Wings Media is a digital marketing company in Dubai delivering SEO, paid media, and social growth strategies.",
                category: "Marketing and Advertising",
                url: "https://wide-wings.ae/about-us/",
                brand: {
                    "@id": "https://wide-wings.ae/#organization",
                },
                aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.9",
                    reviewCount: "120",
                    bestRating: "5",
                    worstRating: "1",
                },
            },
        ],
    };

    return (
        <main className="">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <AboutHeroSection />
            <AboutValuesSection />
            <AboutCEOSection />
            <ExpertTeamSection />
        </main>
    );
}
