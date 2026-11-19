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
import demoShopGrafana from '../assets/shots/demo-shop-grafana.png';
import demoShopArchZh from '../assets/diagrams/demo-shop-architecture.svg?url';
import demoShopArchEn from '../assets/diagrams/demo-shop-architecture-en.svg?url';
import demoShopCheckoutZh from '../assets/diagrams/demo-shop-checkout-flow.svg?url';
import demoShopCheckoutEn from '../assets/diagrams/demo-shop-checkout-flow-en.svg?url';
import demoShopAiModesZh from '../assets/diagrams/demo-shop-ai-modes-zh.svg?url';
import demoShopAiModesEn from '../assets/diagrams/demo-shop-ai-modes-en.svg?url';
import demoShopLlmIsoZh from '../assets/diagrams/demo-shop-llm-isolation.svg?url';
import demoShopLlmIsoEn from '../assets/diagrams/demo-shop-llm-isolation-en.svg?url';
import demoShopAiFlowZh from '../assets/diagrams/demo-shop-ai-data-flow-zh.svg?url';
import demoShopAiFlowEn from '../assets/diagrams/demo-shop-ai-data-flow-en.svg?url';
import demoShopJourneyZh from '../assets/diagrams/demo-shop-loadtest-journey.svg?url';
import demoShopJourneyEn from '../assets/diagrams/demo-shop-loadtest-journey-en.svg?url';
import demoShopCluster from '../assets/shots/demo-shop-sandbox-cluster.png';
import demoShopLoadForm from '../assets/shots/demo-shop-sandbox-loadtest.png';
import demoShopReportFpm from '../assets/shots/demo-shop-report-fpm.png';
import demoShopReportGo from '../assets/shots/demo-shop-report-go.png';

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

/** One reliability fix shown as a before/after row, linked to the commits that made it */
export interface Technique {
  title: L;
  before: L;
  after: L;
  commits: string[];
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

/** An image that answers one question; diagrams get a white, scrollable frame */
export interface Figure {
  src: { zh: ImageMetadata | string; en: ImageMetadata | string };
  alt: L;
  caption?: L;
  /** Intrinsic size, needed when src is a URL string (SVG) */
  width?: number;
  height?: number;
  diagram?: boolean;
  /** Two half figures sit side by side on wide screens */
  half?: boolean;
}

/** One part of a topic: the question it answers, the explanation and the proof */
export interface TopicPart {
  id: string;
  title: L;
  body: L[];
  bullets?: L[];
  figures?: Figure[];
  code?: CodeSample;
}

/** A question an interviewer would ask, answered on the case study (and on its own page when it is large) */
export interface Topic extends TopicPart {
  /** PR in the public repo with this topic's code */
  pr?: { n: number; href: string };
  /** Sub-parts shown on /<slug>/<topic id>/; the case study shows the topic summary and links there */
  parts?: TopicPart[];
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
    panel: { bg: string; layout: 'pair' | 'cascade' | 'frame' | 'bleed' | 'code' | 'overlay'; shots?: number[]; code?: { label: string; source: string }[] };
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
  /** Questions answered in order, replacing highlights, screenshots and the code sample */
  topics?: Topic[];
  /** The bug story told under its own heading */
  bug?: L[];
  limits?: L[];
  /** A hand-made architecture image shown in place of the box diagram */
  diagram?: { src: L; alt: L; caption?: L };
  /** Before/after table of backend techniques, with the repo they link into */
  techniques?: { repo: string; rows: Technique[]; method: { body: L; commits: string[] } };
  flow?: { title: L; steps: FlowStep[]; note?: L };
  highlights: Highlight[];
  learned?: L[];
  /** Case study opens with the home panel as a banner */
  banner?: boolean;
  roadmap?: { title: L; intro: L; items: L[] };
}

export const projects: Project[] = [
  // ─────────────────────────────────────────────── Demo Shop
  {
    slug: 'demo-shop',
    banner: true,
    home: {
      points: {
        intro: { zh: '分散式微服務電商：用 Outbox／Inbox＋ACID 交易確保下單到退款的正確性；另有獨立的經銷商叫貨系統、可自動回覆或協助真人客服的 AI 客服，以及 Sandbox 封閉式整合測試與壓力測試。', en: 'Distributed microservice e-commerce: outbox / inbox and ACID transactions keep checkout through refund correct. It also has a separate distributor ordering system, an AI support agent that answers customers or assists a human agent, and a sealed sandbox for integration and load tests.' },
        barrier: { zh: '金流逾時、通知重複或漏送時，不能收了錢卻沒有訂單（Saga 補償、定期對帳）；流量變大時，要量得出先壞在哪裡。', en: 'When the payment provider times out or sends a callback twice or never, a charge must never end up without an order (saga compensation, reconciliation); under load, you have to measure what breaks first.' },
      },
      links: [{ kind: 'github', href: 'https://github.com/playcsgo/demo-shop-showcase' }],
      byline: { zh: '獨立開發', en: 'Solo' },
      index: 'Laravel · Go · NestJS · Next.js · Kubernetes',
      tags: ['Laravel', 'Go', 'NestJS', 'MySQL', 'AWS SQS (MQ)', 'Kubernetes'],
      panel: {
        bg: '#E4DED3',
        layout: 'overlay',
        shots: [0],
        code: [{ label: 'core-api · Domain/Messaging/Inbox.php', source: `return DB::transaction(function () use ($eventId, $type, $handler) {
    $inserted = DB::table('inbox_messages')->insertOrIgnore([
        'event_id' => $eventId, 'type' => $type, 'processed_at' => now(),
    ]);

    if ($inserted === 0) {
        return false;
    }

    $handler();

    return true;
});` }],
      },
    },
    iconText: 'DS',
    oneLiner: { zh: '多服務電商後端：在故障和高流量下維持帳務正確，並量出瓶頸。', en: 'A multi-service e-commerce backend that stays correct under failures and load, with the bottleneck measured.' },
    pain: { zh: '廠商會逾時、重送、漏送，流量會突然變好幾倍。系統只在一切順利時正確，上線後就會出現收了錢卻沒有訂單。', en: 'Vendors time out, resend and drop callbacks, and traffic can jump several times over. A system that is only correct on the happy path will charge customers without creating orders.' },
    featured: true,
    status: 'archived',
    period: '2026.10',
    title: { zh: 'Demo Shop：分散式微服務電商', en: 'Demo Shop: distributed microservice e-commerce' },
    tagline: {
      zh: '分散式微服務電商：用 Outbox／Inbox＋ACID 交易確保下單到退款的正確性；另有獨立的經銷商叫貨系統、可自動回覆或協助真人客服的 AI 客服，以及 Sandbox 封閉式整合測試與壓力測試。',
      en: 'Distributed microservice e-commerce: outbox / inbox and ACID transactions keep checkout through refund correct. It also has a separate distributor ordering system, an AI support agent that answers customers or assists a human agent, and a sealed sandbox for integration and load tests.',
    },
    role: { zh: '獨立開發（設計、實作、測試、部署）', en: 'Solo project (design, implementation, tests, deployment)' },
    stack: ['Laravel 12', 'Go', 'NestJS', 'Next.js 16', 'MySQL + ProxySQL', 'Redis', 'SQS', 'Kubernetes', 'Helm', 'Terraform', 'k6', 'Grafana + Loki'],
    links: [{ label: { zh: 'GitHub', en: 'GitHub' }, href: 'https://github.com/playcsgo/demo-shop-showcase' }],
    shots: [
      {
        src: { zh: demoShopGrafana, en: demoShopGrafana },
        alt: { zh: 'Grafana 儀表板：k6 計畫 15149 筆、系統完成 15147 筆，各服務處理時間與每個 Pod 的 CPU', en: 'Grafana dashboard: 15,149 orders planned by k6, 15,147 completed, per-service latency and per-pod CPU' },
        caption: {
          zh: 'K8s 逐階加壓 10→80 TPS（2026-11-18，NestJS 版第 1 次）：k6 計畫的 15,149 筆完成 15,147 筆，未完成 0；下方是每一階加壓時各 Pod 的 CPU',
          en: 'Stepped load on Kubernetes, 10→80 TPS (2026-11-18, NestJS run 1): 15,147 of the 15,149 orders k6 planned completed, none left unfinished; below, each pod\u2019s CPU as the load steps up',
        },
      },
    ],
    credit: { zh: '獨立開發（以 Claude Code 協作）', en: 'Solo, built with Claude Code as a pair programmer' },
    highlights: [],
    topics: [
      { id: "system-design", title: { zh: "系統設計：怎麼拆、為什麼這樣拆", en: "System design: how it is split and why" }, body: [{ zh: "每一層只做一件事：前台只呼叫 BFF；BFF 只管登入狀態、轉發和聚合；業務規則只在核心 API 有一份；廠商之間的差異收在串接服務。", en: "Each layer does one job: the storefront only calls the BFF; the BFF handles login state, forwarding and aggregation; business rules exist only in the core API; vendor differences live in the integration hub." }, { zh: "錢和庫存必須一致，所以留在同一個核心、同一個資料庫。廠商呼叫又慢又不穩，所以隔離到串接服務，每家廠商一組獨立的處理程序，一家慢不會拖住其他家。", en: "Money and stock must stay consistent, so they live in one core and one database. Vendor calls are slow and unreliable, so they are isolated in the hub, with separate workers per vendor so one slow vendor cannot stall the others." }, { zh: "核心和串接服務之間只走佇列：下單只寫資料庫就回應，廠商掛掉也不會擋住顧客。", en: "The core and the hub only talk through queues: checkout responds after writing to the database, and a vendor outage never blocks a customer." }], bullets: [{ zh: "取捨：BFF 多一次網路往返，換來登入憑證不離開伺服器，瀏覽器裡沒有任何 token。", en: "Trade-off: the BFF adds a network hop; in return credentials never leave the server and the browser holds no token." }, { zh: "取捨：佇列只保證「至少送一次」，所以每個消費端都要冪等；換來的是不需要分散式交易。", en: "Trade-off: queues only guarantee at-least-once delivery, so every consumer must be idempotent; in return there is no distributed transaction." }, { zh: "邊界切得乾淨的證明：前台＋BFF（NestJS／Next.js）和核心 API（Laravel／Go）都各有兩個可以切換的版本，換掉一層不必改其他層。", en: "Proof the boundaries hold: the storefront + BFF (NestJS / Next.js) and the core API (Laravel / Go) each have two switchable versions, and swapping one layer needs no change elsewhere." }], figures: [{ src: { zh: demoShopArchZh, en: demoShopArchEn }, alt: { zh: "系統架構圖：使用者、入口、應用服務、訊息、串接層、資料六層，加上經銷商叫貨和 AI 客服兩個延伸服務；右側是平台、可觀測性、測試與驗證；灰色框是還沒做的第二階段", en: "Architecture diagram in six layers (users, ingress, services, messaging, integration, data) plus two add-on services, with platform, observability and testing on the right; grey boxes are the unbuilt second phase" }, caption: { zh: "經銷商叫貨是完全獨立的服務；AI 客服的對話存在自己的資料庫，商品和訂單透過 core-api 的內部 API 查詢。Go 版核心和 Next.js 版前台＋BFF 是同一層的替換版本，沒有另外畫出。點圖可以看原尺寸。", en: "Distributor ordering is fully separate; AI support keeps chats in its own database and reads products and orders through core-api’s internal API. The Go core and the Next.js storefront + BFF replace their layers and are not drawn separately. Click to open full size." }, width: 1520, height: 1375, diagram: true }], pr: { n: 1, href: "https://github.com/playcsgo/demo-shop-showcase/pull/1" } },
      { id: "transaction-correctness", title: { zh: "交易正確性：收了錢，就一定要有訂單", en: "Transaction correctness: a charge always has an order" }, body: [{ zh: "廠商會逾時、把同一個通知送兩次，也會漏送。系統要在這些情況下，仍然不會收了錢卻沒有訂單、庫存被扣兩次。", en: "Vendors time out, send the same callback twice or never send it. Even then, the system must never charge without an order or deduct stock twice." }, { zh: "Outbox：訂單和要送給金流的指令寫在同一筆交易。交易成功，指令就一定會送出；交易失敗，指令也不存在。", en: "Outbox: the order and the command for the payment provider are written in one transaction. If it commits, the command will be sent; if it fails, the command never existed." }, { zh: "Inbox：同一個付款結果收到兩次，只處理一次。登記事件編號和處理本身在同一筆交易，處理失敗就一起回滾，下次重送還能再處理（下面的程式碼）。", en: "Inbox: a payment result received twice is handled once. Recording the event id and handling it share one transaction, so a failure rolls both back and the retry can try again (code below)." }, { zh: "ACID：一筆交易裡的寫入一起成功或一起失敗；CHECK 和 UNIQUE 約束擋住負庫存和重複訂單；用 FOR UPDATE 依商品順序上鎖；commit 之後才算數。", en: "ACID: writes in a transaction succeed or fail together; CHECK and UNIQUE constraints stop negative stock and duplicate orders; FOR UPDATE locks rows in product order; nothing counts until commit." }], bullets: [{ zh: "其他防線：冪等鍵擋連按結帳、Saga 補償釋放預留、排程對帳追查沒回來的通知、重試＋斷路器、失敗 5 次進 DLQ。", en: "Other defences: idempotency keys against double checkouts, saga compensation to release reservations, scheduled reconciliation for missing callbacks, retries with a circuit breaker, and a DLQ after 5 failures." }, { zh: "驗證：金流 30% 錯誤、30 位顧客同時下單並隨機退款，10 項不變式全部 0 不一致。", en: "Verified: with 30% payment errors and 30 customers checking out at once with random refunds, all 10 invariants show 0 inconsistencies." }], figures: [{ src: { zh: demoShopCheckoutZh, en: demoShopCheckoutEn }, alt: { zh: "結帳流程圖：同步的第 1、2 步和非同步的第 3～7 步，右側是每種失敗怎麼收尾", en: "Checkout flow: synchronous steps 1–2, asynchronous steps 3–7, and how each failure is closed out on the right" }, caption: { zh: "顧客只等第 1、2 步；之後經 outbox → SQS → inbox 非同步完成。右邊是每一種失敗怎麼收尾。", en: "The customer only waits for steps 1–2; the rest runs asynchronously via outbox → SQS → inbox. The right side shows how each failure is closed out." }, width: 1490, height: 1420, diagram: true }], code: { file: "services/core-api/app/Domain/Messaging/Inbox.php", lang: "php", caption: { zh: "同一個付款通知收到兩次，只會處理一次：登記事件編號和處理本身在同一筆交易。", en: "A payment callback received twice is handled once: recording the event id and handling it share one transaction." }, source: "public function handleOnce(string $eventId, string $type, callable $handler): bool\n{\n    return DB::transaction(function () use ($eventId, $type, $handler) {\n        $inserted = DB::table('inbox_messages')->insertOrIgnore([\n            'event_id' => $eventId, 'type' => $type, 'processed_at' => now(),\n        ]);\n\n        if ($inserted === 0) {\n            return false;\n        }\n\n        $handler();\n\n        return true;\n    });\n}" }, pr: { n: 2, href: "https://github.com/playcsgo/demo-shop-showcase/pull/2" } },
      { id: "ai-support", title: { zh: "AI 客服：怎麼做出來的", en: "AI-assisted support: how it works" }, body: [{ zh: "客戶可以直接問 AI（Ask）；真人客服接手後，AI 也可以在旁邊協助（Join）。", en: "Customers can ask the AI directly (Ask), and after a human agent takes over the AI can assist from the side (Join)." }, { zh: "每次呼叫都是全新、隔離的程序；AI 只能透過 15 個白名單工具查 core-api 的資料，退款要真人核准。", en: "Every call is a fresh, isolated process; the AI reads core-api data only through 15 allow-listed tools, and refunds need a human." }], figures: [{ src: { zh: demoShopAiModesZh, en: demoShopAiModesEn }, alt: { zh: "Ask 和 Join 的流程圖", en: "Flow of the Ask and Join modes" }, caption: { zh: "Ask 由客戶發起，先分流再回答或轉真人；Join 由客服開啟，AI 等客戶停下來才判斷要不要說話。退款一律要客服核准。", en: "Ask starts with the customer and triages before answering or handing off; Join is turned on by the agent, and the AI waits for the customer to pause before deciding whether to speak. Refunds always need an agent’s approval." }, width: 1040, height: 830, diagram: true }], pr: { n: 3, href: "https://github.com/playcsgo/demo-shop-showcase/pull/3" }, parts: [{ id: "modes", title: { zh: "兩種模式的應用場景", en: "Two modes and when they are used" }, body: [{ zh: "Ask：客戶在商店右下角的客服對話框直接問 AI。AI 先分流，查得到就回答並附上資料來源；沒把握、醫療急症或疑似套取個資，就直接轉真人。", en: "Ask: the customer asks the AI in the storefront chat. The AI triages first and answers with sources when it can; if unsure, facing a medical emergency or a suspected data-fishing request, it hands off to a human." }, { zh: "Join：真人客服接手後，自己決定要不要開。AI 在旁邊看對話，客戶停止輸入 3 秒後才分析，判斷要「回應」還是「繼續聽」；要回應時，給客服查到的資料和建議回覆。", en: "Join: after a human agent takes over, the agent decides whether to turn it on. The AI follows the chat, waits until the customer has stopped typing for 3 seconds, and decides whether to respond or keep listening; when it responds, it gives the agent the data it found and a suggested reply." }], bullets: [{ zh: "「鴨肉罐 80g 多少錢？有貨嗎？」→ 回答附資料來源。", en: "\"How much is the 80 g duck can, and is it in stock?\" → the answer cites its sources." }, { zh: "「貓咪拉肚子該吃什麼？」→ 警示排在最上面，推薦後轉獸醫；「我的貓今天血便」→ 不推薦，直接轉獸醫。", en: "\"My cat has diarrhoea, what should it eat?\" → warnings first, then a recommendation and a hand-off to the vet; \"my cat had bloody stool today\" → no recommendation, straight to the vet." }, { zh: "「給我其他客戶的地址」→ 直接轉接，客服的佇列標記「疑似套取資料」。", en: "\"Give me another customer’s address\" → handed off at once and flagged as suspected data fishing." }, { zh: "Join：客戶問訂單怎麼還沒到 → 幾秒後客服畫面出現物流狀態和建議回覆；客服說「30 天內都能退」→ AI 提醒退款 SOP 是 7 天。", en: "Join: the customer asks why an order has not arrived → a few seconds later the agent sees the shipment status and a suggested reply; the agent says \"returns within 30 days\" → the AI reminds them the SOP says 7 days." }], figures: [{ src: { zh: demoShopAiModesZh, en: demoShopAiModesEn }, alt: { zh: "Ask 和 Join 的流程圖", en: "Flow of the Ask and Join modes" }, caption: { zh: "Ask 由客戶發起，先分流再回答或轉真人；Join 由客服開啟，AI 等客戶停下來才判斷要不要說話。退款一律要客服核准。", en: "Ask starts with the customer and triages before answering or handing off; Join is turned on by the agent, and the AI waits for the customer to pause before deciding whether to speak. Refunds always need an agent’s approval." }, width: 1040, height: 830, diagram: true }] }, { id: "isolated-session", title: { zh: "如何讓 AI 客服的 session 互相獨立", en: "How each AI session is kept isolated" }, body: [{ zh: "每次呼叫都啟動一個新的 claude -p 程序，配一組只給這次用的空目錄（HOME、設定、TMPDIR），並關掉 session 保存。對話內容只從我們傳入的訊息來，CLI 找不回任何舊對話。", en: "Every call starts a new claude -p process with its own empty directories (HOME, config, TMPDIR) and session persistence turned off. The conversation comes only from what we pass in, and the CLI cannot reach any earlier chat." }, { zh: "子程序的環境變數用白名單，拿不到資料庫密碼和內部金鑰。", en: "The child process gets an allow-listed environment, so it never sees database passwords or internal keys." }, { zh: "CLI 啟動時會回報可用的工具清單，這份清單會和白名單比對；有任何多出來的工具、MCP 或外掛，就在模型回答前停掉程序。這樣 CLI 升級改變了參數行為也擋得住。", en: "The CLI reports its tools at start-up, and that list is checked against the allow-list; any extra tool, MCP server or plugin kills the process before the model answers. This holds even if a CLI upgrade changes how a flag behaves." }], bullets: [{ zh: "驗證：隔離測試用真的 CLI 跑，確認新對話看不到舊對話、拿不到不該有的工具。", en: "Verified: isolation tests run against the real CLI, confirming a new chat cannot see an old one or reach tools it should not have." }], figures: [{ src: { zh: demoShopLlmIsoZh, en: demoShopLlmIsoEn }, alt: { zh: "一次 LLM 呼叫的生命週期：拿名額、建新目錄、啟動程序、檢查工具清單、串流、清理", en: "The life of one LLM call: take a slot, create fresh directories, start the process, check the tool list, stream, clean up" }, caption: { zh: "每次呼叫都從空目錄開始，工具清單不符就在模型回答前停掉；不管成功、失敗或取消，都要確認程序整組結束、目錄刪掉，才送出結果。", en: "Every call starts from empty directories and is killed before the model answers if the tool list is off; whether it succeeds, fails or is cancelled, the whole process group must exit and the directories be deleted before a result goes out." }, width: 890, height: 920, diagram: true }] }, { id: "product-and-order-data", title: { zh: "如何讓 AI 客服了解產品和訂單", en: "How the AI knows products and orders" }, body: [{ zh: "模型只能用 15 個白名單工具，例如查商品說明、庫存、訂單、物流和退款 SOP，不讓 AI 寫 SQL。", en: "The model can only use 15 allow-listed tools, such as product docs, stock, orders, shipments and the refund SOP; it never writes SQL." }, { zh: "工具透過 MCP 提供，實作在 support 服務裡，再呼叫 core-api 的內部 API，帶服務金鑰和「這次代表的是哪位客戶」。", en: "The tools are served over MCP by the support service, which calls core-api’s internal API with a service key and the customer it acts for." }, { zh: "每次執行發一個 5 分鐘的 run token，綁定這次的客戶；客戶 ID 由伺服器放進去，模型無法自己指定。依角色開放不同的工具：匿名、客戶、客服、Join。", en: "Each run gets a 5-minute run token bound to that customer; the server sets the customer id and the model cannot choose it. Each role gets its own tools: anonymous, customer, agent and Join." }], bullets: [{ zh: "取捨：只能用工具查資料，回答比較受限，但每句話都能指回查到的資料。", en: "Trade-off: tools-only access limits what the AI can say, but every statement points back to data it looked up." }], figures: [{ src: { zh: demoShopAiFlowZh, en: demoShopAiFlowEn }, alt: { zh: "AI 客服查資料的路徑：模型 → MCP → 工具 → core-api 內部 API → MySQL", en: "How AI support reads data: model → MCP → tools → core-api internal API → MySQL" }, caption: { zh: "模型只看得到工具，看不到資料庫；客戶是誰由伺服器決定，模型無法指定。", en: "The model sees tools, never the database; the server decides which customer it acts for, not the model." }, width: 940, height: 990, diagram: true }] }, { id: "calling-the-model", title: { zh: "怎麼呼叫模型", en: "How the model is called" }, body: [{ zh: "用 Claude Code CLI 的 headless 模式（claude -p），輸出 stream-json 一路串流到畫面上；需要結構化結果時加 --json-schema。分流和 Join 的判斷用 Haiku，正式回答用 Sonnet。", en: "Claude Code CLI in headless mode (claude -p), with stream-json output streamed to the screen and --json-schema when a structured result is needed. Triage and the Join gate use Haiku; answers use Sonnet." }, { zh: "同時執行的數量有上限（預設 5 個），超過就排隊，排隊中也可以取消。", en: "Concurrent runs are capped (5 by default); extra runs queue and can be cancelled while waiting." }], bullets: [{ zh: "取捨：用 CLI 而不是直接打 API，每次呼叫都要啟動新程序，比較慢，也要防 CLI 升級時行為改變；換來的是每次呼叫之間完全不共享狀態。", en: "Trade-off: the CLI instead of the API means a new process per call, which is slower, and guarding against CLI upgrades changing behaviour; in return no state is shared between calls." }, { zh: "退款要真人核准：AI 只能提出提案，客服按核准才執行，core-api 會再驗一次（例如超過 7 天退款期限就擋下）。", en: "Refunds need a human: the AI can only propose, the agent approves, and core-api checks again (for example, it rejects anything past the 7-day window)." }], code: { file: "services/support/api/src/llm/claude-cli.runner.ts", lang: "ts", caption: { zh: "每次呼叫 claude -p 的參數：不讀任何設定、只連我們給的 MCP、不保存 session、只開白名單裡的工具。", en: "The arguments for every claude -p call: no settings read, only our MCP server, no session persistence, only allow-listed tools." }, source: "private args(input: LlmRunInput, mcpConfig: string): string[] {\n  const args = [\n    '-p',\n    '--output-format',\n    'stream-json',\n    '--verbose',\n    '--include-partial-messages',\n    '--model',\n    input.tier === 'fast' ? this.config.fastModel : this.config.mainModel,\n    '--system-prompt',\n    `${input.system}\\n\\n${DATA_NOT_INSTRUCTIONS}`,\n    '--setting-sources',\n    '',\n    '--strict-mcp-config',\n    '--mcp-config',\n    mcpConfig, // 檔案而不是字串：token 不該出現在程序參數裡\n    '--tools',\n    '',\n    '--permission-mode',\n    'dontAsk',\n    '--no-session-persistence',\n    '--disable-slash-commands',\n  ];\n  if (input.mcp)\n    args.push(\n      '--allowedTools',\n      input.mcp.allowedTools.map(mcpToolName).join(','),\n    );\n  if (input.jsonSchema)\n    args.push('--json-schema', JSON.stringify(input.jsonSchema));\n  return args;\n}" } }] },
      { id: "load-testing", title: { zh: "壓力測試：怎麼做、怎麼看、怎麼優化", en: "Load testing: how it runs, how to read it, how it was tuned" }, body: [{ zh: "在封閉的 sandbox 裡注入故障驗證帳務，在 Kubernetes 上逐階加壓找瓶頸；一次只改一個設定，每一輪都檢查 10 項不變式。", en: "Faults are injected in a sealed sandbox to check the books, and stepped load on Kubernetes finds the bottleneck; one setting changes at a time and every run checks the 10 invariants." }, { zh: "把下單路徑改寫成 Go 之後，同樣 8 個 Pod 從約 40 TPS 撐到 80 TPS。", en: "After rewriting the checkout path in Go, the same 8 pods went from about 40 TPS to 80 TPS." }], figures: [{ src: { zh: demoShopGrafana, en: demoShopGrafana }, alt: { zh: "Grafana 儀表板：k6 計畫 15149 筆、系統完成 15147 筆，各服務處理時間與每個 Pod 的 CPU", en: "Grafana dashboard: 15,149 orders planned by k6, 15,147 completed, per-service latency and per-pod CPU" }, caption: { zh: "K8s 逐階加壓 10→80 TPS（2026-11-18）：k6 計畫的 15,149 筆完成 15,147 筆，未完成 0；中間是每一站的處理時間，下方是每一階加壓時各 Pod 的 CPU。", en: "Stepped load on Kubernetes, 10→80 TPS (2026-11-18): 15,147 of the 15,149 orders k6 planned completed, none unfinished; the middle shows each stage’s latency and the bottom each pod’s CPU as load steps up. The dashboard labels are in Chinese." } }], pr: { n: 4, href: "https://github.com/playcsgo/demo-shop-showcase/pull/4" }, parts: [{ id: "how-it-runs", title: { zh: "壓測怎麼做", en: "How the tests run" }, body: [{ zh: "同一台機器可以開好幾套完全獨立的環境，每套有自己的 MySQL、Redis、佇列和 log。一個情境是一個資料夾：廠商怎麼壞、有什麼資料、流量怎麼打、預期結果。", en: "One machine runs several fully separate environments, each with its own MySQL, Redis, queues and logs. A scenario is a folder: how vendors fail, what data exists, what traffic to send and what must hold afterwards." }, { zh: "每一筆請求要不要注入故障，由「種子值＋追蹤號碼」算出來，同一個種子值重跑，壞的是同一筆訂單。", en: "Whether a request gets a fault is derived from a seed plus its correlation id, so rerunning a seed breaks the same order." }, { zh: "壓力測試用 k6 走完整路徑（經過 BFF），逐階加壓，每階維持 60 秒；每一輪開始前清空資料，結束後檢查 10 項不變式。速度變快但資料錯了，不算變快。", en: "Load tests run k6 through the full path including the BFF, stepping load and holding each step for 60 seconds; data is reset before each run and the 10 invariants are checked after it. Faster but wrong does not count." }], bullets: [{ zh: "CI：每個 PR 用 2 套環境平行跑 8 個正確性情境，時間等比例縮短 5 倍，4 分 26 秒跑完。", en: "CI: every PR runs 8 correctness scenarios on 2 environments in parallel, with time scaled down 5×, in 4 min 26 s." }], figures: [{ src: { zh: demoShopCluster, en: demoShopCluster }, alt: { zh: "sandbox 控制台的 K8s 叢集地圖：每個 Node 上的 Pod，以及每個服務的擴充依據和範圍", en: "The sandbox console’s K8s cluster map: pods on each node and each service’s scaling rule and range" }, caption: { zh: "控制台的叢集地圖：可以切換 core-api 的執行方式（PHP-FPM／Octane／Go）、Pod 數模式，並手動固定任一服務的 Pod 數。", en: "The console’s cluster map: switch how core-api runs (PHP-FPM / Octane / Go) and the pod-count mode, or pin any service’s pod count by hand. The console UI is in Chinese." } }, { src: { zh: demoShopLoadForm, en: demoShopLoadForm }, alt: { zh: "sandbox 控制台的壓力測試表單和歷次結果", en: "The sandbox console’s load-test form and past runs" }, caption: { zh: "選環境、世界、每秒下單的階梯，按「執行壓測」；每一次都留下一份報告，可以點開比較。", en: "Pick the environment, the world and the load steps, then run; every run leaves a report you can open and compare. The console UI is in Chinese." } }] }, { id: "how-to-read", title: { zh: "結果怎麼看", en: "How to read the results" }, body: [{ zh: "每一輪壓測都產生一份 HTML 報告：各階的目標和實際送出、延遲、飽和的元件，以及「哪一階開始變慢」「誰先飽和」的判斷。", en: "Every run produces an HTML report: target versus sent per step, latency, saturated components, and a verdict on which step slowed down and what saturated first." }, { zh: "Grafana 看每個服務「收到 → 做完」的時間和每個 Pod 的 CPU；Datadog 看 trace。correlation_id 串起所有服務的 log，一筆訂單從結帳、佇列、廠商通知到排程都查得到。", en: "Grafana shows each service’s receive-to-done time and per-pod CPU; Datadog shows traces. A correlation_id ties every service’s logs together, so one order can be followed from checkout through queues, vendor callbacks and schedulers." }], figures: [{ src: { zh: demoShopGrafana, en: demoShopGrafana }, alt: { zh: "Grafana 儀表板：k6 計畫 15149 筆、系統完成 15147 筆，各服務處理時間與每個 Pod 的 CPU", en: "Grafana dashboard: 15,149 orders planned by k6, 15,147 completed, per-service latency and per-pod CPU" }, caption: { zh: "K8s 逐階加壓 10→80 TPS（2026-11-18）：k6 計畫的 15,149 筆完成 15,147 筆，未完成 0；中間是每一站的處理時間，下方是每一階加壓時各 Pod 的 CPU。", en: "Stepped load on Kubernetes, 10→80 TPS (2026-11-18): 15,147 of the 15,149 orders k6 planned completed, none unfinished; the middle shows each stage’s latency and the bottom each pod’s CPU as load steps up. The dashboard labels are in Chinese." } }] }, { id: "tuning", title: { zh: "優化過程", en: "How it was tuned" }, body: [{ zh: "原則：一次只改一個設定，比較前先重跑當天的基準。", en: "The rule: change one setting at a time, and rerun the day’s baseline before comparing." }], bullets: [{ zh: "先確定量得準：舊腳本繞過 BFF、k6 自己也會丟請求；改成走完整路徑後，被丟掉的請求從 124 筆降到 0～3 筆。", en: "Make the measurement trustworthy: the old script skipped the BFF and k6 dropped requests; after routing through the full path, drops went from 124 to 0–3." }, { zh: "上限約 40 TPS：超過之後 PHP-FPM 的行程全部占滿，健康檢查排不進去，Pod 被移出，成功率掉到約 28%。", en: "A ceiling around 40 TPS: past it, PHP-FPM ran out of workers, health checks could not get in, pods were pulled, and success fell to about 28%." }, { zh: "Pod 從 8 個加到 16 個反而更差，資料庫 CPU 下降：多出來的行程都在等下游，瓶頸不在 Pod 數。", en: "Going from 8 to 16 pods made it worse and database CPU dropped: the extra workers were waiting on downstream, so pod count was not the bottleneck." }, { zh: "只把下單路徑改寫成 Go（對照腳本確認 31 項行為一致）：同樣 8 個 Pod，到 80 TPS 成功率仍是 100%；10 TPS 時 CPU 約 PHP 版的四分之一。", en: "Rewrite only the checkout path in Go (a parity script confirms 31 behaviours match): on the same 8 pods it holds 100% success at 80 TPS, using about a quarter of PHP’s CPU at 10 TPS." }], figures: [{ src: { zh: demoShopJourneyZh, en: demoShopJourneyEn }, alt: { zh: "壓測歷程圖：每一步改了什麼、看到的數字、找到的瓶頸", en: "Load-test journey: what changed at each step, what was measured, the bottleneck found" }, caption: { zh: "2026-10-14～15 的前半段：從監控本身吃 CPU、庫存鎖、回程佇列，一路查到 PHP-FPM 的上限。之後的 Go 改寫見下面兩張圖。", en: "The first half, 2026-10-14 to 15: from monitoring overhead, stock locks and the return queue down to the PHP-FPM ceiling. The Go rewrite that followed is in the two charts below." }, width: 1720, height: 1158, diagram: true }, { src: { zh: demoShopReportFpm, en: demoShopReportFpm }, alt: { zh: "PHP-FPM 版：每秒下單的目標和實際送出", en: "PHP-FPM: target versus actually sent orders per second" }, caption: { zh: "PHP-FPM 版（8 個 Pod）：目標一路加到 80，實際送出卡在 20 左右。", en: "PHP-FPM (8 pods): the target (grey, 目標) climbs to 80 while actually sent orders (blue, 實際送出) stall around 20. Chart labels are in Chinese." }, half: true }, { src: { zh: demoShopReportGo, en: demoShopReportGo }, alt: { zh: "Go 版：每秒下單的目標和實際送出", en: "Go: target versus actually sent orders per second" }, caption: { zh: "Go 版（同樣 8 個 Pod）：實際送出和目標重疊，到 80 TPS 成功率仍是 100%。", en: "Go (same 8 pods): actually sent orders match the target, with 100% success at 80 TPS." }, half: true }] }] },
    ],
    bug: [{ zh: "金流 30% 回傳錯誤時，故障測試抓到一張被扣款、卻是失敗的訂單。原因是對帳把金流「查不到」當成「沒扣款」，但扣款請求其實還在佇列裡等重試。", en: "With 30% payment errors, the fault tests caught an order that was failed yet charged. The reconciler read \"not found\" from the provider as \"not charged\", while the charge was still queued for retry." }, { zh: "修正有三步：超過付款期限 180 秒仍查不到才判定失敗，這個期限刻意長於佇列的重試窗口（30 秒 × 5 次＝150 秒）；判定失敗之後才收到付款成功，一律自動全額退款；再補一條不變式和兩個測試，把這個情況固定下來。", en: "The fix has three parts: a payment is only declared failed 180 s past its deadline, deliberately longer than the queue’s retry window (30 s × 5 = 150 s); any success that arrives after a failure is refunded in full automatically; and a new invariant plus two tests pin the case down." }],
    limits: [{ zh: "全部在一台 Mac mini 上測，機器沒有獨佔；數字只用來比較設定之間的差異，不代表正式環境的容量。", en: "Everything ran on one Mac mini that was not reserved for testing; the numbers compare settings and say nothing about production capacity." }, { zh: "到 80 TPS 時資料庫連線已經用滿，付款完成的 p95 拉長到 40～85 秒，這是下一個要處理的瓶頸。", en: "At 80 TPS database connections were saturated and payment-completion p95 stretched to 40–85 seconds; that is the next bottleneck." }, { zh: "切換到 Next.js 版還不能安全退回：曾經在 Helm 升級失敗時，首頁約 20 分鐘打不開。", en: "Switching to the Next.js version cannot yet roll back safely: once, when a Helm upgrade failed, the home page was down for about 20 minutes." }, { zh: "服務之間用共用金鑰驗證，正式環境應該換成 mTLS 或 OAuth client credentials；也沒有做過第三方滲透測試。", en: "Services authenticate each other with shared keys; production should use mTLS or OAuth client credentials. There has been no third-party penetration test." }, { zh: "真實的金流和物流沒有串接，由模擬廠商代替。", en: "Real payment and logistics providers are not integrated; mock vendors stand in for them." }],
  },

  // ─────────────────────────────────────────────── Yoution
  {
    slug: 'yoution',
    banner: true,
    home: {
      links: [
        { kind: 'web', href: 'https://yoution.app' },
        { kind: 'chrome', href: 'https://chromewebstore.google.com/detail/yoution/faplonbnkjffeblcbfmilifkplkpijik' },
        { kind: 'android', href: 'https://play.google.com/store/apps/details?id=app.yoution' },
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
    links: [
      { label: { zh: '官網 yoution.app', en: 'Website yoution.app' }, href: 'https://yoution.app' },
      { label: { zh: 'Chrome 擴充功能', en: 'Chrome extension' }, href: 'https://chromewebstore.google.com/detail/yoution/faplonbnkjffeblcbfmilifkplkpijik' },
      { label: { zh: 'Google Play', en: 'Google Play' }, href: 'https://play.google.com/store/apps/details?id=app.yoution' },
    ],
    shots: [
      {
        src: { zh: yOutlineZh, en: yOutlineEn },
        alt: { zh: 'Yoution 由 LLM 產生的分段綱要', en: 'An LLM-generated sectioned outline in Yoution' },
        caption: {
          zh: '貼上一篇文章，背景產生分段綱要，左側目錄可直接跳到各段',
          en: 'Paste an article and the backend generates a sectioned outline in the background; the contents list jumps to each section',
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
    credit: { zh: '獨立開發', en: 'Solo' },
    architecture: {
      path: [
        {
          box: { name: { zh: '工作站／模擬器', en: 'Stations / simulator' }, tech: ['WebSocket /ws/station'] },
          step: { zh: '每筆測試結果即時上傳，附 token', en: 'Each test result is streamed with a token' },
        },
        {
          box: { name: { zh: 'FastAPI 接收端', en: 'FastAPI ingest' }, tech: ['FastAPI', 'Pydantic'], note: { zh: 'token 常數時間比對；格式錯誤回覆錯誤但不斷線', en: 'Constant-time token check; bad messages get an error without dropping the connection' } },
          step: { zh: 'handle_result() 寫入資料庫', en: 'handle_result() stores the result' },
        },
        {
          box: { name: { zh: '資料庫', en: 'Database' }, tech: ['MongoDB', 'PyMongo async'], note: { zh: '(station, ts)、(lot, ts) 複合索引；TTL 7 天自動過期', en: 'Compound indexes on (station, ts) and (lot, ts); 7-day TTL' } },
          step: { zh: '每站滑動視窗計算良率', en: 'Per-station sliding-window yield' },
        },
        {
          box: { name: { zh: '告警判斷', en: 'Alert rules' }, tech: ['Python'], note: { zh: '樣本不足不判斷、低於門檻才觸發、同站冷卻期內不重複', en: 'No verdict on small samples, fire below threshold, one alert per station per cooldown' } },
          step: { zh: '結果與告警即時廣播', en: 'Results and alerts are broadcast live' },
        },
        { box: { name: { zh: '即時看板', en: 'Live dashboard' }, tech: ['WebSocket', 'Origin allowlist'] } },
      ],
      side: [
        { name: { zh: '統計查詢', en: 'Analytics queries' }, tech: ['GraphQL (Strawberry)'], note: { zh: '各站良率與 fail code 的 aggregation', en: 'Per-station yield and fail-code aggregation' } },
        { name: { zh: 'Demo 模式', en: 'Demo mode' }, tech: ['FastAPI'], note: { zh: '冷啟動回填一小時資料；有人看才產生資料', en: 'Backfills an hour on cold start; generates data only while watched' } },
        { name: { zh: 'LINE 通知與認領（開發中）', en: 'LINE alerts and claiming (in progress)' }, tech: ['LINE Messaging API'] },
        { name: { zh: '測試與部署', en: 'Testing and deployment' }, tech: ['pytest', 'Fake DB', 'Render'] },
      ],
    },
    highlights: [
      {
        title: { zh: '多個工作站同時送進測試結果', en: 'Many stations sending results at once' },
        body: {
          zh: '非同步的 FastAPI 搭配 PyMongo async，每個工作站一條 WebSocket 連線。真實資料和 demo 產生器的資料走同一個 handle_result()；資料庫透過參數注入，測試時換成 fake DB 就能測整條流程。',
          en: 'Async FastAPI with async PyMongo, one WebSocket per station. Real and demo data share the same handle_result(); the database is injected, so tests swap in a fake DB and exercise the whole flow.',
        },
        ref: 'app/pipeline.py',
      },
      {
        title: { zh: '伺服器數據要與產線實際情況一致', en: 'Server data must match the line' },
        body: {
          zh: '用 Pydantic model validator 表達業務規則：fail 一定要有 fail_code，pass 不能有 fail_code。格式錯誤的訊息會收到結構化的錯誤回覆，但連線不會斷，工作站可以直接重送；沒設定 token 時任何人都不能寫入。',
          en: 'Business rules are Pydantic model validators: a fail must have a fail_code, a pass must not. Malformed messages get a structured error without dropping the connection, so stations can resend, and with no token configured nobody can write.',
        },
        ref: 'app/models.py',
      },
      {
        title: { zh: '告警要準，不誤報也不洗版', en: 'Alerts without false alarms or floods' },
        body: {
          zh: '每站用 deque(maxlen=50) 維護滑動視窗：樣本少於 20 筆不判斷（避免小樣本誤報），良率低於 90% 才觸發，同一站 60 秒內不重複告警（避免洗版）。參數全部可由環境變數調整。',
          en: 'Each station keeps a sliding window in a deque(maxlen=50): no verdict under 20 samples (avoids small-sample false alarms), an alert only below 90% yield, and a 60-second per-station cooldown (avoids floods). All parameters are configurable via environment variables.',
        },
        ref: 'app/alerts.py',
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
      title: { zh: '串接通訊軟體即時通知：LINE 整合（開發中）', en: 'Messaging-app alerts: LINE integration (in progress)' },
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
    credit: { zh: '獨立開發', en: 'Solo' },
    architecture: {
      path: [
        {
          box: { name: { zh: '系統事件', en: 'OS events' }, tech: ['AppState', 'visibilitychange (Web)'] },
          step: { zh: '專注中 App 進入背景', en: 'The app leaves the foreground mid-session' },
        },
        {
          box: { name: { zh: '分心偵測', en: 'Distraction detector' }, tech: ['TypeScript', 'React Native 0.81', 'Expo 54'] },
          step: { zh: '詢問螢幕是否還亮著', en: 'Ask whether the screen is still on' },
        },
        {
          box: { name: { zh: '原生模組', en: 'Native module' }, tech: ['Expo Modules', 'Swift', 'Kotlin'], note: { zh: 'Android 查 PowerManager；iOS 看狀態轉換的時間差', en: 'Android asks PowerManager; iOS reads the state-transition timing' } },
          step: { zh: '判定是切換 App 才記一筆分心', en: 'Only an app switch is recorded as a distraction' },
        },
        {
          box: { name: { zh: '本機儲存', en: 'On-device storage' }, tech: ['AsyncStorage'], note: { zh: '資料結構版本化遷移；8 天前的紀錄自動清除', en: 'Versioned schema migrations; records older than 8 days are cleaned up' } },
          step: { zh: '回到 App 時結算分心時長', en: 'Duration is settled on return' },
        },
        { box: { name: { zh: '回顧畫面', en: 'Session review' }, tech: ['React Native'], note: { zh: '專注比例與分心時間軸', en: 'Focus ratio and distraction timeline' } } },
      ],
      side: [
        { name: { zh: '內購', en: 'In-app purchase' }, tech: ['react-native-iap', 'App Store', 'Google Play'], note: { zh: '試用、Pro、過期三種授權狀態', en: 'Trial, Pro and expired license states' } },
        { name: { zh: '多語系', en: 'Localization' }, tech: ['i18next'], note: { zh: '10 種介面語言', en: '10 UI languages' } },
        { name: { zh: '測試與上架', en: 'Testing and release' }, tech: ['Jest', 'Maestro', 'EAS'] },
      ],
    },
    highlights: [
      {
        title: { zh: '專注中的畫面不能打擾使用者', en: 'The in-session screen must stay out of the way' },
        body: {
          zh: '專注期間的畫面只有計時與當前任務，像西洋棋鐘一樣只計時、不跳提醒；提供日間與夜間兩套主題。',
          en: 'During a session the screen shows only the timer and the current task, like a chess clock that never nags, with day and night themes.',
        },
      },
      {
        title: { zh: '分心紀錄要一眼看懂', en: 'The distraction record must read at a glance' },
        body: {
          zh: '結束後只給兩個東西：專注比例，以及標出每次分心起訖的時間軸。',
          en: 'The review shows just two things: the focus ratio and a timeline marking each distraction.',
        },
      },
      {
        title: { zh: 'iOS 與 Android 對分心的判定模式不同', en: 'iOS and Android detect distractions differently' },
        body: {
          zh: 'iOS 按電源鍵時 inactive → background 的轉換不到 200ms，手勢切換 App 則要 300ms 以上，以此時間差判斷；Android 沒有可靠的 inactive 中間狀態，改用自己寫的 Expo 原生模組呼叫 PowerManager.isInteractive()。原生模組不可用時（例如 Expo Go）回傳 null，由呼叫端決定備援行為。',
          en: 'On iOS, pressing the power button moves inactive → background in under 200 ms, while an app-switch gesture takes 300 ms or more, so the timing decides. Android has no reliable inactive state, so a custom Expo native module calls PowerManager.isInteractive(). When the native module is unavailable (e.g. Expo Go) it returns null and the caller decides the fallback.',
        },
      },
      {
        title: { zh: '本機資料的版本化遷移', en: 'Versioned migrations for local data' },
        body: {
          zh: '資料只存在使用者手機上（AsyncStorage），沒有伺服器可以幫忙修資料，所以資料結構有版本號：App 啟動時先跑遷移再讀資料，新版本只要加一筆 migration。同時自動清除 8 天前的紀錄，控制儲存量。',
          en: 'Data lives only on the device (AsyncStorage), with no server to fix it, so the schema is versioned: migrations run on launch before any read, and a new version just appends a migration. Records older than 8 days are cleaned up automatically to bound storage.',
        },
      },
      {
        title: { zh: '內購與授權狀態', en: 'In-app purchase and license state' },
        body: {
          zh: '以 react-native-iap 串接 App Store 與 Google Play。授權狀態（試用、Pro、過期）由安裝時間與購買紀錄計算；試用期間購買走早鳥商品，試用結束後走原價商品，並支援還原購買。',
          en: 'react-native-iap connects the App Store and Google Play. License state (trial, Pro, expired) is computed from install time and purchase records; purchases during the trial use the early-bird SKU and the regular SKU afterwards, with restore support.',
        },
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
      zh: '把耗時或高併發的操作從 API 拆到背景 worker，再一步步補上原子操作、冪等、可靠投遞與限流。打開就是訪客帳號，可以直接儲值、升級裝備。',
      en: 'Moving slow or high-concurrency work out of the API into background workers, then adding atomic updates, idempotency, reliable delivery and rate limiting step by step. Open it and you get a guest account to top up and upgrade gear right away.',
    },
    role: { zh: '個人練習專案，獨立開發', en: 'Personal learning project, built solo' },
    stack: ['Node.js', 'Express', 'RabbitMQ (amqplib)', 'MongoDB / Mongoose', 'Redis', 'pm2', 'Render'],
    links: [
      { label: { zh: 'Live demo', en: 'Live demo' }, href: 'https://gear-demo.onrender.com' },
      { label: { zh: 'GitHub', en: 'GitHub' }, href: 'https://github.com/playcsgo/cv_equipment' },
      { label: { zh: 'GitHub：Fastify 練習版', en: 'GitHub: Fastify practice version' }, href: 'https://github.com/playcsgo/fastify_prac_1' },
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
    credit: { zh: '個人練習專案，獨立開發', en: 'Personal learning project, built solo' },
    architecture: {
      path: [
        {
          box: { name: { zh: '瀏覽器', en: 'Browser' }, tech: ['Express', 'Handlebars', 'Redis session'], note: { zh: '免登入自動建立訪客帳號', en: 'A guest account is created on first visit' } },
          step: { zh: '每次儲值或升級發出一則訊息', en: 'Each top-up or upgrade becomes one message' },
        },
        {
          box: { name: { zh: '訊息佇列', en: 'Message queue' }, tech: ['RabbitMQ', 'CloudAMQP'], note: { zh: '儲值與升級各一條 queue', en: 'One queue each for top-ups and upgrades' } },
          step: { zh: 'worker 依序取出處理', en: 'Workers take messages in order' },
        },
        {
          box: { name: { zh: 'Worker', en: 'Workers' }, tech: ['Node.js', 'pm2 ×2'], note: { zh: '套用前檢查餘額與等級上限', en: 'Check balance and level cap before applying' } },
          step: { zh: '寫入餘額與裝備等級', en: 'Write balance and gear levels' },
        },
        { box: { name: { zh: '資料庫', en: 'Database' }, tech: ['MongoDB Atlas', 'Mongoose'], note: { zh: 'TTL index 一小時後自動刪除訪客', en: 'A TTL index removes guests after an hour' } } },
      ],
      side: [
        { name: { zh: '部署', en: 'Deployment' }, tech: ['Render'], note: { zh: 'web 與 worker 跑在同一個服務', en: 'Web and workers run on one service' } },
      ],
    },
    techniques: {
      repo: 'https://github.com/playcsgo/cv_equipment',
      rows: [
        {
          title: { zh: '原子操作：不在程式裡讀出、加減、寫回', en: 'Atomic updates instead of read-modify-write' },
          before: { zh: 'worker 讀出餘額、加減後存回；兩個請求同時進來，後寫的會蓋掉先寫的', en: 'Workers read the balance, changed it and saved it back; with two concurrent requests the later write overwrote the earlier one' },
          after: { zh: '用 $inc 讓 MongoDB 直接在現有值上加減；「錢夠不夠、等級滿了沒」寫進查詢條件，不成立就不改', en: '$inc lets MongoDB change the value in place; "enough gems, below max level" lives in the query, so nothing changes when it fails' },
          commits: ['2785a309e55c43f168ebfbba6e80bbc3c6bb3263'],
        },
        {
          title: { zh: '處理成功才 ack＋prefetch', en: 'Ack only after success, with prefetch' },
          before: { zh: 'noAck: true，RabbitMQ 一送出就刪除；worker 處理到一半當掉，訊息永遠消失', en: 'With noAck: true RabbitMQ deleted a message on delivery; a worker crashing mid-task lost it for good' },
          after: { zh: 'handler 成功才 ack、失敗 nack，prefetch(10)；強制結束 worker 後，10 則未確認的訊息全部回到佇列由下一個 worker 接手', en: 'Ack on success, nack on failure, prefetch(10); killing a worker returned all 10 unacked messages to the queue for the next worker' },
          commits: ['9bce79c5868b521c12f26f9dacd83ce9417bc7b5'],
        },
        {
          title: { zh: '訊息持久化＋publisher confirm＋自動重連', en: 'Persistent messages, publisher confirms, reconnects' },
          before: { zh: 'RabbitMQ 重啟後，5 則待處理訊息歸零；之後的儲值請求一直卡住沒有回應', en: 'After a RabbitMQ restart the 5 queued messages were gone, and the next top-up request hung forever' },
          after: { zh: '訊息標 persistent，等 RabbitMQ confirm 才回應使用者；斷線時清掉快取的 channel，下次呼叫自動重連', en: 'Messages are persistent and the user gets a response only after RabbitMQ confirms; a dropped connection clears the cached channel and the next call reconnects' },
          commits: ['e778d6ecb99df386aac03c93bcddefa6d09797f0'],
        },
        {
          title: { zh: '冪等：topupId＋狀態機＋交易', en: 'Idempotency: topupId, a state machine, a transaction' },
          before: { zh: '重送的訊息可能讓同一筆儲值入帳兩次；金額只在前端驗證，用 HTTP 直接送負數、小數、超額，餘額從 10000 變成 55002', en: 'A redelivered message could credit a top-up twice, and amounts were only checked in the browser: raw HTTP with negative, fractional and oversized amounts took a balance from 10,000 to 55,002' },
          after: { zh: '頁面產生 topupId 當冪等鍵，狀態只能 pending → done 一次，入帳與改狀態在同一個交易；金額在伺服器驗證。升級同樣做冪等，骰子在交易外只擲一次', en: 'The page issues a topupId as the idempotency key, status moves pending → done once, and crediting and the status change share one transaction; amounts are validated on the server. Upgrades are idempotent too, with the dice rolled once outside the transaction' },
          commits: ['10d307bb7f899d0784c771af94e71bca289c9145', '92aa029aba6e3cd901e31df414d4629e0877776b'],
        },
        {
          title: { zh: 'DLQ＋有限次數重試', en: 'Dead-letter queue and bounded retries' },
          before: { zh: '處理失敗的訊息只能丟掉，或無限重試卡住佇列', en: 'A failing message could only be dropped or retried forever, clogging the queue' },
          after: { zh: '暫時性錯誤用指數退避重試 3 次；訊息本身有問題（例如 topupId 是物件，可能造成 NoSQL injection）直接進 DLQ，修好之後可以搬回重跑', en: 'Transient errors retry 3 times with exponential backoff; a bad message (say a topupId that is an object, a NoSQL injection risk) goes straight to the DLQ and can be replayed after a fix' },
          commits: ['2d5928e3f039a8d9c652dc939f8735daec006542'],
        },
        {
          title: { zh: 'Redis 滑動視窗限流', en: 'Sliding-window rate limiting in Redis' },
          before: { zh: '儲值、升級沒有次數上限，用腳本就能大量送出', en: 'Top-ups and upgrades had no limit, so a script could flood them' },
          after: { zh: '使用者每分鐘 120 次、IP 每分鐘 1000 次兩層限制，一段 Lua 腳本在 Redis 裡一次原子判斷，任一層超過就整筆不計數；IPv6 以 /56 計算', en: 'Two layers, 120 per user and 1,000 per IP each minute, checked atomically in one Lua script; if any layer is over, nothing is counted. IPv6 counts per /56' },
          commits: ['7ca0ba688395ee15bb73e4738cfb7432c448f287'],
        },
      ],
      method: {
        body: {
          zh: '每一步都先寫一支重現腳本，證明問題存在、記下修改前的數字；修改後用同一支腳本驗證，最後所有腳本一起跑一次回歸。',
          en: 'Every step starts with a script that reproduces the problem and records the before numbers; the same script verifies the fix, and all scripts run together as a final regression.',
        },
        commits: ['1fb703095f61a430fd42902a3130dcdd0aac9a25', 'b1706074784a370f252345d5389d212718aa1747'],
      },
    },
    highlights: [
      {
        title: { zh: '使用者連點儲值、升級', en: 'Users clicking top-up or upgrade repeatedly' },
        body: {
          zh: '每次操作都帶一個冪等鍵（topupId／levelupId），重複送出、網路重送或訊息重投都只會處理一次；升級的骰子在交易外只擲一次，不會因為重跑多給機會。寫入端點另有 Redis 限流。',
          en: 'Every action carries an idempotency key (topupId / levelupId), so double clicks, network retries and redelivered messages are processed once, and an upgrade rolls its dice once outside the transaction. Write endpoints are also rate-limited in Redis.',
        },
      },
      {
        title: { zh: '確保每一筆交易的流程合乎邏輯', en: 'Every transaction follows a sound flow' },
        body: {
          zh: '扣款、升級與狀態更新放在同一個 MongoDB 交易內，「錢夠不夠、等級滿了沒」寫進查詢條件；金額與動作都在伺服器驗證，worker 也不信任訊息內容。',
          en: 'Charging, upgrading and the status change share one MongoDB transaction, with "enough gems, below max level" in the query itself; amounts and actions are validated on the server, and workers do not trust message payloads.',
        },
      },
    ],
    learned: [
      {
        zh: '最早的 worker 用「讀出→修改→存回」更新餘額，多個 worker 同時處理同一位使用者就會互相覆蓋；改成 $inc 原子更新之後，同一支併發腳本就再也重現不出來。',
        en: 'The first workers updated balances with read-modify-write, so concurrent workers overwrote each other; after switching to atomic $inc, the same concurrency script could no longer reproduce it.',
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
    credit: { zh: '團隊專案後端成員；PostgreSQL 遷移與 GraphQL 為個人延伸', en: 'Backend member of the team; the PostgreSQL migration and GraphQL layer were my own follow-up' },
    architecture: {
      path: [
        {
          box: { name: { zh: '前端', en: 'Frontend' }, tech: ['SPA'], note: { zh: '由團隊其他成員開發', en: 'Built by other team members' } },
          step: { zh: 'REST 或 GraphQL 請求，附 JWT', en: 'REST or GraphQL request with a JWT' },
        },
        {
          box: { name: { zh: 'API', en: 'API' }, tech: ['Express', 'Passport JWT', 'Apollo Server'], note: { zh: 'REST 路由與 GraphQL resolver 並存', en: 'REST routes and GraphQL resolvers side by side' } },
          step: { zh: '共用同一套 model', en: 'Both share one set of models' },
        },
        { box: { name: { zh: 'ORM', en: 'ORM' }, tech: ['Sequelize'] }, step: { zh: 'migration 從 MySQL 搬到 PostgreSQL', en: 'Migrations moved from MySQL to PostgreSQL' } },
        { box: { name: { zh: '資料庫', en: 'Database' }, tech: ['PostgreSQL'] } },
      ],
      side: [{ name: { zh: '測試', en: 'Tests' }, tech: ['Mocha', 'Chai'] }],
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
