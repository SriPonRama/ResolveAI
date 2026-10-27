"use client";

import { useState } from "react";

export function AppHeader() {
  const [killSwitchActive, setKillSwitchActive] = useState(false);
  const [mode, setMode] = useState<"auto" | "approval" | "shadow">("auto");

  return (
    <header style={{
      height: "64px",
      background: "rgba(12, 16, 25, 0.8)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border-subtle)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 2rem",
      position: "sticky",
      top: 0,
      zIndex: 40
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
        <span className="simulated-badge">Simulated PayPal</span>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          background: "rgba(255, 255, 255, 0.04)",
          padding: "0.25rem 0.65rem",
          borderRadius: "9999px",
          border: "1px solid var(--border-subtle)",
          fontSize: "0.75rem",
          color: "var(--text-muted)"
        }}>
          <span>Policy Mode:</span>
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value as any)}
            style={{
              background: "transparent",
              border: "none",
              color: mode === "auto" ? "var(--status-emerald)" : mode === "approval" ? "var(--status-amber)" : "var(--primary-cyan)",
              fontWeight: 700,
              cursor: "pointer",
              outline: "none",
              fontSize: "0.75rem"
            }}
          >
            <option value="auto" style={{ background: "#111724" }}>Auto (Within Rules)</option>
            <option value="approval" style={{ background: "#111724" }}>Require Approval (All)</option>
            <option value="shadow" style={{ background: "#111724" }}>Shadow Mode (Recommend Only)</option>
          </select>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {/* Emergency Kill Switch */}
        <button
          onClick={() => setKillSwitchActive(!killSwitchActive)}
          className={`btn btn-sm ${killSwitchActive ? "btn-danger" : "btn-secondary"}`}
          style={{
            borderColor: killSwitchActive ? "#ef4444" : "rgba(244, 63, 94, 0.3)",
            background: killSwitchActive ? "rgba(239, 68, 68, 0.3)" : "rgba(244, 63, 94, 0.08)",
            color: killSwitchActive ? "#fff" : "#fb7185",
            gap: "0.4rem"
          }}
          title="Emergency Kill Switch: instantly stops all automated PayPal executions"
        >
          <span style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: killSwitchActive ? "#ef4444" : "#fb7185",
            boxShadow: killSwitchActive ? "0 0 10px #ef4444" : "none"
          }}></span>
          <span>{killSwitchActive ? "KILL SWITCH: ACTIVE" : "Kill Switch: Off"}</span>
        </button>

        {/* User Persona */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "0.6rem",
          padding: "0.3rem 0.6rem",
          borderRadius: "var(--radius-sm)",
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px solid var(--border-subtle)"
        }}>
          <div style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            background: "var(--accent-gradient)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.75rem",
            fontWeight: 700,
            color: "#fff"
          }}>SJ</div>
          <div style={{ lineHeight: 1.2 }}>
            <div style={{ fontSize: "0.8rem", fontWeight: 700 }}>Sarah J.</div>
            <div style={{ fontSize: "0.7rem", color: "var(--text-dim)" }}>Owner</div>
          </div>
        </div>
      </div>
    </header>
  );
}
