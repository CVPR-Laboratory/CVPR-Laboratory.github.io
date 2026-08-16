import fs from "node:fs";

const base = "https://cvpr-laboratory.github.io/";
const lastmod = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Shanghai",
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
}).format(new Date());
const pages = [
  ["", "weekly", "1.0"],
  ["about.html", "monthly", "0.8"],
  ["research.html", "monthly", "0.8"],
  ["people.html", "monthly", "0.9"],
  ["achievements.html", "monthly", "0.9"],
  ["news.html", "weekly", "0.8"],
  ["contact.html", "yearly", "0.6"]
];

const body = pages.map(([page, frequency, priority]) => [
  "  <url>",
  `    <loc>${base}${page}</loc>`,
  `    <lastmod>${lastmod}</lastmod>`,
  `    <changefreq>${frequency}</changefreq>`,
  `    <priority>${priority}</priority>`,
  "  </url>"
].join("\n")).join("\n");

fs.writeFileSync("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`);
console.log(`Generated sitemap.xml with ${pages.length} public URLs (${lastmod}).`);
