'use strict';

// Use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
    let result = '';

    for (let index = 0; index < num; index++) {
        result += str;
    }

    //console.log(str, num, result);

    return result;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// Use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
    let result = '';
    let index = 0;

    while (index < num) {
        result += str;
        index++;
    }

    //console.log(str, num, result);

    return result;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// Use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
    if (num <= 0) {
        return '';
    }

    let result = '';
    let index = 0;

    do {
        index++;
        result = result += str;
    } while (index < num);

    //console.log(str, num, result);

    return result;
}

console.log('do-while', repeatStringNumTimesWithDoWhile('abc', 3));

if (typeof module !== 'undefined') {
    module.exports = {
        repeatStringNumTimesWithFor,
        repeatStringNumTimesWithWhile,
        repeatStringNumTimesWithDoWhile,
    };
}
