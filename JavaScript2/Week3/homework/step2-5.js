'use strict';

function multiplyAll(arr) {
    // eslint-disable-next-line
    let product = 1;
    let newArray = [];

    arr.forEach((items) => {
        items.forEach((item) => {
            newArray.push(item);
        });
    });

    product = newArray.reduce((accumulator, currentValue) => accumulator * currentValue, product);

    //console.log(arr, product);
    //console.log('newArray', newArray);

    return product;
}

const result = multiplyAll([[1, 2], [3, 4], [5, 6]]);
console.log(result); // 720

if (typeof module !== 'undefined') {
    module.exports = multiplyAll;
}
