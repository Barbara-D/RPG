import * as THREE from "three";
import { ACESFilmicToneMapping, Vector3 } from "three";
import { Camera } from "./fundamentals/camera.js";
import Light from "./fundamentals/light.js";

//CONSTANTS
const fov = 75;
const near = 0.1;
const far = 2000;
const overworld = document.getElementById("overworld");

//CREATING A NEW SCENE
const scene = new THREE.Scene();

let camera = new Camera(fov, window.innerWidth / window.innerHeight, near, far);

let light = new Light();
scene.add(light.container);

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({ color: 0x00ffff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

async function init() {
  //RENDERER SETUP
  //transparent background, antialiasing makes everything smoother but can hinder performance
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  //tonemapping changes the look of the whole scene
  renderer.toneMapping = ACESFilmicToneMapping;
  //enables rendering of shadows
  renderer.shadowMap.enabled = true;

  overworld.appendChild(renderer.domElement);
  window.addEventListener("resize", onWindowResize, false);
}

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

//this works, but might want to refactor the code to look cleaner
function onWindowResize() {
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;
  renderer.setSize(WIDTH, HEIGHT);
  camera.aspect = WIDTH / HEIGHT;
  camera.updateProjectionMatrix();
}

init();
animate();
