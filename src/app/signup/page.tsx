"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  const [businessName, setBusinessName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

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
      background: "radial-gradient(circle at 50% 20%, rgba(6, 182, 212, 0.15) 0%, transparent 60%), var(--bg-main)"
    }}>
      <div className="glass-panel" style={{ width: "100%", maxWidth: "460px", padding: "2.5rem" }}>
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
            <span className="simulated-badge">New Merchant Setup</span>
          </div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.25rem" }}>Create your account</h1>
          <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>Start resolving complaints before they become disputes</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          <div>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.4rem", color: "var(--text-muted)" }}>
              Business Name
            </label>
            <input
              type="text"
              required
              className="input-field"
              placeholder="Apex Merchants LLC"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.4rem", color: "var(--text-muted)" }}>
              Your Full Name
            </label>
            <input
              type="text"
              required
              className="input-field"
              placeholder="Jane Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.4rem", color: "var(--text-muted)" }}>
              Work Email
            </label>
            <input
              type="email"
              required
              className="input-field"
              placeholder="jane@apexmerchants.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.4rem", color: "var(--text-muted)" }}>
              Password
            </label>
            <input
              type="password"
              required
              className="input-field"
              placeholder="Min. 8 characters"
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
            {loading ? "Creating Tenant Workspace..." : "Create Merchant Account →"}
          </button>
        </form>

        <div style={{ textAlign: "center", marginTop: "1.5rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          Already have an account?{" "}
          <Link href="/login" style={{ color: "var(--primary-cyan)", fontWeight: 600 }}>
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
