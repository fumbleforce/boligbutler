# BoligButler – nettsted

Statisk nettsted bygget med [Astro](https://astro.build). Innholdet er organisert rundt **prosjekter** (drenering, terrasse, plen …), ikke rundt maskiner, i tråd med virksomhetens identitetsdokument.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # statiske filer i dist/
```

## Struktur

| Sti | Innhold |
|---|---|
| `src/content/prosjekter/*.md` | Prosjektsider: utstyr, prosjektkasse, hva BoligButler gjør, når man bør bruke fagfolk, FAQ |
| `src/content/guider/*.md` | Fagartikler (SEO/GEO). Format: `docs/FORMAT.md` |
| `src/data/site.ts` | Kontaktinfo, oppsett (Basis/Prosjekt/Pluss), prosjektkasse, sjekklister |
| `src/pages/verktoy/massekalkulator/` | Kalkulator for pukk, grus, sand og jord |
| `docs/WRITING.md` | Skriveregler og stemme. Les før du skriver nytt innhold |

## SEO og GEO (synlighet i søk og AI-svar)

- Statisk HTML, rask lasting, egne fonter (ingen tredjeparts-kall).
- Strukturerte data (JSON-LD): `HomeAndConstructionBusiness`, `Service`, `Article`, `HowTo`, `FAQPage`, `BreadcrumbList`.
- Hver guide starter med et **«Kort svar»** som AI-søk og utdrag kan sitere direkte.
- `sitemap-index.xml`, `robots.txt` og `llms.txt` genereres automatisk.
- Interne lenker mellom prosjekt ↔ guider ↔ kalkulator.

## Før lansering (TODO)

- [ ] Telefon, e-post, org.nr. og adresse i `src/data/site.ts`
- [ ] Endelig domene i `astro.config.mjs` og `src/data/site.ts`
- [ ] Ekte logo i `src/components/Wordmark.astro` og `public/favicon.svg`
- [ ] Koble kontaktskjemaet til en skjematjeneste (nå åpner det e-postprogrammet)
- [ ] Bilder fra ekte prosjekter (før/etter, utstyr på tomta) og presentasjon av personen(e) bak på `/om/`
- [ ] Faglig gjennomlesing av guidene, særlig regelverk (SAK10-grenser for terrasse/støttemur, førerkort/tilhenger) og tall
- [ ] Bekreft innholdet i Basis / Prosjekt / Pluss og hvilket utstyr som faktisk leies ut
- [ ] Registrer Google Business-profil og Search Console
