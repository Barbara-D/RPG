import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export class Hare {
  constructor(scene) {
    const loader = new GLTFLoader();
    loader.load(
      "../../resources/models/hare.gltf",
      function (gltf) {
        gltf.scene.traverse(function (child) {
          if (child.isMesh) {
            const m = child;
            // m.receiveShadow = true;
            m.castShadow = true;
          }
        });
        var scale = 0.02;
        const hare = gltf.scene;
        hare.scale.set(scale, scale, scale);
        hare.position.set(15, 0, 15);
        scene.add(gltf.scene);
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      // called when loading has errors
      function (error) {
        console.log("An error happened" + error);
      }
    );

    this.update = function (time) {
      //   const scale = Math.sin(time) + 2;
      //   cube.scale.set(scale, scale, scale);
      //   hare.rotation.x += 0.001;
      //   cube.rotation.y += 0.001;
    };
  }
}

// let example = new THREE.Object3D();
// loader.load(objects.exampleGLTF, function (object) {
//   example = object.scene;
//   scene.add(example);
// });
