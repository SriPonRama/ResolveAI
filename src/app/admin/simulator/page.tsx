"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function SimulatorPage() {
  const [notification, setNotification] = useState<string | null>(null);

  const triggerAction = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />

      <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "3rem 1.5rem", flexGrow: 1, width: "100%" }}>
        <div style={{ marginBottom: "2.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
            <h1 style={{ fontSize: "2.25rem", fontWeight: 800 }}>⚡ Demo State Simulator</h1>
            <span className="simulated-badge">Platform Admin Tools</span>
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
            Interactive control center for live demo presentations, webhook injection, carrier status manipulation, and state resets.
          </p>
        </div>

        {notification && (
          <div style={{
            padding: "1rem 1.25rem",
            background: "var(--status-emerald-bg)",
            border: "1px solid rgba(16, 185, 129, 0.3)",
            borderRadius: "var(--radius-md)",
            color: "var(--status-emerald)",
            fontWeight: 600,
            fontSize: "0.9rem",
            marginBottom: "2rem"
          }}>
            ✓ {notification}
          </div>
        )}

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          {/* Card 1: Re-seed Demo Scenarios */}
          <div className="glass-panel" style={{ padding: "1.75rem" }}>
            <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>🌱 Seed Demo Scenarios</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "1.25rem" }}>
              Inject pre-configured cases into the database to rehearse different paths:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <button
                type="button"
                onClick={() => triggerAction("Injected Scenario 1: Lost Package (Auto-Refund path). Check /app/cases/CASE-1001.")}
                className="btn btn-secondary btn-sm"
                style={{ justifyContent: "flex-start" }}
              >
                📦 Seed Case 1: Lost Package ($89.00)
              </button>
              <button
                type="button"
                onClick={() => triggerAction("Injected Scenario 2: Damaged Item (Human Approval path). Check /app/cases/CASE-1002.")}
                className="btn btn-secondary btn-sm"
                style={{ justifyContent: "flex-start" }}
              >
                💔 Seed Case 2: Damaged Goods ($145.50)
              </button>
              <button
                type="button"
                onClick={() => triggerAction("Injected Scenario 3: Active PayPal INR Dispute. Check /app/disputes.")}
                className="btn btn-secondary btn-sm"
                style={{ justifyContent: "flex-start" }}
              >
                ⚖️ Seed Case 3: PayPal Dispute ($199.00)
              </button>
            </div>
          </div>

          {/* Card 2: Carrier Status Control */}
          <div className="glass-panel" style={{ padding: "1.75rem" }}>
            <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>🚚 Carrier Tracking Simulator</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "1.25rem" }}>
              Change mock tracking status in real time to trigger policy rules:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <button
                type="button"
                onClick={() => triggerAction("Tracking updated to: Stalled (No scan in 8 days). Policy will fire auto-refund.")}
                className="btn btn-secondary btn-sm"
                style={{ justifyContent: "flex-start", color: "var(--status-amber)" }}
              >
                🛑 Simulate Stalled Scan (&gt; 7 Days)
              </button>
              <button
                type="button"
                onClick={() => triggerAction("Tracking updated to: Delivered with Signature. Seller protection verified.")}
                className="btn btn-secondary btn-sm"
                style={{ justifyContent: "flex-start", color: "var(--status-emerald)" }}
              >
                ✍️ Simulate Delivered + Signature
              </button>
              <button
                type="button"
                onClick={() => triggerAction("Tracking updated to: Out for Delivery.")}
                className="btn btn-secondary btn-sm"
                style={{ justifyContent: "flex-start" }}
              >
                🚛 Simulate Out for Delivery
              </button>
            </div>
          </div>

          {/* Card 3: Webhook Event Dispatcher */}
          <div className="glass-panel" style={{ padding: "1.75rem" }}>
            <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>📡 Webhook Replay</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "1.25rem" }}>
              Simulate signed incoming PayPal webhooks without hitting external networks:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <button
                type="button"
                onClick={() => triggerAction("Dispatched webhook: CUSTOMER.DISPUTE.CREATED. Case created in inbox.")}
                className="btn btn-secondary btn-sm"
                style={{ justifyContent: "flex-start" }}
              >
                📥 Fire CUSTOMER.DISPUTE.CREATED
              </button>
              <button
                type="button"
                onClick={() => triggerAction("Dispatched webhook: CUSTOMER.DISPUTE.RESOLVED.")}
                className="btn btn-secondary btn-sm"
                style={{ justifyContent: "flex-start" }}
              >
                📥 Fire CUSTOMER.DISPUTE.RESOLVED
              </button>
            </div>
          </div>

          {/* Card 4: Global Reset */}
          <div className="glass-panel" style={{ padding: "1.75rem", border: "1px solid rgba(239, 68, 68, 0.4)", background: "rgba(239, 68, 68, 0.05)" }}>
            <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#fca5a5", marginBottom: "0.5rem" }}>🔄 Clean State Reset</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "1.25rem" }}>
              Reset all cases, approvals, and dispute checklists back to initial demo baseline in under 5 seconds.
            </p>
            <button
              type="button"
              onClick={() => triggerAction("All demo states, cases, and logs reset to clean baseline!")}
              className="btn btn-danger btn-sm"
              style={{ width: "100%" }}
            >
              Reset Entire Demo State
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
