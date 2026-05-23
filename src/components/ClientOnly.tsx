"use client";

import dynamic from "next/dynamic";

const ScrollToTop = dynamic(() => import("./ScrollToTop"), {
    ssr: false,
});

const ChatLauncher = dynamic(() => import("./ChatLauncher"), {
    ssr: false,
});

export default function ClientOnly() {
    return (
        <>
            <ScrollToTop />
            <ChatLauncher />
        </>
    );
}
