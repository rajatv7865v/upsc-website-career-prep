"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  if (pathname === "/admin/login") return null;

  return (
    <header className="admin-nav">
      <div className="admin-nav-inner">
        <div className="admin-nav-brand">
          <Link href="/admin">Career Prepp Admin</Link>
        </div>
        <nav className="admin-nav-links">
          <Link
            href="/admin"
            className={pathname === "/admin" ? "is-active" : ""}
          >
            Articles
          </Link>
          <Link
            href="/admin/articles/new"
            className={pathname === "/admin/articles/new" ? "is-active" : ""}
          >
            New article
          </Link>
          <Link href="/" target="_blank">
            View site
          </Link>
          <button type="button" onClick={() => void logout()} className="admin-nav-logout">
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
}
