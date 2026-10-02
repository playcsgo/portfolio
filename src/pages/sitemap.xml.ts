import { projects } from '../data/projects';
import { pageUrl } from '../data/seo';

// Every page in both languages, each listing its translation for hreflang
export function GET() {
  const paths = ['/', ...projects.map((p) => `/${p.slug}/`)];
  const urls = paths.flatMap((path) =>
    (['zh', 'en'] as const).map(
      (lang) => `  <url>
    <loc>${pageUrl(lang, path)}</loc>
    <xhtml:link rel="alternate" hreflang="zh-Hant-TW" href="${pageUrl('zh', path)}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${pageUrl('en', path)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${pageUrl('en', path)}"/>
  </url>`,
    ),
  );
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
