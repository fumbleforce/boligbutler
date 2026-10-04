# Tilbakemeldinger fra nettsiden

Det finnes to innganger. Ingen timevis polling: Claude vekkes bare når det er noe nytt.

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

## Hvordan Claude vekkes

Når Erling sender en tilbakemelding eller svarer på et spørsmål, lagrer siden innspillet og publiserer deretter en ny versjon av seg selv. Det eneste som endres er tidsstempelet i kommentaren `<!-- sist-innsendt: … -->`. Siden bærer sin egen kildekode (konstanten `SELF`), slik at den kan gjenskape seg selv nøyaktig.

Vedlikeholdsøkten «BoligButler: tilbakemeldinger fra nettsiden» abonnerer på siden med `ArtifactComments` `watch`. En ny versjon vekker økten, og selve sjekken bruker ingen tokens. Claude skriver bare status og svar i databasen og publiserer aldri siden selv, så det blir ingen vekkeløkke.

Kildefil og generator for siden ligger utenfor repoet. Ved endringer i siden må `SELF` genereres på nytt fra malen, ellers publiserer siden en eldre versjon av seg selv.

GitHub-issues sjekkes i samme runde, men vekker ikke Claude alene.

## Hva Claude gjør

Den leser `PRODUCT.md`, `DESIGN.md`, `docs/WRITING.md` og README, gjør endringen, bygger, commiter og pusher til `ccr-23e7f232-rhtwxa`, og svarer der tilbakemeldingen kom fra. Er ønsket uklart eller stort, stiller den et spørsmål i stedet for å gjette.
