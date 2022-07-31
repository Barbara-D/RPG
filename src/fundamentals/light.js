import * as THREE from "three";

export function Light(scene) {
  // const pointLight = new THREE.PointLight("#2222ff", 0.6);
  // scene.add(pointLight);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambientLight);

  directionalLight = new THREE.DirectionalLight(0xffffff, 0.4);
  directionalLight.position.set(50, 50, 50);
  scene.add(directionalLight);

  //can just leave empty if i don't want any changes overtime
  this.update = function (time) {
    // pointLight.intensity = (Math.sin(time) + 1.5) / 1.5;
    // pointLight.color.setHSL(Math.sin(time), 0.5, 0.5);
  };
}

//OLD LIGHT CLASS
// export default class Light {
//   constructor() {
//     this.container = new THREE.Object3D();
//     // this.container.matrixAutoUpdate = false;

//     this.setInstance();
//   }

//   setInstance() {
//     this.ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
//     this.directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
//     this.directionalLight.position.set(50, 50, 50);

//     this.container.add(this.ambientLight);
//     this.container.add(this.directionalLight);
//   }
// }
