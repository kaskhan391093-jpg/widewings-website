import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientOnly from "@/components/ClientOnly";

const nexa = localFont({
    src: [
        {
            path: "./newfonts/Nexa-Thin.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "./newfonts/NexaBook.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "./newfonts/NexaBold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "./newfonts/NexaBlack.woff2",
            weight: "900",
            style: "normal",
        },
    ],
    variable: "--font-nexa",
    display: "swap",
});

const myriadPro = localFont({
    src: "./newfonts/MyriadPro-Regular.woff2",
    variable: "--font-body",
    weight: "400",
    style: "normal",
    display: "swap",
    preload: false,
});

const calibri = localFont({
    src: "./newfonts/calibri.woff2",
    variable: "--font-calibri",
    weight: "400",
    style: "normal",
    display: "swap",
    preload: false,
});
export const metadata: Metadata = {
    metadataBase: new URL("https://wide-wings.ae"),
    title: "Wide Wings Media | Performance-Driven Digital Marketing Agency in Dubai",
    description:
        "Wide Wings Media is Dubai's leading performance-driven digital marketing agency. We specialize in SEO, PPC, social media management, and premium branding solutions in the UAE.",
    keywords: [
        "Digital Marketing Agency Dubai",
        "Performance Marketing UAE",
        "SEO Services Dubai",
        "PPC Advertising Dubai",
        "Social Media Management Dubai",
        "Branding Agency UAE",
        "Advertising Agency Dubai",
    ],
    authors: [{ name: "Wide Wings Media" }],
    creator: "Wide Wings Media",
    publisher: "Wide Wings Media",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: "Wide Wings Media | Leading Digital Marketing Agency in Dubai",
        description:
            "Grow your business with UAE's premier performance-driven marketing agency. Expert SEO, PPC, and branding solutions tailored for Dubai's competitive market.",
        url: "https://wide-wings.ae",
        siteName: "Wide Wings Media",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/logo.png",
                width: 1200,
                height: 630,
                alt: "Wide Wings Media - Digital Marketing Agency Dubai",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Wide Wings Media | Digital Marketing Agency in Dubai",
        description:
            "Innovative, performance-driven digital marketing solutions in the heart of Dubai. SEO, PPC, and Social Media experts.",
        images: ["/logo.png"],
        creator: "@WideWingsMedia",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "Digital Marketing",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        name: "Wide Wings Media",
        url: "https://wide-wings.ae",
        logo: "https://wide-wings.ae/logo.png",
        description:
            "Premium performance-driven digital marketing agency in Dubai, UAE.",
        areaServed: {
            "@type": "Country",
            name: "United Arab Emirates",
        },
        address: {
            "@type": "PostalAddress",
            addressLocality: "Dubai",
            addressCountry: "AE",
        },
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+971589852690",
            contactType: "customer service",
            email: "info@wide-wings.ae",
            availableLanguage: "en",
        },
        sameAs: [
            "https://www.facebook.com/widewingsmedia",
            "https://www.instagram.com/widewingsmedia",
            "https://www.linkedin.com/company/wide-wings-media",
            "https://x.com/widewingsmedia",
        ],
    };

    return (
        <html lang="en">
            <head>
                {/* preconnect */}
                <link
                    rel="preconnect"
                    href="https://www.googletagmanager.com"
                    crossOrigin=""
                />

                {/* Google Tag Manager */}
                <Script
                    id="gtm-script"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PLFKZQHT');
            `,
                    }}
                />

                {/* Google Site Verification */}
                <meta
                    name="google-site-verification"
                    content="5bB-0JHZLcs6CD-az_s2hqz9847frJH7UitagUZq4v4"
                />

                {/* JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body
                className={`${nexa.variable} ${myriadPro.variable} ${calibri.variable} antialiased bg-white text-gray-900`}
            >
                {/* GTM noscript */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-PLFKZQHT"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    />
                </noscript>

                {/* Skip to Content Link */}
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:bg-white focus:text-[#2E2E62] focus:px-6 focus:py-3 focus:rounded-lg focus:shadow-xl focus:font-bold focus:outline-hidden"
                >
                    Skip to content
                </a>

                {/* Speed Insights */}
                <SpeedInsights />

                <Header />
                <main id="main-content">{children}</main>
                <ClientOnly />

                <Footer />
            </body>
        </html>
    );
}
