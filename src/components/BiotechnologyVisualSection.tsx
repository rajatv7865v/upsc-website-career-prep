"use client";

import { useState } from "react";
import Link from "next/link";
import { IconBook, IconGlobe, IconTarget, IconArrow } from "@/components/Icons";

const disciplines = [
  {
    id: "biology",
    name: "Biology",
    color: "from-emerald-500 to-teal-600",
    bgLight: "bg-emerald-50 text-emerald-800 border-emerald-200",
    icon: "🧬",
    role: "Molecular & Cellular Insights",
    details:
      "Provides the core understanding of genes, proteins, cellular pathways, and genetic variation necessary to model biological systems.",
    upscAngle: "Mendelian genetics, central dogma of molecular biology, mutation analysis.",
  },
  {
    id: "cs",
    name: "Computer Science",
    color: "from-sky-500 to-blue-600",
    bgLight: "bg-sky-50 text-sky-800 border-sky-200",
    icon: "💻",
    role: "Algorithms & Big Data",
    details:
      "Algorithms (BLAST, FASTA), high-throughput computing, database management (GenBank, EMBL), and machine learning for sequence alignment.",
    upscAngle: "Genomic big data, cloud computing in healthcare, AI in drug discovery.",
  },
  {
    id: "chemistry",
    name: "Chemistry",
    color: "from-indigo-500 to-violet-600",
    bgLight: "bg-indigo-50 text-indigo-800 border-indigo-200",
    icon: "🧪",
    role: "Chemical Bonds & Synthesis",
    details:
      "Thermodynamics of nucleotide pairing, hydrogen bonding in DNA/RNA, catalytic enzymes, and oligonucleotide synthesis.",
    upscAngle: "Restriction endonucleases, phosphodiester backbone, chemical base pairs.",
  },
  {
    id: "biochem",
    name: "Biochemistry",
    color: "from-cyan-500 to-blue-700",
    bgLight: "bg-cyan-50 text-cyan-800 border-cyan-200",
    icon: "🧫",
    role: "Enzyme Kinetics & Pathways",
    details:
      "Metabolic pathways, post-translational modifications, proteome mapping, and structural enzymatic kinetics.",
    upscAngle: "Recombinant insulin, monoclonal antibodies, enzyme replacement therapy.",
  },
  {
    id: "physics",
    name: "Physics",
    color: "from-amber-500 to-orange-600",
    bgLight: "bg-amber-50 text-amber-800 border-amber-200",
    icon: "🔬",
    role: "Structural Imaging & Optics",
    details:
      "X-ray crystallography, Cryo-Electron Microscopy (Cryo-EM), and NMR spectroscopy to determine 3D macromolecular structures.",
    upscAngle: "Structural biology Nobel breakthroughs, biomolecular microscopy.",
  },
  {
    id: "engineering",
    name: "Engineering",
    color: "from-orange-500 to-amber-600",
    bgLight: "bg-orange-50 text-orange-800 border-orange-200",
    icon: "⚙️",
    role: "Bio-Instrumentation & Nanotech",
    details:
      "Next-Generation Sequencing (NGS) hardware, microfluidics, lab-on-a-chip, bioreactors, and synthetic biology fabrication.",
    upscAngle: "Genome India Project sequencers, industrial scale bioreactors, biosensors.",
  },
];

const recombinantSteps = [
  {
    step: 1,
    title: "Gene Identification & Isolation",
    badge: "Target Gene",
    desc: "The specific gene of interest (e.g. the human growth hormone gene or insulin gene) is located on the human chromosome and excised using molecular endonuclease scissors.",
    highlight: "Human Cell DNA → Specific target sequence isolated",
  },
  {
    step: 2,
    title: "Vector Plasmid Cleavage",
    badge: "EcoRI Restriction",
    desc: "A bacterial plasmid vector is cleaved open at a specific palindromic recognition sequence by restriction endonuclease EcoRI, producing complementary staggered 'sticky ends'.",
    highlight: "Bacterial Plasmid + EcoRI → Open vector with matching sticky ends",
  },
  {
    step: 3,
    title: "Ligation & Recombinant DNA Assembly",
    badge: "DNA Ligase",
    desc: "The isolated human gene fragment is joined into the opened bacterial plasmid vector using DNA Ligase enzyme to synthesize a complete circular Recombinant Plasmid (chimeric DNA).",
    highlight: "Human Gene + Open Plasmid + DNA Ligase → Recombinant Plasmid",
  },
  {
    step: 4,
    title: "Host Transformation & Protein Expression",
    badge: "Bio-Production",
    desc: "The recombinant plasmid is introduced into host bacterial cells (transformation). As the bacteria divide in bioreactors, they express the inserted human gene to mass-produce therapeutic hormone.",
    highlight: "Transformed Bacteria → Fermentation → Pure Human Growth Hormone",
  },
];

export default function BiotechnologyVisualSection() {
  const [activeTab, setActiveTab] = useState<"bioinformatics" | "recombinant" | "crispr">("bioinformatics");
  const [selectedDiscipline, setSelectedDiscipline] = useState(disciplines[0]);
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="w-full space-y-12">
      {/* Studio Header Tabs */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-line pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-tint px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue border border-blue-tint-line">
            🔬 Interactive Biotech Studio
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-black">
            Biotechnology &amp; Bioinformatics Interactive Hub
          </h2>
        </div>

        <div className="flex items-center rounded-xl bg-surface p-1 border border-line">
          <button
            type="button"
            onClick={() => setActiveTab("bioinformatics")}
            className={`rounded-lg px-3.5 py-2 text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "bioinformatics"
                ? "bg-white text-blue shadow-xs"
                : "text-muted hover:text-ink"
            }`}
          >
            Bioinformatics Wheel
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("recombinant")}
            className={`rounded-lg px-3.5 py-2 text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "recombinant"
                ? "bg-white text-blue shadow-xs"
                : "text-muted hover:text-ink"
            }`}
          >
            Recombinant DNA
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("crispr")}
            className={`rounded-lg px-3.5 py-2 text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "crispr"
                ? "bg-white text-blue shadow-xs"
                : "text-muted hover:text-ink"
            }`}
          >
            CRISPR &amp; Genomics
          </button>
        </div>
      </div>

      {/* TAB 1: BIOINFORMATICS WHEEL */}
      {activeTab === "bioinformatics" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Wheel Graphic Column (Col 7) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#1e3a8a] via-[#0f2862] to-[#0a1945] text-white shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.25),transparent_70%)] pointer-events-none" />

            {/* Central Hub */}
            <div className="relative z-10 flex flex-col items-center justify-center w-36 h-36 rounded-full bg-white text-black p-4 text-center shadow-2xl border-4 border-blue-soft/50 animate-fade-in">
              <span className="text-2xl mb-0.5">🧬</span>
              <span className="text-xs font-extrabold uppercase tracking-tight text-blue">
                Bioinformatics
              </span>
              <span className="text-[10px] text-muted font-medium mt-0.5">Interdisciplinary Core</span>
            </div>

            {/* Orbiting Satellite Nodes Grid */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 w-full relative z-10">
              {disciplines.map((disc) => {
                const isSelected = selectedDiscipline.id === disc.id;
                return (
                  <button
                    key={disc.id}
                    type="button"
                    onClick={() => setSelectedDiscipline(disc)}
                    className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all cursor-pointer backdrop-blur-md ${
                      isSelected
                        ? "bg-white text-black border-white shadow-lg scale-105"
                        : "bg-white/10 text-white/90 border-white/15 hover:bg-white/20 hover:border-white/30"
                    }`}
                  >
                    <span className="text-xl mb-1">{disc.icon}</span>
                    <span className="text-xs font-bold leading-tight">{disc.name}</span>
                    <span className={`text-[10px] mt-0.5 ${isSelected ? "text-blue font-semibold" : "text-white/60"}`}>
                      {disc.role.split("&")[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            <p className="mt-6 text-xs text-white/60 font-medium text-center relative z-10">
              Click any discipline above to see its computational role and UPSC civil services relevance.
            </p>
          </div>

          {/* Details Column (Col 5) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div className="rounded-3xl border border-line bg-white p-7 shadow-xs">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-tint text-2xl border border-blue-tint-line">
                  {selectedDiscipline.icon}
                </span>
                <div>
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${selectedDiscipline.bgLight}`}>
                    {selectedDiscipline.role}
                  </span>
                  <h3 className="text-2xl font-bold text-black mt-1">
                    {selectedDiscipline.name} in Bioinformatics
                  </h3>
                </div>
              </div>

              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>{selectedDiscipline.details}</p>

                <div className="rounded-2xl border border-blue-tint-line bg-blue-tint/50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue mb-1 flex items-center gap-1.5">
                    <IconTarget className="h-3.5 w-3.5" />
                    UPSC Examination Angle
                  </p>
                  <p className="text-xs font-medium text-slate-800">
                    {selectedDiscipline.upscAngle}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Definition Pill */}
            <div className="rounded-2xl border border-dashed border-line p-5 bg-[#fafbfc]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-black mb-1">
                What is Bioinformatics?
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                Bioinformatics is an interdisciplinary field that develops methods and software tools for understanding biological data, especially large complex datasets like DNA sequence alignments, protein structure predictions, and phylogenetic trees.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: RECOMBINANT DNA CLONING */}
      {activeTab === "recombinant" && (
        <div className="space-y-8">
          <div className="rounded-3xl border border-line bg-[#fafbfc] p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue">
                  Step-by-Step Genetic Engineering Flow
                </span>
                <h3 className="text-2xl font-bold text-black mt-1">
                  Recombinant DNA (rDNA) &amp; Human Growth Hormone Cloning
                </h3>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                Core UPSC GS-3 Topic
              </span>
            </div>

            {/* 4 Interactive Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {recombinantSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={step.step}
                    onClick={() => setActiveStep(idx)}
                    className={`rounded-2xl border p-5 transition-all cursor-pointer flex flex-col justify-between ${
                      isActive
                        ? "bg-white border-blue shadow-md ring-2 ring-blue/10"
                        : "bg-white/60 border-line hover:bg-white hover:border-gray-300"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                          isActive ? "bg-blue text-white" : "bg-gray-100 text-muted"
                        }`}>
                          {step.step}
                        </span>
                        <span className="text-[11px] font-semibold text-blue bg-blue-tint px-2 py-0.5 rounded">
                          {step.badge}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-black leading-snug">
                        {step.title}
                      </h4>
                      <p className="mt-2 text-xs text-muted leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-line/60 text-[11px] font-semibold text-slate-700">
                      {step.highlight}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Biological Molecular Mechanisms Detail */}
            <div className="mt-8 rounded-2xl bg-white border border-line p-6 shadow-2xs">
              <h4 className="text-sm font-bold text-black mb-3 flex items-center gap-2">
                <IconBook className="h-4 w-4 text-blue" />
                Key Molecular Tools in Recombinant DNA Technology:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="font-bold text-ink">1. Restriction Endonucleases (EcoRI)</p>
                  <p className="mt-1 text-muted">Acts as chemical scissors that recognize specific palindromic sequences (e.g. 5&apos;-GAATTC-3&apos;) to cut DNA with overhanging sticky ends.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="font-bold text-ink">2. DNA Ligase</p>
                  <p className="mt-1 text-muted">The molecular glue that seals phosphodiester bonds between the human gene and the bacterial plasmid vector.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="font-bold text-ink">3. Bacterial Host (E. coli)</p>
                  <p className="mt-1 text-muted">Multiplies rapidly in bioreactors, translating human mRNA to synthesize commercial hormones, insulin, and vaccines.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: CRISPR & MODERN GENOMICS */}
      {activeTab === "crispr" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-line bg-white p-6 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-blue uppercase tracking-wider">Nobel Prize 2020</span>
              <h3 className="text-xl font-bold text-black mt-1">CRISPR-Cas9 Gene Editing</h3>
              <p className="mt-2 text-xs text-muted leading-relaxed">
                Clustered Regularly Interspaced Short Palindromic Repeats. Uses a Guide RNA (gRNA) to guide Cas9 endonuclease to precisely snip and edit DNA sequences in living organisms.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-line text-xs font-semibold text-blue">
              Applications: Sickle cell anemia, beta-thalassemia, drought-tolerant crops.
            </div>
          </div>

          <div className="rounded-3xl border border-line bg-white p-6 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">India Initiative</span>
              <h3 className="text-xl font-bold text-black mt-1">Genome India Project</h3>
              <p className="mt-2 text-xs text-muted leading-relaxed">
                Sequencing 10,000 diverse Indian genomes to create an Indian reference genome, enabling precision medicine and identifying disease mutations specific to Indian populations.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-line text-xs font-semibold text-emerald-700">
              Department of Biotechnology (DBT) flagship initiative.
            </div>
          </div>

          <div className="rounded-3xl border border-line bg-white p-6 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Therapeutic Frontier</span>
              <h3 className="text-xl font-bold text-black mt-1">CAR-T Cell Immunotherapy</h3>
              <p className="mt-2 text-xs text-muted leading-relaxed">
                Chimeric Antigen Receptor T-cell therapy genetically modifies a patient&apos;s own T-cells to identify and destroy specific cancer cells (e.g. NexCAR19 in India).
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-line text-xs font-semibold text-amber-700">
              Indigenous cancer cell &amp; gene therapy.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
