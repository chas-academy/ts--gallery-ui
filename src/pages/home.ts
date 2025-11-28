import { getPaintings } from "../libs/api";
import form from "../views/form";

export default async function home() {
  const paintings = await getPaintings();

  const home = document.createElement("div");
  home.className = "flex flex-col items-center justify-start gap-8 max-h-full";
  home.innerHTML = `
    <div class="text-center">
        <h1 class="text-7xl text-fuchsia-800 mb-4">Gallery UI</h1>
        <p class="text-black/70">You can add a painting to the gallery via the form below</p>
    </div>
    <h2 class="text-3xl text-black/70">Browse our gallery</h2>
    <div class="flex-1 grid grid-cols-4 gap-4 items-start overflow-y-auto mask-edges py-6 px-2" id="paintings-container">
    </div>
    `;
  home.insertBefore(form(), home.querySelector("h2"));
  const paintingsContainer = home.querySelector("#paintings-container");

  [
    ...paintings,
    ...paintings,
    ...paintings,
    ...paintings,
    ...paintings,
  ]?.forEach((painting) => {
    const paintingCard = document.createElement("div");
    paintingCard.className =
      "flex flex-col items-center justify-center gap-1 bg-white p-4 rounded-md hover:scale-105 transition-all duration-300";

    paintingCard.innerHTML = `
    <img src="${painting.imageUrl}" alt="${painting.name}" class="object-cover aspect-square" />
      <h3 class="text-lg font-bold">${painting.name}</h3>
      <p>by ${painting.painter.name}</p>
      <p class="text-sm text-gray-500">${painting.description}</p>
    `;
    paintingsContainer?.appendChild(paintingCard);
  });

  return home;
}
