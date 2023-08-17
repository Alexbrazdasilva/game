import "./style.css";
import Core from "./Core";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <canvas id="root"></canvas>
  </div>
`;

const core = new Core("#root");
window.document.addEventListener(
  "mousemove",
  core.updateMousePosition.bind(core)
);
