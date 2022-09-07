import * as THREE from "three";
import { Group } from "three";

export class Health {
  constructor(scene) {
    this.plus;

    const geometry1 = new THREE.BoxGeometry(1, 3, 1);
    const geometry2 = new THREE.BoxGeometry(3, 1, 1);
    const material = new THREE.MeshPhongMaterial({ color: 0x90ee90 });
    const cube1 = new THREE.Mesh(geometry1, material);
    const cube2 = new THREE.Mesh(geometry2, material);

    this.plus = new THREE.Group();
    this.plus.add(cube1);
    this.plus.add(cube2);
    this.plus.castShadow = true;
    this.plus.position.set(50, 4, 50);

    scene.add(this.plus);

    this.update = function (time) {
      // const posy = Math.sin(time) + 3;
      // this.plus.position.y = posy;
      this.plus.rotation.y += 0.002;
    };
  }
}
