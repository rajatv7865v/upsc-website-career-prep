import type { Metadata } from "next";
import PyqPageClient from "./PyqPageClient";

export const metadata: Metadata = {
  title: "Previous Year Questions (PYQ) | Career Prepp",
  description:
    "UPSC Prelims and Mains previous year questions — scanned PDFs and text-based PDFs.",
};

export default function PyqPage() {
  return <PyqPageClient />;
}
