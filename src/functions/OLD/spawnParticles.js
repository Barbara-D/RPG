import * as THREE from "three";
export function spawnParticles(pos, count, scale, scene) {
  for (let i = 0; i < count; i++) {
    console.log("ye");
    const geom = new THREE.TetrahedronGeometry(3, 0);
    const mat = new THREE.MeshPhongMaterial({
      color: 0x009999,
      shininess: 0,
      specular: 0xffffff,
      flatShading: true,
    });
    const mesh = new THREE.Mesh(geom, mat);
    scene.add(mesh);

    mesh.visible = true;
    mesh.position.copy(pos);
    // mesh.material.color = new THREE.Color(color);
    mesh.material.needsUpdate = true;
    mesh.scale.set(scale, scale, scale);
    const targetX = pos.x + (-1 + Math.random() * 2) * 50;
    const targetY = pos.y + (-1 + Math.random() * 2) * 50;
    const targetZ = pos.z + (-1 + Math.random() * 2) * 50;
    const speed = 0.6 + Math.random() * 0.2;
  }
}
