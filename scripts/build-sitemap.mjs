import fs from "node:fs";
const base = "https://cvpr-laboratory.github.io/";
const date = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Shanghai",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date());
const pages = [
  "",
  "about.html",
  "research.html",
  "people.html",
  "achievements.html",
  "news.html",
  "contact.html",
  "publications.html",
];
for (const dir of ["profiles", "articles"])
  for (const file of fs.readdirSync(dir).filter((n) => n.endsWith(".html"))) {
    if (
      !fs
        .readFileSync(dir + "/" + file, "utf8")
        .includes('content="noindex,follow"')
    )
      pages.push(dir + "/" + file);
  }
fs.writeFileSync(
  "sitemap.xml",
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    pages
      .map(
        (p) =>
          "  <url><loc>" +
          base +
          p +
          "</loc><lastmod>" +
          date +
          "</lastmod></url>",
      )
      .join("\n") +
    "\n</urlset>\n",
);
console.log(
  "Generated sitemap with " + pages.length + " canonical public URLs.",
);
