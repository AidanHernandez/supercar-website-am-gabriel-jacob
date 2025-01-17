import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

var loader = new GLTFLoader().setPath('../nemesis-3d-model/all/');

var cartype = localStorage.getItem("cartype")

var car_color = localStorage.getItem("carcolor");

var car_interior = localStorage.getItem("carinterior")


if(cartype == "nemesis"){


    document.getElementById("change-exterior").onclick = function () {
        location.href = "../exterior-nemesis.html";
    }

    document.getElementById("change-interior").onclick = function () {
        location.href = "../interior-nemesis.html";
    }
  }
  else{
      document.getElementById("change-exterior").onclick = function () {
        location.href = "../exterior-blackwidow.html";
    }

    document.getElementById("change-interior").onclick = function () {
        location.href = "../interior-blackwidow.html";
    }
  }

    const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.outputColorSpace = THREE.SRGBColorSpace;


//adjust height and width

if(window.matchMedia("(max-width:1024px)").matches)
{
  renderer.setSize(window.innerWidth, window.innerHeight);
}
else{
  renderer.setSize(window.innerWidth * 0.655, window.innerHeight * 0.9);
}


renderer.setClearColor(0xd6d4d4);




renderer.setPixelRatio(window.devicePixelRatio);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

renderer.toneMapping = THREE.NeutralToneMapping;




document.body.appendChild(renderer.domElement);




const scene = new THREE.Scene();
if(window.matchMedia("(max-width:426px)").matches){
  var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
}
else{
  var camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 1000);
}

// camera.zoom = 8;
camera.position.set(-7, 3, -11);



const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 5;
controls.maxDistance = 20;
controls.minPolarAngle = 0.5;
controls.maxPolarAngle = 1.5;
controls.autoRotate = true;
controls.target = new THREE.Vector3(0, 1, 0);
controls.update();




const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
groundGeometry.rotateX(-Math.PI / 2);
const groundMaterial = new THREE.MeshStandardMaterial({
  color: 0x999999,
  side: THREE.DoubleSide
});
const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
groundMesh.castShadow = false;
groundMesh.receiveShadow = true;
scene.add(groundMesh);


const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(0, 10, 0);
light.castShadow = true;
scene.add(light);

const light2 = new THREE.DirectionalLight(0xffffff, 3);
light2.position.set(6, 3, 0);
light2.castShadow = false;
scene.add(light2);

const light3 = new THREE.DirectionalLight(0xffffff, 3);
light3.position.set(-6, 3, 0);
light3.castShadow = false;
scene.add(light3);


const ambientLight = new THREE.AmbientLight(0xffffff, 1); // color (white), intensity (0.5)
scene.add(ambientLight);



loader.load('scene.gltf', (gltf) => {
  console.log('loading model');
  const mesh = gltf.scene;
  const model = gltf.scene

  mesh.castShadow = true;
  mesh.receiveShadow = true;
  
  mesh.traverse((child) => {
    if (child.material) {
      child.castShadow = true;
      child.receiveShadow = true;
    
    }
  });

  if(car_color == "green"){
    
    loader = new GLTFLoader().setPath('../nemesis-3d-model/green/')
    refresh_model()
    
  }
  else if(car_color == "blue"){
    loader = new GLTFLoader().setPath('../nemesis-3d-model/blue/')
    refresh_model()
  }
  else if(car_color == "red"){
    loader = new GLTFLoader().setPath('../nemesis-3d-model/red/')
    refresh_model()
  }
  else if(car_color == "black"){
    loader = new GLTFLoader().setPath('../nemesis-3d-model/black/')
    refresh_model()
  }
  else{
    model.traverse((node) => {
      if (node.isMesh && node.name === 'MyCubeMesh'){
          
          console.log(car_color)

          let selectedColor = new THREE.Color().setHex("0x" + car_color);

          node.material.color = new THREE.Color(selectedColor); 
        

      }
      else{
        console.log('no')
      }
      });
  }

  mesh.position.set(0, 0, 0);
  scene.add(mesh);

  document.getElementById('progress-container').style.display = 'none';
}, (xhr) => {
  console.log(`loading ${xhr.loaded / xhr.total * 100}%`);
}, (error) => {
  console.error(error);
});





window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

function refresh_model(){
  loader.load('scene.gltf', (gltf) => {
    console.log('loading model');
    const mesh = gltf.scene;
    const model = gltf.scene;
    
  
    mesh.position.set(0, 0, 0);

    




    scene.add(mesh);
  
    document.getElementById('progress-container').style.display = 'none';
  }, (xhr) => {
    console.log(`loading ${xhr.loaded / xhr.total * 100}%`);
  }, (error) => {
    console.error(error);
  });
  
}





var paint = localStorage.getItem("paint");


document.getElementById("exterior-paint").style.color=paint;
console.log(paint)
document.getElementById("exterior-paint").textContent="Paint color: " + paint;




document.getElementById("interior-paint").style.color= car_interior


document.getElementById("interior-paint").textContent="Paint color: " + car_interior




animate();


