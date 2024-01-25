'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
    let newArray = [];

    arr.forEach((items) => {
        items.forEach((item) => {
            newArray.push(item);
        });
    });
    //console.log(arr);
    return newArray;
}

function flattenArray3d(arr) {
    let newArray = [];
    //console.log(arr);

    arr.forEach((item) => {
        if (Array.isArray(item)) {
            const result = flattenArray3d(item);
            newArray.push(...result);
        } else {
            newArray.push(item);
        }
    });

    return newArray;

    console.log(arr);
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

if (typeof module !== 'undefined') {
    module.exports = {
        flattenArray2d,
        flattenArray3d,
    };
}
