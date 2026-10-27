"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CustomerReportPage() {
  const router = useRouter();
  const [orderNumber, setOrderNumber] = useState("ORD-89421");
  const [email, setEmail] = useState("sarah.jenkins@example.com");
  const [problemType, setProblemType] = useState("item_not_received");
  const [description, setDescription] = useState("My package was supposed to arrive last week, but the tracking has stopped updating for 8 days.");
  const [desiredOutcome, setDesiredOutcome] = useState("refund");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-main)", padding: "2rem 1rem" }}>
      <header style={{ maxWidth: "680px", margin: "0 auto 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontWeight: 800, fontSize: "1.2rem" }}>Apex Merchants</span>
          <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>• Customer Support Resolution</span>
        </div>
        <span className="simulated-badge">Verified Merchant</span>
      </header>

      <main style={{ maxWidth: "680px", margin: "0 auto" }}>
        <div className="glass-panel" style={{ padding: "2.5rem" }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
              <div style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "var(--status-emerald-bg)",
                color: "var(--status-emerald)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.75rem",
                margin: "0 auto 1.25rem",
                border: "1px solid rgba(16, 185, 129, 0.3)"
              }}>✓</div>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "0.5rem" }}>Complaint Received</h2>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                We have verified order <strong>{orderNumber}</strong> and created Case <strong>CASE-1001</strong>. Our automated resolution engine has begun gathering tracking and payment details.
              </p>
              <div style={{ background: "rgba(255,255,255,0.03)", padding: "1.25rem", borderRadius: "var(--radius-md)", marginBottom: "2rem", textAlign: "left" }}>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.25rem" }}>Your Magic Status Link:</div>
                <code style={{ color: "var(--primary-cyan)", fontSize: "0.9rem", wordBreak: "break-all" }}>
                  http://localhost:3000/case/magic-token-demo-89421
                </code>
              </div>
              <Link href="/case/magic-token-demo-89421" className="btn btn-primary" style={{ width: "100%", padding: "0.875rem" }}>
                Open Live Case Timeline →
              </Link>
            </div>
          ) : (
            <div>
              <div style={{ marginBottom: "2rem" }}>
                <h1 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "0.5rem" }}>
                  Report an issue with your order
                </h1>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                  Please confirm your order details and tell us what went wrong so we can resolve it immediately.
                </p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.4rem" }}>
                      Order Number
                    </label>
                    <input
                      type="text"
                      required
                      className="input-field"
                      placeholder="ORD-89421"
                      value={orderNumber}
                      onChange={(e) => setOrderNumber(e.target.value)}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.4rem" }}>
                      Order Email
                    </label>
                    <input
                      type="email"
                      required
                      className="input-field"
                      placeholder="sarah@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.5rem" }}>
                    What seems to be the problem?
                  </label>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                    {[
                      { id: "item_not_received", label: "📦 Package Never Arrived" },
                      { id: "damaged_item", label: "💔 Item Arrived Damaged" },
                      { id: "not_as_described", label: "🔍 Not as Described" },
                      { id: "unauthorised", label: "⚠️ Unrecognised Charge" }
                    ].map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setProblemType(t.id)}
                        className="btn btn-secondary"
                        style={{
                          justifyContent: "flex-start",
                          fontSize: "0.85rem",
                          borderColor: problemType === t.id ? "var(--primary-cyan)" : "var(--border-card)",
                          background: problemType === t.id ? "rgba(6, 182, 212, 0.12)" : "rgba(255, 255, 255, 0.04)"
                        }}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.4rem" }}>
                    Explain the details
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="input-field"
                    placeholder="Tell us what happened..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={{ resize: "vertical" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.4rem" }}>
                    Attach Photos (optional for damaged goods)
                  </label>
                  <div style={{
                    border: "2px dashed var(--border-card)",
                    borderRadius: "var(--radius-md)",
                    padding: "1.5rem",
                    textAlign: "center",
                    background: "rgba(0,0,0,0.2)",
                    color: "var(--text-muted)",
                    fontSize: "0.85rem"
                  }}>
                    Drag & drop product photos here, or <span style={{ color: "var(--primary-cyan)", cursor: "pointer" }}>browse files</span> (Max 5MB)
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.4rem" }}>
                    Desired Outcome
                  </label>
                  <select
                    className="input-field"
                    value={desiredOutcome}
                    onChange={(e) => setDesiredOutcome(e.target.value)}
                  >
                    <option value="refund">Full Refund to Original PayPal Payment</option>
                    <option value="replacement">Send Free Replacement Item</option>
                    <option value="partial_credit">Partial Credit / Keep Item</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary"
                  style={{ width: "100%", padding: "0.875rem", fontSize: "1rem" }}
                >
                  {loading ? "Verifying with Store DB..." : "Submit Complaint for Resolution →"}
                </button>
              </form>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
