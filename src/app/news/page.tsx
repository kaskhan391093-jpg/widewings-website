import type { Metadata } from "next";
import Image from "next/image";
import NewsHeaderSection from "@/components/News/NewsHeaderSection";

const newsItems = [
    {
        id: 1,
        image: "/News/Lead-image-5.webp",
        title: "Reem Holding Group Sets the Pace for Business Transformation with Innovation and Reliability",
        source: "Entrepreneur Middle East",
        link: "https://mena.entrepreneur.com/women-entrepreneur/reem-holding-group-sets-the-pace-for-business-transformation-with-innovation-and-reliability",
    },
    {
        id: 2,
        image: "/News/img.jpeg",
        title: "Reem Osman Redefining Leadership Through Purpose And Legacy",
        source: "Gulf Magazine",
        link: "https://gulfmagazine.co/reem-osman-redefining-leadership-through-purpose/",
    },
];

export const metadata: Metadata = {
    title: "News | Wide Wings Media",
    description:
        "Latest news and media coverage featuring Wide Wings Media. Read our press mentions and industry insights.",
    keywords: ["media", "news", "press", "Wide Wings Media"],
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-icon.png",
    },
    openGraph: {
        title: "News | Wide Wings Media",
        description: "Latest news and media coverage.",
        url: "https://wide-wings.ae/news",
        siteName: "Wide Wings Media",
        images: [
            {
                url: "/News/Lead-image-5.webp",
                width: 1200,
                height: 630,
                alt: "Media Coverage",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "News | Wide Wings Media",
        description: "Latest news and media coverage.",
        images: ["/News/Lead-image-5.webp"],
    },
    alternates: {
        canonical: "https://wide-wings.ae/news",
    },
};

export default function NewsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "News Coverage",
        description: "Latest press mentions and news articles",
        url: "https://wide-wings.ae/news",
        hasPart: newsItems.map((item) => ({
            "@type": "NewsArticle",
            headline: item.title,
            image: `https://wide-wings.ae${item.image}`,
            url: item.link,
            publisher: {
                "@type": "Organization",
                name: item.source,
            },
        })),
    };

    return (
        <main className="bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <NewsHeaderSection />

            {/* Media Grid Section */}
            <div className="bg-[#F2F2F2] rounded-t-[4rem] lg:rounded-t-[7rem] pt-20 pb-32 relative z-0 min-h-[50vh]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {newsItems.map((item) => (
                            <a
                                key={item.id}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
                            >
                                <div className="relative aspect-video overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-8 flex flex-col grow">
                                    <div className="text-[#DFA518] font-ui text-sm uppercase tracking-wider mb-3 font-semibold">
                                        {item.source}
                                    </div>
                                    <h2 className="text-[#2E2E62] font-section-title text-xl mb-4 leading-tight group-hover:text-[#DFA518] transition-colors line-clamp-2 font-bold">
                                        {item.title}
                                    </h2>
                                    <div className="mt-auto pt-4">
                                        <span className="text-[#2E2E62] font-section-title text-sm uppercase tracking-wider inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                                            Read Article
                                            <svg
                                                className="w-4 h-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
