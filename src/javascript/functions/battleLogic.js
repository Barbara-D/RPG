import { randomFromInterval } from "./randomInterval.js";

export function Fight(battle, character, enemy, enemyColor, scene) {
  //testing
  let enemy_div = document.getElementById("enemy_col");
  let hp_bar = document.getElementById("hp_green");
  let hp_value = document.getElementById("hp_value");
  let enemy_hp_bar = document.getElementById("enemy_hp_green");
  let enemy_hp_value = document.getElementById("enemy_hp_value");
  let descriptor_ch = document.getElementById("descriptor_ch");
  let descriptor_en = document.getElementById("descriptor_en");

  let attack_d = document.getElementById("a_d");
  let attack_c = document.getElementById("a_c");
  let attack_m = document.getElementById("a_m");
  let attack_y = document.getElementById("a_y");
  let attack_k = document.getElementById("a_k");

  //setting the color of enemy in html element depending on which one was collided with
  if (enemyColor === "C") {
    enemy_div.style.backgroundColor = "#91abad";
    descriptor_en.style.color = "#91abad";
  }
  if (enemyColor === "M") {
    enemy_div.style.backgroundColor = "#a791ad";
    descriptor_en.style.color = "#a791ad";
  }
  if (enemyColor === "Y") {
    enemy_div.style.backgroundColor = "#adaa91";
    descriptor_en.style.color = "#adaa91";
  }

  //make battle menu visible on screen
  battle.classList.remove("inactive");
  battle.classList.add("active");

  //K attack functionality
  attack_k.onclick = function (e) {
    enemy_hp_bar.value -= 20;
    enemy_hp_value.innerText = enemy_hp_bar.value;
    descriptor_ch.innerText = "You used the K attack. Enemy takes 20 damage!";

    if (enemy_hp_bar.value > 0) {
      enemyAttack(10, 20);

      //if the enemy lost all HP
    } else {
      battle.classList.add("inactive");
      battle.classList.remove("active");

      scene.remove(enemy);
      enemy.userData.consumed = true;
      enemy = null;

      //reset the hp bar and text
      enemy_hp_bar.value = 100;
      enemy_hp_value.innerText = enemy_hp_bar.value;
      descriptor_ch.innerText = "You have started the battle.";
      descriptor_en.innerText = "The enemy is waiting for your move.";
    }
  };

  //defense functionality
  attack_d.onclick = function (e) {
    descriptor_ch.innerText =
      "You took a defensive stance. Enemy takes 0 damage!";
    if (enemy_hp_bar.value > 0) {
      enemyAttack(1, 10);
    }
  };
  function enemyAttack(min, max) {
    damage = randomFromInterval(min, max);
    descriptor_en.innerText = "Enemy attacks. You lose " + damage + " HP!";
    hp_bar.value -= damage;
    hp_value.innerText = hp_bar.value;
    //check here if game over later
  }
}
