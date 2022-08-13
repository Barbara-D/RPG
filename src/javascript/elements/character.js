import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export class Character {
  constructor(scene) {
    var modelLoader = new GLTFLoader();
    this.model;
    this.height;
    this.width;
    //make this smaller if i create edge elements
    let halfPlane = 150;

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
        var boundingBox = new THREE.Box3().setFromObject(this.model);
        this.height = boundingBox.getSize().y;
        this.width = boundingBox.getSize().x;
      }.bind(this)
    );

    // sine wave animation
    this.update = function (time) {
      const posy = Math.sin(time) + 3.5;
      this.model.position.y = posy;
    };

    //controls
    this.handleInput = function (keyMap, camera) {
      //w on keyboard, forwards
      if (keyMap[87] && this.model.position.z > -halfPlane) {
        this.model.position.z -= 1;
        this.model.rotation.y = Math.PI;
        camera.lookAt(this.model.position);
        camera.position.z = this.model.position.z + 20;
        camera.position.x = this.model.position.x + 20;
        camera.position.y = 34;
      }
      //s on keyboard, backwards
      if (keyMap[83] && this.model.position.z < halfPlane) {
        this.model.position.z += 1;
        this.model.rotation.y = 0;
        camera.lookAt(this.model.position);
        camera.position.z = this.model.position.z + 20;
        camera.position.x = this.model.position.x + 20;
        camera.position.y = 34;
      }
      //a on keyboard, left
      if (keyMap[65] && this.model.position.x > -halfPlane) {
        this.model.position.x -= 1;
        this.model.rotation.y = -Math.PI / 2;
        camera.lookAt(this.model.position);
        camera.position.x = this.model.position.x + 20;
        camera.position.z = this.model.position.z + 20;
        camera.position.y = 34;
      }
      //d on keyboard, right
      if (keyMap[68] && this.model.position.x < halfPlane) {
        this.model.position.x += 1;
        this.model.rotation.y = Math.PI / 2;
        camera.lookAt(this.model.position);
        camera.position.x = this.model.position.x + 20;
        camera.position.z = this.model.position.z + 20;
        camera.position.y = 34;
      }
    };
  }
}
//eventualno dodati ponasanja ako su stisnute dvije tipke istovremeno (al to je puno repetitivnih if-ova), a i ono, ne dodaje nes previse funkcionalnosti
//dodati ponasanje da ne moze izaci van granica scene, something like: V, but test it
//  if (keyMap[68] && this.model.position.x + this.width / 2 < camera.right) {
//    this.model.position.x += 5;
//  }
