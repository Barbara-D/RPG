import * as THREE from "three";

export class Light {
  constructor(scene) {
    let halfPlane = 150;

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
    directionalLight.position.set(0, 40, 0);
    directionalLight.target.position.set(0, 0, 0);

    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.top = halfPlane;
    directionalLight.shadow.camera.bottom = -halfPlane;
    directionalLight.shadow.camera.right = halfPlane;
    directionalLight.shadow.camera.left = -halfPlane;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 500;

    scene.add(directionalLight);

    scene.add(new THREE.CameraHelper(directionalLight.shadow.camera));

    // const pointLight = new THREE.PointLight(0xffffff, 0.4);
    // scene.add(pointLight);

    // const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.5);
    // hemiLight.color.setHSL(0.6, 1, 0.6);
    // hemiLight.groundColor.setHSL(0.095, 1, 0.75);
    // hemiLight.position.set(0, 50, 0);
    // scene.add(hemiLight);

    //can just leave function empty if we don't want any changes overtime
    this.update = function (time) {
      // pointLight.intensity = (Math.sin(time) + 1.5) / 1.5;
      // pointLight.color.setHSL(Math.sin(time), 0.5, 0.5);
    };
  }
}
