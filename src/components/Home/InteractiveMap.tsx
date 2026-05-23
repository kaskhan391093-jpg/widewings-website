"use client";

import { MapContainer, TileLayer, Marker, ZoomControl } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useMemo } from "react";

// Dubai location for Wide Wings Media (Al Quoz Industrial Area 3, Goshi Warehouse City)
const position: [number, number] = [25.121862, 55.219213];

export default function InteractiveMap() {
    // We create the custom icon inside useMemo to ensure it only happens on the client
    const customIcon = useMemo(() => {
        if (typeof window === "undefined") return null;

        return L.icon({
            iconUrl: "/MapPin.webp",
            iconSize: [60, 60],
            iconAnchor: [30, 60], // Bottom center
            popupAnchor: [0, -60],
            className: "custom-map-marker",
        });
    }, []);

    // SSR Guard - return a placeholder with same dimensions
    if (typeof window === "undefined") {
        return <div className="w-full h-full bg-[#1a1a3a] rounded-[40px]" />;
    }

    return (
        <div className="w-full h-full relative">
            <MapContainer
                center={position}
                zoom={16}
                scrollWheelZoom={false}
                className="w-full h-full"
                zoomControl={false}
                attributionControl={false}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {customIcon && (
                    <Marker
                        position={position}
                        icon={customIcon}
                        eventHandlers={{
                            click: () => {
                                window.open(
                                    `https://www.google.com/maps/search/?api=1&query=Wings+Media+LLC+Al+Quoz+Industrial+Area+3+Goshi+Warehouse+City+Warehouse+47`,
                                    "_blank",
                                );
                            },
                        }}
                    />
                )}

                <ZoomControl position="bottomright" />
            </MapContainer>

            {/* Custom rounded overlay to match container aesthetics */}
            <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-[40px] z-1000" />

            <style jsx global>{`
                .leaflet-container {
                    background: #2e2e62 !important;
                    width: 100%;
                    height: 100%;
                }
                .leaflet-tile {
                    filter: saturate(1.2) contrast(1.1);
                }
                .custom-map-marker {
                    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.4));
                    transition: transform 0.3s ease;
                    cursor: pointer !important;
                }
                .custom-map-marker:hover {
                    transform: scale(1.1);
                }
                /* Professional Zoom Controls Styling */
                .leaflet-bar {
                    border: none !important;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2) !important;
                    margin-right: 20px !important;
                    margin-bottom: 20px !important;
                }
                .leaflet-bar a {
                    background-color: #ffffff !important;
                    color: #2e2e62 !important;
                    border-bottom: 1px solid #f0f0f0 !important;
                    width: 36px !important;
                    height: 36px !important;
                    line-height: 36px !important;
                    font-size: 18px !important;
                }
                .leaflet-bar a:hover {
                    background-color: #f8f8f8 !important;
                }
            `}</style>
        </div>
    );
}
