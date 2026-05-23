"use client";

import { useState } from "react";
import ChatWidget from "./ChatWidget";

export default function ChatLauncher() {
    const [showChat, setShowChat] = useState(false);

    const toggleChatbot = () => {
        setShowChat((prev) => !prev);
    };

    const openWhatsApp = () => {
        const phoneNumber = "971555657609";
        const message =
            "Hello Wide Wings Media, I would like to inquire about your services.";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");
    };

    return (
        <>
            {showChat && <ChatWidget onClose={() => setShowChat(false)} />}

            <div className="fixed bottom-6 right-6 z-99999999 flex flex-col items-end gap-3 pointer-events-none">
                <button
                    onClick={toggleChatbot}
                    aria-label={showChat ? "Close Chat" : "Chat with us"}
                    className="group relative cursor-pointer flex items-center justify-end pointer-events-auto"
                >
                    <div className="pointer-events-none absolute right-[calc(100%+12px)] top-1/2 z-50 -translate-y-1/2 rounded-lg bg-white px-3 py-1.5 text-sm font-bold text-[#2E2E62] shadow-md opacity-0 translate-x-2 transition-all duration-300 whitespace-nowrap group-hover:opacity-100 group-hover:translate-x-0">
                        {showChat ? "Close" : "Chatbot"}
                    </div>
                    <div className="relative z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#2E2E62] text-white shadow-lg transition-colors duration-300 hover:bg-[#FFCF01] hover:text-[#2E2E62]">
                        {showChat ? (
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2.5"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                height="24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        ) : (
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                height="24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 8V4H8"></path>
                                <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                                <path d="M2 14h2"></path>
                                <path d="M20 14h2"></path>
                                <path d="M15 13v2"></path>
                                <path d="M9 13v2"></path>
                            </svg>
                        )}
                    </div>
                </button>

                <button
                    onClick={openWhatsApp}
                    aria-label="Chat on WhatsApp"
                    className="group relative cursor-pointer flex items-center justify-end pointer-events-auto"
                >
                    <div className="pointer-events-none absolute right-[calc(100%+12px)] top-1/2 z-50 -translate-y-1/2 rounded-lg bg-white px-3 py-1.5 text-sm font-bold text-green-600 shadow-md opacity-0 translate-x-2 transition-all duration-300 whitespace-nowrap group-hover:opacity-100 group-hover:translate-x-0">
                        WhatsApp
                    </div>
                    <div className="relative z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-colors duration-300 hover:bg-[#20bd5a]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                        </svg>
                    </div>
                </button>
            </div>
        </>
    );
}
