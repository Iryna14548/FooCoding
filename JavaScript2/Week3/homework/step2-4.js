'use strict';

// class Dog {
//     constructor() {
//         this.name = 'Bruto';
//         this.color = 'black';
//         this.numLegs = 4;
//     }
// }

function Dog() {
    this.name = 'Bruto';
    this.color = 'black';
    this.numLegs = 4;
}

const hound = new Dog();

if (typeof module !== 'undefined') {
    module.exports = hound;
}
