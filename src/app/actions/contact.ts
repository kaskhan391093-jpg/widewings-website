"use server";

import { transporter } from "@/lib/nodemailer";
import {
    generateContactEmailHtml,
    ContactEmailData,
} from "@/lib/email-templates";

export async function sendContactEmail(formData: FormData) {
    const honeypot = formData.get("_honey") as string;
    if (honeypot) {
        return { success: false, error: "Spam detected." };
    }

    const data: ContactEmailData = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        service: formData.get("service") as string,
        message: formData.get("message") as string,
        source: (formData.get("source") as string) || "contact-page",
        template: (formData.get("template") as string) || "contact-us-page",
    };

    if (!data.name || !data.email || !data.message) {
        return { success: false, error: "Please fill in all required fields." };
    }

    try {
        const submissionLabel =
            data.template && data.template !== "contact-us-page"
                ? data.template
                : "Contact Us";

        await transporter.sendMail({
            from: '"Wide Wings Media, LLC" <info@wide-wings.ae>',
            to: "Moemen <moemen@wide-wings.ae>",
            cc: "Dr Reem <reem@reemholding.ae>, Mina <mina@wide-wings.ae>, kareem <kareem@wide-wings.ae>, info@wide-wings.ae",
            bcc: "m.shaarawi@wide-wings.ae",
            subject: `Leads From ${submissionLabel} - ${data.name}`,
            html: generateContactEmailHtml(data),
        });

        return { success: true };
    } catch (error) {
        console.error("Failed to send email:", error);
        return {
            success: false,
            error: "Failed to send message. Please try again later.",
        };
    }
}


