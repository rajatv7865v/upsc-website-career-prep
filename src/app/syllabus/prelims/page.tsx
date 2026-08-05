import type { Metadata } from "next";
import OfficialSyllabusPage, {
  officialSyllabusMetadata,
} from "@/components/OfficialSyllabusPage";

export const metadata: Metadata = officialSyllabusMetadata("prelims");

export default function PrelimsSyllabusPage() {
  return (
    <OfficialSyllabusPage slug="prelims" strategyHref="/strategy/prelims" />
  );
}
