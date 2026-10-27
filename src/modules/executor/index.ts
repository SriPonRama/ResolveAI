/**
 * Action Executor:
 * SOLE holder of PayPal write credentials.
 * Handles idempotency (request-ID header), caps, dry-run, kill switch, and stage validation.
 * LLM never calls PayPal directly.
 */
export interface ActionExecutionRequest {
  actionType: "refund" | "make_offer" | "provide_evidence" | "send_message";
  caseId: string;
  merchantId: string;
  idempotencyKey: string;
  payload: Record<string, unknown>;
}

export interface ActionExecutionResult {
  success: boolean;
  actionId: string;
  paypalResponseId?: string;
  status: "executed" | "blocked" | "failed";
  reason?: string;
}
