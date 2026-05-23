"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <motion.div
                className="fixed inset-0 z-10000 flex flex-col items-center justify-center bg-white"
                initial={{ y: 0 }}
                animate={{ y: "-100%" }}
                exit={{ y: "-100%" }}
                transition={{
                    duration: 0.7,
                    ease: [0.76, 0, 0.24, 1],
                    delay: 0.35,
                }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="relative w-40 h-auto"
                >
                    <Image
                        src="/Logo.webp"
                        alt="Wide Wings Media Loading"
                        width={200}
                        height={100}
                        className="object-contain w-full h-auto"
                        priority
                    />
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.6,
                    delay: 0.5,
                    ease: "easeOut",
                }}
                className="w-full"
            >
                {children}
            </motion.div>
        </>
    );
}
