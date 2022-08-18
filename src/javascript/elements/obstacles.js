//grey rocks (the round shapes like char)
//small black pyramids
import * as THREE from "three";
import { randomFromInterval } from "../functions/randomInterval.js";
import { randomNegative } from "../functions/randomNegative.js";

export class Obstacles {
  constructor(scene) {
    const edge = 120;

    const geometry = new THREE.ConeGeometry(0.5, 1, 3);
    // const geometry = new THREE.TetrahedronGeometry(1, 2);
    const material = new THREE.MeshMatcapMaterial({
      color: 0x333333,
      //   shininess: 0,
      //   specular: 0xffffff,
      //   flatShading: true,
    });

    for (let i = 0; i < 40; i++) {
      var rock = new THREE.Mesh(geometry, material);

      rock.position.z = randomNegative(randomFromInterval(0, edge));
      rock.position.x = randomNegative(randomFromInterval(0, edge));
      //   rock.rotation.x = randomFromInterval(0, 1);
      var size = randomFromInterval(2, 15);

      rock.scale.set(size, size, size);
      rock.position.y = size / 2;
      rock.castShadow = true;

      scene.add(rock);
    }
    this.update = function (time) {};
  }
}
