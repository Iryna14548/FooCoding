'use strict';

function Dog() {
    this.name = 'Bruto';
    this.color = 'black';
    this.numLegs = 4;
}

const hound = new Dog();

if (typeof module !== 'undefined') {
    module.exports = hound;
}
