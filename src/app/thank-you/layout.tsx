import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Flight Confirmed! Thank You | Wide Wings Media",
    description:
        "Your message has been received. Thank you for reaching out to Wide Wings Media.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function ThankYouLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
