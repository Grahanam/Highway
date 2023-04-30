

const scene=new THREE.Scene()
scene.background=new THREE.Color(0x21272e)

const camera=new THREE.PerspectiveCamera(
  75,window.innerWidth/window.innerHeight,0.1,1000
)

const renderer=new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth,window.innerHeight)

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target.set(27, 0, 0);
controls.listenToKeyEvents(window); // optional

document.body.appendChild(renderer.domElement)

const light=new THREE.DirectionalLight(0xffffff)
light.position.set(0,1,1).normalize()
scene.add(light)

const material1 = new THREE.MeshNormalMaterial();
const material2 = new THREE.MeshPhongMaterial({
  color: 0xba45a3,
  shininess: 150,
});
const material3 = new THREE.MeshToonMaterial({color: 0x1ea8fc});

const lineMaterial = new THREE.LineBasicMaterial({
  color: 0xeaeaea,
  linewidth: 2,
});

//car
let carGeometry = new THREE.BoxGeometry(20, 10, 3);
let carMaterial = new THREE.MeshPhongMaterial({
  color: 0xB74242,
  shininess: 100,
  emissive: 0xFF0000,
  emissiveIntensity: 0.6,
});


let carTopGeometry = new THREE.BoxGeometry(12, 8, 5);
let carTopMaterial = new THREE.MeshPhongMaterial({
  color: 0xB74242,
  shininess: 100,
  emissive: 0x990000,
  emissiveIntensity: 0.7,
});
let wheelGeometry = new THREE.CylinderGeometry(3, 3, 1, 6);
let wheelMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });

//Truck
let truckGeometry = new THREE.BoxGeometry(20, 10, 3);
let truckMaterial = new THREE.MeshPhongMaterial({
  color: 0xB74242,
  shininess: 100,
  emissive: 0xFF0000,
  emissiveIntensity: 0.6,
});

let truckTopGeometry = new THREE.BoxGeometry(12, 8, 5);
let truckTopMaterial = new THREE.MeshPhongMaterial({
  color: 0xB74242,
  shininess: 100,
  emissive: 0x990000,
  emissiveIntensity: 0.7,
});
let truckwheelGeometry = new THREE.CylinderGeometry(3, 3, 1, 6);
let truckwheelMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });

let truck=new THREE.Object3D()


let car=new THREE.Object3D()

let carBody = new THREE.Mesh(carGeometry, carMaterial);
carBody.castShadow = true;
carBody.receiveShadow = true;
car.add(carBody);


let carTop = new THREE.Mesh(carTopGeometry, carTopMaterial);
carTop.position.x -= 2;
carTop.position.z += 3.5;
carTop.castShadow = true;
carTop.receiveShadow = true;
car.add(carTop);


car.wheels = Array(4).fill(null);
  car.wheels = car.wheels.map((wheel, i) => {
    wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
    wheel.position.y = i < 2 ? 6 : -6;
    wheel.position.x = i % 2 ? 6 : -6;
    wheel.position.z = -3;
    car.add(wheel);
    return wheel;
  });
  

car.castShadow = true;
car.receiveShadow = true;
car.position.set(12,-3,-7)
car.scale.set(0.05,0.05,0.05)
car.rotateX(4.7)
car.rotateZ(-4.7)
scene.add(car)  

let truckBody = new THREE.Mesh(truckGeometry, truckMaterial);
truckBody.castShadow = true;
truckBody.receiveShadow = true;
truck.add(truckBody);


let truckTop = new THREE.Mesh(truckTopGeometry, truckTopMaterial);
truckTop.position.x -= 2;
truckTop.position.z += 3.5;
truckTop.castShadow = true;
truckTop.receiveShadow = true;
truck.add(truckTop);


truck.wheels = Array(4).fill(null);
  truck.wheels = truck.wheels.map((wheel, i) => {
    wheel = new THREE.Mesh(truckwheelGeometry, truckwheelMaterial);
    wheel.position.y = i < 2 ? 6 : -6;
    wheel.position.x = i % 2 ? 6 : -6;
    wheel.position.z = -3;
    truck.add(wheel);
    return wheel;
  });

// let car=new THREE.Object3D()
let car1=car.clone()
car1.position.set(-10,-3,-7)
car1.scale.set(0.05,0.05,0.05)
car1.rotateZ(4.7)
scene.add(car1)

console.log(car1.position.x)

truck.add(scene)

// const floorGeometry=new THREE.PlaneGeometry(60,8);
// const floor=new THREE.Mesh(floorGeometry,material1)
// scene.add(floor)

// floor.position.set(27,-2.9,-2);
// floor.rotation.x-=Math.PI/2;

const primitives=[];


//box 1
const boxGeometry1 = new THREE.BoxGeometry();
const box1 = new THREE.Mesh(boxGeometry1, material1);
box1.position.set(0,-2, 0);

//box 2
const boxGeometry2 = new THREE.BoxGeometry();
const box2 = new THREE.Mesh(boxGeometry1, material1);
box1.position.set(0,-2, -2);


//box 3
const boxGeometry3 = new THREE.BoxGeometry();
const box3 = new THREE.Mesh(boxGeometry1, material1);
box1.position.set(0,-2, -4);

const boxes=[box1,box2,box3]

primitives.push(boxes)

function createCross(center, material) {
  let x, y, z;
  [x, y, z] = center;
  let vectorPoints = [];
  vectorPoints.push(new THREE.Vector3(x, y, z));
  vectorPoints.push(new THREE.Vector3(x + 0.5, y, z));
  vectorPoints.push(new THREE.Vector3(x + 0.25, y, z));
  // vectorPoints.push(new THREE.Vector3(x + 0.25, y, z + 0.25));
  // vectorPoints.push(new THREE.Vector3(x + 0.25, y, z - 0.25));
  console.log(vectorPoints.length);

  let geometry = new THREE.BufferGeometry().setFromPoints(vectorPoints);

  let line = new THREE.Line(geometry, material);
  scene.add(line);
}

for (var i = -4; i < 59; i++) {
  for (var j = -19; j < 19; j++) {
    createCross([i, -3, j], lineMaterial);
  }
}



primitives.forEach((primitive)=>{
  primitive.forEach((element)=>scene.add(element))
})





camera.position.x=27
camera.position.z=5

const keyState = {};
document.addEventListener('keydown', (event) => {
  keyState[event.code] = true;
});

document.addEventListener('keyup', (event) => {
  keyState[event.code] = false;
});


function animate(){

  requestAnimationFrame(animate)

  car1.position.x+=0.1
  if (car1.position.x>80){
    car1.position.x=-10
  }
  if (keyState['ArrowUp']) {
    car.position.z -= 0.1;
  }
  if (keyState['ArrowDown']) {
    car.position.z += 0.1;
  }
  if (keyState['ArrowLeft']) {
    car.position.x -= 0.1;
  }
  if (keyState['ArrowRight']) {
    car.position.x += 0.1;
  }
  renderer.render(scene,camera)
}
animate()