import Link from "next/link";

export function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--border-subtle)",
      background: "var(--bg-surface)",
      padding: "4rem 2rem 2rem",
      marginTop: "auto"
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "3rem",
          marginBottom: "3rem"
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <span style={{
                width: "28px",
                height: "28px",
                borderRadius: "6px",
                background: "var(--accent-gradient)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                color: "#fff",
                fontSize: "0.9rem"
              }}>R</span>
              <span style={{ fontSize: "1.1rem", fontWeight: 800 }}>ResolveAI</span>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "1rem" }}>
              Policy-governed post-purchase resolution agent for PayPal merchants. LLM reasons, rules decide, humans approve.
            </p>
            <span className="simulated-badge">Running in Mock Mode</span>
          </div>

          <div>
            <h4 style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "1rem" }}>Product</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.875rem", color: "var(--text-muted)" }}>
              <li><Link href="/how-it-works">How It Works</Link></li>
              <li><Link href="/security">Security & Guardrails</Link></li>
              <li><Link href="/app">Merchant Portal</Link></li>
              <li><Link href="/c/demo-store/report">Customer Report Portal</Link></li>
              <li><Link href="/admin/simulator">Demo State Simulator</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "1rem" }}>Demo Cases</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.875rem", color: "var(--text-muted)" }}>
              <li><Link href="/app/cases/CASE-1001">Case 1: Lost Package (Auto-Refund)</Link></li>
              <li><Link href="/app/cases/CASE-1002">Case 2: Damaged Item (Human Approval)</Link></li>
              <li><Link href="/app/disputes">Case 3: PayPal Dispute Pipeline</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "1rem" }}>Compliance & Safety</h4>
            <p style={{ color: "var(--text-dim)", fontSize: "0.8rem", lineHeight: 1.5, marginBottom: "0.75rem" }}>
              This environment runs strictly in simulated mock mode with zero real-money transactions. All PayPal credentials and API outputs are mock simulated.
            </p>
            <p style={{ color: "var(--text-dim)", fontSize: "0.75rem" }}>
              © {new Date().getFullYear()} ResolveAI. Built for PayPal Merchants.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
