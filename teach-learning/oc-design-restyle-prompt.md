# Prompt: Teach-Workspace auf OC-Design umstylen

Wiederverwendbar in jeder `/teach`-Session. Den Block kopieren und als Nachricht senden.

```text
Style alle HTML-Dateien dieses Teach-Workspaces (lessons/, reference/, assets/) mit dem Skill «oc-design» um. Lade den Skill und wende ihn direkt an. Ändere nur das Aussehen, nicht Inhalt, Struktur, Links oder JavaScript.
- Gemeinsames Stylesheet in assets/ anpassen statt jede Datei einzeln; Google-Fonts-Link in allen Dateien auf Open Sans 300/400/700 umstellen, Code bleibt Monospace.
- Was der Skill nicht regelt, als Ableitung kennzeichnen: Dark Mode (Pflicht für Artifacts, Grund Autumn Plum), Quiz-Feedback (Classical Red nie als Fehlerfarbe).
- Veröffentlichte Lektionen unter denselben URLs neu publizieren (falls vorhanden mit tools/build_artifacts.py), committen und pushen.
- Zum Schluss geänderte Dateien, Ableitungen und Artifact-Links nennen.
```
