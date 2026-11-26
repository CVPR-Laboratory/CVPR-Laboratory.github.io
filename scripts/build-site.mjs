import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
const root = process.cwd();
const context = { window: {}, URLSearchParams, Date };
vm.createContext(context);
for (const file of fs
  .readdirSync("assets/js/data")
  .filter((n) => n.endsWith(".js") && n !== "editorial.js")
  .concat("editorial.js"))
  vm.runInContext(fs.readFileSync("assets/js/data/" + file, "utf8"), context, {
    filename: file,
  });
vm.runInContext(fs.readFileSync("assets/js/portal.js", "utf8"), context, {
  filename: "portal.js",
});
const view = context.window.CVPR_VIEW,
  data = context.window.CVPR_DATA,
  version = "20261126";
const escape = (v) =>
  String(v).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const dataFiles = [
  "images",
  "research",
  "people",
  "achievements",
  "news",
  "contact",
  "editorial",
];
function document(page, id = "", prefix = "") {
  const result = view.render(page, { lang: "zh", id, prefix });
  const m = result.meta;
  const customProfile = page === "profile" && id === "wang-naiben";
  let ld = {
    "@context": "https://schema.org",
    "@type": "ResearchOrganization",
    name: "计算机视觉与模式识别实验室",
    url: "https://cvpr-laboratory.github.io/",
    parentOrganization: {
      "@type": "CollegeOrUniversity",
      name: "曲阜师范大学",
    },
  };
  if (m.record && page === "profile")
    ld = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: m.record.name.zh,
      url: m.canonical,
      description: m.record.bio.zh,
      image: "https://cvpr-laboratory.github.io/" + m.record.avatar,
    };
  if (m.record && page === "article")
    ld = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: m.record.title.zh,
      datePublished: m.record.date,
      description: m.description,
      author: { "@type": "Organization", name: "CVPR Laboratory" },
      image: m.image,
    };
  const scripts = [
    ...dataFiles.map((n) => "assets/js/data/" + n + ".js"),
    "assets/js/portal.js",
    "assets/js/site.js",
  ];
  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${escape(m.title)}</title>
  <meta name="description" content="${escape(m.description)}">
  ${(page === "profile" || page === "article") && !m.record ? '<meta name="robots" content="noindex,follow">' : ""}
  <link rel="canonical" href="${m.canonical}">
  <meta property="og:title" content="${escape(m.title)}">
  <meta property="og:description" content="${escape(m.description)}">
  <meta property="og:type" content="${page === "article" ? "article" : page === "profile" ? "profile" : "website"}">
  <meta property="og:url" content="${m.canonical}">
  <meta property="og:image" content="${m.image}">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="${prefix}images/favicon.ico">
  <link rel="stylesheet" href="${prefix}assets/css/site.css?v=${version}">
${customProfile ? `  <link rel="stylesheet" href="${prefix}assets/css/wang-naiben.css?v=${version}">\n` : ""}\
  ${page === "home" ? '<link rel="preload" as="image" type="image/webp" href="assets/images/hero/discussion-1-1920.webp" imagesrcset="assets/images/hero/discussion-1-960.webp 960w, assets/images/hero/discussion-1-1920.webp 1920w" imagesizes="100vw">' : ""}
  <script type="application/ld+json">${JSON.stringify(ld).replace(/</g, "\\u003c")}</script>
  ${scripts.map((src) => {
    const scriptVersion =
      customProfile && src === "assets/js/portal.js" ? version + "-profile" : version;
    return `<script defer src="${prefix}${src}?v=${scriptVersion}"></script>`;
  }).join("\n  ")}
</head>
<body data-page="${page}" data-prefix="${prefix}"${id ? ` data-id="${id}"` : ""}>
  ${fs.readFileSync("assets/images/icons.svg", "utf8").replace("<svg ", '<svg style="display:none" ')}
  <header id="site-header">${result.header}</header>
  <main id="page-root">${result.body}</main>
  <footer id="site-footer" class="site-footer">${result.footer}</footer>
  <button class="back-to-top" data-top title="返回顶部 / Back to top" aria-label="返回顶部 / Back to top"><svg class="icon" aria-hidden="true"><use href="#arrow-up"></use></svg></button>
</body>
</html>
`;
}
if (process.argv[2] === "--profile") {
  const id = process.argv[3];
  if (!data.PEOPLE.some((member) => member.id === id))
    throw new Error(`Unknown profile ID: ${id || "(missing)"}`);
  const file = path.join("profiles", id + ".html");
  const { body } = view.render("profile", { lang: "zh", id, prefix: "../" });
  const main = /<main id="page-root">[\s\S]*?<\/main>/;
  const html = fs.readFileSync(file, "utf8");
  if (!main.test(html)) throw new Error(`Profile content landmark is missing: ${file}`);
  fs.writeFileSync(file, html.replace(main, () => `<main id="page-root">${body}</main>`));
  console.log(`Updated the main content in ${file}.`);
  process.exit(0);
}
for (const p of [
  "home",
  "about",
  "research",
  "people",
  "achievements",
  "publications",
  "news",
  "contact",
  "profile",
  "article",
  "404",
])
  fs.writeFileSync(p === "home" ? "index.html" : p + ".html", document(p));
for (const [folder, page, items] of [
  ["profiles", "profile", data.PEOPLE],
  ["articles", "article", view.publicNews()],
]) {
  fs.mkdirSync(folder, { recursive: true });
  const currentIds = new Set(items.map((item) => item.id));
  for (const file of fs
    .readdirSync(folder)
    .filter((file) => file.endsWith(".html"))) {
    const oldId = path.basename(file, ".html");
    if (!currentIds.has(oldId))
      fs.writeFileSync(path.join(folder, file), document(page, oldId, "../"));
  }
  for (const item of items)
    fs.writeFileSync(
      path.join(folder, item.id + ".html"),
      document(page, item.id, "../"),
    );
}
console.log(
  `Generated 11 root pages, ${data.PEOPLE.length} member profiles and ${view.publicNews().length} articles.`,
);
