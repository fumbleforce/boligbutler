import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site, packages } from '../data/site';

// Kort, faktabasert oversikt for språkmodeller og AI-søk (llms.txt-konvensjonen).
export const GET: APIRoute = async () => {
  const projects = (await getCollection('prosjekter')).sort((a, b) => a.data.order - b.data.order);
  const guides = await getCollection('guider');
  const u = (p: string) => new URL(p, site.url).href;

  const out = [
    '# BoligButler',
    '',
    `> ${site.description}`,
    '',
    `BoligButler er en lokal prosjektpartner for private huseiere og hytteeiere i ${site.areas.join(', ')} (Vestfold). Kunden gjør jobben selv. BoligButler leverer utstyr hjem, gir innføring på stedet, sender med en prosjektkasse med småverktøy, måleutstyr, verneutstyr og sjekklister, og er tilgjengelig som rådgiver. Råd gis når kunden ber om det. Instruksjon i sikker bruk gis alltid.`,
    '',
    `Oppsett: ${packages.map((p) => `${p.name} (${p.for})`).join('; ')}`,
    '',
    '## Prosjekter',
    ...projects.map((p) => `- [${p.data.navTitle}](${u(`/prosjekter/${p.id}/`)}): ${p.data.description}`),
    '',
    '## Guider',
    ...guides.map((g) => `- [${g.data.title}](${u(`/guider/${g.id}/`)}): ${g.data.summary.replace(/\s+/g, ' ')}`),
    '',
    '## Verktøy',
    `- [Massekalkulator](${u('/verktoy/massekalkulator/')}): regner ut m³ og tonn pukk, grus, sand og matjord.`,
    '',
    '## Kontakt',
    `- Telefon: ${site.phone}`,
    `- E-post: ${site.email}`,
    `- [Beskriv prosjektet](${u('/kontakt/')})`,
    '',
  ].join('\n');

  return new Response(out, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
