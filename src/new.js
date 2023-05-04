let score=0
var scoreboard=document.getElementById("score")
scoreboard.innerHTML=`Score : ${score}`



const scene=new THREE.Scene()
scene.background=new THREE.Color(0x21272e)

const camera=new THREE.PerspectiveCamera(
  75,window.innerWidth/window.innerHeight,0.1,1000
)

const renderer=new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth,window.innerHeight)

// orbit controls
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
car.position.set(23.25,-2.7,13)
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
let ecocar=new THREE.Object3D()

let ecocarGeometry = new THREE.BoxGeometry(20, 10, 3);
let ecocarMaterial = new THREE.MeshPhongMaterial({
  color: 0xB74242,
  shininess: 100,
  emissive: 0xFF0000,
  emissiveIntensity: 0.6,
});

let ecocarTopGeometry = new THREE.BoxGeometry(12, 8, 5);
let ecocarTopMaterial = new THREE.MeshPhongMaterial({
  color: 0xB74242,
  shininess: 100,
  emissive: 0x990000,
  emissiveIntensity: 0.7,
});

let ecocarBody = new THREE.Mesh(ecocarGeometry, ecocarMaterial);
ecocarBody.castShadow = true;
ecocarBody.receiveShadow = true;
ecocar.add(ecocarBody);


let ecocarTop = new THREE.Mesh(ecocarTopGeometry,ecocarTopMaterial);
ecocarTop.position.x -= 2;
ecocarTop.position.z += 3.5;
ecocarTop.castShadow = true;
ecocarTop.receiveShadow = true;
ecocar.add(ecocarTop);


ecocar.wheels = Array(4).fill(null);
  ecocar.wheels = ecocar.wheels.map((wheel, i) => {
    wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
    wheel.position.y = i < 2 ? 6 : -6;
    wheel.position.x = i % 2 ? 6 : -6;
    wheel.position.z = -3;
    ecocar.add(wheel);
    return wheel;
  });
  

ecocar.castShadow = true;
ecocar.receiveShadow = true;
// ecocar.position.set(23.25,-2.7,13)
ecocar.scale.set(0.05,0.05,0.05)
ecocar.rotateX(4.7)
// ecocar.rotateZ(-4.7)
// scene.add(ecocar)  

//Highway lane 1
let herd1=new THREE.Object3D()
for(i=0;i<2;i++){
    
    for(j=0;j<4;j+=2){
      let ecoclone=ecocar.clone()
      herd1.add(ecoclone)
      ecoclone.position.z+=i
      ecoclone.position.x+=j*getrandomint(5)
    }
}
herd1.position.set(-8,-2.7,-7.4)
scene.add(herd1)

//Highway lane 2
let herd2=new THREE.Object3D()
for(i=0;i<2;i++){
    for(j=0;j<4;j+=2){
      let ecoclone=ecocar.clone()
      ecoclone.rotateZ(3.1)
      herd2.add(ecoclone)
      ecoclone.position.z+=i
      ecoclone.position.x+=j*getrandomint(5)
    }
}
herd2.position.set(40,-2.7,-5.4)
scene.add(herd2)


//Highway lane 3
let herd3=new THREE.Object3D()
let herd4=new THREE.Object3D()
for(i=0;i<4;i++){
  let ecoclone=ecocar.clone()
  herd3.add(ecoclone)
  ecoclone.position.z+=i
  ecoclone.position.x+=i*getrandomint(7)   
}
herd3.position.set(-1,-2.7,0.5)
scene.add(herd3)

for(i=0;i<4;i++){
  let ecoclone=ecocar.clone()
  herd4.add(ecoclone)
  ecoclone.position.z+=i
  ecoclone.position.x+=i*getrandomint(7)  
}
herd4.position.set(-8,-2.7,0.5)
scene.add(herd4)

//Highway lane 4
let herd5=new THREE.Object3D()
let herd6=new THREE.Object3D()
for(i=0;i<4;i++){
  let ecoclone=ecocar.clone()
  ecoclone.rotateZ(3.1)
  herd5.add(ecoclone)
  ecoclone.position.z+=i
  ecoclone.position.x+=i*getrandomint(7)
}
herd5.position.set(40,-2.7,5.5)
scene.add(herd5)

for(i=0;i<4;i++){
  let ecoclone=ecocar.clone()
  ecoclone.rotateZ(3.1)
  herd6.add(ecoclone)
  ecoclone.position.z+=i
  ecoclone.position.x+=i*getrandomint(7)
}

herd6.position.set(52,-2.7,5.5)
scene.add(herd6)

let car1=car.clone()
car1.position.set(-10,-2.7,-7.5)
car1.scale.set(0.05,0.05,0.05)
car1.rotateZ(4.7)
// scene.add(car1)


truck.castShadow = true;
truck.receiveShadow = true;
truck.position.set(62,-2.5,-3.5)
truck.scale.set(0.06,0.06,0.06)
truck.rotateX(4.7)

truck.rotateZ(3.1)
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


//Tunnel 
const tunnel=new THREE.Object3D()
//box 1
const boxGeometry1 = new THREE.BoxGeometry(20,3,1);
const box1 = new THREE.Mesh(boxGeometry1, material1);
box1.position.z+=2.6
tunnel.add(box1)
//box 2
const boxGeometry2 = new THREE.BoxGeometry(20,3,4);
const box2 = new THREE.Mesh(boxGeometry2, material1);
box2.position.z+=9.1
tunnel.add(box2)
//box 3
const boxGeometry3 = new THREE.BoxGeometry(20,3,4);
const box3 = new THREE.Mesh(boxGeometry2, material1);
box3.position.z+=-3.9
tunnel.add(box3)
//box 4
const box4=new THREE.Mesh(boxGeometry1,material1)
box4.position.z+=-10.4
tunnel.add(box4)
//box 5
const boxGeometry4=new THREE.BoxGeometry(20,3,3)
const box5=new THREE.Mesh(boxGeometry4,material1)
box5.position.z+=-14.4
tunnel.add(box5)
//box 6
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


//Highway lines
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
// var spotlight = new THREE.SpotLight(0xffffff, 1, 100, Math.PI / 4, 0.5, 2);

// pole.add(spotlight)
// spotlight.position.x+=0.5
// spotlight.position.y+=1.8

pole.rotateY(-1.6)

//Pole row 1
for(i=8;i<40;i+=20){
  let pole1=pole.clone()
  pole1.position.set(i, -2, -8.2);
  scene.add(pole1)
}
//Pole row 2
for(i=18;i<40;i+=20){
  let pole2=pole.clone()
  pole2.position.set(i, -2, -3.8);
  pole2.rotateY(3)
  scene.add(pole2)
}
//Pole row 3
for(i=8;i<40;i+=20){
  let pole1=pole.clone()
  pole1.position.set(i, -2, -0.1);
  scene.add(pole1)
}
//Pole row 4
for(i=18;i<40;i+=20){
  let pole2=pole.clone()
  pole2.position.set(i, -2, 4.1);
  pole2.rotateY(3)
  scene.add(pole2)
}
//Pole row 5
for(i=8;i<40;i+=20){
  let pole1=pole.clone()
  pole1.position.set(i, -2, 4.9);
  scene.add(pole1)
}
//Pole row 6
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


//Text
const fontloader=new THREE.FontLoader()
fontloader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json',function(font){
    const text=new THREE.Object3D()
    const geometry=new THREE.TextGeometry('HIGHWAY',{
        font: font,
        size: 2,
        height: 2,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.05,
        bevelOffset: 0,
        bevelSegments: 8
    })
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const text1 = new THREE.Mesh(geometry, material);
    text.add(text1)
    scene.add(text);
    text.position.set(17.6,3,-20)  
})



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


function checkCollision(object1, object2) {
  let box1 = new THREE.Box3().setFromObject(object1);
  let box2 = new THREE.Box3().setFromObject(object2);
  return box1.intersectsBox(box2);
}

function resetgame(){
  score=0
  scoreboard.innerHTML=`Score : ${score}`
  camera.position.x=23 
  camera.position.z=23
  camera.position.y=6
  score=0

  car.position.set(23.25,-2.5,13)
}

function incrementscore(){
  score+=1
  scoreboard.innerHTML=`Score : ${score}`
  car.position.set(23.25,-2.5,13)
  camera.position.x=23 
  camera.position.z=23
  camera.position.y=6
}

function getrandomint(maxnum){
     return Math.floor(Math.random()*maxnum)
}

function animate(){

  requestAnimationFrame(animate)
  
  // train.position.x+=0.1
  // if (train.position.x>80){
  //   train.position.x=0
  // }
  // if (checkTouching(carBody,trainbox)) {
  //   car.position.set(23.25,-2,13)
  //   }
  herd1.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      // Do something with the mesh, such as change its material
      if (checkCollision(car,child)) {
        // take appropriate action, such as stopping the game
        console.log("Collision detected!");
        resetgame()
      }
    }
  });
  herd2.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      // Do something with the mesh, such as change its material
      if (checkCollision(car,child)) {
        // take appropriate action, such as stopping the game
        console.log("Collision detected!");
        resetgame()
      }
    }
  });
  //detect collision for herd2
  herd3.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      // Do something with the mesh, such as change its material
      if (checkCollision(car,child)) {
        // take appropriate action, such as stopping the game
        console.log("Collision detected!");
        resetgame()
      }
    }
  });
  herd4.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      // Do something with the mesh, such as change its material
      if (checkCollision(car,child)) {
        // take appropriate action, such as stopping the game
        console.log("Collision detected!");
        resetgame()
      }
    }
  });
  herd5.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      // Do something with the mesh, such as change its material
      if (checkCollision(car,child)) {
        // take appropriate action, such as stopping the game
        console.log("Collision detected!");
        resetgame()
      }
    }
  });
  herd6.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      // Do something with the mesh, such as change its material
      if (checkCollision(car,child)) {
        // take appropriate action, such as stopping the game
        console.log("Collision detected!");
        resetgame()
      }
    }
  });
  if (checkCollision(car,truckTop)){
    console.log('truck collided!')
    resetgame()
  }
  car1.position.x+=0.1
  if (car1.position.x>80){
    car1.position.x=-10
  }
  herd1.position.x+=0.2
  if (herd1.position.x>80){
    herd1.position.x=-10
  }
  herd2.position.x-=0.2
  if (herd2.position.x<-1){
    herd2.position.x=50
  }
  herd3.position.x+=0.1
  if (herd3.position.x>35){
    herd3.position.x=-1
  }
  herd4.position.x+=0.1
  if (herd4.position.x>35){
    herd4.position.x=-1
  }
  herd5.position.x-=0.1
  if (herd5.position.x<-1){
    herd5.position.x=50
  }
  herd6.position.x-=0.1
  if(herd6.position.x<-1){
    herd6.position.x=62
  }
  // truck.position.x-=0.1
  // if (truck.position.x<-10){
  //   truck.position.x=62
  // }
  if(car.position.z<-12){
    incrementscore()
  }
  
  //Arrow Controls
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


