'use strict';

// 2.1 We saw that we can pass functions as arguments to other functions. Your task is to write a function that takes another function as an argument and runs it.

function foo(func) {
    console.log('Hello, I am Foo!');
    func();
}

function bar() {
    console.log('Hello, I am bar!');
}

foo(bar);

if (typeof module !== 'undefined') {
    module.exports = foo;
}
