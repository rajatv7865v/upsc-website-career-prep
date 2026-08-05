import type { Metadata } from "next";
import OfficialSyllabusPage, {
  officialSyllabusMetadata,
} from "@/components/OfficialSyllabusPage";

export const metadata: Metadata = officialSyllabusMetadata("gs-paper-2");

export default function GsPaper2Page() {
  return (
    <OfficialSyllabusPage
      slug="gs-paper-2"
      strategyHref="/strategy/gs-paper-2"
    />
  );
}
