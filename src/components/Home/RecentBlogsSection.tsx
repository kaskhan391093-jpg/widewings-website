import Image from "next/image";
import Link from "next/link";
import { getPosts } from "@/lib/wordpress";

export default async function RecentBlogsSection() {
    const { posts } = await getPosts({ perPage: 3 });

    if (!posts || posts.length === 0) return null;

    return (
        <section className="w-full py-16 px-6 bg-[#2e2e62] rounded-b-[4rem]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-white font-black text-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase leading-none mb-4">
                        Recent Blogs
                    </h2>
                </div>

                <div className="flex flex-col gap-8">
                    {posts.map((post) => {
                        const featuredMedia =
                            post._embedded?.["wp:featuredmedia"]?.[0];
                        const imageUrl =
                            featuredMedia?.source_url || "/logo.png";
                        const date = new Date(post.date).toLocaleDateString(
                            "en-US",
                            {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            },
                        );

                        return (
                            <Link
                                key={post.id}
                                href={`/${post.slug}/`}
                                className="group block"
                            >
                                <div className="flex flex-col md:flex-row bg-[#1e1e4a] rounded-[20px] overflow-hidden hover:bg-[#25255a] transition-colors border border-white/10">
                                    <div className="relative w-full md:w-[350px] lg:w-[450px] aspect-video md:aspect-auto shrink-0 overflow-hidden">
                                        <Image
                                            src={imageUrl}
                                            alt={
                                                featuredMedia?.alt_text ||
                                                post.title.rendered
                                            }
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 350px, 450px"
                                        />
                                    </div>

                                    <div className="flex flex-col justify-center p-8 md:p-12 grow">
                                        <span className="text-white/60 font-ui text-sm mb-4">
                                            {date}
                                        </span>
                                        <h3
                                            className="text-white font-section-title text-2xl md:text-3xl lg:text-4xl mb-6 leading-tight group-hover:text-[#DFA518] transition-colors"
                                            dangerouslySetInnerHTML={{
                                                __html: post.title.rendered,
                                            }}
                                        />
                                        <div
                                            className="text-white/80 font-ui text-base md:text-lg mb-8 line-clamp-2 md:line-clamp-3 leading-relaxed"
                                            dangerouslySetInnerHTML={{
                                                __html: post.excerpt.rendered,
                                            }}
                                        />
                                        <div className="mt-auto">
                                            <span className="text-[#DFA518] font-section-title text-md md:text-lg xl:text-2xl inline-flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                                                See how to grow your brand »
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
