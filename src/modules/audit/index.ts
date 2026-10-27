/**
 * Append-only Audit Log module.
 * Logs facts, rules fired, risk scores, and actions.
 */
export interface AuditEntry {
  merchantId?: string;
  actor: string;
  event: string;
  entity: string;
  entityId?: string;
  details?: Record<string, unknown>;
  timestamp: string;
}
