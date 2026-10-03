# Tilbakemeldinger fra nettsiden

Forhåndsvisningen (https://fumbleforce.github.io/boligbutler/) har en «Tilbakemelding»-knapp. Den åpner et nytt GitHub-issue med tittel `Tilbakemelding: <side>` og lenke til siden.

En rutine i Claude Code kjører hver time og gjør dette:

1. Finner åpne issues i `fumbleforce/boligbutler` med tittel som starter med «Tilbakemelding» **og som er opprettet av `fumbleforce`**. Issues fra andre ignoreres (repoet er offentlig).
2. Leser `PRODUCT.md`, `DESIGN.md`, `docs/WRITING.md` og README før endringer.
3. Gjør endringen, kjører `npm run build`, commiter og pusher til grenen `ccr-23e7f232-rhtwxa`. GitHub Pages publiserer automatisk.
4. Svarer i issuet med hva som ble gjort, og lukker det.
5. Er ønsket uklart eller stort (nytt design, nye sider, noe som krever bilder eller fakta som mangler), svarer rutinen med et spørsmål og lar issuet stå åpent. Når eieren svarer i issuet, tas det opp igjen ved neste kjøring.

Skriv én ting per issue, så blir det lettere å følge opp.
