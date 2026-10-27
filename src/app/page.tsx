import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function LandingPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{
        padding: "6rem 2rem 4rem",
        textAlign: "center",
        maxWidth: "1100px",
        margin: "0 auto",
        position: "relative"
      }}>
        <div style={{ marginBottom: "1.5rem" }}>
          <span className="simulated-badge">Running in Mock Mode • Sandbox Ready</span>
        </div>

        <h1 style={{
          fontSize: "3.75rem",
          fontWeight: 800,
          letterSpacing: "-0.035em",
          lineHeight: 1.15,
          marginBottom: "1.75rem"
        }}>
          Resolve customer complaints <br />
          <span className="text-gradient">before they become PayPal disputes.</span>
        </h1>

        <p style={{
          fontSize: "1.25rem",
          color: "var(--text-muted)",
          maxWidth: "760px",
          margin: "0 auto 2.5rem",
          lineHeight: 1.6
        }}>
          The policy-governed post-purchase AI agent built specifically for PayPal merchants.
          The LLM reasons, pure rules decide, and humans retain full control on high-risk cases.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}>
          <Link href="/app" className="btn btn-primary" style={{ padding: "0.875rem 2rem", fontSize: "1rem" }}>
            Explore Merchant Portal Demo →
          </Link>
          <Link href="/c/demo-store/report" className="btn btn-secondary" style={{ padding: "0.875rem 2rem", fontSize: "1rem" }}>
            Open Customer Intake Portal
          </Link>
          <Link href="/admin/simulator" className="btn btn-secondary" style={{ padding: "0.875rem 1.5rem", fontSize: "1rem", borderColor: "rgba(245, 158, 11, 0.4)" }}>
            ⚡ State Simulator
          </Link>
        </div>

        {/* Problem Strip */}
        <div className="glass-panel" style={{
          padding: "2rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.5rem",
          textAlign: "left"
        }}>
          <div>
            <div style={{ color: "var(--status-rose)", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", marginBottom: "0.4rem" }}>
              The Problem
            </div>
            <div style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.4rem" }}>Scattered Evidence</div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>Order details in store DB, tracking on carrier sites, payments on PayPal, and customer complaints in email.</p>
          </div>
          <div>
            <div style={{ color: "var(--status-rose)", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", marginBottom: "0.4rem" }}>
              The Cost
            </div>
            <div style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.4rem" }}>$15-$20 Dispute Fees</div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>Delayed responses cause buyers to escalate straight to PayPal, locking funds and impacting seller protection.</p>
          </div>
          <div>
            <div style={{ color: "var(--status-emerald)", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", marginBottom: "0.4rem" }}>
              The Solution
            </div>
            <div style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.4rem" }}>Automated Evidence Pack</div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>ResolveAI links PayPal transactions, carrier tracking, and order history into a verified audit-ready pack in seconds.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{ padding: "5rem 2rem", background: "var(--bg-surface)", borderTop: "1px solid var(--border-subtle)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--primary-cyan)" }}>
              Architecture Guardrails
            </span>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginTop: "0.5rem" }}>
              How ResolveAI Handles Cases
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            <div className="glass-panel" style={{ padding: "2rem" }}>
              <div style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background: "rgba(59, 130, 246, 0.15)",
                color: "#60a5fa",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.25rem",
                fontWeight: 800,
                marginBottom: "1.25rem"
              }}>1</div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.75rem" }}>Understand & Assemble</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.925rem", lineHeight: 1.6 }}>
                The LLM classifies the incoming complaint, extracts claims, and analyzes customer photos without touching payment credentials. Connectors query PayPal, carriers, and store data into a structured Evidence Pack.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: "2rem" }}>
              <div style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background: "rgba(6, 182, 212, 0.15)",
                color: "#22d3ee",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.25rem",
                fontWeight: 800,
                marginBottom: "1.25rem"
              }}>2</div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.75rem" }}>Pure-Code Rule Evaluation</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.925rem", lineHeight: 1.6 }}>
                Decisions are never hallucinated by an LLM. A deterministic policy engine tests the Evidence Pack against merchant rules, caps, and risk thresholds. Unknown data strictly defaults to human approval.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: "2rem" }}>
              <div style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background: "rgba(16, 185, 129, 0.15)",
                color: "#34d399",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.25rem",
                fontWeight: 800,
                marginBottom: "1.25rem"
              }}>3</div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.75rem" }}>Guarded Action Execution</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.925rem", lineHeight: 1.6 }}>
                Only the isolated Action Executor module holds write credentials. Actions use PayPal request-ID idempotency to guarantee no double-refunds, backed by an emergency kill switch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Interactive Demo Scenario Cards */}
      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#fbbf24" }}>
              Live Interactive Walkthroughs
            </span>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginTop: "0.5rem" }}>
              The Three Core Demo Scenarios
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            {/* Card 1 */}
            <div className="glass-panel" style={{ padding: "2rem", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <span className="badge badge-success">Demo Case 1</span>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>CASE-1001</span>
              </div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem" }}>Lost Package Auto-Refund</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: "1.5rem", flexGrow: 1 }}>
                USPS carrier tracking shows no movement for 8 days. Customer history is spotless. Order is under merchant $150 cap. Rule fires and automatically executes refund.
              </p>
              <div style={{ padding: "1rem", background: "rgba(255,255,255,0.03)", borderRadius: "var(--radius-md)", marginBottom: "1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", marginBottom: "0.3rem" }}>
                  <span style={{ color: "var(--text-muted)" }}>Order Amount:</span>
                  <strong>$89.00 USD</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", marginBottom: "0.3rem" }}>
                  <span style={{ color: "var(--text-muted)" }}>Risk Score:</span>
                  <span style={{ color: "var(--status-emerald)", fontWeight: 700 }}>12 / 100 (Low)</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem" }}>
                  <span style={{ color: "var(--text-muted)" }}>Outcome:</span>
                  <span style={{ color: "var(--status-emerald)", fontWeight: 700 }}>Auto-Refund Executed</span>
                </div>
              </div>
              <Link href="/app/cases/CASE-1001" className="btn btn-secondary btn-sm" style={{ width: "100%" }}>
                Inspect Case Detail →
              </Link>
            </div>

            {/* Card 2 */}
            <div className="glass-panel" style={{ padding: "2rem", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <span className="badge badge-warning">Demo Case 2</span>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>CASE-1002</span>
              </div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem" }}>Damaged Item Human Approval</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: "1.5rem", flexGrow: 1 }}>
                Customer submits photo of broken ceramic pour-over. Vision model extracts visible crack. Customer has 1 previous refund in 90 days. Risk score rises and holds for reviewer approval.
              </p>
              <div style={{ padding: "1rem", background: "rgba(255,255,255,0.03)", borderRadius: "var(--radius-md)", marginBottom: "1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", marginBottom: "0.3rem" }}>
                  <span style={{ color: "var(--text-muted)" }}>Order Amount:</span>
                  <strong>$145.50 USD</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", marginBottom: "0.3rem" }}>
                  <span style={{ color: "var(--text-muted)" }}>Risk Score:</span>
                  <span style={{ color: "var(--status-amber)", fontWeight: 700 }}>48 / 100 (Medium)</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem" }}>
                  <span style={{ color: "var(--text-muted)" }}>Outcome:</span>
                  <span style={{ color: "var(--status-amber)", fontWeight: 700 }}>Awaiting Reviewer</span>
                </div>
              </div>
              <Link href="/app/cases/CASE-1002" className="btn btn-secondary btn-sm" style={{ width: "100%" }}>
                Review & Approve →
              </Link>
            </div>

            {/* Card 3 */}
            <div className="glass-panel" style={{ padding: "2rem", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <span className="badge badge-danger">Demo Case 3</span>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>PP-D-5501</span>
              </div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem" }}>PayPal Dispute Pipeline</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: "1.5rem", flexGrow: 1 }}>
                Buyer opens dispute in PayPal Resolution Center. Webhook creates case. System checks stage rules, maps tracking with signed delivery proof, and compiles submission checklist.
              </p>
              <div style={{ padding: "1rem", background: "rgba(255,255,255,0.03)", borderRadius: "var(--radius-md)", marginBottom: "1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", marginBottom: "0.3rem" }}>
                  <span style={{ color: "var(--text-muted)" }}>Dispute Amount:</span>
                  <strong>$199.00 USD</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", marginBottom: "0.3rem" }}>
                  <span style={{ color: "var(--text-muted)" }}>Stage:</span>
                  <span style={{ color: "#a855f7", fontWeight: 700 }}>CHARGEBACK (Due in 72h)</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem" }}>
                  <span style={{ color: "var(--text-muted)" }}>Recommendation:</span>
                  <span style={{ color: "var(--primary-cyan)", fontWeight: 700 }}>Defend with Evidence</span>
                </div>
              </div>
              <Link href="/app/disputes" className="btn btn-secondary btn-sm" style={{ width: "100%" }}>
                Open Dispute Manager →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Trust Section */}
      <section style={{ padding: "4rem 2rem", background: "var(--bg-surface)", borderTop: "1px solid var(--border-subtle)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem" }}>
            Safety First. Zero LLM Hallucinations.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem", textAlign: "left" }}>
            <div className="glass-panel" style={{ padding: "1.5rem" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🔒</div>
              <h4 style={{ fontWeight: 700, marginBottom: "0.4rem" }}>Write Isolation</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>The LLM has zero access to PayPal write credentials. Only the dedicated backend executor can perform refunds or submit evidence.</p>
            </div>
            <div className="glass-panel" style={{ padding: "1.5rem" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>⚖️</div>
              <h4 style={{ fontWeight: 700, marginBottom: "0.4rem" }}>Rule Determinism</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>Policies are written in code and evaluated without an LLM. Any unexpected condition automatically defaults to human review.</p>
            </div>
            <div className="glass-panel" style={{ padding: "1.5rem" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🚨</div>
              <h4 style={{ fontWeight: 700, marginBottom: "0.4rem" }}>Emergency Kill Switch</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>Merchants can freeze all automated actions instantly with one click in the top bar. All cases immediately queue for manual approval.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
