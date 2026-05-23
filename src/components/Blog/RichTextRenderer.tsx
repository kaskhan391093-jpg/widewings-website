"use client";

import parse, {
    DOMNode,
    Element,
    domToReact,
    attributesToProps,
    HTMLReactParserOptions,
} from "html-react-parser";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

interface RichTextRendererProps {
    content: string;
    className?: string;
}

function toReactProps(attribs: Record<string, string>) {
    const props = attributesToProps(attribs) as Record<string, unknown>;
    if ("fetchpriority" in props) {
        props.fetchPriority = props.fetchpriority;
        delete props.fetchpriority;
    }
    return props;
}

// React-based Accordion Component for WP Content
const WPAccordion = ({
    titleChildren,
    contentChildren,
    options,
}: {
    titleChildren: DOMNode[];
    contentChildren: DOMNode[];
    options: HTMLReactParserOptions;
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<string | number>(0);

    useEffect(() => {
        if (isOpen && contentRef.current) {
            setHeight(contentRef.current.scrollHeight + 100);
        } else {
            setHeight(0);
        }
    }, [isOpen]);

    return (
        <div
            className={`accordion-item border border-gray-100 rounded-xl bg-white transition-all duration-300 mb-3 overflow-hidden group/item hover:border-gray-200 ${
                isOpen
                    ? "ring-2 ring-[#FFCF01]/50 shadow-xl z-10 bg-gray-50/80"
                    : "shadow-sm"
            }`}
        >
            <div
                className="tab-title flex items-center justify-between px-6 py-4 cursor-pointer select-none transition-all duration-300 group/title"
                role="button"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="flex-1 pr-4 font-bold text-[#2E2E62] text-lg leading-snug group-hover/title:text-[#2E2E62]/80 transition-colors">
                    {domToReact(titleChildren, options)}
                </span>
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-transparent group-hover/title:bg-gray-100 transition-all duration-300 shrink-0">
                    <svg
                        className={`w-5 h-5 text-gray-400 group-hover/title:text-[#2E2E62] transition-transform duration-500 pointer-events-none ${
                            isOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </div>
            <div
                ref={contentRef}
                style={{ maxHeight: isOpen ? `${height}px` : "0px" }}
                className={`tab-content px-6 overflow-hidden transition-all duration-500 ${
                    isOpen
                        ? "opacity-100 visible py-2 pb-6"
                        : "opacity-0 invisible h-0"
                } text-[#2E2E62]/80 leading-relaxed text-base`}
                aria-hidden={!isOpen}
            >
                {domToReact(contentChildren, options)}
            </div>
        </div>
    );
};

export default function RichTextRenderer({
    content,
    className = "",
}: RichTextRendererProps) {
    const options: HTMLReactParserOptions = {
        replace: (domNode: DOMNode) => {
            if (!(domNode instanceof Element)) return;

            // 1. Handle Tables
            if (domNode.name === "table") {
                return (
                    <div className="overflow-x-auto my-8 border border-gray-100 rounded-xl shadow-sm">
                        <table
                            {...toReactProps(domNode.attribs)}
                            className="w-full text-left border-collapse"
                        >
                            {domToReact(domNode.children as DOMNode[], options)}
                        </table>
                    </div>
                );
            }

            // 2. Handle Iframes
            if (domNode.name === "iframe") {
                const { src, ...rest } = domNode.attribs;
                if (
                    src &&
                    (src.includes("youtube") ||
                        src.includes("vimeo") ||
                        src.includes("player"))
                ) {
                    return (
                        <div className="relative w-full aspect-video my-10 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                            <iframe
                                src={src}
                                className="absolute top-0 left-0 w-full h-full"
                                {...toReactProps(rest)}
                            />
                        </div>
                    );
                }
            }

            // 3. Handle Internal Links
            if (domNode.name === "a") {
                const { href, ...rest } = domNode.attribs;
                if (href && href.startsWith("/")) {
                    return (
                        <Link
                            href={href}
                            {...toReactProps(rest)}
                            className="text-[#2E2E62] hover:text-[#FFCF01] font-bold underline decoration-[#FFCF01] underline-offset-4 transition-colors"
                        >
                            {domToReact(domNode.children as DOMNode[], options)}
                        </Link>
                    );
                }
            }

            // 4. Handle Accordion Items (Generic for WP Plugins)
            if (
                domNode.attribs?.class?.includes("accordion-item") ||
                domNode.attribs?.class?.includes("elementor-accordion-item")
            ) {
                const titleNode = domNode.children.find(
                    (child) =>
                        child instanceof Element &&
                        (child.attribs?.class?.includes("tab-title") ||
                            child.attribs?.class?.includes(
                                "elementor-tab-title",
                            )),
                ) as Element;

                const contentNode = domNode.children.find(
                    (child) =>
                        child instanceof Element &&
                        (child.attribs?.class?.includes("tab-content") ||
                            child.attribs?.class?.includes(
                                "elementor-tab-content",
                            )),
                ) as Element;

                if (titleNode && contentNode) {
                    // Filter title children to remove existing icons
                    const cleanTitleChildren = titleNode.children.filter(
                        (child) => {
                            if (child instanceof Element) {
                                const cls = child.attribs?.class || "";
                                return !(
                                    cls.includes("accordion-icon") ||
                                    child.name === "svg" ||
                                    child.name === "i"
                                );
                            }
                            return true;
                        },
                    );

                    return (
                        <WPAccordion
                            titleChildren={cleanTitleChildren as DOMNode[]}
                            contentChildren={contentNode.children as DOMNode[]}
                            options={options}
                        />
                    );
                }
            }

            // 5. Handle Details/Summary (Native)
            if (domNode.name === "details") {
                return (
                    <details
                        {...toReactProps(domNode.attribs)}
                        className="border border-gray-100 rounded-2xl mb-4 overflow-hidden bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 group ring-1 ring-black/5 open:ring-[#FFCF01]/30 open:shadow-md"
                    >
                        {domToReact(domNode.children as DOMNode[], options)}
                    </details>
                );
            }

            if (domNode.name === "summary") {
                const cleanSummaryChildren = domNode.children.filter(
                    (child) => {
                        if (child instanceof Element) {
                            const name = child.name.toLowerCase();
                            if (
                                name === "img" ||
                                name === "svg" ||
                                name === "i" ||
                                (child.attribs?.class &&
                                    (child.attribs.class.includes("icon") ||
                                        child.attribs.class.includes("arrow")))
                            ) {
                                return false;
                            }
                        }
                        return true;
                    },
                );

                return (
                    <summary
                        {...toReactProps(domNode.attribs)}
                        className="flex items-center justify-between cursor-pointer px-6 py-5 font-bold text-[#2E2E62] bg-white hover:bg-gray-50/50 transition-all list-none select-none text-base group/summary"
                    >
                        <span className="flex-1 pr-4 leading-tight">
                            {domToReact(
                                cleanSummaryChildren as DOMNode[],
                                options,
                            )}
                        </span>
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2E2E62]/5 group-hover/summary:bg-[#FFCF01]/20 transition-colors shrink-0">
                            <svg
                                className="w-4 h-4 text-[#2E2E62] transition-transform duration-500 group-open:rotate-180"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2.5}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>
                    </summary>
                );
            }

            // 6. Handle Empty Paragraphs
            if (domNode.name === "p") {
                const hasContent = domNode.children.some(
                    (child) =>
                        ("data" in child &&
                            typeof (child as { data: unknown }).data ===
                                "string" &&
                            (child as { data: string }).data.trim().length >
                                0) ||
                        ("children" in child &&
                            (child as Element).children.length > 0),
                );
                if (!hasContent) return <></>;
            }

            if (domNode.name === "img") {
                const props = toReactProps(domNode.attribs);
                if (!("alt" in props)) {
                    props.alt = "";
                }
                return <img {...props} />;
            }
        },
    };

    return (
        <div className={`wp-content ${className}`}>
            {parse(content, options)}
        </div>
    );
}
