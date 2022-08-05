import * as THREE from "three";

export class Light {
  constructor(scene) {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.4);
    scene.add(pointLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight.position.set(50, 100, 0);
    directionalLight.castShadow = true;

    scene.add(directionalLight);

    //can just leave function empty if we don't want any changes overtime
    this.update = function (time) {
      // pointLight.intensity = (Math.sin(time) + 1.5) / 1.5;
      // pointLight.color.setHSL(Math.sin(time), 0.5, 0.5);
    };
  }
}
