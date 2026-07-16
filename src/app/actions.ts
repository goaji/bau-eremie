"use server";

import { z } from "zod";

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

  // TODO: actually send the email
  console.log("Neue Kontaktanfrage:", result.data);

  return {
    success: true,
    message:
      "Danke. Ihre Anfrage wurde erfasst — wir melden uns bei Ihnen zurück.",
  };
}
