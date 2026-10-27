"use client";

import { useState } from "react";
import Link from "next/link";
import { MOCK_CASES } from "@/lib/mock-data";

export default function CasesInboxPage() {
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState("");

  const filteredCases = MOCK_CASES.filter((c) => {
    if (filter === "approval" && c.state !== "PENDING_APPROVAL") return false;
    if (filter === "auto" && c.state !== "AUTO_EXECUTED") return false;
    if (filter === "dispute" && c.source !== "dispute") return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      return (
        c.id.toLowerCase().includes(q) ||
        c.customerName.toLowerCase().includes(q) ||
        c.orderNumber.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.75rem" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 800 }}>Cases Inbox</h1>
          <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
            Real-time feed of all incoming post-purchase complaints and dispute events
          </p>
        </div>
        <Link href="/c/demo-store/report" target="_blank" className="btn btn-secondary btn-sm">
          + Simulate New Customer Complaint ↗
        </Link>
      </div>

      {/* Filters & Search Bar */}
      <div className="glass-panel" style={{ padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          {[
            { id: "all", label: "All Cases" },
            { id: "approval", label: "Awaiting Approval (1)" },
            { id: "auto", label: "Auto-Resolved (1)" },
            { id: "dispute", label: "PayPal Disputes (1)" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className="btn btn-sm"
              style={{
                background: filter === tab.id ? "rgba(37, 99, 235, 0.2)" : "transparent",
                color: filter === tab.id ? "#fff" : "var(--text-muted)",
                border: filter === tab.id ? "1px solid rgba(37, 99, 235, 0.4)" : "1px solid transparent"
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div style={{ width: "260px" }}>
          <input
            type="text"
            className="input-field"
            placeholder="Search case, order, buyer..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ padding: "0.5rem 0.85rem", fontSize: "0.85rem" }}
          />
        </div>
      </div>

      {/* Cases Table */}
      <div className="glass-panel" style={{ overflow: "hidden" }}>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Case ID</th>
              <th>Customer & Order</th>
              <th>Problem Type</th>
              <th>Amount</th>
              <th>Risk Score</th>
              <th>Status</th>
              <th style={{ textAlign: "right" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCases.map((c) => (
              <tr key={c.id}>
                <td>
                  <div style={{ fontWeight: 700, fontFamily: "var(--font-mono)" }}>{c.id}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-dim)" }}>
                    {c.source === "dispute" ? "⚖️ PayPal Dispute" : "💬 Direct Complaint"}
                  </div>
                </td>
                <td>
                  <div style={{ fontWeight: 600 }}>{c.customerName}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                    {c.orderNumber}
                  </div>
                </td>
                <td>
                  <span style={{ textTransform: "capitalize", fontSize: "0.85rem" }}>
                    {c.type.replace(/_/g, " ")}
                  </span>
                </td>
                <td>
                  <div style={{ fontWeight: 700 }}>${c.amount.toFixed(2)}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-dim)" }}>{c.currency}</div>
                </td>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <span style={{
                      fontWeight: 700,
                      color: c.riskScore < 25 ? "var(--status-emerald)" : c.riskScore < 60 ? "var(--status-amber)" : "var(--status-rose)"
                    }}>
                      {c.riskScore}
                    </span>
                    <span style={{ fontSize: "0.75rem", color: "var(--text-dim)" }}>/ 100</span>
                  </div>
                </td>
                <td>
                  {c.state === "AUTO_EXECUTED" && <span className="badge badge-success">Auto-Resolved</span>}
                  {c.state === "PENDING_APPROVAL" && <span className="badge badge-warning">Needs Approval</span>}
                  {c.state === "DECIDED" && <span className="badge badge-danger">Dispute Open</span>}
                </td>
                <td style={{ textAlign: "right" }}>
                  <Link href={`/app/cases/${c.id}`} className="btn btn-secondary btn-sm">
                    Open Case Detail →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
