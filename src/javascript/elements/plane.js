import * as THREE from "three";

export class Plane {
  constructor(scene) {
    const geometry = new THREE.PlaneGeometry(300, 300, 1, 1);
    const material = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const plane = new THREE.Mesh(geometry, material);

    plane.position.set(0, 0, 0);
    //to make it face up
    plane.rotation.x = -Math.PI / 2;
    plane.receiveShadow = true;
    scene.add(plane);

    this.update = function (time) {};
  }
}
