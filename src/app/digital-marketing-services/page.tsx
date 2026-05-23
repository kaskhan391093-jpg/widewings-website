import MainServicesHeroSection from "@/components/Services/MainServicesHeroSection";
import ServicesSliderSection from "@/components/Services/ServicesSliderSection";
import ServicesSecondarySection from "@/components/Services/ServicesSecondarySection";
import ValuePropSection from "@/components/Services/ValuePropSection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Boost ROI with Data-Driven Digital Marketing Services in Dubai",
    description:
        "Drive conversions and return on investment (ROI) with data-based digital marketing services from Wide Wings Media. Request your quote today!",
    alternates: {
        canonical: "https://wide-wings.ae/digital-marketing-services",
    },
};

export default function ServicesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://wide-wings.ae/digital-marketing-services/#webpage",
                url: "https://wide-wings.ae/digital-marketing-services/",
                name: "Digital Marketing Services in Dubai",
                description:
                    "Drive conversions and return on investment (ROI) with data-based digital marketing services from Wide Wings Media.",
                isPartOf: {
                    "@id": "https://wide-wings.ae/#website",
                },
            },
            {
                "@type": "Product",
                "@id": "https://wide-wings.ae/#digitalmarketingproduct",
                name: "Digital Marketing Services",
                category: "Marketing and Advertising",
                description:
                    "Data-driven digital marketing services including SEO, paid media, social media marketing, and ROI optimization.",
                brand: {
                    "@type": "Brand",
                    name: "Wide Wings Media",
                },
                aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.9",
                    reviewCount: "120",
                    bestRating: "5",
                    worstRating: "1",
                },
            },
            {
                "@type": "Service",
                "@id": "https://wide-wings.ae/#digitalmarketingservice",
                name: "Digital Marketing Services in Dubai",
                description:
                    "Data-driven digital marketing services in Dubai, including SEO, paid media, social media marketing, and ROI optimization.",
                provider: {
                    "@id": "https://wide-wings.ae/#organization",
                },
                areaServed: {
                    "@type": "City",
                    name: "Dubai",
                },
                serviceType: "Digital Marketing",
                isRelatedTo: {
                    "@id": "https://wide-wings.ae/#digitalmarketingproduct",
                },
            },
            {
                "@type": "Review",
                "@id": "https://wide-wings.ae/#review1",
                itemReviewed: {
                    "@id": "https://wide-wings.ae/#digitalmarketingproduct",
                },
                author: {
                    "@type": "Person",
                    name: "Ahmed R.",
                },
                datePublished: "2024-11-12",
                reviewBody:
                    "Wide Wings Media significantly improved our ROI through structured SEO and paid media strategies.",
                reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                },
            },
            {
                "@type": "Review",
                "@id": "https://wide-wings.ae/#review2",
                itemReviewed: {
                    "@id": "https://wide-wings.ae/#digitalmarketingproduct",
                },
                author: {
                    "@type": "Person",
                    name: "Sarah M.",
                },
                datePublished: "2024-09-03",
                reviewBody:
                    "Professional and data-driven. Their digital marketing strategy delivered measurable growth within months.",
                reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                },
            },
        ],
    };

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <MainServicesHeroSection />
            <ServicesSliderSection />
            <ServicesSecondarySection />
            <ValuePropSection />
        </main>
    );
}
