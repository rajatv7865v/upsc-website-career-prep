export type PyqPaper = {
  id: string;
  year: string;
  stage: "Prelims" | "Mains";
  paper: string;
  /**
   * Scanned PDF from UPSC (official URL) or local file after upload
   * e.g. "/pyq/2025/prelims-gs1-scanned.pdf"
   */
  scannedPdf?: string;
  /**
   * Text-based / copy-paste formatted PDF
   * e.g. "/pyq/2025/prelims-gs1-text.pdf"
   */
  textPdf?: string;
  note?: string;
};

/**
 * Previous Year Questions — Prelims & Mains.
 *
 * Instructor upload path:
 * 1. Drop files under public/pyq/{year}/
 * 2. Set scannedPdf and/or textPdf below to "/pyq/{year}/filename.pdf"
 *
 * Until local files are uploaded, scannedPdf may point at the official
 * UPSC previous-question-papers archive.
 */
export const pyqPapers: PyqPaper[] = [
  // ——— Prelims 2025 ———
  {
    id: "prelims-2025-gs1",
    year: "2025",
    stage: "Prelims",
    paper: "General Studies Paper I",
    scannedPdf:
      "https://www.upsc.gov.in/examinations/previous-question-papers",
    // textPdf: "/pyq/2025/prelims-gs1-text.pdf",
  },
  {
    id: "prelims-2025-gs2",
    year: "2025",
    stage: "Prelims",
    paper: "General Studies Paper II (CSAT)",
    scannedPdf:
      "https://www.upsc.gov.in/examinations/previous-question-papers",
    // textPdf: "/pyq/2025/prelims-gs2-text.pdf",
  },
  // ——— Mains 2025 ———
  {
    id: "mains-2025-gs1",
    year: "2025",
    stage: "Mains",
    paper: "General Studies Paper I",
    scannedPdf:
      "https://www.upsc.gov.in/examinations/previous-question-papers",
    // textPdf: "/pyq/2025/mains-gs1-text.pdf",
  },
  {
    id: "mains-2025-gs2",
    year: "2025",
    stage: "Mains",
    paper: "General Studies Paper II",
    scannedPdf:
      "https://www.upsc.gov.in/examinations/previous-question-papers",
    // textPdf: "/pyq/2025/mains-gs2-text.pdf",
  },
  {
    id: "mains-2025-gs3",
    year: "2025",
    stage: "Mains",
    paper: "General Studies Paper III",
    scannedPdf:
      "https://www.upsc.gov.in/examinations/previous-question-papers",
    // textPdf: "/pyq/2025/mains-gs3-text.pdf",
  },
  {
    id: "mains-2025-gs4",
    year: "2025",
    stage: "Mains",
    paper: "General Studies Paper IV",
    scannedPdf:
      "https://www.upsc.gov.in/examinations/previous-question-papers",
    // textPdf: "/pyq/2025/mains-gs4-text.pdf",
  },
  // ——— Prelims 2024 ———
  {
    id: "prelims-2024-gs1",
    year: "2024",
    stage: "Prelims",
    paper: "General Studies Paper I",
    scannedPdf:
      "https://www.upsc.gov.in/examinations/previous-question-papers",
    // textPdf: "/pyq/2024/prelims-gs1-text.pdf",
  },
  {
    id: "prelims-2024-gs2",
    year: "2024",
    stage: "Prelims",
    paper: "General Studies Paper II (CSAT)",
    scannedPdf:
      "https://www.upsc.gov.in/examinations/previous-question-papers",
    // textPdf: "/pyq/2024/prelims-gs2-text.pdf",
  },
];

export const pyqYears = Array.from(
  new Set(pyqPapers.map((p) => p.year)),
).sort((a, b) => Number(b) - Number(a));
