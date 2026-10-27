/**
 * Policy engine: Pure TypeScript code with NO LLM inside.
 * Unknown or missing data -> REQUIRE_APPROVAL.
 */
export type PolicyGate = "AUTO_EXECUTE" | "REQUIRE_APPROVAL" | "DENY";

export interface PolicyRule {
  id: string;
  name: string;
  condition: string;
  action: PolicyGate;
}

export interface PolicyEvaluationResult {
  gate: PolicyGate;
  ruleFired?: string;
  policyVersion: number;
  reason: string;
}
