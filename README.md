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
| `DESIGN.md` | Designsystemet: farger, typografi, komponenter og regler |
| `PRODUCT.md` | Produktgrunnlag (hvem, hva, hvorfor) for design- og innholdsarbeid |
| `.claude/skills/` | Skills brukt i arbeidet: `frontend-design`, `impeccable` (design), `unslop` (tekst) |

## Bilder

Bildene ligger i `public/bilder/` som `.webp`. Fotoplasser uten fil viser en merket plassholder. Disse mangler fortsatt (`.jpg`, `.webp` eller `.png`):

- `prosjekt-stottemur`, `prosjekt-traer`, `prosjektkasse`

Bilder av folk eller skilt fra andre firmaer bør ikke brukes. Merkevarebilder (Ifor Williams, Kubota) bør klareres med leverandøren.

Kartet over Vestfold er tegnet fra Kartverkets data (CC BY 4.0) og ligger i `src/data/vestfold-kart.json`.

## SEO og GEO (synlighet i søk og AI-svar)

- Statisk HTML, rask lasting, egne fonter (ingen tredjeparts-kall).
- Strukturerte data (JSON-LD): `HomeAndConstructionBusiness`, `Service`, `Article`, `HowTo`, `FAQPage`, `BreadcrumbList`.
- Hver guide starter med et **«Kort svar»** som AI-søk og utdrag kan sitere direkte.
- `sitemap-index.xml`, `robots.txt` og `llms.txt` genereres automatisk.
- Interne lenker mellom prosjekt ↔ guider ↔ kalkulator.

## Før lansering (TODO)

- [x] Telefon, org.nr. og adresse lagt inn
- [x] E-post: erling@boligbutler.no
- [ ] Endelig domene i `astro.config.mjs` og `src/data/site.ts`
- [x] Logo lagt inn (emblem i header, full logo på Om-siden)
- [ ] Koble kontaktskjemaet til en skjematjeneste (nå åpner det e-postprogrammet)
- [ ] Ekte bilder i `public/bilder/` (se listen over)
- [ ] Faglig gjennomlesing av guidene, særlig regelverk (SAK10-grenser for terrasse/støttemur, førerkort/tilhenger) og tall
- [ ] Bekreft innholdet i Basis / Prosjekt / Pluss og hvilket utstyr som faktisk leies ut
- [ ] Registrer Google Business-profil og Search Console

## Publisering (GitHub Pages)

`.github/workflows/pages.yml` bygger og publiserer siden ved hver push.

1. **Første gang:** GitHub → repoet → *Settings* → *Pages* → *Source*: velg **GitHub Actions**.
2. Siden ligger da på https://fumbleforce.github.io/boligbutler/. Den er merket `noindex`, så Google indekserer ikke forhåndsvisningen.

**Eget domene (www.boligbutler.no):**
1. Legg filen `public/CNAME` med innholdet `www.boligbutler.no`.
2. Fjern `env`-blokken (SITE_URL og BASE_PATH) i `.github/workflows/pages.yml`.
3. Hos domeneleverandøren: `www` → CNAME til `fumbleforce.github.io`, og rotdomenet → A-postene til GitHub Pages (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153).
4. I *Settings* → *Pages*: skriv inn domenet og huk av **Enforce HTTPS**.
