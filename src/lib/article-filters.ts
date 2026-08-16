import type { BlogPost } from "@/data/blog";

export function filterPosts(
  posts: BlogPost[],
  opts: { stage?: string | null; subject?: string | null },
) {
  return posts.filter((p) => {
    const stageOk =
      !opts.stage ||
      opts.stage === "All" ||
      (opts.stage === "Prelims" &&
        (p.stage === "Prelims" || p.stage === "Both")) ||
      (opts.stage === "Mains" && (p.stage === "Mains" || p.stage === "Both"));

    const subjectOk =
      !opts.subject ||
      opts.subject === "All" ||
      p.subjects.some(
        (s) => s.toLowerCase() === opts.subject!.toLowerCase(),
      );

    return stageOk && subjectOk;
  });
}

export function scoreRelatedPosts(post: BlogPost, candidates: BlogPost[]) {
  return candidates
    .filter((p) => p.slug !== post.slug)
    .map((p) => {
      let score = 0;
      if (p.category === post.category) score += 3;
      if (
        p.stage === post.stage ||
        p.stage === "Both" ||
        post.stage === "Both"
      ) {
        score += 1;
      }
      for (const subject of post.subjects) {
        if (p.subjects.includes(subject)) score += 2;
      }
      return { post: p, score };
    })
    .sort((a, b) => b.score - a.score)
    .map(({ post }) => post);
}
