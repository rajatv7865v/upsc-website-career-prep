import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { saveArticleImage } from "@/lib/upload";

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "No file uploaded." }, { status: 400 });
    }

    const url = await saveArticleImage(file);
    return NextResponse.json({ url });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Upload failed.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
