/** Clean HTML pasted from Microsoft Word while keeping structure. */
export function cleanWordHtml(html: string) {
  if (typeof window === "undefined") return html;

  const doc = new DOMParser().parseFromString(html, "text/html");

  doc
    .querySelectorAll("style, meta, link, script, xml, title")
    .forEach((node) => node.remove());

  doc.body.innerHTML = doc.body.innerHTML
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<o:p>\s*<\/o:p>/gi, "")
    .replace(/&nbsp;/g, " ");

  normalizeWordLists(doc.body);

  doc.body.querySelectorAll("*").forEach((el) => {
    el.removeAttribute("class");
    el.removeAttribute("id");

    const style = el.getAttribute("style");
    if (style) {
      const keep = style
        .split(";")
        .map((rule) => rule.trim())
        .filter((rule) => {
          const key = rule.split(":")[0]?.trim().toLowerCase();
          return (
            key === "font-weight" ||
            key === "font-style" ||
            key === "text-decoration" ||
            key === "text-align"
          );
        })
        .join("; ");
      if (keep) el.setAttribute("style", keep);
      else el.removeAttribute("style");
    }

    if (
      el.tagName === "SPAN" &&
      el.attributes.length === 0 &&
      el.childNodes.length
    ) {
      const parent = el.parentNode;
      if (parent) {
        while (el.firstChild) parent.insertBefore(el.firstChild, el);
        parent.removeChild(el);
      }
    }
  });

  return doc.body.innerHTML.trim();
}

function normalizeWordLists(root: HTMLElement) {
  const paragraphs = Array.from(root.querySelectorAll("p"));

  let currentList: HTMLOListElement | HTMLUListElement | null = null;
  let currentType: "ul" | "ol" | null = null;

  for (const p of paragraphs) {
    const text = p.textContent?.trim() ?? "";
    const bulletMatch = text.match(/^([•●○▪\-–—]|\d+[.)])\s+([\s\S]*)$/);
    const isMsoList =
      p.getAttribute("style")?.includes("mso-list") ||
      p.className.includes("MsoList");

    if (bulletMatch || isMsoList) {
      const content = bulletMatch?.[2] ?? text.replace(/^[•●○▪\-–—]\s*/, "");
      const isOrdered = Boolean(bulletMatch?.[1]?.match(/^\d+[.)]/));

      if (!currentList || currentType !== (isOrdered ? "ol" : "ul")) {
        currentList = document.createElement(isOrdered ? "ol" : "ul");
        currentType = isOrdered ? "ol" : "ul";
        p.parentNode?.insertBefore(currentList, p);
      }

      const li = document.createElement("li");
      li.innerHTML = p.innerHTML.trim() || content || "&nbsp;";
      currentList.appendChild(li);
      p.remove();
    } else if (text) {
      currentList = null;
      currentType = null;
    }
  }
}

export function isWordHtml(html: string) {
  return /class=["']?Mso|mso-|Word\.Document|xmlns:o=|<!--\[if gte mso/i.test(
    html,
  );
}
