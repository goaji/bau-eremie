"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const contactSchema = z.object({
  name: z.string().trim().min(2, "Bitte geben Sie Ihren Namen an."),
  email: z
    .string()
    .trim()
    .email("Bitte geben Sie eine gültige E-Mail-Adresse an."),
  phone: z.string().trim().optional(),
  message: z.string().trim().optional(),
});

export type ContactFormState = {
  success: boolean;
  message: string;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  };

  const result = contactSchema.safeParse(rawData);

  if (!result.success) {
    const firstError =
      result.error.issues[0]?.message ?? "Bitte überprüfen Sie Ihre Eingaben.";
    return { success: false, message: firstError };
  }

  const { name, email, phone, message } = result.data;

  try {
    await transporter.sendMail({
      from: `"Website Anfrage" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECIPIENT,
      replyTo: email,
      subject: `Neue Anfrage von ${name} `,
      text: `
Name: ${name}
E-Mail: ${email}
Telefon: ${phone || "—"}

Nachricht:
${message || "—"}
      `.trim(),
    });
  } catch (error) {
    console.error("SMTP error:", error);
    return {
      success: false,
      message:
        "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
    };
  }

  return {
    success: true,
    message:
      "Danke. Ihre Anfrage wurde erfasst — wir melden uns bei Ihnen zurück.",
  };
}
