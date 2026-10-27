import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function HowItWorksPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />

      <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "4rem 2rem", flexGrow: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="simulated-badge" style={{ marginBottom: "1rem" }}>End-to-End Pipeline</span>
          <h1 style={{ fontSize: "3rem", fontWeight: 800, marginTop: "0.5rem", marginBottom: "1rem" }}>
            How ResolveAI Resolves Complaints
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", maxWidth: "700px", margin: "0 auto" }}>
            A rigorous 4-step pipeline that transforms ambiguous customer issues into deterministic, auditable outcomes.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {/* Step 1 */}
          <div className="glass-panel" style={{ padding: "2.5rem", display: "flex", gap: "2rem", alignItems: "flex-start" }}>
            <div style={{
              width: "50px",
              height: "50px",
              borderRadius: "14px",
              background: "var(--accent-gradient)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.5rem",
              fontWeight: 800,
              flexShrink: 0
            }}>1</div>
            <div>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>Intake & Evidence Pack Assembly</h2>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1rem" }}>
                When a customer submits a problem report or PayPal forwards a dispute webhook, ResolveAI treats all incoming customer text as untrusted. The intake service matches order numbers and customer emails against your store database, then calls read-only connectors for carrier tracking and PayPal order details.
              </p>
              <div style={{ background: "rgba(0,0,0,0.3)", padding: "1rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-subtle)", fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--primary-cyan)" }}>
                EvidencePack = &#123; order, customerHistory, carrierStatus, paypalCaptureId, photos &#125;
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="glass-panel" style={{ padding: "2.5rem", display: "flex", gap: "2rem", alignItems: "flex-start" }}>
            <div style={{
              width: "50px",
              height: "50px",
              borderRadius: "14px",
              background: "rgba(6, 182, 212, 0.2)",
              color: "#22d3ee",
              border: "1px solid rgba(6, 182, 212, 0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.5rem",
              fontWeight: 800,
              flexShrink: 0
            }}>2</div>
            <div>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>Deterministic Policy Evaluation</h2>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1rem" }}>
                The Evidence Pack is evaluated by a pure TypeScript engine. The LLM does <strong>not</strong> decide the financial outcome. Every merchant rule (e.g. max auto-refund cap, required tracking scan age, damaged item policy) is tested sequentially. Any missing evidence or conflicting data immediately triggers <code style={{ color: "var(--status-amber)" }}>REQUIRE_APPROVAL</code>.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <span className="badge badge-success">AUTO_EXECUTE (Under Cap & Low Risk)</span>
                <span className="badge badge-warning">REQUIRE_APPROVAL (Flagged/High Value)</span>
                <span className="badge badge-danger">DENY (Fraud/Blocked Buyer)</span>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="glass-panel" style={{ padding: "2.5rem", display: "flex", gap: "2rem", alignItems: "flex-start" }}>
            <div style={{
              width: "50px",
              height: "50px",
              borderRadius: "14px",
              background: "rgba(245, 158, 11, 0.2)",
              color: "#fbbf24",
              border: "1px solid rgba(245, 158, 11, 0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.5rem",
              fontWeight: 800,
              flexShrink: 0
            }}>3</div>
            <div>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>Financial Cost Advisor Comparison</h2>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1rem" }}>
                Before executing or presenting a case to reviewers, the Cost Advisor calculates the financial impact across 3 separate branches: Immediate Refund, Partial Settlement Offer, or Defending the Claim. For PayPal disputes, it includes dispute fees ($15-$20) and probability of seller protection eligibility.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="glass-panel" style={{ padding: "2.5rem", display: "flex", gap: "2rem", alignItems: "flex-start" }}>
            <div style={{
              width: "50px",
              height: "50px",
              borderRadius: "14px",
              background: "rgba(16, 185, 129, 0.2)",
              color: "#34d399",
              border: "1px solid rgba(16, 185, 129, 0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.5rem",
              fontWeight: 800,
              flexShrink: 0
            }}>4</div>
            <div>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>Idempotent Action Execution & Audit</h2>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1rem" }}>
                Approved actions pass to the Action Executor module. Using PayPal’s request-ID headers, calls are 100% idempotent—meaning server timeouts or duplicate button clicks never trigger double refunds. Every rule evaluated, risk score calculated, and refund executed is immutably logged to the append-only Audit Log.
              </p>
              <Link href="/app" className="btn btn-primary btn-sm">
                View Live Cases in Merchant App →
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
