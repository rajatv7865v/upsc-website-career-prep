import Link from "next/link";
import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/auth";
import AdminArticleForm from "@/components/admin/AdminArticleForm";

export default async function AdminNewArticlePage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  return (
    <div className="admin-page">
      <div className="admin-page-head">
        <div>
          <p className="admin-kicker">Publish</p>
          <h1 className="admin-title">New article</h1>
          <p className="admin-subtitle">
            Write with the rich text editor. The article goes live on the home page and blog after publishing.
          </p>
        </div>
        <Link href="/admin" className="admin-btn admin-btn-ghost">
          ← Back to list
        </Link>
      </div>

      <div className="admin-card">
        <AdminArticleForm />
      </div>
    </div>
  );
}
