'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function makeUnique(arr) {
    const uniqueValues = [];

    arr.forEach((value) => {
        if (uniqueValues.includes(value) === false) {
            uniqueValues.push(value);
        }
    });

    console.log(arr);
    return uniqueValues;
}

const uniqueValues = makeUnique(values);
console.log(uniqueValues);

if (typeof module !== 'undefined') {
    module.exports = makeUnique;
}
