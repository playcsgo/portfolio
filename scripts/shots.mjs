// Regenerate screenshots: node scripts/shots.mjs (uses Playwright with the system Chrome)
import { chromium } from '/Users/sam_mini/projests/yoution/yoution_code/node_modules/playwright/index.mjs';
const out = '/Users/sam_mini/projests/portfolio/src/assets/shots';
const jobs = [
  { url: 'https://agilenpi.com/mes_demo/cn', file: 'line-monitor-zh.png', wait: 8000, locale: 'zh-TW' },
  { url: 'https://agilenpi.com/mes_demo/en', file: 'line-monitor-en.png', wait: 8000, locale: 'en-US' },
  { url: 'https://yoution.app/pricing', file: 'yoution-pricing-zh.png', wait: 3000, locale: 'zh-TW' },
  { url: 'https://yoution.app/pricing', file: 'yoution-pricing-en.png', wait: 3000, locale: 'en-US' },
];
const browser = await chromium.launch({ channel: 'chrome' });
for (const j of jobs) {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 2, locale: j.locale, colorScheme: 'dark' });
  const page = await ctx.newPage();
  const res = await page.goto(j.url, { waitUntil: 'networkidle', timeout: 90000 }).catch(e => ({ status: () => e.message }));
  await page.waitForTimeout(j.wait);
  await page.screenshot({ path: `${out}/${j.file}` });
  console.log(j.file, res.status(), page.url());
  await ctx.close();
}
await browser.close();
