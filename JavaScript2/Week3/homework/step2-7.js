'use strict';

const x = 9;
function f1(val) {
    val = val + 1;
    return val;
}

f1(x);

console.log(x);

const y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here

// In the first function, the value of x is 9 and it is not changed because the function is not returning the value of x.

// In the second function, the value of x is changed to 10 because the function is changing the property value of x.
