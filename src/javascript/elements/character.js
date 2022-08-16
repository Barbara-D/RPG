import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export class Character {
  constructor(scene) {
    var modelLoader = new GLTFLoader().setPath("resources/models/");
    this.model;
    this.height;
    this.width;
    //make this smaller if i create edge elements
    let halfPlane = 110;

    modelLoader.load(
      "robot.gltf",
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
      }.bind(this),
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      // called when loading has errors
      function (error) {
        console.log("An error happened");
      }
    );

    // var boundingBox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
    // boundingBox.setFromObject(this.model);
    // console.log(boundingBox);
    // this.height = boundingBox.getSize().y;
    // this.width = boundingBox.getSize().x;

    // sine wave animation
    this.update = function (time) {
      if (this.model != undefined) {
        const posy = Math.sin(time) + 3.5;
        this.model.position.y = posy;
        // const boundingBox = new THREE.Box3().setFromObject(this.model);
        // console.log(boundingBox);
      }
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
        camera.position.y = 30;
      }
      //s on keyboard, backwards
      if (keyMap[83] && this.model.position.z < halfPlane) {
        this.model.position.z += 1;
        this.model.rotation.y = 0;
        camera.lookAt(this.model.position);
        camera.position.z = this.model.position.z + 20;
        camera.position.x = this.model.position.x + 20;
        camera.position.y = 30;
      }
      //a on keyboard, left
      if (keyMap[65] && this.model.position.x > -halfPlane) {
        this.model.position.x -= 1;
        this.model.rotation.y = -Math.PI / 2;
        camera.lookAt(this.model.position);
        camera.position.x = this.model.position.x + 20;
        camera.position.z = this.model.position.z + 20;
        camera.position.y = 30;
      }
      //d on keyboard, right
      if (keyMap[68] && this.model.position.x < halfPlane) {
        this.model.position.x += 1;
        this.model.rotation.y = Math.PI / 2;
        camera.lookAt(this.model.position);
        camera.position.x = this.model.position.x + 20;
        camera.position.z = this.model.position.z + 20;
        camera.position.y = 30;
      }
    };
  }
}
//eventualno dodati ponasanja ako su stisnute dvije tipke istovremeno (al to je puno repetitivnih if-ova), a i ono, ne dodaje nes previse funkcionalnosti
//dodati ponasanje da ne moze izaci van granica scene, something like: V, but test it
//  if (keyMap[68] && this.model.position.x + this.width / 2 < camera.right) {
//    this.model.position.x += 5;
//  }
