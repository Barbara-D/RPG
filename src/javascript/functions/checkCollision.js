import * as THREE from "three";
import { Fight } from "./battleLogic.js";

//znaci collision ova funkcija provjerava za sve enemies
//a kad je battle onda je s jednim specificnim enemy
export function CheckCollision(character, enemies, battle, scene) {
  if (character.model) {
    let characterBB = new THREE.Box3().setFromObject(character.model);

    if (
      !("consumed" in enemies.enemyc.userData) ||
      !("consumed" in enemies.enemym.userData) ||
      !("consumed" in enemies.enemyy.userData)
    ) {
      let enemycBB = new THREE.Box3().setFromObject(enemies.enemyc);
      let enemymBB = new THREE.Box3().setFromObject(enemies.enemym);
      let enemyyBB = new THREE.Box3().setFromObject(enemies.enemyy);

      //cyan enemy interaction
      if (characterBB.intersectsBox(enemycBB)) {
        Fight(battle, character, enemies.enemyc, "C", scene);
        return true;
      }
      //magenta enemy interaction
      else if (characterBB.intersectsBox(enemymBB)) {
        Fight(battle, character, enemies.enemym, "M", scene);
        return true;
      }
      //yellow enemy interaction
      else if (characterBB.intersectsBox(enemyyBB)) {
        Fight(battle, character, enemies.enemyy, "Y", scene);
        return true;
      } else return false;
    }
  }
  return false;
}

//this shit wrong sve je isti if
