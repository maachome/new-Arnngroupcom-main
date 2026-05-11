import type { VercelRequest, VercelResponse } from "@vercel/node";
import { processContactForm } from "../server/contact-service.js";

export default async function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method !== "POST") {
    return response.status(405).json({ message: "Method not allowed" });
  }

  const result = await processContactForm(request.body || {}, {
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_SECURE: process.env.SMTP_SECURE,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
    SMTP_FROM_EMAIL: process.env.SMTP_FROM_EMAIL,
    SMTP_TO_EMAIL: process.env.SMTP_TO_EMAIL,
  });

  return response.status(result.status).json(result.body);
}
