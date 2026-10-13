import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubjectArticlesClient from "@/components/SubjectArticlesClient";
import { getAllArticles } from "@/lib/articles";
import { IconArrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Science & Technology for UPSC CSE (GS Paper 3 & Prelims) | Career Prepp",
  description:
    "Science & Technology notes for UPSC Civil Services Examination (GS Paper 3 & Prelims) — Space missions (ISRO), Biotechnology, Nanotechnology, Defense, AI, and Intellectual Property Rights.",
};

const domains = [
  {
    href: "/science-tech/nanotechnology",
    title: "Nanotechnology & 2D Materials",
    tag: "GS-3 · High Yield",
    desc: "0D–3D nanomaterials, Carbon Nanotubes, Graphene, MXenes, National Nano Mission, and UPSC Prelims PYQ lab.",
    icon: "⚛️",
    color: "from-sky-600 to-blue-800",
  },
  {
    href: "/science-tech/biotechnology",
    title: "Biotechnology & Genetics",
    tag: "GS-3 · Core Focus",
    desc: "CRISPR-Cas9 gene editing, Genome India Project, CAR-T cell immunotherapy, recombinant DNA, and bio-ethics.",
    icon: "🧬",
    color: "from-blue-600 to-indigo-700",
  },
  {
    href: "/science-tech?domain=space",
    title: "Space Technology & ISRO",
    tag: "GS-3 · ISRO Missions",
    desc: "ISRO missions (Gaganyaan, Chandrayaan, Aditya-L1), LVM3/SSLV launch systems, orbital mechanics & IN-SPACe.",
    icon: "🚀",
    color: "from-slate-800 to-slate-950",
  },
  {
    href: "/science-tech?domain=defense",
    title: "Defense & Strategic Tech",
    tag: "GS-3 · Indigenization",
    desc: "Indigenous defense platforms (Agni-V, BrahMos, Tejas), Hypersonics, Quantum Key Distribution & IPR treaties.",
    icon: "🛡️",
    color: "from-teal-700 to-emerald-900",
  },
];

export default async function ScienceTechPage() {
  const posts = await getAllArticles();

  return (
    <>
      <Header forceSolid />

      <main className="flex-1 bg-white pt-16 sm:pt-[4.75rem]">
        {/* UPSC Science & Tech Hero Header */}
        <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-[#080e21] via-[#0d1b3e] to-[#080e21] text-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* UPSC Examination Badge & Subheading */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-blue-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-300 backdrop-blur-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
                UPSC Civil Services Examination (CSE)
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur-xs">
                General Studies Paper 3 (Mains) &amp; Prelims
              </span>
            </div>

            <h1 className="mt-4 max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] leading-[1.12]">
              Science &amp; Technology for UPSC CSE
            </h1>

            <p className="mt-4 max-w-3xl text-base sm:text-lg text-white/80 leading-relaxed font-normal">
              High-yield notes, syllabus breakdown, and PYQ analysis aligned with the official UPSC GS-3 syllabus — Everyday Scientific Applications, Indigenization of Technology, Space Exploration (ISRO), Biotechnology &amp; CRISPR, Nanotechnology, AI &amp; Robotics, Defense Systems, and Intellectual Property Rights (IPR).
            </p>

            {/* UPSC Exam Relevance & Weightage Strip */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl border-y border-white/15 py-4">
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-blue-soft">12–15 Qs</p>
                <p className="text-xs text-white/60 font-medium mt-0.5">Prelims GS Paper 1</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-blue-soft">40–50 M</p>
                <p className="text-xs text-white/60 font-medium mt-0.5">Mains GS Paper 3</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-blue-soft">10 Units</p>
                <p className="text-xs text-white/60 font-medium mt-0.5">Structured Syllabus Map</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-blue-soft">2013–24</p>
                <p className="text-xs text-white/60 font-medium mt-0.5">Solved PYQs &amp; Trends</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/syllabus/science-tech"
                className="hero-btn-primary footer-cta-shine inline-flex items-center gap-2 rounded-xl bg-blue px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-blue-hover touch-manipulation"
              >
                <span>View 10-Unit Syllabus Map</span>
                <IconArrow className="h-4 w-4" />
              </Link>
              <Link
                href="/science-tech/nanotechnology"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xs transition-colors hover:border-white/40 hover:bg-white/15 touch-manipulation"
              >
                <span>⚛️ Nanotech &amp; PYQ Lab</span>
              </Link>
              <Link
                href="/science-tech/biotechnology"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xs transition-colors hover:border-white/40 hover:bg-white/15 touch-manipulation"
              >
                <span>🧬 Biotech Studio</span>
              </Link>
              <a
                href="/file/SCIENCE-TECH-SYLLABUS.docx"
                download
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xs transition-colors hover:border-white/40 hover:bg-white/15 touch-manipulation"
              >
                <span>Download S&amp;T Syllabus (.docx)</span>
                <span aria-hidden>↓</span>
              </a>
            </div>

            {/* Quick Domain Navigation Cards */}
            <div className="mt-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-soft">
                  Core UPSC GS-3 Science &amp; Tech Domains
                </span>
                <span className="hidden sm:inline-block text-xs text-white/50">
                  Select a domain for deep dive and interactive modules
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {domains.map((d) => (
                  <Link
                    key={d.title}
                    href={d.href}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-5 sm:p-6 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:scale-[1.02] touch-manipulation"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-2xl">{d.icon}</span>
                        <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] font-semibold text-white/90">
                          {d.tag}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-soft transition-colors">
                        {d.title}
                      </h3>
                      <p className="mt-2 text-xs text-white/70 leading-relaxed">
                        {d.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-xs font-semibold text-blue-soft">
                      <span>Explore domain</span>
                      <IconArrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Filterable Articles Grid */}
        <section className="bg-surface py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-blue">Article Archive</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-black mt-1">
                Science &amp; Technology Articles
              </h2>
            </div>
            <SubjectArticlesClient posts={posts} subject="Science & Tech" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
