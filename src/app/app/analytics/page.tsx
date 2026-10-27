"use client";

export default function AnalyticsPage() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <h1 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "0.25rem" }}>
          Savings & Shadow Mode Analytics
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
          Track merchant team agreement rates, resolution times, and avoided dispute fees
        </p>
      </div>

      {/* Hero Stats */}
      <div className="grid-cols-auto">
        <div className="glass-panel" style={{ padding: "1.5rem" }}>
          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600 }}>Shadow Mode Agreement</div>
          <div style={{ fontSize: "2.25rem", fontWeight: 800, color: "var(--status-emerald)", margin: "0.4rem 0" }}>94.2%</div>
          <p style={{ fontSize: "0.8rem", color: "var(--text-dim)" }}>Merchant agreed with agent recommendation</p>
        </div>

        <div className="glass-panel" style={{ padding: "1.5rem" }}>
          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600 }}>Avoided Dispute Fees</div>
          <div style={{ fontSize: "2.25rem", fontWeight: 800, color: "var(--primary-cyan)", margin: "0.4rem 0" }}>$420.00</div>
          <p style={{ fontSize: "0.8rem", color: "var(--text-dim)" }}>Calculated at $15/dispute avoided</p>
        </div>

        <div className="glass-panel" style={{ padding: "1.5rem" }}>
          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600 }}>Avg. Resolution Time</div>
          <div style={{ fontSize: "2.25rem", fontWeight: 800, color: "#a855f7", margin: "0.4rem 0" }}>1.4 hrs</div>
          <p style={{ fontSize: "0.8rem", color: "var(--text-dim)" }}>Down from 48.0 hrs manual average</p>
        </div>
      </div>

      {/* Breakdown Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.75rem" }}>
        <div className="glass-panel" style={{ padding: "1.75rem" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem" }}>
            Resolutions by Category (Past 30 Days)
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              { label: "Lost Package (Stalled Carrier)", count: "62%", color: "var(--primary-cyan)" },
              { label: "Damaged in Transit", count: "24%", color: "var(--status-amber)" },
              { label: "PayPal Resolution Center Disputes", count: "10%", color: "#ef4444" },
              { label: "Other Inquiries", count: "4%", color: "var(--text-dim)" }
            ].map((cat, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.85rem", padding: "0.5rem 0", borderBottom: "1px solid var(--border-subtle)" }}>
                <span>{cat.label}</span>
                <span style={{ fontWeight: 700, color: cat.color }}>{cat.count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel" style={{ padding: "1.75rem" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem" }}>
            Reviewer Override Insights
          </h2>
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem", lineHeight: 1.5 }}>
            Repeated manual edits feed the policy recommendation engine:
          </p>
          <div style={{ background: "rgba(245, 158, 11, 0.08)", border: "1px solid rgba(245, 158, 11, 0.25)", padding: "1rem", borderRadius: "var(--radius-md)" }}>
            <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--status-amber)", marginBottom: "0.25rem" }}>
              Suggested Policy Update
            </div>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
              &ldquo;Reviewers repeatedly lowered damaged-item refunds by 20% when original packaging was missing. Consider adding a packaging deduction rule.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
