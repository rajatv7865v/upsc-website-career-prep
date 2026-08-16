export async function uploadAdminImage(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("/api/admin/upload", {
    method: "POST",
    body: formData,
  });

  const data = (await res.json()) as { url?: string; error?: string };

  if (!res.ok || !data.url) {
    throw new Error(data.error ?? "Upload failed.");
  }

  return data.url;
}
