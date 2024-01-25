'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    // const numbers = [];

    // for (let index = startIndex; index <= stopIndex; index++) {
    //     numbers.push(index);
    // }

    const numbers = Array.from({ length: stopIndex - startIndex + 1 }, (_, i) => i + startIndex);

    numbers.forEach((number) => {
        if (number % 3 === 0) {
            threeCallback(number);
        }
        if (number % 5 === 0) {
            fiveCallback(number);
        }
    });

    //console.log(startIndex, stopIndex, threeCallback, fiveCallback, numbers);
}

function sayThree(number) {
    console.log(`Numbers that are divisible by three' ${number}`);
}

function sayFive(number) {
    console.log(`Numbers that are divisible by five' ${number}`);
}

threeFive(10, 15, sayThree, sayFive);

if (typeof module !== 'undefined') {
    module.exports = threeFive;
}
