const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const { chromium } = require("playwright");
const widths = [1920, 1440, 1366, 1024, 768, 390, 375, 320];
const routes = ["index.html", "about.html", "profiles/wang-naiben.html"];
const out = process.env.QA_OUTPUT;
let browser;
(async () => {
  browser = await chromium.launch({
    headless: true,
    executablePath: process.env.CHROME_PATH || "C:/Program Files/Google/Chrome/Application/chrome.exe",
  });
  if (out) fs.mkdirSync(out, { recursive: true });
  let checks = 0;
  for (const width of widths) {
    const height = width === 320 ? 568 : width < 768 ? 812 : 900;
    const page = await browser.newPage({ viewport: { width, height } });
    const errors = [];
    page.on("pageerror", error => errors.push(error.message));
    await page.emulateMedia({ reducedMotion: "reduce" });
    for (const route of routes) {
      for (const lang of ["zh", "en"]) {
        const url = pathToFileURL(path.join(process.cwd(), route));
        url.searchParams.set("lang", lang);
        await page.goto(url.href);
        for (const bottom of [false, true]) {
          await page.evaluate(bottom => window.scrollTo({
            top: bottom ? document.documentElement.scrollHeight : 1000,
            behavior: "instant",
          }), bottom);
          await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
          const pinned = await page.locator(width >= 768 ? "#main-navigation" : "#site-header").boundingBox();
          assert(pinned && Math.abs(pinned.y) <= 1, `${route} ${lang} ${width}: navigation scrolled away (${pinned?.y})`);
        }
        if (width < 768) {
          await page.locator("[data-menu]").click();
          await page.locator(".submenu-toggle").first().click();
          const nav = await page.locator("#main-navigation").boundingBox();
          assert(nav && nav.y + nav.height <= height + 1, `${width}: mobile menu exceeds viewport`);
          await page.locator("#main-navigation .nav-link").last().scrollIntoViewIfNeeded();
          const last = await page.locator("#main-navigation .nav-link").last().boundingBox();
          assert(last.y >= nav.y && last.y + last.height <= height + 1, `${width}: final mobile link is unreachable`);
          await page.keyboard.press("Escape");
          assert(!await page.locator("#main-navigation").isVisible(), "Escape did not close the menu");
        } else {
          await page.locator(".nav-link").nth(1).hover();
          const submenu = await page.locator(".submenu").first().boundingBox();
          assert(submenu && submenu.y >= 60, "Dropdown is clipped behind content");
          const onTop = await page.locator(".submenu a").first().evaluate(el => {
            const r = el.getBoundingClientRect();
            return el.contains(document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2));
          });
          assert(onTop, "Dropdown is covered by page content");
          await page.mouse.move(width - 2, 899);
        }
        if (route === "about.html") {
          await page.locator("#history").evaluate(el => el.scrollIntoView({ behavior: "instant", block: "start" }));
          const heading = await page.locator("#history").boundingBox();
          const pinnedHeight = await page.evaluate(() => parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-visible-height")));
          assert(heading.y >= pinnedHeight - 1, "Anchor target is hidden behind the pinned header");
        }
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false, "Horizontal overflow");
        if (out && route === "index.html" && lang === "zh" && [1440, 375].includes(width))
          await page.screenshot({ path: path.join(out, `sticky-navigation-${width}.png`) });
        checks++;
      }
    }
    assert.deepEqual(errors, []);
    await page.close();
  }
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(pathToFileURL(path.join(process.cwd(), "index.html")).href);
  await page.evaluate(() => window.scrollTo({ top: 1200, behavior: "instant" }));
  await page.locator("[data-language]").evaluate(el => el.click());
  await page.setViewportSize({ width: 375, height: 812 });
  await page.locator("[data-menu]").click();
  await page.setViewportSize({ width: 740, height: 360 });
  await page.locator("#main-navigation .nav-link").last().scrollIntoViewIfNeeded();
  const landscapeNav = await page.locator("#main-navigation").boundingBox();
  assert(landscapeNav.y + landscapeNav.height <= 361, "Landscape mobile menu exceeds viewport");
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
  assert(Math.abs((await page.locator("#main-navigation").boundingBox()).y) <= 1, "Sticky offset was not refreshed after language/viewport changes");
  const result = { date: "2026-10-25", checks, viewports: widths.length, failures: [] };
  if (out) fs.writeFileSync(path.join(out, "sticky-navigation-results.json"), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result));
})().catch(error => { console.error(error); process.exitCode = 1; }).finally(async () => { if (browser) await browser.close(); });
