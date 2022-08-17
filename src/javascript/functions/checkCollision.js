import * as THREE from "three";
import { Fight } from "./battleLogic.js";

//znaci collision ova funkcija provjerava za sve enemies
//a kad je battle onda je s jednim specificnim enemy
//mogu ih nazvati enemies.enemy1 enemy2 itd
//check hw to handle colision after removing enemy
export function CheckCollision(character, enemies, battle, scene) {
  if (character.model) {
    let characterBB = new THREE.Box3().setFromObject(character.model);

    //cyan enemy interaction
    if (!("consumed" in enemies.enemyc.userData)) {
      let color = "C";
      let enemycBB = new THREE.Box3().setFromObject(enemies.enemyc);

      if (characterBB.intersectsBox(enemycBB)) {
        Fight(battle, character, enemies.enemyc, color, scene);
        return false;
      }
      return true;

      //magenta enemy interaction
    } else if (!("consumed" in enemies.enemym.userData)) {
      let color = "M";
      let enemymBB = new THREE.Box3().setFromObject(enemies.enemym);

      if (characterBB.intersectsBox(enemymBB)) {
        Fight(battle, character, enemies.enemym, color, scene);
        return false;
      }
      return true;

      //yellow enemy interaction
    } else if (!("consumed" in enemies.enemyy.userData)) {
      let color = "Y";
      let enemymBB = new THREE.Box3().setFromObject(enemies.enemyy);

      if (characterBB.intersectsBox(enemymBB)) {
        Fight(battle, character, enemies.enemyy, color, scene);
        return false;
      }
      return true;
    }
  }
  return false;
}

//this shit wrong sve je isti if
