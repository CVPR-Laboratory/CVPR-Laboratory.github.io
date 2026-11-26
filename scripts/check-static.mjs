import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
const root = process.cwd(),
  errors = [];
const context = { window: {}, URLSearchParams, Date };
vm.createContext(context);
for (const file of fs
  .readdirSync("assets/js/data")
  .filter((n) => n.endsWith(".js") && n !== "editorial.js")
  .concat("editorial.js"))
  vm.runInContext(fs.readFileSync("assets/js/data/" + file, "utf8"), context);
vm.runInContext(fs.readFileSync("assets/js/portal.js", "utf8"), context);
const data = context.window.CVPR_DATA,
  view = context.window.CVPR_VIEW;
const pages = fs
  .readdirSync(".")
  .filter((n) => n.endsWith(".html"))
  .concat(
    ...["profiles", "articles"].map((dir) =>
      fs
        .readdirSync(dir)
        .filter((n) => n.endsWith(".html"))
        .map((n) => dir + "/" + n),
    ),
  );
function exact(file) {
  let current = root;
  for (const part of file.replaceAll("\\", "/").split("/").filter(Boolean)) {
    if (!fs.existsSync(current) || !fs.readdirSync(current).includes(part))
      return false;
    current = path.join(current, part);
  }
  return fs.existsSync(current);
}
function reference(page, ref) {
  if (ref.includes(",") && /\s\d+w/.test(ref)) {
    for (const candidate of ref.split(",")) reference(page, candidate.trim().split(/\s+/)[0]);
    return;
  }
  ref = ref.replaceAll("&amp;", "&");
  if (/^(https?:|mailto:|tel:|data:|#)/i.test(ref)) return;
  const local = decodeURI(ref.split(/[?#]/)[0]);
  if (!local) return;
  const resolved = path
    .relative(root, path.resolve(path.dirname(page), local))
    .replaceAll("\\", "/");
  if (!exact(resolved))
    errors.push(page + ": missing or case-mismatched resource " + ref);
}
for (const page of pages) {
  const html = fs.readFileSync(page, "utf8");
  if ((html.match(/<h1(?:\s|>)/g) || []).length !== 1)
    errors.push(page + ": expected exactly one H1");
  for (const pattern of [
    /<title>.+<\/title>/,
    /<meta name="description" content="[^"]+"/,
    /<link rel="canonical" href="https:\/\/cvpr-laboratory.github.io\//,
    /<meta property="og:image"/,
    /<header id="site-header">/,
    /<main id="page-root">/,
  ])
    if (!pattern.test(html))
      errors.push(page + ": missing metadata or landmark " + pattern);
  for (const match of html.matchAll(/(?:src|href|srcset)="([^"]+)"/g))
    reference(page, match[1]);
  if (
    /site-loader|cursor-glow|data-theme-toggle|effects\.js|theme\.js|<canvas/.test(
      html,
    )
  )
    errors.push(page + ": retired visual effect is referenced");
}
for (const lang of ["zh", "en"])
  for (const p of data.PEOPLE) {
    const r = view.render("profile", { lang, id: p.id });
    if (
      !r.body.includes("profile-summary") ||
      !r.body.includes("biography") ||
      !r.body.includes(p.name[lang])
    )
      errors.push("Profile failed: " + p.id + " " + lang);
  }
const caoProfileZh = view.render("profile", {
  lang: "zh",
  id: "cao-jipei",
}).body;
const caoProfileEn = view.render("profile", {
  lang: "en",
  id: "cao-jipei",
}).body;
if (
  !caoProfileZh.includes("Google 学术主页") ||
  !caoProfileZh.includes('href="https://jipeicao.github.io/">个人主页') ||
  !caoProfileEn.includes("Google Scholar Profile") ||
  !caoProfileEn.includes('href="https://jipeicao.github.io/">Personal Homepage')
)
  errors.push("Cao Jipei profile homepage links are missing");
for (const lang of ["zh", "en"])
  for (const article of view.publicNews()) {
    const r = view.render("article", { lang, id: article.id });
    if (
      !r.body.includes("article-body") ||
      !r.body.includes(article.title[lang])
    )
      errors.push("Article failed: " + article.id + " " + lang);
  }
const all = view.render("achievements", { search: "type=paper&q=Transformer" });
if (!all.body.includes("publication"))
  errors.push("Publication search returned no content");
if (data.ACHIEVEMENTS.filter((a) => a.type === "paper").length !== 44)
  errors.push("Publication records changed unexpectedly");
if (data.PEOPLE.length !== 10)
  errors.push("Member records changed unexpectedly");
if (fs.readdirSync(".").filter((n) => n.endsWith(".html")).length +
    ["profiles", "articles"].reduce((n, d) => n + fs.readdirSync(d).filter((f) => f.endsWith(".html")).length, 0) !== 30)
  errors.push("Page count changed unexpectedly (expected 30)");
for (const record of data.ACHIEVEMENTS) {
  if (record.doi && record.link !== "https://doi.org/" + record.doi)
    errors.push("DOI link mismatch: " + record.id);
}
const sitemap = fs.readFileSync("sitemap.xml", "utf8");
for (const loc of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g))
  if (!loc[1].startsWith("https://cvpr-laboratory.github.io/"))
    errors.push("Invalid sitemap URL: " + loc[1]);
if (errors.length) {
  console.error([...new Set(errors)].join("\n"));
  process.exit(1);
}
console.log(
  `Static integrity passed: ${pages.length} HTML pages, 10 bilingual profiles, ${view.publicNews().length} bilingual articles, 44 papers, paths and metadata.`,
);
