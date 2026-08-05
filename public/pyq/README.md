# Previous Year Questions (PYQ)

Upload year-wise PDFs here. Two formats per paper:

| Format | Example filename | What it is |
|--------|------------------|------------|
| **Scanned** | `prelims-gs1-scanned.pdf` | Official scan from UPSC |
| **Text** | `prelims-gs1-text.pdf` | Copy-paste / text-based PDF |

## Folder layout

```
public/pyq/
  2025/
    prelims-gs1-scanned.pdf
    prelims-gs1-text.pdf
    prelims-gs2-scanned.pdf
    prelims-gs2-text.pdf
    mains-gs1-scanned.pdf
    mains-gs1-text.pdf
    ...
  2024/
    ...
```

## Wire into the site

Edit `src/data/pyq.ts` and set paths like:

```ts
scannedPdf: "/pyq/2025/prelims-gs1-scanned.pdf",
textPdf: "/pyq/2025/prelims-gs1-text.pdf",
```

The `/pyq` page shows **Scanned PDF** and **Text PDF** buttons for Prelims and Mains, filterable by stage and year.
