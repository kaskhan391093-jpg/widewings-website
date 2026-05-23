import type { NextConfig } from "next";
import { getRedirects } from "@/config/redirects";

const nextConfig: NextConfig = {
    trailingSlash: true,

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "wide-wings.ae",
            },
            {
                protocol: "https",
                hostname: "wordpress-1222412-6158018.cloudwaysapps.com",
            },
            {
                protocol: "https",
                hostname: "wordpress-1604868-6303903.cloudwaysapps.com",
            },
        ],
    },

    redirects: getRedirects,
};

export default nextConfig;
