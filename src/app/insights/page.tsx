import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPosts } from "@/lib/wordpress";
import InsightsKnowledgeSection from "@/components/Blog/InsightsKnowledgeSection";

export async function generateMetadata({
    searchParams,
}: {
    searchParams: Promise<{ page?: string }>;
}): Promise<Metadata> {
    const sp = await searchParams;
    const currentPage = parseInt(sp.page || "1", 10);

    return {
        title: "Wide Wings Media: Digital Marketing Insights and Knowledge",
        description:
            "Explore valuable insights, articles, and blogs with Wide Wings Media. Expand your knowledge and feed your curiosity daily with our blogs.",
        alternates: {
            canonical: "https://wide-wings.ae/insights",
        },
        openGraph: {
            title: "Wide Wings Media: Digital Marketing Insights and Knowledge",
            description:
                "Explore valuable insights, articles, and blogs with Wide Wings Media. Expand your knowledge and feed your curiosity daily with our blogs.",
            url: "https://wide-wings.ae/insights",
        },
        robots: {
            index: currentPage === 1,
            follow: true,
        },
    };
}

export default async function BlogsPage({
    searchParams,
}: {
    searchParams: Promise<{ page?: string }>;
}) {
    const sp = await searchParams;
    const currentPage = parseInt(sp.page || "1", 10);
    const { posts, totalPages } = await getPosts({
        perPage: 9,
        page: currentPage,
    });

    const blogSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "@id": "https://wide-wings.ae/insights/#collectionpage",
                url: "https://wide-wings.ae/insights/",
                name: "Digital Marketing Insights",
                description:
                    "Explore valuable insights, articles, and blogs with Wide Wings Media. Expand your knowledge and feed your curiosity daily with our blogs.",
                isPartOf: {
                    "@id": "https://wide-wings.ae/#website",
                },
            },
            {
                "@type": "Blog",
                "@id": "https://wide-wings.ae/insights/#blog",
                name: "Wide Wings Media Insights",
                description:
                    "Expert articles and digital marketing insights covering SEO, branding, paid media, and growth strategy.",
                publisher: {
                    "@id": "https://wide-wings.ae/#organization",
                },
            },
            {
                "@type": "Product",
                "@id": "https://wide-wings.ae/#companyservices",
                name: "Wide Wings Media Marketing Services",
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
        <main className="bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
            />
            <InsightsKnowledgeSection />

            {/* Blogs Section with Gray Background Transition */}
            <div className="bg-[#F2F2F2] rounded-t-[4rem] lg:rounded-t-[7rem] pt-20 pb-32 relative z-0">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {posts.map((post) => {
                            const featuredMedia =
                                post._embedded?.["wp:featuredmedia"]?.[0];
                            const imageUrl =
                                featuredMedia?.source_url ||
                                "/logo.png";

                            return (
                                <Link
                                    key={post.id}
                                    href={`/${post.slug}/`}
                                    className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
                                >
                                    <div className="relative aspect-16/10 overflow-hidden">
                                        <Image
                                            src={imageUrl}
                                            alt={
                                                featuredMedia?.alt_text ||
                                                post.title.rendered
                                            }
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-8 flex flex-col grow">
                                        <h2
                                            className="text-[#2E2E62] font-section-title text-2xl mb-4 leading-tight group-hover:text-[#DFA518] transition-colors"
                                            dangerouslySetInnerHTML={{
                                                __html: post.title.rendered,
                                            }}
                                        />
                                        <div
                                            className="text-[#2E2E62]/70 font-ui text-base line-clamp-3 mb-6 leading-relaxed"
                                            dangerouslySetInnerHTML={{
                                                __html: post.excerpt.rendered,
                                            }}
                                        />
                                        <div className="mt-auto">
                                            <span className="text-[#2E2E62] font-section-title text-sm uppercase tracking-wider inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                                                Read More
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
                                </Link>
                            );
                        })}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-2 md:gap-4">
                            {currentPage > 1 && (
                                <Link
                                    href={`/insights?page=${currentPage - 1}`}
                                    className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-white text-[#2E2E62] font-section-title rounded-full hover:bg-[#DFA518] hover:text-white transition-all shadow-sm text-sm md:text-base"
                                >
                                    <svg
                                        className="w-4 h-4 rotate-180"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                    <span className="hidden sm:inline">
                                        Previous
                                    </span>
                                </Link>
                            )}

                            <div className="flex items-center gap-1 md:gap-2">
                                {(() => {
                                    const pages = [];
                                    if (totalPages <= 5) {
                                        for (let i = 1; i <= totalPages; i++)
                                            pages.push(i);
                                    } else {
                                        pages.push(1);
                                        if (currentPage > 3) pages.push("...");

                                        const start = Math.max(
                                            2,
                                            currentPage - 1,
                                        );
                                        const end = Math.min(
                                            totalPages - 1,
                                            currentPage + 1,
                                        );

                                        for (let i = start; i <= end; i++) {
                                            if (!pages.includes(i))
                                                pages.push(i);
                                        }

                                        if (currentPage < totalPages - 2)
                                            pages.push("...");
                                        if (!pages.includes(totalPages))
                                            pages.push(totalPages);
                                    }

                                    return pages.map((page, i) =>
                                        typeof page === "number" ? (
                                            <Link
                                                key={page}
                                                href={`/insights?page=${page}`}
                                                className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full font-section-title transition-all shadow-sm text-sm md:text-base ${
                                                    currentPage === page
                                                        ? "bg-[#2E2E62] text-white underline decoration-2 underline-offset-4"
                                                        : "bg-white text-[#2E2E62] hover:bg-gray-100"
                                                }`}
                                            >
                                                {page}
                                            </Link>
                                        ) : (
                                            <span
                                                key={`dots-${i}`}
                                                className="w-6 md:w-8 h-10 flex items-center justify-center text-[#2E2E62] font-bold"
                                            >
                                                {page}
                                            </span>
                                        ),
                                    );
                                })()}
                            </div>

                            {currentPage < totalPages && (
                                <Link
                                    href={`/insights?page=${currentPage + 1}`}
                                    className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-white text-[#2E2E62] font-section-title rounded-full hover:bg-[#DFA518] hover:text-white transition-all shadow-sm text-sm md:text-base"
                                >
                                    <span className="hidden sm:inline">
                                        Next
                                    </span>
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
