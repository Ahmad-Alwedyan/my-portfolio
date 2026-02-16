// 1. تأثير الكتابة (Typing Effect)
const text = "Blue Team Instructor | SOC Specialist | Top 5% on TryHackMe";
let i = 0;
const speed = 100;

function typeWriter() {
  if (i < text.length) {
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// 2. خلفية 3D بسيطة (Stars Effect)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg'), antialias: true });

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.15, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0x00ff88 });
  const star = new THREE.Mesh(geometry, material);
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

function animate() {
  requestAnimationFrame(animate);
  scene.rotation.x += 0.0005;
  scene.rotation.y += 0.0005;
  renderer.render(scene, camera);
}

// تشغيل الوظائف عند تحميل الصفحة
window.onload = () => {
  typeWriter();
  animate();
};

// تحديث الحجم عند تغيير حجم النافذة
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
