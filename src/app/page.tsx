export default function HomePage() {
  return (
    <main style={{ padding: "4rem 2rem", maxWidth: "960px", margin: "0 auto" }}>
      <header style={{ marginBottom: "2.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.025em" }}>
            ResolveAI
          </h1>
          <span className="simulated-badge">Simulated PayPal</span>
        </div>
        <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
          Policy-governed post-purchase resolution agent for PayPal merchants.
          <br />
          LLM reasons, rules decide, humans approve high-risk cases.
        </p>
      </header>

      <section style={{
        background: "var(--bg-secondary)",
        border: "1px solid var(--border-color)",
        borderRadius: "var(--radius)",
        padding: "1.5rem",
        marginBottom: "2rem"
      }}>
        <h2 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>System Status</h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
          Mode: <strong>Mock Mode (Simulated PayPal)</strong> • Database: <strong>SQLite (Ready)</strong> • Architecture: <strong>Scaffolded</strong>
        </p>
      </section>

      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "1rem"
      }}>
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", padding: "1.25rem", borderRadius: "var(--radius)" }}>
          <h3 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>🛡️ Policy Engine</h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>Pure code rule evaluator with fail-safe human approval.</p>
        </div>
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", padding: "1.25rem", borderRadius: "var(--radius)" }}>
          <h3 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>💳 Action Executor</h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>Isolated writer with idempotency and stage checks.</p>
        </div>
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", padding: "1.25rem", borderRadius: "var(--radius)" }}>
          <h3 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>⚖️ Dispute Pipeline</h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>Stage-aware evidence mapping and submission.</p>
        </div>
      </section>
    </main>
  );
}
