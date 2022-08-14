import * as THREE from "three";

export class TestBox {
  constructor(scene) {
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshPhongMaterial({ color: 0x00ffff });
    const cube = new THREE.Mesh(geometry, material);

    cube.position.set(-20, 4, -20);
    cube.castShadow = true;

    scene.add(cube);

    this.update = function (time) {
      //idle animation, ignore for now because of colision
      // const scale = Math.sin(time) + 1.5;
      // cube.scale.set(scale, scale, scale);
      // cube.rotation.x += 0.001;
      // cube.rotation.y += 0.001;
    };
  }
}
