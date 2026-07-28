import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const rootPages = fs.readdirSync(root).filter((name) => name.endsWith(".html"));
const errors = [];

function existsWithExactCase(relativePath) {
  const parts = relativePath.split("/").filter(Boolean);
  let current = root;
  for (const part of parts) {
    if (!fs.existsSync(current)) return false;
    const match = fs.readdirSync(current).find((name) => name === part);
    if (!match) return false;
    current = path.join(current, match);
  }
  return fs.existsSync(current);
}

function checkReference(page, reference) {
  if (!reference || /^(https?:|mailto:|tel:|data:|#)/i.test(reference)) return;
  const clean = reference.split("#")[0].split("?")[0];
  if (!clean) return;
  if (!existsWithExactCase(clean)) errors.push(`${page}: missing or case-mismatched path ${reference}`);
}

for (const page of rootPages) {
  const content = fs.readFileSync(path.join(root, page), "utf8");
  if (!/<title[^>]*>[^<]+<\/title>/i.test(content)) errors.push(`${page}: missing title`);
  if (page !== "404.html" && !/<meta\s+name="description"/i.test(content)) errors.push(`${page}: missing description`);
  if (page !== "404.html" && !/id="page-root"/i.test(content)) errors.push(`${page}: missing page root`);
  for (const match of content.matchAll(/(?:src|href)="([^"]+)"/gi)) checkReference(page, match[1]);
}

for (const relativePath of ["assets/js/data/research.js", "assets/js/data/achievements.js"]) {
  const content = fs.readFileSync(path.join(root, relativePath), "utf8");
  if (/TODO[:：]/i.test(content)) errors.push(`${relativePath}: public TODO marker found`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Static checks passed for ${rootPages.length} HTML pages.`);
