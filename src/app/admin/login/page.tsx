import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/auth";
import AdminLoginForm from "@/components/admin/AdminLoginForm";

export default async function AdminLoginPage() {
  if (await isAdminAuthenticated()) {
    redirect("/admin");
  }

  return (
    <div className="admin-page admin-page-narrow">
      <div className="admin-card">
        <p className="admin-kicker">Career Prepp</p>
        <h1 className="admin-title">Admin sign in</h1>
        <p className="admin-subtitle">
          Manage articles stored in MongoDB — publish, list, and delete.
        </p>
        <AdminLoginForm />
      </div>
    </div>
  );
}
