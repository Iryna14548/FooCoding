'use strict';

function createBase(base) {
    console.log(base);

    const myFunc = (num) => {
        return num + base;
    };

    return myFunc;
}

const addSix = createBase(6);

console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27
/*  */
if (typeof module !== 'undefined') {
    module.exports = createBase;
}
