import * as THREE from "three";
import { Camera } from "./fundamentals/camera.js";
import Light from "./fundamentals/light.js";

//CONSTANTS
const fov = 75;
const near = 1.0;
const far = 1000;

const scene = new THREE.Scene();

let camera = new Camera(fov, window.innerWidth / window.innerHeight, near, far);
camera.position.set(0, 0, 6);

let light = new Light();
scene.add(light.container);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({ color: 0x00ffff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
