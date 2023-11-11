import * as THREE from 'three';
let cubeColor = { color: 0xff0033 } ;
let counter = 1;

export class Square {
    #geometry;
    #material;

    constructor(width, height, depth) {
        this.#geometry = new THREE.BoxGeometry(1, 1, 1);
        if (counter !== 2) {
                this.#material = new THREE.MeshBasicMaterial( cubeColor );
        } else {
            this.#material = new THREE.MeshBasicMaterial( {color: 0x00ff00 })
        }
        counter++;
        return new THREE.Mesh(this.#geometry, this.#material);    

    }
}