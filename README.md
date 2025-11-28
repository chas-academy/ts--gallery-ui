# 🖼️ API-anrop - Gallery UI

En övning på API-anrop med ett tillhörande användargränssnitt i form av ett konstgalleri.

## 🚶 Steg

1. Starta JSON Server
2. Skriv färdigt GET- och POST-funktionerna i `api.ts` som sedan används i `store.ts`
3. Gör färdigt `interface Painter`
4. Ladda upp ett nytt konstverk med hjälp av formuläret
5. Se till att de uppladdade konstverken med tillhörande information visas längst ned på sidan

### Bilderna som användes i exemplet

Samtliga bilder kommer från [unsplash.com](https://unsplash.com/)

<div style="display:flex;gap:1rem;">
    <img src="https://plus.unsplash.com/premium_photo-1675813861350-1d4b74b1e73c" alt="abstract painting" width="100px">
    <img src="https://plus.unsplash.com/premium_photo-1675813861508-8fd0050f7aef" alt="abstract painting" width="100px">
    <img src="https://plus.unsplash.com/premium_photo-1675813861370-af79cd9a7d46" alt="abstract painting" width="100px">
</div>

## 🫙 Installera och använd JSON Server

1. Om du inte installerat JSON Server gör du det med `npm install -g json-server`
2. Kör sedan `json-server --watch db.json` för att starta en lokal server med filen `db.json` som mock-databas
3. Responsen från terminalen borde se ungefär såhär ut:

   ```js
   JSON Server started on PORT :3000
   Press CTRL-C to stop
   Watching db.json...

   (˶ᵔ ᵕ ᵔ˶)

   Index:
   http://localhost:3000/

   Static files:
   Serving ./public directory if it exists

   Endpoints:
   http://lo
   ```

## 🎁 Bonusuppgifter

**Lägg till möjligheten att filtrera på olika konstnärer**

- Skapa en ny typ för routen `painters`, något i stil med

  ```ts
  export interface Painter {
    id?: string;
    name: string;
    paintings: Pick<Painting, "id">[];
  }
  ```

- Lägg till objekt (`Painter`) i arrayen direkt i `db.json`
  - Alternativt, ändra UI:t så att man även kan lägga till kostnär
- Skapa nya API-anrop för att hämta alla konstnärer
- Skapa metoder i `store.ts` som använder API-anropet
  - Hämta inspiration från existerande metoder för att hämta och skapa konstverk
- Skapa en dropdown eller liknande och lista alla konstnärer utifrån API-responsen
- Filtrera arrayen `paintings` så att enbart den valda konstnärens verk visas upp
