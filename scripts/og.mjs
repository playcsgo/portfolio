// Regenerate social share images (1200×630) into public/og/: node scripts/og.mjs
// Renders small HTML cards with Playwright and the system Chrome, in the site's dark palette.
import { chromium } from '/Users/sam_mini/projests/yoution/yoution_code/node_modules/playwright/index.mjs';
import { mkdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const shots = (f) => `file://${root}src/assets/shots/${f}`;
const out = join(root, 'public/og');
mkdirSync(out, { recursive: true });

const fonts =
  '<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&family=Noto+Sans+TC:wght@400;500;700&display=swap" rel="stylesheet">';
const base = `
  * { box-sizing: border-box; }
  body { margin: 0; width: 1200px; height: 630px; background: #121211; color: #edebe4; font-family: 'Geist', 'Noto Sans TC', sans-serif; overflow: hidden; }
  .mono { font-family: 'Geist Mono', monospace; }
  .faint { color: #8c897f; }
`;
const tint = (hex) => `color-mix(in srgb, ${hex} 45%, #121211)`;

const home = {
  zh: { who: '呂兆中 Sam — 後端工程師', messy: '把模糊的需求', strong: '整理成扛得住真實世界的系統', foot: 'Yoution · mock_mes · Focus Correction · 點裝備系統' },
  en: { who: 'Sam Lu — Backend Engineer', messy: 'Vague requirements,', strong: 'shaped into systems that hold up<br>in the real world', foot: 'Yoution · mock_mes · Focus Correction · Gear Upgrade Demo' },
};
const jitter = [[-6, 0.03], [4, -0.06], [-3, 0.07], [7, 0], [-5, -0.04], [3, 0.06]];
const homeHtml = (t, lang) => {
  const glyphs = lang === 'zh' ? [...t.messy] : t.messy.split(/(\s+)/).filter(Boolean);
  const messy = glyphs
    .map((g, i) => (/^\s+$/.test(g) ? g : `<span style="display:inline-block;transform:rotate(${jitter[i % 6][0]}deg) translateY(${jitter[i % 6][1]}em)">${g}</span>`))
    .join('');
  return `<!doctype html><html><head><meta charset="utf-8">${fonts}<style>${base}
    main { padding: 72px 80px; height: 100%; display: flex; flex-direction: column; }
    h1 { margin: auto 0; font-size: ${lang === 'zh' ? 68 : 62}px; line-height: 1.14; letter-spacing: -0.02em; font-weight: 600; }
    .messy { display: block; color: #8c897f; margin-bottom: 0.08em; }
  </style></head><body><main>
    <p class="mono faint" style="margin:0;font-size:20px">${t.who}</p>
    <h1><span class="messy">${messy}</span>${t.strong}</h1>
    <div style="display:flex;justify-content:space-between;border-top:1px solid #2c2b27;padding-top:24px;font-size:18px" class="mono faint">
      <span>${t.foot}</span><span>agilenpi.com/portfolio</span>
    </div>
  </main></body></html>`;
};

const projects = [
  {
    slug: 'yoution', bg: '#EBDCCF', layout: 'cascade',
    title: { zh: 'Yoution', en: 'Yoution' },
    intro: { zh: '把 YouTube、文章、PDF 總結成綱要、示意圖與測驗，用於篩選及記憶，並提供後台管理。', en: 'Summarizes YouTube videos, articles and PDFs into outlines, diagrams and quizzes, with an admin back office.' },
    shots: { zh: ['yoution-outline-zh.png', 'yoution-notes-zh.png'], en: ['yoution-outline-en.png', 'yoution-notes-en.png'] },
  },
  {
    slug: 'mock-mes', bg: '#1E2327', layout: 'frame',
    title: { zh: 'mock_mes', en: 'mock_mes' },
    intro: { zh: '即時監控產線進度與良率，異常自動通報，並由人員認領處理。', en: 'Monitors production-line progress and yield in real time and reports anomalies automatically.' },
    shots: { zh: ['line-monitor-zh.png'], en: ['line-monitor-en.png'] },
  },
  {
    slug: 'focus-correction', bg: '#16181B', layout: 'bleed',
    title: { zh: 'Focus Correction', en: 'Focus Correction' },
    intro: { zh: '記錄分心次數與時間、幫你延長專注的 App，已上架 App Store 與 Google Play。', en: 'An app that tracks how often and how long you get distracted, live on the App Store and Google Play.' },
    shots: { zh: ['focus-zh.png'], en: ['focus-en.png'] },
  },
  {
    slug: 'async-jobs-rabbitmq', bg: '#2B2521', layout: 'frame',
    title: { zh: '點裝備系統', en: 'Gear Upgrade Demo' },
    intro: { zh: '儲值、升級裝備的小遊戲；每次操作都交給 RabbitMQ 與背景 worker 處理。', en: 'A top-up and gear-upgrade game where every action goes through RabbitMQ to background workers.' },
    shots: { zh: ['gear-demo.png'], en: ['gear-demo.png'] },
  },
  {
    slug: 'twitter-api-postgresql-graphql', bg: '#DDE3E8', layout: 'code',
    title: { zh: 'Simple Twitter API', en: 'Simple Twitter API' },
    intro: { zh: '團隊專案後端的 PostgreSQL 遷移與 GraphQL 改寫。', en: 'A PostgreSQL migration and GraphQL layer for a team project backend.' },
    code: [
      ['REST · MySQL → PostgreSQL', 'GET /api/tweets\nAuthorization: Bearer &lt;jwt&gt;\n\n200 OK'],
      ['GraphQL · Apollo Server', 'query {\n  tweets {\n    id\n    User { name }\n  }\n}'],
    ],
  },
];

const panelInner = (p, lang) => {
  if (p.layout === 'code') {
    return `<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;width:100%">${p.code
      .map(([label, src]) => `<div style="border-radius:12px;overflow:hidden;background:#141414;color:#e8e6df" class="mono"><div style="padding:10px 14px;border-bottom:1px solid #2e2e2e;font-size:13px;color:#9a978e">${label}</div><pre style="margin:0;padding:14px 16px;font:inherit;font-size:15px;line-height:1.7">${src}</pre></div>`)
      .join('')}</div>`;
  }
  const imgs = p.shots[lang];
  if (p.layout === 'cascade') {
    return `<img src="${shots(imgs[0])}" style="position:absolute;top:8%;left:5%;width:70%;border-radius:12px;box-shadow:0 24px 48px rgba(60,40,20,.25)">
      <img src="${shots(imgs[1])}" style="position:absolute;right:5%;bottom:8%;width:62%;border-radius:12px;box-shadow:0 24px 48px rgba(60,40,20,.25)">`;
  }
  if (p.layout === 'bleed') return `<img src="${shots(imgs[0])}" style="height:100%;width:auto">`;
  return `<img src="${shots(imgs[0])}" style="max-width:100%;max-height:100%;border-radius:10px;box-shadow:0 24px 60px rgba(0,0,0,.45)">`;
};

const projectHtml = (p, lang) => `<!doctype html><html><head><meta charset="utf-8">${fonts}<style>${base}
    main { display: grid; grid-template-columns: 420px 1fr; gap: 48px; height: 100%; padding: 56px; }
    .text { display: flex; flex-direction: column; }
    h1 { margin: 20px 0 0; font-size: 60px; line-height: 1.05; font-weight: 600; }
    .intro { margin: 24px 0 0; font-size: 24px; line-height: 1.6; color: #cfccc3; }
    .panel { position: relative; display: flex; align-items: center; justify-content: center; border-radius: 20px; overflow: hidden; padding: ${p.layout === 'bleed' ? 0 : 32}px; background: ${tint(p.bg)}; }
  </style></head><body><main>
    <div class="text">
      <p class="mono faint" style="margin:0;font-size:18px">${lang === 'zh' ? '呂兆中 Sam · 作品集' : 'Sam Lu · Portfolio'}</p>
      <h1>${p.title[lang]}</h1>
      <p class="intro">${p.intro[lang]}</p>
      <p class="mono faint" style="margin:auto 0 0;font-size:16px">agilenpi.com/portfolio</p>
    </div>
    <div class="panel">${panelInner(p, lang)}</div>
  </main></body></html>`;

const jobs = [
  ...['zh', 'en'].map((lang) => ({ file: `home-${lang}.jpg`, html: homeHtml(home[lang], lang) })),
  ...projects.flatMap((p) => ['zh', 'en'].map((lang) => ({ file: `${p.slug}-${lang}.jpg`, html: projectHtml(p, lang) }))),
];

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
const tmp = join(tmpdir(), 'og-card.html');
for (const j of jobs) {
  writeFileSync(tmp, j.html);
  await page.goto(`file://${tmp}`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: join(out, j.file), type: 'jpeg', quality: 86 });
  console.log(j.file);
}
await browser.close();
