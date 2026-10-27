"use client";

import Link from "next/link";
import { MOCK_CASES } from "@/lib/mock-data";

export default function ApprovalsQueuePage() {
  const approvalCases = MOCK_CASES.filter((c) => c.state === "PENDING_APPROVAL");

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <h1 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "0.25rem" }}>Approvals Queue</h1>
        <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
          Human-in-the-loop review queue sorted by risk score and resolution deadline
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {approvalCases.map((c) => (
          <div key={c.id} className="glass-panel" style={{ padding: "1.75rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.3rem" }}>
                  <span style={{ fontSize: "1.25rem", fontWeight: 800 }}>{c.id}</span>
                  <span className="badge badge-warning">Awaiting Approval</span>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-dim)", fontFamily: "var(--font-mono)" }}>
                    Order: {c.orderNumber}
                  </span>
                </div>
                <div style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                  Customer: <strong>{c.customerName}</strong> ({c.customerEmail})
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "1.5rem", fontWeight: 800 }}>${c.amount.toFixed(2)} USD</div>
                <div style={{ fontSize: "0.8rem", color: "var(--status-amber)", fontWeight: 700 }}>
                  Risk Score: {c.riskScore}/100
                </div>
              </div>
            </div>

            <div style={{ background: "rgba(0,0,0,0.25)", padding: "1rem", borderRadius: "var(--radius-md)", marginBottom: "1.25rem" }}>
              <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--primary-cyan)", marginBottom: "0.3rem" }}>
                Policy Trigger:
              </div>
              <p style={{ fontSize: "0.875rem", color: "var(--text-main)", lineHeight: 1.5 }}>
                {c.ruleTrace.reason}
              </p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
              <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.8rem", color: "var(--text-dim)" }}>
                <span>Deadline: <strong>Oct 29, 2026</strong></span>
                <span>Type: <strong>{c.type.replace(/_/g, " ")}</strong></span>
              </div>
              <div style={{ display: "flex", gap: "0.75rem" }}>
                <Link href={`/app/cases/${c.id}`} className="btn btn-primary btn-sm">
                  Review & Approve →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
