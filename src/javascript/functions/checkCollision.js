import * as THREE from "three";
import { Fight } from "./battleLogic.js";
import { HealthPickup } from "./healthPickup.js";
export function CheckCollision(character, enemies, health, battle, scene) {
  if (character.model) {
    let characterBB = new THREE.Box3().setFromObject(character.model);
    // const helper = new THREE.Box3Helper(characterBB, 0xffffff);
    // scene.add(helper);

    let enemycBB = new THREE.Box3().setFromObject(enemies.enemyc);
    let enemymBB = new THREE.Box3().setFromObject(enemies.enemym);
    let enemyyBB = new THREE.Box3().setFromObject(enemies.enemyy);
    let healthBB = new THREE.Box3().setFromObject(health.plus);

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
    //health pickup interaction
    else if (
      characterBB.intersectsBox(healthBB) &&
      !("consumed" in health.plus.userData)
    ) {
      HealthPickup(scene, health.plus);
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
