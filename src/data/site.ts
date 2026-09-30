import type { L, Lang } from './projects';

export const site = {
  name: { zh: '呂兆中 Sam', en: 'Sam Lu' } as L,
  role: { zh: '後端工程師', en: 'Backend Engineer' } as L,
  intro: {
    zh: '我喜歡把「慢、不可靠、會被濫用」的東西變得穩定：把外部服務隔離在佇列後面、把跟錢有關的規則放進資料庫的原子操作、讓告警只在真正需要的時候響。',
    en: 'I like making slow, unreliable and abusable things dependable: isolating external services behind queues, putting money-related rules into atomic database operations, and making alerts fire only when they should.',
  } as L,
  skills: [
    { group: { zh: '語言', en: 'Languages' } as L, items: ['Python', 'TypeScript', 'JavaScript (Node.js)', 'SQL'] },
    { group: { zh: '框架', en: 'Frameworks' } as L, items: ['FastAPI', 'Next.js', 'Fastify', 'Express'] },
    { group: { zh: '資料庫', en: 'Databases' } as L, items: ['PostgreSQL / Supabase', 'MongoDB', 'MySQL', 'Redis'] },
    { group: { zh: '通訊與佇列', en: 'Messaging & APIs' } as L, items: ['REST', 'GraphQL', 'WebSocket', 'RabbitMQ', 'Webhooks'] },
    { group: { zh: '測試與部署', en: 'Testing & Ops' } as L, items: ['pytest', 'Vitest', 'Playwright', 'Docker', 'AWS', 'Vercel', 'Render'] },
  ],
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
    nav_skills: '技能',
    nav_contact: '聯絡',
    featured: '精選作品',
    other: '其他作品',
    skills: '技術能力',
    contact: '聯絡我',
    contact_body: '歡迎來信討論職缺或專案。',
    view_case: '看完整案例',
    back: '所有作品',
    role: '我的角色',
    stack: '技術',
    problem: '要解決的問題',
    pain: '痛點',
    highlights: '技術重點',
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
    nav_skills: 'Skills',
    nav_contact: 'Contact',
    featured: 'Featured work',
    other: 'Other work',
    skills: 'Skills',
    contact: 'Get in touch',
    contact_body: 'Happy to talk about roles or projects.',
    view_case: 'Read case study',
    back: 'All projects',
    role: 'My role',
    stack: 'Stack',
    problem: 'The problem',
    pain: 'Problem',
    highlights: 'Engineering highlights',
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

/** Site base path from astro.config, e.g. /portfolio */
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Internal link; path is the part after base and language, e.g. '/', '/#projects', '/yoution/' */
export const href = (lang: Lang, path: string) => `${BASE}${lang === 'en' ? '/en' : ''}${path}`;

/** The current page's path in the other language */
export const altPath = (lang: Lang, pathname: string) => {
  const rest = pathname.slice(BASE.length).replace(/^\/en(?=\/|$)/, '') || '/';
  return href(lang === 'zh' ? 'en' : 'zh', rest);
};
