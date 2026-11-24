# Prompt: Teach-Workspace auf OC-Design umstylen

Wiederverwendbar in jeder `/teach`-Session. Den Block unten kopieren und als Nachricht senden; den Workspace-Pfad bei Bedarf anpassen.

Quelle der Werte: Skill «OC-Design» (Corporate Design Manual Online Consulting AG, Juli 2023). Mit der Stilbeschreibung in deiner lokalen Teach-Skill-Kopie abgleichen.

---

```text
Style alle HTML-Dateien dieses Teach-Workspaces (lessons/, reference/, assets/) auf das OC-Design der Online Consulting AG um. Lade dafür zuerst den Skill «oc-design», falls verfügbar; die Werte unten gelten, falls nicht. Ändere nur das Aussehen, nicht Inhalt, Struktur, Links oder JavaScript-Verhalten.

Vorgehen:
- Gemeinsames Stylesheet (assets/*.css) anpassen statt jede Datei einzeln. Inline-Styles in den HTML-Dateien nur angleichen, wo nötig.
- Google-Fonts-Link in allen Dateien auf Open Sans 300 und 700 umstellen (Regular 400 nur sparsam).
- Danach Lektionen, die als Artifacts veröffentlicht sind, neu publizieren (falls vorhanden mit tools/build_artifacts.py), dabei dieselben URLs behalten. Committen und pushen.

Farben:
- Future Berry #980043: Titel, Zwischentitel, Trennlinien, Links, Akzente (Leitfarbe)
- Classical Red #DB141C: Aufzählungspunkte (runde Punkte), kleine Hervorhebungen, nie Fliesstext
- Schwarz #000000: Fliesstext, Tabelleninhalte
- Autumn Plum #281923 / 75 % #443043 / 50 % #735F73 / 25 % #B1A2B0: Flächen, Icons, zurücktretende Elemente
- Weiss als Hintergrund, Farbe sparsam dosieren
- Verlauf Classical Red → Future Berry (linear, links nach rechts, Stopps 19 % / 43 %) nur für Hintergrundflächen, z. B. ein schmales Kopfband

Typografie:
- Open Sans Light (300) für Fliesstext und Untertitel, Open Sans Bold (700) für Titel, Zwischentitel, Hervorhebungen, Tabellenköpfe
- Fallback: "Segoe UI", "Source Sans 3", sans-serif. Keine Serifenschrift, keine weiteren Schriftfamilien; Code bleibt in einer Monospace-Schrift

Layout-Elemente:
- Titelzeile zweiteilig: Thema in Bold Future Berry, dann senkrechter Strich «|» in Future Berry, dann Untertitel in Light Schwarz
- Dünne vertikale Trennlinie in Future Berry als wiederkehrendes Element (z. B. links am Inhaltsbereich oder an Hinweiskästen)
- Tabellen: Kopfzeile Bold auf Weiss mit Trennlinie in Future Berry, keine Zebrastreifen in Markenfarben
- Fusszeile: «online» in Future Berry Bold, Rest in Schwarz Light

Nicht im Manual geregelt (als Ableitung behandeln und im Abschlussbericht vermerken):
- Quiz-Feedback: richtig neutral-grün (#1D7A4A, heller Grund #E6F2EC), falsch in Autumn Plum 75 % mit hellem Plum-Grund. Classical Red nicht als Fehlerfarbe verwenden.
- Dark Mode: Pflicht für Artifacts. Hintergrund Autumn Plum #281923, Text #F2EEF1, Akzent aufgehellt (z. B. #E06A9A statt Future Berry), Kontrast mindestens 4.5:1.

Zum Schluss: kurz berichten, welche Dateien geändert wurden, welche Ableitungen vom Manual gelten, und die Artifact-Links nennen.
```
