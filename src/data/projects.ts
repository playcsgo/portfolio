// Portfolio content. Every text field is bilingual: { zh, en }.
// Add or edit projects here; pages are generated from this file.

import type { ImageMetadata } from 'astro';
import lmZh from '../assets/shots/line-monitor-zh.png';
import lmEn from '../assets/shots/line-monitor-en.png';
import yOutlineZh from '../assets/shots/yoution-outline-zh.png';
import yOutlineEn from '../assets/shots/yoution-outline-en.png';
import yNotesZh from '../assets/shots/yoution-notes-zh.png';
import yNotesEn from '../assets/shots/yoution-notes-en.png';
import yQuizZh from '../assets/shots/yoution-quiz-zh.png';
import yQuizEn from '../assets/shots/yoution-quiz-en.png';
import yPriceZh from '../assets/shots/yoution-pricing-zh.png';
import yPriceEn from '../assets/shots/yoution-pricing-en.png';
import focusZh from '../assets/shots/focus-zh.png';
import focusEn from '../assets/shots/focus-en.png';
import iconYoution from '../assets/icons/yoution.png';
import iconFocus from '../assets/icons/focus-correction.png';
import iconMockMes from '../assets/icons/mock-mes.png';
import iconGear from '../assets/icons/gear-demo.png';
import gearShot from '../assets/shots/gear-demo.png';

export type Lang = 'zh' | 'en';
export type L = { zh: string; en: string };

export type LinkKind = 'web' | 'ios' | 'android' | 'chrome' | 'github';
export type Status = 'live' | 'in-progress' | 'archived';

export interface FlowStep {
  label: L;
  detail?: L;
  /** Marks a planned / in-progress step, rendered with a dashed style */
  planned?: boolean;
}

export interface Highlight {
  title: L;
  body: L;
  /** Source location, e.g. app/alerts.py */
  ref?: string;
}

export interface Shot {
  src: { zh: ImageMetadata; en: ImageMetadata };
  alt: L;
  caption?: L;
}

export interface CodeSample {
  file: string;
  lang: string;
  caption: L;
  source: string;
}

export interface ArchBox {
  name: L;
  tech: string[];
  note?: L;
}

/** System diagram: the request path top to bottom, numbered steps on the arrows, plus side systems */
export interface Architecture {
  path: { box: ArchBox; step?: L }[];
  side: ArchBox[];
}

export interface Project {
  slug: string;
  featured: boolean;
  status: Status;
  period: string;
  title: L;
  /** Square app icon or thumbnail shown on the home card */
  icon?: ImageMetadata;
  /** Short monogram used when there is no icon */
  iconText?: string;
  /** One sentence for the home card; matches the résumé wording */
  oneLiner: L;
  /** One or two sentences on the problem, for the home card */
  pain: L;
  /** Home page row: short copy, index stack and the image panel */
  home: {
    /** One-line product intro plus the technical barrier; projects without a product use blurb */
    points?: { intro: L; barrier: L };
    blurb?: L;
    /** Links shown on the home card */
    links?: { kind: LinkKind; href: string | L }[];
    byline: L;
    index: string;
    tags: string[];
    panel: { bg: string; layout: 'pair' | 'cascade' | 'frame' | 'bleed' | 'code'; shots?: number[]; code?: { label: string; source: string }[] };
  };
  tagline: L;
  role: L;
  stack: string[];
  stats?: { value: string; label: L }[];
  links: { label: L; href: string | L }[];
  shots?: Shot[];
  code?: CodeSample;
  problem?: L;
  /** Shown after the period, e.g. who built it and with which tools */
  credit?: L;
  /** Replaces the role/stack facts and the flow with one system diagram */
  architecture?: Architecture;
  flow?: { title: L; steps: FlowStep[]; note?: L };
  highlights: Highlight[];
  learned?: L[];
  /** Case study opens with the home panel as a banner */
  banner?: boolean;
  roadmap?: { title: L; intro: L; items: L[] };
}

export const projects: Project[] = [
  // ─────────────────────────────────────────────── Yoution
  {
    slug: 'yoution',
    banner: true,
    home: {
      links: [
        { kind: 'web', href: 'https://yoution.app' },
        { kind: 'chrome', href: 'https://chromewebstore.google.com/detail/yoution/faplonbnkjffeblcbfmilifkplkpijik' },
      ],
      points: {
        intro: { zh: '把 YouTube、文章、PDF 總結成綱要、示意圖與測驗，用於篩選及記憶，並提供後台管理。', en: 'Summarizes YouTube videos, articles and PDFs into outlines, diagrams and quizzes, to help you decide what is worth your time and remember it, with an admin back office.' },
        barrier: { zh: 'LLM 回應時間長又不穩定、供應商會限流、YouTube 影片可能沒有字幕，同時要控制成本、防止惡意濫用，手機 App 要保持輕量。', en: 'LLM responses are slow and unreliable, providers rate-limit, some YouTube videos have no captions, cost and abuse have to stay in check, and the mobile app has to stay lightweight.' },
      },
      byline: { zh: '獨立開發', en: 'Solo' },
      index: 'Next.js · PostgreSQL (Supabase) · Stripe · AI SDK',
      tags: ['Next.js 15', 'PostgreSQL (Supabase)', 'RLS', 'pg_cron', 'Stripe'],
      panel: { bg: '#EBDCCF', layout: 'cascade', shots: [0, 1] },
    },
    icon: iconYoution,
    oneLiner: { zh: '把 YouTube 影片轉成示意圖與測驗。', en: 'Turns YouTube videos into diagrams and quizzes.' },
    pain: { zh: '長影片看完隔天就忘。後端要處理的是：LLM 呼叫又慢又貴、會被限流，付費功能還得防濫用。', en: 'Long videos are forgotten by the next day. On the backend, LLM calls are slow, costly and rate-limited, and paid features have to resist abuse.' },
    featured: true,
    status: 'live',
    period: '2026.07 – 2026.09',
    title: { zh: 'Yoution', en: 'Yoution' },
    tagline: {
      zh: '把文章、YouTube、PDF 變成綱要、圖表與測驗的 AI 學習產品。Web、iOS／Android（Capacitor）與 Chrome 擴充共用同一套後端。',
      en: 'An AI learning product that turns articles, YouTube videos and PDFs into outlines, diagrams and quizzes. Web, iOS/Android (Capacitor) and a Chrome extension share one backend.',
    },
    role: {
      zh: '獨立開發：產品規劃、後端與資料庫設計、金流、部署。以 Claude Code 作為 AI 協作開發工具，架構決策與 code review 由我負責。',
      en: 'Solo developer: product, backend and database design, billing, deployment. Built with Claude Code as an AI pair-programmer; I owned architecture decisions and code review.',
    },
    stack: [
      'TypeScript',
      'Next.js 15 (App Router)',
      'PostgreSQL (Supabase)',
      'Row Level Security',
      'pg_cron / pg_net',
      'Vercel AI SDK',
      'Stripe',
      'RevenueCat',
      'Capacitor',
      'Vitest',
      'Playwright',
    ],
    stats: [
      { value: '88', label: { zh: 'API route handlers', en: 'API route handlers' } },
      { value: '300+', label: { zh: '測試檔（unit + e2e）', en: 'test files (unit + e2e)' } },
      { value: '9', label: { zh: '介面語言', en: 'UI languages' } },
      { value: '340+', label: { zh: 'commits', en: 'commits' } },
    ],
    links: [{ label: { zh: '官網 yoution.app', en: 'Website yoution.app' }, href: 'https://yoution.app' }],
    shots: [
      {
        src: { zh: yOutlineZh, en: yOutlineEn },
        alt: { zh: 'Yoution 由 LLM 產生的分段綱要', en: 'An LLM-generated diagram in Yoution' },
        caption: {
          zh: '貼上一篇文章，背景產生分段綱要，左側目錄可直接跳到各段',
          en: 'Paste a piece of content and the backend generates an outline and a diagram in the background (rendered as scalable SVG)',
        },
      },
      {
        src: { zh: yNotesZh, en: yNotesEn },
        alt: { zh: 'Yoution 筆記列表：標籤分類、測驗、複習提醒', en: 'Yoution notes: tags, quizzes and review reminders' },
        caption: {
          zh: '筆記依標籤分類，可以整個標籤一起出題、開啟複習提醒，或讓 LLM 跨文件比對',
          en: 'Notes are grouped by tag; quiz a whole tag, turn on review reminders, or run an LLM cross-document review',
        },
      },
      {
        src: { zh: yQuizZh, en: yQuizEn },
        alt: { zh: 'Yoution 測驗頁：單選題與答題回饋', en: 'Yoution quiz: multiple choice with feedback' },
        caption: {
          zh: '由同一份內容產生的測驗：單選恰好 4 個選項，每題錨定到綱要段落',
          en: 'A quiz generated from the same content: exactly 4 options, each question anchored to an outline section',
        },
      },
      {
        src: { zh: yPriceZh, en: yPriceEn },
        alt: { zh: 'Yoution 方案與價格頁', en: 'Yoution plans and pricing page' },
        caption: { zh: '方案決定點數額度、字數上限與群組人數，全部由 server 端裁決', en: 'Plans set credit quota, length caps and group size, all enforced server-side' },
      },
    ],
    credit: { zh: '獨立開發（以 Claude Code 協作）', en: 'Solo, built with Claude Code as a pair programmer' },
    architecture: {
      path: [
        {
          box: { name: { zh: '用戶端', en: 'Clients' }, tech: ['Web (Next.js)', 'iOS / Android (Capacitor)', 'Chrome Extension'] },
          step: { zh: '送出文字、網址、YouTube 或檔案', en: 'Submit text, a URL, a YouTube link or a file' },
        },
        {
          box: { name: { zh: 'API', en: 'API' }, tech: ['Next.js 15 Route Handlers', 'Zod'], note: { zh: '驗證、字數上限、分桶限流', en: 'Validation, length caps, bucketed rate limits' } },
          step: { zh: '原子預扣點數、寫入佇列，立即回應', en: 'Hold credits atomically, enqueue, respond at once' },
        },
        {
          box: { name: { zh: '資料庫', en: 'Database' }, tech: ['PostgreSQL (Supabase)', 'RLS', 'Migrations'], note: { zh: '點數錢包、產生佇列、訂閱狀態', en: 'Credit wallet, generation queue, subscription state' } },
          step: { zh: 'pg_cron + pg_net 定期觸發 worker', en: 'pg_cron + pg_net trigger the worker' },
        },
        {
          box: {
            name: { zh: '產生 worker', en: 'Generation worker' },
            tech: ['Vercel AI SDK', 'Anthropic', 'OpenAI', 'Gemini', 'Groq', 'Cerebras', 'DeepSeek'],
            note: { zh: '供應商路由與斷路器；無字幕影片交給 Gemini 直接讀', en: 'Provider routing with a circuit breaker; caption-less videos go to Gemini directly' },
          },
          step: { zh: '完成就結算點數，失敗全額退回', en: 'True up credits on success, refund in full on failure' },
        },
        { box: { name: { zh: '通知', en: 'Notifications' }, tech: ['Web Push', 'Capacitor Push', 'Resend'] } },
      ],
      side: [
        { name: { zh: '金流', en: 'Billing' }, tech: ['Stripe', 'RevenueCat'], note: { zh: 'Web 與 App 兩邊都用 webhook 回寫同一份訂閱狀態', en: 'Web and app purchases both write one subscription state via webhooks' } },
        { name: { zh: '後台管理', en: 'Admin back office' }, tech: ['Next.js'], note: { zh: '健康檢查、限流面板、log、會員與兌換碼管理', en: 'Health checks, rate-limit panel, logs, members and redeem codes' } },
        { name: { zh: '測試與部署', en: 'Testing and deployment' }, tech: ['Vitest', 'Playwright', 'PGlite', 'Vercel', 'Codemagic'] },
      ],
    },
    highlights: [
      {
        title: { zh: 'LLM 回應時間長又不穩定', en: 'LLM responses are slow and unreliable' },
        body: {
          zh: '請求只寫入佇列並立即回應，由 pg_cron 觸發 worker 在背景產生。使用者關掉分頁也會完成，完成或失敗都會通知。',
          en: 'Requests only enqueue a job and return; pg_cron triggers a worker that generates in the background. Notes finish even if the tab is closed, and success or failure sends a notification.',
        },
      },
      {
        title: { zh: '供應商會限流', en: 'Providers rate-limit' },
        body: {
          zh: '透過 Vercel AI SDK 串接 6 家 LLM 供應商，provider router 搭配 API key pool 與冷卻機制：某家額度用完或連續失敗就自動暫停並切換。',
          en: 'Six LLM providers via the Vercel AI SDK. A provider router with an API key pool and cooldowns pauses a provider that is rate-limited or failing and switches to another.',
        },
      },
      {
        title: { zh: 'YouTube 影片可能沒有字幕', en: 'Some YouTube videos have no captions' },
        body: {
          zh: '抓不到字幕時，把影片網址交給 Gemini 直接讀取影片內容，伺服器本身不下載影片。',
          en: 'When there are no captions, the video URL goes to Gemini to read the video itself; the server never downloads the media.',
        },
      },
      {
        title: { zh: '控制成本、防止惡意濫用', en: 'Keeping cost and abuse in check' },
        body: {
          zh: '呼叫 LLM 前先在 Postgres 以原子操作預扣點數，完成後依實際用量結算、失敗全額退回。攝取新內容與衍生功能分成兩個限流桶。',
          en: 'Credits are held with an atomic Postgres operation before any LLM call, trued up after and refunded on failure. Ingesting new content and derived features use separate rate-limit buckets.',
        },
      },
      {
        title: { zh: '手機 App 要保持輕量', en: 'Keeping the mobile app lightweight' },
        body: {
          zh: 'App 以 Capacitor 包裝網頁，Web、iOS／Android 與 Chrome 擴充共用同一套後端，重的運算都留在伺服器。',
          en: 'The apps wrap the web app with Capacitor, so web, iOS/Android and the Chrome extension share one backend and heavy work stays on the server.',
        },
      },
      {
        title: { zh: '資料安全與生命週期', en: 'Data security and lifecycle' },
        body: {
          zh: '以 RLS 控管資料存取，並收回 client 角色對內部寫入 RPC 的權限；定期清理到期筆記、閒置帳號與 log，資料庫變更全部以 migration 版本化。',
          en: 'RLS guards data access and client roles are revoked from internal write RPCs. Scheduled jobs sweep expired notes, inactive accounts and logs; every schema change is a versioned migration.',
        },
      },
    ],
    learned: [
      {
        zh: '把「慢且不可靠的外部服務」（LLM）隔離在佇列後面，是讓產品穩定的關鍵。',
        en: 'Isolating a slow, unreliable dependency (the LLM) behind a queue is what made the product stable.',
      },
      {
        zh: '跟錢有關的邏輯（點數、配額）要放進資料庫的原子操作，不能只靠應用層判斷。',
        en: 'Anything involving money (credits, quotas) belongs in atomic database operations, not application-level checks.',
      },
    ],
  },

  // ─────────────────────────────────────────────── Line Monitor
  {
    slug: 'mock-mes',
    banner: true,
    home: {
      links: [
        { kind: 'web', href: { zh: 'https://agilenpi.com/mes_demo/cn', en: 'https://agilenpi.com/mes_demo/en' } },
        { kind: 'github', href: 'https://github.com/playcsgo/mock_mes' },
      ],
      points: {
        intro: { zh: '即時監控產線進度與良率，異常自動通報，並由人員認領處理。', en: 'Monitors production-line progress and yield in real time, reports anomalies automatically and lets staff claim and resolve them.' },
        barrier: { zh: '多個工作站同時送進測試結果，伺服器上的數據要與產線實際情況一致，還要串接通訊軟體即時通知。', en: 'Many stations send results at once, server data has to match what is really happening on the line, and alerts go out through a messaging app.' },
      },
      byline: { zh: '獨立開發', en: 'Solo' },
      index: 'FastAPI · WebSocket · GraphQL · MongoDB',
      tags: ['FastAPI', 'WebSocket', 'MongoDB async', 'GraphQL', 'pytest'],
      panel: { bg: '#1E2327', layout: 'frame', shots: [0] },
    },
    icon: iconMockMes,
    oneLiner: { zh: '模擬產線 MES，即時監控生產進度與良率。', en: 'A mock MES that monitors production progress and yield in real time.' },
    pain: { zh: '某一站開始異常，越晚發現報廢越多。資料要即時進來、良率要即時算出、異常要即時通知。', en: 'The later a failing station is noticed, the more product is scrapped. Data, yield and alerts all have to be real time.' },
    featured: true,
    status: 'live',
    period: '2026.09',
    title: { zh: 'mock_mes', en: 'mock_mes' },
    tagline: {
      zh: '模擬 MES 的產線即時監控系統：工作站透過 WebSocket 上傳測試結果，後端即時寫入、計算各站良率、觸發告警，dashboard 同步更新。',
      en: 'A mock MES for real-time production-line monitoring: stations stream test results over WebSocket, the backend stores them, computes per-station yield, raises alerts and pushes updates to a live dashboard.',
    },
    role: { zh: '獨立開發（設計、實作、測試、部署）', en: 'Solo project (design, implementation, tests, deployment)' },
    stack: ['Python', 'FastAPI', 'WebSocket', 'MongoDB (PyMongo async)', 'GraphQL (Strawberry)', 'Pydantic', 'pytest', 'Render'],
    stats: [
      { value: '7', label: { zh: '測試檔', en: 'test files' } },
      { value: '5', label: { zh: '模擬工作站', en: 'simulated stations' } },
      { value: '7d', label: { zh: '資料 TTL', en: 'data TTL' } },
    ],
    links: [
      { label: { zh: 'Live demo', en: 'Live demo' }, href: { zh: 'https://agilenpi.com/mes_demo/cn', en: 'https://agilenpi.com/mes_demo/en' } },
      { label: { zh: 'GitHub', en: 'GitHub' }, href: 'https://github.com/playcsgo/mock_mes' },
    ],
    shots: [
      {
        src: { zh: lmZh, en: lmEn },
        alt: { zh: 'mock_mes 即時看板：各站良率、告警與即時測試紀錄', en: 'mock_mes dashboard: per-station yield, alerts and live test results' },
        caption: {
          zh: '即時看板：ST-03 良率掉到 71.9%，觸發紅色告警；右側是 WebSocket 推來的即時測試紀錄',
          en: 'Live dashboard: ST-03 yield drops to 71.9% and raises an alert; the right column streams results over WebSocket',
        },
      },
    ],
    code: {
      file: 'app/alerts.py',
      lang: 'python',
      caption: {
        zh: '告警判斷：樣本不足不判斷、低於門檻才觸發、同站冷卻期內不重複',
        en: 'Alert rule: no verdict on small samples, fire only below threshold, one alert per station per cooldown',
      },
      source: `def add(self, station: str, passed: bool, now: float | None = None) -> dict | None:
    now = time.monotonic() if now is None else now
    history = self._history.setdefault(station, deque(maxlen=self.window))
    history.append(passed)

    if len(history) < self.min_samples:
        return None

    rate = sum(history) / len(history)
    if rate >= self.threshold:
        return None

    last = self._last_alert.get(station)
    if last is not None and now - last < self.cooldown_s:
        return None

    self._last_alert[station] = now
    return {"station": station, "yield_rate": round(rate, 3),
            "window": len(history), "threshold": self.threshold}`,
    },
    problem: {
      zh: '產線上每個測試站不斷產生 pass／fail 結果。如果某一站開始異常，工程師越晚發現，報廢的產品越多。這個系統要做到三件事：資料即時進來、良率即時算出來、異常即時通知。',
      en: 'Every test station on a production line constantly produces pass/fail results. The later an engineer notices a failing station, the more product is scrapped. The system has three jobs: ingest data in real time, compute yield in real time, and alert in real time.',
    },
    flow: {
      title: { zh: '資料流', en: 'Data flow' },
      steps: [
        { label: { zh: '工作站／模擬器', en: 'Station / simulator' }, detail: { zh: 'WebSocket /ws/station＋token', en: 'WebSocket /ws/station + token' } },
        { label: { zh: 'Pydantic 驗證', en: 'Pydantic validation' }, detail: { zh: '格式錯誤回傳錯誤，連線不中斷', en: 'bad messages get an error reply, connection stays open' } },
        { label: { zh: 'pipeline.handle_result()', en: 'pipeline.handle_result()' }, detail: { zh: '寫入 MongoDB → 廣播給 dashboard', en: 'insert into MongoDB → broadcast to dashboard' } },
        { label: { zh: '滑動視窗良率檢查', en: 'Sliding-window yield check' }, detail: { zh: '低於門檻 → 寫入 alert 並廣播', en: 'below threshold → store alert and broadcast' } },
        { label: { zh: 'LINE 推播告警', en: 'LINE push alert' }, detail: { zh: '開發中', en: 'in progress' }, planned: true },
      ],
      note: {
        zh: '查詢端另外提供 GraphQL，做各站良率與 fail code 統計的 aggregation。',
        en: 'A GraphQL endpoint serves aggregation queries such as per-station yield and fail-code counts.',
      },
    },
    highlights: [
      {
        title: { zh: '單一處理管線', en: 'One shared pipeline' },
        body: {
          zh: 'WebSocket 收到的真實資料和 demo 產生器的資料走同一個 handle_result()。資料庫透過參數注入，測試時換成 fake DB，不需要真的 MongoDB 就能測整條流程。',
          en: 'Real WebSocket data and demo-generated data both go through the same handle_result(). The database is injected, so tests swap in a fake DB and exercise the full flow without MongoDB.',
        },
        ref: 'app/pipeline.py',
      },
      {
        title: { zh: '不誤報、不洗版的告警', en: 'Alerts without false alarms or floods' },
        body: {
          zh: '每站用 deque(maxlen=50) 維護滑動視窗：樣本少於 20 筆不判斷（避免小樣本誤報），良率低於 90% 才觸發，同一站 60 秒內不重複告警（避免洗版）。參數全部可由環境變數調整。',
          en: 'Each station keeps a sliding window in a deque(maxlen=50): no verdict under 20 samples (avoids small-sample false alarms), an alert only below 90% yield, and a 60-second per-station cooldown (avoids floods). All parameters are configurable via environment variables.',
        },
        ref: 'app/alerts.py',
      },
      {
        title: { zh: '資料驗證寫在 schema 裡', en: 'Validation lives in the schema' },
        body: {
          zh: '用 Pydantic model validator 表達業務規則：fail 一定要有 fail_code，pass 不能有 fail_code。格式錯誤的訊息會收到結構化的錯誤回覆，但連線不會斷，工作站可以直接重送。',
          en: 'Business rules are expressed as Pydantic model validators: a fail must have a fail_code, a pass must not. Malformed messages get a structured error reply without dropping the connection, so stations can simply resend.',
        },
        ref: 'app/models.py',
      },
      {
        title: { zh: 'Fail-closed 的寫入權限', en: 'Fail-closed write access' },
        body: {
          zh: '沒設定 INGEST_TOKEN 時，任何人都不能寫入；token 用 secrets.compare_digest 做常數時間比對，避免 timing attack。Dashboard WebSocket 另外做 Origin 白名單檢查。',
          en: 'With no INGEST_TOKEN configured, nobody can write. Tokens are compared in constant time with secrets.compare_digest to prevent timing attacks, and the dashboard WebSocket checks an Origin allowlist.',
        },
        ref: 'app/config.py',
      },
      {
        title: { zh: '索引與資料生命週期', en: 'Indexes and data lifecycle' },
        body: {
          zh: '依查詢模式建立 (station, ts)、(lot, ts) 複合索引，並用 TTL index 讓資料 7 天後自動過期。修改 TTL 長度時用 collMod 原地更新，而不是刪掉重建，避免中間出現沒有索引的空窗期。',
          en: 'Compound indexes on (station, ts) and (lot, ts) match the query patterns, and a TTL index expires data after 7 days. Changing the TTL uses collMod in place instead of drop-and-rebuild, so there is never a window without an index.',
        },
        ref: 'app/repository.py',
      },
      {
        title: { zh: '為免費主機設計的 demo 模式', en: 'Demo mode designed for free hosting' },
        body: {
          zh: '冷啟動時若資料太少，會先回填一小時的歷史資料；即時資料產生器只在有人看 dashboard 時運作，沒人看 60 秒後停止，最多跑 20 分鐘，不會浪費資料庫額度。',
          en: 'On a cold start with sparse data it backfills an hour of history. The live generator only runs while someone is watching the dashboard, stops after 60 idle seconds and caps at 20 minutes, so it never wastes database quota.',
        },
        ref: 'app/demo.py',
      },
    ],
    roadmap: {
      title: { zh: '下一步：LINE 告警整合（開發中）', en: 'Next: LINE alert integration (in progress)' },
      intro: {
        zh: '讓現場工程師不用盯著 dashboard，異常直接推到手機。推播會透過背景佇列發送，不阻塞資料寫入。',
        en: 'So engineers do not have to watch the dashboard: anomalies are pushed straight to their phones, sent through a background queue so ingestion is never blocked.',
      },
      items: [
        { zh: '異常推播：良率低於門檻時，推送 Flex 卡片給訂閱者', en: 'Alert push: send a Flex card to subscribers when yield drops below threshold' },
        { zh: '查詢指令：在 LINE 輸入站號，回覆即時良率與主要 fail code', en: 'Query command: type a station ID in LINE to get live yield and top fail codes' },
        { zh: '認領告警：按下按鈕後，dashboard 即時顯示處理人', en: 'Acknowledge: tapping a button shows who is handling it on the dashboard in real time' },
        { zh: 'LINE 專用冷卻與狀態轉換推播，控制在免費方案的推播額度內', en: 'LINE-specific cooldown and edge-triggered pushes to stay within the free-tier message quota' },
      ],
    },
  },

  // ─────────────────────────────────────────────── Focus Correction
  {
    slug: 'focus-correction',
    banner: true,
    home: {
      links: [
        { kind: 'ios', href: 'https://apps.apple.com/app/id6774055293' },
        { kind: 'android', href: 'https://play.google.com/store/apps/details?id=com.agilenpi.focus' },
      ],
      points: {
        intro: { zh: '記錄分心次數與時間、幫你延長專注的 App，已上架 App Store 與 Google Play。', en: 'An app that tracks how often and how long you get distracted to help you focus longer, live on the App Store and Google Play.' },
        barrier: { zh: 'UI / UX：專注中的畫面不能打擾使用者，結束後的分心紀錄要一眼看懂。iOS 與 Android 對於分心的判定模式不同。', en: 'UI / UX: the in-session screen has to stay out of the way, and the distraction review has to read at a glance. iOS and Android also detect distractions differently.' },
      },
      byline: { zh: '獨立開發', en: 'Solo' },
      index: 'React Native · Expo Modules · In-App Purchase',
      tags: ['React Native', 'Expo Modules', 'In-App Purchase', '142 Maestro E2E'],
      panel: { bg: '#16181B', layout: 'bleed', shots: [0] },
    },
    icon: iconFocus,
    oneLiner: { zh: '透過自訂專注任務延長專注時間。', en: 'Builds longer focus sessions through self-defined tasks.' },
    pain: { zh: '一拿起手機就分心，卻不知道分心了幾次、多久；而系統不會告訴 App 使用者是鎖螢幕還是切去別的 App。', en: 'People lose focus to their phones without knowing how often or for how long, and the OS does not tell an app whether the user locked the screen or switched apps.' },
    featured: true,
    status: 'live',
    period: '2026.04 – 2026.06',
    title: { zh: 'Focus Correction 專注力矯正器', en: 'Focus Correction' },
    tagline: {
      zh: '透過自訂專注任務延長專注時間的 App：專注期間離開 App 就記為一次分心，結束後回顧專注比例與分心時間軸。已上架 App Store 與 Google Play。',
      en: 'An app that builds longer focus sessions through self-defined tasks: leaving the app during a session counts as a distraction, and a review afterwards shows focus ratio and a distraction timeline. Live on the App Store and Google Play.',
    },
    role: {
      zh: '獨立開發：產品規劃、App 開發、原生模組、內購、上架與 QA',
      en: 'Solo developer: product, app development, native module, in-app purchase, store release and QA',
    },
    stack: ['TypeScript', 'React Native 0.81', 'Expo 54', 'Expo Modules (Swift / Kotlin)', 'AsyncStorage', 'react-native-iap', 'i18next', 'Jest', 'Maestro'],
    stats: [
      { value: '2', label: { zh: '上架商店', en: 'app stores' } },
      { value: '10', label: { zh: '介面語言', en: 'UI languages' } },
      { value: '142', label: { zh: 'Maestro E2E 流程檔', en: 'Maestro E2E flow files' } },
    ],
    links: [
      { label: { zh: 'App Store', en: 'App Store' }, href: 'https://apps.apple.com/app/id6774055293' },
      { label: { zh: 'Google Play', en: 'Google Play' }, href: 'https://play.google.com/store/apps/details?id=com.agilenpi.focus' },
    ],
    shots: [
      {
        src: { zh: focusZh, en: focusEn },
        alt: { zh: 'Focus Correction 首頁與新手導覽畫面', en: 'Focus Correction focus session, session result and new session screens' },
        caption: {
          zh: '首頁與新手導覽畫面（夜間主題）',
          en: 'A live session, the session result with focus ratio, and creating a new session (night and day themes)',
        },
      },
    ],
    problem: {
      zh: '工作或讀書時，一拿起手機就分心，而且自己通常不知道分心了多少次、多久。這個 App 像西洋棋鐘一樣計時：專注期間只要離開 App 就自動記一筆分心，結束後讓使用者看到真實的專注比例。難點在於手機系統不會直接告訴 App「使用者是鎖螢幕，還是切去別的 App」，而這兩者一個不該算分心、一個要算。',
      en: 'When people work or study, picking up the phone breaks focus, and they rarely know how often or for how long. The app works like a chess clock: leaving the app during a session records a distraction, and the review shows the real focus ratio. The hard part is that the OS does not tell an app whether the user locked the screen or switched to another app, and only the second one should count.',
    },
    flow: {
      title: { zh: '分心偵測流程', en: 'Distraction detection' },
      steps: [
        { label: { zh: 'App 狀態改變', en: 'App state changes' }, detail: { zh: 'AppState（手機）／visibilitychange + blur（Web）', en: 'AppState (mobile) / visibilitychange + blur (web)' } },
        { label: { zh: '原生模組查詢螢幕狀態', en: 'Native module checks the screen' }, detail: { zh: 'Android PowerManager.isInteractive()・iOS 螢幕亮度', en: 'Android PowerManager.isInteractive() · iOS screen brightness' } },
        { label: { zh: 'iOS 時間差判斷', en: 'iOS timing heuristic' }, detail: { zh: 'inactive → background 少於 200ms 視為鎖螢幕', en: 'inactive → background under 200 ms means screen lock' } },
        { label: { zh: '記錄分心開始與結束', en: 'Record distraction start and end' }, detail: { zh: '回到 App 時結算時長，寫入本機儲存', en: 'duration settled on return, saved locally' } },
      ],
    },
    highlights: [
      {
        title: { zh: '區分鎖螢幕與切換 App', en: 'Telling screen lock from app switching' },
        body: {
          zh: 'iOS 按電源鍵時 inactive → background 的轉換不到 200ms，手勢切換 App 則要 300ms 以上，以此時間差判斷；Android 沒有可靠的 inactive 中間狀態，改用自己寫的 Expo 原生模組呼叫 PowerManager.isInteractive()。原生模組不可用時（例如 Expo Go）回傳 null，由呼叫端決定備援行為。',
          en: 'On iOS, pressing the power button moves inactive → background in under 200 ms, while an app-switch gesture takes 300 ms or more, so the timing decides. Android has no reliable inactive state, so a custom Expo native module calls PowerManager.isInteractive(). When the native module is unavailable (e.g. Expo Go) it returns null and the caller decides the fallback.',
        },
        ref: 'src/hooks/useDistractionDetector.ts',
      },
      {
        title: { zh: '本機資料的版本化遷移', en: 'Versioned migrations for local data' },
        body: {
          zh: '資料只存在使用者手機上（AsyncStorage），沒有伺服器可以幫忙修資料，所以資料結構有版本號：App 啟動時先跑遷移再讀資料，新版本只要加一筆 migration。同時自動清除 8 天前的紀錄，控制儲存量。',
          en: 'Data lives only on the device (AsyncStorage), with no server to fix it, so the schema is versioned: migrations run on launch before any read, and a new version just appends a migration. Records older than 8 days are cleaned up automatically to bound storage.',
        },
        ref: 'src/utils/migration.ts',
      },
      {
        title: { zh: '內購與授權狀態', en: 'In-app purchase and license state' },
        body: {
          zh: '以 react-native-iap 串接 App Store 與 Google Play。授權狀態（試用、Pro、過期）由安裝時間與購買紀錄計算；試用期間購買走早鳥商品，試用結束後走原價商品，並支援還原購買。',
          en: 'react-native-iap connects the App Store and Google Play. License state (trial, Pro, expired) is computed from install time and purchase records; purchases during the trial use the early-bird SKU and the regular SKU afterwards, with restore support.',
        },
        ref: 'src/contexts/LicenseContext.tsx',
      },
      {
        title: { zh: '測試與上架流程', en: 'Testing and release' },
        body: {
          zh: '工具函式有 Jest 單元測試（遷移、授權、購買錯誤處理等），使用者流程寫成 142 個 Maestro E2E 流程檔，包含實機測試；以 EAS 建置並上架兩個商店，介面支援 10 種語言。',
          en: 'Utilities have Jest unit tests (migrations, licensing, purchase error handling and more), and user flows are covered by 142 Maestro E2E flow files, including physical-device runs. Builds go through EAS to both stores, with a UI in 10 languages.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────── RabbitMQ
  {
    slug: 'async-jobs-rabbitmq',
    banner: true,
    home: {
      links: [
        { kind: 'web', href: 'https://gear-demo.onrender.com' },
        { kind: 'github', href: 'https://github.com/playcsgo/cv_equipment' },
      ],
      points: {
        intro: { zh: '儲值、升級裝備的小遊戲，打開就能用訪客帳號直接玩。', en: 'A small top-up and gear-upgrade game; open it and you are playing as a guest.' },
        barrier: { zh: '使用者連點儲值、升級時要正確處理，確保每一筆交易的流程都合乎邏輯。', en: 'Rapid repeated clicks on top-up and upgrade have to be handled correctly, and every transaction has to follow a sound flow.' },
      },
      byline: { zh: '個人練習', en: 'learning project' },
      index: 'Express · RabbitMQ · Redis · pm2',
      tags: ['RabbitMQ', 'Express', 'Redis session', 'pm2 workers', 'MongoDB TTL'],
      panel: { bg: '#2B2521', layout: 'frame', shots: [0] },
    },
    icon: iconGear,
    oneLiner: { zh: '點裝備小遊戲：儲值、升級裝備都經由 RabbitMQ 交給背景 worker 處理。', en: 'A gear-upgrade mini game where every top-up and upgrade goes through RabbitMQ to background workers.' },
    pain: { zh: '尖峰時在 API 裡同步處理會讓請求塞住；工作交出去後，還要確保訊息不會掉、結果能回傳。', en: 'Doing the work inside the API blocks requests at peak load; once work is handed off, messages must not be lost and results must come back.' },
    featured: true,
    status: 'live',
    period: '2024.07',
    title: { zh: '點裝備系統（RabbitMQ）', en: 'Gear Upgrade Demo (RabbitMQ)' },
    tagline: {
      zh: '把耗時或高併發的操作從 API 拆到背景 worker。線上 demo 是 Express 版：打開就是訪客帳號，可以直接儲值、升級裝備。之後的 Fastify 版補上可靠投遞、RPC 回覆與依賴注入。',
      en: 'Moving slow or high-concurrency work out of the API into background workers. The live demo is the Express version: open it and you get a guest account to top up and upgrade gear right away. A later Fastify version adds reliable delivery, RPC replies and dependency injection.',
    },
    role: { zh: '個人練習專案，兩個 repo 皆為獨立開發', en: 'Personal learning project; both repos built solo' },
    stack: ['Node.js', 'Express', 'Fastify', 'RabbitMQ (amqplib)', 'MongoDB / Mongoose', 'Redis', 'pm2', 'awilix (DI)', 'worker_threads', 'Render'],
    links: [
      { label: { zh: 'Live demo', en: 'Live demo' }, href: 'https://gear-demo.onrender.com' },
      { label: { zh: 'GitHub：Express 版（demo）', en: 'GitHub: Express version (demo)' }, href: 'https://github.com/playcsgo/cv_equipment' },
      { label: { zh: 'GitHub：Fastify 版', en: 'GitHub: Fastify version' }, href: 'https://github.com/playcsgo/fastify_prac_1' },
    ],
    shots: [
      {
        src: { zh: gearShot, en: gearShot },
        alt: { zh: '點裝備系統 demo：訪客帳號、點數、頭盔／盔甲／武器等級', en: 'Gear demo: guest account, gem balance and helmet / armor / weapon levels' },
        caption: {
          zh: '線上 demo：免登入自動建立訪客，初始 10000 點；每次儲值或升級都是一則 RabbitMQ 訊息，資料每小時自動清除',
          en: 'Live demo: a guest account with 10,000 gems is created on first visit; every top-up or upgrade is a RabbitMQ message, and data resets every hour',
        },
      },
    ],
    code: {
      file: 'config/rabbitmq.js',
      lang: 'javascript',
      caption: {
        zh: 'Fastify 版的 consumer：prefetch(1) 一次只拿一個任務，做完才手動 ack',
        en: 'Fastify-version consumer: prefetch(1) takes one job at a time and acks only when done',
      },
      source: `async consumeQueue(queueName, callback) {
  const channel = await this.getChannel()
  await channel.assertQueue(queueName, { durable: true })
  channel.prefetch(1)
  channel.consume(queueName, (msg) => {
    callback(msg, () => channel.ack(msg))
  }, { noAck: false })
}`,
    },
    problem: {
      zh: '儲值、下注、建立帳號這類操作，如果在 API 裡同步處理，尖峰時請求會堆積。我想實際理解：怎麼把工作交給 worker、怎麼確保訊息不會掉、以及 worker 做完之後怎麼把結果回給原本的請求。',
      en: 'Doing top-ups, bets or sign-ups synchronously inside the API makes requests pile up at peak load. I wanted hands-on answers to: how to hand work to workers, how to make sure messages are not lost, and how a worker returns a result to the original request.',
    },
    flow: {
      title: { zh: '線上 demo 架構（Express 版）', en: 'Live demo architecture (Express version)' },
      steps: [
        { label: { zh: 'Express + Handlebars', en: 'Express + Handlebars' }, detail: { zh: '訪客 session 存在 Redis（Render Key Value）', en: 'guest sessions in Redis (Render Key Value)' } },
        { label: { zh: 'RabbitMQ', en: 'RabbitMQ' }, detail: { zh: 'CloudAMQP・儲值與升級各一條 queue', en: 'CloudAMQP · one queue each for top-ups and upgrades' } },
        { label: { zh: '2 個 worker（pm2 多行程）', en: '2 workers (pm2 processes)' }, detail: { zh: '和 web 跑在同一個 Render 服務', en: 'run alongside the web process on one Render service' } },
        { label: { zh: 'MongoDB Atlas', en: 'MongoDB Atlas' }, detail: { zh: 'TTL index 一小時後自動刪除訪客', en: 'TTL index removes guests after an hour' } },
      ],
    },
    highlights: [
      {
        title: { zh: '三種訊息模式', en: 'Three messaging patterns' },
        body: {
          zh: 'Work queue：下注請求丟進佇列，多個 worker 分攤處理。Publish/Subscribe：監控 middleware 把每個請求發到 fanout exchange，由不同 worker 各自寫入短期與長期歷史。RPC：建立帳號時帶上 replyTo 與 correlationId，worker 完成後把結果回傳給原本的請求。',
          en: 'Work queue: bets are queued and shared across workers. Publish/Subscribe: a monitoring middleware publishes every request to a fanout exchange, and separate workers write short- and long-term history. RPC: sign-up sends replyTo and correlationId so the worker can return the created user to the original request.',
        },
        ref: 'config/rabbitmq.js',
      },
      {
        title: { zh: '從會掉訊息到可靠投遞', en: 'From lossy to reliable delivery' },
        body: {
          zh: 'Express 版用 noAck: true，worker 一收到訊息就視為完成，處理途中當機訊息就消失了。Fastify 版改成 noAck: false、手動 ack，並設定 prefetch(1)，確保每個 worker 一次只拿一個任務、做完才確認。',
          en: 'The Express version used noAck: true, so a message counted as done on receipt and was lost if the worker crashed mid-task. The Fastify version switched to noAck: false with manual acks and prefetch(1), so each worker takes one job at a time and confirms only when finished.',
        },
        ref: 'workers/worker1.js',
      },
      {
        title: { zh: '用 awilix 做依賴注入', en: 'Dependency injection with awilix' },
        body: {
          zh: 'Controller、worker、RabbitMQ 連線與 model 都註冊在 DI container，依生命週期分成 singleton 與 scoped。元件之間不直接 require 彼此，測試時可以替換依賴。',
          en: 'Controllers, workers, the RabbitMQ connection and models are registered in a DI container as singletons or scoped instances. Components never require each other directly, so dependencies can be swapped in tests.',
        },
        ref: 'awilixSetup.js',
      },
      {
        title: { zh: 'CPU 密集工作：單執行緒 vs worker_threads', en: 'CPU-bound work: single thread vs worker_threads' },
        body: {
          zh: '用遞迴 Fibonacci 比較：同樣 5 個計算，在 event loop 上只能排隊執行；丟到 worker_threads 則能真正平行，同時也讓 API 不會被卡住。',
          en: 'A recursive Fibonacci benchmark: five computations queue up on the event loop, while worker_threads run them truly in parallel and keep the API responsive.',
        },
        ref: 'fib-controller.js',
      },
    ],
    roadmap: {
      title: { zh: '下一版（v2）', en: 'Next (v2)' },
      intro: {
        zh: '線上 demo 目前是 v1 的 worker 邏輯，接下來把 Fastify 版學到的做法搬回來：',
        en: 'The live demo still runs the v1 worker logic. Next, it gets what I learned in the Fastify version:',
      },
      items: [
        { zh: 'worker 改成手動 ack＋prefetch，當機時訊息會重新投遞', en: 'Manual acks with prefetch, so messages are redelivered if a worker crashes' },
        { zh: '餘額與等級改用 $inc 原子更新，消除多個 worker 的競態條件', en: 'Atomic $inc updates for balance and levels, removing the race between workers' },
        { zh: '頁面改成輪詢任務結果，取代固定等待 300ms', en: 'Poll for job results instead of a fixed 300ms wait' },
      ],
    },
    learned: [
      {
        zh: 'Fastify 的 async hook 不能再呼叫 done()，否則 handler 會執行兩次，這個 bug 讓我讀懂了 Fastify 的 hook 生命週期。',
        en: 'A Fastify async hook must not also call done(), or the handler runs twice. Tracking down that bug taught me the Fastify hook lifecycle.',
      },
      {
        zh: '回頭看，worker 用「讀出→修改→存回」更新餘額，多個 worker 同時處理同一位使用者會有競態條件；正確做法是用 MongoDB 的 $inc 原子更新。',
        en: 'In hindsight, workers updating balances with read-modify-write race when several handle the same user; the right fix is an atomic MongoDB $inc.',
      },
    ],
  },

  // ─────────────────────────────────────────────── Twitter API
  {
    slug: 'twitter-api-postgresql-graphql',
    banner: true,
    home: {
      links: [{ kind: 'github', href: 'https://github.com/playcsgo/coffee_api_postgresql' }],
      blurb: { zh: '同一套資料模型換資料庫、換 API 風格時，哪裡會壞？把後端從 MySQL 遷到 PostgreSQL，再加上 Apollo GraphQL。', en: 'What breaks when the same data model moves to another database and API style? I migrated the backend from MySQL to PostgreSQL and added Apollo GraphQL.' },
      byline: { zh: '團隊專案＋個人延伸', en: 'Team project + solo follow-up' },
      index: 'PostgreSQL · Apollo GraphQL · Sequelize',
      tags: ['PostgreSQL', 'Apollo Server', 'Sequelize', 'Mocha / Chai'],
      panel: {
        bg: '#DDE3E8',
        layout: 'code',
        code: [
          { label: 'REST · MySQL → PostgreSQL', source: 'GET /api/tweets\nAuthorization: Bearer <jwt>\n\n200 OK\n[{ "id": 1, "UserId": 3, … }]' },
          { label: 'GraphQL · Apollo Server', source: 'query {\n  tweets {\n    id\n    User { name }\n  }\n}' },
        ],
      },
    },
    iconText: 'GQL',
    oneLiner: { zh: '團隊專案後端的 PostgreSQL 遷移與 GraphQL 改寫。', en: 'A PostgreSQL migration and GraphQL layer for a team project backend.' },
    pain: { zh: '同一套資料模型換資料庫、換 API 風格時，哪些地方會壞？', en: 'What breaks when the same data model moves to another database and API style?' },
    featured: false,
    status: 'archived',
    period: '2023.06 / 2024.07',
    title: { zh: 'Simple Twitter API：PostgreSQL＋GraphQL 改寫', en: 'Simple Twitter API: PostgreSQL + GraphQL rework' },
    tagline: {
      zh: '原本是 ALPHA Camp 的團隊專案（前後端分離）。之後我獨立把後端從 MySQL 遷移到 PostgreSQL，並加上 Apollo GraphQL 層。',
      en: 'Originally an ALPHA Camp team project (separate frontend and backend). I later independently migrated the backend from MySQL to PostgreSQL and added an Apollo GraphQL layer.',
    },
    role: {
      zh: '團隊專案的後端成員；PostgreSQL 遷移與 GraphQL 為個人後續獨立完成',
      en: 'Backend member of the team project; the PostgreSQL migration and GraphQL layer were my own follow-up work',
    },
    stack: ['Node.js', 'Express', 'Sequelize', 'PostgreSQL', 'Apollo Server (GraphQL)', 'Passport JWT', 'Mocha / Chai'],
    links: [{ label: { zh: 'GitHub', en: 'GitHub' }, href: 'https://github.com/playcsgo/coffee_api_postgresql' }],
    problem: {
      zh: '想理解同一套資料模型換資料庫、換 API 風格時，哪些地方會壞掉。',
      en: 'I wanted to learn what breaks when the same data model moves to a different database and a different API style.',
    },
    highlights: [
      {
        title: { zh: 'MySQL → PostgreSQL', en: 'MySQL → PostgreSQL' },
        body: {
          zh: '處理兩種資料庫對識別字大小寫的差異（例如 UserId、TweetId 欄位），調整 migration 與 model 預設值。',
          en: 'Handled identifier case-sensitivity differences between the two databases (e.g. UserId and TweetId columns) and adjusted migrations and model defaults.',
        },
      },
      {
        title: { zh: 'REST 之外加上 GraphQL', en: 'GraphQL alongside REST' },
        body: {
          zh: '以 Apollo Server 定義 schema 與 resolver，重用既有的 Sequelize model，REST 與 GraphQL 並存。',
          en: 'Defined a schema and resolvers with Apollo Server that reuse the existing Sequelize models, keeping REST and GraphQL side by side.',
        },
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
