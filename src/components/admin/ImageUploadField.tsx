"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { uploadAdminImage } from "@/components/admin/uploadImage";

type Props = {
  label: string;
  value: string;
  onChange: (url: string) => void;
  alt?: string;
  onAltChange?: (alt: string) => void;
  required?: boolean;
};

export default function ImageUploadField({
  label,
  value,
  onChange,
  alt,
  onAltChange,
  required = false,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setError("");
    setUploading(true);

    try {
      const url = await uploadAdminImage(file);
      onChange(url);
      if (onAltChange && !alt?.trim()) {
        onAltChange(file.name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " "));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed.");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  return (
    <div className="admin-field admin-field-full">
      <span>{label}</span>

      <div className="admin-upload-box">
        {value ? (
          <div className="admin-upload-preview">
            <Image
              src={value}
              alt={alt || "Cover preview"}
              fill
              className="object-cover"
              sizes="320px"
              unoptimized={value.startsWith("/uploads/")}
            />
          </div>
        ) : (
          <div className="admin-upload-placeholder">
            <p>No image selected</p>
            <p className="admin-upload-hint">JPG, PNG, WebP, or GIF · max 5 MB</p>
          </div>
        )}

        <div className="admin-upload-actions">
          <input
            ref={inputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            className="hidden"
            onChange={(e) => void handleFileChange(e)}
          />
          <button
            type="button"
            className="admin-btn admin-btn-primary"
            disabled={uploading}
            onClick={() => inputRef.current?.click()}
          >
            {uploading ? "Uploading…" : value ? "Replace image" : "Upload image"}
          </button>
          {value && (
            <button
              type="button"
              className="admin-btn admin-btn-ghost"
              onClick={() => onChange("")}
            >
              Remove
            </button>
          )}
        </div>
      </div>

      <label className="admin-field mt-3">
        <span>Or paste image URL</span>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="https://… or /uploads/articles/…"
          required={required && !value}
        />
      </label>

      {error && <p className="admin-error !mt-2">{error}</p>}
    </div>
  );
}
