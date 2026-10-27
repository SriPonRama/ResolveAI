/**
 * Risk scorer: Heuristic scoring with visible per-signal breakdown.
 */
export interface RiskSignal {
  name: string;
  weight: number;
  score: number;
  details: string;
}

export interface RiskEvaluation {
  overallScore: number; // 0 - 100
  level: "low" | "medium" | "high";
  signals: RiskSignal[];
}
