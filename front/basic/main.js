import * as THREE from "three";

const scene = new THREE.Scene();
scene.background = new THREE.Color("#000000");

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const geometry = new THREE.ConeGeometry();
const material = new THREE.MeshLambertMaterial({ color: "#468585", emissive: "#468585" });

const cube = new THREE.Mesh(geometry, material);
scene.add(cube,);

const light = new THREE.DirectionalLight(0x9CDBA5, 10);
light.position.set(1, 1, 1);
scene.add(light);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Función de animación
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.05;
  cube.rotation.y += 0.05;
  renderer.render(scene, camera);
}

// Ajustar el tamaño al cambiar la ventana
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

animate();
