import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PAYPAL_MODE: z.enum(["mock", "sandbox", "live"]).default("mock"),
  PAYPAL_ENV: z.enum(["sandbox", "live"]).default("sandbox"),
  PAYPAL_CLIENT_ID: z.string().optional().default(""),
  PAYPAL_CLIENT_SECRET: z.string().optional().default(""),
  PAYPAL_WEBHOOK_ID: z.string().optional().default(""),
  LLM_API_KEY: z.string().optional().default(""),
  DATABASE_URL: z.string().default("file:./dev.db"),
  APP_URL: z.string().default("http://localhost:3000"),
  SESSION_SECRET: z.string().default("dev-session-secret-change-in-production-at-least-32-chars"),
  ENCRYPTION_KEY: z.string().default("dev-encryption-key-change-in-production"),
  EMAIL_API_KEY: z.string().optional().default(""),
});

export type Env = z.infer<typeof envSchema>;

function parseEnv(): Env {
  const parsed = envSchema.safeParse(process.env);
  if (!parsed.success) {
    console.error("Invalid environment variables:", parsed.error.format());
    throw new Error("Invalid environment variables");
  }
  return parsed.data;
}

export const env = parseEnv();
