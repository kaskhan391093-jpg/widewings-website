export const CHATFLOW = {
    name: "Wide Wings Media",
    category: "solve_problems",
    firstTrigger: "visitorClicksOnChatIcon",
    type: "conversationAutomation",
    nodes: [
        {
            id: 69768555,
            type: "visitorClicksOnChatIcon",
            payload: { frequency: "once24" },
        },
        {
            id: 69768557,
            type: "decision",
            payload: {
                text: "🙌 Great! Here are some of the most common questions we get.\nChoose a topic below to learn more 👇",
                buttons: [
                    {
                        id: 1,
                        type: "action",
                        title: "Our Services 💡",
                        destination: 69768570,
                    },
                    {
                        id: 2,
                        type: "action",
                        title: "How to Start 🤝",
                        destination: 69768571,
                    },
                    {
                        id: 3,
                        type: "action",
                        title: "Do you work with businesses of all sizes? 🏢",
                        destination: 69768572,
                    },
                    {
                        id: 4,
                        type: "action",
                        title: "Social Media Management 📱",
                        destination: 69772548,
                    },
                    {
                        id: 5,
                        type: "action",
                        title: "Pricing & Packages 💰",
                        destination: 69772549,
                    },
                    {
                        id: 6,
                        type: "action",
                        title: "Other Questions ✉️",
                        destination: 69772550,
                    },
                ],
            },
        },
        {
            id: 69768558,
            type: "disableTextInput",
            payload: {},
        },
        {
            id: 69768570,
            type: "sendChatMessagesToVisitor",
            payload: {
                messages: [
                    {
                        type: "text",
                        content:
                            "We are a full-service marketing agency.  \nOur services include social media management, content creation, digital advertising, branding, web design & development, PR, and influencer marketing.  \n\nWe tailor each solution to help your brand grow and stand out 💡 \n\n",
                    },
                    {
                        type: "text",
                        content:
                            "If you'd like to discuss your brand’s needs, you can easily book a meeting with our team here 👇  \n\n[Book a Meeting](https://calendly.com/wide-wings-media) 📅\n",
                    },
                ],
            },
        },
        {
            id: 69768571,
            type: "sendChatMessagesToVisitor",
            payload: {
                messages: [
                    {
                        type: "text",
                        content:
                            "It’s simple! Just share a few details about your brand and goals, and one of our account managers will reach out to create a personalized marketing plan for you.\n",
                    },
                    {
                        type: "text",
                        content:
                            "You can start by filling out our contact form here:\n\n[Contact Us](https://wide-wings.ae/contact-us/) 📝\n\nOr, if you’d like to speak with us directly, you can book a quick meeting here:\n\n[Book a Meeting](https://calendly.com/wide-wings-media) 📅\n",
                    },
                ],
            },
        },
        {
            id: 69768572,
            type: "sendChatMessagesToVisitor",
            payload: {
                messages: [
                    {
                        type: "text",
                        content:
                            "Absolutely! We work with startups, SMEs, and large enterprises.  \nNo matter the size, we craft strategies that fit your budget, industry, and goals — ensuring measurable results 📊\n\n",
                    },
                    {
                        type: "text",
                        content:
                            "If you'd like to discuss your brand’s needs, you can easily book a meeting with our team here 👇  \n\n[Book a Meeting](https://calendly.com/wide-wings-media) 📅\n",
                    },
                ],
            },
        },
        {
            id: 69772548,
            type: "sendChatMessagesToVisitor",
            payload: {
                messages: [
                    {
                        type: "text",
                        content:
                            "Yes! 🎯 We offer end-to-end social media management, including:\n- Content creation  \n- Scheduling  \n- Community engagement  \n- Performance reporting  \n\nOur goal is to help your brand connect with your audience and grow online.\n\n",
                    },
                    {
                        type: "text",
                        content:
                            "If you'd like to discuss your brand’s needs, you can easily book a meeting with our team here 👇  \n\n[Book a Meeting](https://calendly.com/wide-wings-media) 📅\n",
                    },
                ],
            },
        },
        {
            id: 69772549,
            type: "sendChatMessagesToVisitor",
            payload: {
                messages: [
                    {
                        type: "text",
                        content:
                            "Our pricing depends on the services you need and the scale of your project 💼 \nWe create custom packages tailored to your goals, budget, and business size.\n\n",
                    },
                    {
                        type: "text",
                        content:
                            "Want to get a personalized quote?\n👉 [Get a Quote](https://wide-wings.ae/contact-us/) 📝\n\nOr schedule a quick call to discuss your needs:\n\n[Book a Meeting](https://calendly.com/wide-wings-media) 📅\n",
                    },
                ],
            },
        },
        {
            id: 69772550,
            type: "sendChatMessagesToVisitor",
            payload: {
                messages: [
                    {
                        type: "text",
                        content:
                            "No problem! 😊 \nYou can share your question below, or reach out to us directly — we’ll get back to you shortly.\n\n[Contact us](https://wide-wings.ae/contact-us/) 📩 \n\n[Book a Meeting](https://calendly.com/wide-wings-media) 📅\n\n",
                    },
                ],
            },
        },
        {
            id: 69772551,
            type: "disableTextInput",
            payload: {},
        },
        {
            id: 69772552,
            type: "decisionButtons",
            payload: {
                text: "👋 Hey there! Welcome to Wide Wings Media — your creative growth partner.\nI’m here to help you take your brand to the next level 🚀\nWhat would you like to do today?",
                buttons: [
                    {
                        id: 1,
                        type: "action",
                        title: "Learn about our services 💡",
                        destination: 69768558,
                    },
                    {
                        id: 2,
                        type: "url",
                        title: "Book a meeting 📅",
                        payload: "https://calendly.com/wide-wings-media",
                        destination: 69772554,
                    },
                    {
                        id: 3,
                        type: "url",
                        title: "Contact our team ✉️",
                        payload: "https://wide-wings.ae/contact-us/",
                        destination: 69772558,
                    },
                ],
            },
        },
        {
            id: 69772553,
            type: "decisionButtons",
            payload: {
                text: "What would you like to do next? 👇",
                buttons: [
                    {
                        id: 3,
                        type: "action",
                        title: "See more questions 💬 ",
                        payload: "https://wide-wings.ae/contact-us/",
                        destination: 69768557,
                    },
                    // { "id": 4, "type": "action", "title": "Contact Our Team 💬", "destination": null }, // Null destination, maybe ignore or link to contact
                    {
                        id: 5,
                        type: "action",
                        title: "Main menu 🔙 ",
                        destination: 69772556,
                    },
                ],
            },
        },
        {
            id: 69772554,
            type: "sendChatMessagesToVisitor",
            payload: {
                messages: [
                    {
                        type: "text",
                        content: "Got another question in mind? 💡\n",
                    },
                ],
            },
        },
        {
            id: 69772555,
            type: "disableTextInput",
            payload: {},
        },
        {
            id: 69772556,
            type: "disableTextInput",
            payload: {},
        },
        {
            id: 69772557,
            type: "disableTextInput",
            payload: {},
        },
        {
            id: 69772558,
            type: "sendChatMessagesToVisitor",
            payload: {
                messages: [
                    {
                        type: "text",
                        content: "Got another question in mind? 💡",
                    },
                ],
            },
        },
        {
            id: 69772559,
            type: "decisionButtons",
            payload: {
                text: "What would you like to do next? 👇",
                buttons: [
                    {
                        id: 3,
                        type: "action",
                        title: "Explore more questions 💬",
                        payload: "https://wide-wings.ae/contact-us/",
                        destination: 69768557,
                    },
                    // { "id": 4, "type": "action", "title": "Book a meeting 📅", "destination": null },
                    {
                        id: 5,
                        type: "action",
                        title: "Main menu 🔙 ",
                        destination: 69772556,
                    },
                ],
            },
        },
        {
            id: 69772560,
            type: "disableTextInput",
            payload: {},
        },
    ],
    edges: [
        { from: 69768555, to: 69772557 }, // Start -> disableInput
        { from: 69772557, to: 69772552 }, // disableInput -> Welcome Decision
        { from: 69772552, to: 69768558 }, // Button 1 -> disableInput -> decision (Common Questions)

        // Paths from Decision 69768557 (Common Questions)
        { from: 69768557, to: 69768570 }, // 1: Our Services -> Messages
        { from: 69768557, to: 69768571 }, // 2: How to Start -> Messages
        { from: 69768557, to: 69768572 }, // 3: Businesses sizes -> Messages
        { from: 69768557, to: 69772548 }, // 4: Social Media -> Messages
        { from: 69768557, to: 69772549 }, // 5: Pricing -> Messages
        { from: 69768557, to: 69772550 }, // 6: Other -> Messages

        // Loops back / Follow ups
        { from: 69768558, to: 69768557 }, // Passthrough

        // Messages -> Next steps
        { from: 69768570, to: 69772551 },
        { from: 69768571, to: 69772551 },
        { from: 69768572, to: 69772551 },
        { from: 69772548, to: 69772551 },
        { from: 69772549, to: 69772551 },
        { from: 69772550, to: 69772559 }, // -> Decision Buttons (Explore More)

        { from: 69772551, to: 69772559 }, // -> Decision Buttons (Explore More)

        // Main Menu loops check
        { from: 69772556, to: 69772552 }, // Main menu -> Welcome Decision

        // Book meeting / Contact paths from Welcome
        { from: 69772552, to: 69772554 }, // URL actions often don't traverse, but if they do:
        { from: 69772552, to: 69772558 },

        { from: 69772554, to: 69772555 },
        { from: 69772558, to: 69772560 },

        { from: 69772555, to: 69772553 }, // -> Decision
        { from: 69772560, to: 69772559 }, // -> Decision

        // Decision 69772553
        { from: 69772553, to: 69768557 }, // "See more questions" -> Common Questions
        { from: 69772553, to: 69772556 }, // "Main Menu" -> Main Menu Node

        // Decision 69772559
        { from: 69772559, to: 69768557 }, // "Explore more" -> Common Questions
        { from: 69772559, to: 69772556 }, // "Main Menu" -> Main Menu Node
    ],
};

// Simplified map for easy traversal
export const NODE_MAP = new Map(CHATFLOW.nodes.map((n) => [n.id, n]));
export const EDGE_MAP = CHATFLOW.edges.reduce(
    (acc, edge) => {
        if (!acc[edge.from]) acc[edge.from] = [];
        acc[edge.from].push(edge.to);
        return acc;
    },
    {} as Record<number, number[]>,
);
