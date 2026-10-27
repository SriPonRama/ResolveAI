import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function SecurityPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />

      <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "4rem 2rem", flexGrow: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="simulated-badge" style={{ marginBottom: "1rem" }}>Zero-Trust Architecture</span>
          <h1 style={{ fontSize: "3rem", fontWeight: 800, marginTop: "0.5rem", marginBottom: "1rem" }}>
            Security & Safety Guardrails
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", maxWidth: "700px", margin: "0 auto" }}>
            ResolveAI is designed from first principles with fail-safes so that an AI model can never drain merchant funds or misstate facts.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
          <div className="glass-panel" style={{ padding: "2rem" }}>
            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>🛡️</div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>The LLM Never Touches Money</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>
              The LLM acts purely as an analytical reader—classifying complaint categories and analyzing uploaded damage photos. It holds zero PayPal credentials and cannot invoke refund APIs or external mutations.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: "2rem" }}>
            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>⚙️</div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>Pure-Code Policy Engine</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>
              All financial thresholds, refund caps, and approval gates are compiled into pure TypeScript code without an LLM in the loop. If anything is ambiguous or missing, the policy engine strictly fails safe to human review.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: "2rem" }}>
            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>🏢</div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>Strict Multi-Tenant Isolation</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>
              Every single database query is filtered explicitly by <code>merchant_id</code>. Role permissions (Owner, Reviewer, Viewer) are verified server-side on every API endpoint, not just hidden in the frontend UI.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: "2rem" }}>
            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>🛑</div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>Hardware-Grade Kill Switch</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>
              A single toggle in the merchant top bar activates the emergency kill switch. When active, all automated actions are immediately blocked, routing 100% of cases to manual human review.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: "2rem" }}>
            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>⚡</div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>Request-ID Idempotency</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>
              Every refund and evidence submission generates an idempotency key derived from the case ID and action type. Retries reuse the same key, ensuring duplicate transactions are rejected by PayPal.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: "2rem" }}>
            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>📜</div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>Immutable Audit Trail</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>
              Every decision records the exact Evidence Pack snapshot, rules fired, risk score weights, reviewer edits, and PayPal transaction IDs in an append-only audit log exportable for compliance.
            </p>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/app" className="btn btn-primary" style={{ padding: "0.875rem 2rem" }}>
            Test the Guardrails in Demo Mode →
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
