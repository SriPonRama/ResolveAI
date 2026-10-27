import { AppSidebar } from "@/components/layout/AppSidebar";
import { AppHeader } from "@/components/layout/AppHeader";

export default function MerchantAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "var(--bg-main)" }}>
      <AppSidebar />
      <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <AppHeader />
        <main style={{ padding: "2rem", flexGrow: 1, overflowY: "auto" }}>
          {children}
        </main>
      </div>
    </div>
  );
}
