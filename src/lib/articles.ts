import { ObjectId, type WithId } from "mongodb";
import {
  type BlogPost,
  type ExamStage,
  type SubjectTag,
  SUBJECT_TAGS,
} from "@/data/blog";
import { ARTICLES_COLLECTION, getDb } from "@/lib/mongodb";
import {
  estimateReadTime,
  formatArticleDate,
  htmlToParagraphs,
  slugify,
} from "@/lib/html";
import { filterPosts, scoreRelatedPosts } from "@/lib/article-filters";

export type ArticleDocument = {
  slug: string;
  category: string;
  stage: ExamStage;
  subjects: SubjectTag[];
  title: string;
  excerpt: string;
  read: string;
  date: string;
  image: string;
  alt: string;
  content: string[];
  htmlContent: string;
  createdAt: Date;
  updatedAt: Date;
};

export type AdminArticle = BlogPost & {
  id: string;
  htmlContent: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateArticleInput = {
  title: string;
  excerpt: string;
  category: string;
  stage: ExamStage;
  subjects: SubjectTag[];
  image: string;
  alt: string;
  htmlContent: string;
  slug?: string;
};

function mapDocument(doc: WithId<ArticleDocument>): AdminArticle {
  return {
    id: doc._id.toString(),
    slug: doc.slug,
    category: doc.category,
    stage: doc.stage,
    subjects: doc.subjects,
    title: doc.title,
    excerpt: doc.excerpt,
    read: doc.read,
    date: doc.date,
    image: doc.image,
    alt: doc.alt,
    content: doc.content,
    htmlContent: doc.htmlContent,
    createdAt: doc.createdAt.toISOString(),
    updatedAt: doc.updatedAt.toISOString(),
  };
}

function toBlogPost(article: AdminArticle | BlogPost): BlogPost {
  return {
    slug: article.slug,
    category: article.category,
    stage: article.stage,
    subjects: article.subjects,
    title: article.title,
    excerpt: article.excerpt,
    read: article.read,
    date: article.date,
    image: article.image,
    alt: article.alt,
    content: article.content,
    htmlContent: "htmlContent" in article ? article.htmlContent : undefined,
  };
}

async function getMongoArticles(): Promise<AdminArticle[]> {
  try {
    const db = await getDb();
    const docs = await db
      .collection<ArticleDocument>(ARTICLES_COLLECTION)
      .find()
      .sort({ createdAt: -1 })
      .toArray();
    return docs.map(mapDocument);
  } catch {
    return [];
  }
}

/** All articles from MongoDB (newest first). */
export async function getAllArticles(): Promise<BlogPost[]> {
  const mongo = await getMongoArticles();
  return mongo.map(toBlogPost);
}

export async function getPostBySlug(slug: string) {
  const all = await getAllArticles();
  return all.find((p) => p.slug === slug) ?? null;
}

export async function getRelatedPosts(post: BlogPost, limit = 4) {
  const all = await getAllArticles();
  const scored = scoreRelatedPosts(post, all);

  if (scored.length >= limit) {
    return scored.slice(0, limit);
  }

  const used = new Set([post.slug, ...scored.map((p) => p.slug)]);
  const fillers = all.filter((p) => !used.has(p.slug));
  return [...scored, ...fillers].slice(0, limit);
}

export async function getAllSlugs() {
  const all = await getAllArticles();
  return all.map((p) => p.slug);
}

export async function listAdminArticles() {
  return getMongoArticles();
}

export async function createArticle(input: CreateArticleInput) {
  const db = await getDb();
  const collection = db.collection<ArticleDocument>(ARTICLES_COLLECTION);

  const baseSlug = slugify(input.slug?.trim() || input.title);
  let slug = baseSlug || `article-${Date.now()}`;
  let suffix = 1;

  while (await collection.findOne({ slug })) {
    slug = `${baseSlug}-${suffix}`;
    suffix += 1;
  }

  const now = new Date();
  const content = htmlToParagraphs(input.htmlContent);
  const doc: ArticleDocument = {
    slug,
    category: input.category,
    stage: input.stage,
    subjects: input.subjects.filter((s) =>
      SUBJECT_TAGS.includes(s),
    ) as SubjectTag[],
    title: input.title.trim(),
    excerpt: input.excerpt.trim(),
    read: estimateReadTime(input.htmlContent),
    date: formatArticleDate(now),
    image: input.image.trim(),
    alt: input.alt.trim() || input.title.trim(),
    content,
    htmlContent: input.htmlContent,
    createdAt: now,
    updatedAt: now,
  };

  const result = await collection.insertOne(doc);
  return mapDocument({ ...doc, _id: result.insertedId });
}

export async function deleteArticle(id: string) {
  if (!ObjectId.isValid(id)) return false;
  const db = await getDb();
  const result = await db
    .collection(ARTICLES_COLLECTION)
    .deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount === 1;
}
