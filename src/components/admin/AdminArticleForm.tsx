"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import RichTextEditor from "@/components/admin/RichTextEditor";
import ImageUploadField from "@/components/admin/ImageUploadField";
import { SUBJECT_TAGS, type ExamStage, type SubjectTag } from "@/data/blog";

const STAGES: ExamStage[] = ["Prelims", "Mains", "Both"];

export default function AdminArticleForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState<SubjectTag>("Polity");
  const [stage, setStage] = useState<ExamStage>("Prelims");
  const [subjects, setSubjects] = useState<SubjectTag[]>(["Polity"]);
  const [image, setImage] = useState("");
  const [alt, setAlt] = useState("");
  const [htmlContent, setHtmlContent] = useState("<p></p>");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  function handleCategoryChange(next: SubjectTag) {
    setCategory(next);
    setSubjects((current) =>
      current.includes(next) ? current : [next, ...current],
    );
  }

  function toggleSubject(subject: SubjectTag) {
    setSubjects((current) =>
      current.includes(subject)
        ? current.filter((s) => s !== subject)
        : [...current, subject],
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!image.trim()) {
      setError("Upload a cover image or paste an image URL.");
      return;
    }

    setSaving(true);

    try {
      const res = await fetch("/api/admin/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          slug: slug || undefined,
          excerpt,
          category,
          stage,
          subjects,
          image,
          alt,
          htmlContent,
        }),
      });

      const data = (await res.json()) as {
        error?: string;
        article?: { slug: string };
      };

      if (!res.ok) {
        setError(data.error ?? "Could not publish article.");
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch {
      setError("Network error. Try again.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="admin-form">
      <div className="admin-form-grid">
        <label className="admin-field admin-field-full">
          <span>Title</span>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Article headline"
            required
          />
        </label>

        <label className="admin-field">
          <span>Slug (optional)</span>
          <input
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="auto-generated-from-title"
          />
        </label>

        <label className="admin-field">
          <span>Category</span>
          <select
            value={category}
            onChange={(e) => handleCategoryChange(e.target.value as SubjectTag)}
            required
          >
            {SUBJECT_TAGS.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </label>

        <label className="admin-field admin-field-full">
          <span>Excerpt</span>
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            rows={3}
            placeholder="Short summary shown on cards and under the title"
            required
          />
        </label>

        <label className="admin-field">
          <span>Stage</span>
          <select
            value={stage}
            onChange={(e) => setStage(e.target.value as ExamStage)}
          >
            {STAGES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>

        <ImageUploadField
          label="Cover image"
          value={image}
          onChange={setImage}
          alt={alt}
          onAltChange={setAlt}
          required
        />

        <label className="admin-field admin-field-full">
          <span>Image alt text</span>
          <input
            value={alt}
            onChange={(e) => setAlt(e.target.value)}
            placeholder="Describe the cover image"
          />
        </label>

        <div className="admin-field admin-field-full">
          <span>Subject tags</span>
          <div className="admin-tag-grid">
            {SUBJECT_TAGS.map((subject) => (
              <label key={subject} className="admin-tag-option">
                <input
                  type="checkbox"
                  checked={subjects.includes(subject)}
                  onChange={() => toggleSubject(subject)}
                />
                {subject}
              </label>
            ))}
          </div>
        </div>

        <div className="admin-field admin-field-full">
          <span>Article content</span>
          <p className="mb-2 text-xs text-muted">
            Use the Image button in the toolbar to insert photos inside the article.
          </p>
          <RichTextEditor value={htmlContent} onChange={setHtmlContent} />
        </div>
      </div>

      {error && <p className="admin-error">{error}</p>}

      <div className="admin-form-actions">
        <button type="submit" className="admin-btn admin-btn-primary" disabled={saving}>
          {saving ? "Publishing…" : "Publish article"}
        </button>
      </div>
    </form>
  );
}
