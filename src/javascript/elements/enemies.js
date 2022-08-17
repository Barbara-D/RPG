import * as THREE from "three";

export class Enemies {
  constructor(scene) {
    this.enemyc, this.enemym, this.enemyy;

    const geometryc = new THREE.TetrahedronGeometry(3, 3);
    const geometrym = new THREE.BoxGeometry(3, 3, 3);
    const geometryy = new THREE.BoxGeometry(4, 4, 4);

    const materialc = new THREE.MeshPhongMaterial({
      color: 0x84e5f9,
      shininess: 0,
      specular: 0xffffff,
      flatShading: true,
    });
    const materialm = new THREE.MeshPhongMaterial({ color: 0xf984e5 });
    const materialy = new THREE.MeshPhongMaterial({ color: 0xe5f984 });

    this.enemyc = new THREE.Mesh(geometryc, materialc);
    this.enemym = new THREE.Mesh(geometrym, materialm);
    this.enemyy = new THREE.Mesh(geometryy, materialy);

    this.enemyc.position.set(20, 5, -20);
    this.enemym.position.set(-90, 7, 80);
    this.enemyy.position.set(50, 9, -50);

    this.enemyc.castShadow = true;
    this.enemym.castShadow = true;
    this.enemyy.castShadow = true;

    scene.add(this.enemyc);
    scene.add(this.enemym);
    scene.add(this.enemyy);

    this.update = function (time) {
      const scale = Math.sin(time) + 1.5;

      const posx = Math.sin(time) * 20;
      const posz = Math.cos(time) * 20;
      this.enemyc.position.x = posx;
      this.enemyc.position.z = posz;

      this.enemym.scale.set(scale, scale, scale);
      this.enemym.position.z = posx * 2;

      this.enemyy.scale.set(scale, scale, scale);
      this.enemyy.rotation.x += 0.001;
      this.enemyy.rotation.y -= 0.001;
    };
  }
}
