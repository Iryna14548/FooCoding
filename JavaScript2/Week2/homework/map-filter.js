'use strict';

// function doubleOddNumbers(numbers) {
//   const newNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//       newNumbers.push(numbers[i] * 2);
//     }
//   }
//   return newNumbers;
// }

// const myNumbers = [1, 2, 3, 4];
// console.log(doubleOddNumbers(myNumbers)); // ==> [2, 6]

function doubleOddNumbers(numbers) {
    const newNumbers = numbers.filter((number) => number % 2 == 1).map((number) => number * 2);

    return newNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line

if (typeof module !== 'undefined') {
    module.exports = {
        myNumbers,
        doubleOddNumbers,
    };
}
