import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

export class TestBox {
  constructor(scene) {
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshPhongMaterial({ color: 0x00ffff });
    const cube = new THREE.Mesh(geometry, material);

    cube.position.set(-20, 2, -20);
    cube.castShadow = true;

    scene.add(cube);

    //omg round boi for the MC
    // const geom2 = new RoundedBoxGeometry(3, 3, 3, 4, 0.5);
    // const cube2 = new THREE.Mesh(geom2, material);
    // cube2.position.set(10, 1.5, 10);
    // scene.add(cube2);

    this.update = function (time) {
      const scale = Math.sin(time) + 2;
      cube.scale.set(scale, scale, scale);
      cube.rotation.x += 0.001;
      cube.rotation.y += 0.001;
    };
  }
}
//   const radius = 2;
//   const mesh = new THREE.Mesh(
//     new THREE.IcosahedronBufferGeometry(radius, 2),
//     new THREE.MeshStandardMaterial({ flatShading: true })
//   );

//   mesh.position.set(0, 0, -20);

//   scene.add(mesh);
