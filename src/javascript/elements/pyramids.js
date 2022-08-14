import * as THREE from "three";
import { randomFromInterval } from "../../functions/randomInterval.js";
import { randomNegative } from "../../functions/randomNegative.js";

export class Pyramids {
  constructor(scene) {
    const min = 120;
    const max = 150;
    const geometry = new THREE.ConeGeometry(0.5, 1, 3);
    const material = new THREE.MeshMatcapMaterial({ color: 0x333333 });

    for (let i = 0; i < 60; i++) {
      var cone = new THREE.Mesh(geometry, material);
      var size = randomFromInterval(10, 40);
      cone.scale.set(size, size, size);
      cone.position.x = randomNegative(randomFromInterval(min, max));
      cone.position.z = randomFromInterval(-max, max);
      cone.position.y = size / 2.0;
      // cone.castShadow = true;

      scene.add(cone);
    }
    for (let i = 0; i < 60; i++) {
      var cone = new THREE.Mesh(geometry, material);
      var size = randomFromInterval(10, 40);
      cone.scale.set(size, size, size);
      cone.position.x = randomFromInterval(-max, max);
      cone.position.z = randomNegative(randomFromInterval(min, max));
      cone.position.y = size / 2.0;

      scene.add(cone);
    }
    // cone.position.set(20, 10, 20);
    // cone.castShadow = true;
    // cone.receiveShadow = true;

    this.update = function (time) {};
  }
}

//x je random broj između 150 i 120, s tim da može biti + ili -
//isto za z
