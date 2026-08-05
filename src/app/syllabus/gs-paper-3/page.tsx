import type { Metadata } from "next";
import OfficialSyllabusPage, {
  officialSyllabusMetadata,
} from "@/components/OfficialSyllabusPage";

export const metadata: Metadata = officialSyllabusMetadata("gs-paper-3");

export default function GsPaper3Page() {
  return (
    <OfficialSyllabusPage
      slug="gs-paper-3"
      strategyHref="/strategy/gs-paper-3"
    />
  );
}
