import { Resend } from 'resend';
import { env } from '../config/env.js';
import type { ContactRequest } from '../schemas/contact.schema.js';

const resend = new Resend(env.RESEND_API_KEY);

export async function sendContactEmail(contact: ContactRequest): Promise<void> {
  const timestamp = new Date().toISOString();
  const { error } = await resend.emails.send({
    from: env.CONTACT_FROM_EMAIL,
    to: env.CONTACT_TO_EMAIL,
    replyTo: contact.email,
    subject: `Portfolio inquiry: ${contact.subject}`,
    text: [
      'Source: Portfolio Contact Form',
      `Submitted: ${timestamp}`,
      '',
      `Name: ${contact.name}`,
      `Email: ${contact.email}`,
      `Subject: ${contact.subject}`,
      '',
      'Message:',
      contact.message,
    ].join('\n'),
  });

  if (error) {
    throw new Error('Email provider rejected the contact message');
  }
}
