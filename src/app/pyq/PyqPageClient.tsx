"use client";

import { useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { pyqPapers, pyqYears } from "@/data/pyq";
import { IconArrow } from "@/components/Icons";

export default function PyqPageClient() {
  const [stage, setStage] = useState<"All" | "Prelims" | "Mains">("All");
  const [year, setYear] = useState<string>("All");

  const papers = useMemo(() => {
    return pyqPapers.filter((p) => {
      if (stage !== "All" && p.stage !== stage) return false;
      if (year !== "All" && p.year !== year) return false;
      return true;
    });
  }, [stage, year]);

  return (
    <>
      <Header forceSolid />
      <main className="flex-1">
        <section className="border-b border-line bg-black py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="section-label !text-blue-soft">Previous Year Questions</p>
            <h1 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              PYQ — Prelims and Mains.
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/65">
              Each paper has two formats when available: a scanned PDF and a
              text-based PDF. Filter by stage or year.
            </p>
          </div>
        </section>

        <section className="bg-surface py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="space-y-4">
              <div>
                <p className="mb-2 text-xs font-semibold tracking-[0.16em] text-muted uppercase">
                  Stage
                </p>
                <div className="blog-filters !mt-0">
                  {(["All", "Prelims", "Mains"] as const).map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setStage(s)}
                      className={`blog-filter-chip ${stage === s ? "is-active" : ""}`}
                    >
                      {s === "All" ? "All stages" : s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-2 text-xs font-semibold tracking-[0.16em] text-muted uppercase">
                  Year
                </p>
                <div className="blog-filters !mt-0">
                  <button
                    type="button"
                    onClick={() => setYear("All")}
                    className={`blog-filter-chip ${year === "All" ? "is-active" : ""}`}
                  >
                    All years
                  </button>
                  {pyqYears.map((y) => (
                    <button
                      key={y}
                      type="button"
                      onClick={() => setYear(y)}
                      className={`blog-filter-chip ${year === y ? "is-active" : ""}`}
                    >
                      {y}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {papers.length === 0 ? (
              <p className="mt-10 text-center text-muted">
                No papers match these filters yet.
              </p>
            ) : (
              <ul className="mt-10 grid gap-4 lg:grid-cols-2">
                {papers.map((paper) => (
                  <li
                    key={paper.id}
                    className="border border-line bg-white p-6"
                  >
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
                      <span className="font-medium text-blue">{paper.stage}</span>
                      <span>·</span>
                      <span>{paper.year}</span>
                    </div>
                    <h2 className="mt-2 text-lg font-semibold text-black">
                      {paper.paper}
                    </h2>
                    {paper.note && (
                      <p className="mt-2 text-sm text-muted">{paper.note}</p>
                    )}
                    <div className="mt-5 flex flex-wrap gap-3">
                      {paper.scannedPdf ? (
                        <a
                          href={paper.scannedPdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-blue px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-hover"
                        >
                          Scanned PDF
                          <IconArrow className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        <span className="inline-flex items-center border border-dashed border-line px-4 py-2.5 text-sm text-muted">
                          Scanned PDF — upload soon
                        </span>
                      )}
                      {paper.textPdf ? (
                        <a
                          href={paper.textPdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border border-black px-4 py-2.5 text-sm font-medium text-black hover:bg-black hover:text-white"
                        >
                          Text PDF
                          <IconArrow className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        <span className="inline-flex items-center border border-dashed border-line px-4 py-2.5 text-sm text-muted">
                          Text PDF — upload soon
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-12 border border-line bg-white p-6 text-sm text-muted">
              <p className="font-medium text-black">Uploading year-wise PDFs</p>
              <ol className="mt-3 list-decimal space-y-1.5 pl-5">
                <li>
                  Place files in{" "}
                  <code className="text-ink">public/pyq/&#123;year&#125;/</code>{" "}
                  (scanned + text versions).
                </li>
                <li>
                  Set{" "}
                  <code className="text-ink">scannedPdf</code> and{" "}
                  <code className="text-ink">textPdf</code> in{" "}
                  <code className="text-ink">src/data/pyq.ts</code>.
                </li>
              </ol>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
