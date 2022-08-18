import * as THREE from "three";

export function CheckObstacle(character, obstacles) {
  if (character) {
    let characterBB = new THREE.Box3().setFromObject(character);
    let number = obstacles.array.length;
    for (let i = 0; i < number; i++) {
      let obstacleBB = new THREE.Box3().setFromObject(obstacles.array[i]);
      if (characterBB.intersectsBox(obstacleBB)) {
        console.log("intersect");

        return true;
      }
      return false;
    }
  }
}
