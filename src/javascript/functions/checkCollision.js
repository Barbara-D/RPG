import * as THREE from "three";

//mogu ih nazvati enemies.enemy1 enemy2 itd
//check hw to handle colision after removing enemy
export function CheckCollision(character, enemies, battle, scene) {
  if (character.model && enemies.enemy) {
    let characterBB = new THREE.Box3().setFromObject(character.model);
    let enemyBB = new THREE.Box3().setFromObject(enemies.enemy);
    if (characterBB.intersectsBox(enemyBB)) {
      battle.classList.remove("inactive");
      battle.classList.add("active");
      scene.remove(enemies.enemy);
      enemies.enemy.userData.consumed = true;
      enemies.enemy = null;
      battle.onclick = function (e) {
        console.log("clicked");
        e.target.classList.add("inactive");
        e.target.classList.remove("active");
        return false;
      };
      return true;
    } else {
      // battle.classList.add("inactive");
      // battle.classList.remove("active");
      return false;
    }
  } else return false;
  //   return [character, enemies];
}
