"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CaseStatusPage() {
  const params = useParams();
  const token = params.token as string;
  const [newMsg, setNewMsg] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "Apex Merchants (via ResolveAI Agent)",
      time: "Oct 26, 2:33 PM",
      body: "We have received your lost package claim. Carrier tracking with USPS was inspected and confirmed stalled for 8 days. Under our store resolution policy, a full refund of $89.00 USD has been automatically processed to your PayPal account."
    }
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMsg.trim()) return;
    setMessages([
      ...messages,
      {
        sender: "You (Customer)",
        time: "Just now",
        body: newMsg
      }
    ]);
    setNewMsg("");
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-main)", padding: "2.5rem 1rem" }}>
      <header style={{ maxWidth: "760px", margin: "0 auto 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: "1.25rem", fontWeight: 800 }}>Apex Merchants Resolution Center</div>
          <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>Case Token: {token}</div>
        </div>
        <span className="simulated-badge">Simulated PayPal Action</span>
      </header>

      <main style={{ maxWidth: "760px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2rem" }}>
        {/* Status Card */}
        <div className="glass-panel" style={{ padding: "2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
            <div>
              <span className="badge badge-success" style={{ marginBottom: "0.5rem" }}>Resolved & Refunded</span>
              <h1 style={{ fontSize: "1.5rem", fontWeight: 800 }}>Case #CASE-1001: Package Never Arrived</h1>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>Order ORD-89421 • Wireless Ergonomic Keyboard ($89.00 USD)</p>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--status-emerald)" }}>+$89.00</div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Refunded to PayPal</div>
            </div>
          </div>

          {/* Timeline steps */}
          <div style={{ display: "flex", justifyContent: "space-between", position: "relative", margin: "2rem 0" }}>
            {[
              { title: "Complaint Submitted", date: "Oct 26, 2:32 PM", done: true },
              { title: "Evidence Verified", date: "Oct 26, 2:32 PM", done: true },
              { title: "Policy Auto-Executed", date: "Oct 26, 2:33 PM", done: true },
              { title: "Refund Settled", date: "Oct 26, 2:33 PM", done: true }
            ].map((step, idx) => (
              <div key={idx} style={{ textAlign: "center", flex: 1, zIndex: 2 }}>
                <div style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: step.done ? "var(--status-emerald)" : "var(--border-card)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  margin: "0 auto 0.5rem"
                }}>
                  {step.done ? "✓" : idx + 1}
                </div>
                <div style={{ fontSize: "0.75rem", fontWeight: 600 }}>{step.title}</div>
                <div style={{ fontSize: "0.7rem", color: "var(--text-dim)" }}>{step.date}</div>
              </div>
            ))}
          </div>

          {/* Refund receipt box */}
          <div style={{ background: "rgba(16, 185, 129, 0.08)", border: "1px solid rgba(16, 185, 129, 0.2)", borderRadius: "var(--radius-md)", padding: "1.25rem" }}>
            <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--status-emerald)", marginBottom: "0.25rem" }}>
              PayPal Refund Confirmation (Simulated)
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
              Full refund of $89.00 has been sent to your PayPal balance.
            </p>
            <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.75rem", color: "var(--text-dim)", fontFamily: "var(--font-mono)" }}>
              <span>Transaction: SIM-REF-449102</span>
              <span>PayPal Capture: SIM-CAP-789102</span>
            </div>
          </div>
        </div>

        {/* Messaging Box */}
        <div className="glass-panel" style={{ padding: "2rem" }}>
          <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "1.25rem" }}>Direct Merchant Message Thread</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }}>
            {messages.map((m, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-md)",
                padding: "1rem"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem", fontSize: "0.8rem" }}>
                  <strong>{m.sender}</strong>
                  <span style={{ color: "var(--text-dim)" }}>{m.time}</span>
                </div>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.5 }}>{m.body}</p>
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} style={{ display: "flex", gap: "0.75rem" }}>
            <input
              type="text"
              className="input-field"
              placeholder="Type a response or question..."
              value={newMsg}
              onChange={(e) => setNewMsg(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Send Reply
            </button>
          </form>
        </div>

        <div style={{ textAlign: "center", fontSize: "0.85rem" }}>
          <Link href="/" style={{ color: "var(--text-muted)" }}>
            ← Return to ResolveAI Home
          </Link>
        </div>
      </main>
    </div>
  );
}
