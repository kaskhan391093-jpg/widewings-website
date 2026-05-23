import { MetadataRoute } from "next";
import { servicesData } from "@/data/services";
import { getPosts } from "@/lib/wordpress";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://wide-wings.ae";

    const staticPages = [
        "",
        "/about-us",
        "/digital-marketing-services",
        "/insights",
        "/news",
        "/contact-us",
        "/terms-conditions",
        "/privacy-policy",
    ];

    const staticUrls = staticPages.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    // 2. Services Pages (from src/data/services.ts)
    // These are high-priority landing pages handled by [slug]
    const serviceUrls = servicesData.map((service) => {
        // Ensure slug handles trailing slashes correctly
        const slug = service.slug.startsWith("/")
            ? service.slug.slice(1)
            : service.slug;
        const cleanSlug = slug.endsWith("/") ? slug.slice(0, -1) : slug;

        return {
            url: `${baseUrl}/${cleanSlug}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.9,
        };
    });

    // 3. Blog Posts (from WordPress)
    // Dynamic fetching of blog posts
    let blogUrls: MetadataRoute.Sitemap = [];
    try {
        const { posts } = await getPosts({ perPage: 100, includeEmbedded: false });
        if (posts && posts.length > 0) {
            blogUrls = posts.map((post) => ({
                url: `${baseUrl}/${post.slug}`,
                lastModified: new Date(post.date),
                changeFrequency: "monthly" as const,
                priority: 0.7,
            }));
        }
    } catch (error) {
        console.error("Sitemap: Failed to fetch blog posts", error);
    }

    return [...staticUrls, ...serviceUrls, ...blogUrls];
}
