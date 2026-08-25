import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubjectArticlesClient from "@/components/SubjectArticlesClient";
import { getAllArticles } from "@/lib/articles";
import { IconArrow, IconBook, IconGlobe } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Science & Technology | Career Prepp",
  description:
    "Science & Technology notes for UPSC Civil Services Examination (GS Paper 3 & Prelims) — Biotechnology, Space, IT, AI, Defense, and Emerging Tech.",
};

const domains = [
  {
    href: "/science-tech/nanotechnology",
    title: "Nanotechnology & 2D Materials",
    tag: "High Yield · New",
    desc: "0D-3D nanomaterials, Carbon Nanotubes, Graphene, MXenes, Nano Mission, and UPSC PYQ analysis.",
    icon: "⚛️",
    color: "from-sky-600 to-blue-800",
  },
  {
    href: "/science-tech/biotechnology",
    title: "Biotechnology & Bioinformatics",
    tag: "Core Focus",
    desc: "Recombinant DNA technology, CRISPR-Cas9, Genome India Project, and interdisciplinary bioinformatics applications.",
    icon: "🧬",
    color: "from-blue-600 to-indigo-700",
  },
  {
    href: "/science-tech?domain=space",
    title: "Space Technology",
    tag: "High Yield",
    desc: "ISRO missions (Gaganyaan, Chandrayaan, Aditya-L1), satellite launch vehicles (PSLV, LVM3), and orbital mechanics.",
    icon: "🚀",
    color: "from-slate-800 to-slate-950",
  },
  {
    href: "/science-tech?domain=defense",
    title: "Defense & Advanced Tech",
    tag: "Strategic",
    desc: "Indigenous defense systems, hypersonic missiles, quantum computing, and artificial intelligence in governance.",
    icon: "🛡️",
    color: "from-teal-700 to-emerald-900",
  },
];

export default async function ScienceTechPage() {
  const posts = await getAllArticles();

  return (
    <>
      <Header forceSolid />

      <main className="flex-1 bg-white">
        {/* Hero Header */}
        <section className="border-b border-line bg-gradient-to-b from-[#080e21] to-[#0d1b3e] text-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="section-label !text-blue-soft uppercase tracking-widest font-bold text-xs">
              UPSC GS Paper 3 · Prelims Focus
            </p>
            <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Science &amp; Technology
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/75 leading-relaxed">
              In-depth, readable notes on emerging scientific developments, space missions, biotechnology breakthroughs, and their socio-economic impact.
            </p>

            {/* Quick Domain Navigation Cards */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
              {domains.map((d) => (
                <Link
                  key={d.title}
                  href={d.href}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:scale-[1.02]"
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
        </section>

        {/* Filterable Articles Grid */}
        <section className="bg-surface py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
