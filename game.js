
var scene = new THREE.Scene();
var flat = {flatShading: true};

var aspect_ratio = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(75, aspect_ratio, 1, 10000);
camera.position.z = 500;
scene.add(camera)

var light = new THREE.AmbientLight('white', 0.8);
scene.add(light);

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
document.body.appendChild(renderer.domElement);

var shape = new THREE.TorusGeometry(200, 10, 8, 50);
var cover = new THREE.MeshNormalMaterial(flat);
var ball = new THREE.Mesh( shape, cover );
scene.add(ball);
ball.rotation.set(0.5, 0.5, 0.5)

var clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    var t = clock.getElapsedTime();

    ball.rotation.set(t, 2*t, 0);

    renderer.render(scene, camera)
}

animate();