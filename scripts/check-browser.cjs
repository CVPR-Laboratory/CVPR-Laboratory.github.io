const fs = require("fs"),
  path = require("path"),
  http = require("http"),
  vm = require("vm");
const { chromium } = require("playwright");
const root = process.cwd(),
  out = path.resolve(process.env.QA_OUTPUT || "qa-output");
fs.mkdirSync(out, { recursive: true });
const c = { window: {}, URLSearchParams, Date };
vm.createContext(c);
for (const file of fs
  .readdirSync("assets/js/data")
  .filter((n) => n.endsWith(".js")))
  vm.runInContext(fs.readFileSync("assets/js/data/" + file, "utf8"), c);
vm.runInContext(fs.readFileSync("assets/js/portal.js", "utf8"), c);
const pages = [
  "index.html",
  "about.html",
  "research.html",
  "people.html",
  "achievements.html",
  "publications.html",
  "news.html",
  "contact.html",
  "404.html",
  "profile.html?id=missing",
  "article.html?id=missing",
  ...c.window.CVPR_DATA.PEOPLE.map((p) => "profiles/" + p.id + ".html"),
  ...c.window.CVPR_VIEW.publicNews().map((n) => "articles/" + n.id + ".html"),
];
const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".pdf": "application/pdf",
  ".ico": "image/x-icon",
};
const server = http.createServer((req, res) => {
  const file = path.join(
    root,
    decodeURIComponent(new URL(req.url, "http://localhost").pathname),
  );
  if (
    !file.startsWith(root) ||
    !fs.existsSync(file) ||
    fs.statSync(file).isDirectory()
  ) {
    res.writeHead(404);
    res.end();
    return;
  }
  res.setHeader(
    "Content-Type",
    mime[path.extname(file)] || "application/octet-stream",
  );
  fs.createReadStream(file).pipe(res);
});
(async () => {
  await new Promise((r) => server.listen(0, "127.0.0.1", r));
  const base = "http://127.0.0.1:" + server.address().port + "/";
  const browser = await chromium.launch({
    headless: true,
    executablePath:
      process.env.CHROME_PATH ||
      "C:/Program Files/Google/Chrome/Application/chrome.exe",
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  const failures = [],
    errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("response", (r) => {
    if (r.url().startsWith(base) && r.status() >= 400)
      errors.push(r.status() + " " + r.url());
  });
  let checks = 0;
  for (const [width, height] of [
    [1920, 1080],
    [1440, 900],
    [1366, 768],
    [1024, 768],
    [768, 1024],
    [390, 844],
    [375, 812],
    [320, 760],
  ]) {
    await page.setViewportSize({ width, height });
    for (const route of width === 1440 || width === 375
      ? pages
      : [
          "index.html",
          "people.html",
          "achievements.html",
          "profiles/wang-naiben.html",
          "articles/news-003.html",
        ]) {
      await page.goto(base + route, { waitUntil: "networkidle" });
      await page
        .locator("img")
        .evaluateAll((images) => images.forEach((i) => (i.loading = "eager")));
      await page.evaluate(() =>
        Promise.all(
          [...document.images].map((i) => i.decode().catch(() => {})),
        ),
      );
      const result = await page.evaluate(() => ({
        h1: document.querySelectorAll("h1").length,
        overflow: document.documentElement.scrollWidth > innerWidth + 1,
        main: document.querySelector("main").innerText.length,
        broken: [...document.images]
          .filter((i) => i.complete && !i.naturalWidth)
          .map((i) => i.src),
      }));
      if (route.startsWith("profiles/") && width >= 375) {
        const aligned = await page
          .locator(".profile-summary")
          .evaluate((box) => {
            const photo = box.querySelector("img").getBoundingClientRect();
            const text = box
              .querySelector(":scope > div")
              .getBoundingClientRect();
            return photo.left < text.left && Math.abs(photo.top - text.top) < 5;
          });
        if (!aligned)
          failures.push({ route, width, profileColumnsMisaligned: true });
      }
      checks++;
      if (
        result.h1 !== 1 ||
        result.overflow ||
        result.main < 15 ||
        result.broken.length
      )
        failures.push({ route, width, ...result });
      if (
        (route === "index.html" ||
          route === "profiles/wang-naiben.html" ||
          ([
            "about.html",
            "people.html",
            "achievements.html",
            "articles/news-003.html",
          ].includes(route) &&
            [1440, 375].includes(width))) &&
        [1920, 1440, 1366, 768, 390, 375, 320].includes(width)
      )
        await page.screenshot({
          path: path.join(
            out,
            route.split(".")[0].replaceAll("/", "-") + "-" + width + ".png",
          ),
          fullPage: true,
        });
    }
  }
  for (const width of [1440, 375, 320]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of [
      "index.html",
      "about.html",
      "research.html",
      "people.html",
      "achievements.html",
      "news.html",
      "contact.html",
      "profiles/wang-naiben.html",
      "articles/news-003.html",
    ]) {
      await page.goto(base + route + "?lang=en", { waitUntil: "networkidle" });
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth + 1,
      );
      checks++;
      if (
        overflow ||
        (await page.locator("html").getAttribute("lang")) !== "en"
      )
        failures.push({ route, width, english: true, overflow });
    }
  }
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(base + "achievements.html");
  await page.locator("[name=type]").selectOption("paper");
  await page.locator("[name=q]").fill("Transformer");
  await page.locator("[data-filters] button").click();
  if ((await page.locator(".publication").count()) < 1)
    failures.push("Search returned no results");
  await page.locator("[data-language]").click();
  if (
    (await page.locator("html").getAttribute("lang")) !== "en" ||
    !(await page.locator("[name=q]").inputValue()).includes("Transformer")
  )
    failures.push("Language lost filter context");
  await page.goto(base + "achievements.html?type=paper");
  await page.locator(".pagination a").first().click();
  if (!page.url().includes("page="))
    failures.push("Pagination did not navigate");
  await page.goto(base + "profiles/wang-naiben.html?lang=en");
  if (
    !(await page.locator(".profile-summary").count()) ||
    !(await page.locator("h1").innerText()).includes("Naiben")
  )
    failures.push("English profile failed");
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(base + "index.html?lang=zh");
  await page.locator("[data-menu]").click();
  if (!(await page.locator("#main-navigation").isVisible()))
    failures.push("Mobile menu failed");
  await page.locator("[aria-controls=sub-people]").click();
  if (!(await page.locator("#sub-people").isVisible()))
    failures.push("Mobile submenu failed");
  await page.keyboard.press("Escape");
  if (await page.locator("#main-navigation").isVisible())
    failures.push("Escape did not close menu");
  await page.locator("[data-carousel=next]").click();
  if (!(await page.locator('[data-slide="1"]').isVisible()))
    failures.push("Carousel next failed");
  await page.locator('[data-carousel-index="0"]').click();
  if (!(await page.locator('[data-slide="0"]').isVisible()))
    failures.push("Carousel indicator failed");
  const noJs = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 1440, height: 900 },
  });
  const staticPage = await noJs.newPage();
  for (const route of [
    "index.html",
    "profiles/wang-naiben.html",
    "articles/news-003.html",
    "publications.html",
  ]) {
    await staticPage.goto(base + route);
    if ((await staticPage.locator("main").innerText()).length < 50)
      failures.push("No-script page empty: " + route);
  }
  await noJs.close();
  await browser.close();
  server.close();
  const result = {
    checks,
    viewports: 8,
    profileCount: 9,
    articleCount: c.window.CVPR_VIEW.publicNews().length,
    failures,
    errors: [...new Set(errors)],
  };
  fs.writeFileSync(
    path.join(out, "results.json"),
    JSON.stringify(result, null, 2),
  );
  console.log(JSON.stringify(result, null, 2));
  if (failures.length || errors.length) process.exitCode = 1;
})().catch((e) => {
  console.error(e);
  server.close();
  process.exitCode = 1;
});
