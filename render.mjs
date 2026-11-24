// Render front.html to entry.png (1024x1024) with the local Playwright chromium.
// Run from this directory: node render.mjs
import { createRequire } from "node:module";
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const require = createRequire(import.meta.url);
const { chromium } = require("/home/hatch/workspace/makefun/shots-tool/node_modules/playwright");

const here = dirname(fileURLToPath(import.meta.url));
const htmlPath = join(here, "front.html");
const outPath = join(here, "entry.png");

const browser = await chromium.launch({ args: ["--no-sandbox", "--force-device-scale-factor=1"] });
const page = await browser.newPage({ viewport: { width: 1024, height: 1024 }, deviceScaleFactor: 1 });
await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "load" });
await page.waitForTimeout(400);
const shot = await page.screenshot({ path: outPath, type: "png" });
await browser.close();
writeFileSync(join(here, "render.log"), `entry.png bytes=${shot.length}\n`);
console.log(`wrote ${outPath} (${shot.length} bytes)`);
