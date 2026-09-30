# Loren Flowers – Webauftritt

Informations- und Image-Website des Blumengeschäfts **Loren Flowers**, umgesetzt als
ASP.NET-Core-MVC-Anwendung. Die Seite stellt das Geschäft, seine floristischen Schwerpunkte
und seine Geschichte vor und führt Interessierte zum Onlineshop unter
`https://loren-flowers.shop`.

Bewusst schlank gehalten: Es gibt **keine Datenbank, keine Benutzerverwaltung und kein Backend** –
die Anwendung rendert eine statische, redaktionell gepflegte Landingpage und verweist für
sämtliche interaktiven Vorgänge (Bestellen, Kontaktformular, Impressum, Datenschutz) auf den Shop.

## Funktionsumfang

Die Startseite besteht aus vier Abschnitten:

- **Start / Hero** – Kernaussage zur Floristik, Kurzvorstellung, Einstiegspunkte in Shop und Kontakt
  sowie Kennzahlen-Karten (Erfahrung, Individualität, Handarbeit)
- **Angebote** – drei Leistungskarten: Blumensträuße, Blumendekoration, Trockenblumen
- **Über uns** – Vorstellung des Betriebs und seiner floristischen Handschrift,
  ergänzt um drei Merkmal-Karten
- **Kontakt** – Hinweisblock mit Standort, Shop- und Datenschutz-Link

Weiter enthalten:

- Rechtsseite **Datenschutz** (`Privacy`)
- Zentral behandelte Fehlerseite mit Request-ID
- Gemeinsames Layout mit Navigation (Start, Angebote, Über uns, Kontakt, Datenschutz, Shop)
- Eigenes Design (`site.css`) mit Logo, Favicon und Bootstrap als Basis

## Technischer Aufbau

| Bereich | eingesetzt |
|---|---|
| Framework | ASP.NET Core MVC, **.NET 10** (`net10.0`), Nullable + ImplicitUsings aktiv |
| Datenbank | keine – die Anwendung ist zustandslos |
| NuGet-Pakete | keine – Bootstrap/jQuery-Bibliotheken liegen unter `wwwroot/lib` |
| Besonderheiten | vorkomprimierte `.br`/`.gz`-Dateien im Publish deaktiviert und zusätzlich nach dem Publish entfernt |

## Projektstruktur

```
lorenflowerswebseite/
├─ lorenwebseite.slnx              Solution-Datei
└─ lorenwebseite/                  eigentliches Webprojekt
   ├─ Program.cs                   Einstiegspunkt und HTTP-Pipeline
   ├─ lorenwebseite.csproj         .NET-10-Webprojekt
   ├─ appsettings.json             Grundkonfiguration (Logging, Hosts)
   ├─ Controllers/HomeController.cs  Index, Privacy, Error
   ├─ Models/ErrorViewModel.cs
   ├─ Views/
   │  ├─ Home/                     Index (Landingpage), Privacy
   │  └─ Shared/                   _Layout, Error, Validierungspartial
   ├─ wwwroot/                     CSS, Logo, Favicon, Bootstrap unter lib/
   └─ Properties/launchSettings.json
```

## Voraussetzungen

- **.NET SDK 10**
- Keine Datenbank, kein SMTP, keine weiteren Dienste nötig

## Lokal bauen und starten

Das Webprojekt liegt im Unterordner `lorenwebseite/`:

```bash
cd lorenwebseite
dotnet restore
dotnet build
dotnet run
```

Die verfügbaren Profile (inkl. Ports) stehen in `Properties/launchSettings.json`.
Die Seite ist danach unter der dort angegebenen Adresse erreichbar.

## Konfiguration

Es sind **keine Geheimnisse** erforderlich. `appsettings.json` enthält nur Logging-Stufen und
`AllowedHosts`.

`appsettings.Development.json` ist **nicht eingecheckt** und wird bei Bedarf lokal angelegt;
umgebungsspezifische Werte gehören in Umgebungsvariablen oder User-Secrets – nicht ins Repository.

Die Ziel-URL des Shops ist derzeit direkt in den Views hinterlegt. Soll sie konfigurierbar werden,
bietet sich ein eigener Schlüssel in `appsettings.json` an, der im Layout und auf der Startseite
gelesen wird.

## Status

Statische Marketingseite in gutem, lauffähigem Zustand. Vor einer Veröffentlichung zu beachten:

- Die **Datenschutzseite ist ein Platzhalter** und muss um die tatsächlichen Angaben zur
  Datenverarbeitung, zu Cookies, Hosting und eingebundenen Drittanbietern ergänzt werden.
- Das Impressum liegt im Shop, nicht in diesem Projekt; die Navigation verweist entsprechend dorthin.
- Es existieren derzeit keine automatisierten Tests.
