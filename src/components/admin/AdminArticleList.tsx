"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { AdminArticle } from "@/lib/articles";

export default function AdminArticleList({
  initialArticles,
}: {
  initialArticles: AdminArticle[];
}) {
  const router = useRouter();
  const [articles, setArticles] = useState(initialArticles);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState("");

  async function handleDelete(id: string, title: string) {
    if (!window.confirm(`Delete “${title}”? This cannot be undone.`)) return;

    setDeletingId(id);
    setError("");

    try {
      const res = await fetch(`/api/admin/articles/${id}`, { method: "DELETE" });
      if (!res.ok) {
        const data = (await res.json()) as { error?: string };
        setError(data.error ?? "Delete failed.");
        return;
      }

      setArticles((current) => current.filter((a) => a.id !== id));
      router.refresh();
    } catch {
      setError("Network error while deleting.");
    } finally {
      setDeletingId(null);
    }
  }

  if (articles.length === 0) {
    return (
      <div className="admin-empty">
        <p>No articles in MongoDB yet.</p>
        <Link href="/admin/articles/new" className="admin-btn admin-btn-primary">
          Publish your first article
        </Link>
      </div>
    );
  }

  return (
    <div>
      {error && <p className="admin-error mb-4">{error}</p>}

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article.id}>
                <td>
                  <div className="admin-table-title">{article.title}</div>
                  <div className="admin-table-slug">/blog/{article.slug}</div>
                </td>
                <td>{article.category}</td>
                <td>{article.date}</td>
                <td>
                  <div className="admin-row-actions">
                    <Link
                      href={`/blog/${article.slug}`}
                      className="admin-btn admin-btn-ghost"
                      target="_blank"
                    >
                      View
                    </Link>
                    <button
                      type="button"
                      className="admin-btn admin-btn-danger"
                      disabled={deletingId === article.id}
                      onClick={() => handleDelete(article.id, article.title)}
                    >
                      {deletingId === article.id ? "Deleting…" : "Delete"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
