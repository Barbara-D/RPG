import * as THREE from "three";

class Camera extends THREE.PerspectiveCamera {
  constructor(fov, aspect, near, far) {
    super(fov, aspect, near, far);
    this.position.set(0, 8, 20);
    this.lookAt(new THREE.Vector3(0, -100, -1000));
  }
}

export { Camera };
