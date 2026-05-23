import { cache } from "react";

const BASE_URL =
    "https://wordpress-1604868-6303903.cloudwaysapps.com/wp-json/wp/v2";
const CUSTOM_SCHEMA_BASE_URL =
    "https://wordpress-1604868-6303903.cloudwaysapps.com/wp-json/custom/v1/schema";

export interface WordPressPost {
    id: number;
    date: string;
    slug: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    featured_media: number;
    _embedded?: {
        "wp:featuredmedia"?: Array<{
            source_url: string;
            alt_text: string;
            media_details: {
                width: number;
                height: number;
            };
        }>;
    };
    yoast_head_json?: {
        title?: string;
        description?: string;
        [key: string]: unknown;
    };
}

export type JsonLdSchema = Record<string, unknown>;

export async function getPosts({
    perPage = 10,
    page = 1,
    includeEmbedded = true,
}: { perPage?: number; page?: number; includeEmbedded?: boolean } = {}) {
    const fields = includeEmbedded
        ? ""
        : "&_fields=id,date,slug,title,excerpt,featured_media,yoast_head_json";
    const embedParam = includeEmbedded ? "&_embed" : "";
    const res = await fetch(
        `${BASE_URL}/posts?per_page=${perPage}&page=${page}${fields}${embedParam}`,
        {
            next: { revalidate: 300 },
        },
    );

    if (!res.ok) {
        return { posts: [], totalPages: 0, totalPosts: 0 };
    }

    const posts = (await res.json()) as WordPressPost[];
    const totalPosts = parseInt(res.headers.get("X-WP-Total") || "0", 10);
    const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "0", 10);

    return { posts, totalPages, totalPosts };
}

export const getPostBySlug = cache(async (slug: string) => {
    const res = await fetch(
        `${BASE_URL}/posts?slug=${slug}&_embed`,
        {
            next: { revalidate: 300 },
        },
    );

    if (!res.ok) {
        return null;
    }

    const posts = (await res.json()) as WordPressPost[];
    return posts.length > 0 ? posts[0] : null;
});

export const getPostSchema = cache(
    async (slug: string): Promise<JsonLdSchema | null> => {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 1200);

        try {
            const res = await fetch(`${CUSTOM_SCHEMA_BASE_URL}/${slug}`, {
                next: { revalidate: 300 },
                signal: controller.signal,
            });

            if (!res.ok) {
                return null;
            }

            const data = (await res.json()) as {
                success?: boolean;
                schema?: JsonLdSchema;
            };

            if (!data?.success || !data.schema) {
                return null;
            }

            return data.schema;
        } catch {
            return null;
        } finally {
            clearTimeout(timeout);
        }
    },
);
