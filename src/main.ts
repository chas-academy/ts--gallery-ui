import "./style.css";
import container from "./container";
import { setRenderCallback } from "./libs/store";

const renderApp = async () => {
  const app = document.querySelector<HTMLDivElement>("#app");
  app!.innerHTML = "";

  const containerElement = await container();
  app!.appendChild(containerElement);

  setRenderCallback(renderApp);
};
renderApp();
