import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions | Wide Wings Media",
    description:
        "Read the Terms & Conditions for Wide Wings Media, LLC. Understand our usage policies, user rights, and legal agreements for our digital marketing services.",
    alternates: {
        canonical: "/terms-conditions",
    },
    robots: {
        index: false,
        follow: true,
    },
};

export default function TermsConditionsPage() {
    return (
        <main className="pt-12 md:pt-32 pb-24 min-h-screen bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-hero font-bold text-[#2E2E62] mb-12 text-balance leading-tight">
                        Terms & Conditions
                    </h1>

                    <div className="bg-gray-50 rounded-2xl p-6 mb-12 border border-gray-100">
                        <h2 className="text-xl font-bold text-[#2E2E62] mb-4 font-hero">
                            Table of Contents
                        </h2>
                        <nav className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                            <a
                                href="#general-terms"
                                className="text-gray-600 hover:text-[#2E2E62] hover:underline transition-colors"
                            >
                                General Terms
                            </a>
                            <a
                                href="#license"
                                className="text-gray-600 hover:text-[#2E2E62] hover:underline transition-colors"
                            >
                                License
                            </a>
                            <a
                                href="#definitions"
                                className="text-gray-600 hover:text-[#2E2E62] hover:underline transition-colors"
                            >
                                Definitions and key terms
                            </a>
                            <a
                                href="#restrictions"
                                className="text-gray-600 hover:text-[#2E2E62] hover:underline transition-colors"
                            >
                                Restrictions
                            </a>
                            <a
                                href="#payment"
                                className="text-gray-600 hover:text-[#2E2E62] hover:underline transition-colors"
                            >
                                Payment
                            </a>
                            <a
                                href="#return-and-refund"
                                className="text-gray-600 hover:text-[#2E2E62] hover:underline transition-colors"
                            >
                                Return and Refund Policy
                            </a>
                            <a
                                href="#suggestions"
                                className="text-gray-600 hover:text-[#2E2E62] hover:underline transition-colors"
                            >
                                Your Suggestions
                            </a>
                            <a
                                href="#consent"
                                className="text-gray-600 hover:text-[#2E2E62] hover:underline transition-colors"
                            >
                                Your Consent
                            </a>
                            <a
                                href="#links"
                                className="text-gray-600 hover:text-[#2E2E62] hover:underline transition-colors"
                            >
                                Links to Other Websites
                            </a>
                            <a
                                href="#cookies"
                                className="text-gray-600 hover:text-[#2E2E62] hover:underline transition-colors"
                            >
                                Cookies
                            </a>
                            <a
                                href="#changes-terms"
                                className="text-gray-600 hover:text-[#2E2E62] hover:underline transition-colors"
                            >
                                Changes To Our Terms
                            </a>
                            <a
                                href="#modifications-website"
                                className="text-gray-600 hover:text-[#2E2E62] hover:underline transition-colors"
                            >
                                Modifications to Our website
                            </a>
                            <a
                                href="#updates-website"
                                className="text-gray-600 hover:text-[#2E2E62] hover:underline transition-colors"
                            >
                                Updates to Our website
                            </a>
                            <a
                                href="#third-party-services"
                                className="text-gray-600 hover:text-[#2E2E62] hover:underline transition-colors"
                            >
                                Third-Party Services
                            </a>
                            <a
                                href="#termination"
                                className="text-gray-600 hover:text-[#2E2E62] hover:underline transition-colors"
                            >
                                Term and Termination
                            </a>
                            <a
                                href="#copyright"
                                className="text-gray-600 hover:text-[#2E2E62] hover:underline transition-colors"
                            >
                                Copyright Infringement Notice
                            </a>
                            <a
                                href="#indemnification"
                                className="text-gray-600 hover:text-[#2E2E62] hover:underline transition-colors"
                            >
                                Indemnification
                            </a>
                            <a
                                href="#warranties"
                                className="text-gray-600 hover:text-[#2E2E62] hover:underline transition-colors"
                            >
                                No Warranties
                            </a>
                            <a
                                href="#limitation-liability"
                                className="text-gray-600 hover:text-[#2E2E62] hover:underline transition-colors"
                            >
                                Limitation of Liability
                            </a>
                            <a
                                href="#severability"
                                className="text-gray-600 hover:text-[#2E2E62] hover:underline transition-colors"
                            >
                                Severability
                            </a>
                            <a
                                href="#waiver"
                                className="text-gray-600 hover:text-[#2E2E62] hover:underline transition-colors"
                            >
                                Waiver
                            </a>
                            <a
                                href="#amendments"
                                className="text-gray-600 hover:text-[#2E2E62] hover:underline transition-colors"
                            >
                                Amendments
                            </a>
                            <a
                                href="#entire-agreement"
                                className="text-gray-600 hover:text-[#2E2E62] hover:underline transition-colors"
                            >
                                Entire Agreement
                            </a>
                            <a
                                href="#updates-terms"
                                className="text-gray-600 hover:text-[#2E2E62] hover:underline transition-colors"
                            >
                                Updates to Our Terms
                            </a>
                            <a
                                href="#intellectual-property"
                                className="text-gray-600 hover:text-[#2E2E62] hover:underline transition-colors"
                            >
                                Intellectual Property
                            </a>
                            <a
                                href="#agreement-arbitrate"
                                className="text-gray-600 hover:text-[#2E2E62] hover:underline transition-colors"
                            >
                                Agreement to Arbitrate
                            </a>
                            <a
                                href="#notice-dispute"
                                className="text-gray-600 hover:text-[#2E2E62] hover:underline transition-colors"
                            >
                                Notice of Dispute
                            </a>
                            <a
                                href="#binding-arbitration"
                                className="text-gray-600 hover:text-[#2E2E62] hover:underline transition-colors"
                            >
                                Binding Arbitration
                            </a>
                            <a
                                href="#submissions-privacy"
                                className="text-gray-600 hover:text-[#2E2E62] hover:underline transition-colors"
                            >
                                Submissions and Privacy
                            </a>
                            <a
                                href="#promotions"
                                className="text-gray-600 hover:text-[#2E2E62] hover:underline transition-colors"
                            >
                                Promotions
                            </a>
                            <a
                                href="#typographical-errors"
                                className="text-gray-600 hover:text-[#2E2E62] hover:underline transition-colors"
                            >
                                Typographical Errors
                            </a>
                            <a
                                href="#miscellaneous"
                                className="text-gray-600 hover:text-[#2E2E62] hover:underline transition-colors"
                            >
                                Miscellaneous
                            </a>
                            <a
                                href="#disclaimer"
                                className="text-gray-600 hover:text-[#2E2E62] hover:underline transition-colors"
                            >
                                Disclaimer
                            </a>
                            <a
                                href="#contact-us"
                                className="text-gray-600 hover:text-[#2E2E62] hover:underline transition-colors"
                            >
                                Contact Us
                            </a>
                        </nav>
                    </div>

                    <div className="wp-content prose-lg mx-auto text-gray-700">
                        {/* General Terms */}
                        <h2 id="general-terms" className="scroll-mt-28">
                            General Terms
                        </h2>
                        <p>
                            By accessing and placing an order with Wide Wings
                            Media, LLC, you confirm that you are in agreement
                            with and bound by the terms of service contained in
                            the Terms & Conditions outlined below. These terms
                            apply to the entire website and any email or other
                            type of communication between you and Wide Wings
                            Media, LLC.
                        </p>
                        <p>
                            Under no circumstances shall Wide Wings Media, LLC
                            team be liable for any direct, indirect, special,
                            incidental or consequential damages, including, but
                            not limited to, loss of data or profit, arising out
                            of the use, or the inability to use, the materials
                            on this site, even if Wide Wings Media, LLC team or
                            an authorized representative has been advised of the
                            possibility of such damages. If your use of
                            materials from this site results in the need for
                            servicing, repair or correction of equipment or
                            data, you assume any costs thereof.
                        </p>
                        <p>
                            Wide Wings Media, LLC will not be responsible for
                            any outcome that may occur during the course of
                            usage of our resources. We reserve the rights to
                            change prices and revise the resources usage policy
                            in any moment.
                        </p>

                        {/* License */}
                        <h2 id="license" className="scroll-mt-28">
                            License
                        </h2>
                        <p>
                            Wide Wings Media, LLC grants you a revocable,
                            non-exclusive, non-transferable, limited license to
                            download, install and use the website strictly in
                            accordance with the terms of this Agreement.
                        </p>
                        <p>
                            These Terms & Conditions are a contract between you
                            and Wide Wings Media, LLC (referred to in these
                            Terms & Conditions as “Wide Wings Media, LLC”, “us”,
                            “we” or “our”), the provider of the Wide Wings
                            Media, LLC website and the services accessible from
                            the Wide Wings Media, LLC website (which are
                            collectively referred to in these Terms & Conditions
                            as the “Wide Wings Media, LLC Service”).
                        </p>
                        <p>
                            You are agreeing to be bound by these Terms &
                            Conditions. If you do not agree to these Terms &
                            Conditions, please do not use the Wide Wings Media,
                            LLC Service. In these Terms & Conditions, “you”
                            refers both to you as an individual and to the
                            entity you represent. If you violate any of these
                            Terms & Conditions, we reserve the right to cancel
                            your account or block access to your account without
                            notice.
                        </p>

                        {/* Definitions */}
                        <h2 id="definitions" className="scroll-mt-28">
                            Definitions and key terms
                        </h2>
                        <p>
                            To help explain things as clearly as possible in
                            this Terms & Conditions, every time any of these
                            terms are referenced, are strictly defined as:
                        </p>
                        <ul className="list-none pl-0 space-y-4">
                            <li>
                                <strong>Cookie:</strong> small amount of data
                                generated by a website and saved by your web
                                browser. It is used to identify your browser,
                                provide analytics, remember information about
                                you such as your language preference or login
                                information.
                            </li>
                            <li>
                                <strong>Company:</strong> when this terms
                                mention “Company,” “we,” “us,” or “our,” it
                                refers to Wide Wings Media, LLC, (Dubai, Al Quoz
                                Industrial Area 3, Goshi Warehouse City,
                                Warehouse #47.), that is responsible for your
                                information under this Terms & Conditions.
                            </li>
                            <li>
                                <strong>Country:</strong> where Wide Wings
                                Media, LLC or the owners/founders of Wide Wings
                                Media, LLC are based, in this case is United
                                Arab Emirates
                            </li>
                            <li>
                                <strong>Device:</strong> any internet connected
                                device such as a phone, tablet, computer or any
                                other device that can be used to visit Wide
                                Wings Media, LLC and use the services.
                            </li>
                            <li>
                                <strong>Service:</strong> refers to the service
                                provided by Wide Wings Media, LLC as described
                                in the relative terms (if available) and on this
                                platform.
                            </li>
                            <li>
                                <strong>Third-party service:</strong> refers to
                                advertisers, contest sponsors, promotional and
                                marketing partners, and others who provide our
                                content or whose products or services we think
                                may interest you.
                            </li>
                            <li>
                                <strong>Website:</strong> Wide Wings Media,
                                LLC’s site, which can be accessed via this URL:{" "}
                                <a href="https://wordpress-1222412-6158018.cloudwaysapps.com/">
                                    https://wordpress-1222412-6158018.cloudwaysapps.com/
                                </a>
                            </li>
                            <li>
                                <strong>You:</strong> a person or entity that is
                                registered with Wide Wings Media, LLC to use the
                                Services.
                            </li>
                        </ul>

                        {/* Restrictions */}
                        <h2 id="restrictions" className="scroll-mt-28">
                            Restrictions
                        </h2>
                        <p>
                            You agree not to, and you will not permit others to:
                        </p>
                        <ul>
                            <li>
                                License, sell, rent, lease, assign, distribute,
                                transmit, host, outsource, disclose or otherwise
                                commercially exploit the website or make the
                                platform available to any third party.
                            </li>
                            <li>
                                Modify, make derivative works of, disassemble,
                                decrypt, reverse compile or reverse engineer any
                                part of the website.
                            </li>
                            <li>
                                Remove, alter or obscure any proprietary notice
                                (including any notice of copyright or trademark)
                                of Wide Wings Media, LLC or its affiliates,
                                partners, suppliers or the licensors of the
                                website.
                            </li>
                        </ul>

                        {/* Payment */}
                        <h2 id="payment" className="scroll-mt-28">
                            Payment
                        </h2>
                        <p>
                            If you pay for any of our one-time payment plans,
                            you agree to pay all fees or charges to your account
                            for the Service in accordance with the fees, charges
                            and billing terms in effect at the time that each
                            fee or charge is due and payable. Your Payment
                            Provider agreement governs your use of the
                            designated credit card account, and you must refer
                            to that agreement and not these Terms to determine
                            your rights and liabilities with respect to your
                            Payment Provider. By providing Wide Wings Media, LLC
                            with your credit card number and associated payment
                            information, you agree that Wide Wings Media, LLC is
                            authorized to verify information immediately, and
                            subsequently invoice your account for all fees and
                            charges due and payable to Wide Wings Media, LLC
                            hereunder and that no additional notice or consent
                            is required. You agree to immediately notify Wide
                            Wings Media, LLC of any change in your billing
                            address or the credit card used for payment
                            hereunder. Wide Wings Media, LLC reserves the right
                            at any time to change its prices and billing
                            methods, either immediately upon posting on our Site
                            or by e-mail delivery to your organization’s
                            administrator(s).
                        </p>
                        <p>
                            Any attorney fees, court costs, or other costs
                            incurred in collection of delinquent undisputed
                            amounts shall be the responsibility of and paid for
                            by you.
                        </p>
                        <p>
                            No contract will exist between you and Wide Wings
                            Media, LLC for the Service until Wide Wings Media,
                            LLC accepts your order by a confirmatory e-mail,
                            SMS/MMS message, or other appropriate means of
                            communication.
                        </p>
                        <p>
                            You are responsible for any third-party fees that
                            you may incur when using the Service.
                        </p>

                        {/* Return and Refund Policy */}
                        <h2 id="return-and-refund" className="scroll-mt-28">
                            Return and Refund Policy
                        </h2>
                        <p>
                            Thanks for shopping at Wide Wings Media, LLC. We
                            appreciate the fact that you like to buy the stuff
                            we build. We also want to make sure you have a
                            rewarding experience while you’re exploring,
                            evaluating, and purchasing our products.
                        </p>
                        <p>
                            As with any shopping experience, there are terms and
                            conditions that apply to transactions at Wide Wings
                            Media, LLC. We’ll be as brief as our attorneys will
                            allow. The main thing to remember is that by placing
                            an order or making a purchase at Wide Wings Media,
                            LLC, you agree to the terms along with Wide Wings
                            Media, LLC’s Privacy Policy.
                        </p>
                        <p>
                            If, for any reason, You are not completely satisfied
                            with any good or service that we provide, don’t
                            hesitate to contact us and we will discuss any of
                            the issues you are going through with our product.
                        </p>

                        {/* Your Suggestions */}
                        <h2 id="suggestions" className="scroll-mt-28">
                            Your Suggestions
                        </h2>
                        <p>
                            Any feedback, comments, ideas, improvements or
                            suggestions (collectively, “Suggestions”) provided
                            by you to Wide Wings Media, LLC with respect to the
                            website shall remain the sole and exclusive property
                            of Wide Wings Media, LLC.
                        </p>
                        <p>
                            Wide Wings Media, LLC shall be free to use, copy,
                            modify, publish, or redistribute the Suggestions for
                            any purpose and in any way without any credit or any
                            compensation to you.
                        </p>

                        {/* Your Consent */}
                        <h2 id="consent" className="scroll-mt-28">
                            Your Consent
                        </h2>
                        <p>
                            We’ve updated our Terms & Conditions to provide you
                            with complete transparency into what is being set
                            when you visit our site and how it’s being used. By
                            using our website, registering an account, or making
                            a purchase, you hereby consent to our Terms &
                            Conditions.
                        </p>

                        {/* Links to Other Websites */}
                        <h2 id="links" className="scroll-mt-28">
                            Links to Other Websites
                        </h2>
                        <p>
                            This Terms & Conditions applies only to the
                            Services. The Services may contain links to other
                            websites not operated or controlled by Wide Wings
                            Media, LLC. We are not responsible for the content,
                            accuracy or opinions expressed in such websites, and
                            such websites are not investigated, monitored or
                            checked for accuracy or completeness by us. Please
                            remember that when you use a link to go from the
                            Services to another website, our Terms & Conditions
                            are no longer in effect. Your browsing and
                            interaction on any other website, including those
                            that have a link on our platform, is subject to that
                            website’s own rules and policies. Such third parties
                            may use their own cookies or other methods to
                            collect information about you.
                        </p>

                        {/* Cookies */}
                        <h2 id="cookies" className="scroll-mt-28">
                            Cookies
                        </h2>
                        <p>
                            Wide Wings Media, LLC uses “Cookies” to identify the
                            areas of our website that you have visited. A Cookie
                            is a small piece of data stored on your computer or
                            mobile device by your web browser. We use Cookies to
                            enhance the performance and functionality of our
                            website but are non-essential to their use. However,
                            without these cookies, certain functionality like
                            videos may become unavailable or you would be
                            required to enter your login details every time you
                            visit the website as we would not be able to
                            remember that you had logged in previously. Most web
                            browsers can be set to disable the use of Cookies.
                            However, if you disable Cookies, you may not be able
                            to access functionality on our website correctly or
                            at all. We never place Personally Identifiable
                            Information in Cookies.
                        </p>

                        {/* Changes To Our Terms & Conditions */}
                        <h2 id="changes-terms" className="scroll-mt-28">
                            Changes To Our Terms & Conditions
                        </h2>
                        <p>
                            You acknowledge and agree that Wide Wings Media, LLC
                            may stop (permanently or temporarily) providing the
                            Service (or any features within the Service) to you
                            or to users generally at Wide Wings Media, LLC’s
                            sole discretion, without prior notice to you. You
                            may stop using the Service at any time. You do not
                            need to specifically inform Wide Wings Media, LLC
                            when you stop using the Service. You acknowledge and
                            agree that if Wide Wings Media, LLC disables access
                            to your account, you may be prevented from accessing
                            the Service, your account details or any files or
                            other materials which is contained in your account.
                        </p>
                        <p>
                            If we decide to change our Terms & Conditions, we
                            will post those changes on this page, and/or update
                            the Terms & Conditions modification date below.
                        </p>

                        {/* Modifications to Our website */}
                        <h2 id="modifications-website" className="scroll-mt-28">
                            Modifications to Our website
                        </h2>
                        <p>
                            Wide Wings Media, LLC reserves the right to modify,
                            suspend or discontinue, temporarily or permanently,
                            the website or any service to which it connects,
                            with or without notice and without liability to you.
                        </p>

                        {/* Updates to Our website */}
                        <h2 id="updates-website" className="scroll-mt-28">
                            Updates to Our website
                        </h2>
                        <p>
                            Wide Wings Media, LLC may from time to time provide
                            enhancements or improvements to the features/
                            functionality of the website, which may include
                            patches, bug fixes, updates, upgrades and other
                            modifications (“Updates”).
                        </p>
                        <p>
                            Updates may modify or delete certain features and/or
                            functionalities of the website. You agree that Wide
                            Wings Media, LLC has no obligation to (i) provide
                            any Updates, or (ii) continue to provide or enable
                            any particular features and/or functionalities of
                            the website to you.
                        </p>
                        <p>
                            You further agree that all Updates will be (i)
                            deemed to constitute an integral part of the
                            website, and (ii) subject to the terms and
                            conditions of this Agreement.
                        </p>

                        {/* Third-Party Services */}
                        <h2 id="third-party-services" className="scroll-mt-28">
                            Third-Party Services
                        </h2>
                        <p>
                            We may display, include or make available
                            third-party content (including data, information,
                            applications and other products services) or provide
                            links to third-party websites or services (“Third-
                            Party Services”).
                        </p>
                        <p>
                            You acknowledge and agree that Wide Wings Media, LLC
                            shall not be responsible for any Third-Party
                            Services, including their accuracy, completeness,
                            timeliness, validity, copyright compliance,
                            legality, decency, quality or any other aspect
                            thereof. Wide Wings Media, LLC does not assume and
                            shall not have any liability or responsibility to
                            you or any other person or entity for any
                            Third-Party Services.
                        </p>
                        <p>
                            Third-Party Services and links thereto are provided
                            solely as a convenience to you and you access and
                            use them entirely at your own risk and subject to
                            such third parties’ terms and conditions.
                        </p>

                        {/* Term and Termination */}
                        <h2 id="termination" className="scroll-mt-28">
                            Term and Termination
                        </h2>
                        <p>
                            This Agreement shall remain in effect until
                            terminated by you or Wide Wings Media, LLC.
                        </p>
                        <p>
                            Wide Wings Media, LLC may, in its sole discretion,
                            at any time and for any or no reason, suspend or
                            terminate this Agreement with or without prior
                            notice.
                        </p>
                        <p>
                            This Agreement will terminate immediately, without
                            prior notice from Wide Wings Media, LLC, in the
                            event that you fail to comply with any provision of
                            this Agreement. You may also terminate this
                            Agreement by deleting the website and all copies
                            thereof from your computer.
                        </p>
                        <p>
                            Upon termination of this Agreement, you shall cease
                            all use of the website and delete all copies of the
                            website from your computer.
                        </p>
                        <p>
                            Termination of this Agreement will not limit any of
                            Wide Wings Media, LLC’s rights or remedies at law or
                            in equity in case of breach by you (during the term
                            of this Agreement) of any of your obligations under
                            the present Agreement.
                        </p>

                        {/* Copyright Infringement Notice */}
                        <h2 id="copyright" className="scroll-mt-28">
                            Copyright Infringement Notice
                        </h2>
                        <p>
                            If you are a copyright owner or such owner’s agent
                            and believe any material on our website constitutes
                            an infringement on your copyright, please contact us
                            setting forth the following information: (a) a
                            physical or electronic signature of the copyright
                            owner or a person authorized to act on his behalf;
                            (b) identification of the material that is claimed
                            to be infringing; (c) your contact information,
                            including your address, telephone number, and an
                            email; (d) a statement by you that you have a good
                            faith belief that use of the material is not
                            authorized by the copyright owners; and (e) the a
                            statement that the information in the notification
                            is accurate, and, under penalty of perjury you are
                            authorized to act on behalf of the owner.
                        </p>

                        {/* Indemnification */}
                        <h2 id="indemnification" className="scroll-mt-28">
                            Indemnification
                        </h2>
                        <p>
                            You agree to indemnify and hold Wide Wings Media,
                            LLC and its parents, subsidiaries, affiliates,
                            officers, employees, agents, partners and licensors
                            (if any) harmless from any claim or demand,
                            including reasonable attorneys’ fees, due to or
                            arising out of your: (a) use of the website; (b)
                            violation of this Agreement or any law or
                            regulation; or (c) violation of any right of a third
                            party.
                        </p>

                        {/* No Warranties */}
                        <h2 id="warranties" className="scroll-mt-28">
                            No Warranties
                        </h2>
                        <p>
                            The website is provided to you “AS IS” and “AS
                            AVAILABLE” and with all faults and defects without
                            warranty of any kind. To the maximum extent
                            permitted under applicable law, Wide Wings Media,
                            LLC, on its own behalf and on behalf of its
                            affiliates and its and their respective licensors
                            and service providers, expressly disclaims all
                            warranties, whether express, implied, statutory or
                            otherwise, with respect to the website, including
                            all implied warranties of merchantability, fitness
                            for a particular purpose, title and
                            non-infringement, and warranties that may arise out
                            of course of dealing, course of performance, usage
                            or trade practice. Without limitation to the
                            foregoing, Wide Wings Media, LLC provides no
                            warranty or undertaking, and makes no representation
                            of any kind that the website will meet your
                            requirements, achieve any intended results, be
                            compatible or work with any other software,
                            websites, systems or services, operate without
                            interruption, meet any performance or reliability
                            standards or be error free or that any errors or
                            defects can or will be corrected.
                        </p>
                        <p>
                            Without limiting the foregoing, neither Wide Wings
                            Media, LLC nor any Wide Wings Media, LLC’s provider
                            makes any representation or warranty of any kind,
                            express or implied: (i) as to the operation or
                            availability of the website, or the information,
                            content, and materials or products included thereon;
                            (ii) that the website will be uninterrupted or
                            error-free; (iii) as to the accuracy, reliability,
                            or currency of any information or content provided
                            through the website; or (iv) that the website, its
                            servers, the content, or e-mails sent from or on
                            behalf of Wide Wings Media, LLC are free of viruses,
                            scripts, trojan horses, worms, malware, timebombs or
                            other harmful components.
                        </p>
                        <p>
                            Some jurisdictions do not allow the exclusion of or
                            limitations on implied warranties or the limitations
                            on the applicable statutory rights of a consumer, so
                            some or all of the above exclusions and limitations
                            may not apply to you.
                        </p>

                        {/* Limitation of Liability */}
                        <h2 id="limitation-liability" className="scroll-mt-28">
                            Limitation of Liability
                        </h2>
                        <p>
                            Notwithstanding any damages that you might incur,
                            the entire liability of Wide Wings Media, LLC and
                            any of its suppliers under any provision of this
                            Agreement and your exclusive remedy for all of the
                            foregoing shall be limited to the amount actually
                            paid by you for the website.
                        </p>
                        <p>
                            To the maximum extent permitted by applicable law,
                            in no event shall Wide Wings Media, LLC or its
                            suppliers be liable for any special, incidental,
                            indirect, or consequential damages whatsoever
                            (including, but not limited to, damages for loss of
                            profits, for loss of data or other information, for
                            business interruption, for personal injury, for loss
                            of privacy arising out of or in any way related to
                            the use of or inability to use the website,
                            third-party software and/or third-party hardware
                            used with the website, or otherwise in connection
                            with any provision of this Agreement), even if Wide
                            Wings Media, LLC or any supplier has been advised of
                            the possibility of such damages and even if the
                            remedy fails of its essential purpose.
                        </p>
                        <p>
                            Some states/jurisdictions do not allow the exclusion
                            or limitation of incidental or consequential
                            damages, so the above limitation or exclusion may
                            not apply to you.
                        </p>

                        {/* Severability */}
                        <h2 id="severability" className="scroll-mt-28">
                            Severability
                        </h2>
                        <p>
                            If any provision of this Agreement is held to be
                            unenforceable or invalid, such provision will be
                            changed and interpreted to accomplish the objectives
                            of such provision to the greatest extent possible
                            under applicable law and the remaining provisions
                            will continue in full force and effect.
                        </p>
                        <p>
                            This Agreement, together with the Privacy Policy and
                            any other legal notices published by Wide Wings
                            Media, LLC on the Services, shall constitute the
                            entire agreement between you and Wide Wings Media,
                            LLC concerning the Services. If any provision of
                            this Agreement is deemed invalid by a court of
                            competent jurisdiction, the invalidity of such
                            provision shall not affect the validity of the
                            remaining provisions of this Agreement, which shall
                            remain in full force and effect. No waiver of any
                            term of this Agreement shall be deemed a further or
                            continuing waiver of such term or any other term,
                            and Wide Wings Media, LLC’s failure to assert any
                            right or provision under this Agreement shall not
                            constitute a waiver of such right or provision. YOU
                            AND Wide Wings Media, LLC AGREE THAT ANY CAUSE OF
                            ACTION ARISING OUT OF OR RELATED TO THE SERVICES
                            MUST COMMENCE WITHIN ONE (1) YEAR AFTER THE CAUSE OF
                            ACTION ACCRUES. OTHERWISE, SUCH CAUSE OF ACTION IS
                            PERMANENTLY BARRED.
                        </p>

                        {/* Waiver */}
                        <h2 id="waiver" className="scroll-mt-28">
                            Waiver
                        </h2>
                        <p>
                            Except as provided herein, the failure to exercise a
                            right or to require performance of an obligation
                            under this Agreement shall not effect a party’s
                            ability to exercise such right or require such
                            performance at any time thereafter nor shall be the
                            waiver of a breach constitute waiver of any
                            subsequent breach.
                        </p>
                        <p>
                            No failure to exercise, and no delay in exercising,
                            on the part of either party, any right or any power
                            under this Agreement shall operate as a waiver of
                            that right or power. Nor shall any single or partial
                            exercise of any right or power under this Agreement
                            preclude further exercise of that or any other right
                            granted herein. In the event of a conflict between
                            this Agreement and any applicable purchase or other
                            terms, the terms of this Agreement shall govern.
                        </p>

                        {/* Amendments to this Agreement */}
                        <h2 id="amendments" className="scroll-mt-28">
                            Amendments to this Agreement
                        </h2>
                        <p>
                            Wide Wings Media, LLC reserves the right, at its
                            sole discretion, to modify or replace this Agreement
                            at any time. If a revision is material we will
                            provide at least 30 days’ notice prior to any new
                            terms taking effect. What constitutes a material
                            change will be determined at our sole discretion.
                        </p>
                        <p>
                            By continuing to access or use our website after any
                            revisions become effective, you agree to be bound by
                            the revised terms. If you do not agree to the new
                            terms, you are no longer authorized to use Wide
                            Wings Media, LLC.
                        </p>

                        {/* Entire Agreement */}
                        <h2 id="entire-agreement" className="scroll-mt-28">
                            Entire Agreement
                        </h2>
                        <p>
                            The Agreement constitutes the entire agreement
                            between you and Wide Wings Media, LLC regarding your
                            use of the website and supersedes all prior and
                            contemporaneous written or oral agreements between
                            you and Wide Wings Media, LLC.
                        </p>
                        <p>
                            You may be subject to additional terms and
                            conditions that apply when you use or purchase other
                            Wide Wings Media, LLC’s services, which Wide Wings
                            Media, LLC will provide to you at the time of such
                            use or purchase.
                        </p>

                        {/* Updates to Our Terms */}
                        <h2 id="updates-terms" className="scroll-mt-28">
                            Updates to Our Terms
                        </h2>
                        <p>
                            We may change our Service and policies, and we may
                            need to make changes to these Terms so that they
                            accurately reflect our Service and policies. Unless
                            otherwise required by law, we will notify you (for
                            example, through our Service) before we make changes
                            to these Terms and give you an opportunity to review
                            them before they go into effect. Then, if you
                            continue to use the Service, you will be bound by
                            the updated Terms. If you do not want to agree to
                            these or any updated Terms, you can delete your
                            account.
                        </p>

                        {/* Intellectual Property */}
                        <h2 id="intellectual-property" className="scroll-mt-28">
                            Intellectual Property
                        </h2>
                        <p>
                            The website and its entire contents, features and
                            functionality (including but not limited to all
                            information, software, text, displays, images, video
                            and audio, and the design, selection and arrangement
                            thereof), are owned by Wide Wings Media, LLC, its
                            licensors or other providers of such material and
                            are protected by United Arab Emirates and
                            international copyright, trademark, patent, trade
                            secret and other intellectual property or
                            proprietary rights laws. The material may not be
                            copied, modified, reproduced, downloaded or
                            distributed in any way, in whole or in part, without
                            the express prior written permission of Wide Wings
                            Media, LLC, unless and except as is expressly
                            provided in these Terms & Conditions. Any
                            unauthorized use of the material is prohibited.
                        </p>

                        {/* Agreement to Arbitrate */}
                        <h2 id="agreement-arbitrate" className="scroll-mt-28">
                            Agreement to Arbitrate
                        </h2>
                        <p>
                            This section applies to any dispute EXCEPT IT
                            DOESN’T INCLUDE A DISPUTE RELATING TO CLAIMS FOR
                            INJUNCTIVE OR EQUITABLE RELIEF REGARDING THE
                            ENFORCEMENT OR VALIDITY OF YOUR OR Wide Wings Media,
                            LLC’s INTELLECTUAL PROPERTY RIGHTS. The term
                            “dispute” means any dispute, action, or other
                            controversy between you and Wide Wings Media, LLC
                            concerning the Services or this agreement, whether
                            in contract, warranty, tort, statute, regulation,
                            ordinance, or any other legal or equitable basis.
                            “Dispute” will be given the broadest possible
                            meaning allowable under law.
                        </p>

                        {/* Notice of Dispute */}
                        <h2 id="notice-dispute" className="scroll-mt-28">
                            Notice of Dispute
                        </h2>
                        <p>
                            In the event of a dispute, you or Wide Wings Media,
                            LLC must give the other a Notice of Dispute, which
                            is a written statement that sets forth the name,
                            address, and contact information of the party giving
                            it, the facts giving rise to the dispute, and the
                            relief requested. You must send any Notice of
                            Dispute via email to:{" "}
                            <a href="mailto:info@wordpress-1222412-6158018.cloudwaysapps.com">
                                info@wordpress-1222412-6158018.cloudwaysapps.com
                            </a>
                            . Wide Wings Media, LLC will send any Notice of
                            Dispute to you by mail to your address if we have
                            it, or otherwise to your email address. You and Wide
                            Wings Media, LLC will attempt to resolve any dispute
                            through informal negotiation within sixty (60) days
                            from the date the Notice of Dispute is sent. After
                            sixty (60) days, you or Wide Wings Media, LLC may
                            commence arbitration.
                        </p>

                        {/* Binding Arbitration */}
                        <h2 id="binding-arbitration" className="scroll-mt-28">
                            Binding Arbitration
                        </h2>
                        <p>
                            If you and Wide Wings Media, LLC don’t resolve any
                            dispute by informal negotiation, any other effort to
                            resolve the dispute will be conducted exclusively by
                            binding arbitration as described in this section.
                            You are giving up the right to litigate (or
                            participate in as a party or class member) all
                            disputes in court before a judge or jury. The
                            dispute shall be settled by binding arbitration in
                            accordance with the commercial arbitration rules of
                            the American Arbitration Association. Either party
                            may seek any interim or preliminary injunctive
                            relief from any court of competent jurisdiction, as
                            necessary to protect the party’s rights or property
                            pending the completion of arbitration. Any and all
                            legal, accounting, and other costs, fees, and
                            expenses incurred by the prevailing party shall be
                            borne by the non-prevailing party.
                        </p>

                        {/* Submissions and Privacy */}
                        <h2 id="submissions-privacy" className="scroll-mt-28">
                            Submissions and Privacy
                        </h2>
                        <p>
                            In the event that you submit or post any ideas,
                            creative suggestions, designs, photographs,
                            information, advertisements, data or proposals,
                            including ideas for new or improved products,
                            services, features, technologies or promotions, you
                            expressly agree that such submissions will
                            automatically be treated as non-confidential and
                            non-proprietary and will become the sole property of
                            Wide Wings Media, LLC without any compensation or
                            credit to you whatsoever. Wide Wings Media, LLC and
                            its affiliates shall have no obligations with
                            respect to such submissions or posts and may use the
                            ideas contained in such submissions or posts for any
                            purposes in any medium in perpetuity, including, but
                            not limited to, developing, manufacturing, and
                            marketing products and services using such ideas.
                        </p>

                        {/* Promotions */}
                        <h2 id="promotions" className="scroll-mt-28">
                            Promotions
                        </h2>
                        <p>
                            Wide Wings Media, LLC may, from time to time,
                            include contests, promotions, sweepstakes, or other
                            activities (“Promotions”) that require you to submit
                            material or information concerning yourself. Please
                            note that all Promotions may be governed by separate
                            rules that may contain certain eligibility
                            requirements, such as restrictions as to age and
                            geographic location. You are responsible to read all
                            Promotions rules to determine whether or not you are
                            eligible to participate. If you enter any Promotion,
                            you agree to abide by and to comply with all
                            Promotions Rules.
                        </p>
                        <p>
                            Additional terms and conditions may apply to
                            purchases of goods or services on or through the
                            Services, which terms and conditions are made a part
                            of this Agreement by this reference.
                        </p>

                        {/* Typographical Errors */}
                        <h2 id="typographical-errors" className="scroll-mt-28">
                            Typographical Errors
                        </h2>
                        <p>
                            In the event a product and/or service is listed at
                            an incorrect price or with incorrect information due
                            to typographical error, we shall have the right to
                            refuse or cancel any orders placed for the product
                            and/or service listed at the incorrect price. We
                            shall have the right to refuse or cancel any such
                            order whether or not the order has been confirmed
                            and your credit card charged. If your credit card
                            has already been charged for the purchase and your
                            order is canceled, we shall immediately issue a
                            credit to your credit card account or other payment
                            account in the amount of the charge.
                        </p>

                        {/* Miscellaneous */}
                        <h2 id="miscellaneous" className="scroll-mt-28">
                            Miscellaneous
                        </h2>
                        <p>
                            If for any reason a court of competent jurisdiction
                            finds any provision or portion of these Terms &
                            Conditions to be unenforceable, the remainder of
                            these Terms & Conditions will continue in full force
                            and effect. Any waiver of any provision of these
                            Terms & Conditions will be effective only if in
                            writing and signed by an authorized representative
                            of Wide Wings Media, LLC. Wide Wings Media, LLC will
                            be entitled to injunctive or other equitable relief
                            (without the obligations of posting any bond or
                            surety) in the event of any breach or anticipatory
                            breach by you. Wide Wings Media, LLC operates and
                            controls the Wide Wings Media, LLC Service from its
                            offices in United Arab Emirates. The Service is not
                            intended for distribution to or use by any person or
                            entity in any jurisdiction or country where such
                            distribution or use would be contrary to law or
                            regulation. Accordingly, those persons who choose to
                            access the Wide Wings Media, LLC Service from other
                            locations do so on their own initiative and are
                            solely responsible for compliance with local laws,
                            if and to the extent local laws are applicable.
                            These Terms & Conditions (which include and
                            incorporate the Wide Wings Media, LLC Privacy
                            Policy) contains the entire understanding, and
                            supersedes all prior understandings, between you and
                            Wide Wings Media, LLC concerning its subject matter,
                            and cannot be changed or modified by you. The
                            section headings used in this Agreement are for
                            convenience only and will not be given any legal
                            import.
                        </p>

                        {/* Disclaimer */}
                        <h2 id="disclaimer" className="scroll-mt-28">
                            Disclaimer
                        </h2>
                        <p>
                            Wide Wings Media, LLC is not responsible for any
                            content, code or any other imprecision.
                        </p>
                        <p>
                            Wide Wings Media, LLC does not provide warranties or
                            guarantees.
                        </p>
                        <p>
                            In no event shall Wide Wings Media, LLC be liable
                            for any special, direct, indirect, consequential, or
                            incidental damages or any damages whatsoever,
                            whether in an action of contract, negligence or
                            other tort, arising out of or in connection with the
                            use of the Service or the contents of the Service.
                            The Company reserves the right to make additions,
                            deletions, or modifications to the contents on the
                            Service at any time without prior notice.
                        </p>
                        <p>
                            The Wide Wings Media, LLC Service and its contents
                            are provided “as is” and “as available” without any
                            warranty or representations of any kind, whether
                            express or implied. Wide Wings Media, LLC is a
                            distributor and not a publisher of the content
                            supplied by third parties; as such, Wide Wings
                            Media, LLC exercises no editorial control over such
                            content and makes no warranty or representation as
                            to the accuracy, reliability or currency of any
                            information, content, service or merchandise
                            provided through or accessible via the Wide Wings
                            Media, LLC Service. Without limiting the foregoing,
                            Wide Wings Media, LLC specifically disclaims all
                            warranties and representations in any content
                            transmitted on or in connection with the Wide Wings
                            Media, LLC Service or on sites that may appear as
                            links on the Wide Wings Media, LLC Service, or in
                            the products provided as a part of, or otherwise in
                            connection with, the Wide Wings Media, LLC Service,
                            including without limitation any warranties of
                            merchantability, fitness for a particular purpose or
                            non-infringement of third party rights. No oral
                            advice or written information given by Wide Wings
                            Media, LLC or any of its affiliates, employees,
                            officers, directors, agents, or the like will create
                            a warranty. Price and availability information is
                            subject to change without notice. Without limiting
                            the foregoing, Wide Wings Media, LLC does not
                            warrant that the Wide Wings Media, LLC Service will
                            be uninterrupted, uncorrupted, timely, or
                            error-free.
                        </p>

                        {/* Contact Us */}
                        <h2 id="contact-us" className="scroll-mt-28">
                            Contact Us
                        </h2>
                        <p>
                            Don’t hesitate to contact us if you have any
                            questions.
                        </p>
                        <ul className="list-none pl-0 space-y-2">
                            <li>
                                <strong>Via Email: </strong>
                                <a href="mailto:info@wide-wings.ae">
                                    info@wide-wings.ae
                                </a>
                            </li>
                            <li>
                                <strong>Via Phone Number: </strong>
                                <a href="tel:+97143352645">+971 4 335 2645</a>
                            </li>
                            <li>
                                <strong>Via this Link: </strong>
                                <a href="https:/wide-wings.ae/contact-us/">
                                    https://wide-wings.ae/contact-us/
                                </a>
                            </li>
                            <li>
                                <strong>Via this Address: </strong>
                                Wide Wings Media, LLC, Dubai, United Arab
                                Emirates, Al Quoz Industrial Area 3, Goshi
                                Warehouse City, Warehouse #47.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}
