/**
 * Cost advisor: 3-path comparison (refund, make offer, defend dispute).
 */
export interface CostPath {
  path: "refund" | "offer" | "defend";
  estimatedCost: number;
  currency: string;
  expectedOutcome: string;
  details: string[];
}

export interface CostAdvice {
  recommendedPath: "refund" | "offer" | "defend";
  paths: CostPath[];
}
