import { SceneManager } from "./javascript/application.js";

//access the div from index.html
const overworld = document.getElementById("overworld");
//create new instance of scene manager
const sceneManager = new SceneManager(overworld);

bindEventListeners();
render();

function bindEventListeners() {
  window.onresize = resizeCanvas;
  resizeCanvas();
  window.onkeydown = handleKeyDown;
  window.onkeyup = handleKeyUp;
}

function resizeCanvas() {
  overworld.style.width = "100%";
  overworld.style.height = "100%";

  overworld.width = overworld.offsetWidth;
  overworld.height = overworld.offsetHeight;

  sceneManager.onWindowResize();
}

function handleKeyDown(event) {
  var keyCode = event.which;
  sceneManager.handleInput(keyCode, true);
}
function handleKeyUp(event) {
  var keyCode = event.which;
  sceneManager.handleInput(keyCode, false);
}
function render() {
  requestAnimationFrame(render);
  sceneManager.update();
}
