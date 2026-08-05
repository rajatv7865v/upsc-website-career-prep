import type { Metadata } from "next";
import SubjectHubPage, {
  subjectHubMetadata,
} from "@/components/SubjectHubPage";

export const metadata: Metadata = subjectHubMetadata(
  "Environment",
  "Environment current affairs for Prelims and Mains — climate, biodiversity, and conservation.",
);

export default function EnvironmentPage() {
  return (
    <SubjectHubPage
      subject="Environment"
      title="Environment"
      headline="Environment current affairs — Prelims and Mains."
      blurb="Articles tagged Environment appear here automatically and under Current Affairs when filtered by stage."
    />
  );
}
