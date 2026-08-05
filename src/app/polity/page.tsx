import type { Metadata } from "next";
import SubjectHubPage, {
  subjectHubMetadata,
} from "@/components/SubjectHubPage";

export const metadata: Metadata = subjectHubMetadata(
  "Polity",
  "Polity current affairs for Prelims and Mains — Constitution, institutions, and governance notes.",
);

export default function PolityPage() {
  return (
    <SubjectHubPage
      subject="Polity"
      title="Polity"
      headline="Polity current affairs — Prelims and Mains."
      blurb="Articles tagged Polity appear here automatically. Example: a Prelims note on the President also shows under Current Affairs → Prelims."
    />
  );
}
