// src/lib/email-templates.ts

export interface ContactEmailData {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
    source?: string;
    template?: string;
}

export const generateContactEmailHtml = (data: ContactEmailData) => {
    const { name, email, phone, service, message, source } = data;
    const brandBlue = "#2e2e62";
    const brandGold = "#D4A017";
    const bodyBg = "#F4F7FB";

    return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Lead - Wide Wings Media</title>
    <style type="text/css">
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
        
        body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
        table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
        img { -ms-interpolation-mode: bicubic; border: 0; outline: none; text-decoration: none; }
        table { border-collapse: collapse !important; }
        body { margin: 0 !important; padding: 0 !important; width: 100% !important; background-color: ${bodyBg}; font-family: 'Montserrat', Helvetica, Arial, sans-serif; }

        .container { max-width: 600px !important; margin: 0 auto !important; width: 100% !important; }
        .data-card { background-color: #ffffff; border: 1px solid #eef1f6; border-radius: 12px; padding: 25px; margin-bottom: 25px; }
        .label { color: ${brandGold}; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 6px; }
        .value { color: ${brandBlue}; font-size: 15px; font-weight: 600; line-height: 1.4; }
        
        @media screen and (max-width: 600px) {
            .content-padding { padding: 30px 20px !important; }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: ${bodyBg};">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
        <tr>
            <td align="center" style="padding: 40px 10px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="container" style="background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 15px 45px rgba(46, 46, 98, 0.08);">
                    <tr>
                        <td align="center" style="background-color: ${brandBlue}; padding: 45px 30px; border-bottom: 4px solid ${brandGold};">
                            <img src="https://wide-wings.ae/Logo.png" alt="Wide Wings Media" width="160" style="display: block; margin-bottom: 25px;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px;">New Inquiry <span style="color: ${brandGold};">Received</span></h1>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding: 45px 45px 30px;" class="content-padding">
                            <p style="margin: 0 0 35px; color: #6e6e8e; font-size: 15px; line-height: 1.6; text-align: center;">
                                You&apos;ve received a fresh lead from the <strong>Wide Wings Media</strong> contact form. Here are the details:
                            </p>

                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td style="padding-bottom: 20px; border-bottom: 1px solid #f0f3f8;">
                                        <div class="label">Full Name</div>
                                        <div class="value">${name}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 20px 0; border-bottom: 1px solid #f0f3f8;">
                                        <div class="label">Email Address</div>
                                        <div class="value">
                                            <a href="mailto:${email}" style="color: ${brandBlue}; text-decoration: none;">${email}</a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 20px 0; border-bottom: 1px solid #f0f3f8;">
                                        <div class="label">Phone Number</div>
                                        <div class="value">${phone}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 20px 0; border-bottom: 1px solid #f0f3f8;">
                                        <div class="label">Service Requested</div>
                                        <div class="value">${service}</div>
                                    </td>
                                </tr>
                                ${source ? `
                                <tr>
                                    <td style="padding: 20px 0;">
                                        <div class="label">Lead Source</div>
                                        <div class="value">${source}</div>
                                    </td>
                                </tr>` : ""}
                            </table>

                            <div style="margin-top: 40px; padding: 30px; background-color: #f9fbff; border-radius: 16px; border: 1px solid #eef1f6;">
                                <div class="label" style="margin-bottom: 15px;">Client&apos;s Message</div>
                                <div style="color: #4a4a6a; font-size: 15px; line-height: 1.8; font-style: italic; position: relative; padding-left: 20px; border-left: 3px solid ${brandGold};">
                                    "${message}"
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td align="center" style="padding: 40px; background-color: #fafbfc; border-top: 1px solid #f0f3f8; text-align: center;">
                            <p style="margin: 0; color: ${brandBlue}; font-size: 14px; font-weight: 700; letter-spacing: 1px;">WIDE WINGS MEDIA, LLC</p>
                            <p style="margin: 5px 0 0; color: #a0a0b0; font-size: 12px;">Digital Marketing Excellence in Dubai</p>
                            
                            <div style="margin-top: 25px; font-size: 10px; color: #c0c0d0; text-transform: uppercase; letter-spacing: 1px;">
                                &copy; ${new Date().getFullYear()} Wide Wings Media. All Rights Reserved.
                            </div>
                        </td>
                    </tr>
                </table>

                <p style="text-align: center; margin-top: 25px; color: #bcc0c8; font-size: 11px;">
                    This is an automated system notification.
                </p>
            </td>
        </tr>
    </table>
</body>
</html>
    `;
};

