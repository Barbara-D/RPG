export function HealthPickup(scene, health) {
  let hp_bar = document.getElementById("hp_green");
  let hp_value = document.getElementById("hp_value");

  hp_bar.value += 50;
  if (hp_bar.value > 100) {
    hp_bar.value = 100;
  }
  hp_value.innerText = hp_bar.value;

  scene.remove(health);
  health.userData.consumed = true;
  health = null;
}
