import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().max(254).email(),
  subject: z.string().trim().min(3).max(150).regex(/^[^\r\n]+$/, 'Subject must be one line'),
  message: z.string().trim().min(10).max(5000),
  website: z.string().max(500).optional().default(''),
}).strict();

export type ContactRequest = z.infer<typeof contactSchema>;

export interface ContactResponse {
  success: boolean;
  message: string;
}
