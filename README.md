# Dashboard

Ludwigs Dashboard är en webbapplikation som låter användaren skapa snabba anteckningar och redigera en personlig titel för sitt dashboard.

## Funktioner

- **Anteckningar**: Användaren kan skriva snabba anteckningar i en stor textarea. Anteckningarna sparas automatiskt och återställs när sidan laddas om.
- **Redigerbar titel**: Användaren kan redigera en personlig titel för sitt dashboard direkt på sidan. Titeln sparas automatiskt och återställs när sidan laddas om.
-  **Se dagens väder för olika städer runtom i hela världen**: Användaren kan själv söka på valfri stad för att få fram stadens nuvarande väder.
-  **Surf i läjet**: Användaren kan så fort hen kommer in på sidan se ifall det är överhuvudtaget värt att ge sig ut i läjetsviken idag.
-  **Spara länkar**: Användaren kan spara upp till 5 länkar.

## Teknologi

- **HTML**: Sidans struktur och innehåll definieras med HTML.
- **CSS**: Stilmallar används för att styla sidans utseende och layout.
- **JavaScript**: Interaktiviteten och funktionaliteten implementeras med JavaScript, inklusive hantering av lokalt lagrade data med hjälp av Local Storage API.
- **Bootstrap-icons**
- **Google Fonts** (Montserrat och Nunito Sans)

## Installation

1. Klona projektet från GitHub-repositoriet.
2. Öppna `index.html` i en webbläsare.

##Resonemang kring projektet och koden.
Det finns absoult saker i detta projekt att utveckla vidare. Här är några exempel: 
- Kunna spara fler än 5 länkar.
- Kunna se mer än det mest aktuella vädret.
- Kunna se mer än läjets vågor, eventuellt kunna söka likt man kan göra med städerna och vädret.
- Kunna skriva in ett sökord när man randomisar backgrundsbild för att kunna välja iallafall tema på backgrundsbilden.

  ## Styrkor
  - **Responsiv design:** Sidan är utformad för att fungera bra på olika skärmstorlekar och enheter, vilket förbättrar användbarheten och tillgängligheten.
  - **Användning av externa API:er:** Integrationen av väder-API:er och favicons för länkar berikar sidans funktionalitet och ger användaren aktuell information.
  - **Interaktivitet:** Interaktiva element som möjliggör redigering av titeln på dashboarden, lägga till länkar och skriva anteckningar förbättrar användarupplevelsen och gör sidan mer engagerande.

  ## Brister och förbättringsområden
  - **Kodupprepning:** Det finns viss kodupprepning i CSS-filen som kan konsolideras för att göra koden mer underhållbar och lättläst.
  - **Optimering av API-anrop:** API-anropen kan optimeras för att hantera felhantering och förbättra prestanda, särskilt om användaren stöter på problem med att hämta väderinformation eller favicons.
 


