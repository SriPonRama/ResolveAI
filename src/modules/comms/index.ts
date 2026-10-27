/**
 * Communications module:
 * Drafts customer messages strictly from approved facts.
 * Never promises anything the decision does not cover.
 */
export interface DraftMessageRequest {
  caseId: string;
  templateType: "received" | "needs_info" | "resolved" | "escalated";
  approvedFacts: Record<string, string | number>;
}

export interface DraftMessageResult {
  subject: string;
  body: string;
}
