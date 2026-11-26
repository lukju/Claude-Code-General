---
Status: offen (nicht abschliessend geklärt, Stand 23.11.2026)
---
# Offene Frage: Werden Apps für mehr Rechte «hochgestuft»?

**Annahme des Users (mögliches Konzept):** Die Default Environment Group bleibt restriktiv, auch für die Personal Environments der Maker. Braucht eine App mehr, als die Default Group erlaubt (z. B. zusätzliche Connectors oder Aktionen, Gastfreigabe, CSP-Ausnahmen), wird sie «hochgestuft»: Sie zieht in ein gemeinsames Environment, dessen Environment Group lockerere Regeln hat. Das Personal Environment des Makers wird dafür *nicht* gelockert. Die Ausnahme hängt damit an der einzelnen App und ihrem Ziel-Environment, nicht am Maker.

**Was dafür spricht (belegt):**
- Lifecycle-Seite: «Makers can choose a different environment only in the CLI, by running `ms app create` with the `--environment-id` parameter.» Im Ziel-Environment muss die CLI-Erstellung erlaubt sein. Dieselbe Seite empfiehlt, Apps vor dem Löschen eines Personal Environments «to a shared environment» zu bringen. ([Learn](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/apps/personal-environments-lifecycle-copilot-managed-runtime?view=o365-worldwide))
- Regeln gelten pro Environment Group für alle Apps darin ([Governance](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/apps/governance?view=o365-worldwide)). Ein lockereres Personal Environment würde also für alle Apps des Makers gelten.
- Power Platform Community empfiehlt pro Stufe eine eigene App per `--environment-id` ([Thread](https://community.powerplatform.com/forums/thread/details/?threadid=b1a58b91-ebdd-f111-84ea-7c1e52fed964), keine akzeptierte Antwort).

**Was dagegen spricht oder unklar ist:**
- Die einzige dokumentierte Art, Rechte zu ändern, ist das Editieren der Gruppenregeln. Microsoft beschreibt das Anpassen der Default Group ausdrücklich als vorgesehen.
- «Hochstufen» ist technisch kein Verschieben: Es entsteht eine neue App mit neuer ID und URL, Data Sources und Freigaben müssen neu eingerichtet werden. Einen Move-, Export- oder Import-Befehl gibt es nicht; `ms app deploy` wechselt das Environment nicht.
- «Promote» heisst bei CMR: Preview-Build wird Live-Version derselben App, kein Environment-Wechsel.
- Ein Community-Repo erwähnt «preview managed projects (`--target test|prod`)» mit CLI 0.27 ([GitHub](https://github.com/vademche/copilot-managed-runtime-skills)), in der offiziellen CLI-Referenz nicht gefunden.

**Implications:** Bis zur Klärung als Annahme behandeln, nicht als Fakt. Klären über `ms app create --help` mit aktueller CLI, Microsoft-Support oder Community-Frage. Beim Klären diesen Record aktualisieren oder durch einen neuen ersetzen.

**Nachtrag 26.11.2026 – Environment je Erstellungsweg:**
- Cowork, Copilot Studio: standardmässig Personal Environment, keine dokumentierte Wahl ([Cowork](https://learn.microsoft.com/en-us/copilot/cowork/cowork-build-apps), [Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/apps-experience/apps-overview)). Copilot Code: nicht dokumentiert.
- CLI (`--environment-id`) und Lovable (Environment-ID in der Verbindung, vom Admin vergeben): anderes Environment wählbar ([Lovable](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/apps/configure-lovable?view=o365-worldwide)). Widerspricht teilweise der Lifecycle-Seite («only in the CLI»).
- Routing bestimmt nur die Environment Group des Personal Environments und wer bauen darf, nicht ein gemeinsames Ziel-Environment.
- Folge für die Annahme: Ein «Hochstufen» in ein gemeinsames Environment ist nur über die Pro-Code-Wege (CLI, Lovable) möglich, nicht für Apps aus Cowork oder Studio.
