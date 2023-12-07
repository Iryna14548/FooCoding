//1. Write a console.log statement saying "Hello World!" for each language that you know.
console.log("Hello World!"); // English
console.log("Hej Världen"); // Swedish
console.log("Привіт світ!"); //  Ukrainian

//2. Consider the following code:
console.log("I'm awesome");

//3. Declare a variable x and initialize it with an integer, using these exact steps:
let x;
console.log("the value of my variable x will be: undefined");
console.log(x);
x = 5;
console.log("the value of my variable x will be: 5");
console.log(x);

//4. Declare a variable y and assign a string to it.
let y = "FooCoding!";
console.log("the value of my string will be: FooCoding!");
console.log(y);
y = "NEW FooCoding!";
console.log("the value of my string will be: NEW FooCoding!");
console.log(y);

//5. How do you round the number 7.25, to the nearest integer (i.e., whole number)?
let z = 7.25;
console.log(z);
let a = Math.round(z);
console.log(a);
let highest = Math.max(a, z);
console.log(highest);

//6. Arrays!
const books = [];
console.log("the value of my array will be: array");
console.log(books);
const favoriteAnimals = ["rat", "cat", "butterfly"];
console.log(favoriteAnimals);
favoriteAnimals.push("baby pig");
console.log(favoriteAnimals);

//7. More strings
let myString = "this is a test";
console.log(myString);
console.log(myString.length);

//8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.

let foo = 3;
let bar = "test";
let ping = true;
let pong = {};

console.log("The value of my variable foo is: " + foo);
console.log("The value of my variable bar is: " + bar);
console.log("The value of my variable ping is: " + ping);
console.log("The value of my variable pong is: " + pong);

console.log("The type of my variable foo is: number");
console.log("The type of my variable bar is: string");
console.log("The type of my variable ping is: boolean");
console.log("The type of my variable pong is: object");

console.log("The type of my variable foo is: " + typeof foo);
console.log("The type of my variable bar is: " + typeof bar);
console.log("The type of my variable ping is: " + typeof ping);
console.log("The type of my variable pong is: " + typeof pong);

//8.5 Now compare the types of your different variables with one another.

const compareTypes = (a, b) => {
    if (typeof a === typeof b) {
        console.log("SAME TYPE");
    } else {
        console.log("Not the same type");
    }
};

console.log(typeof foo === typeof bar);
console.log(typeof foo === typeof ping);
console.log(typeof foo === typeof foo);
console.log(typeof bar === typeof ping);
compareTypes(foo, bar);
compareTypes(foo, ping);
compareTypes(foo, pong);
compareTypes(bar, ping);
compareTypes(bar, bar);

//9. If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?
let b = 7;
b = b % 3;
console.log(b); // 1

//10. Write a program to answer the following questions:
const multipleTypes = ["ira", true, 7, { name: "ira" }];
console.log(multipleTypes);

console.log(675 / 0 === 45 / 0); // true
console.log(675 / 0 === Infinity); // true
