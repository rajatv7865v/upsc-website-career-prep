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
      blurb="High-yield notes on ecology, biodiversity conservation, climate change conventions, and environmental governance for Prelims and Mains."
    />
  );
}
