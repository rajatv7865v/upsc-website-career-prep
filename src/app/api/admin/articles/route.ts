import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { createArticle, listAdminArticles } from "@/lib/articles";
import type { ExamStage, SubjectTag } from "@/data/blog";
import { SUBJECT_TAGS } from "@/data/blog";
import { revalidatePath } from "next/cache";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const articles = await listAdminArticles();
    return NextResponse.json({ articles });
  } catch (error) {
    console.error("List articles failed:", error);
    return NextResponse.json(
      { error: "Could not load articles. Check MongoDB connection." },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = (await request.json()) as {
      title?: string;
      excerpt?: string;
      category?: string;
      stage?: ExamStage;
      subjects?: SubjectTag[];
      image?: string;
      alt?: string;
      htmlContent?: string;
      slug?: string;
    };

    if (!body.title?.trim()) {
      return NextResponse.json({ error: "Title is required." }, { status: 400 });
    }
    if (!body.excerpt?.trim()) {
      return NextResponse.json({ error: "Excerpt is required." }, { status: 400 });
    }
    if (!body.htmlContent?.trim()) {
      return NextResponse.json({ error: "Article content is required." }, { status: 400 });
    }
    if (!body.image?.trim()) {
      return NextResponse.json({ error: "Cover image is required." }, { status: 400 });
    }

    const stage =
      body.stage === "Prelims" || body.stage === "Mains" || body.stage === "Both"
        ? body.stage
        : "Prelims";

    const subjects = (body.subjects ?? []).filter((s): s is SubjectTag =>
      SUBJECT_TAGS.includes(s as SubjectTag),
    );

    if (subjects.length === 0) {
      return NextResponse.json(
        { error: "Select at least one subject tag." },
        { status: 400 },
      );
    }

    const article = await createArticle({
      title: body.title,
      excerpt: body.excerpt,
      category: body.category?.trim() || subjects[0],
      stage,
      subjects,
      image: body.image,
      alt: body.alt ?? body.title,
      htmlContent: body.htmlContent,
      slug: body.slug,
    });

    revalidatePath("/");
    revalidatePath("/blog");
    revalidatePath(`/blog/${article.slug}`);

    return NextResponse.json({ article }, { status: 201 });
  } catch (error) {
    console.error("Create article failed:", error);
    return NextResponse.json(
      { error: "Could not create article. Check MongoDB connection." },
      { status: 500 },
    );
  }
}
