"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type NavChild = {
  href: string;
  label: string;
  id: string;
  /** Optional submenu group heading (e.g. Syllabus / Strategy). */
  group?: string;
};

type NavLink = {
  href: string;
  label: string;
  id: string;
  overviewLabel?: string;
  children?: NavChild[];
};

const links: NavLink[] = [
  { href: "/", label: "Home", id: "home" },
  { href: "/about", label: "About Us", id: "about" },
  {
    href: "/geography",
    label: "Geography",
    id: "geography",
    overviewLabel: "All Geography",
    children: [
      { href: "/geography?stage=Prelims", label: "Prelims", id: "geo-prelims", group: "Exam Stages" },
      { href: "/geography?stage=Mains", label: "Mains", id: "geo-mains", group: "Exam Stages" },
    ],
  },
  {
    href: "/environment",
    label: "Environment",
    id: "environment",
    overviewLabel: "All Environment",
    children: [
      { href: "/environment?stage=Prelims", label: "Prelims", id: "env-prelims", group: "Exam Stages" },
      { href: "/environment?stage=Mains", label: "Mains", id: "env-mains", group: "Exam Stages" },
    ],
  },
  {
    href: "/science-tech",
    label: "Science & Tech",
    id: "science-tech",
    overviewLabel: "All Science & Technology",
    children: [
      {
        href: "/science-tech/biotechnology",
        label: "Biotechnology & Bioinformatics",
        id: "st-biotech",
        group: "Biotechnology",
      },
      {
        href: "/science-tech/biotechnology#recombinant-dna",
        label: "Recombinant DNA & Gene Cloning",
        id: "st-dna",
        group: "Biotechnology",
      },
      {
        href: "/science-tech/biotechnology#bioinformatics",
        label: "Bioinformatics Interdisciplinary Hub",
        id: "st-bioinformatics",
        group: "Biotechnology",
      },
      {
        href: "/science-tech/nanotechnology",
        label: "Nanotechnology & 2D Materials",
        id: "st-nanotech",
        group: "Nanotechnology",
      },
      {
        href: "/science-tech/nanotechnology#materials",
        label: "Graphene, CNTs & MXenes",
        id: "st-materials",
        group: "Nanotechnology",
      },
      {
        href: "/science-tech/nanotechnology#pyqs",
        label: "Nanotech UPSC PYQs (2014-2022)",
        id: "st-nanotech-pyqs",
        group: "Nanotechnology",
      },
      {
        href: "/science-tech?stage=Prelims",
        label: "Prelims High-Yield Topics",
        id: "st-prelims",
        group: "Exam Stages",
      },
      {
        href: "/science-tech?stage=Mains",
        label: "Mains (GS Paper 3)",
        id: "st-mains",
        group: "Exam Stages",
      },
    ],
  },
  { href: "/blog", label: "Blog", id: "blog" },
  { href: "/contact", label: "Contact Us", id: "contact" },
];

type HeaderProps = {
  forceSolid?: boolean;
};

export default function Header({ forceSolid = false }: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpenId, setMobileOpenId] = useState<string | null>(null);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const resolveActive = () => {
      if (pathname === "/about") return "about";
      if (pathname === "/contact") return "contact";
      if (pathname?.startsWith("/blog")) return "blog";
      if (pathname?.startsWith("/geography")) return "geography";
      if (pathname?.startsWith("/environment")) return "environment";
      if (pathname?.startsWith("/science-tech")) return "science-tech";
      return "home";
    };
    setActive(resolveActive());
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);

      if (pathname !== "/") return;

      setActive("home");
      return;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = forceSolid || scrolled || open;
  const onLight = solid;

  function linkActive(id: string) {
    if (id === "about") return pathname === "/about";
    if (id === "contact") return pathname === "/contact";
    if (id === "blog") return Boolean(pathname?.startsWith("/blog"));
    if (id === "geography") return Boolean(pathname?.startsWith("/geography"));
    if (id === "environment") return Boolean(pathname?.startsWith("/environment"));
    if (id === "science-tech") return Boolean(pathname?.startsWith("/science-tech"));
    if (id === "home") return pathname === "/" && active === "home";
    return pathname === "/" && active === id;
  }

  const navColor = (isActive: boolean) =>
    onLight
      ? isActive
        ? "text-blue"
        : "text-ink hover:text-blue"
      : isActive
        ? "text-blue-soft"
        : "text-white/80 hover:text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-[background-color,border-color,box-shadow,backdrop-filter,color] duration-300 ${onLight
        ? "border-b border-line bg-white/95 shadow-[0_8px_30px_rgba(10,10,10,0.06)] backdrop-blur-md"
        : "border-b border-white/10 bg-black/55 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-md"
        }`}
    >
      <div
        className={`absolute inset-x-0 top-0 h-[2px] origin-center bg-gradient-to-r from-transparent via-blue to-transparent transition-transform duration-500 ${onLight ? "scale-x-100" : "scale-x-100 opacity-80"
          }`}
        aria-hidden
      />

      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 sm:h-[4.75rem] lg:px-8">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="header-logo group inline-flex shrink-0 items-center gap-2.5"
        >
          <span
            className="header-logo-mark h-2 w-2 shrink-0 bg-blue"
            aria-hidden
          />
          <span
            className={`text-[1.05rem] font-semibold tracking-tight transition-colors duration-300 sm:text-lg ${onLight ? "text-black" : "text-white"
              }`}
          >
            Career{" "}
            <span
              className={`transition-colors duration-300 ${onLight ? "text-blue" : "text-blue-soft"
                }`}
            >
              Prepp
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          <ul className="flex items-center">
            {links.map((link) => {
              const isActive = linkActive(link.id);
              const hasChildren = Boolean(link.children?.length);

              if (hasChildren) {
                return (
                  <li key={link.id} className="group/menu relative">
                    <Link
                      href={link.href}
                      className={`header-nav-link relative inline-flex items-center gap-1 px-2.5 py-2 text-[12px] font-medium tracking-wide transition-all duration-300 xl:px-3 xl:text-[13px] ${navColor(isActive)}`}
                    >
                      <span>{link.label}</span>
                      <svg
                        viewBox="0 0 12 12"
                        className="h-2.5 w-2.5 transition-transform duration-200 group-hover/menu:rotate-180"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M2.5 4.5 6 8l3.5-3.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        className={`absolute inset-x-2.5 bottom-1 h-[1.5px] origin-center bg-blue transition-transform duration-300 xl:inset-x-3 ${isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover/menu:scale-x-100"
                          }`}
                        aria-hidden
                      />
                    </Link>

                    <div
                      role="menu"
                      className="header-submenu pointer-events-none invisible absolute left-0 top-full z-50 min-w-[14rem] -translate-y-1 pt-2 opacity-0 transition-all duration-200 group-hover/menu:pointer-events-auto group-hover/menu:visible group-hover/menu:translate-y-0 group-hover/menu:opacity-100 group-focus-within/menu:pointer-events-auto group-focus-within/menu:visible group-focus-within/menu:translate-y-0 group-focus-within/menu:opacity-100"
                    >
                      <div className="max-h-[70vh] overflow-y-auto border border-line bg-white py-2 shadow-[0_16px_40px_rgba(10,10,10,0.12)]">
                        <Link
                          href={link.href}
                          role="menuitem"
                          className="block px-4 py-2.5 text-[13px] font-medium text-ink transition-colors hover:bg-surface hover:text-blue"
                        >
                          {link.overviewLabel ?? link.label}
                        </Link>
                        <div className="my-1 border-t border-line" />
                        {link.children!.map((child, idx) => {
                          const prevGroup = link.children![idx - 1]?.group;
                          const showGroup =
                            child.group && child.group !== prevGroup;
                          return (
                            <div key={child.id}>
                              {showGroup && (
                                <p className="px-4 pb-1 pt-3 text-[10px] font-semibold tracking-[0.16em] text-muted uppercase">
                                  {child.group}
                                </p>
                              )}
                              <Link
                                href={child.href}
                                role="menuitem"
                                className="block px-4 py-2.5 text-[13px] font-medium text-ink transition-colors hover:bg-surface hover:text-blue"
                              >
                                {child.label}
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </li>
                );
              }

              return (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className={`header-nav-link group relative inline-flex flex-col items-center px-2.5 py-2 text-[12px] font-medium tracking-wide transition-all duration-300 xl:px-3 xl:text-[13px] ${navColor(isActive)}`}
                  >
                    <span>{link.label}</span>
                    <span
                      className={`absolute inset-x-2.5 bottom-1 h-[1.5px] origin-center bg-blue transition-transform duration-300 xl:inset-x-3 ${isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      aria-hidden
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`relative z-[110] flex h-10 w-10 flex-col items-center justify-center gap-[5px] xl:hidden ${onLight ? "text-black" : "text-white"
            }`}
        >
          <span
            className={`block h-[1.5px] w-[18px] rounded-full bg-current transition-transform duration-300 ${open ? "translate-y-[6.5px] rotate-45" : ""
              }`}
          />
          <span
            className={`block h-[1.5px] w-[18px] rounded-full bg-current transition-all duration-300 ${open ? "scale-x-0 opacity-0" : ""
              }`}
          />
          <span
            className={`block h-[1.5px] w-[18px] rounded-full bg-current transition-transform duration-300 ${open ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 top-16 bg-black/45 transition-opacity duration-300 xl:hidden sm:top-[4.75rem] ${open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
          }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <div
        className={`absolute inset-x-0 top-full border-b border-line bg-white shadow-[0_24px_48px_rgba(10,10,10,0.1)] transition-all duration-300 xl:hidden ${open
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-2 opacity-0"
          }`}
        aria-hidden={!open}
      >
        <nav
          className="mx-auto max-h-[calc(100dvh-5rem)] max-w-7xl overflow-y-auto px-6 py-5 lg:px-8"
          aria-label="Mobile"
        >
          <ul className="flex flex-col">
            {links.map((link, i) => {
              const isActive = linkActive(link.id);
              const hasChildren = Boolean(link.children?.length);
              const subOpen = mobileOpenId === link.id;

              if (hasChildren) {
                return (
                  <li key={link.id} className="border-b border-line">
                    <button
                      type="button"
                      aria-expanded={subOpen}
                      onClick={() =>
                        setMobileOpenId((id) =>
                          id === link.id ? null : link.id,
                        )
                      }
                      className={`flex w-full items-center gap-4 py-3.5 text-left text-[15px] font-medium transition-colors duration-200 ${isActive ? "text-blue" : "text-ink"
                        }`}
                    >
                      <span className="text-[11px] tracking-wider text-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">{link.label}</span>
                      <svg
                        viewBox="0 0 12 12"
                        className={`h-3 w-3 text-muted transition-transform duration-200 ${subOpen ? "rotate-180" : ""}`}
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M2.5 4.5 6 8l3.5-3.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <ul
                      className={`overflow-hidden bg-surface transition-all duration-200 ${subOpen ? "max-h-[32rem] pb-2" : "max-h-0"
                        }`}
                    >
                      <li>
                        <Link
                          href={link.href}
                          onClick={() => {
                            setOpen(false);
                            setMobileOpenId(null);
                          }}
                          className="block py-2.5 pl-12 pr-4 text-sm text-ink hover:text-blue"
                        >
                          {link.overviewLabel ?? link.label}
                        </Link>
                      </li>
                      {link.children!.map((child, idx) => {
                        const prevGroup = link.children![idx - 1]?.group;
                        const showGroup =
                          child.group && child.group !== prevGroup;
                        return (
                          <li key={child.id}>
                            {showGroup && (
                              <p className="pl-12 pr-4 pt-3 text-[10px] font-semibold tracking-[0.16em] text-muted uppercase">
                                {child.group}
                              </p>
                            )}
                            <Link
                              href={child.href}
                              onClick={() => {
                                setOpen(false);
                                setMobileOpenId(null);
                              }}
                              className="block py-2.5 pl-12 pr-4 text-sm text-ink hover:text-blue"
                            >
                              {child.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              }

              return (
                <li
                  key={link.id}
                  className="border-b border-line last:border-0"
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-4 py-3.5 text-[15px] font-medium transition-colors duration-200 ${isActive ? "text-blue" : "text-ink hover:text-blue"
                      }`}
                  >
                    <span className="text-[11px] tracking-wider text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/current-affairs"
            onClick={() => setOpen(false)}
            className="header-cta footer-cta-shine mt-5 inline-flex w-full items-center justify-center bg-blue px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-hover"
          >
            Current Affairs
          </Link>
        </nav>
      </div>
    </header>
  );
}
