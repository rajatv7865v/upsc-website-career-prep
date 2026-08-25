import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BiotechnologyVisualSection from "@/components/BiotechnologyVisualSection";
import SubjectArticlesClient from "@/components/SubjectArticlesClient";
import { getAllArticles } from "@/lib/articles";
import { IconArrow, IconBook, IconGlobe } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Biotechnology & Bioinformatics | Science & Tech | Career Prepp",
  description:
    "Master Biotechnology for UPSC GS Paper 3 — Recombinant DNA, CRISPR-Cas9, Bioinformatics, Genome India Project, and Gene Editing.",
};

export default async function BiotechnologyPage() {
  const posts = await getAllArticles();
  // Filter for Science & Tech / Biotech articles
  const biotechPosts = posts.filter(
    (p) =>
      p.subjects.includes("Science & Tech") ||
      p.category.toLowerCase().includes("biotech") ||
      p.category.toLowerCase().includes("science") ||
      p.title.toLowerCase().includes("gene") ||
      p.title.toLowerCase().includes("bio"),
  );

  return (
    <>
      <Header forceSolid />

      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <section className="border-b border-line bg-gradient-to-b from-[#0a1128] via-[#001f54] to-[#034078] text-white py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.3),transparent_60%)] pointer-events-none" />
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Link href="/science-tech" className="text-xs font-bold uppercase tracking-wider text-blue-soft hover:underline">
                Science &amp; Technology
              </Link>
              <span className="text-white/40">/</span>
              <span className="text-xs font-bold uppercase tracking-wider text-white/90">
                Biotechnology &amp; Bioinformatics
              </span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl max-w-3xl">
              Biotechnology, Genomics &amp; Bioinformatics
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed">
              Comprehensive notes, molecular mechanisms, and conceptual frameworks for UPSC Civil Services GS Paper 3 (Science &amp; Technology) and Prelims.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-semibold">
              <span className="rounded-full bg-white/10 px-3.5 py-1.5 backdrop-blur-md border border-white/20">
                🧬 Recombinant DNA Technology
              </span>
              <span className="rounded-full bg-white/10 px-3.5 py-1.5 backdrop-blur-md border border-white/20">
                💻 Bioinformatics Interdisciplinary Core
              </span>
              <span className="rounded-full bg-white/10 px-3.5 py-1.5 backdrop-blur-md border border-white/20">
                ✂️ CRISPR-Cas9 &amp; Gene Therapy
              </span>
            </div>
          </div>
        </section>

        {/* Interactive Visual Studio */}
        <section className="py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <BiotechnologyVisualSection />
          </div>
        </section>

        {/* Syllabus & Exam Relevance Breakdown */}
        <section className="border-t border-line bg-surface py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-blue">
                Civil Services Syllabus Alignment
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-black">
                UPSC Examination Focus in Biotechnology
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-line bg-white p-6 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue mb-2">
                  <IconBook className="h-4 w-4" />
                  Prelims Direct Concepts
                </div>
                <h3 className="text-lg font-bold text-black">Molecular Tools &amp; Vectors</h3>
                <ul className="mt-3 space-y-2 text-xs text-muted leading-relaxed">
                  <li>• Plasmids vs Bacteriophages as cloning vectors.</li>
                  <li>• Palindromic restriction cleavage by EcoRI / HindIII.</li>
                  <li>• DNA Ligase function and PCR amplification cycle.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-line bg-white p-6 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
                  <IconGlobe className="h-4 w-4" />
                  Mains GS Paper 3
                </div>
                <h3 className="text-lg font-bold text-black">National Policy &amp; Ethics</h3>
                <ul className="mt-3 space-y-2 text-xs text-muted leading-relaxed">
                  <li>• Genome India Project and precision medicine potential.</li>
                  <li>• Genetic Engineering Appraisal Committee (GEAC) regulatory framework.</li>
                  <li>• Somatic vs Germline gene editing ethical dilemmas.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-line bg-white p-6 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
                  <IconBook className="h-4 w-4" />
                  Bioinformatics Applications
                </div>
                <h3 className="text-lg font-bold text-black">Computational Biology</h3>
                <ul className="mt-3 space-y-2 text-xs text-muted leading-relaxed">
                  <li>• High-throughput Next-Generation Sequencing (NGS).</li>
                  <li>• AlphaFold &amp; AI-driven protein folding models.</li>
                  <li>• Public databases: GenBank, BLAST algorithms, NCBI.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles Section */}
        <section className="border-t border-line bg-white py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue">Latest Notes</p>
                <h3 className="text-2xl font-bold text-black mt-1">Science &amp; Tech Articles</h3>
              </div>
              <Link href="/science-tech" className="text-sm font-semibold text-blue hover:underline flex items-center gap-1.5">
                All Science &amp; Tech
                <IconArrow className="h-3.5 w-3.5" />
              </Link>
            </div>
            <SubjectArticlesClient posts={posts} subject="Science & Tech" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
