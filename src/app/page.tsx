import dynamic from "next/dynamic";
import HeroSection from "@/components/Home/HeroSection";
import ClientsLogos from "@/components/Home/ClientsLogos";
import ResultsDriven from "@/components/Home/ResultsDriven";
import { Metadata } from "next";

// Lazy-load below-the-fold sections to reduce initial bundle size
const ElevateBrandsSection = dynamic(
    () => import("@/components/Home/ElevateBrandsSection"),
    {
        loading: () => <div className="min-h-[400px]" />,
    },
);

const ServicesSection = dynamic(
    () => import("@/components/Home/ServicesSection"),
    {
        loading: () => <div className="min-h-[600px]" />,
    },
);

const SuccessStoriesSection = dynamic(
    () => import("@/components/Home/SuccessStoriesSection"),
    {
        loading: () => <div className="min-h-[500px]" />,
    },
);

const WhyWorkWithUsSection = dynamic(
    () => import("@/components/Home/WhyWorkWithUsSection"),
    {
        loading: () => <div className="min-h-[400px]" />,
    },
);

const RecentBlogsSection = dynamic(
    () => import("@/components/Home/RecentBlogsSection"),
    {
        loading: () => <div className="min-h-[500px]" />,
    },
);

const ReviewsSection = dynamic(
    () => import("@/components/Home/ReviewsSection"),
    {
        loading: () => <div className="min-h-[400px]" />,
    },
);

export const metadata: Metadata = {
    title: "Wide Wings Media: Leading Digital Marketing Agency in Dubai",
    description:
        "Achieve rapid growth across all media platforms with Wide Wings Media, your premier digital marketing agency in Dubai, UAE.",
    alternates: {
        canonical: "https://wide-wings.ae",
    },
};

export default function Home() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://wide-wings.ae/#organization",
                name: "Wide Wings Media",
                url: "https://wide-wings.ae/",
                logo: {
                    "@type": "ImageObject",
                    "@id": "https://wide-wings.ae/#logo",
                    url: "https://wide-wings.ae/logo.png",
                    width: 512,
                    height: 512,
                },
                address: {
                    "@type": "PostalAddress",
                    streetAddress:
                        "22 Street, Al Quoz Industrial Area, Dubai, United Arab Emirates",
                    addressLocality: "Dubai",
                    postalCode: "00000",
                    addressCountry: "AE",
                },
                sameAs: [
                    "https://www.linkedin.com/company/wide-wings-media-advertising/",
                    "https://www.instagram.com/wide.wings.media/",
                    "https://www.facebook.com/widewingsadvertising",
                    "https://x.com/Wide_WingsMedia/",
                ],
                contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+971-4-335-2645",
                    contactType: "Customer Support",
                    areaServed: "AE",
                },
            },
            {
                "@type": "ProfessionalService",
                "@id": "https://wide-wings.ae/#professionalservice",
                name: "Wide Wings Media",
                url: "https://wide-wings.ae/",
                parentOrganization: {
                    "@id": "https://wide-wings.ae/#organization",
                },
                areaServed: {
                    "@type": "Country",
                    name: "United Arab Emirates",
                },
                telephone: "+971-4-335-2645",
                priceRange: "$$$",
                image: {
                    "@type": "ImageObject",
                    url: "https://sl.bing.net/eXSD5eZEeAK",
                },
                address: {
                    "@type": "PostalAddress",
                    streetAddress:
                        "22 Street, Al Quoz Industrial Area, Dubai, United Arab Emirates",
                    addressLocality: "Dubai",
                    postalCode: "00000",
                    addressCountry: "AE",
                },
            },
            {
                "@type": "LocalBusiness",
                "@id": "https://wide-wings.ae/#localbusiness",
                name: "Wide Wings Media",
                url: "https://wide-wings.ae/",
                telephone: "+971-4-335-2645",
                priceRange: "$$$",
                image: {
                    "@type": "ImageObject",
                    url: "https://wide-wings.ae/office.jpg",
                },
                address: {
                    "@type": "PostalAddress",
                    streetAddress:
                        "22 Street, Al Quoz Industrial Area, Dubai, United Arab Emirates",
                    addressLocality: "Dubai",
                    postalCode: "00000",
                    addressCountry: "AE",
                },
                geo: {
                    "@type": "GeoCoordinates",
                    latitude: 25.121822,
                    longitude: 55.219212,
                },
                openingHoursSpecification: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: [
                        "Sunday",
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                    ],
                    opens: "09:00",
                    closes: "18:00",
                },
            },
            {
                "@type": "WebSite",
                "@id": "https://wide-wings.ae/#website",
                url: "https://wide-wings.ae/",
                name: "Wide Wings Media",
                publisher: {
                    "@id": "https://wide-wings.ae/#organization",
                },
                potentialAction: {
                    "@type": "SearchAction",
                    target: {
                        "@type": "EntryPoint",
                        urlTemplate:
                            "https://wide-wings.ae/?s={search_term_string}",
                    },
                    "query-input": {
                        "@type": "PropertyValueSpecification",
                        valueRequired: true,
                        valueName: "search_term_string",
                    },
                },
            },
            {
                "@type": "WebPage",
                "@id": "https://wide-wings.ae/#homepage",
                url: "https://wide-wings.ae/",
                name: "Leading Digital Marketing Agency in Dubai | Wide Wings Media",
                isPartOf: {
                    "@id": "https://wide-wings.ae/#website",
                },
                breadcrumb: {
                    "@type": "BreadcrumbList",
                    itemListElement: [
                        {
                            "@type": "ListItem",
                            position: 1,
                            name: "Home",
                            item: "https://wide-wings.ae/",
                        },
                    ],
                },
                potentialAction: {
                    "@type": "ReadAction",
                    target: "https://wide-wings.ae/",
                },
            },
            {
                "@type": "Product",
                "@id": "https://wide-wings.ae/#digitalmarketingservices",
                name: "Digital Marketing Services",
                brand: {
                    "@id": "https://wide-wings.ae/#organization",
                },
                aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.9",
                    reviewCount: "120",
                },
            },
            {
                "@type": "FAQPage",
                "@id": "https://wide-wings.ae/#faq",
                mainEntity: [
                    {
                        "@type": "Question",
                        name: "Do you guarantee SEO rankings?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "We do not guarantee rankings, but we deliver measurable growth using ethical SEO strategies.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "Which industries do you serve?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "We work with real estate, healthcare, eCommerce, hospitality, and enterprise brands across the UAE.",
                        },
                    },
                ],
            },
        ],
    };

    return (
        <main className="flex min-h-screen flex-col bg-gray-50/50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <HeroSection />
            <ClientsLogos />
            <ResultsDriven />
            <ElevateBrandsSection />
            <ServicesSection />
            <SuccessStoriesSection />
            <WhyWorkWithUsSection />
            <RecentBlogsSection />
            <ReviewsSection />
        </main>
    );
}
