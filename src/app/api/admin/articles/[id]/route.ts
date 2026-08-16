import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { deleteArticle } from "@/lib/articles";
import { revalidatePath } from "next/cache";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function DELETE(_request: Request, context: RouteContext) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await context.params;
    const deleted = await deleteArticle(id);

    if (!deleted) {
      return NextResponse.json({ error: "Article not found." }, { status: 404 });
    }

    revalidatePath("/");
    revalidatePath("/blog");

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Delete article failed:", error);
    return NextResponse.json(
      { error: "Could not delete article." },
      { status: 500 },
    );
  }
}
