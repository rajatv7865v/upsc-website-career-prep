import AdminNav from "@/components/admin/AdminNav";
import "./admin.css";

export const metadata = {
  title: "Admin | Career Prepp",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-root">
      <AdminNav />
      <main className="admin-main">{children}</main>
    </div>
  );
}
