"use client";

import { Suspense } from "react";
import TaggedArticleList from "@/components/TaggedArticleList";
import type { BlogPost, SubjectTag } from "@/data/blog";

type Props = {
  posts: BlogPost[];
  subject?: SubjectTag;
  showSubjectFilter?: boolean;
};

function ArticlesInner({ posts, subject, showSubjectFilter }: Props) {
  return (
    <TaggedArticleList
      posts={posts}
      lockedSubject={subject}
      showSubjectFilter={showSubjectFilter}
    />
  );
}

export default function SubjectArticlesClient(props: Props) {
  return (
    <Suspense fallback={<p className="text-muted">Loading articles…</p>}>
      <ArticlesInner {...props} />
    </Suspense>
  );
}

export function BlogIndexList({ posts }: { posts: BlogPost[] }) {
  return (
    <TaggedArticleList
      posts={posts}
      showSubjectFilter
      emptyHint="Open any article and tap Favourite to save it here — or reset filters."
    />
  );
}
