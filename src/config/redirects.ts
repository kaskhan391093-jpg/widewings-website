import type { Redirect } from "next/dist/lib/load-custom-routes";

/**
 * 301 Permanent Redirect Configuration
 *
 * This file contains all URL redirects for SEO migration.
 * All redirects are permanent (301) to preserve SEO value.
 *
 * @see https://nextjs.org/docs/app/api-reference/next-config-js/redirects
 *
 * Last updated: 2026-02-02
 * Total redirects: 54
 */

type RedirectEntry = {
    source: string;
    destination: string;
    permanent: true;
};

const redirects: RedirectEntry[] = [
    // =========================================================================
    // Service Subdirectory Redirects
    // =========================================================================
    {
        source: "/service/android-app-development-dubai",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/service/ecommerce-marketing-dubai",
        destination: "/ecommerce-website-development-dubai/",
        permanent: true,
    },
    {
        source: "/service/event-management-dubai",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/service/geotargetting",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/service/ios-app-development-dubai",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/service/lead-generation-dubai",
        destination: "/ppc-advertising-company-dubai/",
        permanent: true,
    },
    {
        source: "/service/ui-ux-design",
        destination: "/web-design-company-dubai/",
        permanent: true,
    },
    //
    {
        source: "/service/social-media-marketing-agency-in-dubai/",
        destination: "/social-media-marketing-agency-in-dubai/",
        permanent: true,
    },
    {
        source: "/service/seo-services-dubai/",
        destination: "/seo-services-dubai/",
        permanent: true,
    },
    {
        source: "/service/content-marketing/",
        destination: "/content-creation-graphic-design/",
        permanent: true,
    },
    {
        source: "/service/ppc-agency-dubai/",
        destination: "/ppc-advertising-company-dubai/",
        permanent: true,
    },
    {
        source: "/service/web-design-company-dubai/",
        destination: "/web-design-company-dubai/",
        permanent: true,
    },

    // =========================================================================
    // Category Redirects
    // =========================================================================
    { source: "/category/all", destination: "/insights/", permanent: true },
    {
        source: "/category/branding-identity",
        destination: "/healthcare-marketing-agency-in-dubai/",
        permanent: true,
    },
    {
        source: "/category/digital-media",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/category/industry-trends",
        destination: "/ai-trend/",
        permanent: true,
    },
    {
        source: "/category/media-insights",
        destination: "/insights/",
        permanent: true,
    },
    {
        source: "/category/outdoor-media",
        destination: "/outdoor-advertising-dubai/",
        permanent: true,
    },

    // =========================================================================
    // Blog & Content Redirects
    // =========================================================================
    {
        source: "/what-is-content-marketing",
        destination: "/real-estate-content-writing-uae/",
        permanent: true,
    },
    {
        source: "/increase-your-facebook-views",
        destination: "/youtube-studio-for-more-views/",
        permanent: true,
    },
    {
        source: "/ai-avatars-for-branding",
        destination: "/insights/",
        permanent: true,
    },
    {
        source: "/it-modernization-in-business",
        destination: "/ai-trend/",
        permanent: true,
    },
    {
        source: "/ai-in-lead-generation",
        destination: "/google-ads-agency-dubai/",
        permanent: true,
    },
    {
        source: "/seo-strategies-for-saas-websites",
        destination: "/b2b-seo-services-in-dubai/",
        permanent: true,
    },
    {
        source: "/ai-marketing-agency",
        destination: "/ai-trend/",
        permanent: true,
    },
    {
        source: "/audience-engagement-strategies",
        destination: "/social-media-packages-for-smes/",
        permanent: true,
    },
    {
        source: "/benefits-of-an-seo-agency",
        destination: "/seo-services-dubai/",
        permanent: true,
    },
    {
        source: "/benefits-of-working-with-an-seo-agency",
        destination: "/seo-services-dubai/",
        permanent: true,
    },
    {
        source: "/bring-lost-traffic-with-ppc-remarketing",
        destination: "/ppc-advertising-company-dubai/",
        permanent: true,
    },
    {
        source: "/building-quality-sustainable",
        destination: "/about-us/",
        permanent: true,
    },
    {
        source: "/business-consultation",
        destination: "/about-us/",
        permanent: true,
    },
    {
        source: "/business-growth-strategies",
        destination: "/seo-strategy-for-uae-startups/",
        permanent: true,
    },
    {
        source: "/business-resilience-tips",
        destination: "/insights/",
        permanent: true,
    },
    {
        source: "/buying-intent-in-digital-marketing",
        destination: "/ppc-advertising-company-dubai/",
        permanent: true,
    },
    {
        source: "/cohesive-social-media-marketing-strategy",
        destination: "/social-media-packages-for-smes/",
        permanent: true,
    },
    {
        source: "/digital-marketing-for-ecommerce-businesses",
        destination: "/marketing-for-ecommerce-businesses/",
        permanent: true,
    },
    {
        source: "/effective-social-media-campaign",
        destination: "/guide-to-effective-social-media-campaign/",
        permanent: true,
    },
    {
        source: "/how-seos-use-ai",
        destination: "/local-seo-services-in-abu-dhabi/",
        permanent: true,
    },
    {
        source: "/how-to-use-youtube-studio",
        destination: "/youtube-studio-for-more-views/",
        permanent: true,
    },
    {
        source: "/market-research-strategy",
        destination: "/seo-strategy-for-uae-startups/",
        permanent: true,
    },
    {
        source: "/outdoor-digital-signage-advertising",
        destination: "/outdoor-advertising-dubai/",
        permanent: true,
    },
    {
        source: "/rebranding-your-business",
        destination: "/insights/",
        permanent: true,
    },

    // =========================================================================
    // SEO & Marketing Service Redirects
    // =========================================================================
    {
        source: "/seo-for-brand-awareness",
        destination: "/seo-services-dubai/",
        permanent: true,
    },
    {
        source: "/seo-services",
        destination: "/seo-services-dubai/",
        permanent: true,
    },
    {
        source: "/lead-generation",
        destination: "/google-ads-agency-dubai/",
        permanent: true,
    },
    {
        source: "/ppc-marketing",
        destination: "/ppc-for-ecommerce-dubai/",
        permanent: true,
    },
    {
        source: "/social-media-marketing",
        destination: "/social-media-marketing-agency-in-dubai/",
        permanent: true,
    },
    {
        source: "/digital-marketing-solutions",
        destination: "/digital-marketing-services/",
        permanent: true,
    },

    // =========================================================================
    // Web & App Development Redirects
    // =========================================================================
    {
        source: "/mobile-app-design",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/mobile-app-development-dubai",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/web-showcase",
        destination: "/web-design-company-dubai/",
        permanent: true,
    },
    {
        source: "/website-design",
        destination: "/web-design-company-dubai/",
        permanent: true,
    },

    // =========================================================================
    // Company Pages Redirects
    // =========================================================================
    { source: "/our-careers", destination: "/about-us/", permanent: true },
    { source: "/our-team", destination: "/about-us/", permanent: true },
    { source: "/work", destination: "/about-us/", permanent: true },
    { source: "/locations", destination: "/contact-us/", permanent: true },

    // =========================================================================
    // Root Level Redirects
    // =========================================================================
    {
        source: "/service",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    { source: "/marketing-agency-in-dubai", destination: "/", permanent: true },
    { source: "/415.shtml", destination: "/", permanent: true },

    // =========================================================================
    // User Requested Redirects
    // =========================================================================
    {
        source: "/services/pr-management",
        destination: "/about-us/",
        permanent: true,
    },
    {
        source: "/services/pr-management/",
        destination: "/about-us/",
        permanent: true,
    },
    {
        source: "/portfolio/festonax-card",
        destination: "/about-us/",
        permanent: true,
    },
    {
        source: "/portfolio/festonax-card/",
        destination: "/about-us/",
        permanent: true,
    },
    {
        source: "/\\(/\\?\\.\\*\\[\\^a-zA-Z0-9\\]\\)/",
        destination: "/about-us/",
        permanent: true,
    },
    {
        source: "/\\(/\\?\\.\\*\\%\\[\\%\\^a-zA-Z0-9\\%\\]\\)\\%2F",
        destination: "/about-us/",
        permanent: true,
    },
    {
        source: "/\\(/\\?\\.\\*\\%\\[\\%\\^a-zA-Z0-9\\%\\]\\)\\%2F",
        destination: "/about-us/",
        permanent: true,
    },
    {
        source: "/google-ads-services/",
        destination: "/ppc-advertising-company-dubai/",
        permanent: true,
    },
    {
        source: "/services/paid-advertising-media-buying",
        destination: "/ppc-advertising-company-dubai/",
        permanent: true,
    },
    {
        source: "/services/email-sms-crm-marketing",
        destination: "/email-sms-crm-marketing/",
        permanent: true,
    },
    {
        source: "/insights/page/2",
        destination: "/insights?page=2",
        permanent: true,
    },
    {
        source: "/cgi-bin",
        destination: "/",
        permanent: true,
    },
    {
        source: "/home",
        destination: "/",
        permanent: true,
    },
    {
        source: "/service/mobile-app-development-dubai",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/author/admint/page/2",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/successfully-rebrand-your-business/feed",
        destination: "/successfully-rebrand-your-business/",
        permanent: true,
    },
    {
        source: "/how-to-keep-your-audience-engaged-in-a-distracted-world",
        destination: "/how-to-keep-your-audience-engaged/",
        permanent: true,
    },
    {
        source: "/ar/structured-data-for-enhanced-seo-performance",
        destination: "/structured-data-for-enhanced-seo-performance/",
        permanent: true,
    },
    {
        source: "/services",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/thank-you-page",
        destination: "/thank-you/",
        permanent: true,
    },
    {
        source: "/project/healthcare-marketing",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/tag/marketing",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/tag/development",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/ar/digital-marketing-services",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/ar/brand-lift-tests",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/services/creative-branding",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/&",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/structured-data-for-enhanced-seo-performance/feed",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/tag/design",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/marketing",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/$",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/social-media-marketing-",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/ppc-advertising",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/service/seo-services-dubai",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/new-home-page",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/seo",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/blogs",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/ar/contact-us",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/ar/outdoor-advertising-dubai",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/2024/10",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/ar/about-us",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/author/law",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/author/admint",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/outdoor-advertising",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/wp-content/themes/arolax/:path*",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/wp-content/plugins/:path*",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/wp-content/uploads/:path*",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/wp-admin/:path*",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/wp-content/:path*",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/hometest",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/%5E.%7B8,%7D$",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/team/lawrence-peter",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/wp-json/elementskit/v1",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/team-details-dark",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/about-us-01-2",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/services/paid-advertising-media-buying/",
        destination: "/ppc-advertising-company-dubai/",
        permanent: true,
    },
    {
        source: "/services/email-sms-crm-marketing/",
        destination: "/email-sms-crm-marketing/",
        permanent: true,
    },
    {
        source: "/insights/page/2/",
        destination: "/insights?page=2",
        permanent: true,
    },
    {
        source: "/cgi-bin/",
        destination: "/",
        permanent: true,
    },
    {
        source: "/home/",
        destination: "/",
        permanent: true,
    },
    {
        source: "/service/mobile-app-development-dubai/",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/author/admint/page/2/",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/successfully-rebrand-your-business/feed/",
        destination: "/successfully-rebrand-your-business/",
        permanent: true,
    },
    {
        source: "/how-to-keep-your-audience-engaged-in-a-distracted-world/",
        destination: "/how-to-keep-your-audience-engaged/",
        permanent: true,
    },
    {
        source: "/ar/structured-data-for-enhanced-seo-performance/",
        destination: "/structured-data-for-enhanced-seo-performance/",
        permanent: true,
    },
    {
        source: "/services/",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/thank-you-page/",
        destination: "/thank-you/",
        permanent: true,
    },
    {
        source: "/project/healthcare-marketing/",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/tag/marketing/",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/tag/development/",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/ar/digital-marketing-services/",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/ar/brand-lift-tests/",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/services/creative-branding/",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/structured-data-for-enhanced-seo-performance/feed/",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/tag/design/",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/marketing/",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/ppc-advertising/",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/service/seo-services-dubai/",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/new-home-page/",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/seo/",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/blogs/",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/ar/contact-us/",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/ar/outdoor-advertising-dubai/",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/2024/10/",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/ar/about-us/",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/author/law/",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/author/admint/",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/outdoor-advertising/",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/hometest/",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/team/lawrence-peter/",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/wp-json/elementskit/v1/",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/team-details-dark/",
        destination: "/digital-marketing-services/",
        permanent: true,
    },
    {
        source: "/about-us-01-2/",
        destination: "/digital-marketing-services/",
        permanent: true,
    },];

/**
 * Returns the redirect configuration for Next.js
 * Compatible with next.config.ts redirects() function
 */
export async function getRedirects(): Promise<Redirect[]> {
    return redirects;
}

export default redirects;


