import nodemailer from "nodemailer";

export type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  enquiry_type?: string;
  preferred_timeline?: string;
  subject?: string;
  message?: string;
  botcheck?: boolean;
};

export type ContactEnv = {
  SMTP_HOST?: string;
  SMTP_PORT?: string;
  SMTP_SECURE?: string;
  SMTP_USER?: string;
  SMTP_PASS?: string;
  SMTP_FROM_EMAIL?: string;
  SMTP_TO_EMAIL?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildAdminTemplate({
  name,
  email,
  company,
  phone,
  enquiryType,
  timeline,
  subject,
  message,
}: {
  name: string;
  email: string;
  company: string;
  phone: string;
  enquiryType: string;
  timeline: string;
  subject: string;
  message: string;
}) {
  const logoUrl =
    "https://res.cloudinary.com/djnxf36jq/image/upload/v1772000146/arnn_omu8nl.png";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ARNN Group Enquiry</title>
</head>
<body style="margin:0;padding:0;background:#f3efe7;color:#1f2937;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
    New ARNN Group website enquiry from ${name}.
  </div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f3efe7;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:720px;background:#fbf8f2;border:1px solid #ddd3c0;border-radius:24px;overflow:hidden;">
          <tr>
            <td style="padding:28px 32px;background:linear-gradient(135deg,#162033 0%,#26334d 58%,#9f7a39 100%);">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="vertical-align:top;">
                    <img src="${logoUrl}" alt="ARNN Group" style="display:block;height:36px;width:auto;">
                    <p style="margin:18px 0 8px;font:600 12px/1.4 Arial,sans-serif;letter-spacing:0.18em;text-transform:uppercase;color:#d9c7a2;">Website enquiry intake</p>
                    <h1 style="margin:0;font:500 32px/1.15 Georgia,'Times New Roman',serif;color:#f9f5ec;">A new business conversation just came in.</h1>
                  </td>
                  <td align="right" style="vertical-align:top;">
                    <div style="display:inline-block;padding:10px 14px;border:1px solid rgba(255,255,255,0.22);border-radius:999px;font:600 11px/1 Arial,sans-serif;letter-spacing:0.14em;text-transform:uppercase;color:#f4ebda;">
                      Reply to ${email}
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom:24px;">
                <tr>
                  <td style="padding:0 0 18px;">
                    <p style="margin:0;font:600 12px/1.4 Arial,sans-serif;letter-spacing:0.14em;text-transform:uppercase;color:#8b6b33;">Contact summary</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="50%" style="padding:0 12px 16px 0;vertical-align:top;">
                          <div style="padding:18px;border-radius:18px;background:#f4ede1;">
                            <p style="margin:0 0 6px;font:600 11px/1.4 Arial,sans-serif;letter-spacing:0.12em;text-transform:uppercase;color:#7a7f8b;">Full name</p>
                            <p style="margin:0;font:500 18px/1.4 Arial,sans-serif;color:#172033;">${name}</p>
                          </div>
                        </td>
                        <td width="50%" style="padding:0 0 16px 12px;vertical-align:top;">
                          <div style="padding:18px;border-radius:18px;background:#f4ede1;">
                            <p style="margin:0 0 6px;font:600 11px/1.4 Arial,sans-serif;letter-spacing:0.12em;text-transform:uppercase;color:#7a7f8b;">Email address</p>
                            <p style="margin:0;font:500 18px/1.4 Arial,sans-serif;color:#172033;"><a href="mailto:${email}" style="color:#172033;text-decoration:none;">${email}</a></p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td width="50%" style="padding:0 12px 16px 0;vertical-align:top;">
                          <div style="padding:18px;border-radius:18px;background:#f4ede1;">
                            <p style="margin:0 0 6px;font:600 11px/1.4 Arial,sans-serif;letter-spacing:0.12em;text-transform:uppercase;color:#7a7f8b;">Company</p>
                            <p style="margin:0;font:500 18px/1.4 Arial,sans-serif;color:#172033;">${company}</p>
                          </div>
                        </td>
                        <td width="50%" style="padding:0 0 16px 12px;vertical-align:top;">
                          <div style="padding:18px;border-radius:18px;background:#f4ede1;">
                            <p style="margin:0 0 6px;font:600 11px/1.4 Arial,sans-serif;letter-spacing:0.12em;text-transform:uppercase;color:#7a7f8b;">Phone</p>
                            <p style="margin:0;font:500 18px/1.4 Arial,sans-serif;color:#172033;">${phone}</p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom:24px;">
                <tr>
                  <td style="padding:0 0 18px;">
                    <p style="margin:0;font:600 12px/1.4 Arial,sans-serif;letter-spacing:0.14em;text-transform:uppercase;color:#8b6b33;">Enquiry profile</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0;">
                    <div style="padding:22px;border:1px solid #ddd3c0;border-radius:20px;background:#fffdf8;">
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                        <tr>
                          <td width="33.33%" style="padding:0 12px 12px 0;vertical-align:top;">
                            <p style="margin:0 0 6px;font:600 11px/1.4 Arial,sans-serif;letter-spacing:0.12em;text-transform:uppercase;color:#7a7f8b;">Type</p>
                            <p style="margin:0;font:500 16px/1.5 Arial,sans-serif;color:#172033;">${enquiryType}</p>
                          </td>
                          <td width="33.33%" style="padding:0 12px 12px;vertical-align:top;">
                            <p style="margin:0 0 6px;font:600 11px/1.4 Arial,sans-serif;letter-spacing:0.12em;text-transform:uppercase;color:#7a7f8b;">Timeline</p>
                            <p style="margin:0;font:500 16px/1.5 Arial,sans-serif;color:#172033;">${timeline}</p>
                          </td>
                          <td width="33.33%" style="padding:0 0 12px 12px;vertical-align:top;">
                            <p style="margin:0 0 6px;font:600 11px/1.4 Arial,sans-serif;letter-spacing:0.12em;text-transform:uppercase;color:#7a7f8b;">Subject</p>
                            <p style="margin:0;font:500 16px/1.5 Arial,sans-serif;color:#172033;">${subject}</p>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </td>
                </tr>
              </table>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="padding:0 0 18px;">
                    <p style="margin:0;font:600 12px/1.4 Arial,sans-serif;letter-spacing:0.14em;text-transform:uppercase;color:#8b6b33;">Message brief</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div style="padding:26px;border-radius:20px;background:#172033;color:#eef2f7;">
                      <pre style="margin:0;white-space:pre-wrap;font:400 15px/1.8 Arial,sans-serif;color:#eef2f7;">${message}</pre>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildSenderTemplate({
  name,
  enquiryType,
  timeline,
  subject,
}: {
  name: string;
  enquiryType: string;
  timeline: string;
  subject: string;
}) {
  const logoUrl =
    "https://res.cloudinary.com/djnxf36jq/image/upload/v1772000146/arnn_omu8nl.png";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ARNN Group Confirmation</title>
</head>
<body style="margin:0;padding:0;background:#171c29;color:#e8edf5;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
    We received your ARNN Group enquiry and the team will review it shortly.
  </div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:radial-gradient(circle at top,#2e3b56 0%,#171c29 62%);padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#101522;border:1px solid rgba(216,187,123,0.24);border-radius:28px;overflow:hidden;">
          <tr>
            <td style="padding:34px 34px 26px;background:linear-gradient(180deg,rgba(216,187,123,0.13) 0%,rgba(16,21,34,0) 100%);">
              <img src="${logoUrl}" alt="ARNN Group" style="display:block;height:34px;width:auto;margin-bottom:24px;">
              <p style="margin:0 0 10px;font:600 12px/1.4 Arial,sans-serif;letter-spacing:0.18em;text-transform:uppercase;color:#d8bb7b;">Submission received</p>
              <h1 style="margin:0 0 14px;font:500 34px/1.12 Georgia,'Times New Roman',serif;color:#f5efe3;">Thank you, ${name}.</h1>
              <p style="margin:0;font:400 16px/1.7 Arial,sans-serif;color:#b9c2d0;">
                Your enquiry is now in the ARNN Group review queue. We’ll use the details you submitted to route this to the right team.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 34px 34px;">
              <div style="padding:22px;border-radius:22px;background:#141b2b;border:1px solid rgba(255,255,255,0.08);margin-bottom:22px;">
                <p style="margin:0 0 16px;font:600 12px/1.4 Arial,sans-serif;letter-spacing:0.14em;text-transform:uppercase;color:#d8bb7b;">Submission snapshot</p>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                    <td style="padding:0 0 14px;vertical-align:top;">
                      <p style="margin:0 0 4px;font:600 11px/1.4 Arial,sans-serif;letter-spacing:0.12em;text-transform:uppercase;color:#8893a7;">Enquiry type</p>
                      <p style="margin:0;font:500 16px/1.5 Arial,sans-serif;color:#f3f6fb;">${enquiryType}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0 0 14px;vertical-align:top;">
                      <p style="margin:0 0 4px;font:600 11px/1.4 Arial,sans-serif;letter-spacing:0.12em;text-transform:uppercase;color:#8893a7;">Preferred timeline</p>
                      <p style="margin:0;font:500 16px/1.5 Arial,sans-serif;color:#f3f6fb;">${timeline}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0;vertical-align:top;">
                      <p style="margin:0 0 4px;font:600 11px/1.4 Arial,sans-serif;letter-spacing:0.12em;text-transform:uppercase;color:#8893a7;">Subject</p>
                      <p style="margin:0;font:500 16px/1.5 Arial,sans-serif;color:#f3f6fb;">${subject}</p>
                    </td>
                  </tr>
                </table>
              </div>
              <div style="padding:20px 22px;border-radius:22px;background:#d8bb7b;color:#1b2231;">
                <p style="margin:0 0 8px;font:600 12px/1.4 Arial,sans-serif;letter-spacing:0.14em;text-transform:uppercase;">What happens next</p>
                <p style="margin:0;font:400 15px/1.7 Arial,sans-serif;">
                  A team member will review your submission and respond using the email address you provided. If your brief is time-sensitive, include any additional context by replying to this message.
                </p>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function processContactForm(payload: ContactPayload, env: ContactEnv) {
  const {
    name,
    email,
    company,
    phone,
    enquiry_type,
    preferred_timeline,
    subject,
    message,
    botcheck,
  } = payload;

  if (botcheck) {
    return { status: 200, body: { message: "Your message was sent successfully." } };
  }

  if (!name || !email || !subject || !message) {
    return { status: 400, body: { message: "Missing required fields." } };
  }

  if (
    !env.SMTP_HOST ||
    !env.SMTP_PORT ||
    !env.SMTP_USER ||
    !env.SMTP_PASS ||
    !env.SMTP_FROM_EMAIL ||
    !env.SMTP_TO_EMAIL
  ) {
    return { status: 500, body: { message: "SMTP configuration is incomplete." } };
  }

  const safeName = escapeHtml(name.trim());
  const safeEmail = escapeHtml(email.trim());
  const safeCompany = escapeHtml(company?.trim() || "Not provided");
  const safePhone = escapeHtml(phone?.trim() || "Not provided");
  const safeEnquiryType = escapeHtml(enquiry_type?.trim() || "General business enquiry");
  const safeTimeline = escapeHtml(preferred_timeline?.trim() || "Not provided");
  const safeSubject = escapeHtml(subject.trim());
  const safeMessage = escapeHtml(message.trim());

  const transporter = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: Number(env.SMTP_PORT),
    secure: String(env.SMTP_SECURE || "").toLowerCase() === "true" || Number(env.SMTP_PORT) === 465,
    auth: {
      user: env.SMTP_USER,
      pass: env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"ARNN Group Website" <${env.SMTP_FROM_EMAIL}>`,
      to: env.SMTP_TO_EMAIL,
      replyTo: email.trim(),
      subject: `New enquiry: ${subject.trim()}`,
      html: buildAdminTemplate({
        name: safeName,
        email: safeEmail,
        company: safeCompany,
        phone: safePhone,
        enquiryType: safeEnquiryType,
        timeline: safeTimeline,
        subject: safeSubject,
        message: safeMessage,
      }),
      text: [
        "NEW BUSINESS ENQUIRY",
        "",
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        `Company: ${company?.trim() || "Not provided"}`,
        `Phone: ${phone?.trim() || "Not provided"}`,
        `Enquiry Type: ${enquiry_type?.trim() || "General business enquiry"}`,
        `Preferred Timeline: ${preferred_timeline?.trim() || "Not provided"}`,
        `Subject: ${subject.trim()}`,
        "",
        "Message",
        message.trim(),
      ].join("\n"),
    });

    await transporter.sendMail({
      from: `"ARNN Group" <${env.SMTP_FROM_EMAIL}>`,
      to: email.trim(),
      replyTo: env.SMTP_TO_EMAIL,
      subject: "We received your enquiry | ARNN Group",
      html: buildSenderTemplate({
        name: safeName,
        enquiryType: safeEnquiryType,
        timeline: safeTimeline,
        subject: safeSubject,
      }),
      text: [
        `Hello ${name.trim()},`,
        "",
        "We received your enquiry and the ARNN Group team will review it shortly.",
        "",
        `Enquiry Type: ${enquiry_type?.trim() || "General business enquiry"}`,
        `Preferred Timeline: ${preferred_timeline?.trim() || "Not provided"}`,
        `Subject: ${subject.trim()}`,
        "",
        "A team member will respond using the email address you submitted.",
      ].join("\n"),
    });

    return { status: 200, body: { message: "Your message was sent successfully." } };
  } catch (error) {
    console.error("SMTP Error:", error);
    return { status: 500, body: { message: "Failed to send email. Please try again." } };
  }
}
