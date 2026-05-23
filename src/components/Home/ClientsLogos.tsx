import Image from "next/image";

const logos = [
    "Artboard-1-copy-10.webp",
    "Artboard-1-copy-11.webp",
    "Artboard-1-copy-12.webp",
    "Artboard-1-copy-13.webp",
    "Artboard-1-copy-14.webp",
    "Artboard-1-copy-16.webp",
    "Artboard-1-copy-17.webp",
    "Artboard-1-copy-18.webp",
    "Artboard-1-copy-19.webp",
    "Artboard-1-copy-2.webp",
    "Artboard-1-copy-20.webp",
    "Artboard-1-copy-21.webp",
    "Artboard-1-copy-25.webp",
    "Artboard-1-copy-29.webp",
    "Artboard-1-copy-30.webp",
    "Artboard-1-copy-4.webp",
    "Artboard-1-copy-5.webp",
    "Artboard-1-copy-8.webp",
];

interface ClientsLogosProps {
    className?: string;
}

export default function ClientsLogos({ className = "" }: ClientsLogosProps) {
    return (
        <div
            className={`w-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] py-4 md:py-8 ${className} `}
        >
            <div className="w-full inline-flex flex-nowrap overflow-hidden">
                <div className="flex items-center lg:gap-16 animate-scroll whitespace-nowrap px-4">
                    {/* Double the logos for infinite loop seamlessness */}
                    {[...logos, ...logos].map((logo, index) => (
                        <div
                            key={index}
                            className="relative w-40 h-10 lg:w-48 xl:w-64 3xl:w-80 shrink-0 grayscale-0"
                        >
                            <Image
                                src={`/clientslogo/${logo}`}
                                alt="Client Logo"
                                fill
                                className="object-cover"
                                sizes="(min-width: 1920px) 320px, (min-width: 1280px) 256px, (min-width: 1024px) 192px, 160px"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
