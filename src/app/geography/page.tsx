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
      headline="Geography — Prelims and Mains."
      blurb="Explore in-depth physical and human geography notes, map-based case studies, climate systems, and high-yield location pointers structured for Prelims and Mains."
    />
  );
}
