"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import type { Editor } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import Underline from "@tiptap/extension-underline";
import { useEffect, useRef, useState } from "react";
import { uploadAdminImage } from "@/components/admin/uploadImage";
import { cleanWordHtml, isWordHtml } from "@/lib/wordPaste";

type Props = {
  value: string;
  onChange: (html: string) => void;
};

function ToolbarButton({
  active,
  onClick,
  disabled,
  children,
  title,
}: {
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
  title: string;
}) {
  return (
    <button
      type="button"
      title={title}
      disabled={disabled}
      onClick={onClick}
      className={`admin-editor-btn ${active ? "is-active" : ""}`}
    >
      {children}
    </button>
  );
}

export default function RichTextEditor({ value, onChange }: Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const editorRef = useRef<Editor | null>(null);
  const insertPosRef = useRef<number | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");

  async function insertUploadedImage(file: File, ed?: Editor | null) {
    const editor = ed ?? editorRef.current;
    if (!editor) return;

    setUploadError("");
    setUploading(true);

    const pos = insertPosRef.current ?? editor.state.selection.from;
    insertPosRef.current = null;

    try {
      const url = await uploadAdminImage(file);
      editor
        .chain()
        .focus()
        .insertContentAt(pos, {
          type: "image",
          attrs: {
            src: url,
            alt: file.name.replace(/\.[^.]+$/, ""),
          },
        })
        .run();
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : "Upload failed.");
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        bulletList: { keepMarks: true },
        orderedList: { keepMarks: true },
      }),
      Underline,
      Link.configure({ openOnClick: false }),
      Image.configure({
        inline: false,
        allowBase64: false,
        HTMLAttributes: {
          class: "admin-editor-image",
        },
      }),
      Placeholder.configure({
        placeholder: "Write or paste from Word here…",
      }),
    ],
    content: value,
    editorProps: {
      attributes: {
        class: "admin-editor-content",
      },
      transformPastedHTML(html) {
        if (isWordHtml(html)) return cleanWordHtml(html);
        return html;
      },
      handlePaste(_view, event) {
        const clipboard = event.clipboardData;
        if (!clipboard) return false;

        const imageItem = Array.from(clipboard.items).find((item) =>
          item.type.startsWith("image/"),
        );
        if (imageItem) {
          event.preventDefault();
          const file = imageItem.getAsFile();
          if (file) void insertUploadedImage(file);
          return true;
        }

        const html = clipboard.getData("text/html");
        if (html && isWordHtml(html)) {
          event.preventDefault();
          const ed = editorRef.current;
          if (!ed) return false;
          ed.chain().focus().insertContent(cleanWordHtml(html)).run();
          return true;
        }

        return false;
      },
      handleDrop(view, event) {
        const file = event.dataTransfer?.files?.[0];
        if (!file?.type.startsWith("image/")) return false;

        event.preventDefault();
        const pos = view.posAtCoords({
          left: event.clientX,
          top: event.clientY,
        })?.pos;
        if (typeof pos === "number") insertPosRef.current = pos;
        void insertUploadedImage(file);
        return true;
      },
    },
    onUpdate: ({ editor: ed }) => {
      onChange(ed.getHTML());
    },
  });

  useEffect(() => {
    editorRef.current = editor;
  }, [editor]);

  useEffect(() => {
    if (!editor) return;
    if (editor.getHTML() !== value) {
      editor.commands.setContent(value || "<p></p>", { emitUpdate: false });
    }
  }, [editor, value]);

  function openImagePicker() {
    if (!editor) return;
    insertPosRef.current = editor.state.selection.from;
    fileRef.current?.click();
  }

  if (!editor) {
    return (
      <div className="admin-editor-shell">
        <p className="p-4 text-sm text-muted">Loading editor…</p>
      </div>
    );
  }

  return (
    <div className="admin-editor-shell">
      <div className="admin-editor-toolbar">
        <ToolbarButton
          title="Bold"
          active={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          B
        </ToolbarButton>
        <ToolbarButton
          title="Italic"
          active={editor.isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          I
        </ToolbarButton>
        <ToolbarButton
          title="Underline"
          active={editor.isActive("underline")}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          U
        </ToolbarButton>
        <ToolbarButton
          title="Heading 2"
          active={editor.isActive("heading", { level: 2 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        >
          H2
        </ToolbarButton>
        <ToolbarButton
          title="Bullet list"
          active={editor.isActive("bulletList")}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          • List
        </ToolbarButton>
        <ToolbarButton
          title="Ordered list"
          active={editor.isActive("orderedList")}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          1. List
        </ToolbarButton>
        <ToolbarButton
          title="Blockquote"
          active={editor.isActive("blockquote")}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        >
          Quote
        </ToolbarButton>
        <ToolbarButton
          title="Add link"
          onClick={() => {
            const url = window.prompt("Link URL");
            if (url === null) return;
            if (url === "") {
              editor.chain().focus().unsetLink().run();
              return;
            }
            editor.chain().focus().setLink({ href: url }).run();
          }}
        >
          Link
        </ToolbarButton>
        <ToolbarButton
          title="Insert image at cursor"
          disabled={uploading}
          onClick={openImagePicker}
        >
          {uploading ? "Uploading…" : "Image"}
        </ToolbarButton>
        <input
          ref={fileRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) void insertUploadedImage(file);
          }}
        />
      </div>
      <EditorContent editor={editor} />
      <p className="admin-editor-tip">
        Click in the text first, then use Image to insert at that spot. Paste
        from Word keeps bullets, bold, and underline.
      </p>
      {uploadError && <p className="admin-error px-3 pb-3">{uploadError}</p>}
    </div>
  );
}
