/**
 * Intake module: Customer form, email ingest, PayPal and carrier webhooks.
 * Webhook endpoints verify signatures and are idempotent on event ID.
 */
export interface IntakePayload {
  merchantId: string;
  source: "complaint" | "dispute";
  orderNumber?: string;
  customerEmail?: string;
  type?: string;
  description?: string;
  attachments?: string[];
}
