import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export class Character {
  constructor(scene) {
    var modelLoader = new GLTFLoader();
    this.model;
    this.height;
    this.width;

    modelLoader.load(
      "../../resources/models/robot2.gltf",
      function (gltf) {
        this.model = gltf.scene;
        this.model.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = true;
          }
        });

        var scale = 0.025;
        this.model.scale.set(scale, scale, scale);

        this.model.position.set(15, 4, 15);
        scene.add(this.model);
        var boundingBox = new THREE.Box3().setFromObject(this.model);
        this.height = boundingBox.getSize().y;
        this.width = boundingBox.getSize().x;
      }.bind(this)
    );

    // po sinusoidi lebdi gore dolje sporo
    this.update = function (time) {
      const pos = Math.sin(time) + 3.5;
      this.model.position.y = pos;
    };
    //controls
    this.handleInput = function (keyMap, camera) {
      //w on keyboard, forwards
      if (keyMap[87]) {
        this.model.position.z -= 1;
        this.model.rotation.y = Math.PI;
        camera.lookAt(this.model.position);
        camera.position.z = this.model.position.z + 20;
        camera.position.x = this.model.position.x + 20;
      }
      //s on keyboard, backwards
      if (keyMap[83]) {
        this.model.position.z += 1;
        this.model.rotation.y = 0;
        camera.lookAt(this.model.position);
        camera.position.z = this.model.position.z + 20;
        camera.position.x = this.model.position.x + 20;
      }
      //a on keyboard, left
      if (keyMap[65]) {
        this.model.position.x -= 1;
        this.model.rotation.y = -Math.PI / 2;
        camera.lookAt(this.model.position);
        camera.position.x = this.model.position.x + 20;
        camera.position.z = this.model.position.z + 20;
      }
      //d on keyboard, right
      if (keyMap[68]) {
        this.model.position.x += 1;
        this.model.rotation.y = Math.PI / 2;
        camera.lookAt(this.model.position);
        camera.position.x = this.model.position.x + 20;
        camera.position.z = this.model.position.z + 20;
      }
    };
  }
}
//eventualno dodati ponasanja ako su stisnute dvije tipke istovremeno (al to je puno repetitivnih if-ova)