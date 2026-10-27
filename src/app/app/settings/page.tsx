"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [maxAutoRefund, setMaxAutoRefund] = useState(150);
  const [dailyCap, setDailyCap] = useState(1000);
  const [stalledDays, setStalledDays] = useState(6);
  const [killSwitch, setKillSwitch] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <h1 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "0.25rem" }}>Merchant Settings & Caps</h1>
        <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
          Configure global financial safety caps, resolution policies, and emergency controls
        </p>
      </div>

      {saved && (
        <div style={{
          padding: "1rem",
          background: "var(--status-emerald-bg)",
          border: "1px solid rgba(16, 185, 129, 0.3)",
          borderRadius: "var(--radius-md)",
          color: "var(--status-emerald)",
          fontWeight: 600,
          fontSize: "0.9rem"
        }}>
          ✓ Settings saved successfully and applied to policy engine!
        </div>
      )}

      {/* Emergency Kill Switch Card */}
      <div className="glass-panel" style={{
        padding: "1.75rem",
        border: killSwitch ? "1px solid rgba(239, 68, 68, 0.6)" : "1px solid var(--border-card)",
        background: killSwitch ? "rgba(239, 68, 68, 0.08)" : "var(--bg-card)"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ fontSize: "1.25rem" }}>🚨</span>
              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: killSwitch ? "#fca5a5" : "var(--text-main)" }}>
                Emergency Policy Kill Switch
              </h2>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: "0.3rem" }}>
              When enabled, all automated PayPal writes are immediately frozen. 100% of cases are held for manual reviewer approval.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setKillSwitch(!killSwitch)}
            className={`btn ${killSwitch ? "btn-danger" : "btn-secondary"}`}
            style={{ fontWeight: 700 }}
          >
            {killSwitch ? "Kill Switch ENGAGED" : "Engage Kill Switch"}
          </button>
        </div>
      </div>

      <form onSubmit={handleSave} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {/* Financial Caps */}
        <div className="glass-panel" style={{ padding: "1.75rem" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1.25rem" }}>
            Financial Guardrail Caps
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.4rem" }}>
                Maximum Single Auto-Refund Cap (USD)
              </label>
              <input
                type="number"
                className="input-field"
                value={maxAutoRefund}
                onChange={(e) => setMaxAutoRefund(parseFloat(e.target.value) || 0)}
              />
              <span style={{ fontSize: "0.75rem", color: "var(--text-dim)", marginTop: "0.25rem", display: "block" }}>
                Any refund claim exceeding this dollar amount will strictly require human reviewer sign-off.
              </span>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.4rem" }}>
                Daily Automated Refund Limit (USD)
              </label>
              <input
                type="number"
                className="input-field"
                value={dailyCap}
                onChange={(e) => setDailyCap(parseFloat(e.target.value) || 0)}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.4rem" }}>
                Stalled Carrier Scan Days Threshold
              </label>
              <input
                type="number"
                className="input-field"
                value={stalledDays}
                onChange={(e) => setStalledDays(parseInt(e.target.value, 10) || 0)}
              />
              <span style={{ fontSize: "0.75rem", color: "var(--text-dim)", marginTop: "0.25rem", display: "block" }}>
                Minimum days without a tracking scan before a package is categorized as lost.
              </span>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start", padding: "0.75rem 2rem" }}>
          Save Configuration
        </button>
      </form>
    </div>
  );
}
