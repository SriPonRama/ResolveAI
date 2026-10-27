"use client";

import { useState } from "react";

export default function PolicyBuilderPage() {
  const [naturalLanguageRule, setNaturalLanguageRule] = useState(
    "If a lost package has no carrier scan for more than 7 days, and the order is under $100, automatically refund the buyer."
  );
  const [compiledJson, setCompiledJson] = useState(`{
  "rule_id": "RULE-AUTO-LOST-07D",
  "condition": {
    "and": [
      { "field": "carrier.days_since_last_scan", "operator": ">=", "value": 7 },
      { "field": "order.amount_usd", "operator": "<=", "value": 100 },
      { "field": "customer.refund_count_90d", "operator": "==", "value": 0 }
    ]
  },
  "action": "AUTO_EXECUTE_REFUND",
  "fallback": "REQUIRE_APPROVAL"
}`);

  const [backtestRan, setBacktestRan] = useState(false);

  const handleCompile = () => {
    // Simulate compilation
    setBacktestRan(true);
  };

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.25rem" }}>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 800 }}>Policy Engine & Builder</h1>
          <span className="badge badge-success">Version 1.2 (Active)</span>
        </div>
        <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
          Define dispute and refund policies in plain English. The compiler turns them into deterministic code schemas.
        </p>
      </div>

      {/* Compiler Studio */}
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "1.75rem" }}>
        {/* Left: Plain English Prompt */}
        <div className="glass-panel" style={{ padding: "1.75rem", display: "flex", flexDirection: "column" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem" }}>
            1. Describe Rule in Plain English
          </h2>
          <textarea
            rows={6}
            className="input-field"
            value={naturalLanguageRule}
            onChange={(e) => setNaturalLanguageRule(e.target.value)}
            style={{ marginBottom: "1rem", lineHeight: 1.5 }}
          />

          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
            <span style={{ fontSize: "0.75rem", color: "var(--text-dim)", alignSelf: "center" }}>Templates:</span>
            {[
              "Lost Package Under $150",
              "Damaged Item Hold for Review",
              "Block Serial Refund (>2 in 90d)"
            ].map((tmpl, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setNaturalLanguageRule(tmpl)}
                className="btn btn-secondary btn-sm"
                style={{ fontSize: "0.75rem" }}
              >
                {tmpl}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={handleCompile}
            className="btn btn-primary"
            style={{ marginTop: "auto" }}
          >
            ⚡ Compile to Pure-Code Rule Schema
          </button>
        </div>

        {/* Right: Compiled JSON Output */}
        <div className="glass-panel" style={{ padding: "1.75rem", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700 }}>2. Compiled Rule Schema</h2>
            <span style={{ fontSize: "0.75rem", color: "var(--primary-cyan)", fontFamily: "var(--font-mono)" }}>
              Deterministic JSON
            </span>
          </div>

          <pre style={{
            background: "rgba(0,0,0,0.4)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-md)",
            padding: "1rem",
            fontSize: "0.8rem",
            color: "#38bdf8",
            fontFamily: "var(--font-mono)",
            overflowX: "auto",
            flexGrow: 1,
            marginBottom: "1rem"
          }}>
            {compiledJson}
          </pre>

          <button type="button" className="btn btn-secondary btn-sm">
            Publish as Version 1.3
          </button>
        </div>
      </div>

      {/* Backtest Section */}
      <div className="glass-panel" style={{ padding: "1.75rem" }}>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          Historical Backtest Simulator
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "1.25rem" }}>
          Simulates how this policy would have executed on the last 50 historical cases
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
          <div style={{ background: "rgba(16, 185, 129, 0.08)", border: "1px solid rgba(16, 185, 129, 0.2)", padding: "1rem", borderRadius: "var(--radius-md)" }}>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Would Auto-Execute</div>
            <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--status-emerald)" }}>34 (68%)</div>
          </div>
          <div style={{ background: "rgba(245, 158, 11, 0.08)", border: "1px solid rgba(245, 158, 11, 0.2)", padding: "1rem", borderRadius: "var(--radius-md)" }}>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Would Hold for Approval</div>
            <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--status-amber)" }}>14 (28%)</div>
          </div>
          <div style={{ background: "rgba(244, 63, 94, 0.08)", border: "1px solid rgba(244, 63, 94, 0.2)", padding: "1rem", borderRadius: "var(--radius-md)" }}>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Would Block / Deny</div>
            <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--status-rose)" }}>2 (4%)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
