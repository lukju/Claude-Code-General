# Copilot Managed Runtime Resources

Stand: 23.11.2026. Die Plattform ändert sich schnell; Microsoft Learn ist die massgebliche Quelle.

## Knowledge

### Offiziell (Microsoft Learn)

- [What is Microsoft Copilot Managed Runtime](https://learn.microsoft.com/en-us/microsoft-365/copilot-managed-runtime/overview?view=o365-worldwide)
  Einstieg: vier Baupfade, ein Portal, Rollen. Use for: Gesamtbild, Lektion 1. **Primärquelle für den Einstieg.**
- [Copilot Managed Runtime architecture](https://learn.microsoft.com/en-us/microsoft-365/copilot-managed-runtime/architecture?view=o365-worldwide)
  SDK, CLI, `ms.config.json`, Git-Repo, Host. Use for: alles zum Aufbau einer App und was zur Laufzeit passiert.
- [Copilot Managed Runtime overview for admins](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/apps/?view=o365-worldwide)
  Default-Governance, Personal Environments, Environment Groups, Freigabe der Baupfade. Use for: Admin- und Governance-Lektionen.
- [Licensing FAQ](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/apps/licensing-faq?view=o365-worldwide)
  Bauen vs. Ausführen, Copilot Credits (0.1 Credit pro API-Call), Power Apps Premium, E3/E5. Use for: Kostenrechnung, Beratung.
- [Manage licensing and Copilot Credits](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/apps/licensing-credits?view=o365-worldwide)
  Spending Policies einrichten, Kostenbeispiele. Use for: Admin-Praxis, Kostenschätzung.
- [Build apps with the Copilot Managed Runtime SDK](https://learn.microsoft.com/en-us/microsoft-365/managed-apps/developer/?view=o365-worldwide)
  SDK-Übersicht für Entwickler. Use for: Dev-Lektionen.
- [Quickstart: Create an app with the SDK (CLI)](https://learn.microsoft.com/en-us/microsoft-365/copilot-managed-runtime/developer/apps/quickstart-managed-apps-cli?view=o365-worldwide)
  Erste App mit `ms` CLI. Use for: erste Hands-on-Lektion.
- [Build, preview, and deploy apps (inner loop)](https://learn.microsoft.com/en-us/microsoft-365/managed-apps/developer/dev-inner-loop?view=o365-worldwide)
  Entwicklungszyklus lokal → Preview → Deploy. Use for: Dev-Workflow.
- [Quickstart: Build an app with GitHub Copilot](https://learn.microsoft.com/en-us/microsoft-365/managed-apps/developer/quickstart-github-copilot?view=o365-worldwide)
  Bauen mit Coding-Agent-Plugin. Use for: agentisches Entwickeln.

### Offiziell (Ankündigungen)

- [Microsoft Copilot Blog: Build where you want, run with confidence](https://www.microsoft.com/en-us/copilot/blog/copilot-studio/build-where-you-want-run-with-confidence-now-microsoft-hosts-and-manages-the-code-created-by-copilot/)
  Produktankündigung, Motivation aus Microsoft-Sicht. Use for: Positionierung, «warum gibt es das».
- [Official Microsoft Blog, 25.09.2026: Introducing the new Copilot](https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/)
  Kontext: Copilot Home, Code, Autopilot. Use for: Einordnung ins Copilot-Portfolio.

### Sekundär (Community, nicht von Microsoft verifiziert)

- [Holger Imbery: The Runtime Becomes the Governance Boundary](https://holgerimbery.blog/copilot-managed-runtime-governance-boundary)
  Governance-Perspektive eines Praktikers. Use for: Diskussionsimpulse; Fakten gegen Learn prüfen.
- [mwpro.co.uk: MC1558033 – GA & Cowork Apps](https://mwpro.co.uk/blog/2026/11/18/mc1558033-microsoft-365-copilot-managed-runtime-reaches-general-availability-and-expands-app-building-in-copilot-cowork/)
  Wiedergabe der Message-Center-Meldung zur GA. Use for: Status-Hinweis, im eigenen Message Center bestätigen.

## Wisdom (Communities)

- [Microsoft Tech Community](https://techcommunity.microsoft.com/)
  Offizielles Forum mit Microsoft-Mitarbeitenden. Use for: Fragen zu Admin, Governance, Lizenzierung. (Noch kein CMR-spezifischer Bereich verifiziert.)
- [Power Platform Community](https://community.powerplatform.com/)
  Grosse moderierte Community; CMR nutzt dieselbe Managed-Environment-Basis wie Power Platform. Use for: Environment- und DLP-Fragen.

## Gaps

- Kein offizielles Video oder Learn-Modul (Training-Pfad) gefunden.
- Kein CMR-spezifisches Community-Forum verifiziert.
- Sicherheitsdetails des Hosts noch nicht gelesen: [How the managed host secures apps](https://learn.microsoft.com/en-us/microsoft-365/copilot-managed-runtime/managed-runtime-security-governance).
- Offizielle Bestätigung des GA-Status (MC1558033) fehlt noch.
