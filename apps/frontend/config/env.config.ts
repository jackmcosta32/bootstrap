import { z } from 'zod';

const envSchema = z.object({
  ANALYZE: z.coerce.boolean().optional(),
});

export const env = envSchema.parse(process.env);
