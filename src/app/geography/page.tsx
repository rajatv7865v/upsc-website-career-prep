import type { Metadata } from "next";
import SubjectHubPage, {
  subjectHubMetadata,
} from "@/components/SubjectHubPage";

export const metadata: Metadata = subjectHubMetadata(
  "Geography",
  "Geography current affairs for Prelims and Mains — maps, environment, and location-based notes.",
);

export default function GeographyPage() {
  return (
    <SubjectHubPage
      subject="Geography"
      title="Geography"
      headline="Geography current affairs — Prelims and Mains."
      blurb="Articles tagged Geography appear here automatically. They also show under Current Affairs when you filter by Prelims or Mains."
    />
  );
}
