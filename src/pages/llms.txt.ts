import { projects } from '../data/projects';
import { site, shortTitle } from '../data/site';
import { pageUrl } from '../data/seo';

// Plain-text summary for AI assistants and answer engines (llmstxt.org), built from the same data as the pages
export function GET() {
  const en = 'en' as const;
  const linkLine = (p: (typeof projects)[number]) =>
    (p.home.links ?? []).map((l) => `${l.kind}: ${typeof l.href === 'string' ? l.href : l.href.en}`).join(' · ');

  const projectBlocks = projects.map((p) => {
    const lines = [
      `### ${shortTitle(en, p.title)} (${p.period}, ${p.status})`,
      '',
      p.tagline.en,
      '',
      ...(p.home.points ? [`Hard part: ${p.home.points.barrier.en}`, ''] : []),
      ...(p.credit ? [`Credit: ${p.credit.en}`] : []),
      `Stack: ${p.stack.join(', ')}`,
      ...(linkLine(p) ? [`Links: ${linkLine(p)}`] : []),
      `Case study: ${pageUrl(en, `/${p.slug}/`)} (中文: ${pageUrl('zh', `/${p.slug}/`)})`,
    ];
    if (p.architecture) {
      lines.push('', 'Request path:', ...p.architecture.path.map(({ box, step }, i) => `${i + 1}. ${box.name.en} [${box.tech.join(', ')}]${step ? ` → ${step.en}` : ''}`));
    }
    lines.push('', p.home.points ? 'How the hard parts were solved:' : 'Highlights:', ...p.highlights.map((h) => `- ${h.title.en}: ${h.body.en}`));
    return lines.join('\n');
  });

  const body = `# Sam Lu (呂兆中) — Backend Engineer Portfolio

> ${site.intro.en}

- Portfolio (English): ${pageUrl(en, '/')}
- Portfolio (繁體中文): ${pageUrl('zh', '/')}
- GitHub: ${site.links.github}
- LinkedIn: ${site.links.linkedin}
- Email: ${site.links.email}

## Summary

${site.stats.map((s) => `- ${s.value.en} ${s.label.en}`).join('\n')}

## Skills

${site.skills.map((g) => `- ${g.group.en}: ${g.items.join(', ')}`).join('\n')}

## Projects

${projectBlocks.join('\n\n')}

## Experience

${site.experience.map((e) => `- ${e.org}, ${e.role.en} (${e.period.en}): ${e.note.en}`).join('\n')}

## Education

${site.education.en}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
