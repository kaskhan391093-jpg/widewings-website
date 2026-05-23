"use client";
import { motion } from "framer-motion";

import { useState, useEffect, useRef, useCallback } from "react";
import { NODE_MAP, EDGE_MAP } from "@/data/chatbot-flow";

interface ChatButton {
    id?: number;
    title: string;
    destination?: number | null;
    type?: string;
    payload?: string;
}

interface Message {
    id: string;
    sender: "bot" | "user";
    text?: string;
    buttons?: ChatButton[];
    timestamp: number;
}

interface NodePayload {
    messages?: { type: string; content: string }[];
    frequency?: string;
    text?: string;
    message?: string;
    buttons?: ChatButton[];
}

export default function ChatWidget({ onClose }: { onClose: () => void }) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);
    const messagesContainerRef = useRef<HTMLDivElement>(null);
    const messageRefs = useRef<Map<string, HTMLDivElement>>(new Map());
    const shouldAutoScrollRef = useRef(true);
    const scrollToMessageIdRef = useRef<string | null>(null);

    const hasStartedRef = useRef(false);

    // Formatting helper for Markdown-style links [Text](url)
    const formatLinks = useCallback((text: string) => {
        // Basic regex for [Link](url) -> pure text (rendered as custom component ideally, but keeping simple string for now)
        return text;
    }, []);

    const addMessage = useCallback(
        (msg: Omit<Message, "id" | "timestamp"> & { id?: string }) => {
            setMessages((prev) => [
                ...prev,
                {
                    id: msg.id || Math.random().toString(36),
                    timestamp: Date.now(),
                    ...msg,
                },
            ]);
        },
        [],
    );

    const processNode = useCallback(
        async function processNodeInternal(nodeId: number) {
            const autoAdvance = (currentId: number) => {
                const nextIds = EDGE_MAP[currentId];
                if (nextIds && nextIds.length > 0) {
                    processNodeInternal(nextIds[0]);
                }
            };
            const node = NODE_MAP.get(nodeId);
            if (!node) return;

            // Simulate typing delay
            setIsTyping(true);
            await new Promise((resolve) => setTimeout(resolve, 800));
            setIsTyping(false);

            const payload = node.payload as NodePayload;

            // Add content based on node type
            if (node.type === "sendChatMessagesToVisitor" && payload.messages) {
                payload.messages.forEach((msg) => {
                    addMessage({
                        sender: "bot",
                        text: formatLinks(msg.content),
                    });
                });
                // Automatically proceed to next node if available
                autoAdvance(nodeId);
            } else if (
                node.type === "decision" ||
                node.type === "decisionButtons"
            ) {
                const textContent = payload.text || payload.message;
                if (textContent) {
                    addMessage({
                        sender: "bot",
                        text: formatLinks(textContent),
                    });
                }
                if (payload.buttons) {
                    addMessage({
                        sender: "bot",
                        buttons: payload.buttons,
                    });
                }
            } else if (
                node.type === "visitorClicksOnChatIcon" ||
                node.type === "disableTextInput"
            ) {
                autoAdvance(nodeId);
            }
        },
        [addMessage, formatLinks],
    );

    const handleOptionClick = useCallback(
        (btn: ChatButton) => {
            // Pre-generate ID for the user message so we can scroll to it
            const newMsgId = Math.random().toString(36);

            // Set this ID as the target for the next scroll effect
            scrollToMessageIdRef.current = newMsgId;

            // Prevent auto-jump to bottom for the immediate next render
            shouldAutoScrollRef.current = false;

            // Add user selection as message
            addMessage({ id: newMsgId, sender: "user", text: btn.title });

            if (btn.type === "url" && btn.payload) {
                window.open(btn.payload, "_blank");
                // Check if there is a destination in the flow even for URL buttons to continue conversation
                if (btn.destination) {
                    processNode(btn.destination);
                }
            } else if (btn.destination) {
                processNode(btn.destination);
            }

            // Re-enable auto-scroll after a delay
            setTimeout(() => {
                shouldAutoScrollRef.current = true;
            }, 800);
        },
        [addMessage, processNode],
    );

    // Helper to init chat
    useEffect(() => {
        if (!hasStartedRef.current) {
            hasStartedRef.current = true;
            processNode(69768555); // Start Node ID
        }
    }, [processNode]);

    // Intelligent Auto scroll
    useEffect(() => {
        // First priority: Scroll to specific targeted message (User clicked option)
        if (scrollToMessageIdRef.current) {
            const el = messageRefs.current.get(scrollToMessageIdRef.current);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
                scrollToMessageIdRef.current = null;
                return; // Skip normal auto-scroll this turn
            }
        }

        const container = messagesContainerRef.current;
        if (!container) return;

        // Check if user is near bottom
        const { scrollTop, scrollHeight, clientHeight } = container;
        const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;

        // Only auto-scroll if we are "allowed" AND we are already at the bottom
        // This effectively disables auto-scroll if the user is looking at something scrolled up (like our pinned message)
        if (shouldAutoScrollRef.current && isNearBottom) {
            bottomRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
            });
        } else if (messages.length === 0) {
            // Initial state
            bottomRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
            });
        }
    }, [messages, isTyping]);

    const renderText = (text?: string) => {
        if (!text) return null;
        // Convert \n to <br> and [Label](Url) to <a>
        const parts = text.split(/(\[.*?\]\(.*?\))/g);
        return parts.map((part, i) => {
            const match = part.match(/^\[(.*?)\]\((.*?)\)$/);
            if (match) {
                return (
                    <a
                        key={i}
                        href={match[2]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline font-semibold"
                    >
                        {match[1]}
                    </a>
                );
            }
            return (
                <span
                    key={i}
                    dangerouslySetInnerHTML={{
                        __html: part.replace(/\n/g, "<br/>"),
                    }}
                />
            );
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-36 right-6 z-9999999 w-[90vw] md:w-[380px] h-[600px] max-h-[80vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-white/20 font-body ring-1 ring-black/5"
        >
            {/* Header */}
            <div className="bg-linear-to-r from-[#2E2E62] to-[#1a1a40] p-5 flex items-center justify-between text-white shrink-0 relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl"></div>

                <div className="flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-inner">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 16 16"
                            className="w-6 h-6 text-[#FFCF01]"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a4.418 4.418 0 0 1-1.452.128 27.276 27.276 0 0 1-7.096 0A4.418 4.418 0 0 1 3 9.219V8.062Z"></path>
                            <path d="M6 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM5.496 5.033h.007c.85-.09 1.74-.144 2.497-.144.757 0 1.647.054 2.497.144h.007a.5.5 0 0 0 .507-.492c.003-.273.01-.564.013-.853.004-.294.027-1.15-.36-1.53-.652-.64-2.316-.59-2.664-.58l-.018.001c-.348-.01-2.012-.06-2.664.58-.387.38-.364 1.236-.36 1.53.003.289.01.58.013.853a.5.5 0 0 0 .507.492Z"></path>
                        </svg>
                    </div>
                    <div>
                        <h3 className="font-nexa font-bold text-lg tracking-wide">
                            Wide Wings
                        </h3>
                        <div className="flex items-center gap-1.5 opacity-80">
                            <span className="w-2 h-2 rounded-full bg-[#FFCF01] animate-pulse"></span>
                            <p className="text-xs font-medium">
                                Online Assistant
                            </p>
                        </div>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="p-2 hover:bg-white/10 rounded-full transition-all duration-300 hover:rotate-90 active:scale-95 cursor-pointer relative z-10 font-bold"
                >
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 0034 34l95-95 95 95a24 24 0 0034-34z"></path>
                    </svg>
                </button>
            </div>

            {/* Messages */}
            <div
                ref={messagesContainerRef}
                className="flex-1 overflow-y-auto p-4 space-y-6 bg-slate-50 scroll-smooth"
            >
                {messages.map((msg, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        key={msg.id}
                        ref={(el) => {
                            if (el) messageRefs.current.set(msg.id, el);
                            else messageRefs.current.delete(msg.id);
                        }}
                        className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"} gap-1`}
                    >
                        {/* Sender Label (Optional, maybe skip for cleaner look or just show for bot) */}
                        {msg.sender === "bot" && (
                            <span className="text-[10px] text-gray-400 font-bold ml-2 uppercase tracking-wider">
                                Wide Wings Bot
                            </span>
                        )}

                        <div
                            className={`flex items-end gap-2 max-w-[85%] ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
                        >
                            {/* Avatar */}
                            <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 shadow-sm ${
                                    msg.sender === "user"
                                        ? "bg-[#2E2E62]"
                                        : "bg-white border border-gray-100"
                                }`}
                            >
                                {msg.sender === "user" ? (
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        className="w-3 h-3 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                ) : (
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 16 16"
                                        className="w-3 h-3 text-[#2E2E62]"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a4.418 4.418 0 0 1-1.452.128 27.276 27.276 0 0 1-7.096 0A4.418 4.418 0 0 1 3 9.219V8.062Z"></path>
                                        <path d="M6 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM5.496 5.033h.007c.85-.09 1.74-.144 2.497-.144.757 0 1.647.054 2.497.144h.007a.5.5 0 0 0 .507-.492c.003-.273.01-.564.013-.853.004-.294.027-1.15-.36-1.53-.652-.64-2.316-.59-2.664-.58l-.018.001c-.348-.01-2.012-.06-2.664.58-.387.38-.364 1.236-.36 1.53.003.289.01.58.013.853a.5.5 0 0 0 .507.492Z"></path>
                                    </svg>
                                )}
                            </div>

                            {msg.text && (
                                <div
                                    className={`relative p-3.5 text-sm shadow-sm ${
                                        msg.sender === "user"
                                            ? "bg-[#2E2E62] text-white rounded-2xl rounded-tr-none"
                                            : "bg-white text-gray-700 border border-gray-100/50 rounded-2xl rounded-tl-none"
                                    }`}
                                >
                                    {renderText(msg.text)}
                                </div>
                            )}
                        </div>

                        {msg.buttons && (
                            <div className="flex flex-col gap-2 w-full max-w-[85%] mt-2 pl-8">
                                {msg.buttons.map((btn, idx) => (
                                    <motion.button
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + idx * 0.1 }}
                                        key={idx}
                                        onClick={() => handleOptionClick(btn)}
                                        className="group w-full cursor-pointer text-left p-3.5 rounded-xl bg-white border border-gray-100 hover:border-[#2E2E62]/30 hover:bg-linear-to-r hover:from-white hover:to-gray-50 text-[#2E2E62] text-sm font-nexa font-bold transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-between"
                                    >
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                                            {btn.title}
                                        </span>
                                        <div className="w-6 h-6 rounded-full bg-[#2E2E62]/5 flex items-center justify-center group-hover:bg-[#FFCF01] transition-colors duration-300">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth="0"
                                                viewBox="0 0 320 512"
                                                className="w-3 h-3 text-[#2E2E62] opacity-50 group-hover:opacity-100 transition-opacity"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                                            </svg>
                                        </div>
                                    </motion.button>
                                ))}
                            </div>
                        )}
                    </motion.div>
                ))}
                {isTyping && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-start pl-8"
                    >
                        <div className="bg-white border border-gray-100 rounded-2xl p-4 rounded-tl-none shadow-sm flex gap-1.5 items-center w-fit">
                            <motion.span
                                className="w-1.5 h-1.5 rounded-full bg-[#2E2E62]"
                                animate={{ y: [0, -5, 0] }}
                                transition={{
                                    duration: 0.6,
                                    repeat: Infinity,
                                    delay: 0,
                                }}
                            />
                            <motion.span
                                className="w-1.5 h-1.5 rounded-full bg-[#2E2E62]"
                                animate={{ y: [0, -5, 0] }}
                                transition={{
                                    duration: 0.6,
                                    repeat: Infinity,
                                    delay: 0.2,
                                }}
                            />
                            <motion.span
                                className="w-1.5 h-1.5 rounded-full bg-[#2E2E62]"
                                animate={{ y: [0, -5, 0] }}
                                transition={{
                                    duration: 0.6,
                                    repeat: Infinity,
                                    delay: 0.4,
                                }}
                            />
                        </div>
                    </motion.div>
                )}
                <div ref={bottomRef} />
            </div>

            {/* Footer */}
            <div className="p-3 bg-gray-50 border-t border-gray-100 shrink-0 text-center relative z-10">
                <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-400 font-medium uppercase tracking-widest">
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className="text-[#FFCF01]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M448 240l-28.8-64L355.2 147.2 291.2 118.4l64-28.8L384 25.6 412.8 89.6 476.8 118.4 412.8 147.2 384 211.2 355.2 147.2 291.2 118.4zM240 128l-32 80-80 32 80 32 32 80 32-80 80-32-80-32-32-80zM352 384l-16 40-40 16 40 16 16 40 16-40 40-16-40-16-16-40z"></path>
                    </svg>
                    <span>Powered by Wide Wings Media</span>
                </div>
            </div>
        </motion.div>
    );
}
