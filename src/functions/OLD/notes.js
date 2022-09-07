let testDiv = document.createElement("div");
testDiv.innerHTML = "HTML connection works!";
document.body.appendChild(testDiv);

export function f1() {
  //just an example
  //to use :
  //  import { f1 } from "./file1.js";
  //  f1();
}

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

var modelLoader = new GLTFLoader();
modelLoader.load(
  "../../resources/models/robot.gltf",
  function (gltf) {
    this.model = gltf.scene;
    this.model.traverse(function (child) {
      if (child.isMesh) {
        child.castShadow = true;
      }
    });

    var scale = 0.025;
    this.model.scale.set(scale, scale, scale);

    this.model.position.set(0, 4, 0);
    scene.add(this.model);
  }.bind(this)
);

this.update = function () {
  const elapsedTime = clock.getElapsedTime();

  for (let i = 0; i < sceneSubjects.length; i++)
    sceneSubjects[i].update(elapsedTime);
  renderer.render(scene, camera);
};

update;

this.update = function () {
  const elapsedTime = clock.getElapsedTime();
  for (let i = 0; i < sceneSubjects.length; i++)
    sceneSubjects[i].update(elapsedTime);
  renderer.render(scene, camera);
};

this.handleInput = function (keyMap, camera) {
  //w on keyboard, forwards
  if (keyMap[87] && this.model.position.z > -halfPlane) {
    this.model.position.z -= 1;
    this.model.rotation.y = Math.PI;
    camera.lookAt(this.model.position);
    camera.position.z = this.model.position.z + 20;
    camera.position.x = this.model.position.x + 20;
    camera.position.y = 30;
  }
};

this.update = function (time) {
  if (this.model != undefined) {
    const posy = Math.sin(time) + 4;
    this.model.position.y = posy;
  }
};
for (let i = 0; i < 120; i++) {
  var cone = new THREE.Mesh(geometry, material);
  cone.position.x = randomNegative(i * 1.5);
  let posz = randomFromInterval(min, max);
  cone.position.z = randomNegative(posz);

  if (posz > min + (max - min) / 2) {
    var size = randomFromInterval(40, 60);
  } else var size = randomFromInterval(10, 45);

  cone.scale.set(size, size, size);
  cone.position.y = size / 2.0;

  scene.add(cone);
}

export function CheckCollision(character, enemies, health, battle, scene) {
  if (character.model) {
    let characterBB = new THREE.Box3().setFromObject(character.model);
    let enemycBB = new THREE.Box3().setFromObject(enemies.enemyc);
    let healthBB = new THREE.Box3().setFromObject(health.plus);

    //cyan enemy interaction
    if (
      characterBB.intersectsBox(enemycBB) &&
      !("consumed" in enemies.enemyc.userData)
    ) {
      Fight(battle, character, enemies.enemyc, "C", scene);
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

attack_c.onclick = function (e) {
  if (enemyColor === "C") {
    descriptor_ch.innerText = "You used the C attack. There is no effect!";
  } else if (enemyColor === "M") {
    enemy_hp_bar.value -= 30;
    enemy_hp_value.innerText = enemy_hp_bar.value;
    descriptor_ch.innerText = "You used the C attack. It's super effective!";
  } else if (enemyColor === "Y") {
    enemy_hp_bar.value -= 10;
    enemy_hp_value.innerText = enemy_hp_bar.value;
    descriptor_ch.innerText =
      "You used the C attack. It's weak against this enemy!";
  }
  if (enemy_hp_bar.value > 0) {
    enemyAttack(10, 20);
    //if the enemy lost all HP
  } else {
    removeEnemy(scene, enemy);
    enemy_hp_bar.value = 100;
    enemy_hp_value.innerText = enemy_hp_bar.value;
    resetUI();
  }
};

modelLoader.load(
  "robot.gltf",
  function (gltf) {
    this.model = gltf.scene;
    this.model.traverse(function (child) {
      if (child.isMesh) {
        child.castShadow = true;
      }
    });

    var scale = 0.025;
    this.model.scale.set(scale, scale, scale);
    this.model.position.set(0, 4, 0);
    scene.add(this.model);
  }.bind(this)
);
