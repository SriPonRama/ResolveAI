"use client";

import { useState } from "react";
import { MOCK_AUDIT_LOGS } from "@/lib/mock-data";

export default function AuditLogPage() {
  const [filter, setFilter] = useState("");

  const filteredLogs = MOCK_AUDIT_LOGS.filter((l) =>
    l.actor.toLowerCase().includes(filter.toLowerCase()) ||
    l.event.toLowerCase().includes(filter.toLowerCase()) ||
    l.entity.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.75rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 800 }}>Immutable Audit Log</h1>
          <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
            Append-only verification trail recording actors, rules fired, scores, and mock/sandbox executions
          </p>
        </div>

        <button
          onClick={() => alert("Audit log exported as resolveai_audit_export.csv")}
          className="btn btn-secondary btn-sm"
        >
          ⬇ Export CSV
        </button>
      </div>

      <div className="glass-panel" style={{ padding: "0.75rem 1.25rem" }}>
        <input
          type="text"
          className="input-field"
          placeholder="Filter audit events by actor, event type, or case ID..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <div className="glass-panel" style={{ overflow: "hidden" }}>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Actor</th>
              <th>Event</th>
              <th>Entity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredLogs.map((log) => (
              <tr key={log.id}>
                <td style={{ whiteSpace: "nowrap", color: "var(--text-dim)", fontSize: "0.8rem" }}>
                  {log.timestamp}
                </td>
                <td style={{ fontWeight: 600, color: "var(--primary-cyan)" }}>
                  {log.actor}
                </td>
                <td>
                  <span className="badge badge-neutral" style={{ fontFamily: "var(--font-mono)" }}>
                    {log.event}
                  </span>
                </td>
                <td style={{ fontWeight: 700, fontFamily: "var(--font-mono)" }}>
                  {log.entity}
                </td>
                <td style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                  {log.details}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
