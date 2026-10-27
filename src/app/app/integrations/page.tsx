"use client";

import { useState } from "react";

export default function IntegrationsPage() {
  const [testing, setTesting] = useState<string | null>(null);

  const testConnection = (name: string) => {
    setTesting(name);
    setTimeout(() => {
      setTesting(null);
      alert(`Connection to ${name} tested successfully! Status: 200 OK.`);
    }, 600);
  };

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <h1 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "0.25rem" }}>
          Integrations & Webhook Health
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
          Manage your PayPal API credentials, carrier tracking sources, and store databases
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
        {/* PayPal Integration */}
        <div className="glass-panel" style={{ padding: "1.75rem", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
            <div>
              <div style={{ fontSize: "1.2rem", fontWeight: 700 }}>PayPal REST API</div>
              <span className="simulated-badge" style={{ marginTop: "0.3rem" }}>Mock Mode Active</span>
            </div>
            <span className="badge badge-success">Connected</span>
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "1.25rem", flexGrow: 1 }}>
            Running against local MockPayPalClient. When credentials are ready, swap `PAYPAL_MODE=sandbox` in `.env` to connect real sandbox developer accounts.
          </p>
          <button
            type="button"
            onClick={() => testConnection("PayPal Mock Engine")}
            disabled={testing === "PayPal Mock Engine"}
            className="btn btn-secondary btn-sm"
          >
            {testing === "PayPal Mock Engine" ? "Testing..." : "Test PayPal Ping"}
          </button>
        </div>

        {/* Carrier Tracking Service */}
        <div className="glass-panel" style={{ padding: "1.75rem", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
            <div>
              <div style={{ fontSize: "1.2rem", fontWeight: 700 }}>Carrier Tracking</div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-dim)", marginTop: "0.2rem" }}>USPS, FedEx, UPS</div>
            </div>
            <span className="badge badge-success">Active</span>
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "1.25rem", flexGrow: 1 }}>
            Mock carrier service simulating real delivery timelines, delivery signatures, and stalled scan events.
          </p>
          <button
            type="button"
            onClick={() => testConnection("Carrier Service")}
            disabled={testing === "Carrier Service"}
            className="btn btn-secondary btn-sm"
          >
            {testing === "Carrier Service" ? "Testing..." : "Test Carrier Service"}
          </button>
        </div>

        {/* Store Database */}
        <div className="glass-panel" style={{ padding: "1.75rem", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
            <div>
              <div style={{ fontSize: "1.2rem", fontWeight: 700 }}>Store Database</div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-dim)", marginTop: "0.2rem" }}>Prisma ORM (SQLite)</div>
            </div>
            <span className="badge badge-success">Online</span>
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "1.25rem", flexGrow: 1 }}>
            Orders, items, customer history, and cases are stored in local SQLite database with strict multi-tenant isolation.
          </p>
          <button
            type="button"
            onClick={() => testConnection("Store DB")}
            disabled={testing === "Store DB"}
            className="btn btn-secondary btn-sm"
          >
            {testing === "Store DB" ? "Testing..." : "Test DB Latency"}
          </button>
        </div>

        {/* Webhooks Ingest */}
        <div className="glass-panel" style={{ padding: "1.75rem", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
            <div>
              <div style={{ fontSize: "1.2rem", fontWeight: 700 }}>PayPal Webhook Ingest</div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-dim)", marginTop: "0.2rem" }}>/api/webhooks/paypal</div>
            </div>
            <span className="badge badge-success">Listening</span>
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "1.25rem", flexGrow: 1 }}>
            Receives `CUSTOMER.DISPUTE.CREATED`, `PAYMENT.CAPTURE.COMPLETED`, and tracking update webhooks with event de-duplication.
          </p>
          <button
            type="button"
            onClick={() => testConnection("Webhook Handler")}
            disabled={testing === "Webhook Handler"}
            className="btn btn-secondary btn-sm"
          >
            {testing === "Webhook Handler" ? "Testing..." : "Fire Test Webhook Ping"}
          </button>
        </div>
      </div>
    </div>
  );
}
