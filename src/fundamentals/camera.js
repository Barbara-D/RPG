import * as THREE from "three";

class Camera extends THREE.PerspectiveCamera {
  constructor(fov, aspect, near, far) {
    super(fov, aspect, near, far);
    // this.position.set(0, 20, 0);
  }
}

export { Camera };
