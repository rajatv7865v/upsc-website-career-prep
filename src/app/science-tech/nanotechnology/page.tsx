import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NanotechnologyVisualSection from "@/components/NanotechnologyVisualSection";
import SubjectArticlesClient from "@/components/SubjectArticlesClient";
import { getAllArticles } from "@/lib/articles";
import { IconArrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Nanotechnology, Graphene & 2D Materials | Science & Tech | Career Prepp",
  description:
    "Master Nanotechnology for UPSC Civil Services GS Paper 3 and Prelims — 0D-3D Nanomaterials, Carbon Nanotubes, Graphene, MXenes, Nano Mission, and PYQ Solutions.",
};

export default async function NanotechnologyPage() {
  const posts = await getAllArticles();

  return (
    <>
      <Header forceSolid />

      <main className="flex-1 bg-white pt-16 sm:pt-[4.75rem]">
        {/* Hero Header */}
        <section className="border-b border-line bg-gradient-to-b from-[#03071e] via-[#0f172a] to-[#1e293b] text-white py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.25),transparent_60%)] pointer-events-none" />
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Link href="/science-tech" className="text-xs font-bold uppercase tracking-wider text-blue-soft hover:underline">
                Science &amp; Technology
              </Link>
              <span className="text-white/40">/</span>
              <span className="text-xs font-bold uppercase tracking-wider text-white/90">
                Nanotechnology &amp; Advanced Materials
              </span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl max-w-3xl">
              Nanotechnology &amp; Advanced 2D Materials
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed">
              Complete conceptual dossier for UPSC GS Paper 3 and Prelims — Matter manipulation at nanoscale (&le; 100 nm), quantum confinement, Carbon Nanotubes, Graphene, MXenes, Nano Mission, and PYQ analysis.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-semibold">
              <span className="rounded-full bg-white/10 px-3.5 py-1.5 backdrop-blur-md border border-white/20">
                ⚛️ Scale: &le; 100 Nanometres (10⁻⁹ m)
              </span>
              <span className="rounded-full bg-white/10 px-3.5 py-1.5 backdrop-blur-md border border-white/20">
                📄 Graphene &amp; MXenes 2D Sheets
              </span>
              <span className="rounded-full bg-white/10 px-3.5 py-1.5 backdrop-blur-md border border-white/20">
                🧪 Carbon Nanotubes (SWCNT / MWCNT)
              </span>
              <span className="rounded-full bg-white/10 px-3.5 py-1.5 backdrop-blur-md border border-white/20">
                🏛️ DST Nano Mission &amp; UNNATI
              </span>
            </div>
          </div>
        </section>

        {/* Interactive Visual Studio */}
        <section className="py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <NanotechnologyVisualSection />
          </div>
        </section>

        {/* Mains Model Answers & Analytical Frameworks */}
        <section className="border-t border-line bg-surface py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-blue">
                UPSC Mains Analytical Frameworks
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-black">
                Model Questions &amp; Structured Answers (GS Paper 3)
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mains 2020 Question */}
              <div className="rounded-3xl border border-line bg-white p-7 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue bg-blue-tint px-3 py-1 rounded-full border border-blue-tint-line">
                      UPSC Mains 2020 (10 Marks / 150 Words)
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-black leading-snug">
                    &ldquo;What do you understand by nanotechnology and how is it helping in the health sector?&rdquo;
                  </h3>

                  <div className="mt-4 space-y-3 text-xs text-slate-700 leading-relaxed border-t border-line pt-4">
                    <p>
                      <strong>Introduction:</strong> Define nanotechnology as the manipulation of matter at 1–100 nm where quantum confinement and elevated surface-to-volume ratio alter physical/chemical behavior.
                    </p>
                    <p>
                      <strong>Health Sector Applications:</strong>
                    </p>
                    <ul className="pl-4 list-disc space-y-1 text-slate-600">
                      <li><strong>Targeted Drug Delivery:</strong> Functionalized Carbon Nanotubes, liposomes, and dendritic polymers delivering chemotherapeutic agents directly to tumor cells, sparing healthy tissue.</li>
                      <li><strong>mRNA Vaccine Delivery:</strong> Lipid Nanoparticles (LNPs) encapsulating fragile spike-protein mRNA in COVID-19 vaccines.</li>
                      <li><strong>Disease Diagnostics:</strong> Quantum dot fluorescent tagging and biosensors detecting cancer biomarkers at picomolar concentrations.</li>
                      <li><strong>Tissue Regeneration:</strong> CNT scaffolds serving as artificial micro-capillaries for cardiovascular repair.</li>
                    </ul>
                    <p>
                      <strong>Conclusion:</strong> Address toxicity/bio-accumulation challenges and highlight DST Nano Mission regulatory guidelines.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mains 2016 Question */}
              <div className="rounded-3xl border border-line bg-white p-7 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      UPSC Mains 2016 (12.5 Marks / 200 Words)
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-black leading-snug">
                    &ldquo;Why is nanotechnology one of the key technologies of the 21st century? Describe salient features of the Indian Government&apos;s Nano Mission.&rdquo;
                  </h3>

                  <div className="mt-4 space-y-3 text-xs text-slate-700 leading-relaxed border-t border-line pt-4">
                    <p>
                      <strong>Why Key 21st Century Tech:</strong> Pervasive cross-sectoral applicability spanning Clean Energy (perovskite solar cells), Precision Agriculture (Nano-urea/DAP), Water Purification (CNT membranes), and Computing (nanochips replacing silicon transistors).
                    </p>
                    <p>
                      <strong>Salient Features of Nano Mission (2007, DST):</strong>
                    </p>
                    <ul className="pl-4 list-disc space-y-1 text-slate-600">
                      <li><strong>Basic Research &amp; Capacity Building:</strong> Funding individual researchers and setting up Centres of Excellence (INST Mohali, JNCASR).</li>
                      <li><strong>Shared Infrastructure:</strong> Nationwide network providing open access to costly equipment (TEM, AFM, Optical Tweezers, Nano Indenters).</li>
                      <li><strong>Commercialization &amp; Startups:</strong> PPP models via CSIR-NMITLI and nano-incubators supporting deep-tech enterprises.</li>
                      <li><strong>International Diplomacy:</strong> Bilateral collaborations with USA, Germany, Japan, and ISRO UNNATI nanosatellite training.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Science & Tech Articles */}
        <section className="border-t border-line bg-white py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue">Related Topics</p>
                <h3 className="text-2xl font-bold text-black mt-1">Science &amp; Technology Articles</h3>
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
