import * as THREE from "three";
import { randomFromInterval } from "../functions/randomInterval.js";
import { randomNegative } from "../functions/randomNegative.js";

export class Pyramids {
  constructor(scene) {
    const min = 120;
    const max = 180;
    const geometry = new THREE.ConeGeometry(0.5, 1, 3);
    const material = new THREE.MeshMatcapMaterial({ color: 0x333333 });

    for (let i = 0; i < 120; i++) {
      var cone = new THREE.Mesh(geometry, material);
      cone.position.z = randomNegative(i * 1.5);
      let posx = randomFromInterval(min, max);
      cone.position.x = randomNegative(posx);
      // prettier-ignore
      if (posx > min+((max - min) / 2)) {
        var size = randomFromInterval(40, 60);
      } else var size = randomFromInterval(10, 45);

      cone.scale.set(size, size, size);
      cone.position.y = size / 2.0;
      // cone.castShadow = true;

      scene.add(cone);
    }
    for (let i = 0; i < 120; i++) {
      var cone = new THREE.Mesh(geometry, material);
      cone.position.x = randomNegative(i * 1.5);
      let posz = randomFromInterval(min, max);
      cone.position.z = randomNegative(posz);
      if (posz > min + (max - min) / 2) {
        var size = randomFromInterval(40, 60);
      } else var size = randomFromInterval(10, 45);

      cone.scale.set(size, size, size);
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
