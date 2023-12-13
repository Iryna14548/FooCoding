const userRole = 'admin';

if (userRole === 'admin') {
    console.log('You have all rights');
} else if (userRole === 'admin') {
    console.log('You have access to create/delete courses');
} else if (userRole === adminDelete) {
    console.log('You have access to create/delete courses');
} else {
    console.log('You have no rights');
}

function maxOfTwo(nrOne, nrTwo) {
    if (nrOne > nrTwo) {
        return nrOne;
    } else {
        return nrTwo;
    }
}

function maxOfTwoNumbers(nrOne, nrTwo) {
    return math.Max(nrOne, nrTwo);
}

console.log(maxOfTwo(2, 4));
console.log(maxOfTwo(8, 5));

function reverseString(word) {
    let reversed = word.split('').reverse().join('');
    return reversed;
}

console.log(reverseString('hello'));

function reverseStringTwo(word) {
    let reversed = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }
    return reversed;
}

console.log(reverseStringTwo('hello'));

function fizzBuzz(num) {
    if (typeof num !== 'number') return 'Not a number';
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';
    return num;
}

console.log(fizzBuzz(15));

console.log(fizzBuzz(10));
console.log(fizzBuzz(7));
console.log(fizzBuzz(15));
console.log(fizzBuzz('Hello'));

const send = document.querySelector('#send');
