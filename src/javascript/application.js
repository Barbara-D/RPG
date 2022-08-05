import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Light } from "./elements/lights.js";
import { TestBox } from "./elements/box.js";
import { Plane } from "./elements/plane.js";
import { Hare } from "./elements/hare.js";
import { Character } from "./elements/character.js";

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
  const orbit = addOrbitControls(camera);

  const dynamicSubjects = [];
  const sceneSubjects = createSceneSubjects(scene);
  var keyMap = [];
  var theCharacter;

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

    //tonemapping changes the look of the whole scene
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    //enables rendering of shadows
    renderer.shadowMap.enabled = true;

    return renderer;
  }

  function buildCamera({ width, height }) {
    const aspectRatio = width / height;
    const fieldOfView = 75;
    const nearPlane = 0.1;
    const farPlane = 1000;
    const camera = new THREE.PerspectiveCamera(
      fieldOfView,
      aspectRatio,
      nearPlane,
      farPlane
    );
    camera.position.set(0, 20, 80);
    // camera.lookAt(new THREE.Vector3(0, 0, 0));

    return camera;
  }

  function addOrbitControls(camera) {
    const controls = new OrbitControls(camera, canvas);
    controls.target.set(0, 0, 0);
    controls.update();

    return controls;
  }

  //creates an array of scene subjects
  function createSceneSubjects(scene) {
    theCharacter = new Character(scene);
    theLight = new Light(scene);
    theTestBox = new TestBox(scene);
    thePlane = new Plane(scene);
    // theHare = new Hare(scene);
    const sceneSubjects = [
      theCharacter,
      theLight,
      theTestBox,
      thePlane,
      // theHare,
    ];
    dynamicSubjects.push(theCharacter);
    return sceneSubjects;
  }

  //these are the public functionss
  //(In case we need to listen to other DOM events, SceneManager will have more public methods.
  //For example onClick(x, y), will be called by the main(index) when an onclick event is registered.)
  this.update = function () {
    const elapsedTime = clock.getElapsedTime();

    for (let i = 0; i < sceneSubjects.length; i++)
      sceneSubjects[i].update(elapsedTime);
    theCharacter.handleInput(keyMap, camera);
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
  this.handleInput = function (keyCode, isDown) {
    keyMap[keyCode] = isDown;
  };
}
