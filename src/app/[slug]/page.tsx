import { notFound } from "next/navigation";
import { getPostBySlug, getPostSchema } from "@/lib/wordpress";
import type { Metadata } from "next";
import RichTextRenderer from "@/components/Blog/RichTextRenderer";
import { servicesData } from "@/data/services";
import ServicePageClient from "@/components/Services/ServicePageClient";

interface PostPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({
    params,
}: PostPageProps): Promise<Metadata> {
    const { slug: rawSlug } = await params;
    // Normalize slug by removing trailing slash for comparison
    const slug = rawSlug.replace(/\/$/, "");

    // Check if it's a service
    const service = servicesData.find(
        (s) => s.slug.replace(/\/$/, "") === slug,
    );

    if (service) {
        return {
            title: `${service.title} | Wide Wings Media Digital Agency Dubai`,
            description: service.description,
            alternates: {
                canonical: `https://wide-wings.ae/${rawSlug}`,
            },
        };
    }

    const post = await getPostBySlug(slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    const yoast = post.yoast_head_json;
    const title = yoast?.title || post.title.rendered;
    const description =
        yoast?.description ||
        post.excerpt.rendered.replace(/<[^>]*>/g, "").substring(0, 160);
    const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];

    return {
        title,
        description,
        alternates: {
            canonical: `https://wide-wings.ae/${rawSlug}`,
        },
        openGraph: {
            title,
            description,
            type: "article",
            url: `https://wide-wings.ae/${rawSlug}`,
            publishedTime: post.date,
            authors: ["Wide Wings Media"],
            images: featuredMedia ? [{ url: featuredMedia.source_url }] : [],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: featuredMedia ? [featuredMedia.source_url] : [],
        },
    };
}

export default async function PostPage({ params }: PostPageProps) {
    const { slug: rawSlug } = await params;
    const slug = rawSlug.replace(/\/$/, "");

    // Check if it's a service
    const service = servicesData.find(
        (s) => s.slug.replace(/\/$/, "") === slug,
    );

    if (service) {
        return <ServicePageClient service={service} />;
    }

    const [post, postSchema] = await Promise.all([
        getPostBySlug(slug),
        getPostSchema(slug),
    ]);

    if (!post) {
        notFound();
    }

    const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
    const imageUrl = featuredMedia?.source_url;

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title.rendered,
        image: imageUrl || "https://wide-wings.ae/logo.png",
        datePublished: post.date,
        author: {
            "@type": "Organization",
            name: "Wide Wings Media",
            url: "https://wide-wings.ae",
        },
        publisher: {
            "@type": "Organization",
            name: "Wide Wings Media",
            logo: {
                "@type": "ImageObject",
                url: "https://wide-wings.ae/logo.png",
            },
        },
        description: post.excerpt.rendered
            .replace(/<[^>]*>/g, "")
            .substring(0, 160),
    };
    const schemaToRender = postSchema ?? articleSchema;

    return (
        <article className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schemaToRender),
                }}
            />
            <RichTextRenderer content={post.content.rendered} />

            <footer className="mt-20 pt-10 border-t border-gray-100">
                <p className="text-[#2E2E62]/60 font-ui text-sm italic">
                    All content belongs to Wide Wings Media.
                </p>
            </footer>
        </article>
    );
}
