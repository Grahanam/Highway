const scene=new THREE.Scene()
scene.background=new THREE.Color(0x21272e)

const camera=new THREE.PerspectiveCamera(
  75,window.innerWidth/window.innerHeight,0.1,1000
)

const renderer=new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth,window.innerHeight)

// const controls = new THREE.OrbitControls(camera, renderer.domElement);
// controls.target.set(27, 0, 0);
// controls.listenToKeyEvents(window);

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

let truckTopGeometry = new THREE.BoxGeometry(6, 9, 6);
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
car.position.set(23.25,-2,13)
car.scale.set(0.05,0.05,0.05)
car.rotateX(4.7)
car.rotateZ(-4.7)
scene.add(car)  


let truckBody = new THREE.Mesh(truckGeometry, truckMaterial);
truckBody.castShadow = true;
truckBody.receiveShadow = true;
truck.add(truckBody);


let truckTop = new THREE.Mesh(truckTopGeometry, truckTopMaterial);
truckTop.position.x -=-5;
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


truck.castShadow = true;
truck.receiveShadow = true;
truck.position.set(62,-3,-3.5)
truck.scale.set(0.06,0.06,0.06)
truck.rotateX(4.7)

truck.rotateZ(3.3)
scene.add(truck) 

//Floor

const floorGeometry=new THREE.PlaneGeometry(33,4);
const floor=new THREE.Mesh(floorGeometry,material1)
scene.add(floor)
floor.position.set(23,-3,-2);
floor.rotation.x-=Math.PI/2;

const floor1=new THREE.Mesh(floorGeometry,material1)
scene.add(floor1)
floor1.position.set(23,-3,11)
floor1.rotation.x-=Math.PI/2;

const smallfloorGeometry=new THREE.PlaneGeometry(33,1)
const floor2=new THREE.Mesh(smallfloorGeometry,material1)
scene.add(floor2)
floor2.position.set(23,-3,4.5)
floor2.rotation.x-=Math.PI/2;

const floor3=new THREE.Mesh(smallfloorGeometry,material1)
scene.add(floor3)
floor3.position.set(23,-3,-8.5)
floor3.rotation.x-=Math.PI/2;

const mediumfloorGeometry=new THREE.PlaneGeometry(33,3)

const floor4=new THREE.Mesh(mediumfloorGeometry,material1)
scene.add(floor4)
floor4.position.set(23,-3,-12.5)
floor4.rotation.x-=Math.PI/2


const primitives=[];


//box 1
const tunnel=new THREE.Object3D()


const boxGeometry1 = new THREE.BoxGeometry(20,3,1);
const box1 = new THREE.Mesh(boxGeometry1, material1);
// box1.position.set(5,-3, 7.2);
box1.position.z+=2.6

tunnel.add(box1)


//box 2
const boxGeometry2 = new THREE.BoxGeometry(20,3,4);
const box2 = new THREE.Mesh(boxGeometry2, material1);
// box2.position.set(5,-3, 1.9);
box2.position.z+=9.1

tunnel.add(box2)


//box 3
const boxGeometry3 = new THREE.BoxGeometry(20,3,4);
const box3 = new THREE.Mesh(boxGeometry2, material1);
// box3.position.set(5,-3, -6.4);
box3.position.z+=-3.9
tunnel.add(box3)

const box4=new THREE.Mesh(boxGeometry1,material1)
box4.position.z+=-10.4
tunnel.add(box4)

const boxGeometry4=new THREE.BoxGeometry(20,3,3)
const box5=new THREE.Mesh(boxGeometry4,material1)
box5.position.z+=-14.4
tunnel.add(box5)

const boxGeometry5=new THREE.BoxGeometry(20,1,27)
const box6=new THREE.Mesh(boxGeometry5,material1)
box6.position.y+=2
box6.position.z+=-2.4
tunnel.add(box6)

tunnel.position.set(-3,-1.5,1.9)
scene.add(tunnel)
const tunnel2=tunnel.clone()
tunnel2.position.set(49,-1.5,1.9)
scene.add(tunnel2)

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
  

  let geometry = new THREE.BufferGeometry().setFromPoints(vectorPoints);

  let line = new THREE.Line(geometry, material);
  scene.add(line);
}

for (var i = -30; i < 80; i++) {
  for (var j = -14; j < 14; j++) {
    createCross([i, -3, j], lineMaterial);
  }
}

// primitives.forEach((primitive)=>{
//   primitive.forEach((element)=>scene.add(element))
// })

// //street light
// const streetLights = new THREE.Object3D();
// scene.add(streetLights);

// // Add first street light
// const pole1Geometry = new THREE.BoxGeometry(0.2, 10, 0.2);
// const pole1Material = new THREE.MeshPhongMaterial({ color: 0x808080 });
// const pole1 = new THREE.Mesh(pole1Geometry, pole1Material);
// pole1.position.set(10, -2.5, -10);
// streetLights.add(pole1);

// const bulb1Geometry = new THREE.SphereGeometry(0.5, 16, 16);
// const bulb1Material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
// const bulb1 = new THREE.Mesh(bulb1Geometry, bulb1Material);
// bulb1.position.set(10, 6, -10);
// streetLights.add(bulb1);


// create a new light
var light1 = new THREE.PointLight(0xffffff, 1, 100);
light1.position.set(0, -4, 0);
scene.add(light1);

// create a new street light object
var pole=new THREE.Object3D()
var geometry = new THREE.CylinderGeometry(0.1, 0.1, 4, 16);
var polegeometry=new THREE.CylinderGeometry(0.1,0.1,2,8);

var material = new THREE.MeshStandardMaterial({color: 0x777777});
var poletop=new THREE.Mesh(polegeometry,material);
var polebase = new THREE.Mesh(geometry, material);
pole.add(polebase)
pole.add(poletop)
poletop.position.x+=0.5
poletop.position.y+=1.8
poletop.rotateZ(5)
pole.position.set(20, -2, -0.1);
pole.scale.set(0.5,0.5,0.5)
// scene.add(pole);

// create a new spotlight object
var spotlight = new THREE.SpotLight(0xffffff, 1, 100, Math.PI / 4, 0.5, 2);

pole.add(spotlight)
spotlight.position.x+=0.5
spotlight.position.y+=1.8

pole.rotateY(-1.6)

for(i=8;i<40;i+=20){
  let pole1=pole.clone()
  pole1.position.set(i, -2, -8.2);
  scene.add(pole1)
}

for(i=18;i<40;i+=20){
  let pole2=pole.clone()
  pole2.position.set(i, -2, -3.8);
  pole2.rotateY(3)
  scene.add(pole2)
}

for(i=8;i<40;i+=20){
  let pole1=pole.clone()
  pole1.position.set(i, -2, -0.1);
  scene.add(pole1)
}

for(i=18;i<40;i+=20){
  let pole2=pole.clone()
  pole2.position.set(i, -2, 4.1);
  pole2.rotateY(3)
  scene.add(pole2)
}

for(i=8;i<40;i+=20){
  let pole1=pole.clone()
  pole1.position.set(i, -2, 4.9);
  scene.add(pole1)
}

for(i=18;i<40;i+=20){
  let pole2=pole.clone()
  pole2.position.set(i, -2, 9.1);
  pole2.rotateY(3)
  scene.add(pole2)
}

let trainwheelGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.5, 12);
let trainwheelMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });

const train=new THREE.Object3D()
const trainboxGeometry=new THREE.BoxGeometry(5,1.5,1.8)
const trainbox=new THREE.Mesh(trainboxGeometry,material1)


trainbox.wheels = Array(4).fill(null);
  trainbox.wheels = trainbox.wheels.map((wheel, i) => {
    wheel = new THREE.Mesh(trainwheelGeometry, trainwheelMaterial);
    wheel.position.z = i < 2 ? 0.6 : -0.5;
    wheel.position.x= i % 2 ? 1.5 : -2;
    wheel.position.y = -0.6;
    wheel.rotateX(1.5)
    trainbox.add(wheel);
    return wheel;
  });

train.add(trainbox)

let trainbox1

for(i=0;i<20;i+=5.3){
  trainbox1=trainbox.clone()
  train.add(trainbox1)
  trainbox1.position.x+=i
}

scene.add(train)

train.position.set(20,-2.1,-10)


camera.position.x=23
camera.position.z=23
camera.position.y=6
camera.rotateX(-0.2)

const keyState = {};
document.addEventListener('keydown', (event) => {
  keyState[event.code] = true;
});

document.addEventListener('keyup', (event) => {
  keyState[event.code] = false;
});

// function checkTouching(a, d) {
//   let b1 = a.position.y - a.geometry.parameters.height / 2;
//   let t1 = a.position.y + a.geometry.parameters.height / 2;
//   let r1 = a.position.x + a.geometry.parameters.width / 2;
//   let l1 = a.position.x - a.geometry.parameters.width / 2;
//   let f1 = a.position.z - a.geometry.parameters.depth / 2;
//   let B1 = a.position.z + a.geometry.parameters.depth / 2;
//   let b2 = d.position.y - d.geometry.parameters.height / 2;
//   let t2 = d.position.y + d.geometry.parameters.height / 2;
//   let r2 = d.position.x + d.geometry.parameters.width / 2;
//   let l2 = d.position.x - d.geometry.parameters.width / 2;
//   let f2 = d.position.z - d.geometry.parameters.depth / 2;
//   let B2 = d.position.z + d.geometry.parameters.depth / 2;
//   console.log(a.geometry.parameters.height)
//   if (t1 < b2 || r1 < l2 || b1 > t2 || l1 > r2 || f1 > B2 || B1 < f2) {
//     return false;
//   }
//   return true;
// }
// console.log(car.geometry)





function animate(){

  requestAnimationFrame(animate)
  
  train.position.x+=0.1
  if (train.position.x>80){
    train.position.x=0
  }
  // if (checkTouching(carBody,trainbox)) {
  //   car.position.set(23.25,-2,13)
  //   }

  car1.position.x+=0.1
  if (car1.position.x>80){
    car1.position.x=-10
  }
  truck.position.x-=0.1
  if (truck.position.x<-10){
    truck.position.x=62
  }

  // if (car.overlaps(car1)){
  //   car.position.set(23.25,-2,13)
  // }
  

  if (keyState['ArrowUp']) {
    car.position.z -= 0.1;
    camera.position.z-=0.1
  }
  if (keyState['ArrowDown']) {
    car.position.z += 0.1;
    camera.position.z+=0.1
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