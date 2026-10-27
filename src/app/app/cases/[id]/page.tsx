"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { MOCK_CASES } from "@/lib/mock-data";

export default function CaseDetailPage() {
  const params = useParams();
  const caseId = params.id as string;
  const caseData = MOCK_CASES.find((c) => c.id === caseId) || MOCK_CASES[0];

  const [actionExecuted, setActionExecuted] = useState<string | null>(
    caseData.state === "AUTO_EXECUTED" ? "Auto-refund executed via PayPal" : null
  );
  const [refundAmount, setRefundAmount] = useState<number>(caseData.amount);
  const [rejectReason, setRejectReason] = useState("");
  const [draftMessage, setDraftMessage] = useState(
    `Hello ${caseData.customerName},\n\nWe have reviewed your inquiry regarding order ${caseData.orderNumber}. Based on our store policy, we have processed a resolution. Thank you for your patience.`
  );

  const handleApprove = () => {
    setActionExecuted(`Approved! Executed refund of $${refundAmount.toFixed(2)} USD via Mock PayPal.`);
  };

  const handleReject = () => {
    if (!rejectReason) {
      alert("Please enter a rejection reason for compliance records.");
      return;
    }
    setActionExecuted(`Claim rejected: "${rejectReason}". Customer has been notified.`);
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2rem" }}>
      {/* Breadcrumb & Navigation */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          <Link href="/app/cases" style={{ color: "var(--primary-cyan)" }}>← Cases Inbox</Link>
          <span>/</span>
          <span style={{ fontFamily: "var(--font-mono)", color: "var(--text-main)" }}>{caseData.id}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span className="simulated-badge">Simulated PayPal Sandbox</span>
        </div>
      </div>

      {/* Case Header Card */}
      <div className="glass-panel" style={{ padding: "2rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
              <h1 style={{ fontSize: "1.75rem", fontWeight: 800 }}>{caseData.id}</h1>
              {caseData.state === "AUTO_EXECUTED" && <span className="badge badge-success">Auto-Resolved</span>}
              {caseData.state === "PENDING_APPROVAL" && <span className="badge badge-warning">Awaiting Review</span>}
              {caseData.state === "DECIDED" && <span className="badge badge-danger">Dispute Pipeline</span>}
            </div>
            <div style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
              Customer: <strong>{caseData.customerName}</strong> ({caseData.customerEmail}) • Order: <strong style={{ color: "var(--primary-cyan)" }}>{caseData.orderNumber}</strong>
            </div>
          </div>

          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "1.75rem", fontWeight: 800 }}>${caseData.amount.toFixed(2)} {caseData.currency}</div>
            <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
              Opened {new Date(caseData.openedAt).toLocaleDateString()}
            </div>
          </div>
        </div>

        {/* Action Executed Banner */}
        {actionExecuted && (
          <div style={{
            marginTop: "1.5rem",
            padding: "1rem 1.25rem",
            background: "var(--status-emerald-bg)",
            border: "1px solid rgba(16, 185, 129, 0.3)",
            borderRadius: "var(--radius-md)",
            color: "var(--status-emerald)",
            fontWeight: 600,
            fontSize: "0.9rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
          }}>
            <span>✓</span>
            <span>{actionExecuted}</span>
          </div>
        )}
      </div>

      {/* Split Grid: Evidence Pack (Left) & Policy / Decision (Right) */}
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1.6fr", gap: "2rem" }}>
        {/* Left Column: Customer Complaint & Evidence Pack */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Customer Message Card */}
          <div className="glass-panel" style={{ padding: "1.5rem" }}>
            <div style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", color: "var(--text-dim)", marginBottom: "0.5rem" }}>
              Customer Claim (Untrusted Input)
            </div>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "var(--text-main)", marginBottom: "1rem" }}>
              &ldquo;{caseData.evidencePack.customerMessage}&rdquo;
            </p>

            {/* Photo preview if available */}
            {caseData.evidencePack.photoUrls && (
              <div>
                <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.4rem" }}>
                  Attached Evidence Photo:
                </div>
                <div style={{
                  border: "1px solid var(--border-card)",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  maxHeight: "180px",
                  background: "#000"
                }}>
                  <img
                    src={caseData.evidencePack.photoUrls[0]}
                    alt="Customer Damage Photo"
                    style={{ width: "100%", height: "180px", objectFit: "cover" }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Evidence Pack Sources */}
          <div className="glass-panel" style={{ padding: "1.5rem" }}>
            <div style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", color: "var(--primary-cyan)", marginBottom: "1rem" }}>
              Evidence Pack (Verified Sources)
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {/* Carrier Evidence */}
              <div style={{ padding: "1rem", background: "rgba(255,255,255,0.02)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", fontWeight: 700, marginBottom: "0.3rem" }}>
                  <span>🚚 Carrier Tracking ({caseData.evidencePack.carrier})</span>
                  <span style={{ color: "var(--primary-cyan)" }}>{caseData.evidencePack.trackingNumber}</span>
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-main)", fontWeight: 600 }}>
                  Status: {caseData.evidencePack.carrierStatus}
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-dim)", marginTop: "0.2rem" }}>
                  Last scan: {caseData.evidencePack.lastCarrierScan}
                </div>
              </div>

              {/* PayPal Evidence */}
              <div style={{ padding: "1rem", background: "rgba(255,255,255,0.02)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", fontWeight: 700, marginBottom: "0.3rem" }}>
                  <span>💳 PayPal Capture</span>
                  <span style={{ color: "#fbbf24", fontFamily: "var(--font-mono)" }}>{caseData.evidencePack.paypalCaptureId}</span>
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-main)", fontWeight: 600 }}>
                  Payment Status: {caseData.evidencePack.paypalStatus}
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-dim)", marginTop: "0.2rem" }}>
                  Store capture verified • Eligible for full or partial refund
                </div>
              </div>

              {/* Customer 90-Day History */}
              <div style={{ padding: "1rem", background: "rgba(255,255,255,0.02)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)" }}>
                <div style={{ fontSize: "0.8rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                  👤 Customer Profile History
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.5rem", textAlign: "center" }}>
                  <div style={{ background: "rgba(0,0,0,0.2)", padding: "0.5rem", borderRadius: "var(--radius-sm)" }}>
                    <div style={{ fontSize: "1.1rem", fontWeight: 800 }}>{caseData.evidencePack.customerHistory.totalOrders}</div>
                    <div style={{ fontSize: "0.7rem", color: "var(--text-dim)" }}>Total Orders</div>
                  </div>
                  <div style={{ background: "rgba(0,0,0,0.2)", padding: "0.5rem", borderRadius: "var(--radius-sm)" }}>
                    <div style={{ fontSize: "1.1rem", fontWeight: 800, color: caseData.evidencePack.customerHistory.refunds90d > 0 ? "var(--status-amber)" : "var(--status-emerald)" }}>
                      {caseData.evidencePack.customerHistory.refunds90d}
                    </div>
                    <div style={{ fontSize: "0.7rem", color: "var(--text-dim)" }}>Refunds (90d)</div>
                  </div>
                  <div style={{ background: "rgba(0,0,0,0.2)", padding: "0.5rem", borderRadius: "var(--radius-sm)" }}>
                    <div style={{ fontSize: "1.1rem", fontWeight: 800 }}>{caseData.evidencePack.customerHistory.disputes90d}</div>
                    <div style={{ fontSize: "0.7rem", color: "var(--text-dim)" }}>Disputes (90d)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Policy Decision, Risk Signals, Cost Advisor, and Action Bar */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Rule Evaluation Card */}
          <div className="glass-panel" style={{ padding: "1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
              <div style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", color: "var(--primary-cyan)" }}>
                Deterministic Policy Trace
              </div>
              <span className={`badge ${caseData.ruleTrace.gate === "AUTO_EXECUTE" ? "badge-success" : "badge-warning"}`}>
                {caseData.ruleTrace.gate}
              </span>
            </div>

            <div style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.4rem" }}>
              {caseData.ruleTrace.ruleName}
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.5, marginBottom: "1rem" }}>
              {caseData.ruleTrace.reason}
            </p>

            <div style={{ display: "flex", gap: "1rem", fontSize: "0.75rem", color: "var(--text-dim)", fontFamily: "var(--font-mono)" }}>
              <span>Rule ID: {caseData.ruleTrace.ruleId}</span>
              <span>Policy: v1.0 (Published)</span>
            </div>
          </div>

          {/* Risk Score Breakdown */}
          <div className="glass-panel" style={{ padding: "1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
              <div style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", color: "var(--text-muted)" }}>
                Risk Signal Breakdown
              </div>
              <div style={{ fontWeight: 800, fontSize: "1.1rem" }}>
                Score: <span style={{ color: caseData.riskScore < 25 ? "var(--status-emerald)" : "var(--status-amber)" }}>{caseData.riskScore}</span> / 100
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {caseData.riskSignals.map((sig, idx) => (
                <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.85rem", padding: "0.5rem 0", borderBottom: "1px solid var(--border-subtle)" }}>
                  <div>
                    <div style={{ fontWeight: 600 }}>{sig.name}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-dim)" }}>{sig.details}</div>
                  </div>
                  <span style={{ fontWeight: 700, fontFamily: "var(--font-mono)" }}>+{sig.score}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cost Advisor 3-Path Comparison */}
          <div className="glass-panel" style={{ padding: "1.5rem" }}>
            <div style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.75rem" }}>
              Cost Advisor (Financial Impact)
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.75rem", textAlign: "center" }}>
              <div style={{ background: "rgba(255,255,255,0.03)", padding: "0.75rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-subtle)" }}>
                <div style={{ fontSize: "0.75rem", color: "var(--text-dim)", marginBottom: "0.2rem" }}>Full Refund</div>
                <div style={{ fontSize: "1.1rem", fontWeight: 800 }}>${caseData.costAnalysis.refundCost.toFixed(2)}</div>
                <div style={{ fontSize: "0.7rem", color: "var(--status-emerald)", marginTop: "0.2rem" }}>Dispute avoided</div>
              </div>

              <div style={{ background: "rgba(255,255,255,0.03)", padding: "0.75rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-subtle)" }}>
                <div style={{ fontSize: "0.75rem", color: "var(--text-dim)", marginBottom: "0.2rem" }}>Partial Offer</div>
                <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--primary-cyan)" }}>${caseData.costAnalysis.offerCost.toFixed(2)}</div>
                <div style={{ fontSize: "0.7rem", color: "var(--primary-cyan)", marginTop: "0.2rem" }}>Saves ~50%</div>
              </div>

              <div style={{ background: "rgba(255,255,255,0.03)", padding: "0.75rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-subtle)" }}>
                <div style={{ fontSize: "0.75rem", color: "var(--text-dim)", marginBottom: "0.2rem" }}>Defend Dispute</div>
                <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--status-rose)" }}>${caseData.costAnalysis.defendCost.toFixed(2)}</div>
                <div style={{ fontSize: "0.7rem", color: "var(--status-rose)", marginTop: "0.2rem" }}>Fee risk ($15)</div>
              </div>
            </div>
          </div>

          {/* Interactive Reviewer Action Bar */}
          <div className="glass-panel" style={{ padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "1rem" }}>Reviewer Action</h3>

            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.4rem" }}>
                Refund Amount (USD)
              </label>
              <input
                type="number"
                className="input-field"
                value={refundAmount}
                onChange={(e) => setRefundAmount(parseFloat(e.target.value) || 0)}
              />
            </div>

            <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <button
                type="button"
                onClick={handleApprove}
                className="btn btn-primary"
                style={{ flex: 1 }}
              >
                ✓ Approve Refund (${refundAmount.toFixed(2)})
              </button>
            </div>

            <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "1rem" }}>
              <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.4rem" }}>
                Or Reject with Required Reason:
              </label>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <input
                  type="text"
                  className="input-field"
                  placeholder="e.g. Return shipping proof missing"
                  value={rejectReason}
                  onChange={(e) => setRejectReason(e.target.value)}
                />
                <button
                  type="button"
                  onClick={handleReject}
                  className="btn btn-danger btn-sm"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
