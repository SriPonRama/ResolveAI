"use client";

import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      background: "var(--bg-main)"
    }}>
      <div className="glass-panel" style={{ width: "100%", maxWidth: "440px", padding: "2.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Reset your password</h1>
          <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
            Enter your work email and we will send a password reset magic link.
          </p>
        </div>

        {submitted ? (
          <div style={{ padding: "1.25rem", background: "var(--status-emerald-bg)", border: "1px solid rgba(16, 185, 129, 0.3)", borderRadius: "var(--radius-md)", textAlign: "center", marginBottom: "1.5rem" }}>
            <div style={{ fontWeight: 700, color: "var(--status-emerald)", marginBottom: "0.25rem" }}>Reset Link Dispatched</div>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              In mock mode, the reset token was logged to console. Check server logs or return to login.
            </p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.4rem", color: "var(--text-muted)" }}>
                Email Address
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

            <button type="submit" className="btn btn-primary" style={{ width: "100%", padding: "0.85rem" }}>
              Send Password Reset Link
            </button>
          </form>
        )}

        <div style={{ textAlign: "center", marginTop: "1.5rem", fontSize: "0.85rem" }}>
          <Link href="/login" style={{ color: "var(--text-muted)" }}>
            ← Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
