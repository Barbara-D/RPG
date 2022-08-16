import * as THREE from "three";
import { Fight } from "./battleLogic.js";

//znaci collision ova funkcija provjerava za sve enemies
//a kad je battle onda je s jednim specificnim enemy
//mogu ih nazvati enemies.enemy1 enemy2 itd
//check hw to handle colision after removing enemy
export function CheckCollision(character, enemies, battle, scene) {
  if (character.model && !("consumed" in enemies.enemy.userData)) {
    let color = "cyan";
    let characterBB = new THREE.Box3().setFromObject(character.model);
    let enemyBB = new THREE.Box3().setFromObject(enemies.enemy);
    if (characterBB.intersectsBox(enemyBB)) {
      Fight(battle, character, enemies.enemy, color, scene);

      return false;
    }
    return true;
  } else {
    // battle.classList.add("inactive");
    // battle.classList.remove("active");
    return false;
  }
  //   return [character, enemies];
}
