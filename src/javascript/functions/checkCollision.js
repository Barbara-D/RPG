import * as THREE from "three";
import { Fight } from "./battleLogic.js";

export function CheckCollision(character, enemies, battle, scene) {
  if (character.model) {
    let characterBB = new THREE.Box3().setFromObject(character.model);

    let enemycBB = new THREE.Box3().setFromObject(enemies.enemyc);
    let enemymBB = new THREE.Box3().setFromObject(enemies.enemym);
    let enemyyBB = new THREE.Box3().setFromObject(enemies.enemyy);

    //cyan enemy interaction
    if (
      characterBB.intersectsBox(enemycBB) &&
      !("consumed" in enemies.enemyc.userData)
    ) {
      Fight(battle, character, enemies.enemyc, "C", scene);
    }
    //magenta enemy interaction
    else if (
      characterBB.intersectsBox(enemymBB) &&
      !("consumed" in enemies.enemym.userData)
    ) {
      Fight(battle, character, enemies.enemym, "M", scene);
    }
    //yellow enemy interaction
    else if (
      characterBB.intersectsBox(enemyyBB) &&
      !("consumed" in enemies.enemyy.userData)
    ) {
      Fight(battle, character, enemies.enemyy, "Y", scene);
    }

    //win condition
    else if (
      "consumed" in enemies.enemyc.userData &&
      "consumed" in enemies.enemym.userData &&
      "consumed" in enemies.enemyy.userData
    ) {
      return true;
    } else return false;
  }
}
