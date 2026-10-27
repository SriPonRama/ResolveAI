import Link from "next/link";
import { MOCK_CASES, MOCK_DISPUTES, MOCK_AUDIT_LOGS } from "@/lib/mock-data";

export default function MerchantDashboard() {
  const pendingApprovals = MOCK_CASES.filter((c) => c.state === "PENDING_APPROVAL");

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2rem" }}>
      {/* Top Banner Alert for Active Dispute */}
      <div style={{
        background: "linear-gradient(90deg, rgba(239, 68, 68, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)",
        border: "1px solid rgba(239, 68, 68, 0.3)",
        borderRadius: "var(--radius-lg)",
        padding: "1.25rem 1.75rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <span style={{ fontSize: "1.75rem" }}>🚨</span>
          <div>
            <div style={{ fontWeight: 800, fontSize: "1rem", color: "#fca5a5" }}>
              Action Required: PayPal Dispute Due in 72 Hours
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              Dispute <strong>PP-D-5501</strong> ($199.00 USD) for order <strong>ORD-89419</strong> requires seller evidence submission before deadline.
            </div>
          </div>
        </div>
        <Link href="/app/disputes" className="btn btn-danger btn-sm">
          Review Dispute & Submit Evidence →
        </Link>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid-cols-auto">
        <div className="glass-panel" style={{ padding: "1.5rem" }}>
          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase" }}>
            Active Cases
          </div>
          <div style={{ fontSize: "2.25rem", fontWeight: 800, margin: "0.4rem 0" }}>3</div>
          <div style={{ fontSize: "0.8rem", color: "var(--primary-cyan)" }}>
            1 waiting for human approval
          </div>
        </div>

        <div className="glass-panel" style={{ padding: "1.5rem" }}>
          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase" }}>
            Auto-Resolved Today
          </div>
          <div style={{ fontSize: "2.25rem", fontWeight: 800, margin: "0.4rem 0", color: "var(--status-emerald)" }}>
            4
          </div>
          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
            100% within merchant policy caps
          </div>
        </div>

        <div className="glass-panel" style={{ padding: "1.5rem" }}>
          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase" }}>
            Simulated Refunds (Today)
          </div>
          <div style={{ fontSize: "2.25rem", fontWeight: 800, margin: "0.4rem 0" }}>
            $234.50
          </div>
          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
            Average resolution time: 42 seconds
          </div>
        </div>

        <div className="glass-panel" style={{ padding: "1.5rem" }}>
          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase" }}>
            Estimated Time Saved
          </div>
          <div style={{ fontSize: "2.25rem", fontWeight: 800, margin: "0.4rem 0", color: "#a855f7" }}>
            14.2 hrs
          </div>
          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
            Assumes 20 mins per manual case
          </div>
        </div>
      </div>

      {/* Main Split: Approval Queue & Live Audit Feed */}
      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1.2fr", gap: "2rem" }}>
        {/* Left: Pending Approvals Queue */}
        <div className="glass-panel" style={{ padding: "1.75rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
            <div>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 800 }}>Awaiting Your Approval</h2>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>Cases held by safety policies for human sign-off</p>
            </div>
            <Link href="/app/approvals" className="btn btn-secondary btn-sm">
              View All ({pendingApprovals.length})
            </Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {pendingApprovals.map((c) => (
              <div
                key={c.id}
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-md)",
                  padding: "1.25rem"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                      <span style={{ fontWeight: 800, fontSize: "1rem" }}>{c.id}</span>
                      <span className="badge badge-warning">Review Needed</span>
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                      Customer: <strong>{c.customerName}</strong> • Order: {c.orderNumber}
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "1.1rem", fontWeight: 800 }}>${c.amount.toFixed(2)}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--status-amber)", fontWeight: 600 }}>
                      Risk Score: {c.riskScore}/100
                    </div>
                  </div>
                </div>

                <div style={{
                  background: "rgba(0,0,0,0.2)",
                  padding: "0.75rem",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                  marginBottom: "1rem"
                }}>
                  <strong style={{ color: "var(--text-main)" }}>Reason Held: </strong>
                  {c.ruleTrace.reason}
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-dim)" }}>
                    Recommended: <strong>Partial Offer or Approve</strong>
                  </div>
                  <Link href={`/app/cases/${c.id}`} className="btn btn-primary btn-sm">
                    Review Decision & Evidence →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Live Audit Trail Feed */}
        <div className="glass-panel" style={{ padding: "1.75rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
            <div>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 800 }}>Audit Event Stream</h2>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>Immutable record of all evaluations & actions</p>
            </div>
            <Link href="/app/audit" className="btn btn-secondary btn-sm">
              Full Log →
            </Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {MOCK_AUDIT_LOGS.slice(0, 4).map((log) => (
              <div
                key={log.id}
                style={{
                  borderLeft: "2px solid var(--primary-cyan)",
                  paddingLeft: "1rem",
                  paddingBottom: "0.5rem"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--text-dim)", marginBottom: "0.2rem" }}>
                  <span style={{ fontWeight: 600, color: "var(--primary-cyan)" }}>{log.actor}</span>
                  <span>{log.timestamp}</span>
                </div>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.2rem" }}>{log.event}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.4 }}>{log.details}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
