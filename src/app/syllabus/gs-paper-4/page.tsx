import type { Metadata } from "next";
import OfficialSyllabusPage, {
  officialSyllabusMetadata,
} from "@/components/OfficialSyllabusPage";

export const metadata: Metadata = officialSyllabusMetadata("gs-paper-4");

export default function GsPaper4Page() {
  return (
    <OfficialSyllabusPage
      slug="gs-paper-4"
      strategyHref="/strategy/gs-paper-4"
    />
  );
}
