import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubjectArticlesClient from "@/components/SubjectArticlesClient";
import type { SubjectTag } from "@/data/blog";

type Props = {
  subject: SubjectTag;
  title: string;
  headline: string;
  blurb: string;
};

export function subjectHubMetadata(
  title: string,
  description: string,
): Metadata {
  return { title: `${title} | Career Prepp`, description };
}

export default function SubjectHubPage({
  subject,
  title,
  headline,
  blurb,
}: Props) {
  return (
    <>
      <Header forceSolid />
      <main className="flex-1">
        <section className="border-b border-line bg-black py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="section-label !text-blue-soft">{title}</p>
            <h1 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {headline}
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/65">{blurb}</p>
          </div>
        </section>

        <section className="bg-surface py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SubjectArticlesClient subject={subject} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
