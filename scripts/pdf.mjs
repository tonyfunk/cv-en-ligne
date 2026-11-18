// Renders the built site's print layout to PDF (FR + EN) and the Open Graph image.
// Usage: npm run pdf   (builds first, then writes into public/)
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const DIST = new URL("../dist/", import.meta.url).pathname;
const PUBLIC = new URL("../public/", import.meta.url).pathname;
const types = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".pdf": "application/pdf" };

const server = createServer(async (req, res) => {
  let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
  if (p.endsWith("/")) p += "index.html";
  try {
    const body = await readFile(join(DIST, p));
    res.writeHead(200, { "content-type": types[extname(p)] ?? "application/octet-stream" }).end(body);
  } catch {
    res.writeHead(404).end();
  }
}).listen(0);
const base = `http://localhost:${server.address().port}`;

const browser = await chromium.launch();
const page = await browser.newPage();

for (const [lang, path] of [["FR", "/"], ["EN", "/en/"]]) {
  await page.goto(base + path, { waitUntil: "networkidle" });
  await page.emulateMedia({ media: "print" });
  await page.pdf({ path: join(PUBLIC, `Antoine_Lebeau_CV_${lang}.pdf`), format: "A4", printBackground: true, preferCSSPageSize: true });
  console.log(`✓ Antoine_Lebeau_CV_${lang}.pdf`);
}

// Open Graph preview (1200×630) — the hero section in dark mode.
const og = await browser.newPage({ viewport: { width: 1200, height: 630 }, colorScheme: "dark" });
await og.goto(base + "/", { waitUntil: "networkidle" });
await og.addStyleTag({ content: ".nav{display:none}.js .reveal{opacity:1!important;transform:none!important;transition:none!important}.hero{padding-top:110px}.hero-summary,.actions,.pill{display:none}" });
await og.screenshot({ path: join(PUBLIC, "og.jpg"), type: "jpeg", quality: 85 });
console.log("✓ og.jpg");

await browser.close();
server.close();
