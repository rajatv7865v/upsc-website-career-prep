"use client";

import { useState } from "react";
import Link from "next/link";
import { IconBook, IconGlobe, IconTarget, IconArrow, IconCheck } from "@/components/Icons";

type DimensionItem = {
  id: string;
  dim: string;
  name: string;
  scaleDesc: string;
  icon: string;
  examples: string[];
  properties: string;
  upscRelevance: string;
  badgeColor: string;
};

const dimensions: DimensionItem[] = [
  {
    id: "0d",
    dim: "0D",
    name: "Zero-Dimensional Nanomaterials",
    scaleDesc: "All 3 dimensions are confined within nanoscale (≤ 100 nm)",
    icon: "🟡",
    examples: ["Quantum Dots (QDs)", "Nanospheres", "Fullerenes (Buckyballs C60)", "Lipid Nanoparticles (LNPs)"],
    properties:
      "Strongest quantum confinement effects; discrete energy levels; emits size-tunable fluorescent light under UV excitation; ultra-high specific surface area.",
    upscRelevance:
      "Quantum dot displays (QLED), fluorescent biological tagging in cancer tracking, COVID-19 mRNA vaccine lipid vectors.",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
  },
  {
    id: "1d",
    dim: "1D",
    name: "One-Dimensional Nanomaterials",
    scaleDesc: "2 dimensions are nanoscale, 1 dimension is extended",
    icon: "🧪",
    examples: ["Carbon Nanotubes (SWCNTs & MWCNTs)", "Nanowires", "Nanofibers", "Nanorods"],
    properties:
      "High aspect ratio (length/diameter); ballistic electron transport; ~100x tensile strength of steel with 1/6th weight; hollow core capable of drug/gas encapsulation.",
    upscRelevance:
      "Targeted drug/antigen delivery (UPSC 2020), biochemical nano-sensors, artificial blood capillaries, lightweight conductive composites.",
    badgeColor: "bg-sky-100 text-sky-900 border-sky-300",
  },
  {
    id: "2d",
    dim: "2D",
    name: "Two-Dimensional Nanomaterials",
    scaleDesc: "1 dimension is nanoscale (single/few atom thickness), 2 dimensions extended",
    icon: "📄",
    examples: ["Graphene (1-atom thick honeycomb)", "MXenes (Ti3C2Tx)", "Borophene", "MoS2 Nanosheets"],
    properties:
      "Extreme surface area; ballistic electrical conductivity surpassing copper; thermal conductivity ~5000 W/m·K; impermeable to helium/hydrogen; optical transparency (~97.7%).",
    upscRelevance:
      "Wonder material of 21st century; desalination membranes, flexible wearable electronics, 5G electromagnetic shielding, rapid charging supercapacitors.",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
  },
  {
    id: "3d",
    dim: "3D",
    name: "Three-Dimensional Nanomaterials",
    scaleDesc: "Bulk structures composed of integrated nanoscale building blocks",
    icon: "🧊",
    examples: ["Polymer Nanocomposites", "Nanocrystalline Bulk Metals", "Aerogels", "Nanoporous Zeolites"],
    properties:
      "Dramatically improved bulk toughness (up to 1,000x tougher than conventional materials); flame retardancy; superior gas-barrier capabilities.",
    upscRelevance:
      "Aerospace lightweight fuselage, automotive high-strength alloys, industrial catalytic converters, smart water filtration beds.",
    badgeColor: "bg-purple-100 text-purple-900 border-purple-300",
  },
];

const wonderMaterials = [
  {
    name: "Graphene",
    tag: "Carbon 2D Allotrope",
    formula: "Single-atom hex-lattice",
    highlights: [
      "200x stronger than structural steel, 6x lighter",
      "Thermal conductivity ~5000 W/m·K (highest known)",
      "Impermeable to all gases including Hydrogen & Helium",
      "Almost completely transparent (absorbs only 2.3% light)",
      "High electrical mobility surpassing copper at room temp",
    ],
    upscApplications:
      "Desalination & water purification membranes, flexible transparent displays, supercapacitors, biosensors, corrosion-resistant thermal coatings.",
  },
  {
    name: "Carbon Nanotubes (CNTs)",
    tag: "Rolled Graphene Cylinders",
    formula: "SWCNTs & MWCNTs",
    highlights: [
      "Derived conceptually from fullerenes stretched into seamless cylinders",
      "Metallic or semiconducting depending on chiral roll angle",
      "Hollow core for encapsulating drugs, antigens, or hydrogen gas",
      "Self-assembly capability with DNA and protein macromolecules",
      "Biodegradable under enzymatic action in biological systems",
    ],
    upscApplications:
      "Targeted anticancer drug delivery, artificial micro-capillaries, high-sensitivity biochemical sensors, water filter CNT sieves.",
  },
  {
    name: "MXenes",
    tag: "2D Transition Metal Carbides",
    formula: "Mn+1XnTx (e.g. Ti3C2Tx)",
    highlights: [
      "Discovered in 2011 from layered precursor MAX phases",
      "Combines metallic conductivity with hydrophilic (water-loving) surface",
      "Exceptional volumetric capacitance (>900 F/cm³) for energy storage",
      "Broadband optical absorption across UV to near-infrared spectra",
      "Rare synergy of clay-like processability and ceramic durability",
    ],
    upscApplications:
      "Next-gen Lithium-Sulfur & Aluminum-ion batteries, radar/5G electromagnetic interference (EMI) shielding, water desalination.",
  },
  {
    name: "Lipid Nanoparticles (LNPs)",
    tag: "Bio-Nano Vectors",
    formula: "Spherical Ionizable Lipids",
    highlights: [
      "Vesicle architecture protecting fragile nucleic acids from degradation",
      "Enables cellular endocytosis and targeted cytoplasmic mRNA release",
      "Core technology powering Pfizer-BioNTech & Moderna COVID-19 vaccines",
      "Biocompatible and biodegradable with minimal systemic toxicity",
    ],
    upscApplications:
      "mRNA therapeutics, gene-editing delivery (CRISPR gRNA), personalized cancer immunotherapy vaccines.",
  },
];

const pyqs = [
  {
    year: "UPSC Prelims 2020",
    question:
      "With reference to carbon nanotubes, consider the following statements:\n1. They can be used as carriers of drugs and antigens in the human body.\n2. They can be made into artificial blood capillaries for an injured part of human body.\n3. They can be used in biochemical sensors.\n4. Carbon nanotubes are biodegradable.\nWhich of the statements given above are correct?",
    options: ["1 and 2 only", "2, 3 and 4 only", "1, 3 and 4 only", "1, 2, 3 and 4"],
    correctIndex: 3,
    explanation:
      "All 4 statements are scientifically correct: CNTs deliver drugs across cellular membranes (Statement 1); functionalized CNTs act as scaffolds and artificial vascular capillaries for tissue regeneration (Statement 2); CNT field-effect transistors detect minute biomarkers (Statement 3); and pristine/functionalized CNTs can be degraded by peroxidase enzymes (Statement 4).",
  },
  {
    year: "UPSC Prelims 2022",
    question:
      "Consider the following statements:\n1. Other than those made by humans, nanoparticles do not exist in nature.\n2. Nanoparticles of some metallic oxides are used in the manufacture of some cosmetics.\n3. Nanoparticles of some commercial products which enter the environment are unsafe for humans.\nWhich of the statements given above is/are correct?",
    options: ["1 only", "3 only", "1 and 2 only", "2 and 3 only"],
    correctIndex: 3,
    explanation:
      "Statement 1 is incorrect because nanoparticles exist abundantly in nature (volcanic ash, sea spray, viral capsids, lotus leaf nanostructures). Statement 2 is correct (Titanium dioxide TiO2 and Zinc oxide ZnO nanoparticles are used in sunscreens). Statement 3 is correct (non-biodegradable nanoparticles accumulate in food chains, bioaccumulate, and can trigger free radicals). Hence (d) 2 and 3 only.",
  },
  {
    year: "UPSC Prelims 2014",
    question:
      "There is some concern regarding the nanoparticles of some chemical elements that are used by the industry in the manufacture of various products. Why?\n1. They can accumulate in the environment, and contaminate water and soil.\n2. They can enter the food chains.\n3. They can trigger the production of free radicals.\nSelect the correct answer using the code given below:",
    options: ["1 and 2 only", "3 only", "1 and 3 only", "1, 2 and 3"],
    correctIndex: 3,
    explanation:
      "All three statements are valid environmental and health concerns: Due to their high reactivity and minute size, nanoparticles easily penetrate biological barriers, bioaccumulate in water/soil, enter trophic chains, and cause oxidative stress via reactive oxygen species (free radicals). Answer is (d).",
  },
];

export default function NanotechnologyVisualSection() {
  const [activeTab, setActiveTab] = useState<"dimensions" | "materials" | "agri-food" | "india-initiatives" | "pyqs">("dimensions");
  const [selectedDim, setSelectedDim] = useState<DimensionItem>(dimensions[1]);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});

  const handleSelectAnswer = (qIndex: number, optIndex: number) => {
    setQuizAnswers((prev) => ({ ...prev, [qIndex]: optIndex }));
    setShowExplanation((prev) => ({ ...prev, [qIndex]: true }));
  };

  return (
    <div className="w-full space-y-12">
      {/* Studio Header Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-b border-line pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-tint px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue border border-blue-tint-line">
            ⚡ Advanced Nanoscience &amp; Materials Studio
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-black">
            Nanotechnology &amp; 2D Materials Interactive Hub
          </h2>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center rounded-xl bg-surface p-1 border border-line gap-1">
          <button
            type="button"
            onClick={() => setActiveTab("dimensions")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "dimensions"
                ? "bg-white text-blue shadow-xs"
                : "text-muted hover:text-ink"
            }`}
          >
            Dimensionality (0D-3D)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("materials")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "materials"
                ? "bg-white text-blue shadow-xs"
                : "text-muted hover:text-ink"
            }`}
          >
            Wonder Materials
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("agri-food")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "agri-food"
                ? "bg-white text-blue shadow-xs"
                : "text-muted hover:text-ink"
            }`}
          >
            Agri &amp; Food Tech
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("india-initiatives")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "india-initiatives"
                ? "bg-white text-blue shadow-xs"
                : "text-muted hover:text-ink"
            }`}
          >
            India Initiatives
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("pyqs")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "pyqs"
                ? "bg-white text-blue shadow-xs"
                : "text-muted hover:text-ink"
            }`}
          >
            UPSC PYQ Lab
          </button>
        </div>
      </div>

      {/* TAB 1: DIMENSIONALITY MATRIX */}
      {activeTab === "dimensions" && (
        <div className="space-y-8">
          {/* Dimensionality Selector Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {dimensions.map((dim) => {
              const isSelected = selectedDim.id === dim.id;
              return (
                <button
                  key={dim.id}
                  type="button"
                  onClick={() => setSelectedDim(dim)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? "bg-white border-blue shadow-md ring-2 ring-blue/15 scale-[1.02]"
                      : "bg-[#fafbfc] border-line hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xl">{dim.icon}</span>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${dim.badgeColor}`}>
                      {dim.dim}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-black">{dim.name}</h4>
                  <p className="text-[11px] text-muted line-clamp-1 mt-0.5">{dim.examples[0]}</p>
                </button>
              );
            })}
          </div>

          {/* Selected Dimensionality Details View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 rounded-3xl border border-line bg-white p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-tint text-2xl border border-blue-tint-line">
                  {selectedDim.icon}
                </span>
                <div>
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider border ${selectedDim.badgeColor}`}>
                    {selectedDim.dim} Classification
                  </span>
                  <h3 className="text-2xl font-bold text-black mt-1">
                    {selectedDim.name}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Physical Nanoscale Confinement:
                  </p>
                  <p className="text-xs font-semibold text-slate-900">{selectedDim.scaleDesc}</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Key Physical &amp; Quantum Properties:
                  </h4>
                  <p>{selectedDim.properties}</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Benchmark Nanomaterials:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedDim.examples.map((ex) => (
                      <span
                        key={ex}
                        className="rounded-lg bg-blue-tint/70 border border-blue-tint-line px-3 py-1 text-xs font-semibold text-blue"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* UPSC Exam Insight Card */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-3xl border border-blue-tint-line bg-gradient-to-br from-blue-tint/60 via-white to-blue-tint/30 p-6 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue mb-3">
                  <IconTarget className="h-4 w-4" />
                  Civil Services Exam Linkage
                </div>
                <h4 className="text-base font-bold text-black">
                  Why {selectedDim.dim} Matters for UPSC
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-700">
                  {selectedDim.upscRelevance}
                </p>

                <div className="mt-5 pt-4 border-t border-blue-tint-line/80 text-[11px] font-medium text-blue">
                  👉 <strong>Core Principle:</strong> As dimensionality decreases (3D → 2D → 1D → 0D), the specific surface area-to-volume ratio expands drastically, driving catalytic reactivity and quantum confinement.
                </div>
              </div>

              <div className="rounded-2xl border border-line bg-white p-5">
                <p className="text-xs font-bold text-black uppercase tracking-wider mb-2">
                  Compositional Categories (All Dimensions)
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-muted">
                  <div className="p-2 rounded bg-slate-50 border border-slate-100">
                    <strong className="text-slate-800">Carbon-Based:</strong> Graphene, CNTs, Fullerenes
                  </div>
                  <div className="p-2 rounded bg-slate-50 border border-slate-100">
                    <strong className="text-slate-800">Inorganic:</strong> Metal Oxides (ZnO, TiO2, Ag)
                  </div>
                  <div className="p-2 rounded bg-slate-50 border border-slate-100">
                    <strong className="text-slate-800">Organic:</strong> Dendrimers, Liposomes, LNPs
                  </div>
                  <div className="p-2 rounded bg-slate-50 border border-slate-100">
                    <strong className="text-slate-800">Composites:</strong> CNT-Polymer, MXene-Hybrids
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: WONDER MATERIALS */}
      {activeTab === "materials" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {wonderMaterials.map((mat) => (
            <div
              key={mat.name}
              className="rounded-3xl border border-line bg-white p-6 sm:p-7 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue bg-blue-tint px-2.5 py-0.5 rounded-full border border-blue-tint-line">
                    {mat.tag}
                  </span>
                  <span className="text-xs text-muted font-mono">{mat.formula}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black mt-1">
                  {mat.name}
                </h3>

                <ul className="mt-4 space-y-2 text-xs text-slate-700">
                  {mat.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue font-bold">✓</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-line">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  High-Impact Applications:
                </p>
                <p className="text-xs text-ink font-medium leading-relaxed">
                  {mat.upscApplications}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: AGRI & FOOD TECH */}
      {activeTab === "agri-food" && (
        <div className="space-y-8">
          <div className="rounded-3xl border border-line bg-[#fafbfc] p-6 sm:p-8">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                Green Revolution 2.0 &amp; Food Security
              </span>
              <h3 className="text-2xl font-bold text-black mt-1">
                Nanotechnology in Agriculture &amp; Food Processing
              </h3>
              <p className="text-xs text-muted mt-1.5">
                Targeted precision delivery, minimal environmental runoff, and smart real-time quality monitoring.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Agri Section */}
              <div className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">
                  🌱 1. Agriculture &amp; Precision Farming
                </div>
                <ul className="space-y-3 text-xs text-slate-700 leading-relaxed">
                  <li>
                    <strong className="text-ink">Nano-Fertilisers (Nano-Urea / DAP):</strong> Controlled slow nutrient release that enhances nitrogen uptake efficiency (&gt;80% vs 30% in conventional urea) while slashing soil runoff.
                  </li>
                  <li>
                    <strong className="text-ink">Nano-Pesticides:</strong> Smart encapsulation ensuring targeted pest delivery with reduced active ingredient toxicity.
                  </li>
                  <li>
                    <strong className="text-ink">Seed Nano-Priming:</strong> Carbon nanotubes and nano-iron penetrate seed coats, accelerating enzymatic germination and early vigor.
                  </li>
                  <li>
                    <strong className="text-ink">Nanosensors &amp; Pathogen Early Warning:</strong> Wireless soil and crop sensors monitoring moisture, salinity, and viral infections in real time.
                  </li>
                </ul>
              </div>

              {/* Food Section */}
              <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-3">
                  🥫 2. Food Processing &amp; Smart Packaging
                </div>
                <ul className="space-y-3 text-xs text-slate-700 leading-relaxed">
                  <li>
                    <strong className="text-ink">Smart &amp; Active Packaging:</strong> Nanocomposite films with oxygen scavengers and antimicrobial nanosilver coatings extending shelf life.
                  </li>
                  <li>
                    <strong className="text-ink">Rapid Spoilage Detection:</strong> Nanosensors change color/fluorescence upon detecting volatile amines or pathogens (E. coli, Salmonella).
                  </li>
                  <li>
                    <strong className="text-ink">Nano-Encapsulated Nutraceuticals:</strong> Bioavailability enhancement of fat-soluble vitamins (A, D, E), minerals, and natural antioxidants.
                  </li>
                  <li>
                    <strong className="text-ink">Sterilization &amp; Hygiene:</strong> Nanosilver and photocatalytic titanium dioxide disinfectants ensuring contaminant-free equipment.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: INDIA INITIATIVES */}
      {activeTab === "india-initiatives" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-line bg-white p-6 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue">DST Umbrella Scheme</span>
              <h3 className="text-xl font-bold text-black mt-1">The Nano Mission (2007)</h3>
              <p className="mt-3 text-xs text-muted leading-relaxed">
                Launched by the Department of Science and Technology (DST) to build world-class infrastructure (TEM, AFM, Optical Tweezers), establish national shared facilities, and facilitate industrial commercialization.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-line text-xs font-semibold text-blue">
              Institutions: INST Mohali, JNCASR Bangalore, CeNS.
            </div>
          </div>

          <div className="rounded-3xl border border-line bg-white p-6 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">ISRO Capacity Building</span>
              <h3 className="text-xl font-bold text-black mt-1">UNNATI Programme</h3>
              <p className="mt-3 text-xs text-muted leading-relaxed">
                <strong>UNispace Nanosatellite Assembly &amp; Training:</strong> ISRO initiative marking UNISPACE+50 to train 90 engineers from 45 developing nations in assembling and testing nanosatellites at U R Rao Satellite Centre.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-line text-xs font-semibold text-emerald-700">
              Nanosatellite orbital technology &amp; global diplomacy.
            </div>
          </div>

          <div className="rounded-3xl border border-line bg-white p-6 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Talent Pipeline</span>
              <h3 className="text-xl font-bold text-black mt-1">INSPIRE &amp; NMITLI</h3>
              <p className="mt-3 text-xs text-muted leading-relaxed">
                <strong>INSPIRE:</strong> Nurtures young scientific talent without exam barrier. <strong>NMITLI (CSIR):</strong> Fosters public-private partnerships in nanotechnology startups and breakthrough tech commercialization.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-line text-xs font-semibold text-amber-700">
              Global Rank: India ranks 3rd worldwide in nanoscience research papers.
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: UPSC PYQ PRACTICE LAB */}
      {activeTab === "pyqs" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue">Past Year Questions</span>
              <h3 className="text-xl font-bold text-black mt-0.5">UPSC Civil Services Prelims PYQ Solver</h3>
            </div>
            <span className="text-xs text-muted">Click an option to test and view the detailed solution</span>
          </div>

          <div className="space-y-6">
            {pyqs.map((q, qIdx) => {
              const selectedOpt = quizAnswers[qIdx];
              const isAnswered = selectedOpt !== undefined;
              const isCorrect = selectedOpt === q.correctIndex;

              return (
                <div
                  key={q.year}
                  className="rounded-3xl border border-line bg-white p-6 sm:p-7 shadow-xs"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="rounded-full bg-blue-tint px-3 py-1 text-xs font-bold text-blue border border-blue-tint-line">
                      {q.year}
                    </span>
                    {isAnswered && (
                      <span
                        className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                          isCorrect ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
                        }`}
                      >
                        {isCorrect ? "✓ Correct Answer" : "✗ Incorrect"}
                      </span>
                    )}
                  </div>

                  <p className="text-sm font-medium text-black whitespace-pre-line leading-relaxed">
                    {q.question}
                  </p>

                  {/* Options List */}
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {q.options.map((opt, optIdx) => {
                      const isThisSelected = selectedOpt === optIdx;
                      const isThisCorrect = optIdx === q.correctIndex;

                      let btnStyle = "border-line bg-[#fafbfc] text-slate-800 hover:border-blue hover:bg-blue-tint/30";
                      if (isAnswered) {
                        if (isThisCorrect) {
                          btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-400/30";
                        } else if (isThisSelected) {
                          btnStyle = "border-rose-400 bg-rose-50 text-rose-950 font-medium";
                        } else {
                          btnStyle = "border-line bg-slate-50 text-slate-400 opacity-60";
                        }
                      }

                      return (
                        <button
                          key={opt}
                          type="button"
                          disabled={isAnswered}
                          onClick={() => handleSelectAnswer(qIdx, optIdx)}
                          className={`flex items-center gap-3 p-3.5 rounded-xl border text-left text-xs transition-all cursor-pointer ${btnStyle}`}
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[11px] font-bold border border-current shadow-2xs">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span className="flex-1">{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Detailed Explanation */}
                  {showExplanation[qIdx] && (
                    <div className="mt-5 rounded-2xl bg-slate-50 border border-slate-200 p-4 text-xs text-slate-800 animate-fade-in leading-relaxed">
                      <p className="font-bold text-ink mb-1 flex items-center gap-1.5">
                        <IconBook className="h-3.5 w-3.5 text-blue" />
                        Comprehensive UPSC Solution &amp; Examiner Rationale:
                      </p>
                      <p>{q.explanation}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
