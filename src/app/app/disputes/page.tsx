"use client";

import { useState } from "react";
import Link from "next/link";
import { MOCK_DISPUTES } from "@/lib/mock-data";

export default function DisputesPipelinePage() {
  const [submittedDispute, setSubmittedDispute] = useState<string | null>(null);

  const handleSubmitEvidence = (disputeId: string) => {
    setSubmittedDispute(disputeId);
  };

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.25rem" }}>
            <h1 style={{ fontSize: "1.75rem", fontWeight: 800 }}>PayPal Dispute Pipeline</h1>
            <span className="simulated-badge">Direct PayPal Disputes API</span>
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
            Stage-aware evidence checklist and submission tracker for active PayPal disputes
          </p>
        </div>
      </div>

      {submittedDispute && (
        <div style={{
          padding: "1rem 1.25rem",
          background: "var(--status-emerald-bg)",
          border: "1px solid rgba(16, 185, 129, 0.3)",
          borderRadius: "var(--radius-md)",
          color: "var(--status-emerald)",
          fontWeight: 600,
          fontSize: "0.9rem"
        }}>
          ✓ Evidence submitted for dispute {submittedDispute}! PayPal response logged to Audit Trail.
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
        {MOCK_DISPUTES.map((dispute) => (
          <div key={dispute.id} className="glass-panel" style={{ padding: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.4rem" }}>
                  <span style={{ fontSize: "1.35rem", fontWeight: 800, fontFamily: "var(--font-mono)" }}>{dispute.id}</span>
                  <span className="badge badge-danger">{dispute.stage}</span>
                  <span className="badge badge-neutral">{dispute.status}</span>
                </div>
                <div style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
                  Buyer: <strong>{dispute.buyerName}</strong> • Order: {dispute.orderNumber} • Reason: <strong>{dispute.reason}</strong>
                </div>
              </div>

              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "1.5rem", fontWeight: 800 }}>{dispute.amount}</div>
                <div style={{
                  fontSize: "0.8rem",
                  color: dispute.dueInHours <= 72 ? "#ef4444" : "var(--status-amber)",
                  fontWeight: 700,
                  marginTop: "0.2rem"
                }}>
                  ⏳ Due in {dispute.dueInHours} hours ({dispute.dueDate})
                </div>
              </div>
            </div>

            {/* Evidence Checklist */}
            <div style={{ background: "rgba(0,0,0,0.25)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", padding: "1.25rem", marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", color: "var(--primary-cyan)" }}>
                  PayPal Requested Evidence Checklist
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--status-emerald)", fontWeight: 700 }}>
                  {dispute.sellerProtectionEligible ? "✓ Seller Protection Eligible" : "⚠️ Standard Chargeback Review"}
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {dispute.evidenceChecklist.map((item, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.85rem", padding: "0.4rem 0" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ color: item.status === "have" ? "var(--status-emerald)" : "var(--status-amber)", fontWeight: 700 }}>
                        {item.status === "have" ? "✓" : "○"}
                      </span>
                      <span>{item.label}</span>
                    </div>
                    <span className={`badge ${item.status === "have" ? "badge-success" : "badge-warning"}`} style={{ fontSize: "0.7rem" }}>
                      {item.status === "have" ? "Captured" : "Missing / Optional"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions Bar */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                Stage Rules: Evidence submission allowed in current PayPal state.
              </div>
              <div style={{ display: "flex", gap: "0.75rem" }}>
                <Link href={`/app/cases/${dispute.caseId}`} className="btn btn-secondary btn-sm">
                  View Full Case File
                </Link>
                <button
                  type="button"
                  onClick={() => handleSubmitEvidence(dispute.id)}
                  className="btn btn-primary btn-sm"
                >
                  🚀 Submit Evidence to PayPal
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
