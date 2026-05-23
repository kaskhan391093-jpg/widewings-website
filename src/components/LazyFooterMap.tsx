"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

function MapPlaceholder({
    isLoading = false,
    onActivate,
}: {
    isLoading?: boolean;
    onActivate?: () => void;
}) {
    return (
        <div className="relative h-full w-full overflow-hidden rounded-[40px] bg-[#1a1a3a]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(223,165,24,0.28),_transparent_45%),linear-gradient(135deg,_rgba(46,46,98,0.96),_rgba(26,26,58,0.98))]" />
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:32px_32px]" />

            <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8 lg:p-10">
                <div className="inline-flex items-center gap-3 self-start rounded-full border border-white/15 bg-white/8 px-4 py-2 backdrop-blur-sm">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#DFA518] shadow-[0_0_18px_rgba(223,165,24,0.75)]" />
                    <span className="font-nexa text-[11px] uppercase tracking-[0.32em] text-white/80 md:text-xs">
                        Dubai Office
                    </span>
                </div>

                <div className="max-w-md">
                    <p className="font-nexa text-3xl font-bold tracking-tight text-white md:text-4xl">
                        Interactive map
                    </p>
                    <p className="mt-3 font-body text-sm leading-relaxed text-white/72 md:text-base">
                        Load the map when you want to explore our location in
                        Al Quoz Industrial Area 3.
                    </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <p className="max-w-xs font-body text-sm leading-relaxed text-white/58">
                        Leaflet and OpenStreetMap now load only when this area
                        is visible or when you interact with it.
                    </p>
                    <button
                        type="button"
                        onClick={onActivate}
                        disabled={isLoading}
                        className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/10 px-5 py-3 font-nexa text-sm font-bold uppercase tracking-[0.22em] text-white transition-all hover:bg-white hover:text-[#2E2E62] focus:outline-hidden focus:ring-2 focus:ring-white/70 disabled:cursor-wait disabled:opacity-70"
                    >
                        {isLoading ? "Loading map..." : "Load map"}
                    </button>
                </div>
            </div>
        </div>
    );
}

const InteractiveMap = dynamic(() => import("./Home/InteractiveMap"), {
    ssr: false,
    loading: () => <MapPlaceholder isLoading />,
});

export default function LazyFooterMap() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [shouldLoadMap, setShouldLoadMap] = useState(false);

    useEffect(() => {
        if (shouldLoadMap) {
            return;
        }

        const node = containerRef.current;
        if (!node || typeof IntersectionObserver === "undefined") {
            return;
        }

        const observer = new IntersectionObserver(
            entries => {
                if (entries.some(entry => entry.isIntersecting)) {
                    setShouldLoadMap(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: "250px 0px",
            },
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, [shouldLoadMap]);

    const activateMap = () => {
        setShouldLoadMap(true);
    };

    return (
        <div
            ref={containerRef}
            className="h-full w-full"
            onPointerEnter={activateMap}
            onFocusCapture={activateMap}
            onTouchStart={activateMap}
        >
            {shouldLoadMap ? (
                <InteractiveMap />
            ) : (
                <MapPlaceholder onActivate={activateMap} />
            )}
        </div>
    );
}
