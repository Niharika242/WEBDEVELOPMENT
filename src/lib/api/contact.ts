import { z } from 'zod';

export interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

const contactResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});

const fallbackError = "We couldn't send your message right now. Please try again later.";
const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL as string | undefined)?.replace(/\/$/, '') ?? '';

export async function sendContactMessage(contact: ContactRequest): Promise<ContactResponse> {
  let response: Response;
  try {
    response = await fetch(`${apiBaseUrl}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contact),
    });
  } catch {
    throw new Error(fallbackError);
  }

  const parsed = contactResponseSchema.safeParse(await response.json().catch(() => null));
  if (!parsed.success) throw new Error(fallbackError);
  if (!response.ok || !parsed.data.success) throw new Error(parsed.data.message || fallbackError);
  return parsed.data;
}
