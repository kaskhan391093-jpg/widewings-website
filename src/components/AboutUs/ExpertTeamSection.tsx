"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TeamMember {
    name: string;
    title: string;
    image: string;
}

const teamMembers: TeamMember[] = [
    {
        name: "Seham Batterjee",
        title: "Founder",
        image: "/Seham Team.webp",
    },
    {
        name: "Mina Banoub",
        title: "Sales Director",
        image: "/Staff/Mina.jpeg",
    },
    {
        name: "Moamen Habrout",
        title: "Sales Manager",
        image: "/Staff/Moamen.png",
    },
    {
        name: "Alaa Mokhless Ali",
        title: "Account Manager",
        image: "/Staff/Alaa.png",
    },
    {
        name: "Nouran Mamdouh",
        title: "Account Manager",
        image: "/Staff/nowran.png",
    },
    {
        name: "Ebtehal Elnoras",
        title: "Account Manager",
        image: "/Staff/Ebtehal.jpg",
    },
    {
        name: "Rawan Akram",
        title: "Account Manager",
        image: "/Staff/Rawan Akram.jpeg",
    },
    {
        name: "Mohamed Shaarawi",
        title: "Full-Stack Web Developer",
        image: "/Shaarawi.jpg",
    },

    {
        name: "Lawrence Peter Watyabuko",
        title: "SEO Specialist",
        image: "/Staff/Lawrence.png",
    },

    {
        name: "Mohamed Ibrahim Juba",
        title: "Graphic Designer",
        image: "/Staff/Mohamed Ibrahim Juba.jpeg",
    },
    {
        name: "Mahmoud Ismail",
        title: "Graphic Designer",
        image: "/Staff/Mahmoud Ismail.jpeg",
    },
    {
        name: "Prasanna Veeramani",
        title: "Graphic Designer",
        image: "/Staff/Prasanna.jpg",
    },
    {
        name: "Nesma Ibrahim",
        title: "Graphic Designer",
        image: "/Staff/Nesma.jpg",
    },
    // {
    //     name: "Mohamed Aariff Jabarulla",
    //     title: "HR Executive",
    //     image: "/Staff/Aariff.jpeg",
    // },
    {
        name: "Omar Mohamed",
        title: "Video Editor",
        image: "/Staff/Omar.jpg",
    },
    {
        name: "Asmaa Mostafa",
        title: "Content creator",
        image: "/Staff/Asmaa.jpg",
    },
    {
        name: "Doha Ghareeb",
        title: "Content creator",
        image: "/Staff/Doha.jpg",
    },
    {
        name: "Eslam Deif",
        title: "Media Buyer",
        image: "/Staff/Eslam.jpeg",
    },
    {
        name: "Muhammad Hamza Khalid",
        title: "Media Buyer",
        image: "/Staff/Hamza.jpeg",
    },
    {
        name: "Kareem Ayman Abdu",
        title: "Media Buyer",
        image: "/Staff/Kareem ayman.jpeg",
    },
    {
        name: "Rana Amir Irshad",
        title: "Cash flow Incharge",
        image: "/Staff/Amir.jpeg",
    },
    {
        name: "Joy Donald Gomez",
        title: "Strategic Consultant",
        image: "/Staff/Joy donald.jpeg",
    },
];

const TeamCard = ({ member, index }: { member: TeamMember; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
            whileHover={{ y: -10 }}
            className="flex flex-col items-center group cursor-pointer"
        >
            {/* Image Container */}
            <div className="relative w-full aspect-square bg-[#F2F2F2] rounded-4xl overflow-hidden mb-6 flex items-center justify-center transition-shadow duration-300 group-hover:shadow-xl">
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    priority={index < 3}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="text-center space-y-1">
                <h4 className="font-section-title text-[#2E2E62] text-xl lg:text-2xl">
                    {member.name}
                </h4>
                <p className="font-section-title text-[#2E2E62]/70 text-base lg:text-lg italic">
                    {member.title}
                </p>
            </div>
        </motion.div>
    );
};

export default function ExpertTeamSection() {
    return (
        <section className="relative w-full pb-16 lg:pb-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-16 lg:mb-20 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.6 }}
                        className="font-section-title text-[#D49D26] text-[2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[6rem] leading-tight"
                    >
                        Expert Team Members
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-section-title text-[#2E2E62] text-lg sm:text-2xl md:text-xl lg:text-2xl xl:text-5xl font-normal"
                    >
                        The Best People to Support Your Project
                    </motion.p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
                    {teamMembers.map((member, index) => (
                        <TeamCard
                            key={member.name}
                            member={member}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
