"use client";

import { useState } from "react";

export default function TeamPage() {
  const [members, setMembers] = useState([
    { name: "Sarah Jenkins", email: "owner@apexmerchants.demo", role: "Owner", status: "Active" },
    { name: "Alex Rivera", email: "reviewer@apexmerchants.demo", role: "Reviewer", status: "Active" },
    { name: "Jordan Lee", email: "jordan@apexmerchants.demo", role: "Viewer", status: "Active" }
  ]);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState("Reviewer");

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteEmail) return;
    setMembers([
      ...members,
      { name: inviteEmail.split("@")[0], email: inviteEmail, role: inviteRole, status: "Invited" }
    ]);
    setInviteEmail("");
    alert(`Invitation sent to ${inviteEmail}!`);
  };

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <h1 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "0.25rem" }}>Team & Access Roles</h1>
        <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
          Manage merchant reviewers and owners. Roles are strictly enforced on server endpoints.
        </p>
      </div>

      {/* Invite Member Box */}
      <div className="glass-panel" style={{ padding: "1.75rem" }}>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem" }}>Invite New Member</h2>
        <form onSubmit={handleInvite} style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <input
            type="email"
            required
            className="input-field"
            placeholder="colleague@apexmerchants.com"
            value={inviteEmail}
            onChange={(e) => setInviteEmail(e.target.value)}
            style={{ flex: 1, minWidth: "220px" }}
          />
          <select
            className="input-field"
            value={inviteRole}
            onChange={(e) => setInviteRole(e.target.value)}
            style={{ width: "160px" }}
          >
            <option value="Reviewer">Reviewer (Approve/Edit)</option>
            <option value="Viewer">Viewer (Read-Only)</option>
            <option value="Owner">Owner (Full Access)</option>
          </select>
          <button type="submit" className="btn btn-primary">
            Send Invite
          </button>
        </form>
      </div>

      {/* Team Table */}
      <div className="glass-panel" style={{ overflow: "hidden" }}>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Member</th>
              <th>Role</th>
              <th>Status</th>
              <th>Permissions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m, i) => (
              <tr key={i}>
                <td>
                  <div style={{ fontWeight: 600 }}>{m.name}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{m.email}</div>
                </td>
                <td>
                  <span className={`badge ${m.role === "Owner" ? "badge-success" : m.role === "Reviewer" ? "badge-warning" : "badge-neutral"}`}>
                    {m.role}
                  </span>
                </td>
                <td>
                  <span style={{ fontSize: "0.85rem", color: m.status === "Active" ? "var(--status-emerald)" : "var(--status-amber)" }}>
                    ● {m.status}
                  </span>
                </td>
                <td style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  {m.role === "Owner" && "All operations including policy edits and kill switch"}
                  {m.role === "Reviewer" && "Case approval, evidence submission, message editing"}
                  {m.role === "Viewer" && "Read-only access to cases and analytics"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
