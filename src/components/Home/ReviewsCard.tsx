"use client";

import React from "react";

interface ReviewsCardProps {
    text: string;
    author: string;
    subtitle?: string;
    avatarBg: string;
}

const QuoteIcon = () => (
    <svg
        width="34"
        height="28"
        viewBox="0 0 34 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#DFA518]"
    >
        <path
            d="M0 16.0385C0 10.3846 1.48718 5.76923 4.46154 2.19231C7.51282 -1.38462 11.5385 -0.192308 13.0769 0.538462L10.7308 6.46154C9.53846 5.84615 7.82051 6.30769 7.07692 7.73077C6.33333 9.07692 6.64103 10.8462 7.30769 11.8462C7.97436 12.8462 9.53846 12.5 11.1538 12.5C13.2308 12.5 15.1923 13.4615 15.1923 16.5385C15.1923 23 11.3077 27.0385 7.30769 27.0385C3.30769 27.0385 0 23.3462 0 16.0385ZM18.8077 16.0385C18.8077 10.3846 20.2949 5.76923 23.2692 2.19231C26.3205 -1.38462 30.3462 -0.192308 31.8846 0.538462L29.5385 6.46154C28.3462 5.84615 26.6282 6.30769 25.8846 7.73077C25.141 9.07692 25.4487 10.8462 26.1154 11.8462C26.7821 12.8462 28.3462 12.5 29.9615 12.5C32.0385 12.5 34 13.4615 34 16.5385C34 23 30.1154 27.0385 26.1154 27.0385C22.1154 27.0385 18.8077 23.3462 18.8077 16.0385Z"
            fill="currentColor"
        />
    </svg>
);

const ReviewsCard = ({
    text,
    author,
    subtitle,
    avatarBg,
}: ReviewsCardProps) => {
    return (
        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.06)] min-h-[480px] md:min-h-[420px] lg:min-h-[400px] flex flex-col h-full mx-auto w-full">
            <div className="mb-6 md:mb-8">
                <QuoteIcon />
            </div>

            <p className="font-ui text-[#2E2E62] text-[15px] md:text-base lg:text-[17px] leading-relaxed mb-10 grow italic">
                {text}
            </p>

            <div className="flex items-center gap-4 mt-auto">
                <div
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full shrink-0 flex items-center justify-center text-white font-section-title text-xl"
                    style={{ backgroundColor: avatarBg }}
                >
                    {author.charAt(0)}
                </div>
                <div className="flex flex-col">
                    <span className="font-section-title text-[#2E2E62] text-base md:text-lg leading-tight">
                        {author}
                    </span>
                    {subtitle && (
                        <span className="font-ui-muted text-[#2E2E62]/70 text-sm md:text-[15px] leading-snug">
                            {subtitle}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ReviewsCard;
