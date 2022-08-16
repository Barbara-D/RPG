export function Fight(battle, character, enemy, enemyColor, scene) {
  battle.classList.remove("inactive");
  battle.classList.add("active");

  battle.onclick = function (e) {
    console.log("clicked");
    battle.classList.add("inactive");
    battle.classList.remove("active");
    scene.remove(enemy);
    enemy.userData.consumed = true;
    enemy = null;
    //potentially some confirmation text, XP something
  };
}
