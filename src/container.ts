import home from "./pages/home";

export default async function container() {
  const container = document.createElement("div");
  container.className =
    "bg-gradient-to-br from-green-50 from-0% via-fuchsia-100 via-50% to-yellow-100 to-100% h-dvh px-6 py-8";

  const homeElement = await home();
  container.appendChild(homeElement);

  return container;
}
