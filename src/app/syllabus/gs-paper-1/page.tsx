import type { Metadata } from "next";
import OfficialSyllabusPage, {
  officialSyllabusMetadata,
} from "@/components/OfficialSyllabusPage";

export const metadata: Metadata = officialSyllabusMetadata("gs-paper-1");

export default function GsPaper1Page() {
  return (
    <OfficialSyllabusPage
      slug="gs-paper-1"
      strategyHref="/strategy/gs-paper-1"
    />
  );
}
