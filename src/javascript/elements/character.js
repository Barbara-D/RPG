import * as THREE from "three";

export class Character {
  constructor(scene) {
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshPhongMaterial({ color: 0xff0000 });
    const char = new THREE.Mesh(geometry, material);

    char.position.set(0, 1, 30);
    char.castShadow = true;

    scene.add(char);

    this.update = function (time) {};
    this.handleInput = function (keyMap, camera) {
      //w on keyboard, forwards
      if (keyMap[87]) {
        char.position.z -= 1;
      }
      //s on keyboard, backwards
      if (keyMap[83]) {
        char.position.z += 1;
      }
      //a on keyboard, backwards
      if (keyMap[65]) {
        char.position.x -= 1;
      }
      //d on keyboard, backwards
      if (keyMap[68]) {
        char.position.x += 1;
      }
    };
  }
}
