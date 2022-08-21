export function f1() {
  //just an example
  //to use :
  //  import { f1 } from "./file1.js";
  //  f1();
}

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

var modelLoader = new GLTFLoader();
modelLoader.load(
  "../../resources/models/robot.gltf",
  function (gltf) {
    this.model = gltf.scene;
    this.model.traverse(function (child) {
      if (child.isMesh) {
        child.castShadow = true;
      }
    });

    var scale = 0.025;
    this.model.scale.set(scale, scale, scale);

    this.model.position.set(0, 4, 0);
    scene.add(this.model);
  }.bind(this)
);

this.update = function () {
  const elapsedTime = clock.getElapsedTime();

  for (let i = 0; i < sceneSubjects.length; i++)
    sceneSubjects[i].update(elapsedTime);
  renderer.render(scene, camera);
};

update;
