import type { Request, Response } from 'express';
import { contactSchema, type ContactResponse } from '../schemas/contact.schema.js';
import { sendContactEmail } from '../services/email.service.js';

export async function createContact(request: Request, response: Response<ContactResponse>): Promise<void> {
  const parsed = contactSchema.safeParse(request.body);
  if (!parsed.success) {
    response.status(400).json({ success: false, message: 'Please check your submitted information.' });
    return;
  }

  const contact = parsed.data;

  // Silently accept likely bot submissions without forwarding them to the inbox.
  if (contact.website) {
    response.status(200).json({ success: true, message: 'Your message has been sent successfully.' });
    return;
  }

  try {
    await sendContactEmail(contact);
    response.status(200).json({ success: true, message: 'Your message has been sent successfully.' });
  } catch {
    console.error('Contact email delivery failed');
    response.status(502).json({ success: false, message: "We couldn't send your message right now. Please try again later." });
  }
}
