import type { L, Lang } from './projects';

export const site = {
  name: { zh: '呂兆中 Sam', en: 'Sam Lu' } as L,
  role: { zh: '後端工程師', en: 'Backend Engineer' } as L,
  intro: {
    zh: '呂兆中 Sam，後端工程師，10 年以上硬體製造業現場經驗。把模糊的需求整理成扛得住真實世界的系統：Yoution（AI 學習產品）、mock_mes（產線即時監控）、Focus Correction（上架 App）等作品。',
    en: 'Sam Lu, backend engineer with 10+ years on hardware manufacturing floors. I shape vague requirements into systems that hold up in the real world: Yoution (AI learning product), mock_mes (real-time line monitoring), Focus Correction (shipped app) and more.',
  } as L,
  skills: [
    { group: { zh: '語言', en: 'Languages' } as L, items: ['Python', 'TypeScript', 'JavaScript (Node.js)', 'SQL'] },
    { group: { zh: '框架', en: 'Frameworks' } as L, items: ['FastAPI', 'Next.js', 'Fastify', 'Express'] },
    { group: { zh: '資料庫', en: 'Databases' } as L, items: ['PostgreSQL / Supabase', 'MongoDB', 'MySQL', 'Redis'] },
    { group: { zh: '通訊與佇列', en: 'Messaging & APIs' } as L, items: ['REST', 'GraphQL', 'WebSocket', 'RabbitMQ', 'Webhooks'] },
    { group: { zh: '測試與部署', en: 'Testing & Ops' } as L, items: ['pytest', 'Vitest', 'Playwright', 'Docker', 'AWS', 'Vercel', 'Render'] },
  ],
  headline: {
    messy: { zh: '把模糊的需求', en: 'Vague requirements,' } as L,
    strong: { zh: '整理成扛得住真實世界的系統', en: 'shaped into systems that hold up\nin the real world' } as L,
  },
  stats: [
    { value: { zh: '10+ 年', en: '10+ yrs' } as L, label: { zh: '硬體製造業現場經驗', en: 'in hardware manufacturing' } as L },
    { value: { zh: '3 年', en: '3 yrs' } as L, label: { zh: '後端與軟體開發', en: 'in backend and software' } as L },
    { value: { zh: '4 個', en: '4' } as L, label: { zh: '上線中、可以直接點開的產品', en: 'live products you can open now' } as L },
  ],
  experience: [
    { org: 'AgileNPI LLC', role: { zh: 'Solo developer', en: 'Solo developer' } as L, period: { zh: '2026.05 – 迄今', en: 'May 2026 – present' } as L, note: { zh: '製造業顧問服務；開發 Yoution、mock_mes', en: 'Manufacturing consulting; built Yoution and mock_mes' } as L },
    { org: 'IKG Team', role: { zh: '後端工程師', en: 'Backend Engineer' } as L, period: { zh: '2024.08 – 2025.09', en: 'Aug 2024 – Sep 2025' } as L, note: { zh: '後台系統開發：TypeScript、Fastify、PostgreSQL、Redis、訊息佇列、AWS、Docker', en: 'Back-office systems: TypeScript, Fastify, PostgreSQL, Redis, message queues, AWS, Docker' } as L },
    { org: 'WINE PLUM INC.', role: { zh: '可靠度工程師暨中國廠區經理', en: 'Reliability Engineer and China Site Manager' } as L, period: { zh: '2018.08 – 迄今', en: 'Aug 2018 – present' } as L, note: { zh: '以 FTA／FMEA 在 5 個月內把市場良率從 60% 拉到 90%；協助取得 Bosch 合格供應商資格', en: 'Raised field yield from 60% to 90% in 5 months with FTA and FMEA; led the audit that qualified us as a Bosch supplier' } as L },
    { org: 'Sweet Deed Commercial', role: { zh: '負責人暨執行長', en: 'Owner and CEO' } as L, period: { zh: '2020.08 – 迄今', en: 'Aug 2020 – present' } as L, note: { zh: '日本清潔用品與香氛進口；自有馬克杯從 NPI 推進到量產', en: 'Imports Japanese cleaning supplies and fragrance; own-design mugs taken from NPI to mass production' } as L },
    { org: 'ZaoQin Electronic', role: { zh: '副總經理暨合夥人', en: 'VP and Partner' } as L, period: { zh: '2018.01 – 迄今', en: 'Jan 2018 – present' } as L, note: { zh: '重新設計流程與檢查點，客訴減少 75%', en: 'Cut customer complaints by 75% by redesigning the process flow and checkpoints' } as L },
    { org: 'SIRTEC (Dongguan)', role: { zh: '採購與認證', en: 'Sourcing and certification' } as L, period: { zh: '2016.09 – 2017.09', en: 'Sep 2016 – Sep 2017' } as L, note: { zh: '關鍵零件採購；UL／FCC／IC 認證負責人；NPI 測試計畫', en: 'Sourced key parts; certification lead for UL, FCC and IC; NPI test plans' } as L },
  ],
  education: {
    zh: '碩士 · 先進機械工程，英國布魯內爾大學　／　學士 · 土木工程，國立暨南國際大學',
    en: 'MSc Advanced Mechanical Engineering, Brunel University, UK  /  BSc Civil Engineering, National Chi Nan University',
  } as L,
  links: {
    github: 'https://github.com/playcsgo',
    email: 'formitfinal@gmail.com',
    linkedin: 'https://www.linkedin.com/in/sam-lu-983966198/',
    resume: '', // TODO: e.g. /resume.pdf placed in public/
  },
};

export const ui = {
  zh: {
    nav_projects: '作品',
    nav_experience: '經歷',
    nav_contact: '聯絡',
    featured: '精選作品',
    other: '其他作品',
    skills: '技術能力',
    contact: '聯絡',
    contact_body: '歡迎來信聊職缺。',
    index_title: '作品索引',
    works_title: '精選作品',
    works_hint: '點圖看完整案例',
    experience: '經歷',
    experience_heading: '從產線到後端：\n一樣在處理「不能出錯」的流程。',
    view_case: '看完整說明',
    links: '相關連結',
    screens: '畫面',
    barrier: '技術門檻',
    back: '所有作品',
    role: '我的角色',
    stack: '技術',
    problem: '要解決的問題',
    pain: '痛點',
    highlights: '技術重點',
    architecture: '系統架構',
    answers: '技術門檻怎麼解',
    side_systems: '周邊系統',
    learned: '學到的事',
    code: '程式碼',
    planned: '開發中',
    status_live: '上線中',
    'status_in-progress': '開發中',
    status_archived: '練習專案',
    switch_lang: 'EN',
    resume: '履歷',
    footer: '以 Astro 建置',
  },
  en: {
    nav_projects: 'Projects',
    nav_experience: 'Experience',
    nav_contact: 'Contact',
    featured: 'Featured work',
    other: 'Other work',
    skills: 'Skills',
    contact: 'Contact',
    contact_body: 'Happy to talk about roles.',
    index_title: 'Project index',
    works_title: 'Selected work',
    works_hint: 'Click an image for the case study',
    experience: 'Experience',
    experience_heading: 'From factory floors to backends:\nthe same work on processes that can\'t fail.',
    view_case: 'Read case study',
    links: 'Links',
    screens: 'Screens',
    barrier: 'The hard part',
    back: 'All projects',
    role: 'My role',
    stack: 'Stack',
    problem: 'The problem',
    pain: 'Problem',
    highlights: 'Engineering highlights',
    architecture: 'System architecture',
    answers: 'How the hard parts were solved',
    side_systems: 'Around it',
    learned: 'What I learned',
    code: 'code',
    planned: 'in progress',
    status_live: 'Live',
    'status_in-progress': 'In progress',
    status_archived: 'Learning project',
    switch_lang: '中文',
    resume: 'Résumé',
    footer: 'Built with Astro',
  },
} satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)['zh'];
export const t = (lang: Lang, key: UIKey) => ui[lang][key];
export const tx = (lang: Lang, v: L) => v[lang];

/** Project title without its subtitle, e.g. 'Simple Twitter API：PostgreSQL＋GraphQL 改寫' → 'Simple Twitter API' */
export const shortTitle = (lang: Lang, v: L) => tx(lang, v).replace(/（.*）|\(.*\)|：.*|: .*/, '').trim();

/** Site base path from astro.config, e.g. /portfolio */
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Internal link; path is the part after base and language, e.g. '/', '/#projects', '/yoution/' */
export const href = (lang: Lang, path: string) => `${BASE}${lang === 'en' ? '/en' : ''}${path}`;

/** The current page's path in the other language */
export const altPath = (lang: Lang, pathname: string) => {
  const rest = pathname.slice(BASE.length).replace(/^\/en(?=\/|$)/, '') || '/';
  return href(lang === 'zh' ? 'en' : 'zh', rest);
};
