import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const corePages = ["index.html", "about.html", "research.html", "people.html", "achievements.html", "news.html", "contact.html", "profile.html", "article.html"];
const requiredDocs = ["content-maintenance.md", "media-register.md", "media-register.csv", "privacy-authorization.md", "url-migration.md", "test-report.md", "deployment.md", "todo.md", "known-issues.md"];
const errors = [];

function exactPath(relativePath) {
  const parts = relativePath.replaceAll("\\", "/").split("/").filter(Boolean);
  let current = root;
  for (const part of parts) {
    if (!fs.existsSync(current)) return false;
    const match = fs.readdirSync(current).find((name) => name === part);
    if (!match) return false;
    current = path.join(current, match);
  }
  return fs.existsSync(current);
}

function localReference(reference) {
  if (!reference || /^(https?:|mailto:|tel:|data:|#)/i.test(reference)) return;
  const clean = reference.split("#")[0].split("?")[0];
  if (clean && !exactPath(clean)) errors.push(`Missing or case-mismatched path: ${reference}`);
}

for (const page of fs.readdirSync(root).filter((name) => name.endsWith(".html"))) {
  const html = fs.readFileSync(path.join(root, page), "utf8");
  if (!/<title[^>]*>[^<]+<\/title>/i.test(html)) errors.push(`${page}: missing title`);
  if (!/<meta\s+name="description"/i.test(html)) errors.push(`${page}: missing description`);
  if (corePages.includes(page)) {
    if (!/<link\s+rel="canonical"\s+href="https:\/\/cvpr-laboratory\.github\.io\//i.test(html)) errors.push(`${page}: missing absolute canonical URL`);
    if (!/<meta\s+property="og:title"/i.test(html)) errors.push(`${page}: missing Open Graph metadata`);
    if (!/id="page-root"/i.test(html)) errors.push(`${page}: missing page root`);
  }
  for (const match of html.matchAll(/(?:src|href)="([^"]+)"/gi)) localReference(match[1]);
}

const context = { window: {} };
context.window.CVPR_DATA = {};
vm.createContext(context);
for (const file of fs.readdirSync(path.join(root, "assets/js/data")).filter((name) => name.endsWith(".js"))) {
  vm.runInContext(fs.readFileSync(path.join(root, "assets/js/data", file), "utf8"), context, { filename: file });
}
const data = context.window.CVPR_DATA;
for (const item of [...(data.RESEARCH || []), ...(data.PEOPLE || []), ...(data.NEWS || [])]) {
  localReference(item.image || item.avatar);
}
for (const item of data.NEWS || []) {
  for (const field of ["author", "source", "updatedAt", "status"]) if (!item[field]) errors.push(`NEWS ${item.id}: missing ${field}`);
}
for (const item of data.PEOPLE || []) {
  for (const field of ["source", "status", "verification"]) if (!item[field]) errors.push(`PEOPLE ${item.id}: missing ${field}`);
}

const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
for (const loc of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) if (!loc[1].startsWith("https://cvpr-laboratory.github.io/")) errors.push(`sitemap.xml: non-absolute URL ${loc[1]}`);
for (const doc of requiredDocs) if (!exactPath(`docs/${doc}`)) errors.push(`Missing maintenance document: docs/${doc}`);
for (const source of ["assets/js/data/research.js", "assets/js/data/achievements.js"]) {
  if (/TODO[:：]/i.test(fs.readFileSync(path.join(root, source), "utf8"))) errors.push(`${source}: public TODO marker found`);
}

const obsoletePublicCopy = [
  "真实信息待核验后公开",
  "待内容负责人核验后公开",
  "来源已登记，公开前待最终审批",
  "Verified information will be published after review.",
  "pending final publication approval",
  "pending content review",
  "成员头像使用真实竖图比例裁切",
  "筛选动效组织实验室人员",
  "masonry-like 网格展示",
  "静态数据和本地脚本展示",
  "统计从成果数据自动生成",
  "organized through detection boxes",
  "aspect-aware cropping and robust fallbacks",
  "Mixed image ratios use an adaptive gallery",
  "旧站资料显示",
  "Existing site data indicates",
  "the old page states",
  "记录现有资料中可追溯",
  "获得可公开证据后补充",
  "retained from the existing site"
];
for (const source of ["assets/js/i18n.js", "assets/js/render.js", "assets/js/data/achievements.js", "assets/js/data/research.js"]) {
  const content = fs.readFileSync(path.join(root, source), "utf8");
  for (const phrase of obsoletePublicCopy) {
    if (content.includes(phrase)) errors.push(`${source}: obsolete public placeholder found: ${phrase}`);
  }
}

if (errors.length) {
  console.error([...new Set(errors)].join("\n"));
  process.exit(1);
}
console.log(`Static checks passed for ${corePages.length} core pages, structured data, media paths, sitemap, and maintenance documents.`);
