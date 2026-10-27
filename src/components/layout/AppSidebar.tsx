"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppSidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/app", label: "Dashboard", icon: "📊" },
    { href: "/app/cases", label: "Cases Inbox", icon: "📁", badge: "3" },
    { href: "/app/approvals", label: "Approvals Queue", icon: "⏳", badge: "1", badgeColor: "#f59e0b" },
    { href: "/app/disputes", label: "PayPal Disputes", icon: "⚖️", badge: "2", badgeColor: "#ef4444" },
    { href: "/app/policies", label: "Policy Engine", icon: "📜" },
    { href: "/app/analytics", label: "Savings & Analytics", icon: "📈" },
    { href: "/app/audit", label: "Audit Log", icon: "📋" },
    { href: "/app/integrations", label: "Integrations", icon: "🔌" },
    { href: "/app/team", label: "Team & Roles", icon: "👥" },
    { href: "/app/settings", label: "Settings", icon: "⚙️" },
  ];

  return (
    <aside style={{
      width: "260px",
      background: "var(--bg-surface)",
      borderRight: "1px solid var(--border-subtle)",
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      position: "sticky",
      top: 0,
      flexShrink: 0
    }}>
      {/* Brand Header */}
      <div style={{ padding: "1.5rem 1.25rem", borderBottom: "1px solid var(--border-subtle)" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{
            width: "30px",
            height: "30px",
            borderRadius: "6px",
            background: "var(--accent-gradient)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 800,
            fontSize: "1rem",
            color: "#fff"
          }}>R</span>
          <span style={{ fontSize: "1.15rem", fontWeight: 800 }}>ResolveAI</span>
        </Link>
        <div style={{ marginTop: "0.75rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600 }}>Apex Merchants</span>
          <span className="badge badge-success" style={{ fontSize: "0.65rem", padding: "0.15rem 0.4rem" }}>Active</span>
        </div>
      </div>

      {/* Nav Items */}
      <nav style={{ padding: "1rem 0.75rem", display: "flex", flexDirection: "column", gap: "0.25rem", flexGrow: 1, overflowY: "auto" }}>
        {links.map((link) => {
          const isActive = pathname === link.href || (link.href !== "/app" && pathname.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.6rem 0.75rem",
                borderRadius: "var(--radius-sm)",
                fontSize: "0.85rem",
                fontWeight: isActive ? 600 : 500,
                color: isActive ? "#ffffff" : "var(--text-muted)",
                background: isActive ? "rgba(37, 99, 235, 0.15)" : "transparent",
                border: isActive ? "1px solid rgba(37, 99, 235, 0.3)" : "1px solid transparent",
                transition: "all 0.15s ease"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </div>
              {link.badge && (
                <span style={{
                  padding: "0.1rem 0.45rem",
                  borderRadius: "9999px",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  background: link.badgeColor ? `${link.badgeColor}22` : "rgba(255, 255, 255, 0.1)",
                  color: link.badgeColor || "var(--text-muted)",
                  border: `1px solid ${link.badgeColor ? `${link.badgeColor}44` : "transparent"}`
                }}>
                  {link.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Tool Link */}
      <div style={{ padding: "1rem 0.75rem", borderTop: "1px solid var(--border-subtle)", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <Link
          href="/admin/simulator"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.6rem 0.75rem",
            borderRadius: "var(--radius-sm)",
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "#fbbf24",
            background: "rgba(245, 158, 11, 0.1)",
            border: "1px solid rgba(245, 158, 11, 0.25)"
          }}
        >
          <span>⚡</span>
          <span>Simulator Control</span>
        </Link>
        <Link
          href="/login"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.5rem 0.75rem",
            fontSize: "0.8rem",
            color: "var(--text-dim)"
          }}
        >
          <span>🚪</span>
          <span>Sign Out</span>
        </Link>
      </div>
    </aside>
  );
}
