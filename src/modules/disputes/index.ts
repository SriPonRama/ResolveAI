/**
 * Dispute pipeline:
 * Stage-aware evidence mapper, checklist generator, and submission coordinator.
 */
export interface DisputeEvidenceChecklist {
  paypalDisputeId: string;
  stage: string;
  dueDate?: string;
  have: string[];
  missing: string[];
}
