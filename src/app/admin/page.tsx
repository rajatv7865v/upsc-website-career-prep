import Link from "next/link";
import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/auth";
import { listAdminArticles } from "@/lib/articles";
import AdminArticleList from "@/components/admin/AdminArticleList";

export default async function AdminDashboardPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  const articles = await listAdminArticles();

  return (
    <div className="admin-page">
      <div className="admin-page-head">
        <div>
          <p className="admin-kicker">Dashboard</p>
          <h1 className="admin-title">Articles</h1>
          <p className="admin-subtitle">
            {articles.length} article{articles.length === 1 ? "" : "s"} stored in
            MongoDB. The public site reads from the same database.
          </p>
        </div>
        <Link href="/admin/articles/new" className="admin-btn admin-btn-primary">
          + New article
        </Link>
      </div>

      <AdminArticleList initialArticles={articles} />
    </div>
  );
}
