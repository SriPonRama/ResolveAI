"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      background: "rgba(7, 9, 14, 0.8)",
      borderBottom: "1px solid var(--border-subtle)",
      padding: "0.875rem 2rem",
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "var(--accent-gradient)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "1.1rem",
              color: "#fff"
            }}>R</span>
            <span style={{ fontSize: "1.25rem", fontWeight: 800, letterSpacing: "-0.02em" }}>ResolveAI</span>
          </Link>
          <span className="simulated-badge">Simulated PayPal</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.9rem", fontWeight: 500 }}>
            <Link href="/how-it-works" style={{ color: pathname === "/how-it-works" ? "var(--primary-cyan)" : "var(--text-muted)" }}>
              How It Works
            </Link>
            <Link href="/security" style={{ color: pathname === "/security" ? "var(--primary-cyan)" : "var(--text-muted)" }}>
              Security & Guardrails
            </Link>
            <Link href="/admin/simulator" style={{ color: pathname === "/admin/simulator" ? "#f59e0b" : "var(--text-muted)" }}>
              ⚡ Demo Simulator
            </Link>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <Link href="/login" className="btn btn-secondary btn-sm">
              Sign In
            </Link>
            <Link href="/app" className="btn btn-primary btn-sm">
              Enter Merchant Portal →
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
