import * as THREE from "three";
import { Light } from "./light.js";
import { TestBox } from "./box.js";

export function SceneManager(canvas) {
  const clock = new THREE.Clock();

  const screenDimensions = {
    width: canvas.width,
    height: canvas.height,
  };

  //initialize main application elements with private methods
  const scene = buildScene();
  const renderer = buildRender(screenDimensions);
  const camera = buildCamera(screenDimensions);
  const sceneSubjects = createSceneSubjects(scene);

  //create a new scene with a function
  function buildScene() {
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color("#000");
    return scene;
  }

  //define renderer with a function
  function buildRender({ width, height }) {
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    });
    const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
    renderer.setPixelRatio(DPR);
    renderer.setSize(width, height);

    renderer.gammaInput = true;
    renderer.gammaOutput = true;

    return renderer;
  }

  function buildCamera({ width, height }) {
    const aspectRatio = width / height;
    const fieldOfView = 60;
    const nearPlane = 1;
    const farPlane = 100;
    const camera = new THREE.PerspectiveCamera(
      fieldOfView,
      aspectRatio,
      nearPlane,
      farPlane
    );

    return camera;
  }

  //creates an array of scene subjects
  function createSceneSubjects(scene) {
    const sceneSubjects = [new Light(scene), new TestBox(scene)];

    return sceneSubjects;
  }

  //these are the public functions
  //(In case we need to listen to other DOM events, SceneManager will have more public methods.
  //For example onClick(x, y), will be called by the main when an onclick event is registered.)
  this.update = function () {
    const elapsedTime = clock.getElapsedTime();

    for (let i = 0; i < sceneSubjects.length; i++)
      sceneSubjects[i].update(elapsedTime);

    renderer.render(scene, camera);
  };

  this.onWindowResize = function () {
    const { width, height } = canvas;

    screenDimensions.width = width;
    screenDimensions.height = height;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
  };
}
