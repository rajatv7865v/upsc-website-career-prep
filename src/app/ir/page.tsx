import type { Metadata } from "next";
import SubjectHubPage, {
  subjectHubMetadata,
} from "@/components/SubjectHubPage";

export const metadata: Metadata = subjectHubMetadata(
  "IR",
  "International Relations current affairs for Prelims and Mains.",
);

export default function IrPage() {
  return (
    <SubjectHubPage
      subject="IR"
      title="International Relations"
      headline="IR current affairs — Prelims and Mains."
      blurb="Articles tagged IR appear here automatically and under Current Affairs when filtered by stage."
    />
  );
}
