"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleQuickLogin = (role: string, demoEmail: string) => {
    setEmail(demoEmail);
    setPassword("demo-password-123");
    setLoading(true);
    setTimeout(() => {
      router.push("/app");
    }, 600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push("/app");
    }, 600);
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      background: "radial-gradient(circle at 50% 20%, rgba(37, 99, 235, 0.15) 0%, transparent 60%), var(--bg-main)"
    }}>
      <div className="glass-panel" style={{ width: "100%", maxWidth: "440px", padding: "2.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
            <span style={{
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              background: "var(--accent-gradient)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "1.2rem",
              color: "#fff"
            }}>R</span>
            <span style={{ fontSize: "1.5rem", fontWeight: 800 }}>ResolveAI</span>
          </Link>
          <div style={{ marginBottom: "0.75rem" }}>
            <span className="simulated-badge">Mock Mode</span>
          </div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.25rem" }}>Welcome back</h1>
          <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>Sign in to manage your dispute resolution policy</p>
        </div>

        {/* 1-Click Demo Personas */}
        <div style={{ marginBottom: "1.75rem", padding: "1rem", background: "rgba(255,255,255,0.03)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--primary-cyan)", marginBottom: "0.5rem" }}>
            ⚡ 1-Click Demo Logins
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
            <button
              type="button"
              onClick={() => handleQuickLogin("Owner", "owner@apexmerchants.demo")}
              className="btn btn-secondary btn-sm"
              style={{ fontSize: "0.75rem", justifyContent: "flex-start" }}
            >
              👑 Store Owner
            </button>
            <button
              type="button"
              onClick={() => handleQuickLogin("Reviewer", "reviewer@apexmerchants.demo")}
              className="btn btn-secondary btn-sm"
              style={{ fontSize: "0.75rem", justifyContent: "flex-start" }}
            >
              🔍 Case Reviewer
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <div>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.4rem", color: "var(--text-muted)" }}>
              Work Email
            </label>
            <input
              type="email"
              required
              className="input-field"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
              <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)" }}>
                Password
              </label>
              <Link href="/forgot-password" style={{ fontSize: "0.8rem", color: "var(--primary-cyan)" }}>
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              required
              className="input-field"
              placeholder="••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary"
            style={{ width: "100%", padding: "0.85rem", marginTop: "0.5rem" }}
          >
            {loading ? "Authenticating..." : "Sign In to Merchant Portal →"}
          </button>
        </form>

        <div style={{ textAlign: "center", marginTop: "1.5rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          Don&apos;t have an account yet?{" "}
          <Link href="/signup" style={{ color: "var(--primary-cyan)", fontWeight: 600 }}>
            Create one
          </Link>
        </div>
      </div>
    </div>
  );
}
