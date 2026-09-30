# DESIGN.md — Portfolio

後端工程師作品集的設計規則。改版或新增專案時照這份做，風格才不會跑掉。
格式參考 awesome-design-md；方向接近 Vercel / Supabase 的開發工具風格，但不照抄任何品牌。

## 原則

- **內容是主角**：截圖、流程圖、程式碼負責說服人，裝飾越少越好。
- **一個強調色**：teal（`--accent`）只用在連結、編號、上線狀態。不加第二個品牌色。
- **mono 只用於技術層**：eyebrow 標籤、期間、檔名、程式碼、技術標籤。內文永遠用 sans。
- **淺色和深色都要能看**：所有顏色走 `:root` token，不寫死色碼（截圖外框除外）。

## 顏色（`src/layouts/Base.astro`）

| Token | Light | Dark | 用途 |
|---|---|---|---|
| `--bg` | `#fbfbf9` | `#111315` | 頁面底色 |
| `--surface` | `#ffffff` | `#181b1e` | 卡片 |
| `--surface-2` | `#f3f3ef` | `#1f2327` | 內嵌區塊、數據格、標籤 |
| `--text` | `#1b1d1f` | `#e8e9ea` | 標題、內文 |
| `--muted` | `#5d6166` | `#a4a9ae` | 次要文字 |
| `--faint` | `#8a8e93` | `#767b81` | eyebrow、日期、註解 |
| `--border` | `#e3e3dd` | `#2b3035` | 1px 框線 |
| `--accent` | `#0f766e` | `#4fd1c0` | 唯一強調色 |
| `--warn` | `#b45309` | `#f0a94b` | 只用於「開發中」 |

## 字體

- Sans：IBM Plex Sans + Noto Sans TC；Mono：JetBrains Mono。
- 標題字重上限 **600**，內文 400。
- 字距：**英文**標題 h1 `-0.04em`、h2/h3 `-0.02em`；**中文不收緊**（用 `:lang(en)` 控制）。

## 間距與形狀

- 間距用 4px 倍數：4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 56 / 72 / 96。
- 圓角：按鈕 6px、卡片與截圖 8px、badge 999px。不用膠囊形按鈕。
- 陰影只用三層 token：`--shadow-sm`（卡片）、`--shadow-md`（hover）、`--shadow-lg`（截圖）。不用單層重陰影。
- 內容寬度上限 960px；手機左右 16px。

## 元件

| 元件 | 檔案 | 規則 |
|---|---|---|
| ProjectCard | `src/components/ProjectCard.astro` | 精選作品顯示第一張截圖當縮圖；其他作品用 compact，不放圖 |
| Screenshot | `src/components/Screenshot.astro` | 深色視窗外框＋三顆點；一律附 caption 說明「這張圖證明了什麼」 |
| Flow | `src/components/Flow.astro` | 編號步驟；`planned: true` 用虛線＋橘色「開發中」 |
| CodeWindow | `src/components/CodeWindow.astro` | 檔名列＋Shiki 雙主題；只放 10～25 行最關鍵的邏輯，程式碼要跟 repo 一致 |

## 截圖

- 用 Playwright（系統 Chrome）截：1280×800、deviceScaleFactor 2、中英文各一張。
- 存在 `src/assets/shots/`，由 `astro:assets` 轉 WebP。
- 需要登入的頁面不截；有個資的畫面不截。

## 內容寫法

- 每個專案：要解決的問題 → 流程 → 技術重點（附程式碼位置）→ 學到的事。
- 只寫程式碼裡查得到的事；團隊專案要寫清楚哪部分是自己做的。
- 中英文內容對等，不要只翻一半。
