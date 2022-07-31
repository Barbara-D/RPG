import { SceneManager } from "./fundamentals/application.js";

//access the div from index.html
const overworld = document.getElementById("overworld");

const sceneManager = new SceneManager(overworld);

bindEventListeners();
render();

function bindEventListeners() {
  window.onresize = resizeCanvas;
  resizeCanvas();
}

function resizeCanvas() {
  overworld.style.width = "100%";
  overworld.style.height = "100%";

  overworld.width = overworld.offsetWidth;
  overworld.height = overworld.offsetHeight;

  sceneManager.onWindowResize();
}

function render() {
  requestAnimationFrame(render);
  sceneManager.update();
}
