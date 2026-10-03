# Tilbakemeldinger fra nettsiden

Det finnes to innganger. Begge behandles av den samme timevise rutinen.

## 1. Tilbakemeldingssiden (for Erling)

https://claude.ai/artifact/HXyMJAUPpKTeFAgaTWZ4xk

- Den er privat og krever innlogging på claude.ai. Den må deles med Erling som **Editor** (Del-menyen på siden).
- Erling skriver hva som skal endres, velger side og legger ved bilder. Bildene gjøres mindre i nettleseren før de lagres.
- «Tilbakemelding»-knappen i forhåndsvisningen (fumbleforce.github.io/boligbutler) går hit, med siden forhåndsvalgt.
- Data ligger i sidens database (`ArtifactData`-verktøyet):
  - `tilbakemeldinger/<id>`: `{tekst, side, opprettet, status, antallBilder, svar: [{fra, tekst, tid}]}`
  - `tilbakemeldinger/<id>/bilder/<nn>`: `{navn, data (data-URL, JPEG), bredde, hoyde}`
  - `status`: `ny` → `arbeid` → `ferdig`, eller `sporsmal` når Claude trenger svar. Når Erling svarer, settes status tilbake til `ny`.
  - `svar[].fra`: `claude` eller `erling`.

## 2. GitHub-issues (for deg med GitHub-konto)

Issues i `fumbleforce/boligbutler` med tittel som starter med «Tilbakemelding» og som er opprettet av `fumbleforce`. Issues fra andre ignoreres.

## Hva rutinen gjør

Den leser `PRODUCT.md`, `DESIGN.md`, `docs/WRITING.md` og README, gjør endringen, bygger, commiter og pusher til `ccr-23e7f232-rhtwxa`, og svarer der tilbakemeldingen kom fra. Er ønsket uklart eller stort, stiller den et spørsmål i stedet for å gjette.
