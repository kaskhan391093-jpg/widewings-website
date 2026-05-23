import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us at Wide Wings Media to Start Your Project Today!",
    description:
        "Contact us at Wide Wings Media to discuss your project or get a free quote. Let's bring your media vision to life with expert support.",
    alternates: {
        canonical: "https://wide-wings.ae/contact-us",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ContactPage",
                "@id": "https://wide-wings.ae/contact-us/#contactpage",
                url: "https://wide-wings.ae/contact-us/",
                name: "Contact Us Today!",
                description:
                    "Contact us at Wide Wings Media to discuss your project or get a free quote. Let's bring your media vision to life with expert support.",
                isPartOf: {
                    "@id": "https://wide-wings.ae/#website",
                },
            },
            {
                "@type": "Product",
                "@id": "https://wide-wings.ae/#companyservices",
                name: "Digital Marketing Services",
                category: "Marketing and Advertising",
                description:
                    "Full-service digital marketing, branding, and media production services provided by Wide Wings Media.",
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
                "@type": "Review",
                "@id": "https://wide-wings.ae/#review1",
                itemReviewed: {
                    "@id": "https://wide-wings.ae/#companyservices",
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
                    "@id": "https://wide-wings.ae/#companyservices",
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
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    );
}
