export interface Service {
    slug: string;
    title: string;
    description: string;
    details: string;
    image: string;
    robot: string;
    tags: string[];
    features: string[];
    // New Schema Fields
    hero?: {
        eyebrow: string;
        title: string;
        subtitle?: string;
        description?: string;
        cta_label?: string;
    };
    overview_section?: {
        headline: string;
        paragraphs: string[];
    };
    authority_section?: {
        headline: string;
        blocks: string[];
    };
    faq_section?: {
        title?: string;
        faqs: { question: string; answer: string }[];
    };
    process_section?: {
        headline: string;
        paragraphs: string[];
    };
    value_cards_section?: {
        headline: string;
        cards: { title: string; description: string }[];
    };
    final_cta_section?: {
        eyebrow?: string;
        headline: string;
        description: string;
        cta_label: string;
    };
}

export const servicesData: Service[] = [
    {
        slug: "web-design-company-dubai/",
        title: "Web & App Development",
        description:
            "We design and develop high-performing websites and mobile applications that are fast, secure, and user-focused. Every build is optimized for user experience, scalability, and business growth.",
        details:
            "In the digital age, your website is your most powerful salesperson. We build custom solutions that are not only visually stunning but technically superior. Whether it's a complex e-commerce platform or a sleek mobile app, our focus is always on performance and conversion.",
        image: "/services/Web-&-App-Development.webp",
        robot: "/secundRobotServ.png",
        tags: [
            "Website development",
            "App development",
            "UX Design",
            "Mobile First",
            "E-commerce",
        ],
        features: [
            "Custom Web Development",
            "iOS & Android App Dev",
            "UI/UX Design Systems",
            "E-commerce Solutions",
            "CMS Implementation",
        ],
        // New Schema Data for this service
        hero: {
            eyebrow: "Leading",
            title: "Web Design Company in Dubai",
        },
        overview_section: {
            headline: "Your Top Web Design Company in Dubai",
            paragraphs: [
                "Wide Wings Media was chosen as the best medical web design company in Dubai by one of the best hospitals in Dubai. We create good websites for doctors and other medical practices to help them get new patients. Let Wide Wings Media, the best web design company in Dubai, make your online presence better with great websites!",
                "We are a marketing leader in web development and design agencies in the UAE. We provide affordable, modern, and responsive web design services in Dubai, Abu Dhabi, and Sharjah. Hire our talented web designers and developers to create stunning websites that will impress.",
                "We design websites that get results. We specialize in custom websites, personalizing Sitecore and WordPress, 3D experiences, and more.",
                "As the world moves more and more into the digital age, the first and most important digital encounter between potential customers and your brand is through your website. It affects how users see the site and how many people visit and buy things from it.",
                "Wide Wings Media is one of the best web design companies in Dubai. We build websites that are beautiful and work well. These websites help businesses reach their goals. Our talented team combines creativity, strategy, and technology to make websites that attract your target audience and make your Dubai business look successful.",
                "We have successfully changed many businesses in different markets. We are committed to developing excellent digital solutions that deliver tangible results and extended business growth.",
            ],
        },
        authority_section: {
            headline:
                "Web Design Company in Dubai: For all Types of Industries.",
            blocks: [
                "Did you know that most people now use mobile devices to browse the internet? Google now shows the mobile version of your website first in its search results. So, your medical website design must work perfectly on mobile devices, just like it does on laptops or desktops.",
                "Having a strong online presence is not just a good idea; businesses need to thrive and succeed. Wide Wings Media recognizes this and provides web development services that are customized according to each client's needs.",
                "Every business is different, and every business has its challenges and goals. It's very important to understand this idea if you're working on a website. At Wide Wings Media, we understand that each business is unique. We customize our web development services for each client.",
                "Our team of expert web designers has a lot of experience building websites for healthcare and other industries that work with patients on all devices. Our services are designed to create cutting-edge digital experiences.",
                "Make your website better than your competitors’ websites. Make people want to use your website by giving them a great experience. Improve the chances that users will complete a conversion by offering them a positive experience. Our company has been in business for years, and we build custom-designed websites.",
                "Designing websites for doctors and dental practices.",
                "We are an award-winning medical website design agency. We know how to design and develop a website that attracts and engages new patients. Our medical website design process includes making the website easy for patients to use and making sure that it ranks highly in online searches.",
                "The website design for medical practices is made to make the patient experience better and get more new patients. Your medical website is your best tool for digital marketing because it’s like your digital billboard, the foundation of your marketing traffic, and a doorway to provide valuable information to patients.",
                "Turn your old or slow-loading website into an award-winning one with our website redesigns. Often, medical websites don’t use digital marketing to their advantage.",
                "Many medical websites don’t make it easy for people to find what they’re looking for. Is it time to check if your website is up to date? Just like medicine, your online presence should always be improving to meet the needs of patients.",
            ],
        },
        faq_section: {
            faqs: [
                {
                    question: "Is static web design a good choice?",
                    answer: "Static websites are a good choice for small websites that are meant for short-term use, like events and personal portfolio websites. If you want to market your business, a custom-designed dynamic website is recommended.",
                },
                {
                    question:
                        "Are WordPress websites better than custom websites?",
                    answer: "If you don’t have a large budget, WordPress is a good option. It offers many templates and allows you to launch quickly. However, custom-designed websites usually deliver better results but cost more.",
                },
                {
                    question:
                        "What is the difference between web design and web development?",
                    answer: "Web design focuses on UI and UX, while web development involves coding and programming the website to connect with databases and display content dynamically.",
                },
                {
                    question: "Is Webflow a good option for website design?",
                    answer: "Webflow has been a reliable platform for over 10 years and is suitable for small and medium businesses. However, it has limitations when it comes to custom functionality.",
                },
            ],
        },
        process_section: {
            headline: "Web Design Company in Dubai: Builds and Hosts Websites",
            paragraphs: [
                "Once we finish designing your website, we will launch it and provide you with secure hosting and website care plans to ensure smooth performance.",
                "Our care plans give you peace of mind and full support. Even if we’re not developing your website, we can still host it as part of our marketing partnership.",
                "We offer ongoing maintenance to keep your website updated, secure, and functional, including security checks, software updates, and bug fixes.",
                "Our content writers help craft brand messages, build a strong brand voice, and improve your website’s usability and visibility.",
                "Each client gets an experienced designer and a dedicated account manager to support every step of the project.",
                "You’ll have a full team working to deliver a website that attracts, converts, and educates new and existing patients.",
            ],
        },
        value_cards_section: {
            headline: "The Best Medical Web Design Company in Dubai",
            cards: [
                {
                    title: "Web design that has won awards",
                    description:
                        "We combine design and digital marketing to help businesses grow revenue online.",
                },
                {
                    title: "Strategy and consultancy for websites",
                    description:
                        "We help businesses with complex needs, multi-country operations, and large website ecosystems.",
                },
                {
                    title: "Content creation for websites",
                    description:
                        "We produce written content, photos, and videos that support your digital presence.",
                },
                {
                    title: "Full website design services",
                    description:
                        "We design award-winning websites that improve reputation and increase sales.",
                },
                {
                    title: "Transparent pricing",
                    description:
                        "Clear pricing and custom solutions tailored to your business goals and industry.",
                },
            ],
        },
        final_cta_section: {
            headline: "Ready to Dominate Your Market?",
            description:
                "Let's build a website that works as hard as you do. Get a free proposal today.",
            cta_label: "Get Your Proposal",
        },
    },
    {
        slug: "creative-branding/",
        title: "Creative & Branding",
        description:
            "We create brands that look sharp, speak clearly, and actually perform, from strategy to design and content.",
        details:
            "Our branding process is deep and strategic. We don't just design logos; we create a visual language that speaks your brand's truth. From color psychology to typography that demands attention, we ensure every touchpoint is consistent and compelling.",
        image: "/services/Creative-&-Branding.webp",
        robot: "/ServeRobot.png",
        tags: [
            "Brand Identity",
            "Positioning",
            "Storytelling",
            "Social Media",
            "Visual Identity",
        ],
        features: [
            "Logo & Visual Identity Design",
            "Brand Strategy & Positioning",
            "Voice & Tone Development",
            "Brand Guidelines & Toolkits",
            "Packaging & Print Design",
        ],
        hero: {
            eyebrow: "Visionary",
            title: "Build a brand people don’t scroll past",
        },
        overview_section: {
            headline: "Not every brand needs more noise.Most need clarity.",
            paragraphs: [
                "Design isn’t decoration, it's communication: We deliver graphic design services in Dubai and all around the MENA region.",
                "Brand Strategy: we define how your brand thinks, speaks, and shows up.Positioning, tone of voice, messaging frameworks, built to last.",
                "Visual Identity & Design: we create identities that are consistent, memorable, and flexible.",
                "Logo design services: brand guidelines, social media design system, packaging & print assets, and graphic design services. Make the first thing your audience view stand out.",
                "Strategic Branding: every decision we make ties back to how your brand performs in the real world.",
                "Clarity and Impact: marketing creatives, campaign visuals, digital & social assets, presentation design, brochure & print design, and of course, ",
            ],
        },
        authority_section: {
            headline: "Soar your persona through branding",
            blocks: [
                "We create visuals that capture attention and communicate your message with clarity and speed.",
                "Our copywriters develop persuasive messaging that drives action, from website content to high-performing ad scripts.",
                "Video remains one of the most powerful formats. We produce both short and long-form content designed to engage, retain, and convert.",
                "Your brand is growing? We keep up with evolving design trends to ensure your brand consistently feels fresh, current, and aligned with market expectations.",
                "Delivering consistent, high-quality content is key to building credibility, strengthening your presence, and earning audience trust.",
            ],
        },
        faq_section: {
            faqs: [
                {
                    question: "What is included in a branding package?",
                    answer: "Our packages typically include logo design, color palette, typography, brand voice guidelines, and stationery design.",
                },
                {
                    question: "How long does the branding process take?",
                    answer: "A comprehensive branding project usually takes 4-8 weeks, depending on the scope and number of deliverables.",
                },
                {
                    question: "Do you offer re-branding services?",
                    answer: "Yes. We specialize in revitalizing existing brands to make them relevant for modern audiences.",
                },
                {
                    question: "Can you help with naming my business?",
                    answer: "Absolutely. We offer naming services that include linguistic checks and availability research.",
                },
            ],
        },
        process_section: {
            headline: "Wide Wings Gives You Wings!",
            paragraphs: [
                "Then we shape the message, build the identity, and roll it out across everything your audience sees.",
                "Speak your truth through scripts that tell your story and deliver the message.",
                "You get exactly what you ask for, we leave safe space for providing feedback, ensuring your vision is perfectly delivered.",
                "Flexibility and punctuality are two sides of our coin, keeping your marketing channels active.",
            ],
        },
        value_cards_section: {
            headline: "Why Choose Wide Wings for Branding?",
            cards: [
                {
                    title: "Strategic approach",
                    description:
                        "We align creative decisions with your business goals for maximum impact.",
                },
                {
                    title: "World-class design",
                    description:
                        "Our award-winning designers create visuals that are both beautiful and functional.",
                },
                {
                    title: "Full-service agency",
                    description:
                        "We can extend your new brand into web, social, and marketing campaigns seamlessly.",
                },
                {
                    title: "Market expertise",
                    description:
                        "We understand the Dubai and GCC market nuances, ensuring cultural relevance.",
                },
            ],
        },
        final_cta_section: {
            eyebrow: "Let's Create",
            headline: "Build a brand that actually works.",
            description:
                "Start your project with a leading branding agency in Dubai.",
            cta_label: "Request a Creative Quote",
        },
    },
    {
        slug: "ppc-advertising-company-dubai/",
        title: "Paid Advertising & Media Buying",
        description:
            "We plan, execute, and optimize paid advertising campaigns that maximize reach, conversions, and ROI. Our data-driven media buying ensures your budget delivers measurable results across platforms.",
        details:
            "Stop wasting money on ads that don't convert. We use advanced targeting and predictive analytics to put your brand in front of the right eyes at the right time. Our media buying strategies are constantly optimized to ensure every dollar works harder for you.",
        image: "/services/Paid-Advertising-&-Media-Buying.webp",
        robot: "/ResultsRobot.png",
        tags: ["Media buying", "Google Ads", "ROI", "Conversion", "PPC"],
        features: [
            "Search Engine Marketing (SEM)",
            "Social Media Advertising",
            "Programmatic Media Buying",
            "Re-targeting Campaigns",
            "Detailed ROI Reporting",
        ],
        hero: {
            eyebrow: "#Best",
            title: "PPC Advertising Company in Dubai",
        },
        overview_section: {
            headline: "Leading PPC Agency for More Leads & Sales",
            paragraphs: [
                "Launch promotions and earn more with Wide Wings Media, the best PPC agency in Dubai. Drive more traffic and increase sales with expert PPC advertising.",
                "Leverage our expertise in PPC campaigns to maximize your return on investment. We focus on delivering strong results regardless of your business size.",
                "Wide Wings Media is a leading PPC advertising agency in Dubai. We help businesses reach marketing goals by attracting the right users through strategic ad placements.",
                "Our PPC strategies help businesses generate qualified leads, increase conversions, and grow sales across multiple industries.",
                "We are your trusted PPC advertising partner, delivering measurable ROI and proven success for businesses of all sizes, including enterprise-level organizations.",
                "We align every PPC campaign with your personal and business goals to ensure long-term growth and profitability.",
            ],
        },
        authority_section: {
            headline: "Google Ads Tailored to Your Business and Customers",
            blocks: [
                "If someone clicks on one of your ads, there is a high chance they will make a purchase within a short time frame.",
                "Online ads significantly increase brand awareness and influence buying decisions.",
                "A large percentage of small and medium-sized businesses rely on pay-per-click advertising to grow quickly.",
                "Google Ads are one of the most effective tools for generating high-quality leads and increasing sales.",
                "PPC advertising allows businesses to bring targeted visitors instantly by paying for clicks.",
                "Your ads appear at the top of search engines and social platforms such as Google, Bing, Facebook, Instagram, and LinkedIn.",
            ],
        },
        faq_section: {
            faqs: [
                {
                    question: "Are PPC services suitable for small businesses?",
                    answer: "Yes. PPC is ideal for small businesses because it delivers fast results with controlled budgets and measurable returns.",
                },
                {
                    question: "Do you manage PPC campaigns outside Dubai?",
                    answer: "Yes. We manage PPC campaigns across Dubai, Abu Dhabi, and international markets using global advertising platforms.",
                },
                {
                    question: "What makes a PPC agency effective?",
                    answer: "An effective PPC agency combines certifications, market analysis, audience targeting, and continuous campaign optimization.",
                },
                {
                    question:
                        "Why choose Wide Wings Media for PPC advertising?",
                    answer: "We offer certified PPC experts, proven results, transparent pricing, and continuous performance reporting.",
                },
            ],
        },
        process_section: {
            headline: "Turn 1 AED Into 15 AED with Expert Google Ads Strategy",
            paragraphs: [
                "Our PPC agency handles planning, execution, and management of PPC campaigns to help businesses scale profitably.",
                "Wide Wings Media provides a complete PPC management system that supports long-term growth.",
                "Many agencies struggle with Google Ads, but our decade-long experience allows us to deliver exceptional returns.",
                "We treat Google Ads as a business growth engine, not just an advertising platform.",
                "Our strategic PPC approach ensures your ads reach the right users at the right time to maximize conversions.",
            ],
        },
        value_cards_section: {
            headline: "Wide Wings Media: Your PPC Advertising Company in Dubai",
            cards: [
                {
                    title: "Expert PPC specialists",
                    description:
                        "Certified PPC experts with deep knowledge of digital marketing trends and best practices.",
                },
                {
                    title: "Advanced audience targeting",
                    description:
                        "Precise targeting using location, demographics, interests, devices, and behavioral data.",
                },
                {
                    title: "Fast and measurable results",
                    description:
                        "Optimized campaigns that deliver immediate increases in traffic, leads, and conversions.",
                },
                {
                    title: "Smart budget management",
                    description:
                        "Continuous bid and budget optimization to avoid wasted ad spend and improve profitability.",
                },
                {
                    title: "Transparent and affordable pricing",
                    description:
                        "Clear pricing models with no hidden costs, allowing accurate planning and budgeting.",
                },
            ],
        },
        final_cta_section: {
            eyebrow: "Get Started",
            headline: "Scale Faster with High-Performance PPC Campaigns",
            description:
                "Work with a trusted PPC advertising agency in Dubai and turn clicks into real revenue.",
            cta_label: "Request a PPC Proposal",
        },
    },
    {
        slug: "social-media-marketing-agency-in-dubai/",
        title: "Social Media Management",
        description:
            "We manage your social media presence with strategic content, consistent engagement, and platform-specific growth tactics. Our approach builds communities, increases visibility, and drives meaningful interactions.",
        details:
            "Social media is no longer optional—it's where your community lives. We don't just post content; we foster conversations. Our strategic management ensures your brand stays relevant and builds long-term loyalty across all major platforms.",
        image: "/services/Social-Media-Management.webp",
        robot: "/BlogRobot.png",
        tags: [
            "Engagement",
            "Visibility",
            "Reach",
            "Online Presence",
            "Community Building",
        ],
        features: [
            "Platform Strategy & Growth",
            "Community Engagement",
            "Influencer Partnerships",
            "Performance Tracking",
            "Trend Analysis",
        ],
        hero: {
            eyebrow: "#1 Ranked",
            title: "Social Media Marketing Agency in Dubai",
        },
        overview_section: {
            headline: "360° Social Media Marketing Agency in Dubai",
            paragraphs: [
                "Make your stories come to life on social media with Wide Wings Media. We are your trusted social media marketing agency in Dubai.",
                "We will help your brand stand out online by creating interesting and informative content that people enjoy and learn from. Our agency focuses on excellent content supported by analytics and key performance indicators (KPIs).",
                "Social media marketing is essential for building strong brand presence in today’s fast-changing digital world. People rely on social platforms to discover brands, make buying decisions, and contact businesses directly.",
                "If you want to market effectively today, social media is the most powerful channel. It requires creativity, strategy, and data-driven management. Wide Wings Media understands how this market works.",
                "Our team has extensive experience creating social media strategies that connect people with brands and help businesses reach their goals.",
                "This approach helps position your business as a market leader and achieve sustainable long-term growth.",
            ],
        },
        authority_section: {
            headline:
                "Managing Social Media for Healthcare, Hospitals & Luxury Brands",
            blocks: [
                "We are a social media agency in Dubai that works with healthcare practices, offering benefits and opportunities to connect with patients and professionals.",
                "Healthcare social media marketing helps practices present a more personal side through platforms like Facebook, Instagram, and LinkedIn to reach new patients.",
                "Being active on social media increases website visibility and allows practices to share expertise, health education, and wellness information.",
                "We also work with luxury brands across the Gulf region, offering advanced technology, custom digital solutions, and refined social media strategies.",
                "Our role is to help your brand stand out by creating engaging content that meets the high expectations of luxury audiences.",
                "We design unique strategies that captivate audiences and motivate engagement using deep industry knowledge.",
                "Video content is a powerful tool for increasing engagement and interaction on social media.",
                "For healthcare marketing, patients prefer hearing directly from doctors. Educational and advertising-focused content performs best for medical practices.",
            ],
        },
        faq_section: {
            faqs: [
                {
                    question: "How can social media help grow my business?",
                    answer: "Social media helps businesses increase visibility, build trust, and connect directly with customers, which leads to higher engagement and growth.",
                },
                {
                    question:
                        "Is content important for social media marketing?",
                    answer: "Yes. Content is the foundation of social media success. Educational, visual, and value-driven content performs best and builds long-term trust.",
                },
                {
                    question:
                        "Do you work with healthcare and medical practices?",
                    answer: "Yes. We specialize in healthcare social media marketing, focusing on educational content, video strategies, and patient engagement.",
                },
                {
                    question: "Do you provide analytics and reporting?",
                    answer: "Yes. We use data, analytics, and ROI reporting dashboards to track performance and measure results.",
                },
            ],
        },
        process_section: {
            headline: "Dedicated Social Media Experts & Data-Driven Growth",
            paragraphs: [
                "Each client gets a dedicated social media marketing expert who supports strategy, execution, and performance optimization.",
                "Our experts meet with clients monthly to plan content, evaluate performance, and ensure marketing success.",
                "You get access to a 24/7 marketing growth dashboard where analytics and results are tracked in real time.",
                "This ensures transparency, accountability, and continuous improvement for your social media campaigns.",
            ],
        },
        value_cards_section: {
            headline: "Why Choose Our Social Media Marketing Agency in Dubai?",
            cards: [
                {
                    title: "Get 96% more followers on social media",
                    description:
                        "We help brands grow their audience by generating qualified leads and running targeted campaigns.",
                },
                {
                    title: "Content is king on social media",
                    description:
                        "Our strategy follows the 80/20 rule, focusing on educational and engaging content.",
                },
                {
                    title: "More customers come when a business grows",
                    description:
                        "We use analytics and ROI tracking to show real business impact and growth.",
                },
                {
                    title: "Dedicated social media expert",
                    description:
                        "Every client works with a dedicated expert supported by monthly planning and reporting.",
                },
            ],
        },
        final_cta_section: {
            eyebrow: "Get Started",
            headline: "Grow Your Brand with Social Media That Converts",
            description:
                "Partner with a top social media marketing agency in Dubai and turn engagement into real business growth.",
            cta_label: "Get Your Social Media Audit",
        },
    },
    {
        slug: "content-creation-graphic-design/",
        title: "Content Creation & Graphic Design",
        description:
            "We create compelling content and visuals that capture attention and communicate your brand story clearly. From graphics to copy, every asset is designed to inspire action and strengthen brand recall.",
        details:
            "Content is the fuel that drives your digital engine. Our team of creatives produces high-quality assets tailored to each platform. Whether it's viral-ready video content or professional graphic design, we ensure your message is heard loud and clear.",
        image: "/services/Content-Creation.webp",
        robot: "/ServeRobot.png",
        tags: [
            "Copywriting",
            "Script writing",
            "Visuals",
            "Graphic Design",
            "Blogs",
            "Graphic Design",
        ],
        features: [
            "High-End Graphic Design",
            "Professional Copywriting",
            "Video Production & Editing",
            "Photography & Art Direction",
            "Blog & Editorial Content",
        ],
        hero: {
            eyebrow: "Engaging",
            title: "Content Creation & Graphic Design",
        },
        overview_section: {
            headline: "Visuals and Words That Captivate",
            paragraphs: [
                "In the digital world, content is the currency of attention. Wide Wings Media offers premium content creation and graphic design services in Dubai to help your brand speak clearly and look stunning.",
                "From social media graphics and motion design to professional copywriting and photography, we produce assets that stop the scroll and drive action.",
                "Quality content builds trust. We ensure every piece of content we create is on-brand, high-quality, and optimised for the platform it lives on.",
                "Whether you need a monthly content calendar or a one-off campaign asset, our creative team is ready to bring your ideas to life.",
            ],
        },
        authority_section: {
            headline: "High-Quality Content for Every Channel",
            blocks: [
                "Great design solves problems. We create visuals that not only look good but also communicate your message instantly.",
                "Our copywriters craft compelling narratives that persuade and convert, from website copy to ad scripts.",
                "Video content is king. We produce short-form and long-form videos that engage audiences and boost retention.",
                "We stay ahead of design trends, ensuring your brand always looks modern and relevant.",
                "Consistent, high-quality content is the fastest way to build authority and trust with your audience.",
            ],
        },
        faq_section: {
            faqs: [
                {
                    question: "Do you create content for social media?",
                    answer: "Yes. We design posts, stories, reels, and ads tailored to Instagram, LinkedIn, TikTok, and more.",
                },
                {
                    question: "Can you write SEO-friendly articles?",
                    answer: "Yes. Our copywriters are trained in SEO best practices to help your content rank and convert.",
                },
                {
                    question: "Do you offer photography and videography?",
                    answer: "Yes. We have a team of professional photographers and videographers for shoots in Dubai.",
                },
                {
                    question: "What involves graphic design services?",
                    answer: "Everything from social posts and brochures to presentations, infographics, and digital ads.",
                },
            ],
        },
        process_section: {
            headline: "Creative Production Made Simple",
            paragraphs: [
                "We begin with a content strategy session to understand your goals and upcoming campaigns.",
                "Our team handles everything from scriptwriting and storyboarding to shooting, editing, and designing.",
                "We provide drafts for your feedback, ensuring the final output matches your vision perfectly.",
                "Quick turnaround times and scalable production allow you to keep your marketing channels active and fresh.",
            ],
        },
        value_cards_section: {
            headline: "Elevate Your Brand's Visual Language",
            cards: [
                {
                    title: "Multi-disciplinary team",
                    description:
                        "Access designers, writers, and editors all under one roof.",
                },
                {
                    title: "Platform-optimized",
                    description:
                        "We tailor content specs and styles for specific platforms like TikTok vs. LinkedIn.",
                },
                {
                    title: "Fast turnaround",
                    description:
                        "We deliver high-quality assets quickly to keep up with the fast-paced digital world.",
                },
                {
                    title: "Creative direction",
                    description:
                        "We provide strategic art direction to ensure visual consistency.",
                },
            ],
        },
        final_cta_section: {
            eyebrow: "Get Noticed",
            headline: "Create Content That Converts",
            description:
                "Stop using stock photos and generic copy. Create specific content that tells your unique story.",
            cta_label: "Request a Creative Quote",
        },
    },
    {
        slug: "email-sms-crm-marketing/",
        title: "Email, SMS & CRM Marketing",
        description:
            "We create campaigns that people open, read, and act on. From welcome flows to retention sequences, every message has a purpose and a result behind it.",
        details:
            "Stay top-of-mind with personalized messaging that works. We leverage your CRM data to build automated journeys that guide customers through the funnel. From weekly newsletters to urgent SMS alerts, we optimize for opens and clicks.",
        image: "/services/Email-SMS-&-CRM-Marketing.webp",
        robot: "/secundRobotServ.png",
        tags: ["SMS", "CRM", "Automation", "Retention", "Email Marketing"],
        features: [
            "Automated Email Journeys",
            "SMS Marketing Campaigns",
            "CRM Data Strategy",
            "Lead Nurturing Sequences",
            "Performance Optimization",
        ],
        hero: {
            eyebrow: "Direct VALUE",
            title: "Email Marketing That Actually Converts",
        },
        overview_section: {
            headline: "Built for Performance, Not Noise",
            paragraphs: [
                "Winning a customer is just the beginning. At Wide Wings Media, we focus on increasing lifetime value through strategic Email, SMS, and CRM-driven marketing.",
                "We turn your data into smart, automated journeys that guide leads, onboard new customers, and bring inactive users back into the loop.",
                "Email marketing continues to deliver exceptional ROI. We create visually refined, mobile-optimized campaigns designed to drive open and meaningful engagement.",
                "SMS marketing delivers immediate impact, making it ideal for urgent promotions and time-sensitive communication.",
                "Using CRM insights, we ensure every message is timely, relevant, and delivered to the right audience.",
            ],
        },
        authority_section: {
            headline: "We don’t do random newsletters.",
            blocks: [
                "Automated flows keep your brand in motion, even when you’re off the clock. From welcome emails to abandoned cart recovery and retention journeys, we build systems that guide your customers with precision and timing. Our email marketing automation services in Dubai and the UAE are designed to increase conversions, recover lost sales, and improve long-term customer engagement.",
                "A strong campaign is like catching the right wind, it carries your message further with less resistance. We develop data-driven campaign strategies and content that align with your goals and audience behavior. As a performance marketing and email marketing agency in the UAE, we ensure every campaign is built to drive measurable results.",
                "Segmentation and personalization bring you closer to your audience, not further from them. We use CRM insights to deliver tailored messages based on behavior, preferences, and lifecycle stage. Our CRM marketing services in Dubai help brands improve targeting, increase engagement rates, and maximize customer lifetime value.",
                "Through continuous testing and optimization, we refine your strategy mid-flight. From A/B testing to performance tracking, we analyze what works and scale it. Our marketing analytics and optimization services in the UAE provide clear reporting, actionable insights, and continuous growth opportunities—so every campaign performs better than the last.",
                "And because every interaction matters, we implement structured feedback follow-ups to close the loop. By integrating customer feedback systems within your CRM, we help you improve retention, enhance customer experience, and build stronger brand loyalty across the MENA market. high-quality content, you don’t just show up—you build a nest of trust, layer by layer, until your audience sees you as a name worth returning to.",
            ],
        },
        faq_section: {
            faqs: [
                {
                    question: "What CRM platforms do you work with?",
                    answer: "We work with major platforms like HubSpot, Salesforce, Klaviyo, Mailchimp, and others.",
                },
                {
                    question: "Is SMS marketing intrusive?",
                    answer: "Not when done right. We follow best practices to ensure messages are valuable and timely, not spammy.",
                },
                {
                    question: "How do you measure success?",
                    answer: "We track Open Rate, Click-Through Rate (CTR), Conversion Rate, and Revenue per Recipient.",
                },
                {
                    question: "Can you help build my email list?",
                    answer: "Yes. We implement lead generation strategies like pop-ups and lead magnets to grow your database.",
                },
            ],
        },
        process_section: {
            headline: "More Than Emails. It’s a Revenue Channel",
            paragraphs: [
                "If you’re wondering what email marketing should actually do, it should move users from attention to action, consistently.",
                "We design branded templates and write persuasive copy for your campaigns and flows.",
                "We set up complex automation triggers based on user behavior (e.g., abandoned cart, birthday, post-purchase).",
                "Regular A/B testing of subject lines and content ensures we are constantly improving performance.",
            ],
        },
        value_cards_section: {
            headline: "Unlock Hidden Revenue in Your Database",
            cards: [
                {
                    title: "High ROI",
                    description:
                        "Email marketing consistently delivers one of the highest returns on investment.",
                },
                {
                    title: "Customer Loyalty",
                    description:
                        "Regular, valuable communication keeps your brand top-of-mind.",
                },
                {
                    title: "Automated Revenue",
                    description:
                        "Set-and-forget flows generate sales automatically.",
                },
                {
                    title: "Advanced Segmentation",
                    description:
                        "Target users precisely based on their purchase history and behavior.",
                },
            ],
        },
        final_cta_section: {
            eyebrow: "STAY AHEAD OF THE GAME",
            headline: "Turn Subscribers into Loyal Customers",
            description:
                "Use your customer data to the optimal point,  build relationships that last and drive repeat sales.",
            cta_label: "Audit My CRM Strategy",
        },
    },
    {
        slug: "seo-services-dubai/",
        title: "SEO & Performance Management",
        description:
            "We optimize your digital presence to rank higher, attract quality traffic, and improve long-term performance. Our SEO strategies are data-led, ethical, and focused on sustainable growth.",
        details:
            "Search is a marathon, not a sprint. We use white-hat SEO techniques to build authority and ensure your brand ranks for the keywords that matter. Our performance management approach ensures technical health and content relevance stay at peak levels.",
        image: "/services/SEO-&-Performance-Management.webp",
        robot: "/ResultsRobot.png",
        tags: ["SEO", "Performance", "Optimization", "Rankings", "Traffic"],
        features: [
            "Technical SEO Audits",
            "On-Page Optimization",
            "Backlink Building Strategy",
            "Keyword Research & Mapping",
            "Local SEO Management",
        ],
        hero: {
            eyebrow: "#Best",
            title: "Local SEO Services in Dubai",
        },
        overview_section: {
            headline: "The Best Local SEO Agency in Dubai",
            paragraphs: [
                "Is it easy for potential customers to find your company online? Our local SEO services in Dubai help improve search engine rankings and attract more visitors.",
                "Local SEO brings people who are ready to buy your products or services. Strengthen your online presence by working with a top local SEO company in Dubai.",
                "Wide Wings Media is a local SEO company in Dubai, UAE. We provide high-quality search engine optimization services focused on delivering measurable results.",
                "We increase organic traffic, conversions, and leads by ranking websites for high-value business keywords using proven SEO strategies in Dubai.",
                "Our technical SEO experts ensure your website gets the technical attention it needs to rank in top search results.",
                "Our goal is not only to increase visibility but also to increase long-term business value and revenue.",
            ],
        },
        authority_section: {
            headline:
                "Best SEO Services in Dubai by a Leading Local SEO Company",
            blocks: [
                "Wide Wings Media is the best SEO agency in Dubai, offering advanced and effective SEO services that follow Google and search engine best practices.",
                "Effective SEO turns your website into an active sales platform by generating high-quality business leads.",
                "We provide SEO services for businesses of all sizes and industries, helping them grow online with proven strategies.",
                "Every SEO campaign follows a step-by-step process: understanding your business, building a custom plan, and executing using modern SEO tools.",
                "Our approach helps maximize return on investment by improving traffic, conversions, and long-term growth.",
                "We invest in our team and believe in ethical SEO practices, which is why clients continue to trust us.",
                "Our experience across multiple industries allows us to apply proven strategies that help websites rank higher in Google.",
                "You don’t have to worry about keeping up with SEO trends—we handle everything for you.",
            ],
        },
        faq_section: {
            faqs: [
                {
                    question:
                        "Why is local SEO important for businesses in Dubai?",
                    answer: "Local SEO helps businesses appear in search results when customers are actively looking for nearby services, increasing visibility and conversions.",
                },
                {
                    question: "How does SEO help generate more customers?",
                    answer: "SEO improves website rankings, which drives targeted traffic and turns visitors into qualified leads and customers.",
                },
                {
                    question: "Do you follow Google SEO best practices?",
                    answer: "Yes. All our SEO strategies follow Google guidelines and industry best practices to ensure sustainable growth.",
                },
                {
                    question: "Is SEO suitable for small and local businesses?",
                    answer: "Yes. SEO is especially effective for local businesses looking to compete in their market and attract ready-to-buy customers.",
                },
            ],
        },
        process_section: {
            headline: "Grow Your Business with Proven SEO Strategies",
            paragraphs: [
                "Choosing the right SEO agency in Dubai can have a major impact on your online success.",
                "Wide Wings Media stands out through innovative strategies, skilled professionals, and measurable results.",
                "We build custom SEO plans tailored to the Dubai marketplace and your business goals.",
                "Our focus is on long-term visibility, brand trust, and sustainable growth through ethical SEO practices.",
            ],
        },
        value_cards_section: {
            headline: "Local SEO Services in Dubai for All Businesses",
            cards: [
                {
                    title: "Competitor analysis",
                    description:
                        "We study your competitors to identify gaps and opportunities that help you outperform them.",
                },
                {
                    title: "Comprehensive SEO audits",
                    description:
                        "We analyze your website using advanced SEO tools to uncover technical and content improvements.",
                },
                {
                    title: "Targeted keyword strategy",
                    description:
                        "We focus on high-intent search terms based on market trends, user behavior, and competitor data.",
                },
                {
                    title: "Link building strategies",
                    description:
                        "We build high-quality backlinks safely to improve authority without risking penalties.",
                },
                {
                    title: "Website optimization",
                    description:
                        "We optimize site structure and performance to improve search engine rankings.",
                },
            ],
        },
        final_cta_section: {
            eyebrow: "Get Started",
            headline: "Rank Higher and Grow with Local SEO",
            description:
                "Work with a trusted local SEO agency in Dubai and turn search traffic into real business growth.",
            cta_label: "Get Your Free SEO Consultation",
        },
    },
    {
        slug: "outdoor-advertising-dubai/",
        title: "OOH Advertising",
        description:
            "We deliver impactful out-of-home advertising that amplifies brand visibility across key locations. From billboards to transit media, we help your message reach audiences beyond digital screens.",
        details:
            "Dominating the digital space is great, but real-world presence is powerful. We bridge the gap between digital and physical with high-impact Out-Of-Home placements. From Dubai's busiest highways to luxury mall displays, we get you seen.",
        image: "/services/OOH-Advertising.webp",
        robot: "/BlogRobot.png",
        tags: ["OOH", "Outdoor", "Billboards", "Visibility", "Reach"],
        features: [
            "Digital Billboard Placements",
            "Transit & Vehicle Branding",
            "Mall & Retail OOH",
            "Location Strategy",
            "Creative Design for OOH",
        ],
        hero: {
            eyebrow: "Premium",
            title: "Outdoor Advertising Services",
        },
        overview_section: {
            headline: "Premium Outdoor Advertising Services in Dubai",
            paragraphs: [
                "Get exposure with effective outdoor advertising in Dubai. We run strategic outdoor advertising campaigns that help brands reach their target audiences.",
                "Wide Wings Media is a leading outdoor advertising agency in Dubai. Founded in 2020, the company delivers premium hoardings and unipolar advertising solutions.",
                "Outdoor advertising includes billboards on bridges and lampposts, unipolar, wall banners, scaffolding, and taxi advertising.",
                "We are leaders in outdoor advertising across Dubai and the Emirates, offering a wide range of placements including billboards, bridge banners, lampposts, rooftops, metro, airport, malls, and transit advertising.",
            ],
        },
        authority_section: {
            headline: "Outdoor Advertising for Business Growth",
            blocks: [
                "We provide a wide range of outdoor and out-of-home (OOH) advertising solutions placed in key locations across the Emirates.",
                "Our services include billboard advertising, mobile billboards, street furniture advertising, unipole advertising, hoardings, and airport advertising.",
                "We use smart thinking, modern technology, and attention to detail to make brands stand out and remain memorable.",
                "Dubai is an ideal market for outdoor advertising due to its fast growth, diverse population, and global business presence.",
                "Successful outdoor advertising increases brand visibility, recognition, and audience interaction.",
            ],
        },
        faq_section: {
            faqs: [
                {
                    question: "What types of outdoor advertising do you offer?",
                    answer: "We offer billboard advertising, bridge banners, LED billboards, lampposts, unipolar, hoardings, airport, metro, mall, and transit advertising.",
                },
                {
                    question:
                        "Where are outdoor advertisements placed in Dubai?",
                    answer: "Outdoor ads are placed on highways, main roads, bridges, busy intersections, malls, metro stations, airports, and high-traffic locations.",
                },
                {
                    question: "Is outdoor advertising effective in Dubai?",
                    answer: "Yes. Dubai’s busy streets, landmarks, and high traffic make outdoor advertising one of the most effective branding strategies.",
                },
                {
                    question: "Can outdoor advertising help brand awareness?",
                    answer: "Outdoor advertising ensures constant visibility, helping brands stay top-of-mind with repeated exposure.",
                },
            ],
        },
        process_section: {
            headline: "Outdoor Advertising vs. Other Forms of Advertising",
            paragraphs: [
                "Outdoor advertising differs from newspaper, television, and digital advertising by offering continuous brand visibility.",
                "Billboards and street advertising are always visible, allowing brands to communicate messages throughout the day.",
                "Repeated exposure increases brand recognition and recall among audiences.",
                "Outdoor advertising in Dubai is especially effective due to the city’s constant development and movement.",
            ],
        },
        value_cards_section: {
            headline: "Why Invest in Outdoor Advertising in Dubai?",
            cards: [
                {
                    title: "High visibility",
                    description:
                        "Dubai’s landmarks and busy streets allow outdoor ads to reach millions of residents, tourists, and professionals.",
                },
                {
                    title: "Targeted reach",
                    description:
                        "Outdoor advertising reaches specific audiences in high-traffic areas, luxury districts, and business centers.",
                },
                {
                    title: "Cost-effective advertising",
                    description:
                        "Outdoor advertising is more affordable than traditional media like TV and newspapers.",
                },
                {
                    title: "Strong brand recognition",
                    description:
                        "Frequent exposure helps audiences remember and recognize brands more easily.",
                },
                {
                    title: "Captive audience",
                    description:
                        "People in traffic or public spaces are more likely to notice and remember outdoor advertisements.",
                },
            ],
        },
        final_cta_section: {
            eyebrow: "Get Started",
            headline: "Make Your Brand Impossible to Ignore",
            description:
                "Launch high-impact outdoor advertising campaigns in Dubai and reach audiences where it matters most.",
            cta_label: "Request an Outdoor Advertising Plan",
        },
    },
    {
        slug: "analytics-performance-marketing/",
        title: "Analytics & Performance Marketing",
        description:
            "We’re not just a media buying agency, we build performance systems that scale. From strategy to execution, every campaign is designed to convert, not just reach.",
        details:
            "In marketing, if you can't measure it, you can't improve it. We provide deep-dive analytics that reveal exactly where your growth is coming from. Our performance marketing focus means we're constantly iterating to maximize your bottom line.",
        image: "/services/Analytics-&-Performance-Marketing.webp",
        robot: "/ServeRobot.png",
        tags: [
            "Performance marketing",
            "Analytics",
            "Conversion Rate",
            "ROI optimization",
        ],
        features: [
            "Conversion Rate Optimization (CRO)",
            "Attribution Modeling",
            "Advanced Data Tracking",
            "Competitor Benchmarking",
            "Real-time Dashboards",
        ],
        hero: {
            eyebrow: "Measurable",
            title: "Media Buying Turn ad spend into measurable growth.",
        },
        overview_section: {
            headline:
                "The Only Measurable Way Is Ours. Data without insight is noise.",
            paragraphs: [
                "We turn complex datasets into clear, actionable strategies that drive real business decisions. Our data analytics and marketing insights services in the UAE help brands uncover opportunities, improve performance, and scale with confidence across competitive MENA markets.",
                "For Conversion Rate Optimization (CRO), we test proven frameworks and user behavior strategies to improve how your website performs. In addition, we focus on increasing conversions, reducing drop-offs, and maximizing the value of every visitor.",
                "Attribution shouldn’t be a guessing game. We solve tracking and attribution challenges to give you a clear picture of what’s actually driving results. Our marketing attribution solutions in the UAE help you understand the true impact of your top-of-funnel campaigns and optimize your media spend accordingly.",
                "Accurate tracking is the foundation of smart marketing. We implement advanced tracking systems to ensure reliable data collection across all platforms. With our conversion tracking and analytics setup services in Dubai, you can build high-performing retargeting campaigns and scalable lookalike audiences with confidence.",
                "Understanding your numbers is key to sustainable growth. We help you calculate and optimize critical metrics like Customer Lifetime Value (LTV) and Customer Acquisition Cost (CAC). Our marketing consultancy services in the MENA region focus on improving profitability, refining your business model, and driving long-term success.",
            ],
        },
        authority_section: {
            headline: "Performance Marketing That Delivers",
            blocks: [
                "We operate marketing performance focused on outcomes, not impressions.",
                "We put strategy before spend, most campaigns fail before they launch. Start scaling with a performance marketing agency that actually delivers.",
                "We address attribution gaps, giving you a clear view of how your top-of-funnel efforts truly perform.",
                "Our tracking frameworks ensure precise data collection, enabling effective retargeting and high-quality lookalike audience building.",
                "We support you in calculating key metrics like Customer Lifetime Value (LTV) and Customer Acquisition Cost (CAC), helping you refine and scale your business model with confidence.",
            ],
        },
        faq_section: {
            faqs: [
                {
                    question: "What is Performance Marketing?",
                    answer: "It's a results-driven approach where you pay based on specific actions like clicks, leads, or sales.",
                },
                {
                    question: "Do I need Google Analytics 4 (GA4)?",
                    answer: "Yes. GA4 is the new standard. We help you migrate, set up, and master it.",
                },
                {
                    question: "How does CRO help?",
                    answer: "Improving your conversion rate means getting more customers from the same amount of traffic, lowering your CPA.",
                },
                {
                    question: "Do you provide training?",
                    answer: "Yes. We can train your team on how to read dashboards and interpret key metrics.",
                },
            ],
        },
        process_section: {
            headline: "Measure, Optimize, Scale",
            paragraphs: [
                "We start with a technical audit of your tagging setup (GTM, Pixel, Analytics) to ensure data accuracy.",
                "We create custom dashboards using Looker Studio, designed around your core business KPIs for clear, actionable insights.",
                "We continuously test and optimize through A/B experiments across landing pages and ad creatives to improve performance over time.",
                "Our monthly in-depth reports break down key trends, performance wins, and strategic opportunities to guide the next phase of growth.",
            ],
        },
        value_cards_section: {
            headline: "Master Your Marketing Data",
            cards: [
                {
                    title: "Crystal clear reporting",
                    description:
                        "No more confusing spreadsheets. Get visual, easy-to-understand dashboards.",
                },
                {
                    title: "Higher profitability",
                    description:
                        "Eliminate wasted spend and focus budget on high-performing channels.",
                },
                {
                    title: "Technical expertise",
                    description:
                        "We handle complex tracking setups involving GTM, API conversions, and server-side tracking.",
                },
                {
                    title: "Proactive insights",
                    description:
                        "We don't just report history; we predict trends and suggest future moves.",
                },
            ],
        },
        final_cta_section: {
            eyebrow: "Get Clarity",
            headline: "Scale Your Business with Confidence",
            description:
                "Unlock the power of your data. Let's build a marketing engine that is predictable and scalable.",
            cta_label: "Get a Data Audit",
        },
    },
    {
        slug: "pr-management/",
        title: "PR Management",
        description:
            "We position your brand where it matters. Through the right narratives, the right platforms, and the right timing. Every move is intentional, built to strengthen credibility and visibility.",
        details:
            "Reputation is everything. We help you control the narrative and build authority through strategic PR. From press releases to high-level media placements, we ensure your brand is perceived as a leader in its industry.",
        image: "/services/PR-Management.webp",
        robot: "/secundRobotServ.png",
        tags: [
            "PR",
            "Reputation Management",
            "Media Relations",
            "Corporate PR",
        ],
        features: [
            "Media Outreach & Relations",
            "Crisis Management",
            "Press Release Distribution",
            "Corporate Communications",
            "Reputation Audits",
        ],
        hero: {
            eyebrow: "Reputation",
            title: "PR That Builds Presence",
        },
        overview_section: {
            headline: "Shaping Perceptions & Building Trust",
            paragraphs: [
                "Our PR management approach is rooted in consistency, control, and strategic visibility. We build and maintain strong relationships with key media outlets to secure meaningful coverage. Our PR agency services in Dubai and the UAE focus on targeted media relations and press outreach that position your brand where it matters most.",
                "Your story deserves more than just exposure, it needs direction. We craft compelling press releases and brand narratives that align with your identity and business goals. Through our press release and brand storytelling services in the MENA region, we ensure your message is clear, credible, and impactful across all channels.",
                "Influence today is built on alignment, not reach alone. We connect your brand with the right influencers and partners to create authentic, high-value collaborations. Our influencer marketing and partnership strategies in the UAE are designed to expand your reach while maintaining brand integrity and audience trust.",
                "Reputation is your most valuable asset, and it needs constant protection. We monitor brand perception, manage public sentiment, and respond proactively to potential risks. With our reputation management services in Dubai, you stay in control of your narrative while building long-term credibility in the MENA market.",
            ],
        },
        authority_section: {
            headline: "We build bridges between communities.",
            blocks: [
                "We build long-term presence by connecting your brand to conversations that matter, turning visibility into trust, and trust into growth.",
                "Third-party validation builds trust faster than advertising. We get people talking about you.",
                "Crisis preparedness is essential. We have protocols to handle sensitive situations swiftly and effectively.",
                "Our digital PR strategies not only build reputation but also improve SEO through high-quality backlinks.",
                "We measure PR value through sentiment analysis, reach, and share of voice, not just vanity metrics.",
            ],
        },
        faq_section: {
            faqs: [
                {
                    question: "How is PR different from advertising?",
                    answer: "Advertising is paid media (you buy space); PR is earned media (you earn coverage through merit/story).",
                },
                {
                    question: "Can you guarantee media coverage?",
                    answer: "No ethical agency guarantees coverage, but our strong network maximizes your chances of placement.",
                },
                {
                    question: "Do you handle crisis communications?",
                    answer: "Yes. We provide 24/7 support to manage and mitigate reputational risks during a crisis.",
                },
                {
                    question: "Is PR good for SEO?",
                    answer: "Yes! Online press mentions often include backlinks from high-authority news sites, boosting your SEO.",
                },
            ],
        },
        process_section: {
            headline: "Position your brand where it actually matters",
            paragraphs: [
                "We define your core narrative and identify the most compelling angles for your story.",
                "We create a targeted media list of journalists and outlets relevant to your industry.",
                "We pitch your story effectively, managing all media inquiries and interview requests.",
                "We monitor coverage and sentiment, providing detailed reports on the impact of your campaigns.",
            ],
        },
        value_cards_section: {
            headline: "Protect and Grow Your Reputation",
            cards: [
                {
                    title: "Media network",
                    description:
                        "Access to established relationships with key media outlets in the GCC.",
                },
                {
                    title: "Crisis ready",
                    description:
                        "Confidence knowing you have a team ready to handle any PR emergency.",
                },
                {
                    title: "Thought leadership",
                    description:
                        "Position your CEO and experts as go-to voices in your industry.",
                },
                {
                    title: "Integrated approach",
                    description:
                        "We align PR with your social and marketing strategies for a unified brand voice.",
                },
            ],
        },
        final_cta_section: {
            eyebrow: "Be Heard",
            headline: "Tell Your Story to the World",
            description:
                "Build a reputation that opens doors. Let's craft a PR strategy that elevates your brand.",
            cta_label: "Consult with a PR Expert",
        },
    },
];
