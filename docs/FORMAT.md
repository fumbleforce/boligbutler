# Format for guider (src/content/guider/<slug>.md)

Filnavn = slug, kun a-z, 0-9 og bindestrek (æ→ae, ø→o, å→a).

```yaml
---
title: "Slik drenerer du rundt huset"          # H1, maks ~65 tegn, formulert slik folk søker
description: "…"                                # meta description, 130–160 tegn, konkret
project: drenering                              # én av: drenering | terrasse | plen | male-huset | stottemur | gravearbeid | traer
updated: 2026-10-03
difficulty: Middels                             # Enkel | Middels | Krevende
timeEstimate: "3–5 dager for en enebolig"        # realistisk tidsbruk for prosjektet, kort
summary: >-                                     # «Kort svar»: 2–4 setninger som svarer direkte på tittelen. Brukes av søk/AI-svar.
  …
equipment: ["Minigraver", "Dumper"]             # utstyr som er relevant å leie (kan være tom liste)
steps:                                          # valgfritt; kun for rene «slik gjør du»-guider. 4–9 steg. Brukes til HowTo-schema.
  - name: "Kort stegnavn"
    text: "1–2 setninger."
faq:                                            # 3–5 ekte spørsmål folk stiller, korte presise svar (1–3 setninger)
  - q: "…?"
    a: "…"
---
```

Brødtekst:
- Ingen H1 (tittelen er H1). Bruk `##` og `###`.
- 900–1600 ord. Start rett på sak med det viktigste (ingen oppvarming).
- Tabeller er velkomne der de gir oversikt (mål, valg, sammenligninger).
- Sikkerhet/obligatorisk: bruk en blokk som starter med `> **Instruksjon:**` (dette er BoligButlers plikt-nivå).
- Tips/erfaring: `> **Råd:**`.
- Vanlige feil: gjerne en egen `## Vanlige feil` med punktliste.
- Interne lenker (bruk kun disse): prosjekter `/prosjekter/<project-slug>/`, andre guider `/guider/<slug>/`, kalkulator `/verktoy/massekalkulator/`, kontakt `/kontakt/`.
