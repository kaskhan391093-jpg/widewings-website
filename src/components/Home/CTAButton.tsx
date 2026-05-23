"use client";
import Link from "next/link";
import { motion } from "framer-motion";

interface CTAButtonProps {
    text: string;
    onClick?: () => void;
    href?: string;
    className?: string;
    icon?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
    text,
    onClick,
    href,
    className = "",
    icon = "",
}) => {
    const buttonClasses = `
        relative overflow-hidden rounded-full text-center py-4 text-white font-bold
        shadow-lg hover:shadow-xl transition-shadow duration-300
        ${className}
    `;

    const buttonStyle = {
        background: "linear-gradient(to right, #DFA518, #CF6B00)",
    };

    const content = (
        <span className="font-section-title relative z-10 flex items-center gap-2 text-md md:text-lg lg:text-xl cursor-pointer px-8">
            {text}
            <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 h-6 ml-1 ${icon}`}
            >
                <path d="M5 3L19 12L5 21V3Z" />
            </svg>
        </span>
    );

    if (href) {
        return (
            <Link href={href} className="inline-block">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className={buttonClasses}
                    style={buttonStyle}
                >
                    {content}
                </motion.div>
            </Link>
        );
    }

    return (
        <motion.button
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className={buttonClasses}
            style={buttonStyle}
        >
            {content}
        </motion.button>
    );
};

export default CTAButton;
