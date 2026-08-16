import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { randomBytes } from "crypto";

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads", "articles");
const MAX_BYTES = 5 * 1024 * 1024;
const ALLOWED_TYPES = new Map([
  ["image/jpeg", ".jpg"],
  ["image/png", ".png"],
  ["image/webp", ".webp"],
  ["image/gif", ".gif"],
]);

export async function saveArticleImage(file: File) {
  if (!ALLOWED_TYPES.has(file.type)) {
    throw new Error("Only JPG, PNG, WebP, and GIF images are allowed.");
  }

  if (file.size > MAX_BYTES) {
    throw new Error("Image must be 5 MB or smaller.");
  }

  await mkdir(UPLOAD_DIR, { recursive: true });

  const ext = ALLOWED_TYPES.get(file.type)!;
  const filename = `${Date.now()}-${randomBytes(6).toString("hex")}${ext}`;
  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(path.join(UPLOAD_DIR, filename), buffer);

  return `/uploads/articles/${filename}`;
}
