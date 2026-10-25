const http = require("http"),
  fs = require("fs"),
  path = require("path");
const { chromium } = require("playwright");
const root = process.cwd(),
  output = path.resolve(process.env.QA_OUTPUT || "qa-output");
fs.mkdirSync(output, { recursive: true });
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "application/javascript",
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
};
const server = http.createServer((request, response) => {
  const file = path.join(
    root,
    decodeURI(new URL(request.url, "http://localhost").pathname),
  );
  if (
    !file.startsWith(root) ||
    !fs.existsSync(file) ||
    fs.statSync(file).isDirectory()
  ) {
    response.writeHead(404);
    response.end();
    return;
  }
  response.setHeader(
    "Content-Type",
    types[path.extname(file)] || "application/octet-stream",
  );
  fs.createReadStream(file).pipe(response);
});
let browser;
(async () => {
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  browser = await chromium.launch({
    executablePath:
      process.env.CHROME_PATH ||
      "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
  });
  const page = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 1,
    isMobile: true,
    hasTouch: true,
  });
  await page.addInitScript(() => {
    window.sample = { lcp: 0, cls: 0 };
    new PerformanceObserver((list) =>
      list
        .getEntries()
        .forEach((entry) => (window.sample.lcp = entry.startTime)),
    ).observe({ type: "largest-contentful-paint", buffered: true });
    new PerformanceObserver((list) =>
      list.getEntries().forEach((entry) => {
        if (!entry.hadRecentInput) window.sample.cls += entry.value;
      }),
    ).observe({ type: "layout-shift", buffered: true });
  });
  const session = await page.context().newCDPSession(page);
  await session.send("Network.enable");
  await session.send("Network.setCacheDisabled", { cacheDisabled: true });
  await session.send("Network.emulateNetworkConditions", {
    offline: false,
    latency: 150,
    downloadThroughput: 200000,
    uploadThroughput: 75000,
    connectionType: "cellular4g",
  });
  await session.send("Emulation.setCPUThrottlingRate", { rate: 4 });
  await page.goto("http://127.0.0.1:" + server.address().port + "/index.html", {
    waitUntil: "networkidle",
  });
  await page.waitForTimeout(1000);
  const sample = await page.evaluate(() => ({
    ...window.sample,
    hero: document.querySelector(".hero img").currentSrc,
  }));
  sample.conditions = {
    viewport: "390x844",
    cpuSlowdown: 4,
    downloadMbps: 1.6,
    latencyMs: 150,
    cache: "disabled",
    INP: "not measured",
    scope: "single local laboratory sample; not field data",
  };
  fs.writeFileSync(
    path.join(output, "performance.json"),
    JSON.stringify(sample, null, 2),
  );
  console.log(JSON.stringify(sample, null, 2));
})()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    if (browser) await browser.close();
    server.close();
  });
