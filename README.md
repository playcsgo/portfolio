# Portfolio

中英雙語作品集（Astro 靜態網站）。中文在 `/`，英文在 `/en/`。

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # 輸出到 dist/
```

## 修改內容

所有文字都在 `src/data/`，頁面會自動產生：

- `src/data/projects.ts`：專案內容（每個欄位都是 `{ zh, en }`）
- `src/data/site.ts`：姓名、自我介紹、技能、聯絡方式、介面文字

### LINE 整合完成後要改的地方（mock-mes）

1. `flow.steps` 最後一步拿掉 `planned: true`，`detail` 改成實際做法
2. `roadmap` 整段刪掉，把做完的功能改寫成 `highlights`（例如「非阻塞推播佇列」「推播額度控制」）
3. `stack` 加上 `LINE Messaging API`，並更新 `stats`（例如測試檔數量）

## 部署到 agilenpi.com/portfolio

網站設定成放在 `/portfolio` 子路徑（`astro.config.mjs` 的 `base`）。

push 到 `main` 就會自動部署（`.github/workflows/deploy.yml`）：build → 用 `dist/` 取代 landing page repo（`playcsgo/agilenpi_landing_page`）的 `portfolio/` → commit + push → Cloudflare Pages 自動部署。每次都會先抓 landing page 的最新版，其他資料夾（例如 `mes_demo/`）不會被動到。

也可以在 GitHub 的 Actions 頁面手動執行（Run workflow）。

需要的 secret：`LANDING_PAGE_TOKEN`，是一個只對 `agilenpi_landing_page` 有 Contents: Read and write 權限的 fine-grained PAT。
