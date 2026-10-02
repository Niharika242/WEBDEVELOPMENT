import 'dotenv/config';
import { z } from 'zod';

const environmentSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  RESEND_API_KEY: z.string().trim().min(1, 'RESEND_API_KEY is required'),
  CONTACT_TO_EMAIL: z.string().trim().email('CONTACT_TO_EMAIL must be a valid email address'),
  CONTACT_FROM_EMAIL: z.string().trim().min(1, 'CONTACT_FROM_EMAIL is required'),
  FRONTEND_URL: z.string().trim().url('FRONTEND_URL must be a valid URL'),
  PORT: z.coerce.number().int().min(1).max(65535).default(3001),
  TRUST_PROXY: z.coerce.number().int().min(0).max(5).default(0),
});

const parsedEnvironment = environmentSchema.safeParse(process.env);

if (!parsedEnvironment.success) {
  const issues = parsedEnvironment.error.issues
    .map((issue) => `- ${issue.path.join('.')}: ${issue.message}`)
    .join('\n');
  throw new Error(`Server environment configuration is invalid:\n${issues}`);
}

export const env = parsedEnvironment.data;
export type ServerEnvironment = typeof env;
