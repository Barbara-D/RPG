import * as THREE from "three";

export class Plane {
  constructor(scene) {
    const size = 360;
    var texture;

    texture = new THREE.TextureLoader().load("resources/images/tex.jpg");

    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;

    texture.repeat.set(14, 14);

    const geometry = new THREE.PlaneGeometry(size, size, 1, 1);
    const material = new THREE.MeshLambertMaterial({ map: texture });

    const plane = new THREE.Mesh(geometry, material);
    plane.material.side = THREE.DoubleSide;

    plane.position.set(0, 0, 0);
    //to make it face up
    plane.rotation.x = -Math.PI / 2;
    plane.receiveShadow = true;
    scene.add(plane);

    this.update = function (time) {};
  }
}
