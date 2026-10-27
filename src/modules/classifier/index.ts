/**
 * Classifier module (LLM):
 * Maps complaint to a case type, extracts claims, desired outcome, urgency.
 * Customer text is untrusted. Model outputs are strictly validated against schemas.
 */
export interface ClassifierResult {
  caseType: string;
  claims: string[];
  desiredOutcome: string;
  urgency: "low" | "medium" | "high";
  confidence: number;
}
