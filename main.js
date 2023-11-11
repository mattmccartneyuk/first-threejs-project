import * as THREE from 'three';
import { Square } from './Models/square';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75,
    window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGL1Renderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

const cubeOne = new Square(1, 1, 1);
const CubeTwo = new Square(1, 1, 1);


scene.add(cubeOne);
scene.add(CubeTwo);

let top = 0.52;
let bottom = -0.52;

cubeOne.position.set(.1, top, 0);
CubeTwo.position.set(.1, bottom, 0)

camera.position.z = 4;

let switchFlag = false;

function redDown() {
    if (cubeOne.position.y > -0.52) {
        return cubeOne.position.y -= 0.01;
    }
}
function redUp() {
    if (cubeOne.position.y < 0.52) {
        return cubeOne.position.y += 0.01;
    }
}
function greenUp() {
    if (CubeTwo.position.y < 0.52) {
        CubeTwo.position.y += 0.01;
    }
}
function greenDown() {
    if (CubeTwo.position.y > -0.52) {
        CubeTwo.position.y -= 0.01;
    }
}

function animate() {
    requestAnimationFrame ( animate );

    if (switchFlag === true) {
        redDown();
        greenUp();
    } else if (switchFlag === false) {
        redUp();
    greenDown();
    }
    
    renderer.render( scene, camera );
}

animate();

document.addEventListener('keydown', keypress, false);
function keypress(event) {
    var keyCode = event.which;
    if (keyCode == 32) {
        if (switchFlag === true) {
            switchFlag = false;
        } else {
            switchFlag = true;
        }
    } 
}