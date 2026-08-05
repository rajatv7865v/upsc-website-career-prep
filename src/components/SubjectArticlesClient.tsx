"use client";

import { Suspense } from "react";
import TaggedArticleList from "@/components/TaggedArticleList";
import type { SubjectTag } from "@/data/blog";

type Props = {
  /** When set, only that subject’s tagged articles show (Geography / Economy / Polity hubs). */
  subject?: SubjectTag;
  /** Current Affairs hub: show subject filter chips. */
  showSubjectFilter?: boolean;
};

function ArticlesInner({ subject, showSubjectFilter }: Props) {
  return (
    <TaggedArticleList
      lockedSubject={subject}
      showSubjectFilter={showSubjectFilter}
    />
  );
}

/** Wrap in Suspense — reads searchParams for stage/subject. */
export default function SubjectArticlesClient(props: Props) {
  return (
    <Suspense fallback={<p className="text-muted">Loading articles…</p>}>
      <ArticlesInner {...props} />
    </Suspense>
  );
}
