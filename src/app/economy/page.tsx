import type { Metadata } from "next";
import SubjectHubPage, {
  subjectHubMetadata,
} from "@/components/SubjectHubPage";

export const metadata: Metadata = subjectHubMetadata(
  "Economy",
  "Economy current affairs for Prelims and Mains — Budget, growth, schemes, and GS III linkages.",
);

export default function EconomyPage() {
  return (
    <SubjectHubPage
      subject="Economy"
      title="Economy"
      headline="Economy current affairs — Prelims and Mains."
      blurb="Articles tagged Economy appear here automatically. They also show under Current Affairs when you filter by Prelims or Mains."
    />
  );
}
